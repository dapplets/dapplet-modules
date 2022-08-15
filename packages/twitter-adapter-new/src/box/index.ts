import { IWidget, ContextReplacer } from 'dynamic-adapter.dapplet-base.eth';
import description from './description';
import { addMedia, addText } from './helpers';
import { Position, IBoxState } from './types';

export default class Box implements IWidget<IBoxState> {
    public el: HTMLElement;
    public state: IBoxState;
    public insPointName: string;
    public contextReplacer: ContextReplacer;

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
            width,
        } = this.state;

        this.contextReplacer.updateReplacedContext(replace);

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
                this.contextReplacer.replace(replace, tag ?? 'a, span', createBox);
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
                this.contextReplacer.cancelReplace();
            }
            this.el.innerHTML = '';
        }
    }

    public unmount() {
        if (this.el) {
            this.contextReplacer.cancelReplace();
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
        const article = (<HTMLElement>this.state.ctx.el).querySelector('.css-1dbjc4n.r-eqz5dr.r-16y2uox.r-1wbh5a2').parentElement;
        this.contextReplacer.init(this.el, article);
    }
}
