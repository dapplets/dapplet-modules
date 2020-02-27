import { IWidget } from '@dapplets/dynamic-adapter';
import CLOSE_ICON from './close_cross.svg';

export interface IPopupState {
    //img: string;
    //label: string;
    //loading: boolean;
    //disabled: boolean;
    exec: (ctx: any, me: IPopupState) => void;
    init: () => void;
    ctx: any;
    text: string;
    link: string;
    img: string;
    closed: boolean;
}

export class Popup implements IWidget<IPopupState> {
    public el: HTMLElement;
    public state: IPopupState;
    public insPointName: string;

    public mount() {
        if (!this.el) this._createElement();

        const { text, link, img, closed } = this.state;

        const htmlString = `<style>
            .dapplet-widget-basic-container {
                position: absolute;
                overflow-wrap: break-word;
                width: 380px;
                min-height: 60px;
                top: 80px;
                right: 500px;
                padding: 20px;
                background-color: #fff;
                color: #d10019;
                border: 2px solid #d10019;
                border-radius: 15px;
                text-align: center;
                box-shadow: 2px 2px 3px #999;
                font-size: 19px;
                font-weight: 600;
                font-family: system-ui, -apple-system, sans-serif, BlinkMacSystemFont, Roboto, Ubuntu;
            }
            .dapplet-widget-close-icon {
                width: 18px;
                height: 18px;
                position: relative;
                left: 192px;
                bottom: 12px;
                cursor: pointer;
            }
            .dapplet-widget-mascot-img img {
                width: 18px;
                height: 18px;
                position: absolute;
                left: 12px;
                top: 12px;
                cursor: pointer;
            }
            .dapplet-widget-basic-container a {
                text-decoration: none;
                color: #d10019;
            }
            .dapplet-widget-basic-container a:active {
                text-decoration: none;
                color: #d10019;
            }
            .dapplet-widget-basic-container a:visited {
                text-decoration: none;
                color: #d10019;
            }
            .displayed {
                display: block;
            }
            .no-displayed {
                display: none;
            }
        </style>
        <div class="dapplet-widget-basic-container ${closed ? 'no-displayed' : 'displayed'} ">  
            <div class="dapplet-widget-close">
                <img src=${CLOSE_ICON}  class="dapplet-widget-close-icon">
            </div>
            <div class="dapplet-widget-mascot-img">
                <img src=${img}>
            </div>
            <div>
                <a href=${link} target="_blank">${text}</a>
            </div>
        </div>`

        this.el.innerHTML = htmlString;
    }

    public unmount() {
        this.el && this.el.remove();
    }

    private _createElement() {
        this.el = document.createElement('div');
        this.el.addEventListener("click", e => {
            const target = e.target as HTMLElement;
            if (!target.classList.contains('dapplet-widget-close-icon')) return; 

            // if (target.classList.contains('dapplet-widget-close-icon')) {
            //     const popupContainer: HTMLElement = this.el.querySelector('.dapplet-widget-basic-container');
            //     popupContainer.classList.add('no-displayed');
            // }

            this.state.closed = true;
        });
        this.mount();
        this.state.init?.();
    }
}