import { IContentAdapter } from "@dapplets/dapplet-extension-types";
export declare type T_TwitterActionFactory = any;
export declare type T_TwitterFeatureConfig = {
    [key: string]: T_TwitterActionFactory[];
};
export interface ITwitterAdapter extends IContentAdapter {
    actionFactories: {
        [key: string]: Function;
    };
    addFeature(featureConfig: T_TwitterFeatureConfig): void;
}
