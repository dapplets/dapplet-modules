import { IWidget, ContextReplacer } from 'dynamic-adapter.dapplet-base.eth'
import description from './description'
import { IQuoteState } from './types'
import { addRetweetInfo, addInnerText, addMedia, addRecoveredInfo } from './helpers'

export default class Quote implements IWidget<IQuoteState> {
    public el: HTMLElement;
    public state: IQuoteState;
    insPointName: string;
    public contextReplacer: ContextReplacer;

    public static widgetParamsDescription = description;

    public static contextInsPoints = {
        POST: "TEXT",
    };

    public mount() {
        if (!this.el) this._createElement(this.state.ctx.el);
        const {
            img,
            hidden,
            replace,
            tag,
            text,
            authorImg,
            date,
            authorFullname,
            authorUsername,
            color
        } = this.state;

        this.contextReplacer.updateReplacedContext(replace);

        const createBox = () => {
            const container = document.createElement("div");
            container.id = `text-${Math.trunc(Math.random() * 1_000_000_000)}`;
            container.style.position = "relative";
            container.style.width = "97%";
            container.style.bottom = "0";
            container.style.zIndex = "50000";
            container.style.border = "0.5px solid #777";
            container.style.borderStyle = "0.5px solid #777";
            container.style.borderRadius = "10px";
            container.style.margin = "0 auto";
            container.style.paddingLeft = "10px";
            if (authorImg) container.appendChild(
                addRetweetInfo(
                    authorImg,
                    authorFullname,
                    authorUsername,
                    date,
                    color
                ));
            if (text) container.appendChild(addInnerText(text, color))
            if (img) container.appendChild(addMedia(img))
            container.appendChild(addRecoveredInfo())
            container.addEventListener("click", (e) => {
                this.state.exec?.(this.state.ctx, this.state);
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
            return container;
        };

        if (!hidden) {
            if (replace !== undefined) {
                this.contextReplacer.replaceAll(replace, tag ?? 'article', createBox);
            } else {
                this.el.style.position = "relative";
                this.el.style.width = "100%";
                this.el.style.bottom = "0";
                this.el.style.zIndex = "50000";
                this.el.style.marginTop = "12px";
                const retweet = this.el.querySelector(
                    ".css-1dbjc4n.r-1ssbvtb.r-1s2bzr4"
                );
                if (retweet) {
                    retweet.innerHTML = "";
                }
            }
        } else {
            if (replace) {
                this.contextReplacer.restore();
            }
            this.el.innerHTML = "";
        }
    }

    public unmount() {
        if (this.el) {
            this.contextReplacer.restore();
            this.el.remove();
        }
    }

    private _createElement(contextEl: HTMLElement) {
        this.el = document.createElement("div");
        this.el.classList.add("dapplet-widget-text");
        this.el.addEventListener("click", (e) => {
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });
        this.state.init?.(this.state.ctx, this.state);
        this.contextReplacer.init(this.el, contextEl);
    }
}
