import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IBoxState {
    img?: string
    video?: string
    text?: string
    position?: 'center' | 'top' | 'bottom'
    width?: string
    color?: string,
    textBackground?: string,
    tag?: string
    replace?: string
    tooltip?: string
    hidden?: boolean
    //loading?: boolean
    //disabled?: boolean
    exec?: (ctx: any, me: IBoxState) => void
    init?: (ctx: any, me: IBoxState) => void
    ctx: any
    //username: string
    //insPointName: string
}

export class Box implements IWidget<IBoxState> {
    public el: HTMLElement;
    public state: IBoxState;
    insPointName: string;

    article: HTMLElement;
    replacedTags = <Element>{};
    insrtedTags = new WeakMap<HTMLElement, string[]>();
    private _prevReplace: string

    // ToDo 
    public static widgetParamsDescription = {
        img: {
            description:'image as blob',
            optional: true,
            TYPE: 'string',
        },
        video: {
            description:'video as blob',
            optional: true,
            TYPE: 'string',
        },
        text: {
            description:'text label',
            optional: true,
            TYPE: 'string',
        },
        position: {
            description:'position of the text label',
            optional: true,
            TYPE: "'center' | 'top' | 'bottom'",
            default: 'center',
        },
        color: {
            description:'text color',
            optional: true,
            TYPE: 'string',
        },
        textBackground: {
            description:'text background',
            optional: true,
            TYPE: 'string',
        },
        tooltip: {
            description:'text tooltip',
            optional: true,
            TYPE: 'string',
        },
        hidden: {
            description:'hides the widget',
            optional: true,
            TYPE: 'boolean',
        },
        replace: {
            description:'text that should be replaced to the box',
            optional: true,
            TYPE: 'string',
        },
        tag: {
            description:'tag that have the replaced text',
            optional: true,
            TYPE: 'string',
        },
        exec: {
            description:'action on click',
            optional: true,
            TYPE: '(ctx: any, me: IAvatarState) => void',
        },
        init: {
            description:'action through initialisation',
            optional: true,
            TYPE: '(ctx: any, me: IAvatarState) => void',
        },
    };

    public static contextInsPoints = {
        POST: 'BOX',
    }

    public mount() {
        if (!this.el) this._createElement();
        const {
            img,
            video,
            text,
            position = 'center',
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

        const addMedia = () => {
            if (img) {
                const imgTag = document.createElement('img');
                imgTag.src = img;
                imgTag.style.width = width ?? '100%';
                imgTag.style.position = 'relative';
                imgTag.style.objectFit = 'cover';
                if (this.insPointName = 'SUSPENDED') {
                    imgTag.style.cursor = 'pointer';
                }
                return imgTag;
            } else if (video) {
                const videoTag = document.createElement('video');
                videoTag.src = video;
                videoTag.autoplay = true;
                videoTag.muted = true;
                videoTag.loop = true;
                videoTag.style.width = width ?? '100%';
                if (this.insPointName = 'SUSPENDED') {
                    videoTag.style.cursor = 'pointer';
                }
                return videoTag;
            }
        }

        const addText = () => {
            const container = document.createElement('div');
            container.style.position = 'absolute';
            container.style.width = 'fit-content';
            container.style.maxWidth = '80%';
            container.style.left = '50%';
            switch (position) {
                case 'center':
                    container.style.top = '50%';
                    break;
                case 'top':
                    container.style.top = '10%';
                    break;
                case 'bottom':
                    container.style.bottom = '10%';
                    break;
            }
            container.style.transform = 'translateX(-50%)';
            container.style.borderRadius = '10px';
            container.style.color = color;
            container.style.background = textBackground;
            container.style.padding = '10px 30px';
            container.style.fontSize = '1.20rem';
            container.style.fontWeight = 'bold';
            container.style.textAlign = 'center';
            container.textContent = text;
            return container;
        };

        const createBox = () => {
            const container = document.createElement('div');
            container.id = `box-${Math.trunc(Math.random() * 1_000_000_000)}`;
            container.style.position = 'relative';
            container.style.width = '100%';
            container.style.bottom = '0';
            container.style.zIndex = '50000';
            container.style.textAlign = 'center';
            // container.style.marginTop = '12px';
            // container.style.marginBottom = '12px';
            container.appendChild(addMedia());
            if (text) container.appendChild(addText());
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
                this.el.appendChild(addMedia()) ;
                if (text) this.el.appendChild(addText());
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