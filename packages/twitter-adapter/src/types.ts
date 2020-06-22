import { IContentAdapter, IFeature } from '@dapplets/dapplet-extension'

export type T_TwitterActionFactory = any;

export type T_TwitterFeatureConfig = {
    connections?: {
        [name: string]: any
    },
    POST_EVENT?: Function[],
    THREAD_EVENT?: Function[],
    POST_AVATAR_BADGE?: T_TwitterActionFactory[],
    POST_USERNAME_BADGE?: T_TwitterActionFactory[],
    PROFILE_USERNAME_BADGE?: T_TwitterActionFactory[],
    PROFILE_AVATAR_BADGE?: T_TwitterActionFactory[],
    PROFILE_BUTTON_GROUP?: T_TwitterActionFactory[],
    HEADING_USERNAME_BADGE?: T_TwitterActionFactory[],
    SUSPENDED_USERNAME_BADGE?: T_TwitterActionFactory[],
    POST_SOUTH?: T_TwitterActionFactory[],
    POST_COMBO?: T_TwitterActionFactory[],
    DM_SOUTH?: T_TwitterActionFactory[],
    POST_PICTURE?: T_TwitterActionFactory[],
    BODY?: T_TwitterActionFactory[],
    POST_STARTER?: T_TwitterActionFactory[]
}

export interface ITwitterAdapter extends IContentAdapter<T_TwitterFeatureConfig> {  //ToDo: eliminate excessive interfaces and use ambient module instead
    widgets: { [key: string]: Function };
}

export interface ITwitterFeature extends IFeature {
    config: T_TwitterFeatureConfig;
}