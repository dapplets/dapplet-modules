
type MessageHandler = (msg: any) => any
type TypeHandler<T> = (h:MessageHandler) => Subscription & T
type TypeHandlerMap<T> = { [key: string]: TypeHandler<T> }

type MsgFilter = (msg: any) => boolean
type MsgFilterMap<T> = { [K in keyof T]: MsgFilter }

let EthereumEvents: MsgFilterMap<EthSupport> = {
    onWalletConnect : (msg: any) => msg.type == 'WC_CONNECT',
    onTxSent: (msg: any) => msg.type == 'TX_SENT'
}
type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends MsgFilter ? K : never }[keyof T]
type OnHandlers = typeof EthereumEvents

type EthSupport = {
    onWalletConnect : (h:MessageHandler) => EthSupport
    onTxSent: (h:MessageHandler) => EthSupport
}

let SwarmEvents: MsgFilterMap<SwarmSupport> = {
    onSwarmNode : (msg: any) => msg.type == 'SWARM_NODE',
    onSwarmSent: (msg: any) => msg.type == 'SWARM_SENT'
}

type SwarmSupport = {
    onSwarmNode: (h:MessageHandler) => SwarmSupport
    onSwarmSent: (h: MessageHandler) => SwarmSupport
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
        let topic = ""
        let filter
        if (typeof topicOrFilterOrTypeHandler === 'string') topic = topicOrFilterOrTypeHandler
        else if (typeof topicOrFilterOrTypeHandler === 'function') filter = topicOrFilterOrTypeHandler as MsgFilter
        else handler = topicOrFilterOrTypeHandler
        let sub = new Subscription(topic, filter, handler) 
        this.subs.push(sub)
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

class Subscription  {
    constructor(private topic: string, private filter?: MsgFilter, private onHandlerMap?: any) { 
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
            ds.setter(msg[ds.propertyName]) //ToDo: on undefined -- ignore or unset?
        })

        this.on_handlers.forEach(fnOn => fnOn(msg))
    }

    
    on(condition: (msg: any) => boolean, handler: (msg: any) => void):Subscription { 
        this.on_handlers.push(
           (msg: any) => ((condition(msg) && handler(msg)),  this)
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


//interface Subscription extends ConnectionChaning {}
//applyMixins(Subscription, [Connection]);
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            //console.log('name name', name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name))
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name)!);
        });
    });
}

let conn = new Connection()

conn.subscribe("the.topic", EthereumEvents)
    .onTxSent((m) => { console.log("onTxSent  topic:", m.topic) })
    .onWalletConnect((m) => { console.log("onWalletConnect  topic:", m.topic)})
conn.subscribe("swarm.*", SwarmEvents)
    .onSwarmNode((m) => { console.log("onSwarmNode topic:", m.topic) })
    .onSwarmSent((m) => { console.log("onSwarmSent topic:", m.topic) })
conn.send({ type: "PING" })
    .then((res) => { console.log("message sent...") })
    .catch((e) => { console.log("sending failed!") })

conn.receive({ type: "WC_CONNECT", topic: "the.topic" })
conn.receive({ type: "TX_SENT" , topic: "the.topic"})
conn.receive({ type: "SWARM_NODE" , topic: "swarm.topic"})
conn.receive({ type: "SWARM_SENT" , topic: "swarm.x"})

interface DataSource {
    propertyName: string
    setter: (value:any) => void
}