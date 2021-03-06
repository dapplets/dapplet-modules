import { WidgetBuilder } from './widgets';
import { IFeature, IContentAdapter } from '@dapplets/dapplet-extension';
import { IWidgetBuilderConfig, Context, IWidget } from './types';
import { State, WidgetConfig } from './state';

interface IDynamicAdapter extends IContentAdapter<any> {
    configure(config: { [contextName: string]: IWidgetBuilderConfig }): void;
    createWidgetFactory<T>(Widget: any): (config: { [state: string]: T }) => (builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element) => any;
}

@Injectable
class DynamicAdapter implements IDynamicAdapter {
    private observer: MutationObserver = null;
    private featureConfigs: any[] = [];
    private contextBuilders: WidgetBuilder[] = [];
    private stateStorage = new Map<string, any>();

    // Config from feature
    public attachConfig(config: any) { // ToDo: automate two-way dependency handling(?)
        if (this.featureConfigs.find(f => f === config)) return;
        this.featureConfigs.splice(config['orderIndex'], 0, config);
        this.updateObservers();
        return {
            $: (ctx: any, id: string) => {
                return this.contextBuilders.map(wb => wb.widgets.get(config)?.filter(x => x.state.ctx === ctx && x.state.id === id).map(x => x.state) || []).flat(1)[0];
            },
            reset: () => {
                this.detachConfig(config);
                this.attachConfig(config);
            }
        }
    }

    // Config from feature
    public detachConfig(config: any) {
        this.featureConfigs = this.featureConfigs.filter(f => f !== config);
        this.contextBuilders.forEach(wb => {
            const widgets = wb.widgets.get(config);
            if (!widgets || widgets.length === 0) return;
            widgets.forEach(w => w.unmount());
        });
        // ToDo: close all subscriptions and connections
    }

    // Config from adapter
    public configure(config: { [contextName: string]: IWidgetBuilderConfig }): void {
        const builders = Object.entries(config).map(([contextName, cfg]) => {
            const builder = new WidgetBuilder(contextName, cfg);
            builder.eventHandler = (event, args, target) => {
                if (target) {
                    target?.events?.[event]?.(...args);
                } else {
                    this.featureConfigs.forEach(config => config?.events?.[event]?.(...args));
                }
            }
            return builder;
        });

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
        Object.values(this.contextBuilders).forEach((contextBuilder) => {
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
                    removedContexts.forEach(ctx => contextBuilder.emitEvent(null, 'context_changed', ctx, [null, null, ctx.parsed]));
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
        const me = this;

        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function createWidget(Widget: any, builder: WidgetBuilder, _insPointName: string, config: { [state: string]: T }, order: number, contextNode: Element, clazz: string): any {
            if (order === undefined || order === null) {
                //console.error('Empty order!');
                order = 0;
            }

            const insPointName = Widget.contextInsPoints[builder.contextName]

            const insPoint = builder.insPoints[insPointName];
            if (!insPoint) {
                console.error(`Invalid insertion point name: ${insPointName}`);
                return;
            }

            const node = (insPoint.selector) ? contextNode.querySelector(insPoint.selector) as HTMLElement
                : (insPoint.insPoints ?
                    contextNode.querySelector(insPoint.insPoints[Widget.contextInsPoints[insPointName]].selector) as HTMLElement
                    : contextNode);
            if (!node) {
                // console.error(`There is no ${insPointName} in the ${_insPointName}. Check the selector.`);
                return;
            };

            // check if a widget already exists for the insPoint
            if (node.parentElement.getElementsByClassName(clazz).length > 0) return;

            const context = builder.contexts.get(contextNode);

            // widget state restoring
            const state = (() => {
                const hasId = context.parsed.id !== undefined;
                if (!hasId) {
                    console.error('Warning: Each parsed context in an adapter should have a unique "id" property. Restoring of widget states will be unavailable.')
                    return new State<T>(config, context.parsed, builder.theme);
                }

                const key = clazz + '/' + context.parsed.id;

                if (!me.stateStorage.has(key)) {
                    const state = new State<T>(config, context.parsed, builder.theme);
                    me.stateStorage.set(key, state);
                }

                return me.stateStorage.get(key);
            })();

            const widget = new Widget() as IWidget<T>;
            widget.state = state.state;
            widget.insPointName = builder.contextName;
            state.changedHandler = () => widget.mount(); // when data in state was changed, then rerender a widget
            widget.mount(); // ToDo: remove it?
            widget.el.classList.add('dapplet-widget', clazz);

            widget.el.setAttribute('data-dapplet-order', order.toString());

            const insertTo: 'begin' | 'end' | 'inside' = (insPoint.insert === undefined) ?
                (insPoint.insPoints?.[Widget.contextInsPoints[insPointName]].insert === undefined ?
                    'end'
                    : insPoint.insPoints[Widget.contextInsPoints[insPointName]].insert)
                : insPoint.insert;

            const insertedElements = node.parentNode.querySelectorAll(':scope > .dapplet-widget');

            if (insertedElements.length === 0) {
                if (insertTo === 'end') {
                    node.parentNode.insertBefore(widget.el, node.nextSibling);
                } else if (insertTo === 'begin') {
                    node.parentNode.insertBefore(widget.el, node);
                } else if (insertTo === 'inside') {
                    node.appendChild(widget.el);
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

        return (config: WidgetConfig<T>) => {
            const uuid = uuidv4();
            return ((builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element) =>
                createWidget(Widget, builder, insPointName, config, order, contextNode, uuid)
            );
        }
    }
}

export { DynamicAdapter, IWidget, IDynamicAdapter }