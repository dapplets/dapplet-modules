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

        function sendTx(me, ctx) {
            Core.wallet('1')
                .send('1', ctx)
                // ToDo_1: fire events and forward them to STM
                //     from the DFA/STM point of view, the '.subscribe(...)' activates set of events (defined in WALLET_EVENT), 
                //     that can occur while the subscription is active.
                .subscribe(WALLET_EVENTS, (e) => {
                    //ToDo_2: this should be a part of the state transition section of the "ToDo_3"
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

        const { button } = this.adapter.widgets;
        this.config = {
            connections: {
                likes: Core.connect("wss://examples.dapplets.org")
            },
            // DesignChoice_1: there could be two kinds of Actions  
                TWEET_SOUTH: [
                //ToDo_3: Proposal: STM applies not only one entry, but matches and applies matched keys.
                //      map keys (state) can both 'State' or 'expressions' (on integers f.e.) 
                button((ctx, setState, { likes }) => ({
            //===== state definitions
                    DEFAULT    : { label: likes.like_num, loading: false, disabled: false, img: GNOSIS_ICON, 
                        //state-dependent actions
                        [BTN_CLICK]   : onDefaultExec,  //type is 'Function' - call a function on event occurs
                        [TX_REJECTED] : 'ERR',          //type is STATE (symbol|string) - force a state change to 'ERR'
                        [TX_SIGNED]   : 'DEFAULT'       //type is STATE (symbol|string) - force a state change to 'DEFAULT'
                    },
                    TX_RUNNING : { label: 'Pending',      loading: true,  disabled: true },
                    PAIRING    : { label: 'Pairing',      loading: true,  disabled: true },
                    ERR        : { label: 'Error' },

            //===== state matching expressions 
                    [any] : {  // <=== this matches all states
                        //you can use properties as well
                        label: 'Pending',      loading: true,  disabled: true

                        //state independent change (just an example)
                        [BTN_CLICK]   : onDefaultExec,  
                        [TX_REJECTED] : 'ERR',          
                        [TX_SIGNED]   : 'DEFAULT'       
                    },
                    [ERR|PAIRING] : {  // <=== this matches if current state either ERR or PAIRING (can be implemented by integers as stateId)
                        [BTN_CLICK]   : onDefaultExec,  
                        [TX_REJECTED] : 'ERR',          
                        [TX_SIGNED]   : 'DEFAULT'       
                    },
                    [ERR&PAIRING] : {  // <=== this matches if current state has both ERR and PAIRING (it is if multi-state is possible)
                        [BTN_CLICK]   : onDefaultExec,  
                        [TX_REJECTED] : 'ERR',          
                        [TX_SIGNED]   : 'DEFAULT'       
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