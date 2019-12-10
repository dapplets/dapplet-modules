import { Widget } from "../common/widget";

interface IButtonState {
    clazz: string;
    img: string;
    label: string;
    loading: boolean;
    disabled: boolean;
}

export class Button extends Widget<IButtonState> {
    constructor(config: any) {
        super(config);
        this.el = document.createElement('div');
        this.el.classList.add(this.state.clazz, 'ProfileTweet-action');
        this.el.addEventListener("click", e => {
            if (!this.state.disabled) {
                this.onExec();
            }
        });
    }

    public mount() {
        const { clazz, img, label, loading, disabled } = this.state;
        
        const htmlString = `<button class="ProfileTweet-actionButton" type="button">
                <div class="IconContainer">
                    ${loading ? `<svg width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
                        <circle cx="50" cy="50" fill="none" stroke="#1da1f2" stroke-width="14" r="40" stroke-dasharray="188.49555921538757 64.83185307179586" transform="rotate(77.5793 50 50)">
                            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                        </circle>
                    </svg>` : `<img height="18" src="${img}">`}
                </div>
                ${label ? `<span class="ProfileTweet-actionCount">
                    <span ${disabled ? 'style="color:#aaa;"' : ''} class="ProfileTweet-actionCountForPresentation" aria-hidden="true">${label}</span>
                </span>` : ''}
            </button>`
        
        this.el.innerHTML = htmlString;
    }
}