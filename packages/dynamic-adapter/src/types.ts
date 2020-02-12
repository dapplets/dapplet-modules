import { IFeature, IConnection } from "@dapplets/dapplet-extension";

export interface IWidgetBuilderConfig {
    containerSelector: string,
    contextSelector: string,
    insPoints: { [key: string]: any },
    contextBuilder: (tweetNode: any) => any,
    contextType: string,
    contextEvent: string
}

export type Context = {
    parsed: any,
    features: Map<IFeature, { connections: IConnection[], proxiedSubs: any }>
};

export interface IWidget<T> {
    mount(): void;
    unmount(): void;
    el: HTMLElement;
    state: T;
    insPointName:string;
}