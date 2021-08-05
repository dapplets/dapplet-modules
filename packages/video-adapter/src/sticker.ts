import { IWidget } from 'dynamic-adapter.dapplet-base.eth';
import interact from 'interactjs';

export interface IStickerState {
    stickerId?: number
    img: string
    from?: number
    to?: number
    vertical?: number
    horizontal?: number
    widthCo?: number
    heightCo?: number
    rotated?: number
    opacity?: number
    transform?: string
    mutable?: boolean
    exec: (ctx: any, me: IStickerState) => void
    init: (ctx: any, me: IStickerState) => void
    ctx: any
    hidden: boolean
}

export class Sticker implements IWidget<IStickerState> {
    public el: HTMLElement;
    public state: IStickerState;
    insPointName: string;
    private _translationParams: { x: number; y: number; callback: any }; // x, y -> %
    private _scale: { factor: number; callback: any };
    private _rotate: { angle: number; callback: any };
    private _coordinates = { x: 0, y: 0 };
    private _stickerId: number;

    public static contextInsPoints = {
        VIDEO: 'STICKER',
    };

    public mount() {
        const {
            stickerId = Math.trunc(Math.random() * 1_000_000_000),
            img,
            from = 0,
            to = Infinity,
            vertical = 50,
            horizontal = 50,
            widthCo = 1,
            heightCo = 1,
            rotated = 0,
            mutable = true,
            opacity = 1,
            transform,
            hidden,
            ctx,
        } = this.state;

        if (this._stickerId === undefined) this._stickerId = stickerId;

        if (!this.el) this._createElement();

        if (!hidden && ctx.currentTime >= from && ctx.currentTime <= to) {
            const clientWidth = ctx.element.offsetWidth;
            const clientHeight = ctx.element.offsetHeight;

            const videoAspectRatio = ctx.width / ctx.height;
            const clientAspectRatio = clientWidth / clientHeight;

            const size: { x?: number, y?: number } = {}

            if (clientAspectRatio <= videoAspectRatio) {
                const minDimension =
                    videoAspectRatio >= 1 ? clientWidth / videoAspectRatio : clientWidth;
                size.x = (widthCo * minDimension) / 5;
                size.y = (heightCo * minDimension) / 5;
            } else {
                const minDimension =
                    videoAspectRatio >= 1 ? clientHeight : clientHeight * videoAspectRatio;
                size.x = (widthCo * minDimension) / 5;
                size.y = (heightCo * minDimension) / 5;
            }

            this.el.style.removeProperty('display');
            const container = document.createElement('div');
            container.style.position = 'absolute';
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.width = `${size.x}px`;
            container.style.height = `${size.y}px`;

            container.style.opacity = `${opacity}`;

            if (mutable) container.classList.add(`dapplet-sticker-${this._stickerId}`);

            this._coordinates.y =
                videoAspectRatio > clientAspectRatio
                    ? (0.01 * vertical - 0.5) * (clientWidth / videoAspectRatio) +
                      0.5 * (clientHeight - size.y)
                    : 0.01 * vertical * clientHeight - size.y / 2;
            this._coordinates.x =
                videoAspectRatio < clientAspectRatio
                    ? (0.01 * horizontal - 0.5) * clientHeight * videoAspectRatio +
                      0.5 * clientWidth
                    : 0.01 * horizontal * clientWidth;

            container.style.top = `${this._coordinates.y}px`;
            container.style.left = `${this._coordinates.x}px`;

            if (transform) {
                container.style.transform = transform;
            } else {
                container.style.transform = setTransform(
                  this._scale.factor,
                  this._translationParams.x,
                  this._translationParams.y,
                  this._rotate.angle ?? rotated
                );
            }

            // for .draggable and .resizable
            container.style.touchAction = 'none';
            container.style.userSelect = 'none';
            container.style.boxSizing = 'border-box';

            container.style.cursor = 'pointer';
            container.style.zIndex = '9999';

            const imageContainer = document.createElement('div');
            imageContainer.style.zIndex = '99999';
            imageContainer.style.display = 'flex';
            imageContainer.style.width = '100%';
            imageContainer.style.height = '100%';

            const image = document.createElement('img');
            image.src = img;
            image.style.width = '100%';
            imageContainer.appendChild(image);

            this.el.innerHTML = '';

            if (mutable) {
                container.setAttribute('data-angle', String(this._rotate.angle ?? rotated));

                container.addEventListener(`drug-sticker-${this._stickerId}`, (e: any) => {
                    e.stopPropagation();
                    this._translationParams.x += (e.detail.x * 100) / size.x / this._scale.factor;
                    this._translationParams.y += (e.detail.y * 100) / size.y / this._scale.factor;
                    e.target.style.transform = setTransform(
                      this._scale.factor,
                      this._translationParams.x,
                      this._translationParams.y,
                      this._rotate.angle ?? rotated
                    );
                });

                container.addEventListener(`scale-sticker-${this._stickerId}`, (e: any) => {
                    e.stopPropagation();

                    const oldTranslationParamX = this._translationParams.x;
                    const oldTranslationParamY = this._translationParams.y;
                    const oldScaleCoefX = this._scale.factor;
                    const oldScaleCoefY = this._scale.factor;

                    this._scale.factor = e.detail.factor;

                    this._translationParams.x =
                        (oldTranslationParamX * oldScaleCoefX) / this._scale.factor;
                    this._translationParams.y =
                        (oldTranslationParamY * oldScaleCoefY) / this._scale.factor;

                    e.target.style.transform = setTransform(
                      this._scale.factor,
                      this._translationParams.x,
                      this._translationParams.y,
                      this._rotate.angle ?? rotated
                    );
                });

                container.addEventListener(`rotate-sticker-${this._stickerId}`, (e: any) => {
                    e.stopPropagation();
                    this._rotate.angle = e.detail.angle;
                    e.target.style.transform = setTransform(
                      this._scale.factor,
                      this._translationParams.x,
                      this._translationParams.y,
                      this._rotate.angle,
                    );
                });

                // add rotate handles
                const rotationHandle1 = document.createElement('div');
                rotationHandle1.classList.add('sticker-rotation-handle');
                rotationHandle1.classList.add(`sticker-rotation-handle-${this._stickerId}`);
                rotationHandle1.style.top = '70%';
                rotationHandle1.style.left = '70%';

                const rotationHandle2 = document.createElement('div');
                rotationHandle2.classList.add('sticker-rotation-handle');
                rotationHandle2.classList.add(`sticker-rotation-handle-${this._stickerId}`);
                rotationHandle2.style.top = '-35%';
                rotationHandle2.style.left = '-35%'; 

                const rotationHandle3 = document.createElement('div');
                rotationHandle3.classList.add('sticker-rotation-handle');
                rotationHandle3.classList.add(`sticker-rotation-handle-${this._stickerId}`);
                rotationHandle3.style.top = '70%';
                rotationHandle3.style.left = '-35%'; 

                const rotationHandle4 = document.createElement('div');
                rotationHandle4.classList.add('sticker-rotation-handle');
                rotationHandle4.classList.add(`sticker-rotation-handle-${this._stickerId}`);
                rotationHandle4.style.top = '-35%';
                rotationHandle4.style.left = '70%'; 

                container.onclick = () => {
                    container.style.outline = 'solid rgb(121, 242, 230)';
                    rotationHandle1.style.display = 'table';
                    rotationHandle2.style.display = 'table';
                    rotationHandle3.style.display = 'table';
                    rotationHandle4.style.display = 'table';
                };

                container.appendChild(rotationHandle1);
                container.appendChild(rotationHandle2);
                container.appendChild(rotationHandle3);
                container.appendChild(rotationHandle4);
            }

            container.appendChild(imageContainer);
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

        const id = this._stickerId;

        this._translationParams = {
            x: 0,
            y: 0,
            callback: (target, position) =>
                target.dispatchEvent(
                    new CustomEvent(`drug-sticker-${id}`, {
                        detail: { x: position.x, y: position.y },
                    })
                ),
        };
        this._scale = {
            factor: 1,
            callback: (target, factor) =>
                target.dispatchEvent(
                    new CustomEvent(`scale-sticker-${id}`, { detail: { factor } })
                ),
        };
        this._rotate = {
            angle: null,
            callback: (target, angle) =>
                target.dispatchEvent(
                    new CustomEvent(`rotate-sticker-${id}`, { detail: { angle } })
                ),
        };

        const position = { ...this._translationParams };
        const scale = { ...this._scale };
        const rotate = { ...this._rotate };

        interact(`.dapplet-sticker-${id}`)
            .draggable({
                listeners: {
                    move(event) {
                        event.stopPropagation();
                        position.x = event.dx;
                        position.y = event.dy;
                        position.callback(event.target, position);
                    },
                },
            })
            .resizable({
                edges: { top: true, left: true, bottom: true, right: true },
                listeners: {
                    move: function (event) {
                        event.stopPropagation();
                        const transform = event.target.style.transform;
                        const transformParams = transform.match(/[a-z]+\(.+?\)/g);
                        const scaleParam = transformParams && transformParams.find((x) => /scale\(.*\)/.test(x));
                        const oldFactor = scaleParam === undefined || scaleParam === null ? 1 : +scaleParam.match(/[0-9.]+/)[0];

                        const factor = oldFactor + 2 * (event.deltaRect.width === 0
                          ? (event.deltaRect.bottom
                              ? event.deltaRect.bottom
                              : -event.deltaRect.top) / event.target.offsetHeight
                          : (event.deltaRect.right
                              ? event.deltaRect.right
                              : -event.deltaRect.left) / event.target.offsetWidth);

                        scale.callback(event.target, factor <= 0.3 ? 0.32 : factor);
                    },
                },
            });

        interact(`.sticker-rotation-handle-${id}`).draggable({
            onstart: function (event) {
                const box = event.target.parentElement;
                const rect = box.getBoundingClientRect();

                // store the center as the element has css `transform-origin: center center`
                box.setAttribute('data-center-x', rect.left + rect.width / 2);
                box.setAttribute('data-center-y', rect.top + rect.height / 2);
                // get the angle of the element when the drag starts
                box.setAttribute('data-angle', getDragAngle(event));
            },
            onmove: function (event) {
                const box = event.target.parentElement;
                const angle = getDragAngle(event);
                rotate.callback(box, angle);
            },
            onend: function (event) {
                const box = event.target.parentElement;

                // save the angle on dragend
                const x = getDragAngle(event);
                box.setAttribute('data-angle', x);
            },
        });

        function getDragAngle(event) {
            const box = event.target.parentElement;
            const startAngle = parseFloat(box.getAttribute('data-angle')) || 0;
            const center = {
                x: parseFloat(box.getAttribute('data-center-x')) || 0,
                y: parseFloat(box.getAttribute('data-center-y')) || 0,
            };
            const angle = Math.atan2(center.y - event.clientY, center.x - event.clientX);

            const a = (angle - startAngle) % (2 * Math.PI);
            if (a > 1.5 * Math.PI) return a - 2 * Math.PI;
            if (a < -(0.5 * Math.PI)) return a + 2 * Math.PI;
            return a;
        }

        if (
            ![...(<any>document.styleSheets)]
                .map((styleSheet) => styleSheet.title)
                .includes('sticker-rotation-handle-styles')
        ) {
            const styleTag: HTMLStyleElement = document.createElement('style');
            styleTag.title = 'sticker-rotation-handle-styles';
            styleTag.id = 'sticker-rotation-handle-styles';
            styleTag.innerText = `
                .sticker-rotation-handle {
                    display: none;
                    position: absolute;
                    width: 60%;
                    height: 60%;
                    line-height: 1;
                    text-align: center;
                    font-weight: bold;
                    color: #fff;
                    cursor: url("./rotate.svg"), move;
                }`;
            document.head.appendChild(styleTag);
        }

        this.el.classList.add('dapplet-widget-video-sticker');
        this.state.ctx.onTimeUpdate(() => this.mount()); // ToDo: check memory leak
        this.state.ctx.onResize(() => this.mount());
        //this.mount(); // ToDo: WTF?
        this.state.init?.(this.state.ctx, this.state);
    }
}

const setTransform = (factor, transX, transY, angle) => {
  return `scale(${factor}) translate(${transX}%, ${transY}%) rotate(${angle}rad)`;
};
