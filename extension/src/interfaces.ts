export enum ScriptType {
    CONTENT_ADAPTER,
    FEATURE
    //, OVERLAY
}

export interface IUserScript {
    id: string;
    version: string;
    type: ScriptType;
    //requires: string[];
}

export interface IContentAdapter extends IUserScript {
    //controlTypes: string[];
    isSiteCompatible(dom: Document): boolean;
    isPageCompatible(dom: Document): boolean;
    activate(dom: Document): void;
    deactivate(dom: Document): void;
    attachFeature(feature: any): void;
}

export interface IFeature extends IUserScript {
    getContentAdapterId(): string;
}