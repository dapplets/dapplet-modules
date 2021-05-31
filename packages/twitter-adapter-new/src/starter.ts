import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth';
import ICON_DAPPLET from './dapplet.png';
import TwitterAdapter from '.';

declare var chrome;

interface IStarter {
    label: string;
    exec: (ctx) => void;
    config: any;
    id: number;
    dapplet?: string;
    order?: number;
}

export default class Starter {
    public config: any;
    public widgets: IStarter[] = [];
    private _buttonId = 0;
    private _overlay = Core.overlay({ url: chrome.extension.getURL('starter.html'), title: 'Starter' });

    constructor(public adapter: TwitterAdapter) {
        const { buttonStarter } = this.adapter.exports("twitter-adapter.dapplet-base.eth");
        this.config = {
            events: {
                starter: (ctx) => this.openStarter(ctx)
            },
            POST: (ctx) =>
                buttonStarter({
                    "DEFAULT": {
                        img: ICON_DAPPLET,
                        exec: () => this.openStarter(ctx)
                    }
                })
        };
    }

    public openStarter(ctx: any) {
        this._overlay.sendAndListen(
            'ctx',
            {
                ctx,
                buttons: this.widgets,
            }, {
            'button_clicked': (op, { type, message }) => {
                const id = message;
                const button = this.widgets.find(b => b.id === id);
                button?.exec?.(ctx);
            }
        });
    }

    public async attachConfig(config: T_TwitterFeatureConfig) {
        if (!config.POST) return;
        
        const arr = config.POST('');
        const insert = (arr: any[]) => {
            const widgets: IStarter[] = (arr || [])
                .filter((widget) => typeof widget !== 'function')
                .flat()
                .map((starter: { label: string, exec: () => void }) => {
                    return { ...starter, config, id: ++this._buttonId };
                });
            if (this.widgets.length === 0 && widgets.length !== 0) {
                this.adapter.adapter.attachConfig(this.config);
            }
            this.widgets.push(...widgets);
        }

        (arr instanceof Promise) ? arr.then(insert) : insert(arr);
    }

    public detachConfig(config: any, featureId: string) {
        this.widgets = this.widgets.filter(w => w.config !== config);
        if (this.widgets.length === 0) this.adapter.adapter.detachConfig(this.config);
    }
}