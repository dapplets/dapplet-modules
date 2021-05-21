import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth';
import { IButtonState, Button } from './button';
import { IPictureState, Picture } from './picture';
import { IBadgeState, Badge } from './badge';
import Starter from './starter';
import Slideout from 'slideout';
import { ILabelState, Label } from './label';
import { Caption } from './caption';

@Injectable
export default class TwitterAdapter implements IContentAdapter<T_TwitterFeatureConfig> {

    private starter: Starter;

    // ToDo: refactor it
    public exports = featureId => ({
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        picture: this.adapter.createWidgetFactory<IPictureState>(Picture),
        badge: this.adapter.createWidgetFactory<IBadgeState>(Badge),
        label: this.adapter.createWidgetFactory<ILabelState>(Label),
        caption: this.adapter.createWidgetFactory<ILabelState>(Caption)
    });

    public config = [{
        containerSelector: "main[role=main]",
        contextSelector: "article.css-1dbjc4n",
        insPoints: {
            POST_SOUTH: {
                selector: "div[role=group] > *:last-child"
            },
            POST_COMBO: {
                selector: "" //ToDo
            },
            POST_PICTURE: {
                selector: "div[data-testid=tweet] > div:nth-child(2) > div:nth-child(2)",
                insert: 'inside'
            },
            POST_AVATAR_BADGE: {
                selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu > *:last-child"
            },
            POST_USERNAME_BADGE: {
                selector: "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd > *:first-child",
                insert: 'begin' // end
            },
            POST_USERNAME_LABEL: {
                selector: "div.css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2 > *:last-child, div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > *:last-child",
                insert: 'end' // end
            },
            POST_STARTER: {
                selector: "div.css-1dbjc4n.r-18u37iz.r-1h0z5md.r-1joea0r > *:first-child",
                insert: 'begin'
            },
            POST_SOCIAL_CONTEXT: {
                selector: "div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-m611by",
                insert: 'inside'
            },
            // Context-oriented point
            TWEET: {
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
                AVATAR_BADGE: {
                    selector: "div.css-1dbjc4n.r-18kxxzh.r-1wbh5a2.r-13qz1uu > *:last-child"
                },
                USERNAME_BADGE: {
                    selector: "div.css-1dbjc4n.r-18u37iz.r-1wbh5a2.r-1f6r7vd > *:first-child",
                    insert: 'begin' // end
                },
                USERNAME_LABEL: {
                    selector: "div.css-1dbjc4n.r-1d09ksm.r-18u37iz.r-1wbh5a2 > *:last-child, div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > *:last-child",
                    insert: 'end' // end
                },
                STARTER: {
                    selector: "div.css-1dbjc4n.r-18u37iz.r-1h0z5md.r-1joea0r > *:first-child",
                    insert: 'begin'
                },
                SOCIAL_CONTEXT: {
                    selector: "div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-m611by",
                    insert: 'inside'
                },
              },
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
        theme: this._getTheme
    },
    {
        containerSelector: "main[role=main]",
        contextSelector: "div.css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv",
        insPoints: {
            PROFILE_AVATAR_BADGE: {
                selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1wtj0ep",
                insert: 'end'
            },
            PROFILE_USERNAME_BADGE: {
                selector: "div.css-1dbjc4n.r-15d164r.r-1g94qm0 div.css-901oao.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-1vr29t4.r-ad9z0x.r-bcqeeo.r-qvutc0 > *:last-child",
                insert: "end"
            },
            PROFILE_BUTTON_GROUP: {
                selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > *:first-child",
                insert: "begin"
            },
            // Context-oriented point
            PROFILE: {
                insPoints: {
                    AVATAR_BADGE: {
                        selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1wtj0ep",
                        insert: 'end'
                    },
                    USERNAME_BADGE: {
                        selector: "div.css-1dbjc4n.r-15d164r.r-1g94qm0 div.css-901oao.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-1vr29t4.r-ad9z0x.r-bcqeeo.r-qvutc0 > *:last-child",
                        insert: "end"
                    },
                    BUTTON_GROUP: {
                        selector: "div.css-1dbjc4n.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > *:first-child",
                        insert: "begin"
                    },
                },
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
    {
        containerSelector: "main[role=main]",
        contextSelector: "div.css-1dbjc4n.r-aqfbo4.r-14lw9ot.r-my5ep6.r-rull8r.r-qklmqi.r-gtdqiz.r-ipm5af.r-1g40b8q",
        insPoints: {
            HEADING_USERNAME_BADGE: {
                selector: "h2[role=heading] div.r-18u37iz  > div.css-1dbjc4n.r-1awozwy.r-xoduu5.r-18u37iz.r-dnmrzs > *:last-child",
                insert: "end"
            }
        },
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (el: any) => ({
            profileFullname: el.querySelector('span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0 > span > span')?.innerText.replace('@', ''),
        }),
        theme: this._getTheme
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
        // ToDo: This selectors are unstable, because Twitter has changed class names to auto-generated.
        contextBuilder: (el: any) => ({
            profileUsername: el.querySelector('div.css-901oao.css-bfa6kz.r-hkyrab.r-1qd0xha.r-1b6yd1w.r-vw2c0b.r-ad9z0x.r-bcqeeo.r-3s2u2q.r-qvutc0 > span > span')?.innerText.toLowerCase(),
        }),
        theme: this._getTheme
    }];

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
