import { IContentAdapter, IFeature } from '@dapplets/dapplet-extension'

export type T_TwitterActionFactory = any;

export type T_TwitterFeatureConfig = {
    connections?: {
        [name: string]: any
    },
    POST?: (ctx?) => T_TwitterActionFactory[] | T_TwitterActionFactory,
    PROFILE?: (ctx?) => T_TwitterActionFactory[] | T_TwitterActionFactory,
    HEADING?: (ctx?) => T_TwitterActionFactory[] | T_TwitterActionFactory,
    SUSPENDED?: (ctx?) => T_TwitterActionFactory[] | T_TwitterActionFactory,

    POST_EVENT?: Function[],
    THREAD_EVENT?: Function[],
}

export interface ITwitterAdapter extends IContentAdapter<T_TwitterFeatureConfig> {  //ToDo: eliminate excessive interfaces and use ambient module instead
    // exports: (featureId: any) => ({ [key: string]: Function });
}

export interface ITwitterFeature extends IFeature {
    config: T_TwitterFeatureConfig;
}