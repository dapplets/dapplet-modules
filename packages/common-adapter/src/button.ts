import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IButtonState {
    img?: string;
    label?: string;
    loading?: boolean;
    disabled?: boolean;
    exec?: (ctx: any, me: IButtonState) => void;
    init?: (ctx: any, me: IButtonState) => void;
    ctx?: any;
}

export class Button implements IWidget<IButtonState> {
    public el: HTMLElement;
    public state: IButtonState;
    public insPointName: string;

    public mount() {
        if (!this.el) this._createElement();

        const { img, label, loading, disabled } = this.state;

        const htmlString = `
            <div style="
                position:fixed;
                width:60px;
                height:60px;
                bottom:40px;
                left:40px;
                background-color:#fff;
                color:#FFF;
                border-radius:50px;
                border: 3px solid #d10019;
                text-align:center;
                box-shadow: 2px 2px 3px #999;
                cursor: pointer;
                display: block;
                box-sizing: content-box;
            ">
                <img style="margin-top:11px;" height="32" src="${img}">
            </div>
        `

        this.el.innerHTML = htmlString;
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
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}