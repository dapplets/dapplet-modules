import { IFeature } from '@dapplets/dapplet-extension-types';
import { IDynamicAdapter } from '@dapplets/dynamic-adapter';
import { IButtonState, Button } from './button';
import { IPictureState, Picture } from './picture';

@Injectable
export default class TwitterAdapter {

    @Inject("dynamic-adapter.dapplet-base.eth")
    private adapter: IDynamicAdapter;

    public widgets = {
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture)
    };

    public config = [{
        containerSelector: "#timeline",
        contextSelector: "[id^=stream-item-tweet-]",
        insPoints: {
            TWEET_SOUTH: {
                selector: "div.js-actions"
            },
            TWEET_COMBO: {
                selector: "" //ToDo
            },
            PICTURE: {
                selector: "div.js-tweet-text-container"
            }
        },
        contextBuilder: (tweetNode: any) => ({
            id: tweetNode.getAttribute('data-item-id'),
            text: tweetNode.querySelector('div.js-tweet-text-container').innerText,
            authorFullname: tweetNode.querySelector('strong.fullname').innerText,
            authorUsername: tweetNode.querySelector('span.username').innerText,
            authorImg: tweetNode.querySelector('img.avatar').getAttribute('src')
        }),
    }, {
        containerSelector: "#dm_dialog",
        contextSelector: "li.DMInbox-conversationItem",
        insPoints: {
            DM_SOUTH: {
                selector: "div.DMInboxItem"
            },
            DM_EAST: {
                selector: "" //ToDo
            }
        },
        contextBuilder: (tweetNode: any) => ({
            threadId: tweetNode.getAttribute('data-thread-id'),
            lastMessageId: tweetNode.getAttribute('data-last-message-id'),
            fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
            username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
            text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
        })
    }];

    constructor() {
        this.adapter.attachConfig(this.config);
    }

    public attachFeature(feature: IFeature): void { // ToDo: automate two-way dependency handling(?)
        this.adapter.attachFeature(feature);
    }

    public detachFeature(feature: IFeature): void {
        this.adapter.detachFeature(feature);
    }
}
