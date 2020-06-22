import { IFeature, IConnection } from "@dapplets/dapplet-extension";

import { IWidgetBuilderConfig, Context } from "./types";

export class WidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    events: { [key: string]: (node: any, ctx: any, emitter: Function) => void };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();
    contexts = new WeakMap<Node, Context>();
    contextEvent: string; // 'POST_EVENT'
    contextType: string; // 'tweet'

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        return Object.assign(this, widgetBuilderConfig);
    }

    public emitEvent(event: string, context: Context, args: any[]) {
        context.featureConfigs.forEach((value, feature) => feature.config?.events?.[event]?.(...args))
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(featureConfigs: any[], container: Element) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);
        if (contextNodes.length === 0) return;

        const newParsedContexts = [];

        for (const contextNode of contextNodes) {
            const isNew = !this.contexts.has(contextNode);
            const context: Context = isNew ? { parsed: this.contextBuilder(contextNode), featureConfigs: new Map() } : this.contexts.get(contextNode);

            // ToDo: refactor isNew checking
            if (isNew) {
                newParsedContexts.push(context);
            } else {
                Object.assign(context.parsed, this.contextBuilder(contextNode)); // Refreshing of context without link destroying
            }

            for (let i = 0; i < featureConfigs.length; i++) {
                const featureConfig = featureConfigs[i];
                const featureInfo = context.featureConfigs.get(featureConfig);
                if (!featureInfo) {
                    const featureInfo = { proxiedSubs: {}, connections: [] };
                    const connections: { [name: string]: IConnection } = featureConfig.connections; // ToDo: remove

                    context.featureConfigs.set(featureConfig, featureInfo);
                }
            }

            if (isNew) {
                this.contexts.set(contextNode, context);
                for (const event in this.events) {
                    this.events[event](contextNode, context.parsed, (...args) => this.emitEvent(event, context, args));
                }
            }

            for (let i = 0; i < featureConfigs.length; i++) {
                const featureConfig = featureConfigs[i];
                for (const insPointName in this.insPoints) {
                    for (const widgetConstructor of featureConfig[insPointName] || []) {
                        const contextIds = featureConfig.contextIds || [];

                        if (contextIds.length === 0 || contextIds.indexOf(context.parsed.id) !== -1) {
                            if (typeof widgetConstructor !== 'function') {
                                console.error(`Invalid widget configuration in the insertion point "${insPointName}". It must be WidgetConstructor instance.`);
                                continue;
                            }
                            const insertedWidget = widgetConstructor(this, insPointName, featureConfig.orderIndex, contextNode, context.featureConfigs.get(featureConfig).proxiedSubs); // ToDo: remove proxiedSubs
                            if (!insertedWidget) continue;
                            const registeredWidgets = this.widgets.get(featureConfig) || [];
                            registeredWidgets.push(insertedWidget);
                            this.widgets.set(featureConfig, registeredWidgets);
                        }
                    }
                }
            }
        }

        Core.contextStarted(newParsedContexts.map((ctx) => ctx.parsed));
        newParsedContexts.forEach(ctx => this.emitEvent('started', ctx, [ctx.parsed]));
        return newParsedContexts;
    }
}