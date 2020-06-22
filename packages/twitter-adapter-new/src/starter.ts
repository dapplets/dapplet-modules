import { IFeature } from '@dapplets/dapplet-extension'
import ICON_DAPPLET from './dapplet.png';

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
        this.adapter.attachConfig(this.config);
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
        this.widgets.push(...(config.POST_STARTER || []).map(c => ({ ...c, config, id: ++this._buttonId })));
        delete config.POST_STARTER;
    }

    public detachConfig(config: any) {
        this.widgets = this.widgets.filter(w => w.config !== config);
    }
}