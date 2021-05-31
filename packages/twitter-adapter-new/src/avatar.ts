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
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
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
                    imgTag.style.width = '100%';
                    imgTag.style.height = '100%';
                    imgTag.style.position = 'absolute';
                    imgTag.style.objectFit = 'cover';
                    
                    break;

                case 'PROFILE':
                    imgTag.src = img;
                    imgTag.style.width = '100%';
                    imgTag.style.height = '100%';
                    imgTag.style.position = 'absolute';
                    imgTag.style.objectFit = 'cover';
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
                this.el.style.position = 'absolute';
                this.el.style.width = '100%';
                this.el.style.height = '100%';
                break;

            case 'POST':
                this.el = document.createElement('div');
                this.el.style.position = 'absolute';
                this.el.style.width = '100%';
                this.el.style.height = '100%';
                this.el.style.bottom = '0';
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