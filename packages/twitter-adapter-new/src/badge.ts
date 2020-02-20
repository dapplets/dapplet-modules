import { IWidget } from '@dapplets/dynamic-adapter';

export interface IBadgeState {
    img: string;
    label: string;
    loading: boolean;
    disabled: boolean;
    exec: (ctx: any, me: IBadgeState) => void;
    init: (tx: any, me: IBadgeState) => void;
    clazz: string;
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
        const { img, vertical, horizontal, ctx, hidden } = this.state;


        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }

            const imgTag: HTMLImageElement = this.el.firstChild as any;

            switch (this.insPointName) {
                case 'TWEET_USERNAME_BADGE':

                    imgTag.src = img;
                    imgTag.style.width = '15px';
                    imgTag.style.height = '15px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '2px';
                    imgTag.style[horizontal] = '3px';

                    break;

                case 'TWEET_AVATAR_BADGE':

                    imgTag.src = img;
                    imgTag.style.width = '24px';
                    imgTag.style.height = '24px';
                    imgTag.style.position = 'absolute';
                    imgTag.style[vertical] = '-2px';
                    imgTag.style[horizontal] = '-7px';
                    break;

                case 'PROFILE_AVATAR_BADGE':

                    imgTag.src = img;
                    imgTag.style.width = '32px';
                    imgTag.style.height = '32px';
                    imgTag.style.position = 'absolute';
                    imgTag.style[vertical] = '-2px';
                    imgTag.style[horizontal] = '-7px';
                    break;

                case 'PROFILE_USERNAME_BADGE':

                    imgTag.src = img;
                    imgTag.style.width = '32px';
                    imgTag.style.height = '32px';
                    imgTag.style.position = 'absolute';
                    // imgTag.style[vertical] = '-2px';
                    //imgTag.style[horizontal] = '-7px';
                    break;

                case 'HEADING_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '24px';
                    imgTag.style.height = '24px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '3px';
                    imgTag.style[horizontal] = '1px';
                    break;

                case 'SUSPENDED_USERNAME_BADGE':
                    imgTag.src = img;
                    imgTag.style.width = '20px';
                    imgTag.style.height = '20px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '3px';
                    //imgTag.style[horizontal] = '-7px';
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
        if (this.insPointName === 'HEADING_USERNAME_BADGE') {

            this.el = document.createElement('span');

        } else if (this.insPointName === 'SUSPENDED_USERNAME_BADGE') {

            this.el = document.createElement('span');
            this.el.style.margin = '2px';

        } else {
            this.el = document.createElement('div');
        }
        //this.el = document.createElement('div');
        this.el.classList.add(this.state.clazz);

        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}