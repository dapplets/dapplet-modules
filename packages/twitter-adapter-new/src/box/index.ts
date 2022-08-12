import { IWidget } from 'dynamic-adapter.dapplet-base.eth';
import description from './description';
import { addMedia, addText } from './helpers';
import { Position, IBoxState } from './types';

class Box implements IWidget<IBoxState> {
    public el: HTMLElement;
    public state: IBoxState;
    insPointName: string;

    article: HTMLElement;
    replacedTags = <Element>{};
    insrtedTags = new WeakMap<HTMLElement, string[]>();
    private _prevReplace: string

    // ToDo 
    public static widgetParamsDescription = description;

    public static contextInsPoints = {
        POST: 'BOX',
    }

    public mount() {
        if (!this.el) this._createElement();
        const {
            img,
            video,
            text,
            position = Position.Center,
            color = 'black',
            textBackground = 'white',
            hidden,
            tooltip,
            replace,
            tag,
            ctx,
            width,
        } = this.state;

        if (this._prevReplace !== replace) {
            if (this.insrtedTags.has(this.el)) {
                const containerIds = this.insrtedTags.get(this.el);
                for (const containerId of containerIds) {
                    const replacedTag = this.replacedTags[containerId];
                    const container = this.article.querySelector(`#${containerId}`);
                    container?.replaceWith(replacedTag);
                }
            }
        }
        this._prevReplace = replace;

        const createBox = () => {
            const container = document.createElement('div');
            container.id = `box-${Math.trunc(Math.random() * 1_000_000_000)}`;
            container.style.position = 'relative';
            container.style.width = '100%';
            container.style.bottom = '0';
            container.style.zIndex = '50000';
            container.style.textAlign = 'center';
            container.appendChild(addMedia({ img, video, width }));
            if (text) container.appendChild(addText({ position, color, textBackground, text }));
            container.addEventListener('click', (e) => {
                this.state.exec?.(this.state.ctx, this.state);
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
            return container;
        }

        if (!hidden) {
            if (replace !== undefined) {
                if (!this.article) this.article = (<HTMLElement>ctx.el).querySelector('.css-1dbjc4n.r-eqz5dr.r-16y2uox.r-1wbh5a2').parentElement;
                const tags = this.article.querySelectorAll(tag ?? 'a'  );
                if (this.insrtedTags.has(this.el)) {
                    const containerIds = this.insrtedTags.get(this.el);
                    for (const containerId of containerIds) {
                        const container = createBox();
                        const oldContainer = this.article.querySelector(`#${containerId}`);
                     
                        if (!oldContainer) {
                            this.insrtedTags.set(this.el, this.insrtedTags.get(this.el).filter(x => x !== containerId));
                            continue;
                        }
                        oldContainer.replaceWith(container);
                        this.insrtedTags.set(this.el, [...this.insrtedTags.get(this.el), container.id]);
                        this.replacedTags[container.id] = this.replacedTags[containerId];
                        delete this.replacedTags[containerId];
                    }
                }
                tags.forEach(link => {
                    
                    if (link.textContent.includes(replace)) {
                        const container = createBox();
                        if (!this.insrtedTags.has(this.el)) {
                            this.insrtedTags.set(this.el, [container.id]);
                        } else if (!this.insrtedTags.get(this.el).includes(container.id)) {
                            this.insrtedTags.set(this.el, [...this.insrtedTags.get(this.el), container.id]);
                        }
                        this.replacedTags[container.id] = link;
                        link.replaceWith(container);
                    }
                });
                const tagsSpan  = this.article.querySelectorAll(tag ?? 'span');
                if (this.insrtedTags.has(this.el)) {
                    const containerIds = this.insrtedTags.get(this.el);
                    for (const containerId of containerIds) {
                        const container = createBox();
                        const oldContainer = this.article.querySelector(`#${containerId}`);
                     
                        if (!oldContainer) {
                            this.insrtedTags.set(this.el, this.insrtedTags.get(this.el).filter(x => x !== containerId));
                            continue;
                        }
                        oldContainer.replaceWith(container);
                        this.insrtedTags.set(this.el, [...this.insrtedTags.get(this.el), container.id]);
                        this.replacedTags[container.id] = this.replacedTags[containerId];
                        delete this.replacedTags[containerId];
                    }
                }
                tagsSpan.forEach(link => {
                    
                    if (link.textContent.includes(replace)) {
                        const container = createBox();
                        if (!this.insrtedTags.has(this.el)) {
                            this.insrtedTags.set(this.el, [container.id]);
                        } else if (!this.insrtedTags.get(this.el).includes(container.id)) {
                            this.insrtedTags.set(this.el, [...this.insrtedTags.get(this.el), container.id]);
                        }
                        this.replacedTags[container.id] = link;
                        link.replaceWith(container);
                    }
                });
            } else {
                this.el.title = tooltip ?? '';
                this.el.style.position = 'relative';
                this.el.style.width = '100%';
                this.el.style.bottom = '0';
                this.el.style.zIndex = '50000';
                this.el.style.marginTop = '12px';
                if (this.el.firstChild) this.el.innerHTML = '';
                this.el.appendChild(addMedia({ img, video, width })) ;
                if (text) this.el.appendChild(addText({ position, color, textBackground, text }));
            }
        } else {
            if (replace) {
                if (this.insrtedTags.has(this.el)) {
                    const containerIds = this.insrtedTags.get(this.el);
                    for (const containerId of containerIds) {
                        const replacedTag = this.replacedTags[containerId];
                        const container = this.article.querySelector(`#${containerId}`);
                        container?.replaceWith(replacedTag);
                    }
                }
            }
            this.el.innerHTML = '';
        }
    }

    public unmount() {
        if (this.el) {
            if (this.insrtedTags.has(this.el)) {
                const containerIds = this.insrtedTags.get(this.el);
                for (const containerId of containerIds) {
                    const replacedTag = this.replacedTags[containerId];
                    const container = this.article.querySelector(`#${containerId}`);
                    container?.replaceWith(replacedTag);
                }
            }
            this.el.remove();
        }
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.classList.add('dapplet-widget-box');
        this.el.addEventListener('click', (e) => {
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });
        this.state.init?.(this.state.ctx, this.state);
    }
}

export default Box;
