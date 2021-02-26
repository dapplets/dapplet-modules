import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IButtonState {
    img?: string;
    label?: string;
    loading?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    tooltip?: string;
    exec?: (ctx: any, me: IButtonState) => void;
    init?: (ctx: any, me: IButtonState) => void;
    ctx?: any;
    insPointName?: string;
}

export class Button implements IWidget<IButtonState> {
    public el: HTMLElement;
    public state: IButtonState;
    insPointName: string;

    public mount() {
        if (!this.el) this._createElement();

        const { img, label, loading, disabled, hidden, tooltip } = this.state;

        if (hidden) {
            this.el.innerHTML = '';
            this.el.style.display = 'none';
            return;
        } else {
            this.el.style.removeProperty('display');
        }

        if (this.insPointName === 'POST_SOUTH') {
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
                        
                        ${label?.toString() ? `<div class="css-1dbjc4n r-xoduu5 r-1udh08x" style="color: rgb(91, 112, 131); font-size: 13px; padding: 0 12px;">
                                <span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0">
                                    <span ${disabled ? 'style="color:#aaa;"' : ''} class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">${label}</span>
                                </span>
                            </div>` : ''}
                    </div>
                </div>`;

            this.el.innerHTML = htmlString;

        } else if (this.insPointName === 'PROFILE_BUTTON_GROUP') {
            this.el.innerHTML = `
                <img style="
                    width: 18px;
                    height: 18px;
                    position: relative;
                    top: 3px;
                    ${label ? 'margin-right: 6px;' : ''}
                " src="${img}" />
                <span>${label}</span>
            `;
        } else if (this.insPointName === 'POST_STARTER') {
            const htmlString = `<div style="margin: 0 10px" aria-haspopup="true" aria-label="More" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="caret">
                    <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                    <div class="css-1dbjc4n r-xoduu5">
                        <div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-podbf7 r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                        <img height="25" src="${img}" class="r-4qtqp9 r-yyyyoo r-ip8ujx r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-27tl0q">
                    </div>
                    </div>
                </div>`;
            this.el.innerHTML = htmlString;
        }

        this.el.title = tooltip ?? '';
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {

        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.type = 'text/css';
        this.el = document.createElement('div');

        if (this.insPointName === 'POST_SOUTH') {
            this.el.classList.add('css-1dbjc4n', 'r-18u37iz', 'r-1h0z5md');

            styleTag.innerText = `
                .dapplet-widget > div[role="button"] > div:hover > .css-1dbjc4n.r-xoduu5 > .r-sdzlij {
                    background-color: rgba(29, 161, 242, 0.1); 
                    transition-property: background-color, box-shadow; 
                    transition-duration: 0.2s;
                }
                .dapplet-widget > div[role="button"] > div:hover {
                    color:rgba(29,161,242,1.00);
                }`;

        } else if (this.insPointName === 'PROFILE_BUTTON_GROUP') {

            this.el.classList.add("dapplet-widget-profile-button");
            styleTag.innerText = `
                .dapplet-widget-profile-button {
                    border: 1px solid #1da1f2;
                    padding: 0 10px;
                    height: 40px;
                    cursor: pointer;
                    border-radius: 9999px;
                    margin: 0 12px 12px 0;
                    font-weight: 700;
                    color: #1da1f2;
                    box-sizing: border-box;
                    font-size: 15px;
                    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
                    line-height: 38px;
                }
                
                .dapplet-widget-profile-button:hover {
                    background-color: rgba(29, 161, 242, 0.1);
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