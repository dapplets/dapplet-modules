export class Locator {

    private _locators = Core.getContentDetectors();

    private _map = new Map<string, Set<Element>>();

    constructor() {
    }

    // ToDo: scan contextIds before MutationObserver initialization

    handleMutations(mutations: MutationRecord[]) {
        for (const mutation of mutations) {
            for (const addedNode of Array.from(mutation.addedNodes) as Element[]) {
                for (const locator of this._locators) {
                    if (addedNode.matches && addedNode.matches(locator.selector)) {
                        this.addElement(addedNode, locator.contextId);
                    } else if (addedNode.querySelectorAll) {
                        const elements = addedNode.querySelectorAll(locator.selector);
                        elements.forEach(el => this.addElement(el, locator.contextId));
                    }
                }
            }

            for (const removedNode of Array.from(mutation.removedNodes) as Element[]) {
                for (const locator of this._locators) {
                    if (removedNode.matches && removedNode.matches(locator.selector)) {
                        this.removeElement(removedNode, locator.contextId);
                    } else if (removedNode.querySelectorAll) {
                        const elements = removedNode.querySelectorAll(locator.selector);
                        elements.forEach(el => this.removeElement(el, locator.contextId));
                    }
                }
            }
        }
    }

    addElement(el: Element, contextId: string) {
        if (!this._map.has(contextId)) this._map.set(contextId, new Set());
        this._map.get(contextId).add(el);
        if (this._map.get(contextId).size === 1) {
            Core.contextStarted([contextId]);
        }
    }

    removeElement(el: Element, contextId: string) {
        if (!this._map.has(contextId)) return;
        this._map.get(contextId).delete(el);
        if (this._map.get(contextId).size === 0) {
            this._map.delete(contextId);
            Core.contextFinished([contextId]);
        }
    }
}