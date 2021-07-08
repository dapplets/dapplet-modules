import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IAvatarBadgeState {
    img: string;
    label: string;
    loading: boolean;
    disabled: boolean;
    tooltip?: string;
    exec: (ctx: any, me: IAvatarBadgeState) => void;
    init: (tx: any, me: IAvatarBadgeState) => void;
    ctx: any;
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
    hidden: boolean;
    username: string;
    insPointName: string;
}

export class AvatarBadge implements IWidget<IAvatarBadgeState> {
    public el: HTMLElement;
    public state: IAvatarBadgeState;
    insPointName: string;

    public static contextInsPoints = {
        POST: 'AVATAR_BADGE',
        PROFILE: 'AVATAR_BADGE',
    }

    public mount() {

        this._injectStyles();
        if (!this.el) this._createElement();

        const { img, vertical, horizontal, hidden, tooltip } = this.state;

        if (!hidden) {
            if (!this.el.firstChild) {
                const imgTag = document.createElement('img');
                this.el.appendChild(imgTag);
            }
            const imgTag: HTMLImageElement = this.el.firstChild as any;

            switch (this.insPointName) {
                case 'POST':
                    imgTag.src = img;
                    imgTag.style.width = '24px';
                    imgTag.style.height = '24px';
                    imgTag.style.position = 'absolute';
                    imgTag.style[vertical] = '-2px';
                    imgTag.style[horizontal] = '-7px';
                    break;

                case 'PROFILE':
                    imgTag.src = img;
                    imgTag.style.width = '22%';
                    imgTag.style.minWidth = '13px';
                    imgTag.style.position = 'absolute';
                    imgTag.style.right = (horizontal === 'right') ? '2%' : '75%';
                    imgTag.style.top = (vertical === 'bottom') ? '75%' : '2%';
                    break;
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
        switch (this.insPointName) {
            case 'PROFILE':
                this.el = document.createElement('div');
                this.el.classList.add("dapplet-widget-profile-avatar-badge");
                break;

            case 'POST':
                this.el = document.createElement('div');
        }

        this.el.addEventListener('click', (e) => {
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });

        this.el.classList.add('dapplet-widget-badge');
        this.mount();
        this.state.init?.(this.state.ctx, this.state);
    }

    private _injectStyles() {
        if (!!document.getElementById('dapplet-widget-badge-styles')) return;

        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.id = 'dapplet-widget-badge-styles';
        styleTag.type = 'text/css';
        styleTag.innerText = `
            .dapplet-widget-badge > img:hover {
                filter: brightness(0.9);
            }

            .dapplet-widget-profile-button:hover {
                background-color: rgba(15, 20, 25, 0.1);
            }

            .dapplet-widget-profile-avatar-badge {
                cursor: pointer;
            }
        `;
        document.head.appendChild(styleTag);
    }
}