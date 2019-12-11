import { IFeature } from '@dapplets/dapplet-extension-types';
import { T_TwitterViewSet, Context, T_InsertConfig, IButtonConfig, IWidgetBuilder, IAdapterFeature, IWidgetBuilderConfig } from './types';
import { WidgetBuilder, widgets } from './widgets';
import { ITwitterAdapter, T_TwitterFeatureConfig, T_TwitterActionFactory, ITwitterFeature } from "@dapplets/twitter-adapter/src/types";

let doc: Document = document; //host document we are working on (inpage.js)

@Injectable
export default class TwitterAdapter implements ITwitterAdapter {

    public actionFactories = (conn:Connection) => widgets(conn);

    private observer: MutationObserver = null;
    private features: ITwitterFeature[] = [];

    @Inject("common-lib.dapplet-base.eth")
    public library: any;

    public attachFeature(feature: IFeature, order: number): void { // ToDo: automate two-way dependency handling(?)
        if (this.features.find(f => f === feature)) return;
        this.features.splice(order, 0, feature);
        this.updateObservers();
    }

    public detachFeature(feature: IFeature): void {
        this.features = this.features.filter(f => f !== feature);
        this.contextBuilders.forEach(wb => {
            const widgets = wb.widgets.get(feature);
            if (!widgets) return;
            widgets.forEach(w => w.unmount());
        });
    }

    constructor() {
        if (this.observer) return;
        if (!document || !window || !MutationObserver) throw Error('Document or MutationObserver is not available.');
        const OBSERVER_CONFIG = {
            childList: true,
            subtree: true
        }

        this.observer = new MutationObserver((mutations) => this.updateObservers(mutations));

        this.observer.observe(doc.body, OBSERVER_CONFIG);
    }

    private updateObservers(mutations?) {
        this.contextBuilders.forEach(contextBuilder => {
            const container = doc.querySelector(contextBuilder.containerSelector);
            if (container) {
                let removedContexts = []
                mutations?.forEach(m => Array.from(m.removedNodes)
                    .filter((n: Element) => n.nodeType == Node.ELEMENT_NODE)
                    .forEach((n:Element) => {
                        const contextNodes = Array.from(n?.querySelectorAll(contextBuilder.contextSelector) || []); 
                        const contexts = contextNodes.map((n:Element)=> contextBuilder.contexts.get(n)).filter(e=>e)
                        removedContexts.push(...contexts)
                    }))
                if (removedContexts && removedContexts.length > 0) {
                    console.log('removedContexts>', removedContexts)
                    Core.contextsFinished(removedContexts, "twitter.com");
                }    
            }
            if (container && !contextBuilder.observer) {
                contextBuilder.observer = new MutationObserver((mutations) => {
                    contextBuilder.updateContexts(this.features, container, mutations);
                });
                contextBuilder.observer.observe(container, {
                    childList: true,
                    subtree: true
                });
            } else if (!container && contextBuilder.observer) {
                contextBuilder.observer.disconnect();
                contextBuilder.observer = null;
            }
            contextBuilder.updateContexts(this.features, container); // ToDo: think about it
        });
    }

    private contextBuilders = [{
        containerSelector: "#timeline",
        contextSelector: "[id^=stream-item-tweet-]",
        insPoints: {
            TWEET_SOUTH: {
                selector: "div.js-actions"
            },
            TWEET_COMBO: {
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
        containerSelector: "#dm_dialog",
        contextSelector: "li.DMInbox-conversationItem",
        insPoints: {
            DM_SOUTH: {
                selector: "div.DMInboxItem"
            },
            DM_EAST: {
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
