import { WidgetBuilder } from './widgets';
import { IFeature, IContentAdapter } from '@dapplets/dapplet-extension-types';
import { IWidgetBuilderConfig, Context } from './types';
import { Widget } from './widget';

//let doc: Document = document; //host document we are working on (inpage.js)

abstract class DynamicAdapter implements IContentAdapter {

    private observer: MutationObserver = null;
    private features: IFeature[] = [];
    private contextBuilders: WidgetBuilder[] = [];

    public attachFeature(feature: IFeature): void { // ToDo: automate two-way dependency handling(?)
        if (this.features.find(f => f === feature)) return;
        this.features.splice(feature.orderIndex, 0, feature);
        this.updateObservers();
    }

    public detachFeature(feature: IFeature): void {
        this.features = this.features.filter(f => f !== feature);
        this.contextBuilders.forEach(wb => {
            const widgets = wb.widgets.get(feature);
            if (!widgets) return;
            widgets.forEach(w => w.unmount());
        });
        // ToDo: close all subscriptions and connections
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
        if (this.contextBuilders.length === 0) {
            this.contextBuilders = this.config.map((cfg: IWidgetBuilderConfig) => new WidgetBuilder(cfg));
        }

        this.contextBuilders.forEach(contextBuilder => {
            const container = document.querySelector(contextBuilder.containerSelector);
            if (container) {
                const removedContexts: Context[] = []
                mutations?.forEach(m => Array.from(m.removedNodes)
                    .filter((n: Element) => n.nodeType == Node.ELEMENT_NODE)
                    .forEach((n: Element) => {
                        const contextNodes = Array.from(n?.querySelectorAll(contextBuilder.contextSelector) || []);
                        const contexts = contextNodes.map((n: Element) => contextBuilder.contexts.get(n)).filter(e => e)
                        removedContexts.push(...contexts)
                    }))
                if (removedContexts && removedContexts.length > 0) {
                    removedContexts.forEach(c => c.features.forEach(f => f.subscriptions.forEach(s => s.close())));
                    Core.contextFinished(removedContexts.map(c => c.parsed));
                }
                contextBuilder.updateContexts(this.features, container); // ToDo: think about it
            }
            if (container && !contextBuilder.observer) {
                contextBuilder.observer = new MutationObserver((mutations) => {
                    contextBuilder.updateContexts(this.features, container, mutations);
                });
                contextBuilder.observer.observe(container, {
                    childList: true,
                    subtree: true
                });
            } else if (!container && contextBuilder.observer) {
                contextBuilder.observer.disconnect();
                contextBuilder.observer = null;
            }
        });
    }

    abstract config: IWidgetBuilderConfig[];
    abstract widgets: { [key: string]: any };

    public createWidgetFactory<T>(Widget: any) {
        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function createWidget(Widget: any, builder: WidgetBuilder, insPointName: string, configCallback: Function, order: number, contextNode: Element, clazz: string, proxiedSubs: any): any {
            // ToDo: calculate node from insPoint & view
            const insPoint = builder.insPoints[insPointName];
            const node = contextNode.querySelector(insPoint.selector);

            if (node.getElementsByClassName(clazz).length > 0) return;

            const context = builder.contexts.get(contextNode);

            const widget = new Widget((setState) => configCallback(context.parsed, setState, proxiedSubs), clazz);
            widget.el.classList.add('dapplet-widget');

            const insertedElements = node.getElementsByClassName('dapplet-widget');
            if (insertedElements.length >= order) {
                node.insertBefore(widget.el, insertedElements[order]);
            } else {
                node.appendChild(widget.el);
            }

            return widget;
        }

        return (configCallback: (ctx: any, state: any, sub: any) => T) => {
            const uuid = uuidv4();
            return ((builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) =>
                createWidget(Widget, builder, insPointName, configCallback, order, contextNode, uuid, proxiedSubs)
            );
        }
    }
}

export { DynamicAdapter, Widget }