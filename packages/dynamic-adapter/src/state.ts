export class State<T> {
    constructor(callbackConfig: (setState: (stateName: string) => void) => { [key: string]: T }, clazz: string) {
        this.stateTemplates = callbackConfig(n => this.setState(n));
        // ToDo: remove it
        for (const template in this.stateTemplates) {
            this.stateTemplates[template]["clazz"] = clazz;
        }
        this.setState("DEFAULT");
    }

    public changedHandler: Function;

    public el: HTMLElement;

    public createState(state) {
        const me = this;

        const proxy = new Proxy(state, {
            get(target, property, receiver) {
                if (typeof target[property] === 'object' && target[property].datasource) {
                    return undefined;
                } else {
                    return Reflect.get(target, property, receiver);
                }
            },
            set(target, property, value, receiver) {
                const success = Reflect.set(target, property, value, receiver);
                if (success) me.changedHandler && me.changedHandler();
                return success;
            }
        });

        for (const key in state) {
            const obj = state[key];
            if (typeof obj === 'object' && obj.datasource) {
                obj.datasource((value: any) => {
                    proxy[key] = value.toString();
                });
            }
        }

        return proxy;
    }

    public stateTemplates: { [key: string]: T };
    public state: T;

    public setState(stateName: string) {
        const newState = this.stateTemplates[stateName];
        this.state = this.createState(newState);
        this.changedHandler && this.changedHandler();
    }
}