import { IContentAdapter, IFeature } from "@dapplets/dapplet-extension-types"

export type T_TwitterActionFactory = any;

export type T_TwitterFeatureConfig = { [key: string]: T_TwitterActionFactory[] }

export interface ITwitterAdapter extends IContentAdapter {  //ToDo: eliminate excessive interfaces and use ambient module instead
    actionFactories: (conn?:Connection) => { [key: string]: Function };
}

export interface ITwitterFeature extends IFeature {
    config: T_TwitterFeatureConfig;
}