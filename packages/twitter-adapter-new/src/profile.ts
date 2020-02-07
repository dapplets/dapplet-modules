import { IWidget } from '@dapplets/dynamic-adapter';

export interface IProfileState {
    img: string;
    label: string;
    loading: boolean;
    disabled: boolean;
    exec: (ctx: any, me: IProfileState) => void;
    init: (tx: any, me: IProfileState) => void;
    clazz: string;
    ctx: any;
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
    hidden: boolean;
}

export class Profile implements IWidget<IProfileState> {
    public el: HTMLElement;
    public state: IProfileState;

    public mount() {
        if (!this.el) this._createElement();
        const { img, vertical, horizontal, ctx, hidden } = this.state;

        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }

            const imgTag: HTMLImageElement = this.el.firstChild as any;

            imgTag.src = img;
            imgTag.style.width = '32px';
            imgTag.style.height = '32px';
            imgTag.style.position = 'absolute';
            imgTag.style[vertical] = '6px';
            imgTag.style[horizontal] = '0px';

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