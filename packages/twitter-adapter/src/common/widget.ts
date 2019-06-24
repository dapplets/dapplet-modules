export abstract class Widget<T> {

    constructor(config: any) {
        this.state = this.createState(config);
    }

    abstract mount(): void;

    public el: Element;

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

    public onExec = () => {};
}