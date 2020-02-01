import { AutoProperty } from "@dapplets/dapplet-extension";
import { Connection, Listener } from "@dapplets/dapplet-extension/lib/inpage/connection";

const isAutoProperty = (value:any) => value && typeof value === 'object' && value.set && value.name
const isAutoPropertyConf = (value:any) => value && typeof value === 'object' && value.conn && value.name
export class State<T> {
    public readonly INITIAL_STATE = "DEFAULT"
    private _currentStateName = undefined
    public state: T
    private _cache: any = {}
    public changedHandler: Function

    constructor(private config: { [state: string]: T }, public readonly ctx: any, public readonly contextType, private _clazz: string) {
        const me = this
        this.state = new Proxy({}, {
            get(target, property, receiver) {
                if (property == 'state') return me._currentStateName
                if (property === 'clazz') return me._clazz; // ToDo: remove it
                if (property === 'ctx') return me.ctx
                if (property === 'setState') return me.setState.bind(me)
                return me._currentStateName 
                        ? me._cache[me._currentStateName][property] 
                        : me._cache[property]
            },
            set(target, property, value, receiver) {
                if (property === 'state') {
                    me.setState(value)
                } else {
                    target[property]=value
                    me.changedHandler && me.changedHandler()
                }
                return true
            }
        }) as T
        if (me.config[me.INITIAL_STATE]) me.setState(me.INITIAL_STATE)
    }

    public setState(stateName: string) : any {   
        do {
            console.log("Set state from - to: ", this._currentStateName,stateName)     
            if (stateName == this._currentStateName) {
                console.log(`NOP state transition "${stateName}". Skipping...`)
                break
            } else if (!this._cache[stateName]) {
                this._cache[stateName] = this.createNewStateFromConfig(stateName)
            }
            this._currentStateName = stateName
            stateName = this._cache[stateName].NEXT
        } while(stateName)
        this.changedHandler && this.changedHandler()
        return this._cache[this._currentStateName]
    }

    private createNewStateFromConfig(stateName){
        let state = {}
        if (!this.config[stateName]) {
            console.error(`The state template with name "${stateName}" doesn't exist. Skipping state updating...`)
        } else {
            Object.entries(this.config[stateName]).forEach(([key, value]) => {
                state[key] = isAutoPropertyConf(value)
                            ? this.createAutoProperty(value, stateName, (v:any)=> state[key] = v).value
                            : value
            })
        }
        return state
    }

    private createAutoProperty(apConfig, stateName, setter){
        const me=this
        const conn = apConfig.conn
        let listener = conn.listenerLifecycle.get(this)
        if (!listener) {
            listener = conn.bind({
                operation: 'create',
                topic: this.ctx.id,
                contextType: this.contextType,
                contextId: this.ctx.id,
                context: this.ctx
            })
        }
        let p
        console.log("=#2===> listener.p.push", listener)
        listener.p.push( p = {
            conn: apConfig.conn,
            name: apConfig.name,
            value: undefined,
            set: (value:any) => {
                p.value = value
                if (stateName == this._currentStateName) setter(value)
                me.changedHandler && me.changedHandler()
            }
        })
        return p
    }

}// class State