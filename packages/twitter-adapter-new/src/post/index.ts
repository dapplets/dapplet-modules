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
color?:string
    id: string;
    text: string;
    authorFullname: string;
    authorUsername: string;
    authorImg: string;
    hidden?: boolean;
    date:string;
    time:string;
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
    @property() color;
    @property() id;
    @property() text;
    @property() authorFullname;
    @property() authorUsername;
    @property() authorImg;
    @property() hidden = false;
    @property() date;
    @property() time;
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
                        <span class='${this.theme === "DARK" ? 'text-dark-name': 'text-light-name'}'>${this.authorFullname}</span>
                        <span> </span>
                        <span class='${this.theme === "DARK" ? 'text-dark-user-name': 'text-light-user-name'}'>@${this.authorUsername}</span>
                        <span class='delimeter-profile-info'> </span>
                        <span class='${this.theme === "DARK" ? 'text-dark-user-name': 'text-light-user-name'}'>${this.date}</span>
                    </div>
                    <div class='${this.theme === "DARK" ? 'text-dark': 'text-light'}'>${this.text}</div>
                    <div>
                    <span class='${this.theme === "DARK" ? 'text-dark-user-name': 'text-light-user-name'}'>${this.time}</span>
                    <span class='delimeter-profile-info'> </span>
                    <span class='tweery-lable'>/tweered<span class='tweery-lable-delimeter'></span></span>
                    
                </div>
                </div>
            </div>`;
        }
    }
}
