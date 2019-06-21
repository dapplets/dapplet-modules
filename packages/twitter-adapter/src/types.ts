import { IView, IFeature, ICore, ID } from "@dapplets/dapplet-extension-types"

export type T_TwitterActionFactory = any;

export type T_TwitterAdapterConfig = { [key in keyof T_TwitterViewSet]: ({ [key: string]: T_TwitterActionFactory[] }) }
export type T_TwitterFeatureConfig = { [key: string]: T_TwitterActionFactory[] }

export type T_TwitterViewSet = {
    TIMELINE?: IView;
    DIRECT_MESSAGE?: IView;
}

export type Context = any;

export interface ITwitterAdapter {  //ToDo: eliminate excessive interfaces and use ambient module instead
    actionFactories: { [key: string]: Function };
    addFeature(featureConfig: T_TwitterFeatureConfig): void;
}

export type T_InsertConfig = {
    name: string;
    toContext: (node: Element) => Element;
    context: (node: Element) => Context;
    selector: string;
}

export interface ITwitterFeature extends IFeature {
    //getAugmentationConfig(actionFactories: { [key: string]: Function }, core: ICore): T_TwitterAdapterConfig;
}

export interface IButtonConfig {
    clazz: string;
    label: string;
    img: string;
    exec(context: any): void; //onClick
}


export interface IWidgetBuilder {
    isTwitterDesignNew: boolean;
    querySelector: string;
    observer?: MutationObserver;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    //connect(e:Element):void;
}

export interface IAdapterFeature extends IFeature {
    config(): T_TwitterFeatureConfig;
}

export interface IWidgetBuilderConfig {
    querySelector: string,
    insPoints: { [key: string]: any },
    contextBuilder: (tweetNode: any) => any
}