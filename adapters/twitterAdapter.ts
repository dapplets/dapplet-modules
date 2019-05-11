//#region COMMON INTERFACES
interface ICore {
    openOverlay(id: ID, ctx: any): void;
    sendWalletConnectTx(tx: any): void;
}

interface IModule { }

interface IContentAdapter extends IModule {
    init(core: ICore, doc: Document): void;
    registerFeature(feature: IFeature): void;
    unregisterFeature(feature: IFeature): void;
}

interface IFeature extends IModule {
    getAugmentationConfig(actionFactories: { [key: string]: Function }, core: ICore): any;
}

interface IAction { }

interface IView {
    name: string;
    isActive: boolean;
    INSERT_POINTS: ID[];
    attachActionFactories(actions: IAction[], insPoint: ID): void;
    activate(doc: Document): void;
    deactivate(doc: Document): void;
}


type ID = string;
//#endregion COMMON INTERFACES


//#region TWITTER ADAPTER INTERFACES
//type T_TwitterActionFactory = (view:IView,insPoint:string,ctx:T_TwitterContent)=>any;
//ToDo: DiP
type T_TwitterActionFactory = any;

type T_TwitterAdapterConfig = {[key in keyof T_TwitterViewSet]:({[key:string]:T_TwitterActionFactory[]})}
type T_TwitterViewSet = {
    TIMELINE?:  IView;
    DIRECT_MESSAGE?: IView;
}

interface ITwitterFeature extends IFeature {
    getAugmentationConfig(actionFactories: { [key: string]: Function }, core: ICore): T_TwitterAdapterConfig;
}

interface IButtonConfig {
    class: string;
    label: string;
    img: string;
    exec(context: any): void; //onClick
}

//#endregion

//#region UTIL LIBRARY
abstract class BasicView implements IView {
    public isActive: boolean = false;
    public observer: MutationObserver = null;

    constructor(public name: string, public INSERT_POINTS: string[]) { }
    attachedActionFactories: { [key: string]: Function[] } = {};

    attachActionFactories(actionFactories: Function[], insPoint: ID): void {
        if (!this.attachedActionFactories[insPoint]) {
            this.attachedActionFactories[insPoint] = actionFactories;
        } else {
            this.attachedActionFactories[insPoint].push(...actionFactories);
        }
    }

    injectActions(doc: Document) {
        for (const insPoint in this.attachedActionFactories) {
            for (const actionFactory of this.attachedActionFactories[insPoint]) {
                actionFactory(this, insPoint);
            }
        }
    }

    public activate(doc: Document): void {
        this.isActive = true;
        this.startMutationObserver(doc);
        this.injectActions(doc);
        console.log(`View "${this.name}" is activated`);
    }

    public deactivate(doc: Document) {
        this.isActive = false;
        this.stopMutationObserver(doc);
        console.log(`View "${this.name}" is deactivated`);
    }

    public stopMutationObserver(doc: Document): void {
        //ToDo: implement
        this.observer && this.observer.disconnect();
        console.log(`View "${this.name}": stopMutationObserver`);
    }

    abstract startMutationObserver(doc: Document): void;
}

//#endregion UTIL LIBRARY

//#region TWITTER ADAPTER PACKAGE
class ContentAdapter implements IContentAdapter {
    private core: ICore = null;
    private doc: Document = null;

    // TODO: Constructor
    public init(core: ICore, doc: Document) {
        this.core = core;
        this.doc = doc;
        this.initRouteObserver(doc);
    }

    public views: IView[] = [
        // ToDo: extract common part from this two views to common class
        // ToDo: check performance of MutationObserver
        new class extends BasicView {
            public startMutationObserver(doc: Document) {
                console.log(`View "${this.name}": startMutationObserver #1.1`);
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
                console.log(`View "${this.name}": startMutationObserver #1.2`);
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
        if (!window || !MutationObserver) throw Error('MutationObserver is not available.');

        const observer = new MutationObserver((mutations) => {
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
        });

        observer.observe(doc.body, {
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
            this.insertInlineButtonInToView(view, insPoint, config)
        ),
        menuItem: <Function>({ }) => ((view: IView, insPoint: string) =>
            console.error('menuItem is not implemented')
        ) //ToDo: implement
    }

    public registerFeature(feature: IFeature): void {
        let actionConfig = feature.getAugmentationConfig(this.actionFactories, this.core);

        for (const viewId in actionConfig) {
            let view = this.getViewById(viewId);

            for (const insPoint in actionConfig[viewId]) {
                const actionFactories = actionConfig[viewId][insPoint];
                view.attachActionFactories(actionFactories, insPoint);
            }
        }
    }

    public unregisterFeature(feature: IFeature): void {
        console.log('unregisterFeature is not implemented');
    }

    private insertInlineButtonInToView(view: IView, insPoint: string, config: IButtonConfig): void {
        if (insPoint == "TWEET_SOUTH" || insPoint == "TWEET_COMBO") {
            this.insertInlineButtonInTo_Timeline(view, insPoint, config);
        } else if (insPoint == "DM_SOUTH") {
            this.insertInlineButtonInTo_DirectMessage(view, insPoint, config);
        }
    }

    private insertInlineButtonInTo_Timeline(view: IView, insPoint: string, config: IButtonConfig): void {
        // ToDo: calculate node from insPoint & view
        let nodes: NodeListOf<Element> = document.querySelectorAll('#timeline li.stream-item div.js-actions');

        nodes && nodes.forEach(node => {
            if (node.getElementsByClassName(config.class).length > 0) return;

            const element = this.createButtonHtml(config);

            element.addEventListener("click", function (event: any) {
                let tweetNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                let context = {
                    id: tweetNode.getAttribute('data-tweet-id'),
                    text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
                    authorFullname: tweetNode.querySelector('strong.fullname').innerText,
                    authorUsername: tweetNode.querySelector('span.username').innerText,
                    authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
                };
                config.exec(context);
            });
            node.appendChild(element);
            console.log('appended button to Timeline');
        });
    }

    private insertInlineButtonInTo_DirectMessage(view: IView, insPoint: string, config: IButtonConfig): void {
        // ToDo: calculate node from insPoint & view
        let nodes: NodeListOf<Element> = document.querySelectorAll('#dm_dialog li.DMInbox-conversationItem div.DMInboxItem');

        nodes && nodes.forEach(node => {
            if (node.getElementsByClassName(config.class).length > 0) return;

            const element = this.createButtonHtml(config);

            element.addEventListener("click", function (event: any) {
                let tweetNode = event.target.parentNode.parentNode.parentNode.parentNode;
                let context = {
                    threadId: tweetNode.getAttribute('data-thread-id'),
                    lastMessageId: tweetNode.getAttribute('data-last-message-id'),
                    fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
                    username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
                    text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
                };
                config.exec(context);
            });
            node.appendChild(element);
            console.log('appended button to DM_VIEW');

        });
    }

    private createButtonHtml(config:any): Node {
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
//#endregion TWITTER ADAPTER PACKAGE