import { IFeature } from "@dapplets/dapplet-extension";

export interface IWidgetBuilderConfig {
    containerSelector: string,
    contextSelector: string,
    insPoints: { [key: string]: any },
    contextBuilder: (tweetNode: any) => any
}

export type Context = {
    parsed: any,
    features: Map<IFeature, { subscriptions: any[], proxiedSubs: any }>
};

export interface IWidget<T> {
    mount(): void;
    unmount(): void;
    el: HTMLElement;
    state: T;
}