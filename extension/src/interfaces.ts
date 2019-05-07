//#region COMMON INTERFACES
export interface ICore {
    openOverlay(id: ID, ctx: any): void;
    sendWalletConnectTx(tx: any): void;
}

export interface IModule { }

export interface IContentAdapter extends IModule {
    init(core: ICore, doc: Document): void;
    registerFeature(feature: IFeature): void;
    unregisterFeature(feature: IFeature): void;
}

export interface IFeature extends IModule {
    getAugmentationConfig(actionFactories: { [key: string]: Function }, core: ICore): any;
}

export interface IAction { }

export interface IView {
    name: string;
    isActive: boolean;
    INSERT_POINTS: ID[];
    attachActionFactories(actions: IAction[], insPoint: ID): void;
    activate(doc: Document): void;
    deactivate(doc: Document): void;
}


export type ID = string;
//#endregion COMMON INTERFACES