//ToDo: rename later: TwitterAdapter => DynamicPageAdapter && TwitterAdapterConfig => TwitterAdapter


export interface AdapterConfig{

}

@Injectable
export default class TwitterAdapterConfig implements AdapterConfig {

    public readonly builderConfig = [{
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
    }]

    public readonly widgets: { [key: string]: Function } = ({
        button: buttonFactory,
        menuItem: <Function>({ }) => {
            return ((builder: IWidgetBuilder, insPointName: string, order: number, contextNode: Element) =>
                console.error('menuItem is not implemented')
            );
        }, //ToDo: implement
        picture: (config: IPictureConfig) => {
            const uuid = uuidv4();
            const configCallback = (ctx, setState, sub) => ({ "DEFAULT": config });
            return ((builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) =>
                createWidget(Picture, builder, insPointName, configCallback, order, contextNode, uuid, proxiedSubs)
            );
        }
    })
}
