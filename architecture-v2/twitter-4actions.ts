//#region COMMON INTERFACES
interface IExtension {
    openOverlay(id:ID, ctx: any):void;
    sendWalletConnectTx(tx:any):void;
    util: IUtil; 
}

interface IModule {

}

interface IDapplet extends IModule {
    getViewActionsConfig(controlFactories:{[key:string]:IControlFactory}, core:IExtension): any;
}

interface IAction {}

interface IView {
    INSERT_POINTS : ID[];
    attachActions(action: IAction, insPoint:ID): void; 
}


type ID = string;
type IControlFactory = (arg:any)=>void;
//#endregion COMMON INTERFACES

//#region UTIL LIBRARY
class BasicView implements IView {
    constructor(public name:string, public INSERT_POINTS:string[]){}
    attachedActions : { [key:string]:IAction[]; } = {};
    attachActions(actions: IAction[], insPoint: string): void {
        if (!this.attachedActions[insPoint]) this.attachedActions[insPoint] = actions;
        else this.attachedActions[insPoint].push(...actions);
    }
}

interface IUtil {
    createView(id:string, indPoints: string[]): IView;
}

class Util implements IUtil {
    public createView(id: string, insPoints: string[]): IView {
        return new BasicView(id, insPoints);
    }

}
//#endregion UTIL LIBRARY

//#region TWITTER 4_ACTIONS FEATURE PACKAGE
class Twitter_4Actions implements IModule {
    public static readonly REQUIRES = {
        adapter : <ID>"0xSiteAdapter",
        overlay : <ID>"0xOverlay"
    }

    public getViewActionsConfig (
        {button, menuItem}: {[key:string]:IControlFactory},
        core : IExtension
    ):any {
        // called at view creation time
        let {overlay,adapter} = Twitter_4Actions.REQUIRES;
        return {
            TIMELINE_VIEW       : {
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

//#region TWITTER ADAPTER PACKAGE

class TwitterAdapter implements ISiteAdapter {
    public id: string = '1';
    public version: string = '0.0.1';
    public views:IView[] = [
        this.core.util.createView("TIMELINE", ["TWEET_SOUTH","TWEET_COMBO"]),        
        this.core.util.createView("DIRECT_MESSAGE", ["DM_SOUTH","DM_EAST"]),        
    ]
    constructor(public readonly core: IExtension, public readonly doc: Document){}

    public actionFactories = {
        button : <IActionFactory> (img: string, exec : (ctx:any) => void, text: (ctx:any) => string) => ( 
            () => ("<html> </html>")
        ),
        menuItem : <IControlFactory>  ({}) => { /*"create menuItem" */}
    }
  
    registerDapplet(dapplet: IDapplet): void {
        let actionConfig = dapplet.getViewActionsConfig(this.actionFactories, this.core);
        actionConfig.forEach((viewId, viewActions) => {
            let view = this.views[viewId];
            viewActions.forEach((insPoint:string,actions: IAction[]) => {
                view.attachActions(actions, insPoint);
            })
        });    
    }

    deactivateView(viewId: string): void {
        throw new Error("Method not implemented.");
    }

    activateView(viewId: string): void {
        throw new Error("Method not implemented.");
    }

}
