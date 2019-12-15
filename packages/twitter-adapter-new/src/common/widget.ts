export abstract class Widget<T> {
    private static idc = 0
    private sub: Subscription
    constructor(config: any, conn?: Connection) {
        this.state = this.createState(config);
        this.sub = conn?.subscribe('wid.' + Widget.idc++, m => Object.assign(this.state, m))
    }

    abstract mount(): void;
    
    public unmount(): void {
        this.sub?.close()        
        this.el && this.el.remove();
    }

    public el: HTMLElement;

    public createState(state) {
        const me = this;
        let _set = function (target, property, value) {
            target[property] = value
            me.mount()                                  //ToDo: forward the set call into the me.mount() 
            return true                                 // no need to return true?
        }
        return new Proxy(state, {
            set(target, property, value) {   //ToDo: call once on multiple setter calls
                if (value instanceof Promise) {
                    value.then(value  => _set(target, property, value))
                         .catch(value => _set(target, property, undefined)) 
                } else if (value instanceof Subscription) {
                    value.onMessage(value  => _set(target, property, value))
                         .catch(value => _set(target, property, undefined))    //ToDo: dedicated value for Errors?
                } else {     
                    return _set(target, property, value)
                }
            }
        });
    }

    public state: T;

    public onExec() {};
}