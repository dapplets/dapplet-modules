export default class ContextReplacer {

    private _replacedElements = <Element>{};
    private _insertedWidgetIdsByElements = new WeakMap<HTMLElement, string[]>();
    private _prevReplacedContext: string
    private _el: HTMLElement
    private _contextEl: HTMLElement

    public init(
        el: HTMLElement,
        contextEl: HTMLElement
    ) {
        this._el = el;
        this._contextEl = contextEl;
    }

    public updateReplacedContext(replacedContext: string) {
        if (this._prevReplacedContext !== replacedContext) {
            if (this._insertedWidgetIdsByElements.has(this._el)) {
                const containerIds = this._insertedWidgetIdsByElements.get(this._el);
                for (const containerId of containerIds) {
                    const replacedEl = this._replacedElements[containerId];
                    const container = this._contextEl.querySelector(`#${containerId}`);
                    container?.replaceWith(replacedEl);
                }
            }
        }
        this._prevReplacedContext = replacedContext;
    }

    public replace(
        replacedContext: string,
        selectors: string,
        createWidget: () => HTMLElement
    ) {
        if (this._insertedWidgetIdsByElements.has(this._el)) {
            const containerIds = this._insertedWidgetIdsByElements.get(this._el);
            console.log('containerIds', containerIds)
            if (containerIds && containerIds.length !== 0) { 
                const container = createWidget();
                console.log('container', container)
                const oldContainer = this._contextEl.querySelector(`#${containerIds[0]}`);
                if (!oldContainer) {
                    console.log('1')
                    this._insertedWidgetIdsByElements.set(this._el, this._insertedWidgetIdsByElements.get(this._el).filter(x => x !== containerIds[0]));
                } else {
                    console.log('2')
                    oldContainer.replaceWith(container);
                    this._insertedWidgetIdsByElements.set(this._el, [...this._insertedWidgetIdsByElements.get(this._el), container.id]);
                    this._replacedElements[container.id] = this._replacedElements[containerIds[0]];
                    delete this._replacedElements[containerIds[0]];
                    return;
                }
            }
        }
        const selectedNodes = this._contextEl.querySelectorAll(selectors);
        const nodes = Array.from(selectedNodes);
        for (const node of nodes) {
            if (node.textContent.includes(replacedContext)) {
                const container = createWidget();
                if (!this._insertedWidgetIdsByElements.has(this._el)) {
                    this._insertedWidgetIdsByElements.set(this._el, [container.id]);
                } else if (!this._insertedWidgetIdsByElements.get(this._el).includes(container.id)) {
                    this._insertedWidgetIdsByElements.set(this._el, [...this._insertedWidgetIdsByElements.get(this._el), container.id]);
                }
                this._replacedElements[container.id] = node;
                node.replaceWith(container);
                break;
            }
        };
    }

    public replaceAll(
        replacedContext: string,
        selectors: string,
        createWidget: () => HTMLElement
    ) {
        if (this._insertedWidgetIdsByElements.has(this._el)) {
            const containerIds = this._insertedWidgetIdsByElements.get(this._el);
            console.log('containerIds', containerIds)
            for (const containerId of containerIds) {
                const container = createWidget();
                const oldContainer = this._contextEl.querySelector(`#${containerId}`);
                if (!oldContainer) {
                    this._insertedWidgetIdsByElements.set(this._el, this._insertedWidgetIdsByElements.get(this._el).filter(x => x !== containerId));
                    continue;
                }
                oldContainer.replaceWith(container);
                this._insertedWidgetIdsByElements.set(this._el, [...this._insertedWidgetIdsByElements.get(this._el), container.id]);
                this._replacedElements[container.id] = this._replacedElements[containerId];
                delete this._replacedElements[containerId];
            }
        }
        const selectedNodes = this._contextEl.querySelectorAll(selectors);
        selectedNodes.forEach(node => {
            if (node.textContent.includes(replacedContext)) {
                const container = createWidget();
                if (!this._insertedWidgetIdsByElements.has(this._el)) {
                    this._insertedWidgetIdsByElements.set(this._el, [container.id]);
                } else if (!this._insertedWidgetIdsByElements.get(this._el).includes(container.id)) {
                    this._insertedWidgetIdsByElements.set(this._el, [...this._insertedWidgetIdsByElements.get(this._el), container.id]);
                }
                this._replacedElements[container.id] = node;
                node.replaceWith(container);
            }
        });
    }

    public restore() {
        if (this._insertedWidgetIdsByElements.has(this._el)) {
            const containerIds = this._insertedWidgetIdsByElements.get(this._el);
            for (const containerId of containerIds) {
                const replacedTag = this._replacedElements[containerId];
                const container = this._contextEl.querySelector(`#${containerId}`);
                container?.replaceWith(replacedTag);
            }
            this._insertedWidgetIdsByElements.delete(this._el)
        }
    }

}
