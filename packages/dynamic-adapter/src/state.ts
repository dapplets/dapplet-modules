export class State<T> {
    private _stateTemplates: { [key: string]: T };
    private _currentStateName = "DEFAULT";
    public state: T;
    public changedHandler: Function;

    constructor(callbackConfig: (setState: (stateName: string) => void) => { [key: string]: T }, private _clazz: string) {
        this._stateTemplates = callbackConfig(n => this.setState(n));
        const me = this;
        this.state = new Proxy({}, {
            get(target, property, receiver) {
                if (property === 'clazz') return me._clazz; // ToDo: remove it
                const value = me._stateTemplates[me._currentStateName][property];
                if (typeof value === 'object' && value.datasource) {
                    value.datasource((value: any) => me.state[property] = value.toString());
                    return undefined;
                } else {
                    return value;
                }
            },
            set(target, property, value, receiver) {
                me._stateTemplates[me._currentStateName][property] = value;
                me.changedHandler && me.changedHandler();
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

        this._currentStateName = stateName;
        this.changedHandler && this.changedHandler();
    }
}