import { IFeature } from '@dapplets/dapplet-extension-types';
import { T_TwitterViewSet, Context, T_InsertConfig, IButtonConfig, IWidgetBuilder, IAdapterFeature, IWidgetBuilderConfig } from './types';
import { WidgetBuilder, widgets } from './widgets';
import { ITwitterAdapter, T_TwitterFeatureConfig, T_TwitterActionFactory, ITwitterFeature } from "@dapplets/twitter-adapter/src/types";

let doc: Document = document; //host document we are working on (inpage.js)

@Injectable
export default class TwitterAdapter implements ITwitterAdapter {

    public actionFactories = widgets;

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

    private updateObservers(mutations?: MutationRecord[]) {
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
                    Core.contextsFinished(removedContexts);
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
        containerSelector: "main[role=main]",
        contextSelector: "article",
        insPoints: {
            TWEET_SOUTH: {
                selector: "div[role=group]"
            },
            TWEET_COMBO: {
                selector: "" //ToDo
            }
        },
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (tweetNode: any) => ({
            id: parseInt(tweetNode.querySelector('a time').parentNode.href.split('/').pop()),
            text: tweetNode.querySelector('div[lang]')?.innerText,
            authorFullname: tweetNode.querySelector('a:nth-child(1) div span span')?.innerText,
            authorUsername: tweetNode.querySelector('div.r-1f6r7vd > div > span')?.innerText,
            authorImg: tweetNode.querySelector('img.css-9pa8cd')?.getAttribute('src')
        }),
    }].map((cfg: IWidgetBuilderConfig) => new WidgetBuilder(cfg));
}
