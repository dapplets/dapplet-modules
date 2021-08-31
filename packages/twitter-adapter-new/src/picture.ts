import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IPictureState {
    img: string;
    tooltip?: string;
    hidden?: boolean;
    disabled?: boolean;
    exec?: (ctx: any, me: IPictureState) => void;
    init?: (ctx: any, me: IPictureState) => void;
    ctx: any;
    insPointName: string;
}

export class Picture implements IWidget<IPictureState> {
    public el: HTMLElement;
    public state: IPictureState;
    insPointName: string;

    // ToDo 
    public static widgetParamsDescription = {
        img: {
            description:'image as blob',
            optional: false,
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
        POST: 'PICTURE',
    }

    public mount() {
        if (!this.el) this._createElement();

        const { img, disabled, hidden, tooltip } = this.state;

        this.el.innerHTML = '';
        if (!hidden) {
            const image = document.createElement('img');
            image.style.width = '100%';
            image.src = img;
            this.el.append(image);
        }
        
        this.el.title = tooltip ?? '';
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            if (!this.state.disabled) {
                this.state.exec?.(this.state.ctx, this.state);
            }
        });
        this.el.style.position = 'absolute';
        this.el.style.maxWidth = '25%';
        this.el.style.bottom = '15px';
        this.el.style.right = '15px';
        this.el.style.zIndex = '3';
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}