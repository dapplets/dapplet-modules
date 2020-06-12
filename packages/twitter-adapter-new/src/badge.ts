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
    insPointName: string;  // POST_USERNAME_BADGE | POST_AVATAR_BADGE

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
                case 'POST_USERNAME_BADGE':

                    imgTag.src = img;
                    imgTag.style.width = '15px';
                    imgTag.style.height = '15px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '2px';
                    imgTag.style[horizontal] = '3px';
                    break;

                case 'POST_AVATAR_BADGE':

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
                    break;

                case 'PROFILE_USERNAME_BADGE':

                    imgTag.src = img;
                    imgTag.style.width = '20px';
                    imgTag.style.height = '20px';
                    imgTag.style.position = 'relative';
                    imgTag.style[vertical] = '2px';
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
            case 'SUSPENDED_USERNAME_BADGE':
            case 'PROFILE_USERNAME_BADGE':
                this.el = document.createElement('span');
                this.el.style.margin = '2px';
                break;

            case 'HEADING_USERNAME_BADGE':
                this.el = document.createElement('span');
                break;

            case 'PROFILE_AVATAR_BADGE':
                this.el = document.createElement('div');
                this.el.style.position = 'absolute';
                break;

            case 'PROFILE_BUTTON_GROUP':
                this.el = document.createElement('div');
                this.el.classList.add("dapplet-widget-profile-button", "css-18t94o4", "css-1dbjc4n", "r-1niwhzg", "r-1xl5njo", "r-sdzlij", "r-1phboty", "r-rs99b7", "r-1w2pmg", "r-15d164r", "r-zso239", "r-1vuscfd", "r-53xb7h", "r-mk0yit", "r-o7ynqc", "r-6416eg", "r-lrvibr");
                const styleTag: HTMLStyleElement = document.createElement('style');
                styleTag.type = 'text/css';
                styleTag.innerText = `.dapplet-widget-profile-button:hover {
                        background-color: rgba(244, 93, 34, 0.1)
                    }`;
                document.head.appendChild(styleTag);
                break;

            default:
                this.el = document.createElement('div');
        }
        
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }
}