import { IButtonConfig, IWidgetBuilder, IWidgetBuilderConfig } from "./types";
import { Button } from "./widgets/button";
import { T_TwitterFeatureConfig } from "@dapplets/twitter-adapter/src/types";
import { IFeature } from "@dapplets/dapplet-extension-types";

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const widgets: { [key: string]: Function } = {
    button: (config: IButtonConfig) => {
        config.clazz = uuidv4();
        return ((builder: IWidgetBuilder, insPointName: string) =>
            createButton(builder, insPointName, config)
        );
    },
    menuItem: <Function>({ }) => {
        return ((builder: IWidgetBuilder, insPointName: string) =>
            console.error('menuItem is not implemented')
        );
    } //ToDo: implement
};

export class WidgetBuilder implements IWidgetBuilder {
    querySelector: string;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;
    widgets = new Map<IFeature, any[]>();

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        return Object.assign(this, widgetBuilderConfig);
    }

    updateWidgets(features: IFeature[], mutations?: any) {
        Object.keys(this.insPoints).forEach(insPointName => {
            features.forEach(feature => {
                const featureConfig = feature.config;
                (featureConfig[insPointName] || [])
                    .forEach(widgetConstructor => {
                        const insertedWidgets = widgetConstructor(this, insPointName);
                        const registeredWidgets = this.widgets.get(feature) || [];
                        registeredWidgets.push(...insertedWidgets);
                        this.widgets.set(feature, registeredWidgets);
                    })
            })
        })
    }
}

function createButton(builder: IWidgetBuilder, insPointName: string, config: IButtonConfig): any[] {
    const insertedWidgets = [];

    // ToDo: calculate node from insPoint & view
    let insPoint = builder.insPoints[insPointName];
    let nodes: NodeListOf<Element> = document.querySelectorAll(insPoint.selector);

    nodes && nodes.forEach(node => {
        if (node.getElementsByClassName(config.clazz).length > 0) return;

        const button = new Button(config);
        button.mount();
        node.appendChild(button.el);

        const tweetNode = insPoint.toContext(button.el);
        const context = builder.contextBuilder(tweetNode);
        config.init && config.init.call(button, context); // ToDo: fix it

        button.onExec = function () {
            const tweetNode = insPoint.toContext(this.el);
            const context = builder.contextBuilder(tweetNode);
            config.exec && config.exec.call(button, context);
        };

        insertedWidgets.push(button);
    });

    return insertedWidgets;
}