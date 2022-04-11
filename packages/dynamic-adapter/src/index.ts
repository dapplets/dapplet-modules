// Polyfill for WebComponents that doesn't work in an Extension's JS-context
import '@webcomponents/custom-elements';

import { WidgetBuilder } from './widgets';
import { IFeature, IContentAdapter } from '@dapplets/dapplet-extension';
import { IWidgetBuilderConfig, Context, IWidget } from './types';
import { State, WidgetConfig } from './state';
import { Locator } from './locator';

interface IDynamicAdapter<IAdapterConfig> extends IContentAdapter<IAdapterConfig> {
    configure(config: { [contextName: string]: IWidgetBuilderConfig }): void;
    createWidgetFactory<T>(Widget: any): (config: { [state: string]: T }) => (builder: WidgetBuilder, insPointName: string, order: number, contextNode: Element) => any;
    resetConfig(config: IAdapterConfig, newConfig?: IAdapterConfig): {
        $: (ctx: any, id: string) => any;
    };
}

@Injectable
class DynamicAdapter<IAdapterConfig> implements IDynamicAdapter<IAdapterConfig>  {
    private observer: MutationObserver = null;
    private featureConfigs: any[] = [];
    private contextBuilders: WidgetBuilder[] = [];
    private stateStorage = new Map<string, State<any>>();
    private locator = new Locator();

    constructor() {
        if (!document || !window || !MutationObserver) throw Error('Document or MutationObserver is not available.');

        this.locator.scanDocument(); // find all dynamic contexts in a document
        this.observer = new MutationObserver((mutations) => this.updateObservers(mutations));
        this.observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    }

    // Config from feature
    public attachConfig(config: IAdapterConfig) { // ToDo: automate two-way dependency handling(?)
        if (this.featureConfigs.find(f => f === config)) return;

        this.featureConfigs.splice(config['orderIndex'], 0, config);
        this.updateObservers();

        return {
            $: (ctx: any, id: string) => {
                for (const wb of this.contextBuilders) {
                    const widget = wb.findWidget(config, ctx, id);
                    if (widget) return widget;
                }

                return null;
            },
            reset: (newConfig?: IAdapterConfig) => this.resetConfig(config, newConfig)
        }
    }

    // Config from feature
    public detachConfig(config: any) {
        this.featureConfigs = this.featureConfigs.filter(f => f !== config);
        this.contextBuilders.forEach(wb => wb.unmountWidgets(config));
        // ToDo: close all subscriptions and connections
    }

    public resetConfig(config: IAdapterConfig, newConfig?: IAdapterConfig) {
        this.detachConfig(config);
        return this.attachConfig(newConfig ?? config);
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
        this.updateObservers();
    }

    private updateObservers(mutations?: MutationRecord[]) {
        this.contextBuilders
            .filter((contextBuilder) =>
                !this.contextBuilders.find((anyContextBuilder) =>
                    anyContextBuilder.childrenContexts?.includes(contextBuilder.contextName)
                )
            )
            .forEach((contextBuilder) => {
                const container = document.querySelector(contextBuilder.containerSelector);
                if (container) {
                    // destroy contexts to removed nodes
                    const removedContexts: Context[] = []
                    mutations?.forEach(m => Array.from(m.removedNodes)
                        .filter((n: Element) => n.nodeType == Node.ELEMENT_NODE)
                        .forEach((n: Element) => {
                            const contextNodes = contextBuilder.contextSelector ? Array.from(n?.querySelectorAll(contextBuilder.contextSelector) || []) : [n];
                            const contexts = contextNodes.map((n: Element) => contextBuilder.contexts.get(n)).filter(e => e)
                            removedContexts.push(...contexts)
                        }))
                    if (removedContexts && removedContexts.length > 0) {
                        Core.contextFinished(removedContexts.map(c => c.parsed));
                        removedContexts.forEach(ctx => contextBuilder.emitEvent(null, 'context_changed', ctx, [null, null, ctx.parsed]));
                    }
                    contextBuilder.updateContexts(this.featureConfigs, container, this.contextBuilders, null); // ToDo: think about it
                }
                // a new container was opened, no observer attached yet
                if (container && !contextBuilder.observer) {
                    contextBuilder.observer = new MutationObserver(() => {
                        contextBuilder.updateContexts(this.featureConfigs, container, this.contextBuilders, null);
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

        if (mutations) this.locator.handleMutations(mutations);
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

            const context = builder.contexts.get(contextNode);
            if (!context) return;

            const insPointName = Widget.contextInsPoints[builder.contextName]

            const insPoint = builder.insPoints[insPointName];
            if (!insPoint) {
                console.error(`Invalid insertion point name: ${insPointName}`);
                return;
            }

            // make it automatically when insertion point's element was changed
            const refreshSelector = (node: HTMLElement) => {
                const widgets = node.parentElement?.getElementsByClassName(clazz);
                const newInsertionPoint = insPoint.selector(contextNode, () => refreshSelector(node), clazz + '/' + context.parsed.id);
                Array.from(widgets).forEach(x => {
                    x.remove();
                    newInsertionPoint.appendChild(x);
                });
            }

            const node = insPoint.selector
                ? typeof insPoint.selector === 'function'
                    ? insPoint.selector(contextNode, () => refreshSelector(node), clazz + '/' + context.parsed.id)
                    : contextNode.querySelector(insPoint.selector) as HTMLElement
                : insPoint.insPoints
                    ? contextNode.querySelector(insPoint.insPoints[Widget.contextInsPoints[insPointName]].selector) as HTMLElement
                    : contextNode as HTMLElement;

            if (!node) {
                // console.error(`There is no ${insPointName} in the ${_insPointName}. Check the selector.`);
                return;
            };

            if (!node.parentNode) return;

            // check if a widget already exists for the insPoint
            if (node.parentElement?.getElementsByClassName(clazz).length > 0) return;

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

            let widget: any = null;

            if (Widget.prototype instanceof HTMLElement) {
                // WebComponent-based widget
                const ExtendedWidget = class extends Widget { };
                customElements.define('dapplet-' + clazz, ExtendedWidget);

                const webcomponent = new ExtendedWidget();
                webcomponent.insPointName = builder.contextName;
                webcomponent.ctx = context.parsed;
                webcomponent.state = state.state;
                
                widget = {
                    el: webcomponent,
                    unmount: () => {
                        webcomponent && webcomponent.remove()
                    }
                }

                const updateWebComponent = (values: any) => {
                    Object.entries(values).forEach(([k, v]) => widget.el[k] = v);
                }

                updateWebComponent(state.getStateValues()); // initialize attributes from state
                state.changedHandler = updateWebComponent; // subscribe on state changes
            } else {
                widget = new Widget() as IWidget<T>;
                widget.state = state.state;
                widget.insPointName = builder.contextName;
                state.changedHandler = () => widget.mount(); // when data in state was changed, then rerender a widget
                widget.mount(); // ToDo: remove it?
            }

            widget.el.classList.add('dapplet-widget', clazz);
            widget.el.classList.add('dapplet-' + Widget.prototype.constructor.name.toLowerCase());
            widget.el.setAttribute('data-dapplet-order', order.toString());

            const insertTo: 'begin' | 'end' | 'inside' = insPoint.insert !== undefined
                ? insPoint.insert
                : insPoint.insPoints?.[Widget.contextInsPoints[insPointName]].insert === undefined
                    ? 'end'
                    : insPoint.insPoints[Widget.contextInsPoints[insPointName]].insert;

            const insertedElements = node.parentNode.querySelectorAll(':scope > .dapplet-widget');

            if (insertedElements.length === 0) {
                switch (insertTo) {
                    case 'end':
                        node.parentNode.insertBefore(widget.el, node.nextSibling);
                        break;
                    case 'begin':
                        node.parentNode.insertBefore(widget.el, node);
                        break;
                    case 'inside':
                        node.appendChild(widget.el);
                        break;
                    default:
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

    public deactivate() {
        this.contextBuilders.forEach(x => x.observer?.disconnect());
        this.observer.disconnect();
    }
}

export { DynamicAdapter, IWidget, IDynamicAdapter }