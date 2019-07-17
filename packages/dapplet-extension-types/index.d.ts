export interface ICore {
    openOverlay(id: ID, ctx: any): void;
    sendWalletConnectTx(tx: any): void;
}

export interface IModule { }

export interface IContentAdapter extends IModule {
    //init(core: ICore, doc: Document): void;
    //registerFeature(feature: IFeature, doc: Document, core: ICore): void;
    //unregisterFeature(feature: IFeature): void;
}

export interface IFeature extends IModule {
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


declare global {

    export function Load(name: string): Function;

    export var Core: {
        openOverlay: (url: string, handler: Function) => void,
        sendMessageToOverlay: (msg: string) => void,
        sendWalletConnectTx: (dappletId: string, metadata: any) => Promise<any>,
        connect: (url: string) => Connection,
        overlay: (url: string, title: string) => Overlay
    };

    export class Connection {
        subscribe: (id: string, handler: (message: any) => void) => void
        // ToDo: add publish
    }

    export class Overlay {
        subscribe: (topic: string, handler: Function, threading?: SubscribeOptions) => void
        unsubscribe: (topic: string) => void;
        publish: (topic: string, ...args: any) => void
        open: (callback?: Function) => void
        close: () => void
        toggle: () => void
        isOpened: boolean
        // ToDo: do we need show/hide methods?
    }

    export enum SubscribeOptions {
        SINGLE_THREAD,
        MULTI_THREAD
    }

    export function Injectable(constructor: Function);

    export abstract class AbstractFeature {
        abstract activate(): void;
        abstract deactivate(): void;
    }
}