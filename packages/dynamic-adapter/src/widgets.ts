import { IFeature, IConnection } from "@dapplets/dapplet-extension";

import { IWidgetBuilderConfig, Context } from "./types";

export class WidgetBuilder {
    contextName: string;
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    events: { [key: string]: (node: any, ctx: any, emitter: Function, on?: Function) => void };
    contextBuilder: (node: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();
    contexts = new WeakMap<Node, Context>();
    eventHandler: (event: string, args: any[], target: any) => void = null;
    executedNodes = new WeakMap<Node, WeakSet<any>>();
    widgetsByContextId = new Map<string, Set<any>>();
    theme: undefined | (() => string) = null;
    childrenContexts: string[] | null = null;

    //ToDo: widgets

    constructor(contextName: string, widgetBuilderConfig: IWidgetBuilderConfig) {
        Object.assign(this, widgetBuilderConfig);
        this.contextName = contextName;
    }

    public emitEvent(target: any, event: string, context: Context, args: any[]) {
        this.eventHandler?.(event, args, target);
        context.eventHandlers[event]?.forEach(h => h(...args));
    }

    private _compareObjects(a: any, b: any) {
        for (const key in a) {
            if (a[key] !== b[key]) return false;
        }
        return true;
    }

    private _tryParseContext(el: Element, parent: any) {
        try {
            const ctx = this.contextBuilder(el);
            ctx.parent = parent;
            return ctx;
        } catch (err) {
            // ToDo: what need to do in this cases?
            console.warn("Cannot parse context");
            return { parent };
        }
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(featureConfigs: any[], container: Element, widgetBuilders: WidgetBuilder[], parentContext: any) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);
        if (contextNodes.length === 0) return;

        const newParsedContexts = [];
        const newFeatureConfigs = [];

        for (const contextNode of contextNodes) {
            const isNewContext = !this.contexts.has(contextNode);
            const context: Context = isNewContext
                ? {
                    parsed: this._tryParseContext(contextNode, parentContext),
                    eventHandlers: {},
                }
                : this.contexts.get(contextNode);

            // ToDo: refactor isNew checking
            if (isNewContext) {
                newParsedContexts.push(context);
            } else {
                const newContext = this._tryParseContext(contextNode, parentContext);
                if (!this._compareObjects(context.parsed, newContext)) {
                    
                    if (newContext.id !== context.parsed.id) {
                        this.executedNodes.delete(contextNode);
                        this.widgetsByContextId.get(context.parsed.id)?.forEach(x => x.unmount());
                    }

                    const oldContext = Object.assign({}, context.parsed);
                    Object.assign(context.parsed, newContext); // Refreshing of context without link destroying
                    this.emitEvent(null, 'context_changed', context, [null, newContext, oldContext]);
                }
            }

            if (isNewContext) {
                this.contexts.set(contextNode, context);
                for (const event in this.events) {
                    const emitHandler = (target, ...args) => this.emitEvent(target, event, context, args);
                    const onHandler = (event, handler) => {
                        if (!context.eventHandlers[event]) context.eventHandlers[event] = [];
                        context.eventHandlers[event].push(handler);
                    }
                    this.events[event].apply(this, [contextNode, context.parsed, emitHandler, onHandler]);
                }
            }

            for (let i = 0; i < featureConfigs.length; i++) {
                const featureConfig = featureConfigs[i];
                // Prevent multiple execution of featureConfig on one context
                if (!this.executedNodes.has(contextNode)) this.executedNodes.set(contextNode, new WeakSet());
                if (this.executedNodes.get(contextNode).has(featureConfig)) continue;
                this.executedNodes.get(contextNode).add(featureConfig);

                // is new feature?
                if (this.widgets.get(featureConfig) === undefined) {
                    this.widgets.set(featureConfig, []);
                    newFeatureConfigs.push(featureConfig);
                }

                if (featureConfig[this.contextName] === undefined) continue;

                const insPointConfig = featureConfig[this.contextName];

                if (Array.isArray(insPointConfig)) {
                    this._insertWidgets(insPointConfig, featureConfig, this.contextName, context, contextNode);
                } else if (typeof insPointConfig === 'function') {
                    const arr = insPointConfig(context.parsed);
                    const insert = (arr) => this._insertWidgets(arr, featureConfig, this.contextName, context, contextNode);
                    (arr instanceof Promise) ? arr.then(insert) : insert(arr);
                } else {
                    featureConfig[this.contextName] = undefined;
                    console.error(`Invalid configuration of "${this.contextName}" insertion point. It must be an array of widgets or function.`);
                }
            }

            if (this.childrenContexts) {
                for (const childrenContext of this.childrenContexts) {
                    const wb = widgetBuilders.find(x => x.contextName === childrenContext);
                    wb.updateContexts(featureConfigs, contextNode, widgetBuilders, context.parsed);
                }
            }
        }

        Core.contextStarted(newParsedContexts.map((ctx) => ctx.parsed));
        newParsedContexts.forEach(ctx => this.emitEvent(null, 'context_changed', ctx, [null, ctx.parsed, null]));

        const allContexts = contextNodes.map(cn => this.contexts.get(cn)).filter(cn => !!cn);
        newFeatureConfigs.forEach((fc) =>
            allContexts.forEach(
                (ctx) =>
                    newParsedContexts.indexOf(ctx) === -1 &&
                    this.emitEvent(fc, 'context_changed', ctx, [fc, ctx.parsed, null])
            )
        );

        return newParsedContexts;
    }

    private _insertWidgets(insPointConfig: any, featureConfig: any, insPointName: string, context: Context, contextNode: Element) {
        if (insPointConfig === null || insPointConfig === undefined) return;
        
        const widgetConstructors = Array.isArray(insPointConfig) ? insPointConfig : [insPointConfig];
        
        for (const widgetConstructor of widgetConstructors) {
            const contextIds = featureConfig.contextIds || [];

            if (contextIds.length === 0 || contextIds.indexOf(context.parsed.id) !== -1) {
                if (typeof widgetConstructor !== 'function') {
                    //console.error(`Invalid widget configuration in the insertion point "${insPointName}". It must be WidgetConstructor instance.`);
                    continue;
                }
                const insertedWidget = widgetConstructor(this, insPointName, featureConfig.orderIndex, contextNode);
                if (!insertedWidget) continue;
                
                const registeredWidgets = this.widgets.get(featureConfig);
                registeredWidgets.push(insertedWidget);
                this.widgets.set(featureConfig, registeredWidgets);

                if (context.parsed.id !== undefined) {
                    if (!this.widgetsByContextId.has(context.parsed.id)) this.widgetsByContextId.set(context.parsed.id, new Set<any>());
                    if (!this.widgetsByContextId.get(context.parsed.id).has(insertedWidget)) this.widgetsByContextId.get(context.parsed.id).add(insertedWidget);
                }
            }
        }
    }
}