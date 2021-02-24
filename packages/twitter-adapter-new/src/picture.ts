import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IPictureState {
    img: string;
    disabled: boolean;
    hidden: boolean;
    tooltip?: string;
    exec: (ctx: any, me: IPictureState) => void;
    init: (ctx: any, me: IPictureState) => void;
    ctx: any;
    insPointName: string;
}

export class Picture implements IWidget<IPictureState> {
    public el: HTMLElement;
    public state: IPictureState;
    insPointName: string;

    public mount() {
        if (!this.el) this._createElement();

        const { img, disabled, hidden, tooltip } = this.state;

        if (hidden) {
            this.el.innerHTML = '';
        } else {
            const htmlString = `<img src="${img}" />`
            this.el.innerHTML = htmlString;
        }
        
        this.el.title = tooltip;
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.addEventListener("click", e => {
            if (!this.state.disabled) {
                this.state.exec?.(this.state.ctx, this.state);
            }
        });
        this.el.style.position = 'absolute';
        this.el.style.bottom = '15px';
        this.el.style.right = '15px';
        this.el.style.zIndex = '3';
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}