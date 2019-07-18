import { IContentAdapter } from "@dapplets/dapplet-extension-types"

export type T_TwitterActionFactory = any;

export type T_TwitterFeatureConfig = { [key: string]: T_TwitterActionFactory[] }

export interface ITwitterAdapter extends IContentAdapter {  //ToDo: eliminate excessive interfaces and use ambient module instead
    actionFactories: { [key: string]: Function };
    addFeature(featureConfig: T_TwitterFeatureConfig): void;
}