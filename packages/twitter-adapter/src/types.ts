import { IView, IFeature, ICore, ID } from "@dapplets/dapplet-extension-types" 

export type T_TwitterActionFactory = any;

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
    getAugmentationConfig(actionFactories: { [key: string]: Function }, core: ICore): T_TwitterAdapterConfig;
}

export interface IButtonConfig {
    class: string;
    label: string;
    img: string;
    exec(context: any): void; //onClick
}