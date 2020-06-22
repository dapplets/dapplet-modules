import { WidgetBuilder } from './widgets';
import { IFeature, IContentAdapter } from '@dapplets/dapplet-extension';
import { IWidgetBuilderConfig, Context, IWidget } from './types';
import { State } from './state';

interface IDynamicAdapter extends IContentAdapter<any> {
    configure(config: IWidgetBuilderConfig[]): void;
    createWidgetFactory<T>(Widget: any): (config: { [state: string]: T }) => (builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) => any;
}

@Injectable
class DynamicAdapter implements IDynamicAdapter {
    private observer: MutationObserver = null;
    private featureConfigs: any[] = [];
    private contextBuilders: WidgetBuilder[] = [];

    public attachConfig(config: any): void { // ToDo: automate two-way dependency handling(?)
        if (this.featureConfigs.find(f => f === config)) return;
        this.featureConfigs.splice(config['orderIndex'], 0, config);
        this.updateObservers();
    }

    public detachConfig(config: any): void {
        this.featureConfigs = this.featureConfigs.filter(f => f !== config);
        this.contextBuilders.forEach(wb => {
            const widgets = wb.widgets.get(config);
            if (!widgets) return;
            widgets.forEach(w => w.unmount());
        });
        // ToDo: close all subscriptions and connections
    }

    public configure(config: IWidgetBuilderConfig[]) {
        const builders = config.map((cfg) => new WidgetBuilder(cfg));
        this.contextBuilders.push(...builders);
    }

    constructor() {
        if (this.observer) return;
        if (!document || !window || !MutationObserver) throw Error('Document or MutationObserver is not available.');
        const OBSERVER_CONFIG = {
            childList: true,
            subtree: true
        }

        this.observer = new MutationObserver((mutations) => this.updateObservers(mutations));

        this.observer.observe(document.body, OBSERVER_CONFIG);
    }

    private updateObservers(mutations?) {
        this.contextBuilders.forEach(contextBuilder => {
            const container = document.querySelector(contextBuilder.containerSelector);
            if (container) {
                // destroy contexts to removed nodes
                const removedContexts: Context[] = []
                mutations?.forEach(m => Array.from(m.removedNodes)
                    .filter((n: Element) => n.nodeType == Node.ELEMENT_NODE)
                    .forEach((n: Element) => {
                        const contextNodes = Array.from(n?.querySelectorAll(contextBuilder.contextSelector) || []);
                        const contexts = contextNodes.map((n: Element) => contextBuilder.contexts.get(n)).filter(e => e)
                        removedContexts.push(...contexts)
                    }))
                if (removedContexts && removedContexts.length > 0) {
                    Core.contextFinished(removedContexts.map(c => c.parsed));
                    removedContexts.forEach(ctx => contextBuilder.emitEvent('finished', ctx, [ctx.parsed]));
                }
                contextBuilder.updateContexts(this.featureConfigs, container); // ToDo: think about it
            }
            // a new container was opened, no observer attached yet
            if (container && !contextBuilder.observer) {
                contextBuilder.observer = new MutationObserver(() => {
                    contextBuilder.updateContexts(this.featureConfigs, container);
                });
                contextBuilder.observer.observe(container, {
                    childList: true,
                    subtree: true
                });
            } else if (!container && contextBuilder.observer) {
                // a container was destroyed, disconnect observer too
                contextBuilder.observer.disconnect();
                contextBuilder.observer = null;
            }
        });
    }

    public createWidgetFactory<T>(Widget: any) {
        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function createWidget(Widget: any, builder: WidgetBuilder, insPointName: string, config: { [state: string]: T }, order: number, contextNode: Element, clazz: string, proxiedSubs: any): any {
            if (order === undefined || order === null) {
                //console.error('Empty order!');
                order = 0;
            }

            const insPoint = builder.insPoints[insPointName];
            if (!insPoint) {
                console.error(`Invalid insertion point name: ${insPointName}`);
                return;
            }

            const node = (insPoint.selector) ? contextNode.querySelector(insPoint.selector) as HTMLElement : contextNode;
            if (!node) return;

            // check if a widget already exists for the insPoint
            if (node.parentElement.getElementsByClassName(clazz).length > 0) return;

            const context = builder.contexts.get(contextNode);
            const state = new State<T>(config, context.parsed, builder.contextType);
            const widget = new Widget() as IWidget<T>;
            widget.state = state.state;
            widget.insPointName = insPointName;
            state.changedHandler = () => widget.mount(); // when data in state was changed, then rerender a widget
            widget.mount(); // ToDo: remove it?
            widget.el.classList.add('dapplet-widget', clazz);

            widget.el.setAttribute('data-dapplet-order', order.toString());

            const insertTo: 'begin' | 'end' = (insPoint.insert === undefined) ? 'end' : insPoint.insert;

            const insertedElements = node.parentNode.querySelectorAll(':scope > .dapplet-widget');

            if (insertedElements.length === 0) {
                if (insertTo === 'end') { 
                    node.parentNode.insertBefore(widget.el, node.nextSibling);
                } else if (insertTo === 'begin') {
                    node.parentNode.insertBefore(widget.el, node);
                } else {
                    console.error('Invalid "insert" value in the insertion point config. The valid values are "begin" or "end".');
                }
            } else {
                let targetElementIndex = null;

                // ToDo: find an element with the same order to throw the error
                // searching for an element index before which need to be inserted.
                for (let i = 0; i < insertedElements.length; i++) {
                    const element = insertedElements[i];
                    const elementOrder = parseInt(element.getAttribute('data-dapplet-order'));
                    if (targetElementIndex === null && elementOrder > order) {
                        targetElementIndex = i;
                    }
                    // if (elementOrder === order) {
                    //     console.error('A widget with such an order index already inserted.');
                    // }
                }

                if (targetElementIndex === null) {
                    const lastNode = insertedElements[insertedElements.length - 1];
                    lastNode.parentNode.insertBefore(widget.el, lastNode.nextSibling); // insert after lastNode
                } else {
                    const targetNode = insertedElements[targetElementIndex];
                    targetNode.parentNode.insertBefore(widget.el, targetNode); // insert before targetNode
                }
            }

            return widget;
        }

        return (config: { [state: string]: T }) => {
            const uuid = uuidv4();
            return ((builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) =>
                createWidget(Widget, builder, insPointName, config, order, contextNode, uuid, proxiedSubs)
            );
        }
    }
}

export { DynamicAdapter, IWidget, IDynamicAdapter }