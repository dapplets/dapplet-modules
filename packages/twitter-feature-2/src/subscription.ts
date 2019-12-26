
type MessageHandler = (msg: any) => any
type TypeHandler<T> = (h:MessageHandler) => Subscription & T
type TypeHandlerMap<T> = { [key: string]: TypeHandler<T> }

type MsgFilter = (msg: any) => boolean
type MsgFilterMap = { [name: string]: MsgFilter }

let EthSupportImpl: {[key in keyof EthSupport]:MsgFilter} = {
    onWalletConnect : (msg: any) => msg.type == 'WC_CONNECT',
    onTxSent: (msg: any) => msg.type == 'TX_SENT'
}

type EthSupport = {
    onWalletConnect : (h:MessageHandler) => EthSupport & Subscription
    onTxSent: (h:MessageHandler) => EthSupport  & Subscription
}

let SwarmSupportImpl: {[key in keyof SwarmSupport]:MsgFilter} = {
    onSwarmNode : (msg: any) => msg.type == 'SWARM_NODE',
    onSwarmSent: (msg: any) => msg.type == 'SWARM_SENT'
}

type SwarmSupport = {
    onSwarmNode: (h:MessageHandler) => SwarmSupport & Subscription
    onSwarmSent: (h: MessageHandler) => SwarmSupport & Subscription
}

interface ConnectionChaning {
    
    subscribe<T>(topic: string, h: MsgFilterMap): Subscription & T
    subscribe<T>(filter: MsgFilter, h: MsgFilterMap): Subscription & T
    subscribe<T>(h: MsgFilterMap): Subscription & T
    subscribe<T>(topicOrFilterOrTypeHandler: string | MsgFilter | MsgFilterMap, h?: MsgFilterMap): Subscription & T
    send(msg: any): Promise<void>

}

   
class Connection implements ConnectionChaning {
    subs: Subscription[] = []
    
    subscribe<T>(topic: string, h: MsgFilterMap): Subscription & T
    subscribe<T>(filter: MsgFilter, h: MsgFilterMap): Subscription & T
    subscribe<T>(h: MsgFilterMap): Subscription & T
    subscribe<T>(topicOrFilterOrTypeHandler: string | MsgFilter | MsgFilterMap, handler?: MsgFilterMap): Subscription & T {
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
    //public close(): void                             //ToDo: unclear?
    public datasources: { [name: string]: DataSource } = {}
    public on_handlers: ((msg:any)=>void) [] = []


    
    onMessage(msg:any):any {
        //execute transforming subscription handler
        if (msg) {
            //push values to DataSources  (or better name DataPipe?)
            Object.keys(this.datasources).forEach((key: string) => {
                let ds = this.datasources[key]
                ds.setter(msg[ds.propertyName])
            })
        }
        this.on_handlers.forEach(fnOn=>fnOn(msg))
    }

    
    on(condition: (msg: any) => boolean, handler: (msg: any) => void):Subscription { 
        this.on_handlers.push(
           (msg: any) => ((condition(msg) && handler(msg)),  this)
        )
        //console.log(this.on_handlers, this)
        return this
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

let msg = {}
const setState = (s:any) => { }
const RUNNING = () => setState("RUNNING")
const ERROR = () => setState("ERROR")

let conn = new Connection()

conn.subscribe<EthSupport>("topic", EthSupportImpl)
    .onWalletConnect((m) => { console.log("onWalletConnect")})
    .onTxSent((m) => { console.log("onTxSent") })
conn.subscribe<SwarmSupport>("acb.swarm", SwarmSupportImpl)
    .onSwarmNode((m) => { console.log("onSwarmNode") })
    .onSwarmSent((m) => { console.log("onSwarmSent") })
conn.send(msg)
    .then(RUNNING)
    .catch(ERROR)

conn.receive({ type: "WC_CONNECT" })
conn.receive({ type: "TX_SENT" })
conn.receive({ type: "SWARM_NODE" })
conn.receive({ type: "SWARM_SENT" })

interface DataSource {
    propertyName: string
    setter: (value:any) => void
}