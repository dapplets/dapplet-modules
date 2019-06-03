import { IView, ID } from 'dapplet-extension-types'
export default abstract class BasicView implements IView {
    public isActive: boolean = false;
    public observer: MutationObserver = null;

    constructor(public name: string, public INSERT_POINTS: string[]) { }
    attachedActionFactories: { [key: string]: Function[] } = {};

    attachActionFactories(actionFactories: Function[], insPoint: ID): void {
        if (!this.attachedActionFactories[insPoint]) {
            this.attachedActionFactories[insPoint] = actionFactories;
        } else {
            this.attachedActionFactories[insPoint].push(...actionFactories);
        }
        this.injectActions(document); // ToDo fix
    }

    injectActions(doc: Document) {
        for (const insPoint in this.attachedActionFactories) {
            for (const actionFactory of this.attachedActionFactories[insPoint]) {
                actionFactory(this, insPoint);
            }
        }
    }

    public activate(doc: Document): void {
        this.isActive = true;
        this.startMutationObserver(doc);
        this.injectActions(doc);
        console.log(`View "${this.name}" is activated`);
    }

    public deactivate(doc: Document) {
        this.isActive = false;
        this.stopMutationObserver(doc);
        console.log(`View "${this.name}" is deactivated`);
    }

    public stopMutationObserver(doc: Document): void {
        //ToDo: implement
        this.observer && this.observer.disconnect();
        console.log(`View "${this.name}": stopMutationObserver`);
    }

    abstract startMutationObserver(doc: Document): void;
}