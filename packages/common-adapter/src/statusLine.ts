import { StatusLineWidget } from './statusLineWidget';

type Message = {
    uuid: string;
    text: string;
    menu?: Function;
    group?: string;
}

export class StatusLine {
    widget: StatusLineWidget;
    uuidsByFeatureId: { [featureId: string]: string[] } = {};

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

    addMessage(message: Message, featureId: string) {
        if (!this.uuidsByFeatureId[featureId]) this.uuidsByFeatureId[featureId] = [];
        this.uuidsByFeatureId[featureId].push(message.uuid);
        this.widget.addMessage(message);
    }

    removeMessage(messageId: string | string[], featureId: string) {
        if (!this.uuidsByFeatureId[featureId]) this.uuidsByFeatureId[featureId] = [];
        if (Array.isArray(messageId)) {
            this.uuidsByFeatureId[featureId] = this.uuidsByFeatureId[featureId].filter(u => messageId.indexOf(u) === -1);
            messageId.forEach(id => this.widget.removeMessage(id));
        } else {
            this.uuidsByFeatureId[featureId] = this.uuidsByFeatureId[featureId].filter(u => u !== messageId);
            this.widget.removeMessage(messageId);
        }
    }

    removeAll(featureId: string) {
        if (!this.uuidsByFeatureId[featureId]) this.uuidsByFeatureId[featureId] = [];
        this.uuidsByFeatureId[featureId].forEach(u => this.removeMessage(u, featureId));
    }

    forFeature(featureId: string) {
        return {
            addMessage: (message: Message) => this.addMessage(message, featureId),
            removeMessage: (messageId: string | string[]) => this.removeMessage(messageId, featureId)
        }
    }
}