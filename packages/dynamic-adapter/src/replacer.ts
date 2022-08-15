export default class ContextReplacer {

    private _replacedElements = <Element>{};
    private _insertedWidgetIdsByElements = new WeakMap<HTMLElement, string[]>();
    private _prevReplacedContext: string
    private _el: HTMLElement
    private _article: HTMLElement

    public init(
        el: HTMLElement,
        article: HTMLElement
    ) {
        this._el = el;
        this._article = article;
    }

    public updateReplacedContext(replacedContext: string) {
        if (this._prevReplacedContext !== replacedContext) {
            if (this._insertedWidgetIdsByElements.has(this._el)) {
                const containerIds = this._insertedWidgetIdsByElements.get(this._el);
                for (const containerId of containerIds) {
                    const replacedTag = this._replacedElements[containerId];
                    const container = this._article.querySelector(`#${containerId}`);
                    container?.replaceWith(replacedTag);
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
            for (const containerId of containerIds) {
                const container = createWidget();
                const oldContainer = this._article.querySelector(`#${containerId}`);
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
        const selectedNodes = this._article.querySelectorAll(selectors);
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

    public cancelReplace() {
        if (this._insertedWidgetIdsByElements.has(this._el)) {
            const containerIds = this._insertedWidgetIdsByElements.get(this._el);
            for (const containerId of containerIds) {
                const replacedTag = this._replacedElements[containerId];
                const container = this._article.querySelector(`#${containerId}`);
                container?.replaceWith(replacedTag);
            }
        }
    }

}
