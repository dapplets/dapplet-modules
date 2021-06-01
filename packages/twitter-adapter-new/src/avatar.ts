import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IAvatarState {
    img: string;
    label: string;
    loading: boolean;
    disabled: boolean;
    tooltip?: string;
    exec: (ctx: any, me: IAvatarState) => void;
    init: (tx: any, me: IAvatarState) => void;
    ctx: any;
    hidden: boolean;
    username: string;
    insPointName: string;
}

export class Avatar implements IWidget<IAvatarState> {
    public el: HTMLElement;
    public state: IAvatarState;
    insPointName: string;

    public static contextInsPoints = {
        POST: 'AVATAR',
        PROFILE: 'AVATAR',
        SUSPENDED: 'AVATAR',
    }

    public mount() {
        if (!this.el) this._createElement();
        const { img, hidden, tooltip } = this.state;
        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }
            const imgTag: HTMLImageElement = this.el.firstChild as any;
            imgTag.src = img;
            imgTag.style.width = '100%';
            imgTag.style.height = '100%';
            imgTag.style.position = 'absolute';
            imgTag.style.objectFit = 'cover';
            if (this.insPointName = 'SUSPENDED') {
                imgTag.style.borderRadius = '99em';
                imgTag.style.cursor = 'pointer';
            }
            this.el.title = tooltip ?? '';
        } else {
            this.el.firstChild?.remove();
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
        this.el.style.bottom = '0';
        this.el.addEventListener('click', (e) => {
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });
        this.el.classList.add('dapplet-widget-badge');
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}