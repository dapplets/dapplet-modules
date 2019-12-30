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

        const PM_EVENTS = "*";
        const WALLET_EVENTS = "*";

        const { button } = this.adapter.widgets;
        this.config = {
            connections: {
                likes: Core.connect("wss://examples.dapplets.org")
            },
            TWEET_SOUTH: [
                //ToDo: use setState in exec handler! 
                //ToDo: use destructuring here to hide excessive and unnecessary parameters
                button((ctx, setState, { likes }) => ({
                    "DEFAULT": {
                        label: likes.like_num,
                        img: GNOSIS_ICON,
                        disabled: false,
                        //ToDo: exec handle is too complex and is only in the defailt state.
                        exec: (ctx, me) => {
                            //ToDo: use ctx.id as a tab discriminator to stick on necessary tab
                            //ToDo: [alsakhaev] instead of id using, we can save overlay into widget's scope (this)
                            overlay
                                .send('tweet_select', ctx)       //ToDo: reuse existing tab or open new tab? - the tab decides. Here depending on contextId
                                .subscribe(PM_EVENTS)
                                .onPmAttach(({ market, tweet }) => {
                                    //ToDo: always create a new conn? and the tab?
                                    // No - if repeated call, then replace  he already loaded  dapplet (after asking user).
                                    //ToDo: [alsakhaev] IMHO long chains look more difficult for perception than usual if-then constructions
                                    Core.wallet('1')
                                        .send('1', ctx)
                                        //ToDo: subscribe() accepts MessageHandler/Filter as the last optional parameter (?)
                                        // MessageHandler returns 'undefined', message gets ignored by this subscription (?)
                                        // else: use transformed message for subsequent handlers (?)
                                        // .subscribe(EventTypes, TopicOrHandler )
                                        .subscribe(WALLET_EVENTS, (e) => {
                                            // better als setState ?
                                            // setState should ignore unknown und undefined states (?)
                                            me.state = ({
                                                CREATED: 'DEFAULT',
                                                REJECTED: 'ERR'
                                            }[e.type] || e.type)
                                            // return message if handler/filter
                                            return e
                                        })
                                        .onTxCreated((e) => Core.overlay(ctx.id).send('tx_created'))
                                })
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