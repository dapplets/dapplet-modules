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

//#region TWITTER 4_ACTIONS FEATURE PACKAGE
const METAMASK_ICON : string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjhJREFUeNrUVM9rE1EQ/t7Lbn6UqAlFscYNYrfVKoXSi0ehLcSDknjwpFC8i5fiMbUHqQriPyD17B+QoqDQg1QoKB5Ec9GaNP4IVtq6bXa72d23zm6aEDcm4K0ODDv7DfPtNzPvLfDf2dyFdIJ87F9q2N/AfEZJhhhbojBFPjT3bG2rPf/ttnrcBSZfV2w1+7iUb+JSkOjWRGqAM7ZCoeK998lYqd45+caLhcMO2DYGiWjkVcnBu6q4317bQRaV+RW2R+SZbmG4vIHh0WMclg1sWMDToo3vmoAtxKP2Wh4ko/ZmgtjyqgOX5EghoPDB8onI3s4///KpK9lsRjlLj3Q7FiaCqSHJV8VI8gTFHkbkavCjf5DRrL6SgPetGVD24hkZ/X0Mu1YDGzjEfCwi4VdPMm9rR+KsqCQZ0kmOSVLhEXnmOLQA0WjVw66NhxeCZB0LmD4nJ/jegTF2gZrhtnJmHYhFGW3VhSsgeirTH6gniGiq+R6L0sxkoLITxnwxjfWdkI//MGW4nEs9lZGGm8FTfDDOMBqz8FCpwKZWTZrdqcM26pbbWxnN5bpX0HSdWlz/6WBzS0DTG5g3M4doohGWpU4SXcm0Gl5uU1HTDZqRadLZk7m/AINizZCgx1V8rKfGbhTsJc5Y1zYXKHXJvzouqoyxRSmZfFE7ncvYR8dzkiy3lKytlmH2L2rCLXW/6OX84F3dEoWRe5+XO25C4cnlSDic4yGe1nVj2xFi+nz26ub+/wf+FmAAmiLTFxlZBnAAAAAASUVORK5CYII=';
const ETHEREUM_ICON : string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAgCAYAAADwvkPPAAAACXBIWXMAAAsTAAALEwEAmpwYAAADn0lEQVRIiaWWTWxUVRTHf+e+GabfIrXFmGhNIJhIUIhdWKsGEjFRE+JmKEVropIWOqVS2krRAGM0xlBmEGypNSHxI+l0SoILidWdLsREAkSQpPUrcWEwtoSkbVqmM+8eF7STmelMp9Szevd//vd3T/LuO+fBEqKut/PZxv5Gbz6fyWdo6OuoFOzgZLws8L9hcUsIuFtF3/H3dt67bNj2Ux3PgL48tyxz1H6wmF9yJfzhtkLHZ64Aa9MzWjsYCJ+/o8qcAvPWQhCA9PiH/M6SYf6P2x9GOZDjnE2esft3LQkWDAaN49IP5LwKqvL+Kz0Hy/PCRu+ZfA14MhcIAGHVrMy+t1BOifoP31htvZ4RgZWLwuYLVFMdbem+lL0yrye0RBCAiNieYDCYZCQf6nvatyq8lLUEuArMZEnVjFZONqTB/OG2QjX0ZRgTqA6g8ng0EHpEPDwAehhkLO0g5ai//8BdSZjH57yNsmau+jGQd7FOVUFx2etg1+/obf/JxjmMsV+4MbcKpFFgdI5Xadx4EEDqe9rWq5jLoFcVTky48Wi5z1mVSHj2ALtBK1IKcVGNGnG6140VXxmtmHoBtEOhVo1sNFacLaCbB5vD1ajzy0rH90ki4fwFeigDBOAgstNiL49UTAyr2ulIc2izMfYJXPuU+If8jvNv1TYR3afwdLYXkCcuisrR6+MlZ50NW547JNAHPLgMEMB9CP6Sotm4sWJPq5pqkO+XCbuoojUer3vaeF15VIzucgtjflV5EfhtiZAbCE1GprcalR1x19loBlrCX6N6y8ys+FWgylsqmxT2ATdzQCxKb6zk1kNqZcJq0TWLFESbQ8MGwK0o7RLkd0RPxCe54FhGXJ9dCxwHEkmM6A8G85hrnI98UwVREY0AUyumaYeUD73uZOcacewloOz2Rs4ZY/YDqGuPIPrNjRLzZfkkBxV9k9stylWoiQZCFwCSHfPa8PmbG56v/RPBPyetU9XdqiRcj6cL164umuUcsC25TzkSbQkNzjPSukak5diQIv0pkhe0w0kk/haRr0i/Pj/+M16aNmAWNEcbc9vmukRqFGesp9Q1Dd8Fg4lUcQHszP7jM8ayHXQ6MzcfKtIabe3+I1PPOlAie0MjItKcg3U2uufYp9kSOUddpDn0mSCfZ8jXxUMTgt4RDCDBdCClb2Esr0aaQuO5/IvCzgROTVlX64AY6MmBvaFvF/Pn/XGJtoZ/VpU6N6Zd+bz/AdGOYJE0REqSAAAAAElFTkSuQmCC';

class Feature implements IFeature {
    public static readonly REQUIRES = {
        adapter : <ID>"twitterAdapter", //<ID>"0xSiteAdapter",
        overlay : <ID>"0xOverlay"
    }

    public getAugmentationConfig (
        {button, menuItem}: {[key:string]:Function},
        core : ICore
    ):any {
        // called at view creation time
        let {overlay,adapter} = Feature.REQUIRES;
        return {
            TIMELINE       : {
                //ToDo: Augmentation Server provides additional context related two-ways info used as labels in custom actions.
                // Example: number of likes, number of PMs opened for current tweet, displayed as "(9)" near from button.    
                //AUGM_SERVER_URL : "ws://SOMEHOST/timeline/",
                TWEET_SOUTH : [
                    // call at view creation time
                    button({
                        img: METAMASK_ICON, 
                        exec: (ctx:any) => core.openOverlay(overlay, ctx),
                        label: "(${ctx.likesN})" //ToDo: ref or val? 
                        //ToDo: implement binding and reload by backgroung.js
                    }), 
                    button({
                        img: ETHEREUM_ICON, 
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
            DIRECT_MESSAGE : {
                //ToDo: Augmentation Server provides additional context related two-ways info used as labels in custom actions.
                // Example: number of likes, number of PMs opened for current tweet, displayed as "(9)" near from button.    
                //AUGM_SERVER_URL : "ws://SOMEHOST/directmessage/",
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