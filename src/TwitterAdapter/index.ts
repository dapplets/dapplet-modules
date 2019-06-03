// ==UserScript==
// @name TwitterAdapter
// @type adapter
// @description Adapter for twitter.com
// @author Dapplets Team
// @version 1
// @familyId TwitterAdapter
// ==/UserScript==

import BasicView from './BasicView'
import { IAction, IModule, IView, ID, IFeature, ICore, IContentAdapter } from 'dapplet-extension-types'
import { T_TwitterActionFactory, T_TwitterAdapterConfig, T_TwitterViewSet, Context, T_InsertConfig, ITwitterFeature, IButtonConfig } from 'twitter-adapter-types'

declare var Load: (id: string) => Function;
export default class Feature implements IContentAdapter {
    private core: ICore = null;
    private doc: Document = null;

    private observer: MutationObserver = null;

    @Load("CommonLib-v1")
    public library : any;
  
    constructor() {
        console.log('ContentAdapter  created');
        console.log('library from ContentAdapter', this.library);
    }

    private contextBuilders = {
        tweetContext: (tweetNode: any) => ({
            id: tweetNode.getAttribute('data-tweet-id'),
            text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
            authorFullname: tweetNode.querySelector('strong.fullname').innerText,
            authorUsername: tweetNode.querySelector('span.username').innerText,
            authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
        }),
        dmContext: (tweetNode: any) => ({
            threadId: tweetNode.getAttribute('data-thread-id'),
            lastMessageId: tweetNode.getAttribute('data-last-message-id'),
            fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
            username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
            text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
        })
    }

    private insPoints: { [key: string]: T_InsertConfig } = {
        TWEET_SOUTH: {
            name: "TWEET_SOUTH",
            toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
            context: this.contextBuilders.tweetContext,
            selector: "#timeline li.stream-item div.js-actions"
        },
        TWEET_COMBO: {
            name: "TWEET_COMBO",
            toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
            context: this.contextBuilders.tweetContext,
            selector: "" //ToDo
        },
        DM_SOUTH: {
            name: "DM_SOUTH",
            toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
            context: this.contextBuilders.dmContext,
            selector: "#dm_dialog li.DMInbox-conversationItem div.DMInboxItem"
        },
        DM_EAST: {
            name: "DM_EAST",
            toContext: (node: any) => node.parentNode.parentNode.parentNode.parentNode, //ToDo: remove it later
            context: this.contextBuilders.dmContext,
            selector: "" //ToDo
        }
    }

    public views: IView[] = [
        // ToDo: extract common part from this two views to common class
        // ToDo: check performance of MutationObserver
        new class extends BasicView {
            public startMutationObserver(doc: Document) {
                console.log(`View "${this.name}": startMutationObserver #1.3`);
                const node = doc.getElementById('timeline');
                if (!this.observer) {
                    this.observer = new MutationObserver((mutations) => {
                        console.log(`View "${this.name}": mutated`);
                        this.injectActions(doc);
                    });
                }

                this.observer.observe(node, {
                    childList: true,
                    subtree: true
                });
            }
        }("TIMELINE", ["TWEET_SOUTH", "TWEET_COMBO"]),
        new class extends BasicView {
            public startMutationObserver(doc: Document) {
                console.log(`View "${this.name}": startMutationObserver #2.3`);
                const node = doc.getElementById('dm_dialog');
                if (!this.observer) {
                    this.observer = new MutationObserver((mutations) => {
                        console.log(`View "${this.name}": mutated`);
                        this.injectActions(doc);
                    });
                }

                this.observer.observe(node, {
                    childList: true,
                    subtree: true
                });
            }
        }("DIRECT_MESSAGE", ["DM_SOUTH", "DM_EAST"]),
    ]

    private getViewById(viewId: ID): IView {
        let foundViews = this.views.filter(v => v.name == viewId);
        if (foundViews.length == 0) {
            throw new Error(`View "${viewId}" is not registered.`);
        }
        return foundViews[0];
    }

    private initRouteObserver(doc: Document) {

        console.log('initRouteObserver');

        var onMutate = () => {
            const oldViewIds: string[] = this.views.filter(v => v.isActive == true).map(v => v.name);
            let newViewIds: string[] = [];

            if (doc.querySelector("#timeline")) {
                newViewIds.push("TIMELINE");
            }

            const dmDialog: HTMLElement = doc.querySelector("#dm_dialog");
            if (dmDialog && dmDialog.style.display == "") {
                newViewIds.push("DIRECT_MESSAGE");
            }

            const activatedViewIds: string[] = newViewIds.filter(v => oldViewIds.indexOf(v) == -1);
            const deactivatedViewIds: string[] = oldViewIds.filter(v => newViewIds.indexOf(v) == -1);

            if (activatedViewIds.length > 0 || deactivatedViewIds.length > 0) {
                this.onRouteChanged(activatedViewIds, deactivatedViewIds);
            }
        }

        onMutate();
        
        if (this.observer) return;

        if (!window || !MutationObserver) throw Error('MutationObserver is not available.');

        this.observer = new MutationObserver((mutations) => onMutate());
        
        this.observer.observe(doc.body, {
            childList: true,
            subtree: true
        });
    }

    private onRouteChanged(viewIdsActivating: string[], viewIdsDeactivating: string[]): void {
        for (let viewId of viewIdsActivating) {
            this.getViewById(viewId).activate(this.doc);
        }

        for (let viewId of viewIdsDeactivating) {
            this.getViewById(viewId).deactivate(this.doc);
        }
    }

    public actionFactories: { [key: string]: Function } = {
        button: (config: IButtonConfig) => ((view: IView, insPoint: string) =>
            this.insertInlineButtonInToView(view, this.insPoints[insPoint], config)
        ),
        menuItem: <Function>({ }) => ((view: IView, insPoint: string) =>
            console.error('menuItem is not implemented')
        ) //ToDo: implement
    }

    public registerFeature(feature: IFeature, doc: Document, core: ICore): void {
        this.doc = doc;
        this.core = core;
        
        let actionConfig = feature.getAugmentationConfig(this.actionFactories, this.core);

        for (const viewId in actionConfig) {
            let view = this.getViewById(viewId);

            for (const insPoint in actionConfig[viewId]) {
                const actionFactories = actionConfig[viewId][insPoint];
                view.attachActionFactories(actionFactories, insPoint);
            }
        }

        this.initRouteObserver(this.doc);
    }

    public unregisterFeature(feature: IFeature): void {
        console.log('unregisterFeature is not implemented');
    }

    private insertInlineButtonInToView(view: IView, insPoint: T_InsertConfig, config: IButtonConfig): void {
        // ToDo: calculate node from insPoint & view
        let nodes: NodeListOf<Element> = document.querySelectorAll(insPoint.selector);

        nodes && nodes.forEach(node => {
            if (node.getElementsByClassName(config.class).length > 0) return;

            const element = this.createButtonHtml(config);

            element.addEventListener("click", function (event: any) {
                let tweetNode = insPoint.toContext(event.target); //Todo: pass tweetNode from mutation observer instead of event?
                let context = insPoint.context(tweetNode);
                config.exec(context);
            });
            node.appendChild(element);
            console.log('appended button to Timeline');
        });
    }

    private createButtonHtml(config: any): Node {
        return this.createElementFromHTML(
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

    private createElementFromHTML(htmlString: string): Node {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }

}