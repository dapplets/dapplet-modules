export abstract class Widget<T> {
    constructor(config: any) {
        this.state = this.createState(config);
    }

    abstract mount(): void;
    
    public unmount(): void {
        this.el && this.el.remove();
    }

    public el: Element;

    public createState(config) {
        let stateId = config['state']
        let state = config[stateId]
        const me = this;
        return new Proxy(state, {
            set(target, property, value) {
                target[property] = value;
                me.mount();
                return true;
            }
        });
    }

    public state: T;

    public onExec() {};
}