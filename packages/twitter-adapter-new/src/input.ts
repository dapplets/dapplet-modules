import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IInputState {
  text?: string
  theme?: string
  hidden?: boolean
  exec?: any
  init?: any
  disabled?: boolean
  ctx?: any 
  tooltip?: string
  setState: any
}

export class Input implements IWidget<IInputState> {
    public el: HTMLElement;
    public state: IInputState;
    insPointName: string;

    public static contextInsPoints = {
        POST: 'SOUTH',
    }

    public mount() {
        if (!this.el) this._createElement();

        const { text ,hidden, tooltip } = this.state;

        if (hidden) {
            this.el.innerHTML = '';
            this.el.style.display = 'none';
            return;
        } else {
            this.el.style.removeProperty('display');
        }

        
        if (!this.el.firstChild) {
            const ch = document.createElement('input');
            ch.addEventListener('input', (e: any) => {
                this.state.text = e.target.value;
            });

            this.el.appendChild(ch);
        }
        
        (<any>this.el.firstChild).value = text;
        

        this.el.title = tooltip ?? '';
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {

        const { theme } = this.state;

        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.type = 'text/css';
        this.el = document.createElement('div');

        if (this.insPointName === 'POST' || this.insPointName === 'QUOTE_POST') {
            this.el.classList.add('css-1dbjc4n', 'r-18u37iz', 'r-1h0z5md');
            if (this.insPointName === 'QUOTE_POST') this.el.style.marginTop = '12px';

            styleTag.innerText = `
                .dapplet-widget > div[role="button"] > div:hover > .css-1dbjc4n.r-xoduu5 > .r-sdzlij {
                    background-color: rgba(29, 161, 242, 0.1); 
                    transition-property: background-color, box-shadow; 
                    transition-duration: 0.2s;
                }
                .dapplet-widget > div[role="button"] > div:hover {
                    color: rgba(29, 161, 242, 1.00);
                }`;

        } else if (this.insPointName === 'PROFILE') {

            this.el.classList.add(theme === "LIGHT" ? "dapplet-widget-profile-button" : "dapplet-widget-profile-button-dark");
            styleTag.innerText = `
                .dapplet-widget-profile-button {
                    border: 1px solid rgb(207, 217, 222);
                    padding: 0 10px;
                    height: 35px;
                    cursor: pointer;
                    border-radius: 9999px;
                    margin: 0 8px 12px 0;
                    font-weight: 600;
                    color: #000;
                    box-sizing: border-box;
                    font-size: 15px;
                    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
                    line-height: 33px;
                }
                
                .dapplet-widget-profile-button:hover {
                    background-color: rgba(15, 20, 25, 0.1);
                }

                .dapplet-widget-profile-button-dark {
                    border: 1px solid rgb(83, 100, 113);
                    padding: 0 10px;
                    height: 35px;
                    cursor: pointer;
                    border-radius: 9999px;
                    margin: 0 8px 12px 0;
                    font-weight: 600;
                    color: #fff;
                    box-sizing: border-box;
                    font-size: 15px;
                    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
                    line-height: 33px;
                }
                
                .dapplet-widget-profile-button-dark:hover {
                    background-color: rgba(239, 243, 244, 0.008);
                }
            `;
        }

        this.el.addEventListener("click", e => {
            if (!this.state.disabled) {
                this.state.exec?.(this.state.ctx, this.state);
            }
        });
        document.head.appendChild(styleTag);
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}