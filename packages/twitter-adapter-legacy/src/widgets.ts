import { IButtonConfig, IWidgetBuilder, IWidgetBuilderConfig } from "./types";
import { T_TwitterFeatureConfig } from "@dapplets/twitter-adapter/src/types";
import { Button } from "./widgets/button";
import { IFeature } from "@dapplets/dapplet-extension-types";
import { Widget } from "./common/widget";

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const widgets: { [key: string]: Function } = {
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
    } //ToDo: implement
};

export class WidgetBuilder implements IWidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        return Object.assign(this, widgetBuilderConfig);
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(features: IFeature[], container: Element, mutations?: MutationRecord[]) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);

        if (contextNodes.length === 0) return;

        const newContexts = contextNodes.filter(n => !n['dapplet-context'])
            .map(n => this.contextBuilder(n));

        if (newContexts.length > 0) Core.contextsStarted(newContexts, "twitter.com") // ToDo: replace Core dependency

        contextNodes.forEach((node: Element) => {
            node['dapplet-context'] = this.contextBuilder(node); // ToDo: attach parsed data to attribute
            this.updateWidgets(features, node);
        });

        const removedContexts = mutations?.map(m => Array.from(m.removedNodes).filter((n: Element) => n.matches && n.matches(this.contextSelector)))
            .reduce((p, c) => p.concat(c))
            .map((n: Element) => n['dapplet-context']);

        if (removedContexts && removedContexts.length > 0) {
            Core.contextsFinished(removedContexts, "twitter.com");
        }
    }

    updateWidgets(features: IFeature[], contextNode: Element) {
        Object.keys(this.insPoints).forEach(insPointName => {
            features.forEach((feature, order) => {
                (feature.config[insPointName] || [])
                    .forEach(widgetConstructor => {
                        const insertedWidget = widgetConstructor(this, insPointName, order, contextNode);
                        if (!insertedWidget) return;
                        const registeredWidgets = this.widgets.get(feature) || [];
                        registeredWidgets.push(insertedWidget);
                        this.widgets.set(feature, registeredWidgets);
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