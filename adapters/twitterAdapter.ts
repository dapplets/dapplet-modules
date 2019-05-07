//#region INTERFACES FROM EXTENSION

enum ScriptType {
    CONTENT_ADAPTER,
    FEATURE
    //, OVERLAY
}

interface IUserScript {
    id: string;
    version: string;
    type: ScriptType;
    //requires: string[];
}

interface IContentAdapter extends IUserScript {
    //controlTypes: string[];
    activate(dom: Document): void;
    deactivate(dom: Document): void;
    attachFeature(feature: any): void;
}

interface IFeature extends IUserScript {
    getContentAdapterId(): string;
}
//#endregion

//#region INTERFACES FROM ADAPTER
enum ControlTypes {
    INLINE_BUTTON,
    FLOATED_BUTTON
}

interface IButtonConfig {
    class: string;
    text: string;
    icon: string;
    handler(context: any): void; //onClick
}

interface ITwitterFeature extends IFeature {
    createControlElements(context: any, controlType: ControlTypes): IButtonConfig[];
}
//#endregion

class ContentAdapter implements IContentAdapter {
    public id: string = '1';
    public version: string = '0.0.1';
    public type: ScriptType = ScriptType.CONTENT_ADAPTER;
    public requires: string[] = [];

    private attachedFeatures: ITwitterFeature[] = [];

    private observer: MutationObserver;
    private onMutate(mutationsList: MutationRecord[]): void {
        for (let feature of this.attachedFeatures) {
            let buttons = feature.createControlElements({}, ControlTypes.INLINE_BUTTON);

            for (let button of buttons) {
                for (let mutation of mutationsList) {
                    var targetContainers = (<any>mutation.target).querySelectorAll('li.stream-item div.js-actions');
                    for (let container of targetContainers) {
                        if (container != null) {
                            var widget = container.querySelector(`.${button.class}`);
                            if (widget == null) {
                                ContentAdapter.insertInlineButton(container, button);
                            }
                        }
                    }
                }
            }
        }
    }

    public isSiteCompatible(doc: Document): boolean {
        return doc
            && doc.location
            && doc.location.hostname
            && doc.location.hostname === "twitter.com";
    }

    // TODO: rename
    public isPageCompatible(doc: Document): boolean {
        if (!doc) return false;
        const res = doc.querySelectorAll('#timeline .stream-item');

        return res && res.length > 0;
    }

    public activate(doc: Document): void {
        let me = this;
        if (!window || !MutationObserver) throw Error('MutationObserver is not available.');

        me.observer = new MutationObserver(function (mutationsList) {
            me.onMutate.call(me, mutationsList);
        });

        me.observer.observe(doc.body, {
            childList: true,
            subtree: true
        });
    }

    public deactivate(dom: Document): void {
        this.observer.disconnect();
    }

    public attachFeature(feature: ITwitterFeature): void {
        // TODO: onMutate
        this.attachedFeatures.push(feature);
    }
}

//#region COMMON INTERFACES
interface IExtension {
    openOverlay(id: ID, ctx: any): void;
    sendWalletConnectTx(tx: any): void;
}

interface IModule { }

interface IContentAdapter extends IModule {
    init(core: IExtension, doc: Document): void;
}

interface IFeature extends IModule {
    getAugmentationConfig(actionFactories: { [key: string]: Function }, core: IExtension): any;
}

interface IAction { }

interface IView {
    INSERT_POINTS: ID[];
    attachActionFactories(actions: IAction[], insPoint: ID): void;
    activate(doc: Document): void;
    deactivate(doc: Document): void;
}


type ID = string;
//#endregion COMMON INTERFACES

//#region UTIL LIBRARY
abstract class BasicView implements IView {
    constructor(public name: string, public INSERT_POINTS: string[]) { }
    attachedActionFactories: { [key: string]: IAction[] } = {};

    attachActionFactories(actionFactories: IAction[], insPoint: ID): void {
        if (!this.attachedActionFactories[insPoint]) this.attachedActionFactories[insPoint] = actionFactories;
        else this.attachedActionFactories[insPoint].push(...actionFactories);
    }

    injectActions(doc: Document) {
        //ToDo: implement
        this.attachedActionFactories.forEach((insPoint: string, actionFactories: IAction[]) => {
            actionFactories.forEach(actionFactory => actionFactory(this, insPoint))
        });
    }

    public activate(doc: Document): void {
        this.startMutationObserver(doc);
        this.injectActions(doc);
    }

    public deactivate(doc: Document) {
        this.stopMutationObserver(doc);
    }

    public stopMutationObserver(doc: Document): void {
        //ToDo: implement
    }

    abstract startMutationObserver(doc: Document): void;
}

//#endregion UTIL LIBRARY

//#region TWITTER ADAPTER PACKAGE
class ContentAdapter implements IContentAdapter {
    private core: IExtension = null;
    private doc: Document = null;

    // TODO: Constructor
    public init(core: IExtension, doc: Document) {
        this.core = core;
        this.doc = doc;
        this.initRouteObserver(doc);
    }

    public views: IView[] = [
        new class extends BasicView {
            public startMutationObserver(doc: Document) {
                //ToDo: implement MutationObserver for TimeLine View
            }
        }("TIMELINE", ["TWEET_SOUTH", "TWEET_COMBO"]),
        new class extends BasicView {
            public startMutationObserver(doc: Document) {
                //ToDo: implement MutationObserver for DirectMessage View
            }
        }("DIRECT_MESSAGE", ["DM_SOUTH", "DM_EAST"]),
    ]

    private initRouteObserver(doc: Document) {
        //ToDo: implement logic observing DOM and listening changing routes;
        //router activates views (and inits ViewObserver for them)
        // an old MutationObserver should be per View actually.
        // calls onRouteChanged(...)
    }

    private onRouteChanged(viewActivating: IView[], viewDeactivating: IView[]): void {
        for (let view of viewDeactivating) { view.deactivate(this.doc); }
        for (let view of viewActivating) { view.activate(this.doc); }
    }

    public actionFactories: { [key: string]: Function } = {
        button: (config: IButtonConfig) => ((view: IView, insPoint: string) =>
            this.insertInlineButtonInToView(view, insPoint, config)
        ),
        menuItem: <Function>({ }) => { /*"create menuItem" */ } //ToDo: implement
    }

    public registerFeature(feature: IFeature): void {
        let actionConfig = feature.getAugmentationConfig(this.actionFactories, this.core);
        actionConfig.forEach((viewId: string, viewConfig: any) => {
            let view = this.views[viewId];
            viewConfig.forEach((insPoint: string, actionFactories: IAction[]) => {
                view.attachActionFactories(actionFactories, insPoint);
            })
        });
    }

    private insertInlineButtonInToView(view: IView, insPoint: string, button: IButtonConfig): void {
        // ToDo: calculate node from insPoint & view
        let nodes = document.querySelectorAll('li.stream-item div.js-actions');
        for (let node of nodes) {
            this.insertInlineButton(node, button);
        }
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
