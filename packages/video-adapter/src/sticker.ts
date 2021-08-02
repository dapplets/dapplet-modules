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
    rotated?: number;
    mutable?: boolean;
    exec: (ctx: any, me: IStickerState) => void;
    init: (ctx: any, me: IStickerState) => void;
    ctx: any;
    hidden: boolean;
}

export class Sticker implements IWidget<IStickerState> {
    public el: HTMLElement;
    public state: IStickerState;
    insPointName: string;
    private _translationParams: { x: number; y: number; callback: any }; // x, y -> %
    private _size: { x: number; y: number; callback: any };
    private _rotate: { angle: number; callback: any };
    private _scaleCoef = { x: 1, y: 1 };
    private _coordinates = { x: 0, y: 0 };
    private _stickerId = Math.trunc(Math.random() * 1_000_000_000);

    public static contextInsPoints = {
        VIDEO: 'STICKER',
    };

    public mount() {
        if (!this.el) this._createElement();

        const {
            img,
            from = 0,
            to = Infinity,
            vertical = 50,
            horizontal = 50,
            widthCo = 1,
            heightCo = 1,
            rotated = 0,
            mutable = true,
            hidden,
            ctx,
        } = this.state;

        if (!hidden && ctx.currentTime >= from && ctx.currentTime <= to) {
            const clientWidth = ctx.element.offsetWidth;
            const clientHeight = ctx.element.offsetHeight;

            const videoAspectRatio = ctx.width / ctx.height;
            const clientAspectRatio = clientWidth / clientHeight;

            if (clientAspectRatio <= videoAspectRatio) {
                const minDimension =
                    videoAspectRatio >= 1 ? clientWidth / videoAspectRatio : clientWidth;
                this._size.x = (widthCo * minDimension) / 5;
                this._size.y = (heightCo * minDimension) / 5;
            } else {
                const minDimension =
                    videoAspectRatio >= 1 ? clientHeight : clientHeight * videoAspectRatio;
                this._size.x = (widthCo * minDimension) / 5;
                this._size.y = (heightCo * minDimension) / 5;
            }

            this.el.style.removeProperty('display');
            const container = document.createElement('div');
            if (mutable) container.classList.add(`dapplet-sticker-${this._stickerId}`);
            container.style.position = 'absolute';
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.width = `${this._size.x * this._scaleCoef.x}px`;
            container.style.height = `${this._size.y * this._scaleCoef.y}px`;

            this._coordinates.y =
                videoAspectRatio > clientAspectRatio
                    ? (0.01 * vertical - 0.5) * (clientWidth / videoAspectRatio) +
                      0.5 * (clientHeight - this._size.y)
                    : 0.01 * vertical * clientHeight - this._size.y / 2;
            this._coordinates.x =
                videoAspectRatio < clientAspectRatio
                    ? (0.01 * horizontal - 0.5) * clientHeight * videoAspectRatio +
                      0.5 * clientWidth
                    : 0.01 * horizontal * clientWidth;

            container.style.top = `${this._coordinates.y}px`;
            container.style.left = `${this._coordinates.x}px`;

            container.style.transform = `translate(${this._translationParams.x}%, ${
                this._translationParams.y
            }%) rotate(${this._rotate.angle ?? rotated}rad)`;

            // for .draggable and .resizable
            container.style.touchAction = 'none';
            container.style.userSelect = 'none';
            container.style.boxSizing = 'border-box';

            container.style.cursor = 'pointer';
            container.style.zIndex = '9999';

            container.setAttribute('data-angle', String(this._rotate.angle ?? rotated));

            const image = document.createElement('img');
            image.src = img;
            image.style.width = '100%';
            //image.style.height = '100%';
            container.appendChild(image);
            this.el.innerHTML = '';

            container.addEventListener(`drug-sticker-${this._stickerId}`, (e: any) => {
                e.stopPropagation();
                this._translationParams.x += (e.detail.x * 100) / this._size.x / this._scaleCoef.x;
                this._translationParams.y += (e.detail.y * 100) / this._size.y / this._scaleCoef.y;
                e.target.style.transform = `translate(${this._translationParams.x}%, ${
                    this._translationParams.y
                }%) rotate(${this._rotate.angle ?? rotated}rad)`;
            });

            container.addEventListener(`scale-sticker-${this._stickerId}`, (e: any) => {
                e.stopPropagation();

                const oldTranslationParamX = this._translationParams.x;
                const oldTranslationParamY = this._translationParams.y;
                const oldScaleCoefX = this._scaleCoef.x;
                const oldScaleCoefY = this._scaleCoef.y;

                this._scaleCoef.x = e.detail.w / this._size.x;
                this._scaleCoef.y = e.detail.h / this._size.y;

                this._translationParams.x =
                    (oldTranslationParamX * oldScaleCoefX) / this._scaleCoef.x;
                this._translationParams.y =
                    (oldTranslationParamY * oldScaleCoefY) / this._scaleCoef.y;

                e.target.style.transform = `translate(${this._translationParams.x}%, ${
                    this._translationParams.y
                }%) rotate(${this._rotate.angle ?? rotated}rad)`;
            });

            container.addEventListener(`rotate-sticker-${this._stickerId}`, (e: any) => {
                e.stopPropagation();
                this._rotate.angle = e.detail.angle;
                e.target.style.transform = `translate(${this._translationParams.x ?? 0}%, ${
                    this._translationParams.y ?? 0
                }%) rotate(${this._rotate.angle}rad)`;
            });

            // add rotate handle
            if (mutable) {
                const rotationHandle = document.createElement('div');
                rotationHandle.classList.add('sticker-rotation-handle');
                rotationHandle.classList.add(`sticker-rotation-handle-${this._stickerId}`);
                rotationHandle.innerHTML = '&circlearrowright;';
                rotationHandle.style.top = '100%';

                container.onclick = () => {
                    container.style.outline = 'solid rgb(121, 242, 230)';
                    rotationHandle.style.display = 'table';
                };

                container.appendChild(rotationHandle);
            }

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
        this._size = {
            x: null,
            y: null,
            callback: (target, size) =>
                target.dispatchEvent(
                    new CustomEvent(`scale-sticker-${id}`, {
                        detail: { w: size.w, h: size.h, x: size.x, y: size.y },
                    })
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
        const size = { ...this._size };
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
                edges: { top: false, left: false, bottom: true, right: true },
                listeners: {
                    move: function (event) {
                        event.stopPropagation();
                        const a = event.target.dataset?.angle;
                        let w: number;
                        let h: number;

                        if ((a < 0.3927 && a > -0.3927) || (a < 3.5343 && a > 2.75)) {
                            w = event.rect.width > 20 ? event.rect.width : 20;
                            h = event.rect.height > 20 ? event.rect.height : 20;
                        } else if ((a < 1.9635 && a > 1.1781) || a < -1.1781 || a > 4.32) {
                            h = event.rect.width > 20 ? event.rect.width : 20;
                            w = event.rect.height > 20 ? event.rect.height : 20;
                        } else {
                            if (event.dy === 0) {
                                w =
                                    event.rect.width > 20
                                        ? parseFloat(event.target.style.width) + event.dx
                                        : 20;
                                h =
                                    event.rect.height > 20
                                        ? parseFloat(event.target.style.height) + event.dx
                                        : 20;
                            } else {
                                w =
                                    event.rect.width > 20
                                        ? parseFloat(event.target.style.width) + event.dy
                                        : 20;
                                h =
                                    event.rect.height > 20
                                        ? parseFloat(event.target.style.height) + event.dy
                                        : 20;
                            }
                        }

                        Object.assign(event.target.style, {
                            width: `${w}px`,
                            height: `${h}px`,
                        });

                        //Object.assign(event.target.dataset, { x, y })
                        size.callback(event.target, { w, h, x: event.dx, y: event.dy });
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
                    padding: 3px 4px;
                    display: none;
                    position: absolute;
                    left: calc(50% - 10px);
                    background-color: rgb(121, 242, 230);
                    border-radius: 10rem;
                    line-height: 1;
                    text-align: center;
                    font-weight: bold;
                    color: #fff;
                    cursor: move;
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
