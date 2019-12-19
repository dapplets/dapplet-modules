export abstract class Widget<T> {

    constructor(config: any) {
        this.state = this.createState(config);
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
                if (property=='state') {
                    Object.entries(value).forEach((key,value)=> {
                        _set(target,key,value)
                    })
                }
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

    public state: T;

    public onExec() { };
}