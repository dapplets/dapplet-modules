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

export const widgets: (conn:Connection) => { [key: string]: Function } = (conn: Connection) => ({
    button: (config: IButtonConfig) => {
        let uuid = uuidv4();
        //ToDo: This is just a brain draft for subscription binding. Check it!
        config.clazz = uuid
        return ((builder: IWidgetBuilder, insPointName: string, order: number, contextNode: Element) => {
            let button = createButton(builder, insPointName, config, order, contextNode)
            conn.subscribe(uuid, msg=>Object.assign(button.state, msg))
        });
    },
    menuItem: <Function>({ }) => {
        return ((builder: IWidgetBuilder, insPointName: string, order: number, contextNode: Element) =>
            console.error('menuItem is not implemented')
        );
    } //ToDo: implement
})

export class WidgetBuilder implements IWidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();
    contexts = new WeakMap<Node,any>()

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        return Object.assign(this, widgetBuilderConfig);
    }

    // `updateContexts()` is called when new context is found.
    public updateContexts(features: IFeature[], container: Element, mutations?: MutationRecord[]) {
        const contextNodes = Array.from(container?.querySelectorAll(this.contextSelector) || []);

        if (contextNodes.length === 0) return;

        const newContexts = contextNodes.filter(n=>!this.contexts.has(n))
            .map(n => {
                let context = this.contextBuilder(n)
                this.contexts.set(n,context)
                this.updateWidgets(features, n);
                return context
            });

        if (newContexts.length > 0) {
            Core.contextsStarted(newContexts, "twitter.com") // ToDo: replace Core dependency
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

function createButton(builder: IWidgetBuilder, insPointName: string, config: IButtonConfig, order: number, contextNode: Element): Button {
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