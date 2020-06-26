import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth';
import { IButtonState, Button } from './button';
import { IPictureState, Picture } from './picture';

@Injectable
export default class TwitterAdapter implements IContentAdapter<T_TwitterFeatureConfig> {

    // ToDo: refactor it
    public widgets = {
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture)
    };

    public config = [{
        containerSelector: "#timeline",
        contextSelector: "[id^=stream-item-tweet-]",
        insPoints: {
            POST_SOUTH: {
                selector: "div.js-actions > *:last-child"
            },
            POST_COMBO: {
                selector: "" //ToDo
            },
            POST_PICTURE: {
                selector: "div.js-tweet-text-container > *:last-child"
            }
        },
        contextType: 'post', // create_tweet | destroy_tweet
        contextEvent: 'POST_EVENT',
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
                selector: "div.DMInboxItem > *:last-child"
            },
            DM_EAST: {
                selector: "" //ToDo
            }
        },
        contextType: 'thread', // create_thread | destroy_thread
        contextEvent: 'THREAD_EVENT',
        contextBuilder: (tweetNode: any) => ({
            threadId: tweetNode.getAttribute('data-thread-id'),
            lastMessageId: tweetNode.getAttribute('data-last-message-id'),
            fullname: tweetNode.querySelector('div.DMInboxItem-title .fullname') && tweetNode.querySelector('div.DMInboxItem-title .fullname').innerText,
            username: tweetNode.querySelector('div.DMInboxItem-title .username') && tweetNode.querySelector('div.DMInboxItem-title .username').innerText,
            text: tweetNode.querySelector('.DMInboxItem-snippet').innerText
        })
    }];

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        private adapter: IDynamicAdapter
    ) {
        this.adapter.configure(this.config);
    }

    // ToDo: refactor it
    public attachConfig(config: T_TwitterFeatureConfig): void { // ToDo: automate two-way dependency handling(?)
        this.adapter.attachConfig(config);
    }

    // ToDo: refactor it
    public detachConfig(config: T_TwitterFeatureConfig): void {
        this.adapter.detachConfig(config);
    }
}
