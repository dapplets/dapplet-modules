export abstract class Widget<T> {

    constructor(config: any) {
        this.state = this.createState(config);

        Object.keys(config.listeners || {}).forEach(event => {
            this.on(event, config.listeners[event]);
        });
    }

    // Add an event listener for given event
    private _callbacks;

    on(event, fn) {
        this._callbacks = this._callbacks || {};
        // Create namespace for this event
        if (!this._callbacks[event]) {
            this._callbacks[event] = [];
        }
        this._callbacks[event].push(fn);
        return this;
    }

    emit(event, ...args) {
        this._callbacks = this._callbacks || {};
        let callbacks = this._callbacks[event];

        if (callbacks) {
            for (let callback of callbacks) {
                callback.apply(this, args);
            }
        }

        return this;
    }

    // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.
    off(event, fn) {
        if (!this._callbacks || (arguments.length === 0)) {
            this._callbacks = {};
            return this;
        }

        // specific event
        let callbacks = this._callbacks[event];
        if (!callbacks) {
            return this;
        }

        // remove all handlers
        if (arguments.length === 1) {
            delete this._callbacks[event];
            return this;
        }

        // remove specific handler
        for (let i = 0; i < callbacks.length; i++) {
            let callback = callbacks[i];
            if (callback === fn) {
                callbacks.splice(i, 1);
                break;
            }
        }

        return this;
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

}