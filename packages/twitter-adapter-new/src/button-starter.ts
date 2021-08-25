import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IButtonStarterState {
    img?: string;
    label?: string;
    loading?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    tooltip?: string;
    exec?: (ctx: any, me: IButtonStarterState) => void;
    init?: (ctx: any, me: IButtonStarterState) => void;
    ctx?: any;
    insPointName?: string;
    theme?: string;
}

export class ButtonStarter implements IWidget<IButtonStarterState> {
    public el: HTMLElement;
    public state: IButtonStarterState;
    insPointName: string;

    // ToDo 
    public static widgetParamsDescription = {
        label: {
            description:'text label',
            optional: true,
            TYPE: 'string',
        },
        exec: {
            description:'(ctx: any, me: IAvatarState) => void',
            optional: true,
            TYPE: 'function',
        },
    };

    public static contextInsPoints = {
        POST: 'STARTER',
    }

    public mount() {

        if (!this.el) this._createElement();

        const { label = '', img, loading, disabled, hidden, tooltip } = this.state;

        if (hidden) {
            this.el.innerHTML = '';
            this.el.style.display = 'none';
            return;
        } else {
            this.el.style.removeProperty('display');
        }

        const htmlString = `<div style="margin: 0 10px" aria-haspopup="true" aria-label="More" role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="caret">
                <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                <div class="css-1dbjc4n r-xoduu5">
                    <div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-podbf7 r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                    <img height="25" src="${img}" class="r-4qtqp9 r-yyyyoo r-ip8ujx r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-27tl0q">
                </div>
                </div>
            </div>`;
        this.el.innerHTML = htmlString;

        this.el.title = tooltip ?? '';
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {

        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.type = 'text/css';
        this.el = document.createElement('div');

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