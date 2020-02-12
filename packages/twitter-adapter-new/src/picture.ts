import { IWidget } from '@dapplets/dynamic-adapter';

export interface IPictureState {
    img: string;
    disabled: boolean;
    exec: (ctx: any, me: IPictureState) => void;
    init: () => void;
    clazz: string;
    ctx: any;
    insPointName: string;
}

export class Picture implements IWidget<IPictureState> {
    public el: HTMLElement;
    public state: IPictureState;
    insPointName: string;

    public mount() {
        if (!this.el) this._createElement();

        const { img, disabled } = this.state;

        const htmlString = `<img src="${img}" />`

        this.el.innerHTML = htmlString;
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.classList.add(this.state.clazz);
        this.el.addEventListener("click", e => {
            if (!this.state.disabled) {
                this.state.exec?.(this.state.ctx, this.state);
            }
        });
        this.el.style.position = 'absolute';
        this.el.style.bottom = '15px';
        this.el.style.right = '15px';
        this.el.style.zIndex = '3';
        this.mount();
        this.state.init?.();
    }
}