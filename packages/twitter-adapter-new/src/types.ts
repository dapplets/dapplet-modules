import { IView, IFeature } from "@dapplets/dapplet-extension-types"
import { ITwitterAdapter, T_TwitterFeatureConfig, T_TwitterActionFactory } from "@dapplets/twitter-adapter/src/types";

export type T_TwitterAdapterConfig = { [key in keyof T_TwitterViewSet]: ({ [key: string]: T_TwitterActionFactory[] }) }

export type T_TwitterViewSet = {
    TIMELINE?: IView;
    DIRECT_MESSAGE?: IView;
}

export type Context = any;

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
    exec(context: any): void;
    init(): void;
}


export interface IWidgetBuilder {
    containerSelector: string;
    contextSelector: string;
    observer?: MutationObserver;
    insPoints: { [key: string]: any };
    contextBuilder: (tweetNode: any) => any;
    //connect(e:Element):void;
}

export interface IAdapterFeature extends IFeature {
    config(): T_TwitterFeatureConfig;
}

export interface IWidgetBuilderConfig {
    containerSelector: string,
    contextSelector: string,
    insPoints: { [key: string]: any },
    contextBuilder: (tweetNode: any) => any
}