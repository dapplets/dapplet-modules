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
        const overlay = __Core.overlay({ url: 'https://examples.dapplets.org', title: 'Gnosis', tabId: 'tabId' });
        const wallet = __Core.wallet({ dappletId: '1' }, {
            eventsIn: {
                //ToDo: make clean solution. f.e. using subscrId or WeakMap<ctx,sub> or ctx.sub
                BTN_CLICKED: (wallet, ctx) => wallet.send("start", ctx.id).subscribe(ctx.id),
            }
        }));

        //ToDo: actually it should be defined in connection npm module and imported
        const likes = __Core.connect<LikesMessage, EventHandlers>({ url: "wss://examples.dapplets.org" }, {
            // configurates auto-properties as template for this subscription of this connection
            // allows to have different keys for used in the message and as auto-property names.  
            autoProperties: {
                like: 'likes',   //autoproperty 'like' maps message property 'likes'
                retwits: 'retwits'
            },
            eventsOut: {
                LIKE_CHANGED: (msg: LikesMessage) => msg.type == 'LIKE'
                onLikeChanged: (msg: LikesMessage) => msg.type == 'LIKE',
                onRtChanged: (msg: LikesMessage) => msg.type == 'RT'
            },
            eventsIn: {
                //ToDo: make clean solution. f.e. using subscrId or WeakMap<ctx,sub> or ctx.sub
                CONTEXT_START: (conn, ctx) => conn.send("start", ctx.id).subscribe(ctx.id),
                CONTEXT_END: (conn, ctx) => conn.send("finished", ctx.id).unsubscribe(ctx.id)
            }
        })

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
                        in: () => [wallet.send(ctx).subscr("tx"), overlay.subscr("pm_attach")],
                        //change state (from and to this state)
                        change_state_when: {
                            "SENDING_TX": [BTN.CLICKED],
                            "DEFAULT": [WAL.CONFIRMED]
                        },
                        //ToDo: think is it necessary?
                        //add state on the to of existing one. It makes NFA - non-finite deterministic authomat with the vector of current states [S1,S2,...]
                        //Usage: introduce sub-states like in a async communication: the button remains the same, but waiting for something...
                        add_state_when: {
                            "PAIRING_TX": [BTN.CLICKED, WAL.CONFIRMED],
                        },
                    },
                    "SENDING_TX": {
                        label: likes.like_num,
                        img: IMG_RUNNING,
                        disabled: true,
                        to: {
                            "TX_RUNNING": when([w.TX_CONFIRMED])
                        },
                        action: ({ event_name, ctx }) => {
                            wallet.send(ctx.id)
                        },
                        in: (e) => wallet.acceptEvent(e)

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


        const actions = {
            "DEFAULT": (w, ctx) => {
                w.label = likes.like_num;
                w.img = GNOSIS_ICON;
                w.disabled = false;
                wallet.send(ctx).subscr("tx");
                overlay.subscr("pm_attach");
            },
            "SENDING_TX": (w, ctx) => {
                w.label = likes.like_num;
                w.img = IMG_RUNNING;
                w.disabled = true;
                wallet.send(ctx.id);
            },
            "TX_RUNNING": (w, ctx) => {
                w.label = 'Pending';
                w.loading = true;
                w.disabled = true;
            },
            "PAIRING": (w, ctx) => {
                w.label = 'Pairing';
                w.loading = true;
                w.disabled = true;
            },
            "ERR": (w, ctx) => {
                w.label = 'Error';
            }
        }

        const transitions = {
            "DEFAULT": [{
                to: "SENDING_TX",
                when: (d) => [
                    d.isPanelFitsContainer === true,
                    d.viewportTop + d.panelHeight >= d.finishPoint
                ]
            }]
        };

        // Inspired by
        // https://raw.githubusercontent.com/thankcreate/power-fsm-viewer/master/preview/preview-3.png
        // https://github.com/vstirbu/fsm-as-promised

        function datarecieved({ data }, ctx) {
            wallet.send({
                pm: data.pmId,
                tweet: ctx.id
            });
        }

        function fn2() { }

        const fsm = {
            initial: 'DEFAULT',
            states: [
                { name: 'DEFAULT', label: likes.like_num, img: GNOSIS_ICON, disabled: false },
                { name: 'PAIRING', label: 'Pairing', loading: true, disabled: true },
                { name: 'PENDING', label: 'Pending', loading: true, disabled: true },
                { name: 'OVERLAY_WAITING', label: 'See overlay', loading: true, disabled: true },
                { name: 'DONE', label: 'Confirmed', img: GNOSIS_ICON, loading: false, disabled: false },
                { name: 'ERROR', label: 'Error', img: GNOSIS_ICON }
            ],
            transitions: [
                { when: 'widget.click', from: 'DEFAULT', to: 'OVERLAY_WAITING' }, // open overlay
                { when: 'overlay.closed', from: 'OVERLAY_WAITING', to: 'DEFAULT' },
                { when: 'overlay.datarecieved', from: 'OVERLAY_WAITING', to: 'PENDING' }, // user selected a prediction market
                { when: 'wallet.pairing', from: 'PENDING', to: 'PAIRING' },
                { when: 'wallet.paired', from: 'PAIRING', to: 'PENDING' },
                { when: 'wallet.confirmed', from: 'PENDING', to: 'DONE' },
                { when: 'wallet.rejected', from: 'PENDING', to: 'ERROR' },
                { when: 'widget.click', from: ['DONE', 'ERROR'], to: 'DEFAULT' }
            ],
            callbacks: {
                onclick: () => { }, // ????
                onenteredPAIRING: (ctx) => wallet.send(ctx)
            }
        }

        // using object's keys instead of 'name' properties
        const fsm2 = {
            initial: 'DEFAULT',
            transitions: [
                { when: 'widget.click', from: 'DEFAULT', to: 'OVERLAY_WAITING' }, // open overlay
                { when: 'overlay.closed', from: 'OVERLAY_WAITING', to: 'DEFAULT' },
                { when: 'overlay.datarecieved', from: 'OVERLAY_WAITING', to: 'PENDING' }, // user selected a prediction market
                { when: 'wallet.pairing', from: 'PENDING', to: 'PAIRING' },
                { when: 'wallet.paired', from: 'PAIRING', to: 'PENDING' },
                { when: 'wallet.confirmed', from: 'PENDING', to: 'DONE' },
                { when: 'wallet.rejected', from: 'PENDING', to: 'ERROR' },
                { when: 'widget.click', from: ['DONE', 'ERROR'], to: 'DEFAULT' }
            ],
            states: {
                'DEFAULT': { label: likes.like_num, img: GNOSIS_ICON, disabled: false },
                'PAIRING': { label: 'Pairing', loading: true, disabled: true },
                'PENDING': { label: 'Pending', loading: true, disabled: true },
                'OVERLAY_WAITING': { label: 'See overlay', loading: true, disabled: true },
                'DONE': { label: 'Confirmed', img: GNOSIS_ICON, loading: false, disabled: false },
                'ERROR': { label: 'Error', img: GNOSIS_ICON }
            },
        }

        // Inspiried by
        // https://github.com/davidkpiano/xstate
        // https://habr.com/ru/company/ruvds/blog/346908/
        const fsm3 = {
            initial: 'DEFAULT',
            states: {
                'DEFAULT': {
                    label: likes.like_num,
                    img: GNOSIS_ICON,
                    disabled: false,
                    on: {
                        click: 'PENDING'
                    }
                },
                'PAIRING': {
                    label: 'Pairing',
                    loading: true,
                    disabled: true,
                    on: {
                        tx_paired: 'PENDING'
                    }
                },
                'PENDING': {
                    label: 'Pending',
                    loading: true,
                    disabled: true,
                    on: {
                        tx_pairing: 'PAIRING',
                        tx_success: 'DEFAULT',
                        tx_error: 'ERR'
                    }
                },
                'ERR': {
                    label: 'Error',
                    on: {
                        click: 'DEFAULT'
                    }
                }
            }
        }

        // See also
        // https://github.com/yandex-money-tech/react-fsm

        function transition(nextState: string) { }

        const fsm4 = {
            initial: 'DEFAULT',
            states: {
                'DEFAULT': {
                    label: likes.like_num,
                    img: GNOSIS_ICON,
                    disabled: false,
                    onclick: (ctx) => {
                        transition('OVERLAY_WAITING');
                        overlay.send('tweet_select', ctx).subscribe('???')
                            .on('open', () => transition('OVERLAY_WAITING'))
                            .on('pm_attached', () => {
                                wallet.send('1', ctx).subscribe('???')
                                    .on('pending', () => transition('PENDING'))
                                    .on('pairing', () => transition('PAIRING'))
                                    .on('paired', () => transition('PENDING'))
                                    .on('confirmed', () => transition('DONE'))
                                    .on('rejected', () => transition('ERROR'));
                            });
                    }
                },
                'OVERLAY_WAITING': {
                    label: 'See overlay',
                    loading: true,
                    disabled: true
                },
                'PENDING': {
                    label: 'Pending',
                    loading: true,
                    disabled: true
                },
                'PAIRING': {
                    label: 'Pairing',
                    loading: true,
                    disabled: true
                },
                'DONE': {
                    label: 'Confirmed',
                    img: GNOSIS_ICON,
                    loading: false,
                    disabled: false,
                    onclick: () => transition('DEFAULT')
                },
                'ERROR': {
                    label: 'Error',
                    img: GNOSIS_ICON,
                    onclick: () => transition('DEFAULT')
                }
            },
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

