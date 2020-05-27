import { IFeature } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from '@dapplets/dynamic-adapter';
import { IButtonState, Button } from './button';
import { IPictureState, Picture } from './picture';
import { IBadgeState, Badge } from './badge';
import Starter from './starter';
import Slideout from 'slideout';

@Injectable
export default class TwitterAdapter {

    @Inject("dynamic-adapter.dapplet-base.eth")
    private adapter: IDynamicAdapter;
    private starter: Starter;

    // ToDo: refactor it
    public widgets = {
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture),
        badge: this.adapter.createWidgetFactory<IBadgeState>(Badge),
        //profile: this.adapter.createWidgetFactory<IProfileState>(Profile)
    };

    public config = [{
        containerSelector: "main[role=main]",
        contextSelector: "article.css-1dbjc4n",
        insPoints: {
            TWEET_SOUTH: {
                selector: "div[role=group] > *:last-child"
            },
            TWEET_COMBO: {
                selector: "" //ToDo
            },
            PICTURE: {
                selector: "div[lang] > *:last-child"
            },
            TWEET_AVATAR_BADGE: {
                selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu > *:last-child"
            },
            TWEET_USERNAME_BADGE: {
                selector: "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd > *:first-child",
                insert: 'begin' // end
            },
            TWEET_STARTER: {
                selector: "div.css-1dbjc4n.r-18u37iz.r-1h0z5md.r-1joea0r > *:first-child",
                insert: 'begin'
            }
        },
        events: {
            like: (node: any, ctx: any, emit: Function) => {
                const likeBtn = node.querySelector('div.css-1dbjc4n.r-18u37iz.r-1wtj0ep.r-156q2ks.r-1mdbhws div[role=button][data-testid*="like"]');
                likeBtn.addEventListener('click', () => {
                    if (likeBtn.getAttribute('data-testid') === 'like') emit(ctx);
                });
            },
            unlike: (node: any, ctx: any, emit: Function) => {
                const likeBtn = node.querySelector('div.css-1dbjc4n.r-18u37iz.r-1wtj0ep.r-156q2ks.r-1mdbhws div[role=button][data-testid*="like"]');
                likeBtn.addEventListener('click', () => {
                    if (likeBtn.getAttribute('data-testid') === 'unlike') emit(ctx);
                });
            },
            starter: (node: any, ctx: any, emit: Function) => {
                node.parentNode.style.overflow = 'hidden';
                const slideout = new Slideout({
                    'panel': node,
                    'menu': document.createElement('div'),
                    'padding': 150,
                    'tolerance': 70
                });
                slideout.on('open', () => {
                    //this.starter.openStarter(ctx);
                    emit(ctx);
                    slideout.close();
                });
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

            return ({
                id: tweetNode.querySelector('a time').parentNode.href.split('/').pop(),
                text: tweetNode.querySelector('div[lang]')?.innerText,
                authorFullname: tweetNode.querySelector('a:nth-child(1) div span span')?.innerText,
                authorUsername: tweetNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 > span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0')?.innerText.replace('@', ''),
                authorImg: tweetNode.querySelector('div.css-1dbjc4n.r-1awozwy.r-18kxxzh.r-5f2r5o img')?.getAttribute('src')
            });
        }
    },
    {
        containerSelector: "main[role=main]",
        contextSelector: "div.css-1dbjc4n.r-ku1wi2.r-1j3t67a.r-m611by",
        insPoints: {
            PROFILE_AVATAR_BADGE: {
                selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1wtj0ep > *:last-child",
                insert: 'end'
            },
            PROFILE_USERNAME_BADGE: {
                selector: "div.css-1dbjc4n.r-15d164r.r-1g94qm0 div.css-901oao.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-1vr29t4.r-ad9z0x.r-bcqeeo.r-qvutc0 > *:last-child",
                insert: "end"
            },
            PROFILE_BUTTON_GROUP: {
                selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > *:first-child",
                insert: "begin"
            }
        },
        contextType: 'profile', // create_tweet | destroy_tweet
        contextEvent: 'PROFILE_EVENT',
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (titleInfoNode: any) => {

            // Adding of left margin to username in title
            titleInfoNode.querySelector('div.css-1dbjc4n.r-15d164r.r-1g94qm0 > div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l').style.margin = '0px 0px 0px 32px';

            return {
                authorFullname: titleInfoNode.querySelector('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div > span:nth-child(1) > span')?.innerText,
                authorUsername: titleInfoNode.querySelector('div.css-901oao.css-bfa6kz.r-1re7ezh.r-18u37iz.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0 span')?.innerText.replace('@', ''),
                authorImg: titleInfoNode.querySelector('a > div.css-1dbjc4n.r-1adg3ll.r-1udh08x > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img')?.getAttribute('src')
            }
        }
    },
    {
        containerSelector: "main[role=main]",
        contextSelector: "div.css-1dbjc4n.r-aqfbo4.r-14lw9ot.r-my5ep6.r-rull8r.r-qklmqi.r-gtdqiz.r-ipm5af.r-1g40b8q",
        insPoints: {
            HEADING_USERNAME_BADGE: {
                selector: "h2[role=heading] div.r-18u37iz  > div.css-1dbjc4n.r-1awozwy.r-xoduu5.r-18u37iz.r-dnmrzs > *:last-child",
                insert: "end"
            }
        },
        contextType: 'heading', // create_tweet | destroy_tweet
        contextEvent: 'HEADING_EVENT',
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (titleInfoNode: any) => {
            return {
                profileFullname: titleInfoNode.querySelector('span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0 > span > span')?.innerText.replace('@', ''),
            }
        }
    },
    {
        containerSelector: "main[role=main]",
        contextSelector: "div.css-1dbjc4n.r-1mi0q7o.r-1j3t67a.r-m611by",
        insPoints: {
            SUSPENDED_USERNAME_BADGE: {
                selector: "div.css-901oao.css-bfa6kz.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-vw2c0b.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0 > *:last-child",
                insert: "end"
            }
        },
        contextType: 'suspended', // create_tweet | destroy_tweet
        contextEvent: 'SUSPENDED_EVENT',
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (titleInfoNode: any) => {
            return {
                profileUsername: titleInfoNode.querySelector('div.css-901oao.css-bfa6kz.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-vw2c0b.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0 > span > span')?.innerText,
            }
        }
    }];

    // ToDo: refactor it
    constructor() {
        this.adapter.attachConfig(this.config);
        this.starter = new Starter(this);
        this.adapter.attachFeature(this.starter);
    }

    // ToDo: refactor it
    public attachFeature(feature: IFeature): void { // ToDo: automate two-way dependency handling(?)
        this.starter.attachFeature(feature);
        this.adapter.attachFeature(feature);
    }

    // ToDo: refactor it
    public detachFeature(feature: IFeature): void {
        this.starter.detachFeature(feature);
        this.adapter.detachFeature(feature);
    }
}
