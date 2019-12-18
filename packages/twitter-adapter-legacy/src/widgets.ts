import { IButtonConfig, IWidgetBuilder, IWidgetBuilderConfig, IPictureConfig } from "./types";
import { T_TwitterFeatureConfig } from "@dapplets/twitter-adapter/src/types";
import { Button } from "./widgets/button";
import { IFeature } from "@dapplets/dapplet-extension-types";
import { Widget } from "./common/widget";
import { Picture } from "./widgets/picture";

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const widgets: (conn?: Connection) => { [key: string]: Function } = (conn?: Connection) => ({
    button_2: (configCallback: (ctx: any, state: any, sub: any) => IButtonConfig) => {
        const uuid = uuidv4();
        return ((builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) =>
            createButton(builder, insPointName, configCallback, order, contextNode, uuid, proxiedSubs)
        );
    },
    button: (config: IButtonConfig) => {
        const uuid = uuidv4();
        return ((builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) =>
            createButton(builder, insPointName, () => ({ state: "DEFAULT", DEFAULT: config }), order, contextNode, uuid, proxiedSubs)
        );
    },
    menuItem: <Function>({ }) => {
        return ((builder: IWidgetBuilder, insPointName: string, order: number, contextNode: Element) =>
            console.error('menuItem is not implemented')
        );
    }, //ToDo: implement
    picture: (config: IPictureConfig) => {
        config.clazz = uuidv4();
        return ((builder: IWidgetBuilder, insPointName: string, order: number, contextNode: Element) =>
            createPicture(builder, insPointName, config, order, contextNode)
        );
    }
})

export class WidgetBuilder implements IWidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();
    contexts = new WeakMap<Node, any>();

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        return Object.assign(this, widgetBuilderConfig);
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(features: IFeature[], container: Element, mutations?: MutationRecord[]) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);
        if (contextNodes.length === 0) return;

        const newContexts = [];

        for (const contextNode of contextNodes) {
            const isNew = !this.contexts.has(contextNode);
            const context = isNew ? this.contextBuilder(contextNode) : this.contexts.get(contextNode);

            // ToDo: refactor isNew checking
            if (isNew) newContexts.push(context);

            context.subscriptions = [];

            for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                const proxiedSubs = {};
                const { connections } = feature.config;
                for (const connectionName in connections) {
                    const settersByNames = {}; // ToDo: memory leaks?
                    proxiedSubs[connectionName] = new Proxy({}, {
                        get(target, name, receiver) {
                            return ({
                                datasource: (setter) => {
                                    if (!settersByNames[name]) settersByNames[name] = [];
                                    settersByNames[name].push(setter);
                                }
                            });
                        },
                        set(target, name, value, receiver) {
                            if (!Reflect.has(target, name)) {
                                console.log(`Setting non-existent property '${name.toString()}', initial value: ${value}`);
                            }
                            return Reflect.set(target, name, value, receiver);
                        }
                    });
                    const connection: Connection = connections[connectionName];
                    const subscription = connection.subscribe(context.id, (data: any) => {
                        Object.entries(data).forEach(([key, value]) => {
                            //proxiedSubs[connectionName][key] = value;
                            for (const key in settersByNames) {
                                const setters = settersByNames[key] || [];
                                setters.forEach(set => set(value));
                            }
                        });
                    });
                    context.subscriptions.push(subscription);
                }

                for (const insPointName in this.insPoints) {
                    for (const widgetConstructor of feature.config[insPointName] || []) {
                        const contextIds = feature.contextIds || [];

                        if (contextIds.length === 0 || contextIds.indexOf(context.id) !== -1) {
                            const insertedWidget = widgetConstructor(this, insPointName, i, contextNode, proxiedSubs);
                            if (!insertedWidget) return;
                            const registeredWidgets = this.widgets.get(feature) || [];
                            registeredWidgets.push(insertedWidget);
                            this.widgets.set(feature, registeredWidgets);
                        }
                    }
                }
            }

            if (isNew) {
                this.contexts.set(contextNode, context);
            }
        }

        if (newContexts.length > 0) {
            Core.contextStarted(newContexts)
        }
    }
}

function createButton(builder: WidgetBuilder, insPointName: string, configCallback: Function, order: number, contextNode: Element, clazz: string, proxiedSubs: any): any {
    // ToDo: calculate node from insPoint & view
    const insPoint = builder.insPoints[insPointName];
    const node = contextNode.querySelector(insPoint.selector);

    if (node.getElementsByClassName(clazz).length > 0) return;

    const context = builder.contexts.get(contextNode);

    const stateConfig = configCallback(context, {}, proxiedSubs); // ToDo: pass state
    const config = stateConfig[stateConfig.state];
    config.clazz = clazz;

    const button = new Button(config);
    button.mount();
    button.el.classList.add('dapplet-widget');

    const insertedElements = node.getElementsByClassName('dapplet-widget');
    if (insertedElements.length >= order) {
        node.insertBefore(button.el, insertedElements[order]);
    } else {
        node.appendChild(button.el);
    }

    config.init && config.init.call(button, context); // ToDo: fix it

    button.onExec = function () {
        config.exec && config.exec.call(button, context);
    };

    return button;
}

function createPicture(builder: IWidgetBuilder, insPointName: string, config: IPictureConfig, order: number, contextNode: Element): any {
    // ToDo: calculate node from insPoint & view
    const insPoint = builder.insPoints[insPointName];
    const node = contextNode.querySelector(insPoint.selector);

    if (node.getElementsByClassName(config.clazz).length > 0) return;

    const picture = new Picture(config);
    picture.mount();
    picture.el.classList.add('dapplet-widget');
    node.appendChild(picture.el);

    const context = builder.contextBuilder(contextNode);
    config.init && config.init.call(picture, context); // ToDo: fix it

    picture.onExec = function () {
        const context = builder.contextBuilder(contextNode);
        config.exec && config.exec.call(picture, context);
    };

    return picture;
}