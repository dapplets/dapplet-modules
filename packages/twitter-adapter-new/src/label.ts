import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface ILabelState {
    text: string;
    disabled: boolean;
    exec: (ctx: any, me: ILabelState) => void;
    init: (tx: any, me: ILabelState) => void;
    ctx: any;
    hidden: boolean;
    insPointName: string;
    img: string;
}

export class Label implements IWidget<ILabelState> {
    public el: HTMLElement;
    public state: ILabelState;
    insPointName: string;  // POST_USERNAME_BADGE | POST_AVATAR_BADGE

    public mount() {
        if (!document.getElementById('dapplet-widget-label-styles')) this._injectStyles();
        if (!this.el) this._createElement();
        const { text, hidden } = this.state;
        
        this.el.style.display = (hidden) ? 'none' : null;

        if (this.state.img) {
            if (!this.el.querySelector('img')) {
                const imgTag = document.createElement('img');
                imgTag.style.width = '18px';
                imgTag.style.height = '18px';
                imgTag.style.position = 'relative';
                imgTag.style.top = '2px';
                imgTag.style.marginRight = '4px';
                this.el.appendChild(imgTag);
            }
            const imgTag: HTMLImageElement = this.el.querySelector('img') as any;
            imgTag.src = this.state.img;
        } else {
            this.el.querySelector('img')?.remove();
        }

        if (this.state.text) {
            if (!this.el.querySelector('span')) {
                const imgTag = document.createElement('span');
                imgTag.innerText = text;
                this.el.appendChild(imgTag);
            }
            const imgTag: HTMLSpanElement = this.el.querySelector('span') as any;
            imgTag.innerText = this.state.text;
        } else {
            this.el.querySelector('span')?.remove();
        }
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.classList.add("dapplet-widget-label");
        this.el.addEventListener('click', (e) => {
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }

    private _injectStyles() {
        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.id = 'dapplet-widget-label-styles';
        styleTag.type = 'text/css';
        styleTag.innerText = `
            .dapplet-widget-label {
                background-color: rgb(29, 160, 240);                
                color: #fff;
                padding: 2px 4px;
                border-radius: 4px;
                margin-left: 6px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
            }
            .dapplet-widget-label:hover {
                background: rgb(26, 145, 218);
            }
        `;
        document.head.appendChild(styleTag);
    }
}