import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface ICaptionState {
    img?: string;
    text?: string;
    tooltip?: string;
    hidden?: boolean;
    disabled?: boolean;
    exec?: (ctx: any, me: ICaptionState) => void;
    init?: (tx: any, me: ICaptionState) => void;
    ctx: any;
    insPointName: string;
}

export class Caption implements IWidget<ICaptionState> {
    public el: HTMLElement;
    public state: ICaptionState;
    insPointName: string;

    // ToDo 
    public static widgetParamsDescription = {
        img: {
            description:'image as blob',
            optional: true,
            TYPE: 'string',
        },
        text: {
            description:'text label',
            optional: true,
            TYPE: 'string',
        },
        tooltip: {
            description: 'text tooltip',
            optional: true,
            TYPE: 'string',
        },
        disabled: {
            description: 'makes the widget disabled',
            optional: true,
            TYPE: 'boolean',
        },
        hidden: {
            description: 'hide widget',
            optional: true,
            TYPE: 'boolean',
        },
        exec: {
            description: '(ctx: any, me: IAvatarState) => void',
            optional: true,
            TYPE: 'function',
        },
        init: {
            description: '(ctx: any, me: IAvatarState) => void',
            optional: true,
            TYPE: 'function',
        },
    };

    public static contextInsPoints = {
      POST: 'SOCIAL_CONTEXT',
    }

    public mount() {
        if (!this.el) this._createElement();
        
        const { text, hidden, img, tooltip } = this.state;

        this.el.style.display = (hidden) ? 'none' : null;

        this.el.innerHTML = `
            <div class="css-1dbjc4n r-18u37iz">
                <div class="css-1dbjc4n r-obd0qt r-1hwvwag r-18kxxzh r-1777fci r-15zivkp r-1b7u577">
                    ${(img) ? `<img src="${img}" class="r-14j79pv r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz" />` : ''}
                </div>
                <div class="css-1dbjc4n r-1iusvr4 r-16y2uox">
                    <div class="css-1dbjc4n r-18u37iz">
                        <div class="css-1dbjc4n r-1habvwh r-1wbh5a2 r-1777fci">
                            <div class="css-1dbjc4n dapplet-widget-caption">
                                <a dir="auto" role="link" class="r-14j79pv r-1loqt21 r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0 " >
                                    <span class="css-901oao css-16my406 css-cens5h r-14j79pv r-poiln3 r-n6v787 r-b88u0q r-1cwl3u0 r-bcqeeo r-qvutc0">
                                        <span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">${text}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.el.title = tooltip ?? '';
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this._injectStyles();
        this.el = document.createElement('div');
        this.el.classList.add('css-1dbjc4n', 'r-15zivkp');
        this.el.addEventListener('click', (e) => {
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }

    private _injectStyles() {
        if (document.getElementById('dapplet-widget-caption-styles')) return;

        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.id = 'dapplet-widget-caption-styles';
        styleTag.type = 'text/css';
        styleTag.innerText = `
            .dapplet-widget-caption a:hover {
                text-decoration: underline;
            }
        `;

        document.head.appendChild(styleTag);
    }
}