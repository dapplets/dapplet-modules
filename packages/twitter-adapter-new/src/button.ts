import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IButtonState {
    img?: string;
    label?: string | string[];
    tooltip?: string;
    basic?: boolean;
    theme?: 'DARK' | 'LIGHT';
    loading?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    exec?: (ctx: any, me: IButtonState) => void;
    init?: (ctx: any, me: IButtonState) => void;
    ctx?: any;
    insPointName?: string;
}

export class Button implements IWidget<IButtonState> {
    public el: HTMLElement;
    public state: IButtonState;
    insPointName: string;

    // ToDo 
    public static widgetParamsDescription = {
        img: {
            description:'image as blob',
            optional: true,
            TYPE: 'string',
        },
        label: {
            description:'text label',
            optional: true,
            TYPE: 'string',
        },
        tooltip: {
            description: 'text tooltip',
            optional: true,
            TYPE: 'string',
        },
        theme: {
            description: "'DARK' | 'LIGHT'",
            optional: true,
            TYPE: 'string',
        },
        loading: {
            description: 'sets the loading icon instead of image',
            optional: true,
            TYPE: 'boolean',
        },
        disabled: {
            description: 'makes the widget disabled',
            optional: true,
            TYPE: 'boolean',
        },
        hidden: {
            description: 'hides the widget',
            optional: true,
            TYPE: 'boolean',
        },
        exec: {
            description:'action on click',
            optional: true,
            TYPE: '(ctx: any, me: IButtonState) => void',
        },
        init: {
            description:'action through initialisation',
            optional: true,
            TYPE: '(ctx: any, me: IButtonState) => void',
        },
    };

    public static contextInsPoints = {
        POST: 'SOUTH',
        QUOTE_POST: 'SOUTH',
        PROFILE: 'BUTTON_GROUP',
    }

    public mount() {
        if (!this.el) this._createElement();

        const { label = '', img, basic, loading, disabled, hidden, tooltip } = this.state;

        if (hidden) {
            this.el.innerHTML = '';
            this.el.style.display = 'none';
            return;
        } else {
            this.el.style.removeProperty('display');
        }

        if (basic) {
            this.el.classList.add('dapplet-widget-profile-button-basic');
        } else {
            this.el.classList.remove('dapplet-widget-profile-button-basic');
        }

        if (this.insPointName === 'POST' || this.insPointName === 'QUOTE_POST') {
            const htmlString = `<div aria-haspopup="false" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr">
                    <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                        <div class="css-1dbjc4n r-xoduu5">
                            <div class="css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                            ${loading ? `<svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
                                <circle cx="50" cy="50" fill="none" stroke="#1da1f2" stroke-width="14" r="40" stroke-dasharray="188.49555921538757 64.83185307179586" transform="rotate(77.5793 50 50)">
                                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                                </circle>
                            </svg>` : `<img height="18" src="${img}" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi">`}
                        </div>
                        
                        ${label !== undefined ? `<div class="css-1dbjc4n r-xoduu5 r-1udh08x" style="color: rgb(91, 112, 131); font-size: 13px; padding: 0 12px;">
                                <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0">
                                    <span ${disabled ? 'style="color:#aaa;"' : ''} class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">${Array.isArray(label) ? label.join('') : label.toString()}</span>
                                </span>
                            </div>` : ''}
                    </div>
                </div>`;

            this.el.innerHTML = htmlString;

        } else if (this.insPointName === 'PROFILE') {
            this.el.innerHTML = `
                <img style="
                    ${basic ? 'width: 36px;' : 'width: 18px;'}
                    ${basic ? 'height: 36px;' : 'height: 18px;'}
                    position: relative;
                    ${basic ? '' : 'top: 3px;'}
                    ${label ? 'margin-right: 6px;' : ''}
                " src="${img}" />
                <span>${label}</span>
            `;
        }

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

                .dapplet-widget-profile-button-basic {
                    padding: 0;
                    border: none;
                    border-radius: 7px;
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