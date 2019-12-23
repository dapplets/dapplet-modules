import { IFeature } from '@dapplets/dapplet-extension-types';
// ToDo-1: too much interfaces, which are implemented once. 
import { T_TwitterViewSet, Context, T_InsertConfig, IButtonConfig, IWidgetBuilder, IAdapterFeature, IWidgetBuilderConfig } from './types';
import { WidgetBuilder, widgets } from './widgets';
import { ITwitterAdapter, T_TwitterFeatureConfig, T_TwitterActionFactory, ITwitterFeature } from "@dapplets/twitter-adapter";

// ToDo-2: set root container to document.body from injector
let doc: Document = document; //host document we are working on (inpage.js)

@Injectable
export default class TwitterAdapter implements ITwitterAdapter {

    // ToDo-3: move to global adapter's interface
    // ToDo-4: is it actionfactories or widgetfactories (like widgetbuilders)?
    public actionFactories = widgets;

    // ToDo-5: extract generic code into mandatory libraries, loaded by Core & Injector
    //         WidgetBuilder@std-adapter-lib, Observers@std-adapter-lib 
    private observer: MutationObserver = null;
    private features: ITwitterFeature[] = [];

    @Inject("common-lib.dapplet-base.eth")
    public library: any;

    // ToDo-6: can we move feature management (attaching/detaching) to the extension/injector/Core?
    public attachFeature(feature: IFeature): void {
        if (this.features.find(f => f === feature)) return;
        this.features.splice(feature.orderIndex, 0, feature);
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

    constructor() { // ToDo-7: `private root: Element`
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
                    .forEach((n: Element) => {
                        const contextNodes = Array.from(n?.querySelectorAll(contextBuilder.contextSelector) || []);
                        const contexts = contextNodes.map((n: Element) => contextBuilder.contexts.get(n)).filter(e => e)
                        removedContexts.push(...contexts)
                    }))
                if (removedContexts && removedContexts.length > 0) {
                    removedContexts.forEach(ctx => ctx.subscriptions && ctx.subscriptions.forEach(sub => sub.close()));
                    Core.contextFinished(removedContexts);
                }
                contextBuilder.updateContexts(this.features, container); // ToDo: think about it
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
        });
    }

    //ToDo-8: Think about process adding new contextBuilders and new InsPoints
    //          who is allowed? how to audit?
    private contextBuilders = [{
        containerSelector: "#timeline",
        contextSelector: "[id^=stream-item-tweet-]",
        insPoints: {
            //ToDo-11: may be better: "div.js-actions"
            //         TWEET_SOUTH: 
            TWEET_SOUTH: {
                selector: "div.js-actions",
                // ToDo-14: restrict to allowed widgets
                //widgets: [Button, Picture]
            },
            TWEET_COMBO: {
                selector: "" //ToDo
            },
            PICTURE: {
                selector: "div.js-tweet-text-container"
            }
        },
        //ToDo-9:  use backticks templates for custom selectors like css, xpath etc.
        //ToDo-10: some variables may be be undefined if the host site loads them async. 
        //         Adapter must update context using MutationObservers
        contextBuilder: (tweetNode: any) => ({
            id: tweetNode.getAttribute('data-item-id'),
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
            fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname')?.innerText,
            username: tweetNode.querySelector('div.DMInboxItem-title .username')?.innerText,
            text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
        })
    }].map((cfg: IWidgetBuilderConfig) => new WidgetBuilder(cfg));
}