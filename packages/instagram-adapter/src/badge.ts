import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IBadgeState {
    img: string;
    label: string;
    loading: boolean;
    disabled: boolean;
    tooltip?: string;
    exec: (ctx: any, me: IBadgeState) => void;
    init: (tx: any, me: IBadgeState) => void;
    ctx: any;
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
    hidden: boolean;
    username: string;
    insPointName: string;
}

export class Badge implements IWidget<IBadgeState> {
    public el: HTMLElement;
    public state: IBadgeState;
    insPointName: string;  // POST_USERNAME_BADGE | POST_AVATAR_BADGE

    public mount() {
        if (!this.el) this._createElement();
        const { img, vertical, horizontal, hidden, tooltip } = this.state;

        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }

            const imgTag: HTMLImageElement = this.el.firstChild as any;

            switch (this.insPointName) {
                case 'POST_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '16px';
                    imgTag.style.height = '16px';
                    break;

                case 'PROFILE_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '32px';
                    imgTag.style.height = '32px';
                    break;
            }

            this.el.title = tooltip;
        } else {
            this.el.firstChild?.remove();
        }
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        const { img, vertical, horizontal, hidden } = this.state;

        this.el = document.createElement('div');
        switch (this.insPointName) {
            case 'PROFILE_AVATAR_BADGE':
                this.el.style.cssText = '';
                this.el.style.position = 'absolute';
                this.el.style[vertical] = '1px';
                this.el.style[horizontal] = '1px';
                break;
            case 'POST_AVATAR_BADGE':
                this.el.style.cssText = '';
                this.el.style.position = 'absolute';
                this.el.style.zIndex = '1';
                this.el.style[vertical] = '-2px';
                this.el.style[horizontal] = '-2px';
                break;
        }

        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}