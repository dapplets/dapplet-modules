import { IFeature, IConnection } from "@dapplets/dapplet-extension";

import { IWidgetBuilderConfig, Context } from "./types";

interface IConfig {
    orderIndex: number,
    ['string']: (ctx: string) => any[] | any,
}

export class WidgetBuilder {
    contextName: string;
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    events: { [key: string]: (node: any, ctx: any, emitter: Function, on?: Function) => void };
    contextBuilder: (node: any) => any;
    observer: MutationObserver = null;
    eventHandler: (event: string, args: any[], target: any) => void = null;
    theme: undefined | (() => string) = null;
    childrenContexts: string[] | null = null;

    private executedNodes = new WeakMap<Node, WeakSet<any>>();
    private widgetsByContextId = new Map<string, Set<any>>();
    private widgets = new Map<IFeature, any[]>();
    public contexts = new WeakMap<Node, Context>(); // ToDo: make private

    //ToDo: widgets

    constructor(contextName: string, widgetBuilderConfig: IWidgetBuilderConfig) {
        Object.assign(this, widgetBuilderConfig);
        this.contextName = contextName;
    }

    public emitEvent(target: any, event: string, context: Context, args: any[]) {
        this.eventHandler?.(event, args, target);
        context.eventHandlers[event]?.forEach(h => h(...args));
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(featureConfigs: any[], container: Element, widgetBuilders: WidgetBuilder[], parentContext: any) {
        const contextNodes = this.contextSelector ? Array.from(container?.querySelectorAll(this.contextSelector) || []) : [container];
        if (contextNodes.length === 0) return;

        const newParsedContexts = [];
        const newFeatureConfigs = [];

        for (const contextNode of contextNodes) {
            const isNewContext = !this.contexts.has(contextNode);
            const context: Context = isNewContext
                ? {
                    parsed: this._tryParseContext(contextNode, parentContext, widgetBuilders),
                    eventHandlers: {},
                }
                : this.contexts.get(contextNode);
            
            if (!context.parsed) continue;

            // ToDo: refactor isNew checking
            if (isNewContext) {
                newParsedContexts.push(context);
            } else {
                const newContext = this._tryParseContext(contextNode, parentContext, widgetBuilders);

                if (!newContext) {
                    const oldId = this.contexts.get(contextNode).parsed.id;
                    this.contexts.delete(contextNode);
                    this.executedNodes.delete(contextNode);
                    this.widgetsByContextId.get(oldId)?.forEach(x => x.unmount());
                    continue;
                }

                if (!this._compareObjects(context.parsed, newContext)) {

                    if (newContext.id !== context.parsed.id) {
                        // ToDo: think about a neccessary of calling this.contexts.delete(contextNode)
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

                for (const childrenContext of this.childrenContexts ?? []) {
                    const wb = widgetBuilders.find(x => x.contextName === childrenContext);
                    Object.values(featureConfig).forEach((fn) => {
                        if (typeof fn !== 'function') return;
                        const widgets = fn(context.parsed);
                        const insert = (widgets: any[] | any) => {
                            (Array.isArray(widgets) ? widgets : [widgets])
                                .filter((widget) => !Array.isArray(widget) && typeof widget === 'object')
                                .forEach((configsWrapper) => {
                                    Object.entries(configsWrapper).forEach(([key, value]) => {
                                        if (childrenContext === key) {
                                            featureConfig[key] = value; // ToDo: [POTENTIAL BUG] unclear consequences of overwriting configurations of child contexts
                                            wb.updateContexts([featureConfig], contextNode, widgetBuilders, context.parsed);
                                        }
                                    });
                                });
                        };
                        (widgets instanceof Promise) ? widgets.then(insert) : insert(widgets);
                    });
                }
            }
        }

        Core.contextStarted(newParsedContexts.map((ctx) => ctx.parsed), document.location.hostname);
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

    public findWidget(config: any, ctx: any, id: any) {
        const widgets = this.widgets.get(config);
        if (!widgets) return null;

        const widget = widgets.find(x => x.state.ctx === ctx && x.state.id === id);
        if (!widget) return null;

        return widget.state;
    }

    public unmountWidgets(config: any) {
        const widgets = this.widgets.get(config);
        if (!widgets || widgets.length === 0) return;
        widgets.forEach(w => w.unmount());
        const container = document.querySelector(this.containerSelector);
        const contextNodes = this.contextSelector ? Array.from(container?.querySelectorAll(this.contextSelector) || []) : [container];
        if (contextNodes.length === 0) return;
        for (const contextNode of contextNodes) {
            if (this.executedNodes.get(contextNode)?.has(config)) {
                this.executedNodes.get(contextNode).delete(config);
            }
        }
    }

    private _insertWidgets(insPointConfig: any, featureConfig: any, insPointName: string, context: Context, contextNode: Element) {
        if (insPointConfig === null || insPointConfig === undefined) return;

        const widgetConstructors = Array.isArray(insPointConfig) ? insPointConfig : [insPointConfig];

        for (const widgetConstructor of widgetConstructors) {
            const contextIds = featureConfig.contextIds || [];

            if (contextIds.length === 0 || contextIds.indexOf(context.parsed.id) !== -1) {
                if (typeof widgetConstructor !== 'function') {
                    // console.error(`Invalid widget configuration in the insertion point "${insPointName}". It must be WidgetConstructor instance.`);
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

    private _compareObjects(a: any, b: any) {
        for (const key in a) {
            if (a[key] !== b[key]) return false;
        }
        return true;
    }

    private _tryParseContext(el: Element, parent: any, widgetBuilders: WidgetBuilder[]) {
        try {
            const ctx = this.contextBuilder(el);
            ctx.parent = this._getParentContextByElement(el, widgetBuilders) ?? parent;
            return ctx;
        } catch (err) {
            // ToDo: what need to do in this cases?
            console.warn(`Cannot parse context "${this.contextName}"`, err);
            return null;
        }
    }

    private _getParentContextByElement(el: Element, widgetBuilders: WidgetBuilder[]): any {
        let currentEl = el;
        
        while (currentEl.parentElement) {
            for (const cb of widgetBuilders) {
                const parentCtx = cb.contexts.get(currentEl.parentElement);
                if (parentCtx) return parentCtx.parsed;
            }
            currentEl = currentEl.parentElement;
        }

        return null;
    }
}