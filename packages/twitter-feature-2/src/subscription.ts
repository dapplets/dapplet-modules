type MessageHandler = (msg: any) => any

type MsgFilter = (msg: any) => boolean
type MsgFilterMap<T> = { [K in keyof T]: MsgFilter }

let EthereumEvents: MsgFilterMap<EthSupport> = {
    onWalletConnect : (msg: any) => msg.type == 'WC_CONNECT',
    onTxSent: (msg: any) => msg.type == 'TX_SENT'
}

type EthSupport = {
    onWalletConnect : (h:MessageHandler) => EthSupport & ConnectionChaning
    onTxSent: (h:MessageHandler) => EthSupport & ConnectionChaning
}

let SwarmEvents: MsgFilterMap<SwarmSupport> = {
    onSwarmNode : (msg: any) => msg.type == 'SWARM_NODE',
    onSwarmSent: (msg: any) => msg.type == 'SWARM_SENT'
}

type SwarmSupport = {
    onSwarmNode: (h:MessageHandler) => SwarmSupport & ConnectionChaning
    onSwarmSent: (h: MessageHandler) => SwarmSupport & ConnectionChaning
}

interface ConnectionChaning {
    
    subscribe<T>(topic: string, h: MsgFilterMap<T>): Subscription & T
    subscribe<T>(filter: MsgFilter, h: MsgFilterMap<T>): Subscription & T
    subscribe<T>(h: MsgFilterMap<T>): Subscription & T
    subscribe<T>(topicOrFilterOrTypeHandler: string | MsgFilter | MsgFilterMap<T>, h?: MsgFilterMap<T>): Subscription & T
    send(msg: any): Promise<void>

}

   
class Connection implements ConnectionChaning {
    subs: Subscription[] = []
    
    subscribe<T>(topic: string, h: MsgFilterMap<T>): Subscription & T
    subscribe<T>(filter: MsgFilter, h: MsgFilterMap<T>): Subscription & T
    subscribe<T>(h: MsgFilterMap<T>): Subscription & T
    subscribe<T>(topicOrFilterOrTypeHandler: string | MsgFilter | MsgFilterMap<T>, handler?: MsgFilterMap<T>): Subscription & T {
        console.log(...arguments)
        let topic
        let filter
        if (typeof topicOrFilterOrTypeHandler === 'string') topic = topicOrFilterOrTypeHandler
        else if (typeof topicOrFilterOrTypeHandler === 'function') filter = topicOrFilterOrTypeHandler as MsgFilter
        else handler = topicOrFilterOrTypeHandler
        let sub = new Subscription(this, topic, filter, handler) 
        this.subs.push(sub)
        console.log(this)
        return sub as Subscription & T
    }
    public send(msg: any): Promise<void> { 
        return new Promise((resolve, reject)=>resolve())
    }

    public receive(m: any) { 
        for (let s of this.subs) { 
            s.onMessage(m)
        }
    }

}

class Subscription implements ConnectionChaning  {
    send = this.conn.send.bind(this.conn)
    subscribe = this.conn.subscribe.bind(this.conn)
    constructor(private conn:Connection, private topic: string="", private filter?: MsgFilter, private onHandlerMap?: any) { 
        if (onHandlerMap) {
            Object.keys(onHandlerMap).forEach((name: string) =>
                (<any>this)[name] = (msgHandler: MessageHandler) => 
                    this.on(onHandlerMap[name],msgHandler)
            )
            console.log(onHandlerMap)
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
        //console.log(this.on_handlers, this)
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


let conn = new Connection()

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