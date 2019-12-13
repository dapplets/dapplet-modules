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