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
    isTwitterDesignNew: boolean;
    querySelector: string;
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

        const element = builder.isTwitterDesignNew ? createButtonHtmlNew(config) : createButtonHtml(config);

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

function createButtonHtmlNew(config: any): Node {
    return createElementFromHTML(
        `<div class="${config.class} css-1dbjc4n r-1iusvr4 r-18u37iz r-16y2uox r-1h0z5md">
            <div role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-bztko3 r-lrvibr">
                <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                    <div class="css-1dbjc4n r-xoduu5">
                        <img height="18" src="${config.img}" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                        <div class="css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                    </div>
                    ${config.label ? `<div class="css-1dbjc4n r-xoduu5 r-1udh08x">
                        <span dir="auto" class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0">
                            <span dir="auto" class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">${config.label}</span>
                        </span>
                    </div>` : ''}
                </div>
            </div>
        </div>`);
}

function createElementFromHTML(htmlString: string): Node {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}