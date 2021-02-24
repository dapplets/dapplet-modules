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
    postfix?: string;
    tooltip?: string;
}

export class Label implements IWidget<ILabelState> {
    public el: HTMLElement;
    public state: ILabelState;
    insPointName: string;  // POST_USERNAME_BADGE | POST_AVATAR_BADGE

    public mount() {
        if (!document.getElementById('dapplet-widget-label-styles')) this._injectStyles();
        if (!this.el) this._createElement();

        const { text, hidden, tooltip } = this.state;
        
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
                const textTag = document.createElement('span');
                textTag.innerText = text;
                this.el.appendChild(textTag);
            }
            const textTag: HTMLSpanElement = this.el.querySelector('span') as any;
            textTag.innerText = this.state.text;
        } else {
            this.el.querySelector('span')?.remove();
        }

        if (this.state.postfix) {
            if (!this.el.querySelector('div')) {
                const postfixTag = document.createElement('div');
                postfixTag.innerText = this.state.postfix;
                this.el.appendChild(postfixTag);
            }
            const postfixTag: HTMLImageElement = this.el.querySelector('div') as any;
            postfixTag.innerText = this.state.postfix;
        } else {
            this.el.querySelector('div')?.remove();
        }
        
        this.el.title = tooltip;
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

            .dapplet-widget-label > div {
                background: rgb(24, 121, 181);
                margin: -2px -4px;
                display: inline-block;
                margin-left: 10px;
                padding: 6px 10px 3px 10px;
                border-radius: 0 4px 4px 0;
            }
        `;
        document.head.appendChild(styleTag);
    }
}