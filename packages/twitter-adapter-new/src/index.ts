import { DynamicAdapter } from '@dapplets/dynamic-adapter';
import { IButtonState, Button } from './button';
import { IPictureState, Picture } from './picture';

@Injectable
export default class TwitterAdapter extends DynamicAdapter {
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
            }
        },
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (tweetNode: any) => ({
            id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
            text: tweetNode.querySelector('div[lang]')?.innerText,
            authorFullname: tweetNode.querySelector('a:nth-child(1) div span span')?.innerText,
            authorUsername: tweetNode.querySelector('div.r-1f6r7vd > div > span')?.innerText,
            authorImg: tweetNode.querySelector('img.css-9pa8cd')?.getAttribute('src')
        }),
    }];

    public widgets = {
        button: this.createWidgetFactory<IButtonState>(Button),
        picture: this.createWidgetFactory<IPictureState>(Picture)
    };
}