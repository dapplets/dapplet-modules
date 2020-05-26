import { IFeature } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from '@dapplets/dynamic-adapter';
import { IButtonState, Button } from './button';
import { IBadgeState, Badge } from './badge';

@Injectable
export default class TwitterAdapter {

    @Inject("dynamic-adapter.dapplet-base.eth")
    private adapter: IDynamicAdapter;

    // ToDo: refactor it
    public widgets = {
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        badge: this.adapter.createWidgetFactory<IBadgeState>(Badge)
    };

    public config = [{
        containerSelector: "main[role=main]",
        contextSelector: "article._8Rm4L.M9sTE.L_LMM.SgTZ1.ePUX4",
        insPoints: {
            TWEET_SOUTH: {
                selector: "section.ltpMr.Slqrh > *:nth-last-child(2)"
            },
            TWEET_AVATAR_BADGE: {
                selector: "header canvas"
            }
        },
        contextType: 'post', // ToDo: remove it (deprecated)
        contextEvent: 'POST_EVENT', // ToDo: remove it (deprecated)
        contextBuilder: (p: any) => ({
            id: p.querySelector('div.eo2As a.c-Yi7')?.getAttribute('href').split('/')[2],
            authorUsername: p.querySelector('header a.sqdOP')?.innerText,
            authorImg: p.querySelector('header canvas')?.toDataURL(),
            location: p.querySelector('header a.O4GlU')?.innerText,
            img: p.querySelector('div._97aPb img')?.getAttribute('src'),
            text: p.querySelector('div.eo2As span._8Pl3R > span')?.innerText
        })
    }, {
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
        contextType: 'profile',
        contextEvent: 'PROFILE_EVENT',
        contextBuilder: (h: any) => ({
            authorUsername: h.querySelector('h2')?.innerText,
            authorImg: h.querySelector('div.RR-M- img')?.getAttribute('src')
        })
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
}