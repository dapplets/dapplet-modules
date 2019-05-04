import { IUserScript } from "./src/extensionInterfaces";

//#region INTERFACES
type Context= any;
type ID = string:

interface IAction {
    run(ctx: Context):void;
}

interface IActionFactory {
    insertionPointType: ID;
    createControl(ctx: Context): IAction;
}

interface ISiteAdapter {
    init(doc: Document):void;
    registerDapplet(dapplet: IDapplet):void;
    deactivateView(viewId:ID):void;
    activateView(viewId:ID):void;
}

type IDREF<T> = {id:ID, ref:T};

interface IDapplet {
    abstract siteAdapterId : ID;
    //getSiteAdapter(): IDREF<ISiteAdapter>;
    //getActionFactory(viewId: ID): IActionFactory[];
}

//#endregion

//#region Adaptor Executor
abstract class Extension {
    abstract async public loadUserObject<T>(id:ID): Promise<T>;

    public loadUserObjects(idrefs : IDREF<T>[]) : void{
        idrefs.forEach(idref => idref.ref = await this.loadUserObject(idref.id)); //ToDo: make concurrent lazy loading.
    } 

    public loadSiteAdapters(dapplets:IDapplet[]) : void {
        this.loadUserObjects(dapplets.map(d=>d.getSiteAdapter()));  
    }

    public attachDapplets(doc:Document, dapplets: IDapplet[]){
        this.loadSiteAdapters(dapplets);
        dapplets.forEach(d => d.getSiteAdapter().ref.registerDapplet(d)); //ToDo: lazy referencing

    }

    public executeSiteAdapter(doc:Document, adapter: ISiteAdapter, dapplets: IDapplet[]){
        adapter.init(doc);
        dapplets.forEach(f=>f.attachDapplet(adapter))
    }
}
//#endregion

//#region STDLIB PACKAGE
class Router {
    adapter : ISiteAdapter;
    
    constructor(adapter: ISiteAdapter) {
        this.adapter=adapter;
    }

}

//#endregion

//#region TWITTER ADAPTER PACKAGE
enum InsertionPointType {
    TWEET_SOUTH, TWEET_COMBO, DM_SOUTH, DM_EAST 
}

enum ViewType {
    TIMELINE, DIRECT_MESSAGE
}

class View {
    abstract insertionPointTypes = [];
}

interface IOverlay {}


class TwitterDapplet implements IDapplet {
    
    readonly siteAdapterId : ID = "ABCD";
    public [adapter, overlay] :[TwitterAdapter,IOverlay] = loadUserObjects("ADAPTER_ID");
    private [button, menuItem] = this.adapter.factories;

    public actions = {
        [ViewType.TIMELINE]       : {
            [InsertionPointType.TWEET_SOUTH] : [button({
                img: "0xjhkhkjh", onClick: loadUserObject(this.siteAdapterId);
            }), new Button(2)],
            [InsertionPointType.TWEET_COMBO] : [new Item(3), new Item(4)],
        }, 
        [ViewType.DIRECT_MESSAGE] : {
            [InsertionPointType.DM_SOUTH] : [new Button(5), new Button(6)],
        }
    }
}

class TwitterAdapter implements ISiteAdapter {
    public id: string = '1';
    public version: string = '0.0.1';
    public views = {
        //new View(TIMELINE) : [InsertionPointType.TWEET_SOUTH, InsertionPointType.TWEET_COMBO],
        //DIRECT_MESSAGE : [InsertionPointType.DM_SOUTH, InsertionPointType.DM_EAST,
    }

    public factories = {
        button : ({}) => { /*"create button code" */},
        menuItem : ({}) => { /*"create menuItem" */}
    }

    init(doc: Document): void {
        throw new Error("Method not implemented.");
    }
    registerDapplet(dapplet: IDapplet): void {
        dapplet.ac
    }
    deactivateView(viewId: string): void {
        throw new Error("Method not implemented.");
    }
    activateView(viewId: string): void {
        throw new Error("Method not implemented.");
    }

}

class TwitterRouter implements IRouter {
    adapter: ISiteAdapter;
    public onRouteChanged(viewActivating: ID[], viewDeactivating: ID[]): void {
        for(let viewId of viewDeactivating) { this.adapter.deactivateView(viewId); }
        for(let viewId of viewActivating)  { this.adapter.activateView(viewId); }
    }
    constructor(doc:Document) {

    }
}

class TwitterMutationObserver  {
    private observer: MutationObserver;
    private onMutate(mutation: MutationRecord[]) : void {
        console.log('mutated');
    }

    public isSiteCompatible(doc: Document): boolean {
        return doc 
            && doc.location 
            && doc.location.hostname 
            && doc.location.hostname === "twitter.com";
    }

    public activate(doc: Document): void {
        this.initRouter(doc);
        this.initMutationObserver(doc);
    }

    private initMutationObserver(doc: Document) {
        let me = this;
        if (!window || !MutationObserver)
            throw Error('MutationObserver is not available.');
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

    public onRouteChanged(doc:Document){
        this.adapters.forEach(adapter => {
            if (!adapter.isActive() && adapter.shouldBeActive())        adapter.activate(doc);
            else if (adapter.isActive() && !adapter.shouldBeActive())   adapter.deactivate(doc);
        });
    }

    public registerAdapter(adapter: IContentAdapter){
        //ToDo check duplicates
        this.adapters.push(adapter);
    }
}

class TwitterTimelineAdapter extends TwitterBaseAdapter {

    public canBeActivated(doc: Document): boolean {
        if (!doc) return false;
        const res = doc.querySelectorAll('#timeline .stream-item');

        return res && res.length > 0;
    }

    public attachDapplet(feature: ITwitterDapplet): void {
        // TODO: onMutate
        let buttons = feature.createControlElements({}, ControlTypes.INLINE_BUTTON);
        for (let button of buttons) {
            console.log('inserted');
            let buttonDom = document.createElement('button');
            buttonDom.innerText = button.text;
            buttonDom.onclick = button.handler;
            document.body.appendChild(buttonDom);
        }
        return;
    }
}

class TwitterDirectMessageAdapter extends TwitterBaseAdapter {

    public canBeActivated(doc: Document): boolean {
        if (!doc) return false;
        const res = doc.querySelectorAll('#dm_dialog .DMInbox-conversationItem');

        return res && res.length > 0;
    }

    public attachDapplet(feature: ITwitterDapplet): void {
        // TODO: onMutate
        let buttons = feature.createControlElements({}, ControlTypes.INLINE_BUTTON);
        for (let button of buttons) {
            console.log('inserted');
            let buttonDom = document.createElement('button');
            buttonDom.innerText = button.text;
            buttonDom.onclick = button.handler;
            document.body.appendChild(buttonDom);
        }
        return;
    }
}

//#endregion