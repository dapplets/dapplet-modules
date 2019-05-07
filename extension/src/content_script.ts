import { initBGFunctions } from "chrome-extension-message-wrapper";

import { ID, IAdapter, IFeature, IView } from './interfaces';

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
    TIMELINE_VIEW?: IView;
    DIRECT_MESSAGE?: IView;
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

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    const { bgFetchText } = await initBGFunctions(chrome);

    // ============ FEATURE LOADING ================

    const featureCode: string = await bgFetchText("/features/PMFeature.js");
    const Feature = eval('(function(){ ' + featureCode + ' return Feature; })();');

    const adapterId : ID = Feature.adapterId;
    console.log('adapterId', adapterId);
   

    // ============ ADAPTER LOADING ================

    const adapterCode: string = await bgFetchText(`/adapters/${adapterId}.js`);
    const Adapter = eval('(function(){ ' + adapterCode + ' return Adapter; })();');
    
    const adapter: IAdapter = new Adapter();

    const feature: IFeature = new Feature();

    // ============ FEATURE ATTACHING =============

    adapter.attachFeature(feature);
    console.log('attached');
 
    // ============ ADAPTER DEACTIVATION 5 SECONDS =============

    // await pause(10000);
    // adapter.deactivate(document);
    // console.log('deactivated');
}

init();