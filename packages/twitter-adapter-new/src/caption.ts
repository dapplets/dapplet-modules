import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface ICaptionState {
    text: string;
    disabled: boolean;
    exec: (ctx: any, me: ICaptionState) => void;
    init: (tx: any, me: ICaptionState) => void;
    ctx: any;
    hidden: boolean;
    insPointName: string;
    img: string;
}

export class Caption implements IWidget<ICaptionState> {
    public el: HTMLElement;
    public state: ICaptionState;
    insPointName: string;  // POST_SOCIAL_CONTEXT

    public mount() {
        if (!document.getElementById('dapplet-widget-caption-styles')) this._injectStyles();
        if (!this.el) this._createElement();
        const { text, hidden, img } = this.state;

        this.el.style.display = (hidden) ? 'none' : null;

        this.el.innerHTML = `
            <div class="css-1dbjc4n r-18u37iz">
                <div class="css-1dbjc4n r-obd0qt r-18kxxzh r-zso239" style="flex-basis: 49px;">
                    ${(img) ? `<img src="${img}" style="height: auto; margin: auto 0; width: 13px;" class="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xzupcd"/>` : ''}
                </div>
                <div class="css-1dbjc4n r-1iusvr4 r-16y2uox">
                    <div class="css-1dbjc4n r-18u37iz">
                        <div class="css-1dbjc4n r-1habvwh r-1wbh5a2 r-1777fci">
                            <div class="css-1dbjc4n">
                                <a dir="auto" role="link" data-focusable="true" class="css-4rbku5 css-18t94o4 css-901oao r-1re7ezh r-1loqt21 r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 css-cens5h r-1re7ezh r-1qd0xha r-n6v787 r-16dba41 r-1sf4r6n r-bcqeeo r-qvutc0" data-testid="socialContext" style="-webkit-line-clamp: 2;">${text}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.classList.add('css-1dbjc4n', 'r-zl2h9q', 'dapplet-widget-caption');
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