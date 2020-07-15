import { StatusLineWidget } from './statusLineWidget';

type Message = {
    uuid: string;
    text: string;
    menu?: Function;
    group?: string;
}

export class StatusLine {
    widget: StatusLineWidget;

    constructor() {
        const widget = new StatusLineWidget();
        widget.state = new Proxy({}, {
            set(target, prop, val) {
                target[prop] = val;
                widget.mount();
                return true;
            }
        });
        widget.mount();        
        document.body.appendChild(widget.el);
        this.widget = widget;
    }

    addMessage(message: Message) {
        this.widget.addMessage(message);
    }

    removeMessage(messageId: string | string[]) {
        if (Array.isArray(messageId)) {
            messageId.forEach(id => this.widget.removeMessage(id));
        } else {
            this.widget.removeMessage(messageId);
        }
    }
}