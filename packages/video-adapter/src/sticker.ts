import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IStickerState {
    img: string;
    from?: number;
    to?: number;
    vertical?: number;
    horizontal?: number;
    width?: number;
    exec: (ctx: any, me: IStickerState) => void;
    init: (tx: any, me: IStickerState) => void;
    ctx: any;
    hidden: boolean;
}

export class Sticker implements IWidget<IStickerState> {
    public el: HTMLElement;
    public state: IStickerState;
    insPointName: string;

    public static contextInsPoints = {
        VIDEO: 'STICKER'
    }

    public mount() {
        if (!this.el) this._createElement();

        const { img, from = 0, to = Infinity, vertical = 50, horizontal = 50, width = 1, hidden, ctx } = this.state;

        const clientWidth = ctx.element.offsetWidth;
        const clientHeight = ctx.element.offsetHeight;

        const videoAspectRatio = ctx.width / ctx.height;
        const clientAspectRatio = clientWidth / clientHeight;

        let stickerWidth: number;

        if (clientAspectRatio <= videoAspectRatio) {
            stickerWidth = width * (videoAspectRatio >= 1 ? clientWidth / videoAspectRatio : clientWidth) / 5;
        } else {
            stickerWidth = width * (videoAspectRatio >= 1 ? clientHeight : clientHeight * videoAspectRatio) / 5;
        }

        const stickerWidthInPx = `${stickerWidth}px`;

        if (!hidden && ctx.currentTime >= from && ctx.currentTime <= to) {
            this.el.style.removeProperty('display');
            const container = document.createElement('deckgo-drr');
            container.style.position = 'absolute';
            container.style.bottom = videoAspectRatio > clientAspectRatio 
                ? `calc((0.01 * ${vertical} - 0.5) * ${(clientWidth / videoAspectRatio).toString()}px + 0.5 * (${(clientHeight).toString()}px - ${stickerWidthInPx})`
                : `calc(${vertical}% - (${stickerWidthInPx} / 2))`;
            container.style.left = videoAspectRatio < clientAspectRatio 
                ? `calc((0.01 * ${horizontal} - 0.5) * ${(clientHeight * videoAspectRatio).toString()}px + 0.5 * ${(clientWidth).toString()}px)`
                : `${horizontal}%`;
            container.style.cursor = 'pointer';
            container.style.zIndex = '9999';
            const image = document.createElement('img');
            image.src = img;
            image.style.width = stickerWidthInPx;
            container.appendChild(image);
            this.el.innerHTML = '';
            this.el.appendChild(container);
        } else {
            this.el.firstChild?.remove();
            this.el.style.display = 'none';
            return;
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
        this.el.classList.add('dapplet-widget-video-sticker');
        this.state.ctx.onTimeUpdate(() => this.mount()); // ToDo: check memory leak
        this.state.ctx.onResize(() => this.mount());
        //this.mount(); // ToDo: WTF?
        this.state.init?.(this.state.ctx, this.state);
    }
}