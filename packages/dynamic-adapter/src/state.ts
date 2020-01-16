const PROP = 'auto_property'
const ANY_EVENT = 'any_event'

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

                if (typeof value === 'object' && value[PROP]) {
                    value[PROP].conn.send(ctx.id);
                    value[PROP].set = (value: any) => {
                        me.state[property] = value.toString();
                    };
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
}