import { IFeature } from "@dapplets/dapplet-extension-types";

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