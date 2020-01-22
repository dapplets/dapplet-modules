export class State<T> {
    private _stateTemplates: { [key: string]: T };
    private _currentStateName = "DEFAULT";
    public state: T;
    private _cache: any = {};
    public changedHandler: Function;

    constructor(config: { [state: string]: T }, public ctx: any, private _clazz: string) {
        this._stateTemplates = config;
        this._currentStateName = (config["initial"] as any) as string;
        const me = this;
        this.state = new Proxy({}, {
            get(target, property, receiver) {
                if (property === 'clazz') return me._clazz; // ToDo: remove it
                if (me._cache[property] !== undefined) return me._cache[property];

                const value = me._stateTemplates[me._currentStateName][property];

                if (typeof value === 'object' && value.conn && value.name) {
                    const apConfig = value;
                    me.state[property] = null;
                    apConfig.activate(ctx, (value: any) => me.state[property] = value.toString()); // ToDo: remove toString()
                    return apConfig.lastValue;
                } else {
                    return value;
                }
            },
            set(target, property, value, receiver) {
                if (property === 'state') {
                    me.setState(value);
                } else {
                    me._cache[property] = value;
                    me.changedHandler && me.changedHandler();
                }

                return true;
            }
        }) as T;
    }

    public setState(stateName: string) {        
        const isStateExists = Object.getOwnPropertyNames(this._stateTemplates).includes(stateName);

        if (!isStateExists) {
            console.error(`The state template with name "${stateName}" doesn't exist. Skipping state updating...`);
            return;
        }

        // deactivation of every autoprop
        Object.entries(this._stateTemplates[this._currentStateName]).forEach(([key, value]) => {
            if (typeof value === 'object' && value.conn && value.name) {
                value.deactivate(this.ctx);
            }
        });

        this._cache = {};
        this._currentStateName = stateName;
        this.changedHandler && this.changedHandler();
    }

    // ToDo: remove
    public activateAutoproperty(ap: any) {
        // let listener = this.ctx.connToListenerMap.get(ap.conn)
        // listener.p.push(ap)
        // const obj = {
        //     set: ,
        //     config: ap
        // }
    }

    // ToDo: remove
    // ToDo: call it
    //deactivates propery if state becomes passive
    public deactivateAutoproperty(ap: any) {
        // let listener = this.ctx.connToListenerMap.get(ap.conn)
        // listener.p.remove(ap)   //simplified
        ap.isActive = false;
    }
}