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

interface IButtonConfig {
    class: string;
    text: string;
    icon: string;
    handler(context: any): void; //onClick
}

//#endregion

//#region UTIL LIBRARY
abstract class BasicView implements IView {
    public isActive: boolean = false;
    public observer: MutationObserver = null;

    constructor(public name: string, public INSERT_POINTS: string[]) { }
    attachedActionFactories: { [key: string]: IAction[] } = {};

    attachActionFactories(actionFactories: IAction[], insPoint: ID): void {
        if (!this.attachedActionFactories[insPoint]) {
            this.attachedActionFactories[insPoint] = actionFactories;
        } else {
            this.attachedActionFactories[insPoint].push(...actionFactories);
        }

        console.log('actionFactory attached', { actionFactories, insPoint });
    }

    injectActions(doc: Document) {
        //ToDo: implement
        // this.attachedActionFactories.forEach((insPoint: string, actionFactories: IAction[]) => {
        //     actionFactories.forEach(actionFactory => actionFactory(this, insPoint))
        // });

        console.log('injectActions this.attachedActionFactories', this.attachedActionFactories);
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
        new class extends BasicView {
            public startMutationObserver(doc: Document) {
                console.log(`View "${this.name}": startMutationObserver`);
                const node = doc.getElementById('timeline');
                if (!this.observer) {
                    this.observer = new MutationObserver((mutations) => {
                        console.log(`View "${this.name}": mutated`);
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
                console.log(`View "${this.name}": startMutationObserver`);
                const node = doc.getElementById('dm_dialog');
                if (!this.observer) {
                    this.observer = new MutationObserver((mutations) => {
                        console.log(`View "${this.name}": mutated`);
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
        menuItem: <Function>({ }) => { /*"create menuItem" */ } //ToDo: implement
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

    private insertInlineButtonInToView(view: IView, insPoint: string, button: IButtonConfig): void {
        // ToDo: calculate node from insPoint & view
        let nodes = document.querySelectorAll('li.stream-item div.js-actions');
        // for (let node of nodes) {
        //     this.insertInlineButton(node, button);
        // }
    }

    private insertInlineButton(node: any, button: IButtonConfig): void {
        let element = this.createElementFromHTML(`<div class="${button.class} ProfileTweet-action">
            <button class="ProfileTweet-actionButton" type="button">
                <div class="IconContainer">
                    <img src="${button.icon}">
                </div>
                <span class="ProfileTweet-actionCount">
                    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">${button.text}</span>
                </span>
            </button>
        </div>`);

        element.addEventListener("click", function (event: any) {
            let tweetNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let context = {
                id: tweetNode.getAttribute('data-tweet-id'),
                text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
                authorFullname: tweetNode.querySelector('strong.fullname').innerText,
                authorUsername: tweetNode.querySelector('span.username').innerText,
                authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
            };
            button.handler(context);
        });

        node.appendChild(element);
    }

    private createElementFromHTML(htmlString: string): ChildNode {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }

}
//#endregion TWITTER ADAPTER PACKAGE
