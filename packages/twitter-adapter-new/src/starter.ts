import { IFeature } from '@dapplets/dapplet-extension'
import ICON_DAPPLET from './dapplet.png';

declare var chrome;

export default class Starter implements IFeature {
    public config: any;
    public widgets: {
        id: string;
        dapplet: string;
        label: string;
        order: number;
        exec: (ctx) => void;
        feature: IFeature;
    }[] = [];
    private _buttonId = 0;

    private _overlay = Core.overlay({ url: chrome.extension.getURL('starter.html'), title: 'Identity Management' });

    constructor(public adapter: any) {
        const { button } = this.adapter.widgets;
        this.config = {
            events: {
                starter: (ctx) => this.openStarter(ctx)
            },
            POST_STARTER: [
                button({
                    "DEFAULT": {
                        img: ICON_DAPPLET,
                        exec: (ctx) => this.openStarter(ctx)
                    }
                })
            ]
        };
    }

    public openStarter(ctx: any) {
        this._overlay.sendAndListen('ctx', { ctx, buttons: this.widgets }, {
            'button_clicked': (op, { type, message }) => {
                const id = message;
                const button = this.widgets.find(b => b.id === id);
                button?.exec?.(ctx);
            }
        })
    }

    public activate() {
        this.adapter.attachFeature(this);
    }

    public deactivate() {
        this.adapter.detachFeature(this);
    }

    public attachFeature(feature: IFeature) {
        this.widgets.push(...(feature.config.POST_STARTER || []).map(c => ({ ...c, feature, id: ++this._buttonId })));
        delete feature.config.POST_STARTER;
    }

    public detachFeature(feature: IFeature) {
        this.widgets = this.widgets.filter(w => w.feature !== feature);
    }
}