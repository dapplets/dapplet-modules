import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth';
import { IButtonState, Button } from './button';
import { IButtonStarterState, ButtonStarter } from './button-starter';
import { IPictureState, Picture } from './picture';
import { IAvatarState, Avatar } from './avatar';
import { IAvatarBadgeState, AvatarBadge } from './avatar-badge';
import { IInputState, Input } from './input';
import { IUsernameBadgeState, UsernameBadge } from './username-badge';
import { ILabelState, Label } from './label';
import { Caption } from './caption';
import Starter from './starter';
import Slideout from 'slideout';
import { Box, IBoxState } from './box';
import { Quote, IQuoteState } from './quote';
import { WbButton, IWbButtonProps } from './wb-button';
import { Post, IPostProps } from './post';

const widgets = {
  avatar: Avatar,
  avatarBadge: AvatarBadge,
  button: WbButton,
  buttonStarter: ButtonStarter,
  usernameBadge: UsernameBadge,
  picture: Picture,
  label: Label,
  caption: Caption,
  box: Box,
  input: Input,
  quote: Quote,
  post: Post,
}

@Injectable
export default class TwitterAdapter implements IContentAdapter<T_TwitterFeatureConfig> {

    private starter: Starter;

    public getContextInsPoints = (widgetName) => widgets[widgetName].contextInsPoints;

    public getWidgetParamsDescription = (widgetName) => widgets[widgetName].widgetParamsDescription;

    // ToDo: refactor it
    public exports = featureId => ({
        // button: this.adapter.createWidgetFactory<IButtonState>(Button),
        button: this.adapter.createWidgetFactory<IWbButtonProps>(WbButton),
        buttonStarter: this.adapter.createWidgetFactory<IButtonStarterState>(ButtonStarter),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture),
        avatar: this.adapter.createWidgetFactory<IAvatarState>(Avatar),
        avatarBadge: this.adapter.createWidgetFactory<IAvatarBadgeState>(AvatarBadge),
        usernameBadge: this.adapter.createWidgetFactory<IUsernameBadgeState>(UsernameBadge),
        label: this.adapter.createWidgetFactory<ILabelState>(Label),
        caption: this.adapter.createWidgetFactory<ILabelState>(Caption),
        box: this.adapter.createWidgetFactory<IBoxState>(Box),
        input: this.adapter.createWidgetFactory<IInputState>(Input),
        quote: this.adapter.createWidgetFactory<IQuoteState>(Quote),
        post: this.adapter.createWidgetFactory<IPostProps>(Post)
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
                    selector: ".css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div:nth-child(2) > div:nth-child(2)",
                    insert: 'inside'
                },
                AVATAR: {
                    selector: ".css-1dbjc4n.r-1awozwy.r-1hwvwag.r-18kxxzh.r-1b7u577 > div:first-child",
                    insert: 'inside',
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
                    selector: "div.css-1dbjc4n.r-k4xj1c.r-18u37iz.r-1wtj0ep > div:nth-child(2) > div > div",
                    insert: 'begin'
                },
                SOCIAL_CONTEXT: {
                    selector: "div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-ttdzmv",
                    insert: 'inside'
                },
                BOX: {
                    selector: ".css-901oao.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0",
                    insert: 'inside'
                },
                TEXT: {
                    selector: ".css-901oao.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0",
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

                const quote = {
                    text: el.querySelector('.css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-14gqq1x.r-bcqeeo.r-bnwqim.r-qvutc0 > span')?.innerText,
                    img: el.querySelector('.css-1dbjc4n.r-1ets6dv.r-1867qdf.r-rs99b7.r-1loqt21.r-adacv.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg > div > div:nth-child(3) > div > div > div > div > a > div > div:last-child > div > img')?.getAttribute('src'),
                    authorFullname: el.querySelector('.css-1dbjc4n.r-1ets6dv.r-1867qdf.r-rs99b7.r-1loqt21.r-adacv.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg > div > div:nth-child(1) > div > div > div > div > div > div > div > div > div:nth-child(2) > span > span')?.innerText,
                    authorUsername: el.querySelector('.css-1dbjc4n.r-1ets6dv.r-1867qdf.r-rs99b7.r-1loqt21.r-adacv.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg > div > div:nth-child(1) > div > div > div > div > div > div:last-child > div > div > div > div > span')?.innerText?.replace('@', ''),
                    authorImg: el.querySelector('.css-1dbjc4n.r-1ets6dv.r-1867qdf.r-rs99b7.r-1loqt21.r-adacv.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg > div > div > div > div > div > div > div > div > div > div > div > div:last-child > div > div:last-child > div > div > div:nth-child(3) > div > div:last-child > div > img')?.getAttribute('src'),
                    createdAt: el.querySelector('.css-1dbjc4n.r-1ssbvtb.r-1s2bzr4 > div > div:last-child > div > div > div > div:last-child > span:last-child > time')?.getAttribute('datetime'),
                    isDeleted: el.innerHTML.includes('This Tweet was deleted') || el.innerHTML.includes('This Tweet is unavailable')
                };

                return ({
                    el,
                    id: el.querySelector('.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu a time')?.parentNode?.href?.split('/')?.pop() || /status\/([0-9]*)/gm.exec(document.location.href)?.[1],
                    text: el.querySelector('.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu div[lang], div > div > div > div:nth-child(3) > div:nth-child(1) > div > div > span')?.innerText,
                    authorFullname: el.querySelector('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div > span:nth-child(1) > span')?.innerText,
                    authorUsername: el.querySelector('div.css-901oao.css-bfa6kz.r-18u37iz.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0 > span')?.innerText?.replace('@', '')?.toLowerCase(),
                    authorImg: el.querySelector('.css-1dbjc4n.r-1awozwy.r-1hwvwag.r-18kxxzh.r-1b7u577 > div:first-child img.css-9pa8cd')?.getAttribute('src'),
                    createdAt: el.querySelector('div[data-testid="User-Names"] div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-13hce6t > div > div.css-1dbjc4n.r-18u37iz.r-1q142lx > a > time')?.getAttribute('datetime'),
                    quote: (quote.createdAt || quote.isDeleted) ? quote : null,
                    theme: this._getTheme(),
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
                    selector: ".css-901oao.r-jwli3a.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-14gqq1x.r-bcqeeo.r-bnwqim.r-qvutc0, .css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-14gqq1x.r-bcqeeo.r-bnwqim.r-qvutc0",
                },
            },
            events: {},
            contextBuilder: (el: any) => {
                return ({
                    id: el.querySelector('time').dateTime + el.querySelector('[dir="ltr"]')?.innerText + el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('time').dateTime,
                    text: el.querySelector('.css-901oao.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-14gqq1x.r-bcqeeo.r-bnwqim.r-qvutc0 span')?.innerText,
                    authorFullname: el.querySelector('[dir="auto"]').textContent,
                    authorUsername: el.querySelector('[dir="ltr"]')?.innerText?.replace('@', '')?.toLowerCase(),
                    authorImg: el.querySelector('[role="presentation"] img')?.getAttribute('src'),
                    theme: this._getTheme(),
                });
            },
            theme: this._getTheme,
        },
        PROFILE: {
            containerSelector: "main[role=main]",
            contextSelector: "div[data-testid=primaryColumn] > div > div:nth-child(2) div.css-1dbjc4n.r-1jgb5lz.r-1ye8kvj.r-13qz1uu",
            insPoints: {
                AVATAR: {
                    selector: "div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv a",
                    insert: 'inside'
                },
                AVATAR_BADGE: {
                    selector: "div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv div.css-1dbjc4n.r-ggadg3.r-u8s1d.r-8jfcpp",
                    insert: 'end'
                },
                USERNAME_BADGE: {
                    selector: "div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv div.css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l",
                    insert: "end"
                },
                BUTTON_GROUP: {
                    selector: "div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > *:last-child",
                    insert: "begin"
                },
                POSTS: {
                    selector: "section[role=region] > div > div",
                    insert: "begin"
                }
            },
            events: {
                // calls for every new context
                profile_changed: (node: any, ctx: any, emit: Function, on: Function) => on('context_changed', emit)
            },
            // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
            contextBuilder: (el: any) => {
                const ph = el.querySelector('div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv');
                const avatar = ph.querySelector('a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-14lw9ot.r-11mg6pl');
                if (avatar) avatar.style.overflow = 'visible';

                return ({
                    id: ph.querySelector('div.css-1dbjc4n.r-6gpygo.r-14gqq1x div.css-901oao.css-bfa6kz.r-18u37iz.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0 span')?.innerText.replace('@', '').toLowerCase(),
                    authorFullname: this._parseAuthorFullname(ph.querySelector('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div > span:nth-child(1)')),
                    authorUsername: ph.querySelector('div.css-1dbjc4n.r-6gpygo.r-14gqq1x div.css-901oao.css-bfa6kz.r-18u37iz.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0 span')?.innerText.replace('@', '').toLowerCase(),
                    authorImg: ph.querySelector('a img')?.getAttribute('src'),
                    theme: this._getTheme(),
                });
            },
            theme: this._getTheme
        },
        HEADING: {
            containerSelector: "main[role=main]",
            contextSelector: "h2[role=heading].css-4rbku5.css-901oao.css-bfa6kz.r-37j5jr.r-adyw6z.r-b88u0q.r-135wba7.r-bcqeeo.r-qvutc0",
            insPoints: {
                USERNAME_BADGE: {
                    selector: "div *:last-child",
                    insert: "end"
                }
            },
            // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
            contextBuilder: (el: any) => ({
                id: el.innerText,
                profileFullname: el.innerText,
                theme: this._getTheme(),
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
                theme: this._getTheme(),
            }),
            theme: this._getTheme
        }
    };

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        readonly adapter: IDynamicAdapter<T_TwitterFeatureConfig>
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

    public resetConfig(config: T_TwitterFeatureConfig, newConfig?: T_TwitterFeatureConfig, featureId?: string): void {
        this.starter.detachConfig(config, featureId);
        this.starter.attachConfig(newConfig ?? config);
        this.adapter.resetConfig(config, newConfig ?? config);
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
