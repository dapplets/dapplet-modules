import { WidgetBuilder } from './widgets';
import { IFeature, IContentAdapter } from '@dapplets/dapplet-extension';
import { IWidgetBuilderConfig, Context, IWidget } from './types';
import { State } from './state';

interface IDynamicAdapter extends IContentAdapter {
    attachFeature(feature: IFeature): void;
    detachFeature(feature: IFeature): void;
    attachConfig(config: IWidgetBuilderConfig[]): void;
    createWidgetFactory<T>(Widget: any): (config: { [state: string]: T }) => (builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) => any;
}

@Injectable
class DynamicAdapter implements IDynamicAdapter {

    private observer: MutationObserver = null;
    private features: IFeature[] = [];
    private contextBuilders: WidgetBuilder[] = [];

    private _contextCreatedHandlers: ((ctx?: any, type?: string) => void)[] = [];
    private _contextDestroyedHandlers: ((ctx?: any, type?: string) => void)[] = [];

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

    public attachConfig(config: IWidgetBuilderConfig[]) {
        const builders = config.map((cfg) => new WidgetBuilder(cfg, this._emitContextCreated.bind(this)));
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
                    removedContexts.map(c => c.parsed).forEach(ctx => this._emitContextDestroyed(ctx, contextBuilder.contextType, contextBuilder.contextEvent));
                }
                contextBuilder.updateContexts(this.features, container); // ToDo: think about it
            }
            // a new container was opened, no observer attached yet
            if (container && !contextBuilder.observer) {
                contextBuilder.observer = new MutationObserver(() => {
                    contextBuilder.updateContexts(this.features, container);
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
            // ToDo: calculate node from insPoint & view
            const insPoint = builder.insPoints[insPointName];
            const node = contextNode.querySelector(insPoint.selector);

            // check if a widget already exists for the insPoint
            if (node.getElementsByClassName(clazz).length > 0) return;

            const context = builder.contexts.get(contextNode);
            const state = new State<T>(config, context.parsed, clazz);
            const widget = new Widget() as IWidget<T>;
            widget.state = state.state;
            state.changedHandler = () => widget.mount(); // when data in state was changed, then rerender a widget
            widget.mount(); // ToDo: remove it?
            widget.el.classList.add('dapplet-widget');

            const insertedElements = node.getElementsByClassName('dapplet-widget');
            if (insertedElements.length >= order) {
                node.insertBefore(widget.el, insertedElements[order]);
            } else {
                node.appendChild(widget.el);
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

    public onContextCreated(handler: (ctx?: any, type?: string) => void): void {
        this._contextCreatedHandlers.push(handler);
    }

    public onContextDestroyed(handler: (ctx?: any, type?: string) => void): void {
        this._contextDestroyedHandlers.push(handler);
    }

    private _emitContextCreated(context: any, contextType: string, contextEvent: string) {
        this._contextCreatedHandlers.forEach(h => h(context, contextType));
        this._emitContextEvent(context, contextType, contextEvent, 'create');
    }

    private _emitContextDestroyed(context: any, contextType: string, contextEvent: string) {
        this._contextDestroyedHandlers.forEach(h => h(context, contextType));
        this._emitContextEvent(context, contextType, contextEvent, 'destroy');
    }

    private _emitContextEvent(context: any, contextType: string, contextEvent: string, operation: string) {
        const event = {
            operation,
            contextType,
            contextId: context.id,
            context
        };
        for (const feature of this.features) {
            const handlers = feature.config[contextEvent];
            if (!Array.isArray(handlers)) continue;
            handlers.forEach(h => h(event));
        }
    }
}

export { DynamicAdapter, IWidget, IDynamicAdapter }