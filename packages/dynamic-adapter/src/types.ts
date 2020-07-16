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
    featureConfigs: Map<any, { connections: IConnection[], proxiedSubs: any }>
    eventHandlers: { [event: string]: Function[] };
};

export interface IWidget<T> {
    mount(): void;
    unmount(): void;
    el: HTMLElement;
    state: T;
    insPointName: string;
}