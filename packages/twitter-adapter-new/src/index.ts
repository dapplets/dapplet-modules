import { IFeature } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from '@dapplets/dynamic-adapter';
import { IButtonState, Button } from './button';
import { IPictureState, Picture } from './picture';

@Injectable
export default class TwitterAdapter {

    @Inject("dynamic-adapter.dapplet-base.eth")
    private adapter: IDynamicAdapter;

    // ToDo: refactor it
    public widgets = {
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture)
    };

    public config = [{
        containerSelector: "main[role=main]",
        contextSelector: "article.css-1dbjc4n.r-1loqt21.r-1udh08x.r-o7ynqc.r-1j63xyz",
        insPoints: {
            TWEET_SOUTH: {
                selector: "div[role=group]"
            },
            TWEET_COMBO: {
                selector: "" //ToDo
            },
            PICTURE: {
                selector: "div[lang]"
            }
        },
        contextType: 'tweet', // create_tweet | destroy_tweet
        contextEvent: 'TWEET_EVENT',
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (tweetNode: any) => {
            // Adding of right margin to last twitter's native button
            const classList = tweetNode.querySelector('div.css-1dbjc4n.r-1mlwlqe.r-18u37iz.r-18kxxzh.r-1h0z5md')?.classList;
            if (classList) {
                classList.remove('r-18kxxzh');
                classList.remove('r-1mlwlqe');
                classList.add('r-1iusvr4');
                classList.add('r-16y2uox');
            }
            
            return {
                id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
                text: tweetNode.querySelector('div[lang]')?.innerText,
                authorFullname: tweetNode.querySelector('a:nth-child(1) div span span')?.innerText,
                authorUsername: tweetNode.querySelector('div.r-1f6r7vd > div > span')?.innerText,
                authorImg: tweetNode.querySelector('img.css-9pa8cd')?.getAttribute('src')
            };
        }
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
