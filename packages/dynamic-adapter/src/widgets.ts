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
    contextEvent: string; // 'TWEET_EVENT'
    contextType: string; // 'tweet'

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig, private _emitContextCreated: (context: any, contextType: string, contextEvent: string) => void) {
        return Object.assign(this, widgetBuilderConfig);
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(features: IFeature[], container: Element, mutations?: MutationRecord[]) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);
        if (contextNodes.length === 0) return;

        const newParsedContexts = [];

        for (const contextNode of contextNodes) {
            const isNew = !this.contexts.has(contextNode);
            const context: Context = isNew ? { parsed: this.contextBuilder(contextNode), features: new Map() } : this.contexts.get(contextNode);

            // ToDo: refactor isNew checking
            if (isNew) {
                newParsedContexts.push(context);
                this._emitContextCreated(context.parsed, this.contextType, this.contextEvent);
            }

            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                const featureInfo = context.features.get(feature);
                if (!featureInfo) {
                    const featureInfo = { proxiedSubs: {}, connections: [] };
                    const connections: { [name: string]: IConnection } = feature.config.connections;


                    // for (const connectionName in connections) {
                    //     const settersByNames = {}; // ToDo: memory leaks?
                    //     featureInfo.proxiedSubs[connectionName] = new Proxy({}, {
                    //         get(target, propName, receiver) {
                    //             return ({
                    //                 datasource: (setter) => {
                    //                     if (!settersByNames[propName]) settersByNames[propName] = [];
                    //                     settersByNames[propName].push(setter);
                    //                 }
                    //             });
                    //         }
                    //     });
                    //     const connection: any = connections[connectionName];
                    //     const subscription = connection.subscribe(context.parsed.id, (data: any) => {
                    //         for (const key in settersByNames) {
                    //             const setters = settersByNames[key] || [];
                    //             setters.forEach(set => set(data[key]));
                    //         }
                    //     });
                    //     featureInfo.subscriptions.push(subscription);
                    // }

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
                            const insertedWidget = widgetConstructor(this, insPointName, i, contextNode, context.features.get(feature).proxiedSubs);
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