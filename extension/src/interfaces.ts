// export enum ScriptType {
//     CONTENT_ADAPTER,
//     FEATURE
//     //, OVERLAY
// }

// export interface IUserScript {
//     id: string;
//     version: string;
//     type: ScriptType;
//     //requires: string[];
// }

// export interface IContentAdapter extends IUserScript {
//     //controlTypes: string[];
//     isSiteCompatible(dom: Document): boolean;
//     isPageCompatible(dom: Document): boolean;
//     activate(dom: Document): void;
//     deactivate(dom: Document): void;
//     attachFeature(feature: any): void;
// }

// export interface IFeature extends IUserScript {
//     getContentAdapterId(): string;
// }

// //#region COMMON INTERFACES
// export interface IExtension {
//     openOverlay(id:ID, ctx: any):void;
//     sendWalletConnectTx(tx:any):void;
// }

// export interface IModule { }

// export interface IContentAdapter extends IModule {
//     init(core: IExtension, doc: Document):void;
// }

// export interface IFeature extends IModule {
//     getAugmentationConfig(actionFactories:{[key:string]:Function}, core:IExtension): any;
// }

// export interface IAction {}

// export interface IView {
//     INSERT_POINTS : ID[];
//     attachActions(action: IAction, insPoint:ID): void; 
//     activate(doc:Document): void;
//     deactivate(doc:Document): void;
// }


// export type ID = string;
// //#endregion COMMON INTERFACES

//#region COMMON INTERFACES

export type ID = string; // 0x1234...ef

export type T_ActionFactory = (view: IView, insPoint: string, ctx: any) => any;

export interface ICore {
    openOverlay(overlayId: ID): void;
}

export interface IAdapter {
    //ToDo: any member?
    attachFeature(feature: IFeature): void;
}

export interface IFeature {
    //ToDo: any member?
}

export interface IAction {

}

export interface IView {
    INSERT_POINTS: ID[];
    attachActions(action: IAction, insPoint: ID): void;
    activate(doc: Document): void;
    deactivate(doc: Document): void;
}

//#endregion COMMON INTERFACES