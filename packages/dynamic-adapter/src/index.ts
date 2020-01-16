import { WidgetBuilder } from './widgets';
import { IFeature, IContentAdapter } from '@dapplets/dapplet-extension';
import { IWidgetBuilderConfig, Context, IWidget } from './types';
import { State } from './state';

interface IDynamicAdapter extends IContentAdapter {
    attachFeature(feature: IFeature): void;
    detachFeature(feature: IFeature): void;
    attachConfig(config: any[]): void;
    createWidgetFactory<T>(Widget: any): (config: { [state: string]: T }) => (builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element, proxiedSubs: any) => any;
}

@Injectable
class DynamicAdapter implements IDynamicAdapter {

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

    public attachConfig(config: any[]) {
        const builders = config.map((cfg: IWidgetBuilderConfig) => new WidgetBuilder(cfg));
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

    public createWidgetFactory<T>(Widget: any) {
        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        // function createState(stateCfg: State<T>, ctxid: string, apSetters: { [key: string]: (v: any) => any }) {
        //     let m = new Map<Connection, AutoProperty[]>()
        //     Object.keys(stateCfg)
        //         .forEach((k: any) => Object.keys(stateCfg[k])
        //             .forEach((kk) => {
        //                 let ap = stateCfg[k][kk][PROP]
        //                 if (ap) {
        //                     if (!m.has(ap.conn)) m.set(ap.conn, [ap])
        //                     else m.get(ap.conn)!.push(ap)
        //                 }
        //             }))
        //     for (let [conn, apArr] of m.entries()) {
        //         apArr.forEach((p: any) => p[PROP].set = apSetters[p[PROP].name])
        //         conn.send('widget_start', ctxid)
        //             .listen(ctxid, apArr)
        //     }
        // }

        function createWidget(Widget: any, builder: WidgetBuilder, insPointName: string, config: { [state: string]: T }, order: number, contextNode: Element, clazz: string, proxiedSubs: any): any {
            // ToDo: calculate node from insPoint & view
            const insPoint = builder.insPoints[insPointName];
            const node = contextNode.querySelector(insPoint.selector);

            if (node.getElementsByClassName(clazz).length > 0) return;

            const context = builder.contexts.get(contextNode);
            const state = new State<T>(config, context.parsed, clazz);
            const widget = new Widget() as IWidget<T>;
            widget.state = state.state;
            state.changedHandler = () => widget.mount();
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
}

export { DynamicAdapter, IWidget, IDynamicAdapter }