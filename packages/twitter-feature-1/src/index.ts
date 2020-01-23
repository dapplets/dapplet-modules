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
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        const overlay = Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis' });
        const wallet = Core.wallet({ dappletId: '1' }, EVENTS_DEF);
        const server = Core.connect<{ like_num: string }>({ url: "wss://localhost:8080" });

        const { button } = this.adapter.widgets;
        this.config = {
            TWEET_EVENT: [server.sendAndListen],
            TWEET_SOUTH: [
                button({
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: server.like_num,
                        img: GNOSIS_ICON,
                        disabled: false,
                        exec: (ctx, me) => { // ToDo: rename exec() to onclick()
                            me.state = 'ERR';
                            // overlay.subscribe('tweet_select', ctx, {
                            //     'pm_attach': (op, { market, tweet }) => {
                            //         console.log('pm_attach', op, { market, tweet });
                            //         // wallet.send(ctx)
                            //         //     .listen('', {
                            //         //         rejected: () => me.state = 'REJECTED',
                            //         //         created: () => {
                            //         //             me.state = 'DEFAULT';
                            //         //             overlay.send('tx_created');
                            //         //         }
                            //         //     });
                            //     }
                            // })
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
            TWEET_COMBO: [],
            DM_SOUTH: []
        }
    }

    public activate() {
        this.adapter.attachFeature(this);
    }

    public deactivate() {
        this.adapter.detachFeature(this);
    }
}