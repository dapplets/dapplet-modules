import { IButtonConfig, IWidgetBuilder, IWidgetBuilderConfig } from "./types";
import { T_TwitterFeatureConfig } from "@dapplets/twitter-adapter/src/types";
import { Button } from "./widgets/button";

export const widgets: { [key: string]: Function } = {
    button: (config: IButtonConfig) => ((builder: IWidgetBuilder, insPointName: string) =>
        createButton(builder, insPointName, config)
    ),
    menuItem: <Function>({ }) => ((builder: IWidgetBuilder, insPointName: string) =>
        console.error('menuItem is not implemented')
    ) //ToDo: implement
};

export class WidgetBuilder implements IWidgetBuilder {
    querySelector: string;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        console.log('WidgetBuilder constructor');
        return Object.assign(this, widgetBuilderConfig);
    }

    updateWidgets(features: T_TwitterFeatureConfig[], mutations?: any) {
        Object.keys(this.insPoints).forEach(insPointName => {
            //console.log("updateWidgets.insPointName>", insPointName)
            features.forEach(featureConfig => {
                (featureConfig[insPointName] || [])
                    .forEach(widgetConstructor => widgetConstructor(this, insPointName))
            })
        })
    }
}

function createButton(builder: IWidgetBuilder, insPointName: string, config: IButtonConfig): void {
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
        config.init.call(button, context); // ToDo: fix it

        button.onExec = function () {
            const tweetNode = insPoint.toContext(this.el);
            const context = builder.contextBuilder(tweetNode);
            config.exec.call(button, context);
        };
    });
}