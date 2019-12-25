import { IFeature } from "@dapplets/dapplet-extension-types";

import { IButtonConfig, IWidgetBuilder, IWidgetBuilderConfig, IPictureConfig } from "./types";
import { Button } from "./widgets/button";
import { Picture } from "./widgets/picture";

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const widgets: (conn?: Connection) => { [key: string]: Function } = (conn?: Connection) => ({
    button: (configCallback: (ctx: any, state: any, sub: any) => IButtonConfig) => {
        const uuid = uuidv4();
        return ((builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) =>
            createWidget(Button, builder, insPointName, configCallback, order, contextNode, uuid, proxiedSubs)
        );
    },
    menuItem: <Function>({ }) => {
        return ((builder: IWidgetBuilder, insPointName: string, order: number, contextNode: Element) =>
            console.error('menuItem is not implemented')
        );
    }, //ToDo: implement
    picture: (configCallback: (ctx: any, state: any, sub: any) => IPictureConfig) => {
        const uuid = uuidv4();
        return ((builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) =>
            createWidget(Picture, builder, insPointName, configCallback, order, contextNode, uuid, proxiedSubs)
        );
    }
})

export type Context = {
    parsed: any,
    features: Map<IFeature, { subscriptions: any[], proxiedSubs: any }>
};

export class WidgetBuilder implements IWidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();
    contexts = new WeakMap<Node, Context>();

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
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
            if (isNew) newParsedContexts.push(context.parsed);

            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                const featureInfo = context.features.get(feature);
                if (!featureInfo) {
                    const featureInfo = { proxiedSubs: {}, subscriptions: [] };
                    const { connections } = feature.config;

                    for (const connectionName in connections) {
                        const settersByNames = {}; // ToDo: memory leaks?
                        featureInfo.proxiedSubs[connectionName] = new Proxy({}, {
                            get(target, name, receiver) {
                                return ({
                                    datasource: (setter) => {
                                        if (!settersByNames[name]) settersByNames[name] = [];
                                        settersByNames[name].push(setter);
                                    }
                                });
                            }
                        });
                        const connection: Connection = connections[connectionName];
                        const subscription = connection.subscribe(context.parsed.id, (data: any) => {
                            for (const key in settersByNames) {
                                const setters = settersByNames[key] || [];
                                setters.forEach(set => set(data[key]));
                            }
                        });
                        featureInfo.subscriptions.push(subscription);
                    }

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

        if (newParsedContexts.length > 0) {
            Core.contextStarted(newParsedContexts)
        }
    }
}

function createWidget(Widget: any, builder: WidgetBuilder, insPointName: string, configCallback: Function, order: number, contextNode: Element, clazz: string, proxiedSubs: any): any {
    // ToDo: calculate node from insPoint & view
    const insPoint = builder.insPoints[insPointName];
    const node = contextNode.querySelector(insPoint.selector);

    if (node.getElementsByClassName(clazz).length > 0) return;

    const context = builder.contexts.get(contextNode);

    const widget = new Widget((setState) => configCallback(context.parsed, setState, proxiedSubs), clazz);
    widget.el.classList.add('dapplet-widget');

    const insertedElements = node.getElementsByClassName('dapplet-widget');
    if (insertedElements.length >= order) {
        node.insertBefore(widget.el, insertedElements[order]);
    } else {
        node.appendChild(widget.el);
    }

    return widget;
}