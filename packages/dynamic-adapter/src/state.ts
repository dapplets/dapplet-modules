import { AutoPropertyConf } from "@dapplets/dapplet-extension";

export type WidgetConfig<T> = ({
    [key: string]: T;
} & {
    id?: string;
    initial?: string;
});

export class State<T> {
    public readonly INITIAL_STATE;
    private _currentStateName = undefined
    public state: T
    private _cache: any = {}
    public changedHandler: (newValues: Partial<T>) => void;
    public id: string;

    constructor(private config: WidgetConfig<T>, public readonly ctx: any, private getTheme: () => string) {
        const me = this
        this.id = config.id;
        this.INITIAL_STATE = config.initial || "DEFAULT";
        this.state = new Proxy({}, {
            get(target, property, receiver) {
                if (property === 'state') return me._currentStateName
                if (property === 'ctx') return me.ctx
                if (property === 'setState') return me.setState.bind(me)
                if (property === 'id') return me.id
                if (property === 'theme') return me.getTheme?.()

                const theme = me.getTheme?.();

                const value = me._currentStateName
                    ? me._cache[me._currentStateName][property]
                    : me._cache[property]

                if (theme) {
                    return (typeof value === 'object' && value[theme]) ? value[theme] : value
                } else {
                    return value
                }
            },
            set(target, property, value, receiver) {
                if (property === 'state') {
                    me.setState(value)
                } else if (property === 'newState') {
                    me.setState(value, true)
                } else {
                    if (me._currentStateName) {
                        me._cache[me._currentStateName][property] = value
                    } else {
                        me._cache[property] = value
                    }
                    me.changedHandler && me.changedHandler(me._themifyState({ [property]: value }));
                }
                return true
            }
        }) as T
        if (me.config[me.INITIAL_STATE]) me.setState(me.INITIAL_STATE)
    }

    public setState(stateName: string, resetState: boolean = false): any {
        do {
            //console.log("Set state from - to: ", this._currentStateName,stateName)     
            if (stateName == this._currentStateName) {
                //console.log(`NOP state transition "${stateName}". Skipping...`)
                break
            } else if (!this._cache[stateName] || resetState) {
                this._cache[stateName] = this.createNewStateFromConfig(stateName)
            }
            this._currentStateName = stateName
            stateName = this._cache[stateName].NEXT
        } while (stateName)
        this.changedHandler && this.changedHandler(this.getStateValues())
        return this._cache[this._currentStateName]
    }

    public getStateValues(): T {
        const cachedState = this._currentStateName ? this._cache[this._currentStateName] : this._cache;
        return this._themifyState(cachedState);
    }

    private createNewStateFromConfig(stateName) {
        let state = {}
        if (this.config[stateName]) {
            const createAutoProperty = (apConfig: AutoPropertyConf, setter: (v: any) => void) =>
                //ToDo: move addAutoProperty to apCpnfig? 
                apConfig.conn.addAutoProperty(apConfig, setter, this.ctx)
            const isAutoPropertyConf = (value: any) =>
                value && typeof value === 'object' && value.conn && value.name
            const me = this
            Object.entries(this.config[stateName]).forEach(([key, valueOrApConf]) => {
                state[key] = !isAutoPropertyConf(valueOrApConf)
                    ? valueOrApConf
                    : createAutoProperty(valueOrApConf, (v: any) => {
                        if (stateName == me._currentStateName) {
                            state[key] = v
                            me.changedHandler && me.changedHandler(me._themifyState({ [key]: v }))
                        }
                    }).value
            })
        } else {
            console.error(`The state template with name "${stateName}" doesn't exist. Skipping state updating...`)
        }
        return state
    }

    private _themifyState(values: any): any {
        const theme = this.getTheme?.();
        if (!theme) return values;

        const themedEntries = Object.entries(values).map(([k, v]) => ([k, (typeof v === 'object' && v[theme]) ? v[theme] : v]));
        const themedState = Object.fromEntries(themedEntries);
        
        return { ...themedState, theme };
    }

}// class State