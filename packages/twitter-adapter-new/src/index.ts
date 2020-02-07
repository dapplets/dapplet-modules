import { IFeature } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from '@dapplets/dynamic-adapter';
import { IButtonState, Button } from './button';
import { IPictureState, Picture } from './picture';
import { IBadgeState, Badge } from './badge';
import { IProfileState, Profile } from './profile';

@Injectable
export default class TwitterAdapter {

    @Inject("dynamic-adapter.dapplet-base.eth")
    private adapter: IDynamicAdapter;

    // ToDo: refactor it
    public widgets = {
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture),
        badge: this.adapter.createWidgetFactory<IBadgeState>(Badge),
        profile: this.adapter.createWidgetFactory<IProfileState>(Profile)
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
                selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu"
            },
            USERNAME_BADGE: {
                selector: "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd"
            }
        },
        contextType: 'tweet', // create_tweet | destroy_tweet
        contextEvent: 'TWEET_EVENT',
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (tweetNode: any) => {
            // Adding of right margin to last twitter's native button
            const classList = tweetNode.querySelector('div.css-1dbjc4n.r-1mlwlqe.r-18u37iz.r-18kxxzh.r-1h0z5md').classList;
            classList.remove('r-18kxxzh');
            classList.remove('r-1mlwlqe');
            classList.add('r-1iusvr4');
            classList.add('r-16y2uox');

            // Adding of left margin to twitter's account username
            tweetNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0').style.margin = '0px 0px 0px 16px';

            return {
                id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
                text: tweetNode.querySelector('div[lang]')?.innerText,
                authorFullname: tweetNode.querySelector('a:nth-child(1) div span span')?.innerText,
                authorUsername: tweetNode.querySelector('span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0')?.innerText,
                authorImg: tweetNode.querySelector('img.css-9pa8cd')?.getAttribute('src')
            };
        }
    },
    {
        containerSelector: "main[role=main]",
        contextSelector: "div.css-1dbjc4n.r-ku1wi2.r-1j3t67a.r-m611by",
        insPoints: {
            PROFILE_AVATAR_BADGE: {
                selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1wtj0ep"
            },
            PROFILE_USERNAME_BADGE: {
                selector: "div.css-1dbjc4n.r-15d164r.r-1g94qm0"
                //selector: "div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0"
            }
        },
        contextType: 'profile', // create_tweet | destroy_tweet
        contextEvent: 'PROFILE_EVENT',
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (titleInfoNode: any) => {

            // Adding of left margin to username in title
            titleInfoNode.querySelector('div.css-1dbjc4n.r-15d164r.r-1g94qm0 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l').style.margin = '0px 0px 0px 32px';

            return {
                profileFullname: titleInfoNode.querySelector('a:nth-child(1) div span span')?.innerText,
                profileUsername: titleInfoNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 span')?.innerText
            }
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
