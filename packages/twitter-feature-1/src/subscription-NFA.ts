type MessageHandler = (msg: any) => any

type MsgFilter = (msg: any) => boolean
type EventTypes<T> = { [K in keyof T]: MsgFilter }


type AutoPropertyConfig<T> = { [key in keyof T]?: string}
type EventsOutConfig = { [K : string]: MsgFilter }
type EventsInConfig = { [K : string]: (op:any, msg:any)=>void }

class AutoProperty<T> {
    conn: Connection2<T>
    propertyName: string
    setter: (value:any) => void
}

type ConnectionConfig<MsgType> = {
    autoProperties  ?: AutoPropertyConfig<MsgType>,
    eventsIn ?: EventsInConfig,
    eventsOut  ?: EventsOutConfig
}

let EthereumEvents: EventTypes<EthSupport> = {
    onWalletConnect : (msg: any) => msg.type == 'WC_CONNECT',
    onTxSent: (msg: any) => msg.type == 'TX_SENT'
}

type EthSupport = {
    onWalletConnect : (h:MessageHandler) => EthSupport & Connection2<EthSupport>
    onTxSent: (h:MessageHandler) => EthSupport & Connection2<EthSupport>
}

let SwarmEvents: EventTypes<SwarmSupport> = {
    onSwarmNode : (msg: any) => msg.type == 'SWARM_NODE',
    onSwarmSent: (msg: any) => msg.type == 'SWARM_SENT'
}

type LikesMessage = {
    type: 'LIKE' | 'RT'
    likes: number,
    retwits: string
}

// ============ to Dynamic Page Adapter

// pre-process widget config for faster rendering later
//
// 1) collect all connections referenced in specific wifget config.
function preProcessConfig(widgetCfg: any) {
    let connections :Connection2<any>[] = []
    Object.keys(widgetCfg).forEach((key)=>{
        let p = widgetCfg[key]
        if (p instanceof AutoProperty) {
            if (connections.indexOf(conn)==-1) connections.push(p.conn)
        }
    })
    widgetCfg.connections = connections

}

// here we configure specific connection:
// this connection listens on events fired by environment and forward conetxt events to the server. 
let likeConn  = Core2.connect<LikesMessage>("wss://examples.dapplets.org", {
    // configurates auto-properties for this subscription
    // allows to have different keys for used in the message and as auto-property names.  
    autoProperties: {
        likes : 'like',
        retwits: 'nrretwits'
    },
    eventsOut: {
        onLikeChanged : (msg: LikesMessage) => msg.type == 'LIKE',
        onRtChanged: (msg: LikesMessage) => msg.type == 'RT'
    }, 
    eventsIn: {
        CONTEXT_START: (conn, ctx) => conn.send("start", ctx.id).subscribe(ctx.id),
        CONTEXT_END  : (conn, ctx) => conn.send("finished", ctx.id).unsubscribe(ctx.id)
    }
})


// 2) forward specific events 
function processContextStart(ctx:any, widgetCfg: any) {
    widgetCfg.connections.forEach((conn)=>conn.processEvent(CONTEXT_START,ctx))
}

function processContextEnd(ctx:any, widgetCfg: any) {
    widgetCfg.connections.forEach((conn)=>conn.processEvent(CONTEXT_END,ctx))
}


type SwarmSupport = {
    onSwarmNode: (h:MessageHandler) => SwarmSupport & Connection2<SwarmSupport>
    onSwarmSent: (h: MessageHandler) => SwarmSupport & Connection2<SwarmSupport>
}

/*
interface ConnectionChaning {
    
    subscribe<T>(topic: string, h: EventTypes<T>): Subscription & T
    subscribe<T>(filter: MsgFilter, h: EventTypes<T>): Subscription & T
    subscribe<T>(h: EventTypes<T>): Subscription & T
    subscribe<T>(topicOrFilterOrTypeHandler: string | MsgFilter | EventTypes<T>, h?: EventTypes<T>): Subscription & T
    send<T>(msg: any): Connection2<T>

}
*/
type OverlayConnParams = {
    url: string
    title: string
    tabId?: any
}

type WalletConnParams = {
    url: string
    title: string
    tabId?: any
}

class Core2 {
    public static overlay<MsgType>(cfg: OverlayConnParams){
        return new (class extends Connection2<MsgType>{
            public send(op:any, msg: any) { 
                //ToDo: implement overlay specific
                return new Promise((resolve, reject)=>resolve())
            }        
        })(cfg)
    }

    public static wallet<MsgType>(cfg: WalletConnParams){
        return new (class extends Connection2<MsgType>{
            public send(op:any, msg: any) { 
                return new Promise((resolve, reject)=>resolve())
            }        
        })(cfg)
    }

    public static connect<T>(url: string, connCfg: ConnectionConfig<T>) {
        let r;
        return r=new (class extends Connection2<T>{
            public send(op:any, msg: any) { 
                return r
            }        
        })(url)
    }
} 
   
abstract class Connection2<MsgType> {
    constructor(public props:MsgType){}
    subConnections: Connection2<MsgType>[] = []
    subscriptions: Subscription[] = []
    
    eventListener: Event
    processEvent(e:any){}
    
    subscribe<T>(topic: string, h: EventTypes<T>): Subscription & T
    subscribe<T>(filter: MsgFilter, h: EventTypes<T>): Subscription & T
    subscribe<T>(h: EventTypes<T>): Subscription & T
    subscribe<T>(topicOrFilterOrTypeHandler: string | MsgFilter | EventTypes<T>, handler?: EventTypes<T>): Subscription & T {
        let topic
        let filter
        if (typeof topicOrFilterOrTypeHandler === 'string') topic = topicOrFilterOrTypeHandler
        else if (typeof topicOrFilterOrTypeHandler === 'function') filter = topicOrFilterOrTypeHandler as MsgFilter
        else handler = topicOrFilterOrTypeHandler
        let sub = new Subscription(this, topic, filter, handler) 
        this.subscriptions.push(sub)
        return sub as Subscription & T
    }

    autoPropertyConfig:AutoPropertyConfig<MsgType>;
    eventsConfig :EventsOutConfig
    eventsHandlers :EventsInConfig

    addAutoPropertyConfig(nameMap:{[key in keyof MsgType]?: string}): Connection2<MsgType> {
        this.autoPropertyConfig = new AutoPropertyConfig(nameMap)
        return this
    }
    
    addEventsConfig(events:{ [K : string]: MsgFilter }): Connection2<MsgType> {
        this.eventsConfig = new EventsConfig(events)
        return this
    }

    addEventsHandlers(events:{ [K : string]: MsgFilter }): Connection2<MsgType> {
        this.eventsHandlers = new EventsHandlers(events)
        return this
    } 
    public abstract send(op:any, msg: any): Connection2<any>;

    public close():void {
        for (const conn of this.subConnections) {
            conn.close()
        }
    }

    public receive(m: any) { 
        for (let s of this.subscriptions) { 
            s.onMessage(m)
        }
    }

}

class Subscription implements ConnectionChaning  {
    send = this.conn.send.bind(this.conn)
    subscribe = this.conn.subscribe.bind(this.conn)
    constructor(private conn:Connection2<any>, private topic: string="", private filter?: MsgFilter, private onHandlerMap?: any) { 
        if (onHandlerMap) {
            //ToDo fire event!!! target? scope? pubsub?
            Object.keys(onHandlerMap).forEach((name: string) =>
                (<any>this)[name] = (msgHandler: MessageHandler) => 
                    this.on(onHandlerMap[name],msgHandler)
            )
        }
    }
    //public close(): void 
    public autoProperties: { [name: string]: AutoProperty<any> } = {}
    public on_handlers: ((msg:any)=>void) [] = []


    
    onMessage(msg: any): any {
        if (!msg || !this.matchesTopic(msg)
           || (this.filter && !this.filter(msg))) return
        //push values to autoProperties
        Object.keys(this.autoProperties).forEach((key: string) => {
            let ds = this.autoProperties[key]
            msg[ds.propertyName] || ds.setter(msg[ds.propertyName])
        })

        this.on_handlers.forEach(fnOn => fnOn(msg))
    }

    
    on(condition: (msg: any) => boolean, handler: (msg: any) => void):Subscription { 
        this.on_handlers.push(
           (msg: any) => ((condition(msg) && handler(msg)),  this) as ConnectionChaning
        )
        return this
    }

    matchesTopic = (msg: any) => {
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


let _conn = new Connection2()

_conn.subscribe("the.topic", EthereumEvents)
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
