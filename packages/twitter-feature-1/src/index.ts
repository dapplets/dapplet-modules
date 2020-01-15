import { IFeature } from '@dapplets/dapplet-extension' // ToDo: import { Core } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './gnosis.png'

declare var Core: any;

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
        const overlay = Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis', tabId: 'tabId' });
        const wallet = Core.wallet(EVENTS_DEF);
        const likes = Core.connect({ url: "wss://examples.dapplets.org" });

        const { button } = this.adapter.widgets;
        this.config = {
            TWEET_SOUTH: [
                button({
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: likes.like_num,
                        img: GNOSIS_ICON,
                        disabled: false,
                        onclick: (ctx, me) => {
                            overlay
                                .send('tweet_select', ctx)
                                .listen('', {
                                    'pm_attach': (op, { market, tweet }) => {
                                        wallet.send(ctx)
                                            .listen('', {
                                                rejected: () => me.state = 'REJECTED',
                                                created: () => {
                                                    me.state = 'DEFAULT';
                                                    overlay.send('tx_created');
                                                }
                                            });
                                    }
                                })
                        }
                    },
                    "PENDING": {
                        label: 'Pending',
                        loading: true,
                        disabled: true
                    },
                    "ERR": {
                        label: 'Error',
                        onclick: (ctx, me) => me.state = 'DEFAULT'
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