export interface IModule { }

export interface IContentAdapter extends IModule { }

export interface IFeature extends IModule { }

export interface IResolver extends IModule {
    getBranch(): string;
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

    export function Inject(name: string): Function;

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
}