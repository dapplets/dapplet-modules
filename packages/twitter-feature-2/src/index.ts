import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from 'twitter-adapter.dapplet-base.eth'
import ETHEREUM_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature {
    public config: T_TwitterFeatureConfig;
    private wallet = Core.wallet();

    constructor(
        @Inject("twitter-adapter.dapplet-base.eth")
        public adapter: any
    ) {
        Core.storage.get('serverUrl').then(serverUrl => {
            const server = Core.connect<{ like_num: string }>({ url: serverUrl });

            // ToDo: exports in ITwitterAdapter type is function, but in runtime it's object.
            const { button } = this.adapter.exports;
            this.config = {
                POST_STARTER: [
                    {
                        label: 'Add tweet to the Ethereum registry',
                        exec: async (ctx, me) => {
                            this.wallet.then(w => w.sendAndListen('1', ctx, {}));
                        }
                    }
                ],
                POST_SOUTH: [
                    button({
                        initial: "DEFAULT",
                        "DEFAULT": {
                            label: server.like_num,
                            img: ETHEREUM_ICON,
                            disabled: false,
                            exec: (ctx, me) => { // ToDo: rename exec() to onclick()
                                me.state = 'PENDING';
                                this.wallet.then(w => w.sendAndListen('1', ctx, {
                                    rejected: () => me.state = 'ERR',
                                    created: () => me.state = 'DEFAULT'
                                }));
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
                            }
                        }
                    })
                ],
                POST_COMBO: [],
                DM_SOUTH: []
            }

            this.adapter.attachConfig(this.config);
        });
    }
}
