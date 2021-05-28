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
    basic?: boolean;
}

export class Label implements IWidget<ILabelState> {
    public el: HTMLElement;
    public state: ILabelState;
    insPointName: string;

    public static contextInsPoints = {
        POST: 'USERNAME_LABEL',
    }

    public mount() {
        this._injectStyles();
        if (!this.el) this._createElement();

        const { text, hidden, tooltip } = this.state;
        const basic = !!this.state.basic;
        
        this.el.style.display = (hidden) ? 'none' : null;

        if (this.state.img) {
            if (!this.el.querySelector('img')) {
                const imgTag = document.createElement('img');
                imgTag.style.width = '18px';
                imgTag.style.height = '18px';
                const imgWrapper = document.createElement('div');
                imgWrapper.classList.add('img-wrapper');
                imgWrapper.appendChild(imgTag);
                this.el.appendChild(imgWrapper);
            }
            const imgTag: HTMLImageElement = this.el.querySelector('img') as any;
            imgTag.src = this.state.img;
        } else {
            this.el.querySelector('.img-wrapper')?.remove();
        }

        if (this.state.text) {
            if (!this.el.querySelector('.text-wrapper')) {
                const textTag = document.createElement('span');
                textTag.innerText = text;
                textTag.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
                textTag.style.fontSize = '15px';
                textTag.style.lineHeight = 'line-height: 20px';
                textTag.style.padding = '0 .3em';
                const textWrapper = document.createElement('div');
                textWrapper.style.marginTop = '2px';
                textWrapper.classList.add('text-wrapper');
                textWrapper.classList.add('r-111h2gw');
                textWrapper.appendChild(textTag);
                this.el.appendChild(textWrapper);
            }
            const textTag: HTMLSpanElement = this.el.querySelector('span') as any;
            textTag.innerText = this.state.text;
        } else {
            this.el.querySelector('.text-wrapper')?.remove();
        }

        if (this.state.postfix) {
            if (!this.el.querySelector('.postfix-tag')) {
                const postfixTag = document.createElement('div');
                postfixTag.classList.add('postfix-tag');
                postfixTag.innerText = this.state.postfix;
                this.el.appendChild(postfixTag);
            }
            const postfixTag: HTMLImageElement = this.el.querySelector('.postfix-tag') as any;
            postfixTag.innerText = this.state.postfix;
        } else {
            this.el.querySelector('.postfix-tag')?.remove();
        }

        this.el.classList.toggle('dapplet-widget-label', !basic);
        this.el.classList.toggle('dapplet-widget-label-basic', basic);
        this.el.style.display = 'flex';
        this.el.style.marginLeft = '.9em';
        this.el.style.transitionDuration = '0.1s';
        this.el.title = tooltip ?? '';
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
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }

    private _injectStyles() {
        if (!!document.getElementById('dapplet-widget-label-styles')) return;

        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.id = 'dapplet-widget-label-styles';
        styleTag.type = 'text/css';
        styleTag.innerText = `
            .dapplet-widget-label {
                background-color: rgb(29, 160, 240);                
                color: #fff;
                padding: 2px 4px;
                border-radius: 4px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
            }

            .dapplet-widget-label:hover img {
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

            .dapplet-widget-label-basic {
                margin-left: 6px;
                border-radius: 50%;
                color: rgb(15, 20, 25);
            }

            .dapplet-widget-label-basic:hover  {
                color: rgb(27 149 224);
            }
        `;
        document.head.appendChild(styleTag);
    }
}