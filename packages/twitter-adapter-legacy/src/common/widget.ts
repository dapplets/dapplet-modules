//ToDo-18: move this file from common? 
export abstract class Widget<T> {

    constructor(callbackConfig: (setState: (stateName: string) => void) => { [key: string]: T }) {
        this.stateTemplates = callbackConfig(n => this.setState(n));
        this.setState("DEFAULT");
    }
    
    abstract mount(): void;

    public unmount(): void {
        this.el && this.el.remove();
    }

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
                if (success) me.mount();
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
        this.el && this.mount();
    }
}