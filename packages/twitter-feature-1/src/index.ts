import { IFeature } from '@dapplets/dapplet-extension' // ToDo: import { Core } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './gnosis.png'

const EVENTS_DEF = {
    TX_SENT: (op: any, m: any) => m.type === "TX_SENT",
    WC_CONNECT: (op: any, m: any) => m.type === "WC_CONNECT",
    SWARM_NODE: (op: any, m: any) => m.type === "SWARM_NODE",
    SWARM_SENT: "SWARM_SENT"
}

@Injectable
export default class TwitterFeature {
    public config: T_TwitterFeatureConfig;

    constructor(
        @Inject("twitter-adapter.dapplet-base.eth")
        public adapter: ITwitterAdapter
    ) {
        const wallet = Core.wallet();
        const server = Core.connect<{ pm_num: string }>({ url: "wss://examples.dapplets.org/feature-1" });

        const { button, badge } = this.adapter.widgets;
        this.config = {
            POST_STARTER: [
                {
                    label: 'Attach tweet to prediction market',
                    exec: (ctx) => {
                        const overlay = Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis' });
                        overlay.sendAndListen('tweet_select', ctx, {
                            'pm_attach': (op, { market, tweet }) => {
                                wallet.sendAndListen('1', ctx, {
                                    created: () => {
                                        overlay.send('tx_created');
                                    }
                                });
                            }
                        });
                    }
                }
            ],
            POST_SOUTH: [
                button({
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: server.pm_num,
                        img: GNOSIS_ICON,
                        disabled: false,
                        exec: (ctx, me) => {
                            const overlay = Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis' });
                            overlay.sendAndListen('tweet_select', ctx, {
                                'pm_attach': (op, { market, tweet }) => {
                                    me.state = 'PENDING';
                                    wallet.sendAndListen('1', ctx, {
                                        rejected: () => me.state = 'ERR',
                                        created: () => {
                                            me.state = 'DEFAULT';
                                            overlay.send('tx_created');
                                        }
                                    });
                                }
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
                        img: GNOSIS_ICON,
                        exec: (ctx, me) => me.state = 'DEFAULT'
                    }
                })
            ],
            POST_COMBO: [],
            DM_SOUTH: []
        }

        this.adapter.attachConfig(this.config);
    }
}