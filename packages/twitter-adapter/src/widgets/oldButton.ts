import { Widget } from "../common/widget";

interface IOldButtonState {
    clazz: string;
    img: string;
    label: string;
}

export class OldButton extends Widget<IOldButtonState> {
    public mount() {
        const { clazz, img, label } = this.state;
        
        const htmlString = `<div class="${clazz} ProfileTweet-action">
                <button class="ProfileTweet-actionButton" type="button">
                    <div class="IconContainer">
                        <img height="18" src="${img}">
                    </div>
                    ${label ? `<span class="ProfileTweet-actionCount">
                        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">${label}</span>
                    </span>` : ''}
                </button>
            </div>`

        if (!this.el) {
            const div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            this.el = <Element>div.lastChild;

            this.el.addEventListener("click", e => {
                this.onExec();
            });
        } else {
            this.el.innerHTML = htmlString;
        }
    }
}