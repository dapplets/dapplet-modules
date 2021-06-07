import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface ICaptionState {
    text?: string;
    from?: number;
    to?: number;
    exec: (ctx: any, me: ICaptionState) => void;
    init: (tx: any, me: ICaptionState) => void;
    ctx: any;
    hidden: boolean;
}

export class Caption implements IWidget<ICaptionState> {
    public el: HTMLElement;
    public state: ICaptionState;
    insPointName: string;

    public static contextInsPoints = {
        VIDEO: 'CAPTION'
    }

    public mount() {
        if (!this.el) this._createElement();

        const style = `
            z-index: 9999;
            font-size: 24px;
            color: #fff;
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
            font-family: system-ui;
            text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;
            padding: 10px;
        `;

        const { text, from, to, hidden, ctx } = this.state;
        if (!hidden && ctx.currentTime >= from && ctx.currentTime <= to) {
            this.el.innerHTML = `
                <div style="${style}">
                    ${text ?? ''}
                </div>
            `;
        } else {
            this.el.firstChild?.remove();
        }
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.addEventListener('click', (e) => {
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });
        this.el.classList.add('dapplet-widget-video-caption');
        this.state.ctx.onTimeUpdate(() => this.mount());
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}