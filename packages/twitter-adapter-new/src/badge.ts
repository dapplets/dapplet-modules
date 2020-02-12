import { IWidget } from '@dapplets/dynamic-adapter';

export interface IBadgeState {
    img: string;
    label: string;
    loading: boolean;
    disabled: boolean;
    exec: (ctx: any, me: IBadgeState) => void;
    init: (tx: any, me: IBadgeState) => void;
    clazz: string;
    ctx: any;
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
    hidden: boolean;
    username: string;
    insPointName: string;
}

export class Badge implements IWidget<IBadgeState> {
    public el: HTMLElement;
    public state: IBadgeState;
    insPointName: string;

    public mount() {
        if (!this.el) this._createElement();
        const { img, vertical, horizontal, ctx, hidden } = this.state;
        //console.log(ctx);
        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }

            const imgTag: HTMLImageElement = this.el.firstChild as any;

            imgTag.src = img;
            imgTag.style.width = '24px';
            imgTag.style.height = '24px';
            imgTag.style.position = 'absolute';
            imgTag.style[vertical] = '-2px';
            imgTag.style[horizontal] = '-7px';

        } else {
            this.el.firstChild?.remove();
        }
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.classList.add(this.state.clazz);
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}