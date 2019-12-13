import { Widget } from "../common/widget";

interface IPictureState {
    clazz: string;
    img: string;
    disabled: boolean;
}

export class Picture extends Widget<IPictureState> {
    constructor(config: any) {
        super(config);
        this.el = document.createElement('div');
        this.el.classList.add(this.state.clazz);
        this.el.addEventListener("click", e => {
            if (!this.state.disabled) {
                this.onExec();
            }
        });
        this.el.style.position = 'absolute';
        this.el.style.bottom = '15px';
        this.el.style.right = '15px';
        this.el.style.zIndex = '999';
    }

    public mount() {
        const { clazz, img, disabled } = this.state;
        
        const htmlString = `<img src="${img}" />`
        
        this.el.innerHTML = htmlString;
    }
}