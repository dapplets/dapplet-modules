// #region EXTENSION INTERFACES

type ID = string; // 0x1234...ef

interface ICore {
    openOverlay(overlayId: ID): void;
}

interface IFeature {
    activate(document: Document, core: ICore): void;
    deactivate(document: Document, core: ICore): void;
}

// #endregion

// #region TWITTER ADAPTER

class TwitterAdapter {
    constructor(private readonly document: Document) { }

    public getContext() : any {};
}

// #endregion

// import { TwitterAdapter } from "dapplet-twitter-adapter";
// import { ID, ICore, IFeature } from "dapplet-extension-types";

class Feature implements IFeature {

    activate(document: Document, core: ICore): void {
        const adapter = new TwitterAdapter(document);
        const context = adapter.getContext();


    } 
    
    deactivate(document: Document, core: ICore): void {
        
    }
}

