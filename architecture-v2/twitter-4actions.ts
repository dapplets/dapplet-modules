//#region COMMON INTERFACES
interface IExtension {
    openOverlay(id:ID, ctx: any):void;
    sendWalletConnectTx(tx:any):void;
}

interface IModule {

}

interface IFeature extends IModule {
    getAugmentationConfig(actionFactories:{[key:string]:Function}, core:IExtension): any;
}

interface IAction {}

interface IView {
    INSERT_POINTS : ID[];
    attachActions(action: IAction, insPoint:ID): void; 
    activate(doc:Document): void;
    deactivate(doc:Document): void;
}


type ID = string;
//#endregion COMMON INTERFACES

//#region UTIL LIBRARY
abstract class BasicView implements IView {
    constructor(public name:string, public INSERT_POINTS:string[]){}
    attachedActions : { [key:string]:IAction[] } = {};
    
    attachActions(actions: IAction[], insPoint: string): void {
        if (!this.attachedActions[insPoint]) this.attachedActions[insPoint] = actions;
        else this.attachedActions[insPoint].push(...actions);
    }
    
    injectActions(doc:Document){
        /*
        //ToDo: implement
        this.attachedActions.forEach((insPoint:string, actions:IAction[]) => {
            insPoint.inject();
        });
        */
    }

    public activate(doc:Document): void {
        this.startMutationObserver(doc);
        this.injectActions(doc);
    }

    public deactivate(doc:Document) {
        this.stopMutationObserver(doc);
    }

    public stopMutationObserver(doc:Document) : void {
        //ToDo: implement
    }

    abstract startMutationObserver(doc:Document) : void;
}

//#endregion UTIL LIBRARY

//#region TWITTER ADAPTER PACKAGE
class TwitterAdapter {
    constructor(public readonly core: IExtension, public readonly doc: Document){
        this.initRouteObserver(doc);
    }

    public views:IView[] = [
        new class extends BasicView {
            public startMutationObserver(doc:Document){
                //ToDo: implement MutationObserver for TimeLine View
            }
        }("TIMELINE", ["TWEET_SOUTH","TWEET_COMBO"]),    
        new class extends BasicView {
            public startMutationObserver(doc:Document){
                //ToDo: implement MutationObserver for DirectMessage View
            }
        }("DIRECT_MESSAGE", ["DM_SOUTH","DM_EAST"]),        
    ]
    
    private initRouteObserver(doc:Document) {
        //ToDo: implement logic observing DOM and listening changing routes;
        //router activates views (and inits ViewObserver for them)
        // an old MutationObserver should be per View actually.
        // calls onRouteChanged(...)
    }

    private onRouteChanged(viewActivating: IView[], viewDeactivating: IView[]): void {
        for(let view of viewDeactivating) { view.deactivate(this.doc); }
        for(let view of viewActivating)   { view.activate(this.doc);   }
    }

    public actionFactories : {[key:string]:Function} = {
        button : (img: string, exec : (ctx:any) => void, label: (ctx:any) => string) => ( 
            //ToDo: onClick invalid; fix-it!
            (injector: Function) => injector("<div><img src='${img}' onclick='javascript:exec(ctx)'/>(${label}) </div>") 
        ),
        menuItem : <Function>  ({}) => { /*"create menuItem" */} //ToDo: implement
    }
  
    registerFeature(feature: IFeature): void {
        let actionConfig = feature.getAugmentationConfig(this.actionFactories, this.core);
        actionConfig.forEach((viewId, viewActions) => {
            let view = this.views[viewId];
            viewActions.forEach((insPoint:string,actions: IAction[]) => {
                view.attachActions(actions, insPoint);
            })
        });    
    }

}
//#endregion TWITTER ADAPTER PACKAGE

//#region TWITTER 4_ACTIONS FEATURE PACKAGE
class Twitter_4Actions implements IModule {
    public static readonly REQUIRES = {
        adapter : <ID>"0xSiteAdapter",
        overlay : <ID>"0xOverlay"
    }

    public getAugmentationConfig (
        {button, menuItem}: {[key:string]:Function},
        core : IExtension
    ):any {
        // called at view creation time
        let {overlay,adapter} = Twitter_4Actions.REQUIRES;
        return {
            TIMELINE_VIEW       :{ 
                //ToDo: Augmentation Server provides additional context related two-ways info used as labels in custom actions.
                // Example: number of likes, number of PMs opened for current tweet, displayed as "(9)" near from button.    
                AUGM_SERVER_URL : "ws://SOMEHOST/timeline/",
                TWEET_SOUTH : [
                    // call at view creation time
                    button({
                        img: "0xBASE_64_DATA01", 
                        exec: (ctx:any) => core.openOverlay(overlay, ctx),
                        label: "(${ctx.likesN})" //ToDo: ref or val? 
                        //ToDo: implement binding and reload by backgroung.js
                    }), 
                    button({
                        img: "0xBASE_64_DATA02", 
                        exec: (ctx:any) => core.sendWalletConnectTx({
                            id: ctx.tweetId,
                            author: ctx.authorId
                        }), 
                        //ToDo: what about global parameters?
                        //ToDo: return state object useful bound to button state?
                        label: "RTN" //ToDo: implement binding and reload
                    })
                ],
                TWEET_COMBO : [
                    menuItem({
                        text: "hello one", 
                        exec: (ctx:any) => core.sendWalletConnectTx({
                            id: ctx.tweetId,
                            author: ctx.authorId
                        }), 
                        //ToDo: what about global parameters?
                        //ToDo: return state object useful bound to button state?
                    })           
                ],
            }, 
            DIRECT_MESSAGE_VIEW : {
                //ToDo: Augmentation Server provides additional context related two-ways info used as labels in custom actions.
                // Example: number of likes, number of PMs opened for current tweet, displayed as "(9)" near from button.    
                AUGM_SERVER_URL : "ws://SOMEHOST/directmessage/",
                DM_SOUTH : [
                    button({
                        img: "0xBASE_64_DATA03", 
                        exec: (ctx:any) => core.sendWalletConnectTx({
                            id: ctx.tweetId,
                            author: ctx.authorId
                        }), 
                        //ToDo: what about global parameters?
                        //ToDo: return state object useful bound to button state?
                        label: (ctx:any) => ctx.text //ToDo: implement binding and reload
                    })
                ],
            }
        }
    }
}
//#endregion TWITTER 4_ACTIONS FEATURE
