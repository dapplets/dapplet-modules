// //#region INTERFACES FROM EXTENSION

// enum ScriptType {
//     CONTENT_ADAPTER, 
//     FEATURE 
//     //, OVERLAY
// }

// interface IUserScript {
//     id : string;
//     version : string;
//     type: ScriptType;
//     //requires: string[];
// }

// interface IContentAdapter extends IUserScript {
//     //controlTypes: string[];
//     activate(dom: Document): void;
//     deactivate(dom: Document): void;
//     attachFeature(feature: any) : void;
// }

// interface IFeature extends IUserScript {
//     getContentAdapterId() : string;
// }
// //#endregion

// //#region INTERFACES FROM ADAPTER
// enum ControlTypes {
//     INLINE_BUTTON,
//     FLOATED_BUTTON
// }

// interface IButton {
//     text: string;
//     handler(context: any) : void; //onClick
// }

// interface ITwitterFeature extends IFeature {
//     createControlElements(context: any, controlType: ControlTypes): IButton[];
// }
// //#endregion

// const METAMASK_ICON : string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjhJREFUeNrUVM9rE1EQ/t7Lbn6UqAlFscYNYrfVKoXSi0ehLcSDknjwpFC8i5fiMbUHqQriPyD17B+QoqDQg1QoKB5Ec9GaNP4IVtq6bXa72d23zm6aEDcm4K0ODDv7DfPtNzPvLfDf2dyFdIJ87F9q2N/AfEZJhhhbojBFPjT3bG2rPf/ttnrcBSZfV2w1+7iUb+JSkOjWRGqAM7ZCoeK998lYqd45+caLhcMO2DYGiWjkVcnBu6q4317bQRaV+RW2R+SZbmG4vIHh0WMclg1sWMDToo3vmoAtxKP2Wh4ko/ZmgtjyqgOX5EghoPDB8onI3s4///KpK9lsRjlLj3Q7FiaCqSHJV8VI8gTFHkbkavCjf5DRrL6SgPetGVD24hkZ/X0Mu1YDGzjEfCwi4VdPMm9rR+KsqCQZ0kmOSVLhEXnmOLQA0WjVw66NhxeCZB0LmD4nJ/jegTF2gZrhtnJmHYhFGW3VhSsgeirTH6gniGiq+R6L0sxkoLITxnwxjfWdkI//MGW4nEs9lZGGm8FTfDDOMBqz8FCpwKZWTZrdqcM26pbbWxnN5bpX0HSdWlz/6WBzS0DTG5g3M4doohGWpU4SXcm0Gl5uU1HTDZqRadLZk7m/AINizZCgx1V8rKfGbhTsJc5Y1zYXKHXJvzouqoyxRSmZfFE7ncvYR8dzkiy3lKytlmH2L2rCLXW/6OX84F3dEoWRe5+XO25C4cnlSDic4yGe1nVj2xFi+nz26ub+/wf+FmAAmiLTFxlZBnAAAAAASUVORK5CYII=';

// class Feature implements IFeature {
//     public id: string = '1';
//     public version: string = '0.0.1';
//     public type: ScriptType = ScriptType.FEATURE;

//     public getContentAdapterId() : string {
//         return "twitterAdapter";
//     }

//     public createControlElements(context: any, controlType: ControlTypes): IButton[] {

//         if (controlType == ControlTypes.INLINE_BUTTON) {
//             return [<IButton>{
//                 class: 'metamask-widget-tweet',
//                 text: 'Add to Registry',
//                 icon: METAMASK_ICON,
//                 handler: function (context: any): void {
//                     console.log('METAMASK BUTTON CLICKED', context);
//                 }
//             }];
//         }

//         return [];
//     }
// }

//#region COMMON INTERFACES

type ID = string; // 0x1234...ef

type T_ActionFactory = (view: IView, insPoint: string, ctx: any) => any;

interface ICore {
    openOverlay(overlayId: ID): void;
}

interface IAdapter {
    //ToDo: any member?
}

interface IFeature {
    //ToDo: any member?
}

interface IAction {

}

interface IView {
    INSERT_POINTS: ID[];
    attachActions(action: IAction, insPoint: ID): void;
    activate(doc: Document): void;
    deactivate(doc: Document): void;
}

//#endregion COMMON INTERFACES

//#region TWITTER INTERFACES
//ToDo: define more specific return type instead of "any" 
//ToDo: is more specific context type instead of "any" really necessary?  
type T_TwitterActionFactory = (view: IView, insPoint: string, ctx: T_TwitterContent) => any;
type T_TwitterActionFactoryConstructor<T> = (config: T) => T_TwitterActionFactory;
//ToDo:  !!! [key:string] must be constrained
type T_TwitterAdapterConfig = { [key in keyof T_TwitterViewSet]: ({ [key: string]: T_TwitterActionFactory[] }) }
type T_TwitterActionFactoryConstructorSet = {
    button: T_TwitterActionFactoryConstructor<T_ButtonConfig>;
    menuItem: T_TwitterActionFactoryConstructor<T_MenuItemConfig>;
}
type T_TwitterViewSet = {
    //TIMELINE_VIEW?: IView;
    DIRECT_MESSAGE?: IView;
    TIMELINE_VIEW?: {
        BTN_PANEL: T_TwitterActionFactory[],
        DROPDOWN_MENU: T_TwitterActionFactory[]
    };
}
type T_ButtonConfig = {
    img: string;
    //ToDo: is more specific context type instead of "any" really necessary?  
    exec: (ctx: any) => void;
    label?: string;
}
type T_MenuItemConfig = {
    text: string;
    //ToDo: is more specific context type instead of "any" really necessary?  
    exec: (ctx: any) => void;
}

//ToDo: define content/context types
//ToDo: may be graphQL-like definition?
type T_TwitterContent = Tweet | DIRECT_MESSAGE;
type Tweet = {
    id: number;
    text: string;
}
type DIRECT_MESSAGE = {
    id: number;
    text: string;
    from_name: string;
}

interface ITwitterFeature extends IFeature {
    getFactoryConfig({ button, menuItem }: T_TwitterActionFactoryConstructorSet): T_TwitterAdapterConfig;
}

//#endregion TWITTER INTERFACES

class Feature implements ITwitterFeature {
    public static readonly overlayId: ID = "0xABCDEF";
    public static readonly adapterId: ID = "twitterAdapter"; //"0x123456";

    constructor(public readonly core: ICore){}

    public getFactoryConfig({button, menuItem}:T_TwitterActionFactoryConstructorSet):T_TwitterAdapterConfig{
        return {
            TIMELINE_VIEW : {
                //ToDo: !!! AUGM_SERVER_URL as @decorator or TIMELINE_VIEW({url:URL}) 
                BTN_PANEL : [
                    button ({
                        img: "0xBase64",
                        exec: (ctx:any) => this.core.openOverlay(Feature.overlayId)
                    }),
                    button ({
                        img: "0xBase64",
                        //ToDo: check better constrsints for "ctx:any"
                        exec: (ctx:any) => this.core.openOverlay(Feature.overlayId),
                        //ToDo: !!! check constraints
                        label: "prop_name"
                    })
                ],
                DROPDOWN_MENU: [
                    menuItem ({
                        text: "menu title 123",
                        exec: (ctx:any) => this.core.openOverlay(Feature.overlayId)
                    })
                ],
            }
        }
    }
}