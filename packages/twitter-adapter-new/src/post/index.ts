import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./post.css";
import { description } from "./description";

export interface IPostProps {
    ctx: any;
    theme?: "DARK" | "LIGHT";
    insPointName?: string;

    id: string;
    text: string;
    authorFullname: string;
    authorUsername: string;
    authorImg: string;
    hidden?: boolean;
    exec: (ctx: any, me: this) => void;
    init: (ctx: any, me: this) => void;
}

export class Post extends LitElement implements IPostProps {
    public static override styles = styles;
    public static widgetParamsDescription = description;
    public static contextInsPoints = {
        PROFILE: "POSTS",
    };

    @property() state;
    @property() ctx;
    @property() theme;
    @property() insPointName;
    
    @property() id;
    @property() text;
    @property() authorFullname;
    @property() authorUsername;
    @property() authorImg;
    @property() hidden = false;
    @property() exec: (ctx: any, me: this) => void;
    @property() init: (ctx: any, me: this) => void;

    connectedCallback() {
        super.connectedCallback();
        this.init?.(this.ctx, this.state);
    }

    private _clickHandler(e) {
        this.exec?.(this.ctx, this.state);
        e.stopPropagation();
    }

    override render() {
        if (this.hidden) return null;
        if (this.insPointName === "PROFILE") {
            return html`<div class="post">
                <div class="avatar-container">
                    <img src="${this.authorImg}" alt="avatar" />
                </div>
                <div class="text-container">
                    <div>
                        <span>${this.authorFullname}</span>
                        <span> </span>
                        <span>@${this.authorUsername}</span>
                    </div>
                    <div>${this.text}</div>
                </div>
            </div>`;
        }
    }
}
