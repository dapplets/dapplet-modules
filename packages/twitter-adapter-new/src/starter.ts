import { IFeature } from '@dapplets/dapplet-extension'
import ICON_DAPPLET from './dapplet.png';
import TwitterAdapter from '.';

declare var chrome;

export default class Starter {
    public config: any;
    public widgets: {
        id: string;
        dapplet: string;
        label: string;
        order: number;
        exec: (ctx) => void;
        config: any;
    }[] = [];
    private _buttonId = 0;

    private _overlay = Core.overlay({ url: chrome.extension.getURL('starter.html'), title: 'Starter' });

    constructor(public adapter: TwitterAdapter) {
        const { button } = this.adapter.exports("twitter-adapter.dapplet-base.eth");
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

    public attachConfig(config: any) {
        const widgets = (config.POST_STARTER || []).map(c => ({ ...c, config, id: ++this._buttonId }));
        if (this.widgets.length === 0 && widgets.length !== 0) {
            this.adapter.adapter.attachConfig(this.config);
        }
        this.widgets.push(...widgets);
        delete config.POST_STARTER;
    }

    public detachConfig(config: any, featureId: string) {
        this.widgets = this.widgets.filter(w => w.config !== config);
        if (this.widgets.length === 0) this.adapter.adapter.detachConfig(this.config);
    }
}