namespace scratchpad_01 {
//#region COMMON INTERFACES
    interface ICore {
        openOverlay(overlayId:ID):void;
    }

    interface IAdapter {
        //ToDo: any member?
    } 

    interface IFeature {
        //ToDo: any member?
    }

    type T_ActionFactory = (viewId:string,insPoint:string,ctx:any)=>any;
    type T_TwitterActionFactoryConstructor = (config:any) => T_ActionFactory;
//#endregion COMMON INTERFACES

//#region TWITTER INTERFACES
    type T_TwitterAdapterConfig = {[key in keyof T_TwitterViewSet]:({[key:string]:T_ActionFactory[]})}
    type T_TwitterActionFactoryConstructorSet = {
        button: T_TwitterActionFactoryConstructor;
        menuItem: T_TwitterActionFactoryConstructor;
    }
    type T_TwitterViewSet = {
        TIMELINE_VIEW?:  IView;
        DIRECT_MESSAGE?: IView;
    }

    //ToDo: define content/context types
    type TweetContext = {
        id: number;
        text: string;
    }
    type DIRECT_MESSAGE = {
        id: number;
        text: string;
        from_name: string; 
    }

    interface ITwitterFeature extends IFeature {
        getFactoryConfig({button, menuItem}:T_TwitterActionFactoryConstructorSet):T_TwitterAdapterConfig;
    }

//#endregion TWITTER INTERFACES

//#region TWITTER ADAPTER
    class TwitterAdapter implements IAdapter {
        public constructor(public readonly core:ICore){}

        private readonly factories : T_TwitterActionFactoryConstructorSet = {
            button: null,  //ToDo: implement
            menuItem: null //ToDo: implement
        }

        public main():void{
            let feature = new TwitterFeature(this.core);
            feature.getFactoryConfig(this.factories);
        }
    }
//#endregion TWITTER ADAPTER

//#region TWITTER FEATURE
    class TwitterFeature implements ITwitterFeature {
        public static readonly overlayId: ID = "0xABCDEF";
        constructor(public readonly core: ICore){}

        public getFactoryConfig({button, menuItem}:T_TwitterActionFactoryConstructorSet):T_TwitterAdapterConfig{
            return {
                TIMELINE_VIEW : {
                    BTN_PANEL : [
                        button ({
                            img: "0xBase64",
                            exec: (ctx:any) => this.core.openOverlay(TwitterFeature.overlayId)
                        })
                    ],
                    DROPDOWN_MENU: [

                    ]
                }
            }
        }
    }
//#endregion TWITTER FEATURE

}//namespace