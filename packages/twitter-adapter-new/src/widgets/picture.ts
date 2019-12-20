import { Widget } from "../common/widget";

export interface IPictureState {
    img: string;
    disabled: boolean;
    exec: () => void;
    init: () => void;
}

export class Picture extends Widget<IPictureState> {
    constructor(callbackConfig: (setState: (stateName: string) => void) => { [key: string]: IPictureState }, clazz: string) {
        super(callbackConfig);
        this.el = document.createElement('div');
        this.el.classList.add(clazz);
        this.el.addEventListener("click", e => {
            if (!this.state.disabled) {
                this.state.exec?.();
            }
        });
        this.el.style.position = 'absolute';
        this.el.style.bottom = '15px';
        this.el.style.right = '15px';
        this.el.style.zIndex = '999';
        this.mount();
        this.state.init?.();
    }

    public mount() {
        const { img, disabled } = this.state;

        const htmlString = `<img src="${img}" />`

        this.el.innerHTML = htmlString;
    }
}