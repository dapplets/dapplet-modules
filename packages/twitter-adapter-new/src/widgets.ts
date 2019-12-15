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

export const widgets: (conn:Connection) => { [key: string]: Function } = (conn:Connection) => ({
    button: (config: IButtonConfig) => {
        config.clazz = uuidv4();
        return ((builder: IWidgetBuilder, insPointName: string, order: number, contextNode: Element) =>
            createButton(builder, insPointName, config, order, contextNode)
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
});

export class WidgetBuilder implements IWidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();
    contexts = new WeakMap<Node, any>()

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        return Object.assign(this, widgetBuilderConfig);
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(features: IFeature[], container: Element, mutations?: MutationRecord[]) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);

        if (contextNodes.length === 0) return;

        const newContexts = contextNodes.filter(n => !this.contexts.has(n))
            .map(n => {
                const context = this.contextBuilder(n)
                this.contexts.set(n, context)
                return context
            });

        if (newContexts.length > 0) {
            Core.contextStarted(newContexts)
        }

        contextNodes.forEach(n => this.updateWidgets(features, n));
    }

    updateWidgets(features: IFeature[], contextNode: Element) {
        const { id } = this.contexts.get(contextNode);

        Object.keys(this.insPoints).forEach(insPointName => {
            features.forEach((feature, order) => {
                (feature.config[insPointName] || [])
                    .forEach(widgetConstructor => {
                        const contextIds = feature.contextIds || [];

                        if (contextIds.length === 0 || contextIds.indexOf(id) !== -1) {
                            const insertedWidget = widgetConstructor(this, insPointName, order, contextNode);
                            if (!insertedWidget) return;
                            const registeredWidgets = this.widgets.get(feature) || [];
                            registeredWidgets.push(insertedWidget);
                            this.widgets.set(feature, registeredWidgets);
                        }
                    })
            })
        })
    }
}

function createButton(builder: IWidgetBuilder, insPointName: string, config: IButtonConfig, order: number, contextNode: Element): any {
    // ToDo: calculate node from insPoint & view
    const insPoint = builder.insPoints[insPointName];
    const node = contextNode.querySelector(insPoint.selector);

    if (node.getElementsByClassName(config.clazz).length > 0) return;

    const button = new Button(config);
    button.mount();
    button.el.classList.add('dapplet-widget');

    const insertedElements = node.getElementsByClassName('dapplet-widget');
    if (insertedElements.length >= order) {
        node.insertBefore(button.el, insertedElements[order]);
    } else {
        node.appendChild(button.el);
    }

    const context = builder.contextBuilder(contextNode);
    config.init && config.init.call(button, context); // ToDo: fix it

    button.onExec = function () {
        const context = builder.contextBuilder(contextNode);
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