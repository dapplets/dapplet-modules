//#region INTERFACES FROM EXTENSION

enum ScriptType {
    CONTENT_ADAPTER, 
    FEATURE 
    //, OVERLAY
}

interface IUserScript {
    id : string;
    version : string;
    type: ScriptType;
    //requires: string[];
}

interface IContentAdapter extends IUserScript {
    //controlTypes: string[];
    activate(dom: Document): void;
    deactivate(dom: Document): void;
    attachFeature(feature: any) : void;
}

interface IFeature extends IUserScript {
    getContentAdapterId() : string;
}
//#endregion

//#region INTERFACES FROM ADAPTER
enum ControlTypes {
    INLINE_BUTTON,
    FLOATED_BUTTON
}

interface IButton {
    text: string;
    handler(context: any) : void; //onClick
}

interface ITwitterFeature extends IFeature {
    createControlElements(context: any, controlType: ControlTypes): IButton[];
}
//#endregion

class ContentAdapter implements IContentAdapter {
    public id: string = '1';
    public version: string = '0.0.1';
    public type: ScriptType = ScriptType.CONTENT_ADAPTER;
    public requires: string[] = [];

    private observer: MutationObserver;
    private onMutate(mutation: MutationRecord[]) : void {
        console.log('mutated');
    }

    public isSiteCompatible(doc: Document): boolean {
        return doc 
            && doc.location 
            && doc.location.hostname 
            && doc.location.hostname === "twitter.com";
    }

    // TODO: rename
    public isPageCompatible(doc: Document): boolean {
        if (!doc) return false;
        const res = doc.querySelectorAll('#timeline .stream-item');

        return res && res.length > 0;
    }

    public activate(doc: Document): void {
        let me = this;
        if (!window || !MutationObserver) throw Error('MutationObserver is not available.');

        me.observer = new MutationObserver(function (mutationsList) {
            me.onMutate.call(me, mutationsList);
        });

        me.observer.observe(doc.body, {
            childList: true,
            subtree: true
        });
    }

    public deactivate(dom: Document): void {
        this.observer.disconnect();
    }

    public attachFeature(feature: ITwitterFeature): void {
        // TODO: onMutate
        let buttons = feature.createControlElements({}, ControlTypes.INLINE_BUTTON);
        for (let button of buttons) {
            console.log('inserted');
            let buttonDom = document.createElement('button');
            buttonDom.innerText = button.text;
            buttonDom.onclick = button.handler;
            document.body.appendChild(buttonDom);
        }
        return;
    }
}
