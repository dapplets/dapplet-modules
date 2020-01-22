import { AutoProperty } from "@dapplets/dapplet-extension";

export class State<T> {
    private _stateTemplates: { [key: string]: T };
    private _currentStateName = "DEFAULT";
    public state: T;
    public changedHandler: Function;

    constructor(config: { [state: string]: T }, public ctx: any, private _clazz: string) {
        this._stateTemplates = config;
        this._currentStateName = (config["initial"] as any) as string;
        const me = this;
        this.state = new Proxy({}, {
            get(target, property, receiver) {
                const reflectValue = Reflect.get(target, property, receiver);
                if (reflectValue !== undefined) return reflectValue;

                if (property === 'clazz') return me._clazz; // ToDo: remove it
                const value = me._stateTemplates[me._currentStateName][property];

                if (typeof value === 'object' && value.conn && value.name) {
                    const apConfig = value as AutoProperty;
                    me.state[property] = null;
                    // apConfig.set(); 
                    // me.activateAutoproperty(ap);




                    let listener = me.ctx.connToListenerMap.get(apConfig.conn) 
                    
                    const apRuntime = {
                        set: (value: any) => me.state[property] = value.toString(), // ToDo: remove toString()
                        // config: apConfig,
                        name: apConfig.name
                    }

                    listener.p.push(apRuntime)




                    return undefined;
                } else {
                    return value;
                }
            },
            set(target, property, value, receiver) {
                // me._stateTemplates[me._currentStateName][property] = value;
                const success = Reflect.set(target, property, value, receiver);
                me.changedHandler && me.changedHandler();
                return success;
            }
        }) as T;
    }

    public setState(stateName: string) {
        const isStateExists = Object.getOwnPropertyNames(this._stateTemplates).includes(stateName);

        if (!isStateExists) {
            console.error(`The state template with name "${stateName}" doesn't exist. Skipping state updating...`);
            return;
        }

        this._currentStateName = stateName;
        this.changedHandler && this.changedHandler();
    }

    public activateAutoproperty(ap: AutoProperty) {
        // let listener = this.ctx.connToListenerMap.get(ap.conn)
        // listener.p.push(ap)
        // const obj = {
        //     set: ,
        //     config: ap
        // }
    }

    // ToDo: call it
    //deactivates propery if state becomes passive
    public deactivateAutoproperty(ap: AutoProperty) {
        let listener = this.ctx.connToListenerMap.get(ap.conn)
        listener.p.remove(ap)   //simplified
    }
}