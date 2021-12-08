import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

interface IImg {
  main: string
  hover: string
  active: string
}

export interface ILabelState {
    img: string | IImg
    // vertical?: number // %
    // horizontal?: number // %
    // widthCo?: number // 0-1
    // heightCo?: number // 0-1
    width: number // px
    height: number // px
    top?: number // px
    bottom?: number // px
    left?: number // px
    right?: number // px
    exec: (ctx: any, me: ILabelState) => void
    init: (tx: any, me: ILabelState) => void
    ctx: any
    hidden: boolean
}

export class Label implements IWidget<ILabelState> {
  public el: HTMLElement;
  public state: ILabelState;
  insPointName: string;
  // private _coordinates = { x: 0, y: 0 };
  private _stickerId = Math.trunc(Math.random() * 1_000_000_000);

  public static contextInsPoints = {
      VIDEO: 'VIDEO',
  };

  public mount() {
      if (!this.el) this._createElement();

      const {
          img,
          // vertical = 50,
          // horizontal = 50,
          // widthCo = 1,
          // heightCo = 1,
          top,
          bottom,
          left,
          right,
          width,
          height,
          hidden,
          ctx,
      } = this.state;

      if (hidden) {
          this.el.firstChild?.remove();
          this.el.style.display = 'none';
          return;
      }

      // const clientWidth = ctx.element.offsetWidth;
      // const clientHeight = ctx.element.offsetHeight;

      // const videoAspectRatio = ctx.width / ctx.height;
      // const clientAspectRatio = clientWidth / clientHeight;

      // const size = { x: null, y: null };

      // if (clientAspectRatio <= videoAspectRatio) {
      //     const minDimension =
      //         videoAspectRatio >= 1 ? clientWidth / videoAspectRatio : clientWidth;
      //     size.x = (widthCo * minDimension) / 5;
      //     size.y = (heightCo * minDimension) / 5;
      // } else {
      //     const minDimension =
      //         videoAspectRatio >= 1 ? clientHeight : clientHeight * videoAspectRatio;
      //     size.x = (widthCo * minDimension) / 5;
      //     size.y = (heightCo * minDimension) / 5;
      // }

      // this._coordinates.y =
      //     videoAspectRatio > clientAspectRatio
      //         ? (0.01 * vertical - 0.5) * (clientWidth / videoAspectRatio) +
      //           0.5 * (clientHeight - size.y)
      //         : 0.01 * vertical * clientHeight - size.y / 2;
      // this._coordinates.x =
      //     videoAspectRatio < clientAspectRatio
      //         ? (0.01 * horizontal - 0.5) * clientHeight * videoAspectRatio +
      //           0.5 * clientWidth
      //         : 0.01 * horizontal * clientWidth;

      this.el.style.removeProperty('display');
      const container = document.createElement('div');
      container.classList.add(`dapplet-label-${this._stickerId}`);
      container.style.position = 'absolute';

      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      if (top !== undefined) container.style.top = `${top}px`;
      if (bottom !== undefined) container.style.bottom = `${bottom}px`;
      if (left !== undefined) container.style.left = `${left}px`;
      if (right !== undefined) container.style.right = `${right}px`;

      // container.style.touchAction = 'none';
      // container.style.userSelect = 'none';
      container.style.boxSizing = 'border-box';
      container.style.cursor = 'pointer';
      container.style.zIndex = '9999';

      const image = document.createElement('img');
      image.style.width = '100%';
      image.style.height = '100%';
      if (typeof img === 'string') {
        image.src = img;
      } else {
        image.src = img.main;
        image.addEventListener('mouseenter', () => image.src = img.hover);
        image.addEventListener('mouseleave', () => image.src = img.main);
        image.addEventListener('mousedown', () => image.src = img.active);
        image.addEventListener('mouseup', () => image.src = img.main);
      }
      container.appendChild(image);

      container.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.state.exec?.(this.state.ctx, this.state);
          return false;
      });

      this.el.innerHTML = '';
      this.el.appendChild(container);
  }

  public unmount() {
      this.el && this.el.remove();
  }

  private _createElement() {
      this.el = document.createElement('div');
      this.el.style.position = 'absolute';
      this.el.style.top = '0';
      this.el.style.bottom = '0';
      this.el.style.right = '0';
      this.el.style.left = '0';
      this.el.style.width = '100%';
      this.el.style.height = '100%';
      this.el.classList.add('dapplet-widget-video-label');
      this.state.init?.(this.state.ctx, this.state);
  }
}
