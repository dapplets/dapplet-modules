import { IContentAdapter, IFeature } from "@dapplets/dapplet-extension-types"

export type T_TwitterActionFactory = any;

export type T_TwitterFeatureConfig = {
    connections?: {
        [name: string]: Connection
    },
    TWEET_SOUTH?: T_TwitterActionFactory[],
    TWEET_COMBO?: T_TwitterActionFactory[],
    DM_SOUTH?: T_TwitterActionFactory[],
    PICTURE?: T_TwitterActionFactory[]
}

export interface ITwitterAdapter extends IContentAdapter {  //ToDo: eliminate excessive interfaces and use ambient module instead
    actionFactories: { [key: string]: Function };
}

export interface ITwitterFeature extends IFeature {
    config: T_TwitterFeatureConfig;
}