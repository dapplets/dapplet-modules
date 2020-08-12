import { IFeature, IConnection } from "@dapplets/dapplet-extension";

import { IWidgetBuilderConfig, Context } from "./types";

export class WidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    events: { [key: string]: (node: any, ctx: any, emitter: Function, on?: Function) => void };
    contextBuilder: (node: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();
    contexts = new WeakMap<Node, Context>();
    eventHandler: (event: string, args: any[], target: any) => void = null;

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        return Object.assign(this, widgetBuilderConfig);
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

    private _tryParseContext(el: Element) {
        try {
            return this.contextBuilder(el);
        } catch (err) {
            // ToDo: what need to do in this cases?
            console.warn("Cannot parse context");
            return {};
        }
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(featureConfigs: any[], container: Element) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);
        if (contextNodes.length === 0) return;

        const newParsedContexts = [];
        const newFeatureConfigs = [];

        for (const contextNode of contextNodes) {
            const isNewContext = !this.contexts.has(contextNode);
            const context: Context = isNewContext ? { parsed: this._tryParseContext(contextNode), eventHandlers: {} } : this.contexts.get(contextNode);

            // ToDo: refactor isNew checking
            if (isNewContext) {
                newParsedContexts.push(context);
            } else {
                const newContext = this._tryParseContext(contextNode);
                if (!this._compareObjects(context.parsed, newContext)) {
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

                // is new feature?
                if (this.widgets.get(featureConfig) === undefined) {
                    this.widgets.set(featureConfig, []);
                    newFeatureConfigs.push(featureConfig);
                }

                for (const insPointName in this.insPoints) {
                    for (const widgetConstructor of featureConfig[insPointName] || []) {
                        const contextIds = featureConfig.contextIds || [];

                        if (contextIds.length === 0 || contextIds.indexOf(context.parsed.id) !== -1) {
                            if (typeof widgetConstructor !== 'function') {
                                console.error(`Invalid widget configuration in the insertion point "${insPointName}". It must be WidgetConstructor instance.`);
                                continue;
                            }
                            const insertedWidget = widgetConstructor(this, insPointName, featureConfig.orderIndex, contextNode);
                            if (!insertedWidget) continue;
                            const registeredWidgets = this.widgets.get(featureConfig);
                            registeredWidgets.push(insertedWidget);
                            this.widgets.set(featureConfig, registeredWidgets);
                        }
                    }
                }
            }
        }

        Core.contextStarted(newParsedContexts.map((ctx) => ctx.parsed));
        newParsedContexts.forEach(ctx => this.emitEvent(null, 'context_changed', ctx, [null, ctx.parsed, null]));

        const allContexts = contextNodes.map(cn => this.contexts.get(cn)).filter(cn => !!cn);
        newFeatureConfigs.forEach(fc => allContexts.forEach(ctx => newParsedContexts.indexOf(ctx) === -1 && this.emitEvent(fc, 'context_changed', ctx, [fc, ctx.parsed, null])));

        return newParsedContexts;
    }
}