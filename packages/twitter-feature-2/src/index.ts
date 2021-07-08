import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from 'twitter-adapter.dapplet-base.eth'
import ETHEREUM_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature {
    public config: T_TwitterFeatureConfig;

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;

    public async activate() {
        const wallet = await Core.wallet({ type: 'ethereum', network: 'rinkeby' });
        const serverUrl = await Core.storage.get('serverUrl');
        const server = Core.connect<{ like_num: string }>({ url: serverUrl });

        // ToDo: exports in ITwitterAdapter type is function, but in runtime it's object.
        const { button } = this.adapter.exports;
        const { $ } = this.adapter.attachConfig({
            POST: () => [
                [{
                    label: 'Add tweet to the Ethereum registry',
                    exec: async (ctx, me) => {
                        wallet.sendAndListen('1', ctx, {});
                    }
                }],
                button({
                    id: 'first_button',
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: server.like_num,
                        img: ETHEREUM_ICON,
                        disabled: false,
                        exec: (ctx, me) => { // ToDo: rename exec() to onclick()
                            me.state = 'PENDING';
                            wallet.sendAndListen('1', ctx, {
                                rejected: () => me.state = 'ERR',
                                created: () => me.state = 'DEFAULT'
                            });
                        }
                    },
                    "PENDING": {
                        label: 'Pending',
                        loading: true,
                        disabled: true
                    },
                    "ERR": {
                        label: 'Error',
                        img: ETHEREUM_ICON,
                        exec: (ctx, me) => me.state = 'DEFAULT'
                    }
                }),
                button({
                    id: 'second_button',
                    initial: "DEFAULT",
                    "DEFAULT": {
                        img: ETHEREUM_ICON,
                        label: "LOADING...",
                        init: async (ctx, me) => {
                            const counter = (await Core.storage.get(ctx.id)) ?? 0;
                            me.label = counter;
                        },
                        exec: async (ctx, me) => {
                            let counter = (await Core.storage.get(ctx.id)) ?? 0;
                            await Core.storage.set(ctx.id, ++counter);
                            me.label = counter;
                            $(ctx, 'first_button').state = 'ERR';
                        }
                    }
                }),
                button({
                    initial: "ON",
                    "ON": {
                        img: ETHEREUM_ICON,
                        label: "ON",
                        exec: async (ctx, me) => {
                            me.label = "ON2";
                            me.newState = 'OFF';
                        }
                    },
                    "OFF": {
                        img: ETHEREUM_ICON,
                        label: "OFF",
                        exec: async (ctx, me) => {
                            me.label = "OFF2";
                            me.setState("ON", true);
                        }
                    }
                })
            ]
        });
    }
}