type MessageHandler = (msg: any) => any

type MsgFilter = (msg: any) => boolean
type EventTypes<T> = { [K in keyof T]: MsgFilter }

let EthereumEvents: EventTypes<EthSupport> = {
    onWalletConnect : (msg: any) => msg.type == 'WC_CONNECT',
    onTxSent: (msg: any) => msg.type == 'TX_SENT'
}

type EthSupport = {
    onWalletConnect : (h:MessageHandler) => EthSupport & ConnectionChaning
    onTxSent: (h:MessageHandler) => EthSupport & ConnectionChaning
}

let SwarmEvents: EventTypes<SwarmSupport> = {
    onSwarmNode : (msg: any) => msg.type == 'SWARM_NODE',
    onSwarmSent: (msg: any) => msg.type == 'SWARM_SENT'
}

type SwarmSupport = {
    onSwarmNode: (h:MessageHandler) => SwarmSupport & ConnectionChaning
    onSwarmSent: (h: MessageHandler) => SwarmSupport & ConnectionChaning
}

interface ConnectionChaning {
    
    subscribe<T>(topic: string, h: EventTypes<T>): Subscription & T
    subscribe<T>(filter: MsgFilter, h: EventTypes<T>): Subscription & T
    subscribe<T>(h: EventTypes<T>): Subscription & T
    subscribe<T>(topicOrFilterOrTypeHandler: string | MsgFilter | EventTypes<T>, h?: EventTypes<T>): Subscription & T
    send(msg: any): Promise<void>

}

type OverlayConnConfig = {
    url: string
    title: string
    tabId?: any
}

type WalletConnConfig = {
    url: string
    title: string
    tabId?: any
}

//creates overlay
class Core2 {
    public static overlay(cfg: OverlayConnConfig){
        return new (class extends Connection2<OverlayConnConfig>{
            public send(msg: any): Promise<void> { 
                //ToDo: implement overlay specific
                return new Promise((resolve, reject)=>resolve())
            }        
        })(cfg)
    }

    public static wallet(cfg: WalletConnConfig){
        return new (class extends Connection2<WalletConnConfig>{
            public send(msg: any): Promise<void> { 
                return new Promise((resolve, reject)=>resolve())
            }        
        })(cfg)
    }
} 
   
abstract class Connection2<ConnType> implements ConnectionChaning {
    constructor(public props:ConnType){}
    subConnections: Connection2<ConnType>[] = []
    subscriptions: Subscription[] = []
    
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

    public abstract send(msg: any): Promise<void>;

    public close():void {
        for (const conn of this.subConnections) {
            conn.close()
        }
    }

    public spawn(moreProps:ConnType):Connection2<ConnType> {
        let props = {...this.props, ...moreProps}
        return new Connection2<ConnType>(moreProps)
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
    constructor(private conn:Connection2, private topic: string="", private filter?: MsgFilter, private onHandlerMap?: any) { 
        if (onHandlerMap) {
            Object.keys(onHandlerMap).forEach((name: string) =>
                (<any>this)[name] = (msgHandler: MessageHandler) => 
                    this.on(onHandlerMap[name],msgHandler)
            )
        }
    }
    //public close(): void 
    public datasources: { [name: string]: DataSource } = {}
    public on_handlers: ((msg:any)=>void) [] = []


    
    onMessage(msg: any): any {
        if (!msg || !this.matchesTopic(msg)
           || (this.filter && !this.filter(msg))) return
        //push values to DataSources
        Object.keys(this.datasources).forEach((key: string) => {
            let ds = this.datasources[key]
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


let conn = new Connection2()

conn.subscribe("the.topic", EthereumEvents)
        .onTxSent((m) => { console.log("onTxSent  topic:", m.topic) })
        .onWalletConnect((m) => { console.log("onWalletConnect  topic:", m.topic)})
    .subscribe("swarm.*", SwarmEvents)
        .onSwarmNode((m) => { console.log("onSwarmNode topic:", m.topic) })
        .onSwarmSent((m) => { console.log("onSwarmSent topic:", m.topic) })
    .send({ type: "PING" })
    .then(() => { console.log("message sent...") })
    .catch(() => { console.log("sending failed!") })

conn.receive({ type: "WC_CONNECT", topic: "the.topic" })
conn.receive({ type: "TX_SENT" , topic: "the.topic"})
conn.receive({ type: "SWARM_NODE" , topic: "swarm.topic"})
conn.receive({ type: "SWARM_SENT" , topic: "swarm.x"})

interface DataSource {
    propertyName: string
    setter: (value:any) => void
}