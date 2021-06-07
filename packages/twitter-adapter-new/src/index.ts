import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth';
import { IButtonState, Button } from './button';
import { IButtonStarterState, ButtonStarter } from './button-starter';
import { IPictureState, Picture } from './picture';
import { IAvatarState, Avatar } from './avatar';
import { IAvatarBadgeState, AvatarBadge } from './avatar-badge';
import { IUsernameBadgeState, UsernameBadge } from './username-badge';
import { ILabelState, Label } from './label';
import { Caption } from './caption';
import Starter from './starter';
import Slideout from 'slideout';

@Injectable
export default class TwitterAdapter implements IContentAdapter<T_TwitterFeatureConfig> {

    private starter: Starter;

    // ToDo: refactor it
    public exports = featureId => ({
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        buttonStarter: this.adapter.createWidgetFactory<IButtonStarterState>(ButtonStarter),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture),
        avatar: this.adapter.createWidgetFactory<IAvatarState>(Avatar),
        avatarBadge: this.adapter.createWidgetFactory<IAvatarBadgeState>(AvatarBadge),
        usernameBadge: this.adapter.createWidgetFactory<IUsernameBadgeState>(UsernameBadge),
        label: this.adapter.createWidgetFactory<ILabelState>(Label),
        caption: this.adapter.createWidgetFactory<ILabelState>(Caption)
    });

    public config = {
        POST: {
            containerSelector: "main[role=main]",
            contextSelector: "article.css-1dbjc4n",
            insPoints: {
                SOUTH: {
                    selector: "div[role=group] > *:last-child"
                },
                COMBO: {
                    selector: "" //ToDo
                },
                PICTURE: {
                    selector: "div[data-testid=tweet] > div:nth-child(2) > div:nth-child(2)",
                    insert: 'inside'
                },
                AVATAR: {
                    selector: "div.css-1dbjc4n.r-1adg3ll.r-1udh08x div.css-1dbjc4n.r-1niwhzg.r-vvn4in.r-u6sd8q.r-4gszlv.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-13qz1uu.r-1wyyakw",
                    insert: 'end',
                },
                AVATAR_BADGE: {
                    selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu > *:last-child"
                },
                USERNAME_BADGE: {
                    selector: "div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div:nth-child(1)",
                    insert: 'begin',
                },
                USERNAME_LABEL: {
                    selector: "div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > *:last-child",
                    insert: 'end',
                },
                STARTER: {
                    selector: "div.css-1dbjc4n.r-18u37iz.r-1h0z5md > *:first-child",
                    insert: 'begin'
                },
                SOCIAL_CONTEXT: {
                    selector: "div.css-1dbjc4n.r-1iusvr4.r-16y2uox div.css-1dbjc4n.r-15zivkp > div",
                    insert: 'inside'
                },
            },
            events: {
                like: (node: any, ctx: any, emit: Function) => {
                    const likeBtn = node.querySelector('div.css-1dbjc4n.r-18u37iz.r-1wtj0ep.r-156q2ks.r-1mdbhws div[role=button][data-testid*="like"]');
                    likeBtn?.addEventListener('click', () => {
                        if (likeBtn.getAttribute('data-testid') === 'like') emit(ctx);
                    });
                },
                dislike: (node: any, ctx: any, emit: Function) => {
                    const likeBtn = node.querySelector('div.css-1dbjc4n.r-18u37iz.r-1wtj0ep.r-156q2ks.r-1mdbhws div[role=button][data-testid*="like"]');
                    likeBtn?.addEventListener('click', () => {
                        if (likeBtn.getAttribute('data-testid') === 'unlike') emit(ctx);
                    });
                },
                starter: (node: any, ctx: any, emit: Function) => {
                    node.parentNode.style.overflow = 'hidden';
                    const slideout = new Slideout({
                        'panel': node,
                        'menu': document.createElement('div'),
                        'padding': 150,
                        'tolerance': 70,
                        'side': 'right'
                    });
                    slideout.on('open', () => {
                        emit(ctx);
                        slideout.close();
                    });
                }
            },
            // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
            contextBuilder: (el: any) => {
                // Adding of right margin to last twitter's native button
                const classList = el.querySelector('div.css-1dbjc4n.r-1mlwlqe.r-18u37iz.r-18kxxzh.r-1h0z5md')?.classList;
                if (classList) {
                    classList.remove('r-18kxxzh');
                    classList.remove('r-1mlwlqe');
                    classList.add('r-1iusvr4');
                    classList.add('r-16y2uox');
                }

                return ({
                    id: el.querySelector('div[data-testid=tweet] a time')?.parentNode?.href?.split('/')?.pop() || document.location.href.substr(document.location.href.lastIndexOf('status/') + 7),
                    text: el.querySelector('div[data-testid=tweet] div[lang]')?.innerText,
                    authorFullname: this._parseAuthorFullname(el.querySelector('div[data-testid=tweet] > div:nth-child(2) > div:nth-child(1) a > div > div:nth-child(1) > div:nth-child(1) > span')),
                    authorUsername: el.querySelector('div[data-testid=tweet] > div:nth-child(2) > div:nth-child(1) a > div > div:nth-child(2) span')?.innerText?.replace('@', '')?.toLowerCase(),
                    authorImg: el.querySelector('div[data-testid=tweet] img.css-9pa8cd')?.getAttribute('src')
                });
            },
            theme: this._getTheme,
            childrenContexts: ['QUOTE_POST'],
        },
        QUOTE_POST: {
            containerSelector: "main[role=main]",
            contextSelector: "article.css-1dbjc4n div[tabindex] > div.css-1dbjc4n",
            insPoints: {
                SOUTH: {
                    selector: "div.css-901oao.r-18jsvk2.r-1qd0xha.r-a023e6.r-16dba41.r-rjixqe.r-14gqq1x.r-bcqeeo.r-bnwqim.r-qvutc0",
                },
            },
            events: {},
            contextBuilder: (el: any) => {
                return ({
                    id: el.querySelector('time').dateTime + el.querySelector('[dir="ltr"]')?.innerText + el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('time').dateTime,
                    text: el.querySelector('div.css-901oao.r-18jsvk2.r-1qd0xha.r-a023e6.r-16dba41.r-rjixqe.r-14gqq1x.r-bcqeeo.r-bnwqim.r-qvutc0 span')?.innerText,
                    authorFullname: el.querySelector('[dir="auto"]').textContent,
                    authorUsername: el.querySelector('[dir="ltr"]')?.innerText?.replace('@', '')?.toLowerCase(),
                    authorImg: el.querySelector('[role="presentation"] img')?.getAttribute('src')
                });
            },
            theme: this._getTheme,
        }, 
        PROFILE: {
            containerSelector: "main[role=main]",
            contextSelector: "div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv",
            insPoints: {
                AVATAR: {
                    selector: "a div.css-1dbjc4n.r-1twgtwe.r-sdzlij.r-rs99b7.r-1p0dtai.r-1mi75qu.r-1d2f490.r-1ny4l3l.r-u8s1d.r-zchlnj.r-ipm5af.r-o7ynqc.r-6416eg",
                    insert: 'end'
                },
                AVATAR_BADGE: {
                    selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1wtj0ep",
                    insert: 'end'
                },
                USERNAME_BADGE: {
                    selector: "div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l",
                    insert: "end"
                },
                BUTTON_GROUP: {
                    selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > *:last-child",
                    insert: "begin"
                },
            },
            events: {
                // calls for every new context
                profile_changed: (node: any, ctx: any, emit: Function, on: Function) => on('context_changed', emit)
            },
            // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
            contextBuilder: (el: any) => ({
                id: el.querySelector('div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div:nth-child(2) span')?.innerText.replace('@', '').toLowerCase(),
                authorFullname: this._parseAuthorFullname(el.querySelector('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div > span:nth-child(1)')),
                authorUsername: el.querySelector('div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div:nth-child(2) span')?.innerText.replace('@', '').toLowerCase(),
                authorImg: el.querySelector('a > div.css-1dbjc4n.r-1adg3ll.r-1udh08x > div.r-1p0dtai.r-1pi2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img')?.getAttribute('src')
            }),
            theme: this._getTheme
        },
        HEADING: {
            containerSelector: "main[role=main]",
            contextSelector: "h2[role=heading]",
            insPoints: {
                USERNAME_BADGE: {
                    selector: "div.r-18u37iz > div.css-1dbjc4n.r-1awozwy.r-xoduu5.r-18u37iz.r-dnmrzs > *:last-child",
                    insert: "end"
                }
            },
            // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
            contextBuilder: (el: any) => ({
                id: el.innerText,
                profileFullname: el.innerText,
            }),
            theme: this._getTheme
        },
        SUSPENDED: {
            containerSelector: "main[role=main]",
            contextSelector: "div.css-1dbjc4n.r-kzbkwu.r-ymttw5.r-ttdzmv",
            insPoints: {
                AVATAR: {
                    selector: '[role="presentation"]',
                    insert: 'end'
                },
                USERNAME_BADGE: {
                    selector: 'div.css-1dbjc4n.r-6gpygo.r-14gqq1x',
                    insert: "end"
                }
            },
            // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
            contextBuilder: (el: any) => ({
                id: el.querySelector('div.css-1dbjc4n.r-6gpygo.r-14gqq1x')?.textContent,
                profileUsername: el.querySelector('div.css-1dbjc4n.r-6gpygo.r-14gqq1x')?.textContent,
            }),
            theme: this._getTheme
        }};

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        readonly adapter: IDynamicAdapter
    ) {
        this.adapter.configure(this.config);
        this.starter = new Starter(this);
    }

    // ToDo: refactor it
    public attachConfig(config: T_TwitterFeatureConfig) { // ToDo: automate two-way dependency handling(?)
        this.starter.attachConfig(config);
        return this.adapter.attachConfig(config);
    }

    // ToDo: refactor it
    public detachConfig(config: T_TwitterFeatureConfig, featureId?: string): void {
        this.starter.detachConfig(config, featureId);
        this.adapter.detachConfig(config, featureId);
    }

    public getCurrentUser() {
        if (!document.querySelector('[data-testid=SideNav_AccountSwitcher_Button]')) return null;
        return ({
            username: document.querySelector('nav > a:nth-last-child(2').getAttribute('href').substr(1).toLowerCase(),
            fullname: document.querySelector('[data-testid=SideNav_AccountSwitcher_Button] > div:nth-child(1) img').getAttribute('alt'),
            img: document.querySelector('[data-testid=SideNav_AccountSwitcher_Button] > div:nth-child(1) img').getAttribute('src')
        })
    }

    private _parseAuthorFullname(node: any): string {
        if (!node) return null;
        const strings = [...node.childNodes].map(x => {
            if (x.innerText && x.innerText.length > 0) {
                // plain text
                return x.innerText;
            } else if (!!x.querySelector('img')) {
                // unicode emoji
                const url = x.querySelector('img').getAttribute('src');
                const code = url.substr(url.lastIndexOf('/') + 1, url.indexOf('.svg') - url.lastIndexOf('/') - 1);
                return String.fromCodePoint(...(code.split('-').map(x => '0x' + x)));
            }
        });
        return strings.join('');
    }

    private _getTheme() {
        if (document.body.style.backgroundColor === "rgb(255, 255, 255)") return "LIGHT";
        if (document.body.style.backgroundColor === "rgb(21, 32, 43)") return "DARK";
        if (document.body.style.backgroundColor === "rgb(0, 0, 0)") return "DARK";
        return "LIGHT";
    }
}
