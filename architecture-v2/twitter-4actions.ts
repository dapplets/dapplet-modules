//#region COMMON INTERFACES
interface IExtension {
    openOverlay(id:ID, ctx: any):void;
    sendWalletConnectTx(tx:any):void;
}

interface IModule {

}

interface IDapplet extends IModule {
    getViewActionsConfig(controlFactories:IControlFactory[], core:IExtension): any;
}


type ID = string;
type IControlFactory = (arg:any)=>void;
//#endregion COMMON INTERFACES

//#region TWITTER 4_ACTIONS FEATURE PACKAGE
class Twitter_4Actions implements IModule {
    public static readonly REQUIRES = {
        adapter :  <ID>"0xSiteAdapter",
        overlay: <ID>"0xOverlay"
    }

    public getViewActionsConfig (
        [button, menuItem]:IControlFactory[],
        core : IExtension
    ):any {
        let {overlay,adapter} = TwitterDapplet.REQUIRES;
        return {
            TIMELINE       : {
                TWEET_SOUTH : [
                    button({
                        img: "0xBASE_64_DATA01", 
                        exec: (ctx:any) => core.openOverlay(overlay, ctx),
                        text: (ctx:any) => ctx.text //ToDo: implement binding and reload by backgroung.js
                    }), 
                    button({
                        img: "0xBASE_64_DATA02", 
                        exec: (ctx:any) => core.sendWalletConnectTx({
                            id: ctx.tweetId,
                            author: ctx.authorId
                        }), 
                        //ToDo: what about global parameters?
                        //ToDo: return state object useful bound to button state?
                        text: (ctx:any) => ctx.text //ToDo: implement binding and reload
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
            DIRECT_MESSAGE : {
                DM_SOUTH : [
                    button({
                        img: "0xBASE_64_DATA03", 
                        exec: (ctx:any) => core.sendWalletConnectTx({
                            id: ctx.tweetId,
                            author: ctx.authorId
                        }), 
                        //ToDo: what about global parameters?
                        //ToDo: return state object useful bound to button state?
                        text: (ctx:any) => ctx.text //ToDo: implement binding and reload
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
    public views = {
        //new View(TIMELINE) : [InsertionPointType.TWEET_SOUTH, InsertionPointType.TWEET_COMBO],
        //DIRECT_MESSAGE : [InsertionPointType.DM_SOUTH, InsertionPointType.DM_EAST,
    }
    constructor(public core: IExtension, public doc: Document){}

    public factories = {
        button : <IControlFactory> ({}) => { /*"create button code" */},
        menuItem : <IControlFactory>  ({}) => { /*"create menuItem" */}
    }

    
    registerDapplet(dapplet: IDapplet): void {
        let actionConfig = dapplet.getViewActionsConfig(this.factories, core);
        actionConfig.forEach((key, value) => {
            
        });    
    }

    deactivateView(viewId: string): void {
        throw new Error("Method not implemented.");
    }
    activateView(viewId: string): void {
        throw new Error("Method not implemented.");
    }

}
