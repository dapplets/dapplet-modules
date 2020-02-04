import { IFeature } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from '@dapplets/dynamic-adapter';
import { IButtonState, Button } from './button';
import { IPictureState, Picture } from './picture';
import { IBadgeState, Badge } from './badge';

@Injectable
export default class TwitterAdapter {

    @Inject("dynamic-adapter.dapplet-base.eth")
    private adapter: IDynamicAdapter;

    // ToDo: refactor it
    public widgets = {
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture),
        badge: this.adapter.createWidgetFactory<IBadgeState>(Badge)
        // todo: create new widget
    };

    public config = [{
        containerSelector: "main[role=main]",
        contextSelector: "article",
        insPoints: {
            TWEET_SOUTH: {
                selector: "div[role=group]"
            },
            TWEET_COMBO: {
                selector: "" //ToDo
            },
            PICTURE: {
                selector: "div[lang]"
            },
            AVATAR_BADGE: {
                selector: "div[lang]" // todo: fill selector
            }
        },
        contextType: 'tweet', // create_tweet | destroy_tweet
        contextEvent: 'TWEET_EVENT',
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (tweetNode: any) => ({
            id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
            text: tweetNode.querySelector('div[lang]')?.innerText,
            authorFullname: tweetNode.querySelector('a:nth-child(1) div span span')?.innerText,
            authorUsername: tweetNode.querySelector('div.r-1f6r7vd > div > span')?.innerText,
            authorImg: tweetNode.querySelector('img.css-9pa8cd')?.getAttribute('src')
        }),
    }];

    // ToDo: refactor it
    constructor() {
        this.adapter.attachConfig(this.config);
    }

    // ToDo: refactor it
    public attachFeature(feature: IFeature): void { // ToDo: automate two-way dependency handling(?)
        this.adapter.attachFeature(feature);
    }

    // ToDo: refactor it
    public detachFeature(feature: IFeature): void {
        this.adapter.detachFeature(feature);
    }

    public onContextCreated(handler: (ctx?: any, insertionPoint?: string) => void): void {
        this.adapter.onContextCreated(handler);
    }

    public onContextDestroyed(handler: (ctx?: any, insertionPoint?: string) => void): void {
        this.adapter.onContextDestroyed(handler);
    }
}
