import { IContentAdapter, IFeature } from '@dapplets/dapplet-extension'

export type T_TwitterActionFactory = any;

export type T_TwitterFeatureConfig = {
    connections?: {
        [name: string]: any
    },
    TWEET_EVENT?: Function[],
    THREAD_EVENT?: Function[],
    TWEET_AVATAR_BADGE?: T_TwitterActionFactory[],
    TWEET_USERNAME_BADGE?: T_TwitterActionFactory[],
    PROFILE_USERNAME_BADGE?: T_TwitterActionFactory[],
    PROFILE_AVATAR_BADGE?: T_TwitterActionFactory[],
    HEADING_USERNAME_BADGE?: T_TwitterActionFactory[],
    SUSPENDED_USERNAME_BADGE?: T_TwitterActionFactory[],
    TWEET_SOUTH?: T_TwitterActionFactory[],
    TWEET_COMBO?: T_TwitterActionFactory[],
    DM_SOUTH?: T_TwitterActionFactory[],
    PICTURE?: T_TwitterActionFactory[],
    BODY?: T_TwitterActionFactory[],
}

export interface ITwitterAdapter extends IContentAdapter {  //ToDo: eliminate excessive interfaces and use ambient module instead
    widgets: { [key: string]: Function };
}

export interface ITwitterFeature extends IFeature {
    config: T_TwitterFeatureConfig;
}