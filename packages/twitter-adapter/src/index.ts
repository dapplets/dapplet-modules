// ==UserScript==
// @name TwitterAdapter
// @type adapter
// @description Adapter for twitter.com
// @author Dapplets Team
// @version 1
// @familyId TwitterAdapter
// ==/UserScript==

import { IAction, IModule, IView, ID, IFeature, ICore, IContentAdapter } from '@dapplets/dapplet-extension-types';
import { T_TwitterActionFactory, T_TwitterFeatureConfig, T_TwitterViewSet, Context, T_InsertConfig, ITwitterFeature, IButtonConfig, IWidgetBuilder, IAdapterFeature, IWidgetBuilderConfig } from './types';
import { WidgetBuilder, widgets } from './widgets';

let doc: Document = document; //host document we are working on (inpage.js)


@PublicName("twitter-adapter.dapplet-base.eth", "0.1.1")
export default class TwitterAdapter implements IContentAdapter {

    private core: ICore = null;
    public actionFactories = widgets;

    private observer: MutationObserver = null;
    private features: T_TwitterFeatureConfig[] = [];

    @Load("common-lib.dapplet-base.eth", "0.1.0")
    public library: any;


    addFeature(feature: T_TwitterFeatureConfig): void { //ToDo: automate two-way dependency handling(?)
        this.features.push(feature);
    }

    constructor() {
        console.log('ContentAdapter  created');
        console.log('library from ContentAdapter', this.library); console.log("init adapter>")

        if (this.observer) return;
        if (!document || !window || !MutationObserver) throw Error('Document or MutationObserver is not available.');
        const OBSERVER_CONFIG = {
            childList: true,
            subtree: true
        }
        this.observer = new MutationObserver((mutations) => {
            this.widgetBuilders.forEach(widgetBuilder => {
                let e = doc.getElementById(widgetBuilder.anchorElementId);
                if (e && !widgetBuilder.observer) {
                    (widgetBuilder.observer = new MutationObserver((mutations) => widgetBuilder.updateWidgets(this.features, mutations)))
                        .observe(e, OBSERVER_CONFIG);
                    widgetBuilder.updateWidgets(this.features);
                } else if (!e && widgetBuilder.observer) {
                    widgetBuilder.observer.disconnect();
                    widgetBuilder.observer = null;
                }
            })
        });
        this.observer.observe(doc.body, OBSERVER_CONFIG);
    }

    private widgetBuilders = [{
        anchorElementId: "timeline",
        insPoints: {
            TWEET_SOUTH: {
                toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
                selector: "#timeline li.stream-item div.js-actions"
            },
            TWEET_COMBO: {
                toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
                selector: "" //ToDo
            }
        },
        contextBuilder: (tweetNode: any) => ({
            id: tweetNode.getAttribute('data-tweet-id'),
            text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
            authorFullname: tweetNode.querySelector('strong.fullname').innerText,
            authorUsername: tweetNode.querySelector('span.username').innerText,
            authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
        }),
    }, {
        anchorElementId: "dm_dialog",
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
