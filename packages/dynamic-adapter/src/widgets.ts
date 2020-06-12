import { IFeature, IConnection } from "@dapplets/dapplet-extension";

import { IWidgetBuilderConfig, Context } from "./types";

export class WidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
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

    // `updateContexts()` is called when new context is found.
    public updateContexts(features: IFeature[], container: Element) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);
        if (contextNodes.length === 0) return;

        const newParsedContexts = [];

        for (const contextNode of contextNodes) {
            const isNew = !this.contexts.has(contextNode);
            const context: Context = isNew ? { parsed: this.contextBuilder(contextNode), features: new Map() } : this.contexts.get(contextNode);

            // ToDo: refactor isNew checking
            if (isNew) {
                newParsedContexts.push(context);
            } else {
                Object.assign(context.parsed, this.contextBuilder(contextNode)); // Refreshing of context without link destroying
            }

            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                const featureInfo = context.features.get(feature);
                if (!featureInfo) {
                    const featureInfo = { proxiedSubs: {}, connections: [] };
                    const connections: { [name: string]: IConnection } = feature.config.connections; // ToDo: remove

                    context.features.set(feature, featureInfo);
                }
            }

            if (isNew) {
                this.contexts.set(contextNode, context);
            }

            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                for (const insPointName in this.insPoints) {
                    for (const widgetConstructor of feature.config[insPointName] || []) {
                        const contextIds = feature.contextIds || [];

                        if (contextIds.length === 0 || contextIds.indexOf(context.parsed.id) !== -1) {
                            if (typeof widgetConstructor !== 'function') {
                                console.error(`Invalid widget configuration in the insertion point "${insPointName}". It must be WidgetConstructor instance.`);
                                continue;
                            }
                            const insertedWidget = widgetConstructor(this, insPointName, feature.orderIndex, contextNode, context.features.get(feature).proxiedSubs); // ToDo: remove proxiedSubs
                            if (!insertedWidget) continue;
                            const registeredWidgets = this.widgets.get(feature) || [];
                            registeredWidgets.push(insertedWidget);
                            this.widgets.set(feature, registeredWidgets);
                        }
                    }
                }
            }
        }

        Core.contextStarted(newParsedContexts.map((ctx) => ctx.parsed));
        return newParsedContexts;
    }
}