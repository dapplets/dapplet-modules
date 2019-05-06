//#region INTERFACES FROM EXTENSION

enum ScriptType {
    CONTENT_ADAPTER,
    FEATURE
    //, OVERLAY
}

interface IUserScript {
    id: string;
    version: string;
    type: ScriptType;
    //requires: string[];
}

interface IContentAdapter extends IUserScript {
    //controlTypes: string[];
    activate(dom: Document): void;
    deactivate(dom: Document): void;
    attachFeature(feature: any): void;
}

interface IFeature extends IUserScript {
    getContentAdapterId(): string;
}
//#endregion

//#region INTERFACES FROM ADAPTER
enum ControlTypes {
    INLINE_BUTTON,
    FLOATED_BUTTON
}

interface IButton {
    class: string;
    text: string;
    icon: string;
    handler(context: any): void; //onClick
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

    private attachedFeatures: ITwitterFeature[] = [];

    private observer: MutationObserver;
    private onMutate(mutationsList: MutationRecord[]): void {
        for (let feature of this.attachedFeatures) {
            let buttons = feature.createControlElements({}, ControlTypes.INLINE_BUTTON);

            for (let button of buttons) {
                for (let mutation of mutationsList) {
                    var targetContainers = (<any>mutation.target).querySelectorAll('li.stream-item div.js-actions');
                    for (let container of targetContainers) {
                        if (container != null) {
                            var widget = container.querySelector(`.${button.class}`);
                            if (widget == null) {
                                ContentAdapter.insertInlineButton(container, button);
                            }
                        }
                    }
                }
            }            
        }        
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
        this.attachedFeatures.push(feature);
    }

    private static createElementFromHTML(htmlString: string): ChildNode {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }

    private static insertInlineButton (node: any, button: IButton) {
        let element = ContentAdapter.createElementFromHTML(`<div class="${button.class} ProfileTweet-action">
            <button class="ProfileTweet-actionButton" type="button">
                <div class="IconContainer">
                    <img src="${button.icon}">
                </div>
                <span class="ProfileTweet-actionCount">
                    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">${button.text}</span>
                </span>
            </button>
        </div>`);

        element.addEventListener("click", function (event: any) {
            let tweetNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let context = {
                id: tweetNode.getAttribute('data-tweet-id'),
                text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
                authorFullname: tweetNode.querySelector('strong.fullname').innerText,
                authorUsername: tweetNode.querySelector('span.username').innerText,
                authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
            };
            button.handler(context);
        });

        node.appendChild(element);
    }
}
