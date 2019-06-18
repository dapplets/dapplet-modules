import { IButtonConfig, IWidgetBuilder, T_TwitterFeatureConfig, IWidgetBuilderConfig } from "./types";

export const widgets: { [key: string]: Function } = {
    button: (config: IButtonConfig) => ((builder: IWidgetBuilder, insPointName: string) =>
        createButton(builder, insPointName, config)
    ),
    menuItem: <Function>({ }) => ((builder: IWidgetBuilder, insPointName: string) =>
        console.error('menuItem is not implemented')
    ) //ToDo: implement
};

export class WidgetBuilder implements IWidgetBuilder {
    anchorElementId: string;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    observer: MutationObserver = null;

    //ToDo: widgets

    constructor(widgetBuilderConfig: IWidgetBuilderConfig) {
        return Object.assign(this, widgetBuilderConfig);
    }

    updateWidgets(features: T_TwitterFeatureConfig[], mutations?: any) {
        Object.keys(this.insPoints).forEach(insPointName => {
            console.log("updateWidgets.insPointName>", insPointName)
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
        if (node.getElementsByClassName(config.class).length > 0) return;

        const element = createButtonHtml(config);

        element.addEventListener("click", function (event: any) {
            //context created at the time of button click.
            let tweetNode = insPoint.toContext(event.target); //Todo: pass tweetNode from mutation observer instead of event?
            let context = builder.contextBuilder(tweetNode);
            config.exec(context);
        });
        node.appendChild(element);
        console.log('appended button to ' + insPointName);
    });
}

function createButtonHtml(config: any): Node {
    return createElementFromHTML(
        `<div class="${config.class} ProfileTweet-action">
                <button class="ProfileTweet-actionButton" type="button">
                    <div class="IconContainer">
                        <img height="18" src="${config.img}">
                    </div>
                    ${config.label ? `<span class="ProfileTweet-actionCount">
                        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">${config.label}</span>
                    </span>` : ''}
                </button>
            </div>
    `);
}

function createElementFromHTML(htmlString: string): Node {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}