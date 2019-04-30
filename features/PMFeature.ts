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

class Feature implements IFeature {
    public id: string = '1';
    public version: string = '0.0.1';
    public type: ScriptType = ScriptType.FEATURE;

    public getContentAdapterId() : string {
        return "twitterAdapter";
    }

    public createControlElements(context: any, controlType: ControlTypes): IButton[] {

        if (controlType == ControlTypes.INLINE_BUTTON) {
            return [<IButton>{
                text: 'Add to Registry',
                handler: function (context: any): void {
                    console.log('Hello World!');
                }
            }];
        }

        return [];
    }
}