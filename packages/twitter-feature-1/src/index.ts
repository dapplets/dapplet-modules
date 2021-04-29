import { IFeature } from '@dapplets/dapplet-extension' // ToDo: import { Core } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from 'twitter-adapter.dapplet-base.eth'
import GNOSIS_ICON from './gnosis.png'

const EVENTS_DEF = {
    TX_SENT: (op: any, m: any) => m.type === "TX_SENT",
    WC_CONNECT: (op: any, m: any) => m.type === "WC_CONNECT",
    SWARM_NODE: (op: any, m: any) => m.type === "SWARM_NODE",
    SWARM_SENT: "SWARM_SENT"
}

@Injectable
export default class TwitterFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: any;

    async activate() {
        const serverUrl = await Core.storage.get('serverUrl');
        const wallet = await Core.wallet({ type: 'ethereum', network: 'rinkeby' });
        const server = Core.connect<{ pm_num: string }>({ url: serverUrl });

        // ToDo: exports in ITwitterAdapter type is function, but in runtime it's object.
        const { button, badge } = this.adapter.exports;

        this.adapter.attachConfig({
            POST_STARTER: [
                {
                    label: 'Attach tweet to prediction market',
                    exec: async (ctx) => {
                        const overlayUrl = await Core.storage.get('overlayUrl');
                        const overlay = Core.overlay({ url: overlayUrl, title: 'Gnosis' });
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
                        exec: async (ctx, me) => {
                            const overlayUrl = await Core.storage.get('overlayUrl');
                            const overlay = Core.overlay({ url: overlayUrl, title: 'Gnosis' });
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
        });
    }

    async deactivate() {
        
    }
}