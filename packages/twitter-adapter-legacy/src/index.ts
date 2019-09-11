import { } from '@dapplets/dapplet-extension-types';
import { T_TwitterViewSet, Context, T_InsertConfig, ITwitterFeature, IButtonConfig, IWidgetBuilder, IAdapterFeature, IWidgetBuilderConfig } from './types';
import { WidgetBuilder, widgets } from './widgets';
import { ITwitterAdapter, T_TwitterFeatureConfig, T_TwitterActionFactory } from "@dapplets/twitter-adapter/src/types";

let doc: Document = document; //host document we are working on (inpage.js)

@Injectable
export default class TwitterAdapter implements ITwitterAdapter {

    public actionFactories = widgets;

    private observer: MutationObserver = null;
    private features: T_TwitterFeatureConfig[] = [];

    @Inject("common-lib.dapplet-base.eth")
    public library: any;

    addFeature(feature: T_TwitterFeatureConfig): void { //ToDo: automate two-way dependency handling(?)
        this.features.push(feature);
        this.updateObservers();
    }

    constructor() {
        console.log('Adapter Legacy');
        console.log('ContentAdapter  created');
        console.log('library from ContentAdapter', this.library); console.log("init adapter>");
        console.log('i\'m new version');

        if (this.observer) return;
        if (!document || !window || !MutationObserver) throw Error('Document or MutationObserver is not available.');
        const OBSERVER_CONFIG = {
            childList: true,
            subtree: true
        }

        this.observer = new MutationObserver((mutations) => this.updateObservers());

        this.observer.observe(doc.body, OBSERVER_CONFIG);

    }

    private updateObservers() {
        this.widgetBuilders.forEach(widgetBuilder => {
            let e = doc.querySelector(widgetBuilder.querySelector);
            if (e && !widgetBuilder.observer) {
                widgetBuilder.observer = new MutationObserver((mutations) => widgetBuilder.updateWidgets(this.features, mutations));
                widgetBuilder.observer.observe(e, {
                    childList: true,
                    subtree: true
                });
                widgetBuilder.updateWidgets(this.features);
            } else if (!e && widgetBuilder.observer) {
                widgetBuilder.observer.disconnect();
                widgetBuilder.observer = null;
            }
        });
    }


    private widgetBuilders = [{
        querySelector: "#timeline",
        insPoints: {
            TWEET_SOUTH: {
                toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
                selector: "#timeline li.stream-item div.js-actions"
            },
            TWEET_COMBO: {
                toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
                selector: "" //ToDo
            }
        },
        contextBuilder: (tweetNode: any) => ({
            id: parseInt(tweetNode.getAttribute('data-item-id')),
            text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
            authorFullname: tweetNode.querySelector('strong.fullname').innerText,
            authorUsername: tweetNode.querySelector('span.username').innerText,
            authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
        }),
    }, {
        querySelector: "#dm_dialog",
        insPoints: {
            DM_SOUTH: {
                toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
                selector: "#dm_dialog li.DMInbox-conversationItem div.DMInboxItem"
            },
            DM_EAST: {
                toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode, //ToDo: Adjust it!
                selector: "" //ToDo
            }
        },
        contextBuilder: (tweetNode: any) => ({
            threadId: tweetNode.getAttribute('data-thread-id'),
            lastMessageId: tweetNode.getAttribute('data-last-message-id'),
            fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
            username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
            text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
        })
    }].map((cfg: IWidgetBuilderConfig) => new WidgetBuilder(cfg));
}
