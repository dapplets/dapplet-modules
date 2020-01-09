import { IFeature } from '@dapplets/dapplet-extension-types'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './gnosis.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        const overlay = Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis', tabId: 'tabId' });
        const wallet = Core.wallet({ dappletId: '1' });

        const PM_EVENTS = "*";
        const WALLET_EVENTS = "*";

        const { button } = this.adapter.widgets;

        function sendTx(me, ctx) {
            Core.wallet('1')
                .send('1', ctx)
                .subscribe(WALLET_EVENTS, (e) => {
                    me.state = ({
                        CREATED: 'DEFAULT',
                        REJECTED: 'ERR'
                    }[e.type] || e.type)
                    return e
                })
                .onTxCreated((e) => Core.overlay(ctx.id).send('tx_created'))
        }

        function onDefaultExec(ctx, me) {
            overlay
                .send('tweet_select', ctx)
                .subscribe(PM_EVENTS)
                .onPmAttach(({ market, tweet }) => sendTx(me, ctx))
        }

        this.config = {
            connections: {
                likes: Core.connect("wss://examples.dapplets.org")
            },
            TWEET_SOUTH: [
                button((ctx, setState, { likes }) => ({
                    "DEFAULT": { label: likes.like_num, img: GNOSIS_ICON, disabled: false, exec: onDefaultExec },
                    "TX_RUNNING": { label: 'Pending', loading: true, disabled: true },
                    "PAIRING": { label: 'Pairing', loading: true, disabled: true },
                    "ERR": { label: 'Error' }
                }))
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




// // CLIENT SIDE

// type EthSupport = {
//     onWalletConnect : (h:MessageHandler) => EthSupport & ConnectionChaning
//     onTxSent: (h:MessageHandler) => EthSupport & ConnectionChaning
// }

// type SwarmSupport = {
//     onSwarmNode: (h:MessageHandler) => SwarmSupport & ConnectionChaning
//     onSwarmSent: (h: MessageHandler) => SwarmSupport & ConnectionChaning
// }

// let EthereumEvents: EventTypes<EthSupport> = {
//     onWalletConnect : (msg: any) => msg.type == 'WC_CONNECT',
//     onTxSent: (msg: any) => msg.type == 'TX_SENT'
// }

// let SwarmEvents: EventTypes<SwarmSupport> = {
//     onSwarmNode : (msg: any) => msg.type == 'SWARM_NODE',
//     onSwarmSent: (msg: any) => msg.type == 'SWARM_SENT'
// }

// conn.subscribe("the.topic", EthereumEvents)
//         .onTxSent((m) => { console.log("onTxSent  topic:", m.topic) })
//         .onWalletConnect((m) => { console.log("onWalletConnect  topic:", m.topic)})
//     .subscribe("swarm.*", SwarmEvents)
//         .onSwarmNode((m) => { console.log("onSwarmNode topic:", m.topic) })
//         .onSwarmSent((m) => { console.log("onSwarmSent topic:", m.topic) })
//     .send({ type: "PING" })
//     .then(() => { console.log("message sent...") })
//     .catch(() => { console.log("sending failed!") })

// conn.receive({ type: "WC_CONNECT", topic: "the.topic" })
// conn.receive({ type: "TX_SENT" , topic: "the.topic"})
// conn.receive({ type: "SWARM_NODE" , topic: "swarm.topic"})
// conn.receive({ type: "SWARM_SENT" , topic: "swarm.x"})