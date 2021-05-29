import { IFeature } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { IButtonState, Button } from './button';
import { IBadgeState, Badge } from './badge';

@Injectable
export default class InstagramAdapter {

    // ToDo: refactor it
    public exports = featureId => ({
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        badge: this.adapter.createWidgetFactory<IBadgeState>(Badge)
    });

    public config = {
        POST: {
            containerSelector: 'div[role="dialog"]',
            contextSelector: "article",
            insPoints: {
                POST_SOUTH: {
                    selector: "section.ltpMr.Slqrh > *:nth-last-child(2)"
                },
                POST_AVATAR_BADGE: {
                    selector: "header canvas"
                }
            },
            events: {
                like: (node: any, ctx: any, emit: Function) => {
                    const likeBtn = node.querySelector('section.ltpMr.Slqrh svg[aria-label*="ike"]').parentElement.parentElement;
                    likeBtn.addEventListener('click', (e) => {
                        if (likeBtn.querySelector('svg').getAttribute('aria-label') === 'Like') emit(ctx);
                    });
                },
                dislike: (node: any, ctx: any, emit: Function) => {
                    const likeBtn = node.querySelector('section.ltpMr.Slqrh svg[aria-label*="ike"]').parentElement.parentElement;
                    likeBtn.addEventListener('click', (e) => {
                        if (likeBtn.querySelector('svg').getAttribute('aria-label') === 'Unlike') emit(ctx);
                    });
                }
            },
            contextBuilder: (p: any) => ({
                id: p.querySelector('div.eo2As a.c-Yi7')?.getAttribute('href').split('/')[2],
                authorUsername: p.querySelector('header a.sqdOP')?.innerText,
                authorImg: p.querySelector('header canvas')?.toDataURL(),
                location: p.querySelector('header a.O4GlU')?.innerText,
                img: p.querySelector('div._97aPb img')?.getAttribute('src'),
                text: p.querySelector('div.eo2As span._8Pl3R > span')?.innerText
            })
        },
        PROFILE: {
            containerSelector: "main[role=main]",
            contextSelector: "div > header",
            insPoints: {
                PROFILE_AVATAR_BADGE: {
                    selector: "div.XjzKX > * > *:last-child"
                },
                PROFILE_BUTTON_GROUP: {
                    selector: "div.nZSzR > *:nth-last-child(1)",
                    insert: "begin"
                }
            },
            contextBuilder: (h: any) => ({
                authorUsername: h.querySelector('h2')?.innerText,
                authorFullname: h.querySelector('h2')?.innerText,
                authorImg: h.querySelector('img.be6sR')?.getAttribute('src')
            })
        }
    };

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        readonly adapter: IDynamicAdapter
    ) {
        this.adapter.configure(Object.entries(this.config).map(([name, cfg]) => ({ ...cfg, contextName: name })));
    }

    // ToDo: refactor it
    public attachConfig(feature: IFeature) { // ToDo: automate two-way dependency handling(?)
        return this.adapter.attachConfig(feature);
    }

    // ToDo: refactor it
    public detachConfig(feature: IFeature) {
        this.adapter.detachConfig(feature);
    }
}