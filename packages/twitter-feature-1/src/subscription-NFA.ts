// =============
class AutoProperty {
    conn: __Connection<any, any>
    propertyName: string
    setter: (value:any) => void
}

type MessageHandler = (msg: any) => void

// ============ types used to create different __connection types
type OverlayConnParams = {
    url: string
    title: string
    tabId?: any
}

type WalletConnParams = {
    dappletId: string
    pairingHint?: any //just an example
}

type ServerConnParams = {
    url: string
}
// ===========================

// ============ used to define message and event processing in subscriptions
type MsgProcessingConfig<MsgType, EventHandlerList extends string|symbol> = {
    autoProperties ?: AutoPropertyConfig<MsgType>,
    onEvents ?: OnEventsConfig,
    events  ?: EventsConfig<EventHandlerList>
}

type AutoPropertyConfig<MsgType> = { [key:string]: keyof MsgType }
type EventsConfig<EventHandlerList extends string|symbol> = Partial<Record<EventHandlerList, MsgFilter>>
type OnEventsConfig = { [key : string]: (conn:__Connection<any,any>, msg:any)=>void }
// ===========================

// ========= defines different filters on incoming messages
type MsgFilter = (msg: any) => boolean
type EventTypes<T> = { [K in keyof T]: MsgFilter }

// ========== injected in extension
class __Core {
    public static overlay<MsgType, EventHandlerList extends string|symbol>(cfg: OverlayConnParams, msgProcessingCfg?: MsgProcessingConfig<MsgType, EventHandlerList>){
        let conn = new (class extends __Connection<MsgType, EventHandlerList>{
            public send(op:any, msg: any) { 
                //ToDo: implement overlay specific
                return conn
            }        
        })(cfg, msgProcessingCfg)
        return conn
    }

    public static wallet<MsgType, EventHandlerList extends string|symbol>(cfg: WalletConnParams, msgProcessingCfg?: MsgProcessingConfig<MsgType, EventHandlerList>){
        let conn=new (class extends __Connection<MsgType,EventHandlerList>{
            public send(op:any, msg: any) { 
                //ToDo: implement wallet specific
                return conn
            }        
        })(cfg, msgProcessingCfg)
        return conn
    }

    public static connect<MsgType, EventHandlerList extends string|symbol>(cfg: ServerConnParams, msgProcessingCfg?: MsgProcessingConfig<MsgType, EventHandlerList>) {
        let conn=new (class extends __Connection<MsgType, EventHandlerList>{
            public send(op:any, msg: any) {
                //ToDo: implement server connect specific
                return conn
            }        
        })(cfg, msgProcessingCfg)
        return conn
    }
} 

abstract class __Connection<MsgType,EventHandlerList extends string|symbol> {
    constructor(private readonly cfg:any, public readonly connCfg:MsgProcessingConfig<MsgType, EventHandlerList>){}
    //ToDo: possible memory leak here if not cleaned up
    private subscriptions: {[key:string]:Subscription} = {}
    
    processEvent(e:any) {
        this.connCfg?.onEvents[e.type]?.(this,e)
    }
    
    subscribe<T>(topic: string, h: EventTypes<T>): Subscription & T 
    subscribe<T>(filter: MsgFilter, h: EventTypes<T>): Subscription & T 
    subscribe<T>(h: EventTypes<T>): Subscription & T
    subscribe<T>(topicOrFilterOrTypeHandler: string | MsgFilter | EventTypes<T>, handler?: EventTypes<T>): Subscription & T  {
        let topic
        let filter
        if (typeof topicOrFilterOrTypeHandler === 'string') topic = topicOrFilterOrTypeHandler
        else if (typeof topicOrFilterOrTypeHandler === 'function') filter = topicOrFilterOrTypeHandler as MsgFilter
        else handler = topicOrFilterOrTypeHandler
        let sub = new Subscription(this, topic, filter, handler) 
        this.subscriptions[topic]=sub //ToDo; Bad hack is here: used topic as subscription id.
        return sub as Subscription & T 
    }

    unsubscribe(subId:string) {
        this.subscriptions[subId]=null
    }

    public abstract send(op:any, msg: any): this;

    public close():void {
        // sub __connections
    }

    public receive(m: any) { 
        for (let s of Object.values(this.subscriptions)) { 
            s.onMessage(m)
        }
    }
}

type I__Connection = Pick<__Connection<any,any>,'subscribe'|'send'>

//class Subscription implements Pick<__Connection<any,any>,'subscribe'|'send'>  {
class Subscription implements I__Connection {
    send = this.conn.send.bind(this.conn)
    subscribe = this.conn.subscribe.bind(this.conn)
    
    constructor(private conn:__Connection<any,any>, private topic: string="", private filter?: MsgFilter, private onHandlerMap?: any) {
        for(let onCfg of [conn?.connCfg?.events, onHandlerMap]) {
            if (onCfg) {
                Object.keys(onCfg).forEach((name: string) =>
                    (<any>this)[name] = (msgHandler: MessageHandler) => 
                        this.on(onCfg[name],msgHandler)
                )
            }
        }
    }

    //public close(): void 
    public autoProperties: { [name: string]: AutoProperty } = {}
    public on_handlers: ((msg:any)=>void) [] = []

    
    onMessage(msg: any): any {
        //filter
        if (!msg || !this.matchesTopic(msg)
           || (this.filter && !this.filter(msg))) return
        //push values to autoProperties
        for(let ap of [this.conn?.connCfg?.autoProperties, this.autoProperties]) {
            if (ap) {
                    Object.keys(ap).forEach((key: string) => {
                    let ds = this.autoProperties[key]
                    ds && msg[ds.propertyName] && ds.setter(msg[ds.propertyName])
                })
            }
        }

        this.on_handlers.forEach(fnOn => fnOn(msg))
    }

    
    on(condition: (msg: any) => boolean, handler: (msg: any) => void): this { 
        this.on_handlers.push(
           (msg: any) => ((condition(msg) && handler(msg)),  this)
        )
        return this
    }

    matchesTopic(msg: any) : boolean {
        if (!this.topic || this.topic == msg.topic) return true;
        else if (!msg.topic) return false;

        let expected = this.topic.split('.')
        let actual = msg.topic.split('.')
        if (expected.length > actual.length) return false

        for (let i = 0; i < actual.length; ++i) { 
            if (actual[i] != expected[i] && expected[i] != "*")
                return false
        }
        return true
    }
}

// ================ custom data structures used in examples
let EthereumEvents: EventTypes<EthSupport> = {
    onWalletConnect : (msg: any) => msg.type == 'WC_CONNECT',
    onTxSent: (msg: any) => msg.type == 'TX_SENT'
}

type EthEvents = 'onWalletConnect' | 'onTxSent'
type EthSupport = Record<EthEvents, (h:MessageHandler) => EthSupport & __Connection<any,any>> 


//ToDo: return type is unnecessary here. XXXSupport should be constructed, not defined.
type SwarmSupport = {
    onSwarmNode: (h:MessageHandler) => SwarmSupport & __Connection<any,any>
    onSwarmSent: (h: MessageHandler) => SwarmSupport & __Connection<any,any>
}

let SwarmEvents: EventTypes<SwarmSupport> = {
    onSwarmNode : (msg: any) => msg.type == 'SWARM_NODE',
    onSwarmSent: (msg: any) => msg.type == 'SWARM_SENT'
}

// ==== define message format
type LikesMessage = {
    type: 'LIKE' | 'RT'
    likes: number,
    retwits: string
}
type EventHandlers = 'onRtChanged' | 'onLikeChanged'
type LikeEvents = 'RT_CHANGED'| 'LIKE_CHANGED'

/// =================== EXAMPLE1: __connection based configutarion 

// here we configure specific __connection:
// this __connection listens on events fired by environment and forward conetxt events to the server. 
// 
let likeConn  = __Core.connect<LikesMessage, EventHandlers>({url: "wss://examples.dapplets.org"} , {
    // configurates auto-properties as template for this subscription of this connection
    // allows to have different keys for used in the message and as auto-property names.  
    autoProperties: {
        like : 'likes',   //autoproperty 'like' maps message property 'likes'
        retwits: 'retwits'
    },
    events: {
        onLikeChanged : (msg: LikesMessage) => msg.type == 'LIKE',
        onRtChanged: (msg: LikesMessage) => msg.type == 'RT'
    }, 
    onEvents: {
        //ToDo: make clean solution. f.e. using subscrId or WeakMap<ctx,sub> or ctx.sub
        CONTEXT_START: (conn, ctx) => conn.send("start", ctx.id).subscribe(ctx.id),
        CONTEXT_END  : (conn, ctx) => conn.send("finished", ctx.id).unsubscribe(ctx.id)
    }
})

// ============== EXAMPLE 2: subscription based configuration (old style)

let _conn = __Core.connect({url:'wss://localhost'})
    .subscribe("the.topic", EthereumEvents)
        .onTxSent((m) => { console.log("onTxSent  topic:", m.topic) })
        .onWalletConnect((m) => { console.log("onWalletConnect  topic:", m.topic)})
    .subscribe("swarm.*", SwarmEvents)
        .onSwarmNode((m) => { console.log("onSwarmNode topic:", m.topic) })
        .onSwarmSent((m) => { console.log("onSwarmSent topic:", m.topic) })
    .send({ type: "PING" })
    .then(() => { console.log("message sent...") })
    .catch(() => { console.log("sending failed!") })

_conn.receive({ type: "WC_CONNECT", topic: "the.topic" })
_conn.receive({ type: "TX_SENT" , topic: "the.topic"})
_conn.receive({ type: "SWARM_NODE" , topic: "swarm.topic"})
_conn.receive({ type: "SWARM_SENT" , topic: "swarm.x"})

