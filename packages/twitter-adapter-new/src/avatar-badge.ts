import { IWidget } from 'dynamic-adapter.dapplet-base.eth';

export interface IAvatarBadgeState {
    img?: string | null
    video?: string
    mediaType?: string
    basic?: boolean
    horizontal: 'left' | 'right'
    vertical: 'top' | 'bottom'
    tooltip?: string | string[]
    hidden?: boolean
    theme?: 'DARK' | 'LIGHT'
    //label?: string
    //loading?: boolean
    //disabled?: boolean
    exec?: (ctx: any, me: IAvatarBadgeState) => void
    init?: (tx: any, me: IAvatarBadgeState) => void
    ctx: any
    username: string
    insPointName: string
}

export class AvatarBadge implements IWidget<IAvatarBadgeState> {
    public el: HTMLElement;
    public state: IAvatarBadgeState;
    insPointName: string;

    // ToDo 
    public static widgetParamsDescription = {
        img: {
            description:'image as blob',
            optional: true,
            TYPE: 'string | null',
        },
        video: {
            description:'video as blob',
            optional: true,
            TYPE: 'string',
        },
        mediaType: {
            description:'type of media item: image or video',
            optional: true,
            TYPE: 'string',
        },
        basic: {
            description:'By default there are a gray background and a border. In case of true there are no background and border. The image/video have not border radius',
            optional: true,
            TYPE: 'boolean',
        },
        horizontal: {
            description: 'sets a horizontal position',
            optional: true,
            TYPE: "'left' | 'right'",
        },
        vertical: {
            description: 'sets a vertical position',
            optional: true,
            TYPE: "'top' | 'bottom'",
        },
        tooltip: {
            description: 'text tooltip',
            optional: true,
            TYPE: 'string',
        },
        theme: {
            description: "'DARK' | 'LIGHT'",
            optional: true,
            TYPE: 'string',
        },
        hidden: {
            description: 'hides the widget',
            optional: true,
            TYPE: 'boolean',
        },
        exec: {
            description: 'action on click',
            optional: true,
            TYPE: '(ctx: any, me: IAvatarBadgeState) => void',
        },
        init: {
            description: 'action through initialisation',
            optional: true,
            TYPE: '(ctx: any, me: IAvatarBadgeState) => void',
        },
    };

    public static contextInsPoints = {
        POST: 'AVATAR_BADGE',
        PROFILE: 'AVATAR_BADGE',
    }

    public mount() {

        this._injectStyles();
        if (!this.el) this._createElement();

        const { img, video, mediaType, basic, vertical, horizontal, hidden, tooltip, theme, exec } = this.state;

        if (!hidden && (img || video)) {
            this.el.style.display = 'block';
            if (!this.el.firstChild) {
                const container = document.createElement('div');
                container.style.position = 'absolute';
                container.style.display = 'flex';
                container.style.overflow = 'hidden';
                container.style.alignItems = 'center';
                container.style.cursor = exec ? 'pointer' : 'default';
                switch (this.insPointName) {
                    case 'POST':
                        container.style.width = '24px';
                        container.style.height = '24px';
                        container.style[vertical] = '-2px';
                        container.style[horizontal] = '-7px';
                        break;
    
                    case 'PROFILE':
                        container.style.width = '25%';
                        container.style.minWidth = '13px';
                        container.style.height = '25%';
                        container.style.minHeight = '13px';
                        container.style.right = (horizontal === 'right') ? '0' : null;
                        container.style.bottom = (vertical === 'bottom') ? '0' : null;
                        break;
                    default:
                        console.log('Wrong insPointName for avatar-badge:', this.insPointName);
                }
                this.el.appendChild(container);
            }
            const container: HTMLDivElement = this.el.firstChild as any;

            if (!basic) {
                container.style.borderRadius = '99em';
                if (theme === 'DARK') {
                    container.style.backgroundColor = '#222';
                    if (this.insPointName === 'POST') {
                        container.style.border = '1px solid black';
                    } else if (this.insPointName === 'PROFILE') {
                        container.style.border = '2px solid black';
                    }
                } else {
                    container.style.backgroundColor = 'lightgray';
                    if (this.insPointName === 'POST') {
                        container.style.border = '1px solid white';
                    } else if (this.insPointName === 'PROFILE') {
                        container.style.border = '2px solid white';
                    }
                }
            }

            if (img && (mediaType === undefined || mediaType !== 'application/octet-stream')) {
                if (!container.firstChild || container.firstChild.nodeName !== 'IMG') {
                    container.innerHTML = '';
                    const imgTag = document.createElement('img');
                    container.appendChild(imgTag);
                }
                const imgTag: HTMLImageElement = container.firstChild as any;
                imgTag.src = img;
                imgTag.style.width = '100%';
            } else if (video ?? (img && mediaType === 'application/octet-stream')) {
                if (!container.firstChild || container.firstChild.nodeName !== 'VIEDO') {
                    container.innerHTML = '';
                    const videoTag = document.createElement('video');
                    container.appendChild(videoTag);
                }
                const videoTag: HTMLVideoElement = container.firstChild as any;
                videoTag.src = video ?? img;
                videoTag.autoplay = true;
                videoTag.muted = true;
                videoTag.loop = true;
                videoTag.style.width = '100%';
            }

            this.el.title = tooltip
                ? typeof tooltip === 'string'
                  ? tooltip
                  : tooltip.join('\n')
                : '';
        } else {
            this.el.firstChild?.remove();
            this.el.style.display = 'none';
        }
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        switch (this.insPointName) {
            case 'PROFILE':
                this.el = document.createElement('div');
                this.el.style.zIndex = '50100';
                break;

            case 'POST':
                this.el = document.createElement('div');
                this.el.style.zIndex = '50100';
                const dimThemeWrapper: HTMLElement = document.querySelector('a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-yfoy6g.r-f6ebdl.r-sdzlij.r-1phboty.r-14f9gny.r-1loqt21.r-1gzrgec.r-cnkkqs.r-zjg7tu.r-1v6e3re.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg.r-1xce0ei');
                if (dimThemeWrapper) dimThemeWrapper.style.overflow = 'visible';
                const blackThemeWrapper: HTMLElement = document.querySelector('a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-kemksi.r-1xc7w19.r-sdzlij.r-1phboty.r-14f9gny.r-1loqt21.r-1gzrgec.r-cnkkqs.r-zjg7tu.r-1v6e3re.r-1ny4l3l.r-1udh08x.r-o7ynqc.r-6416eg.r-1xce0ei');
                if (blackThemeWrapper) blackThemeWrapper.style.overflow = 'visible';
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
        `;
        document.head.appendChild(styleTag);
    }
}