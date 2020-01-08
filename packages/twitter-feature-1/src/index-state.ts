import { IFeature } from '@dapplets/dapplet-extension-types'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './gnosis.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        //if some parameters are missing, return curried function?
        const overlay = Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis', tabId: 'tabId' });
        const wallet = Core.wallet({ dappletId: '1' });
        const likes = Core.connect("wss://examples.dapplets.org")

        const PM_EVENTS = "*";
        const WALLET_EVENTS = "*";

        const { button } = this.adapter.widgets;
        this.config = {
            //connections: {
            //    likes: Core.connect("wss://examples.dapplets.org")
            //},
            TWEET_SOUTH: [
                //ToDo: use setState in exec handler! 
                //ToDo: use destructuring here to hide excessive and unnecessary parameters
                //
                //button((ctx, setState, { likes }) => ({
                button({    
                    "DEFAULT": {
                        //ToDo: maybe we don't need to redefine 'likes' from Connection to DataSource
                        //      we can just dynamically define 'like_num' on Connection
                        // Question: what 'like_num' looks like? It is a factory, creates/reuses a subscription on context start/end
                        label: likes.like_num,
                        img: GNOSIS_ICON,
                        disabled: false,
                        //auto-subscribe on state-entry, auto-unsubscribe on state-exit
                        //subscriptions produces events like onXXXX()
                        //ToDo: it is not a subscription call - it is a deferred call - returns a Fn.
                        subscribe: [wallet.subscr("tx"), overlay.subscr("pm_attach")],
                        //change state (from and to this state)
                        change_state_when : {
                            "SENDING_TX" : [BTN.CLICKED, WAL.CONFIRMED],
                            "DEFAULT" : [BTN.CLICKED, WAL.CONFIRMED]    
                        },
                        //ToDo: think is it necessary?
                        //add state on the to of existing one. It makes NFA - non-finite deterministic authomat with the vector of current states [S1,S2,...]
                        //Usage: introduce sub-states like in a async communication: the button remains the same, but waiting for something...
                        add_state_when : {
                            "PAIRING_TX" : [BTN.CLICKED, WAL.CONFIRMED],
                        }
                    },
                    "SENDING_TX": { 
                        label: likes.like_num,
                        img: IMG_RUNNING,
                        disabled: true,                        
                        to : {
                            "TX_RUNNING" : when([w.TX_CONFIRMED])        
                        }
                    },
                    "TX_RUNNING": {
                        label: 'Pending',
                        loading: true,
                        disabled: true
                    },
                    "PAIRING": {
                        label: 'Pairing',
                        loading: true,
                        disabled: true
                    },
                    "ERR": {
                        label: 'Error'
                    }
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