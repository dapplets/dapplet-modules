import { IWidget } from 'dynamic-adapter.dapplet-base.eth';
import interact from 'interactjs';

export interface IStickerState {
    img: string;
    from?: number;
    to?: number;
    vertical?: number;
    horizontal?: number;
    widthCo?: number;
    heightCo?: number;
    exec: (ctx: any, me: IStickerState) => void;
    init: (tx: any, me: IStickerState) => void;
    ctx: any;
    hidden: boolean;
}

export class Sticker implements IWidget<IStickerState> {
    public el: HTMLElement;
    public state: IStickerState;
    insPointName: string;
    private _translationParams: { x: number, y: number, callback: any };
    //private _scaleParams: { x: number, y: number, callback: any };
    private _size: { x: number, y: number, callback: any };
    private _scaleCoef = { x: 1, y: 1 };
    private _coordinates: { x: number, y: number } = { x: 0, y: 0 };
    private _stickerId = Math.trunc(Math.random() * 1_000_000_000);

    public static contextInsPoints = {
        VIDEO: 'STICKER'
    }

    public mount() {
        if (!this.el) this._createElement();

        const { img, from = 0, to = Infinity, vertical = 50, horizontal = 50, widthCo = 1, heightCo = 1, hidden, ctx } = this.state;

        if (!hidden && ctx.currentTime >= from && ctx.currentTime <= to) {

            const clientWidth = ctx.element.offsetWidth;
            const clientHeight = ctx.element.offsetHeight;

            const videoAspectRatio = ctx.width / ctx.height;
            const clientAspectRatio = clientWidth / clientHeight;

            if (clientAspectRatio <= videoAspectRatio) {
                const minDimension = videoAspectRatio >= 1 ? clientWidth / videoAspectRatio : clientWidth
                this._size.x = widthCo * minDimension / 5;
                this._size.y = heightCo * minDimension / 5;
            } else {
                const minDimension = videoAspectRatio >= 1 ? clientHeight : clientHeight * videoAspectRatio
                this._size.x = widthCo * minDimension / 5;
                this._size.y = heightCo * minDimension / 5;
            }

            const x = this._size.x * this._scaleCoef.x;
            const y = this._size.y * this._scaleCoef.y;

            this.el.style.removeProperty('display');
            const container = document.createElement('div');
            container.classList.add(`dapplet-sticker-${this._stickerId}`);
            container.style.position = 'absolute';
            container.style.width = `${x}px`;
            container.style.height = `${y}px`;

            this._coordinates.y = videoAspectRatio > clientAspectRatio
                ? (0.01 * vertical - 0.5) * (clientWidth / videoAspectRatio) + 0.5 * (clientHeight - this._size.y)
                : 0.01 * vertical * clientHeight - this._size.y / 2;
            this._coordinates.x = videoAspectRatio < clientAspectRatio 
                ? (0.01 * horizontal - 0.5) * clientHeight * videoAspectRatio + 0.5 * clientWidth
                : 0.01 * horizontal * clientWidth;

            container.style.top = `${this._coordinates.y}px`;
            container.style.left = `${this._coordinates.x}px`;

            //container.style.transform = `translate(${this._translationParams.x}%, ${this._translationParams.y}%) scale(${this._scaleParams.x}, ${this._scaleParams.y})`;
            container.style.transform = `translate(${this._translationParams.x}%, ${this._translationParams.y}%)`;

            // for .draggable and .resizable
            container.style.touchAction = 'none';
            container.style.userSelect = 'none';
            container.style.boxSizing = 'border-box';

            container.style.cursor = 'pointer';
            container.style.zIndex = '9999';
            container.onclick = () => container.style.outline = 'solid rgb(121, 242, 230)';

            const image = document.createElement('img');
            image.src = img;
            image.style.width = '100%';
            image.style.height = '100%';
            container.appendChild(image);
            this.el.innerHTML = '';

            container.addEventListener(`drug-sticker-${this._stickerId}`, (e: any) => {
              e.stopPropagation();
              this._translationParams.x = e.detail!.x;
              this._translationParams.y = e.detail!.y;
              console.log(this._translationParams, this._stickerId)
            })

            /*container.addEventListener(`scale-sticker-${this._stickerId}`, (e: any) => {
              e.stopPropagation();
              this._scaleParams.x = e.detail!.x;
              this._scaleParams.y = e.detail!.y;
              console.log(this._scaleParams, this._stickerId)
            })*/

            container.addEventListener(`scale-sticker-${this._stickerId}`, (e: any) => {
              e.stopPropagation();
              this._scaleCoef.x = e.detail.x / this._size.x;
              this._scaleCoef.y = e.detail.y / this._size.y;
              console.log('this._size:', this._size)
            })

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
        this.el.style.position = 'absolute';
        this.el.style.width = '100%';
        this.el.style.height = '100%';
        this.el.addEventListener('click', (e) => {
            e.stopPropagation();
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });

        console.log(this._stickerId)

        if (!this._translationParams) this._translationParams = { x: 0, y: 0, callback: (target, position) => target.dispatchEvent(new CustomEvent(`drug-sticker-${this._stickerId}`, { detail: { x: position.x, y: position.y } })) };
        //if (!this._scaleParams) this._scaleParams = { x: 1, y: 1, callback: (target, size) => target.dispatchEvent(new CustomEvent(`scale-sticker-${this._stickerId}`, { detail: { x: size.x, y: size.y } })) };
        if (!this._size) this._size = { x: null, y: null, callback: (target, size) => target.dispatchEvent(new CustomEvent(`scale-sticker-${this._stickerId}`, { detail: { x: size.x, y: size.y } })) };


        const position = { x: 0, y: 0, callback: this._translationParams.callback };
        //const scale = { x: 1, y: 1, callback: this._scaleParams.callback };
        const size = { x: null, y: null, callback: this._size.callback };
        interact(`.dapplet-sticker-${this._stickerId}`).draggable({
          listeners: {
            start (event) {
              event.stopPropagation();
              console.log(event.type, event.target)
            },
            move (event) {
              event.stopPropagation();
              console.log(event)
              position.x += event.dx * 100 / event.target.offsetWidth;
              position.y += event.dy * 100 / event.target.offsetHeight;
        
              event.target.style.transform =
                `translate(${position.x}%, ${position.y}%)`
              position.callback(event.target, position)
            },
          },
          modifiers: [
            interact.modifiers.restrictRect({
              restriction: 'parent'
            })
          ]
        }).resizable({
            edges: { top: true, left: true, bottom: true, right: true },
            listeners: {
              move: function (event) {
                event.stopPropagation();
                console.log(event)
                let { x, y } = event.target.dataset

                x = (parseFloat(x) || 0) + event.deltaRect.left
                y = (parseFloat(y) || 0) + event.deltaRect.top

                Object.assign(event.target.style, {
                  width: `${event.rect.width}px`,
                  height: `${event.rect.height}px`,
                  //transform: `scale(${event.rect.width / event.target.offsetWidth}, ${event.rect.height / event.target.offsetHeight})`,
                  //transform: `translate(${x}px, ${y}px)`
                })

                Object.assign(event.target.dataset, { x, y })
                size.callback(event.target, { x: event.rect.width /*/ event.target.offsetWidth*/, y: event.rect.height /*/ event.target.offsetHeight*/ })
              }
            }
          })


        this.el.classList.add('dapplet-widget-video-sticker');
        this.state.ctx.onTimeUpdate(() => this.mount()); // ToDo: check memory leak
        this.state.ctx.onResize(() => this.mount());
        //this.mount(); // ToDo: WTF?
        this.state.init?.(this.state.ctx, this.state);
    }
}