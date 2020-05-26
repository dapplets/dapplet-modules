import { IWidget } from '@dapplets/dynamic-adapter';

export interface IBadgeState {
    img: string;
    label: string;
    loading: boolean;
    disabled: boolean;
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
    insPointName: string;  // TWEET_USERNAME_BADGE | TWEET_AVATAR_BADGE

    public mount() {

        if (!this.el) this._createElement();
        const { img, vertical, horizontal, hidden } = this.state;


        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }

            const imgTag: HTMLImageElement = this.el.firstChild as any;

            switch (this.insPointName) {
                case 'TWEET_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '16px';
                    imgTag.style.height = '16px';
                    break;

                case 'PROFILE_AVATAR_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '32px';
                    imgTag.style.height = '32px';
                    break;

                case 'PROFILE_BUTTON_GROUP':
                    imgTag.src = img;
                    imgTag.style.width = '18px';
                    imgTag.style.height = '18px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '9px';
                    imgTag.style[horizontal] = '10px';
                    break;
            }

        } else {
            this.el.firstChild?.remove();
        }
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        switch (this.insPointName) {
            case 'PROFILE_AVATAR_BADGE':
                this.el = document.createElement('div');
                this.el.style.position = 'absolute';
                this.el.style[this.state.vertical] = '6px';
                this.el.style[this.state.horizontal] = '6px';
                break;

            case 'TWEET_AVATAR_BADGE':
                this.el = document.createElement('div');
                this.el.style.position = 'absolute';
                this.el.style[this.state.vertical] = '-3px';
                this.el.style[this.state.horizontal] = '-3px';
                this.el.style['zIndex'] = '1';
                break;

            default:
                this.el = document.createElement('div');
        }

        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}