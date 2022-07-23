import { IWidget } from "dynamic-adapter.dapplet-base.eth";

export interface IQuoteState {
    img?: string;
    color?: string;
    textBackground?: string;
    tag?: string;
    replace?: string;
    hidden?: boolean;
    exec?: (ctx: any, me: IQuoteState) => void;
    init?: (ctx: any, me: IQuoteState) => void;
    ctx: any;
    text?: string;
    authorImg?: string;
    date?: string;
    authorFullname?: string;
    authorUsername?: string;
}

export class Quote implements IWidget<IQuoteState> {
    public el: HTMLElement;
    public state: IQuoteState;
    insPointName: string;

    article: HTMLElement;
    replacedTags = <Element>{};
    insrtedTags = new WeakMap<HTMLElement, string[]>();
    private _prevReplace: string;

    // ToDo
    public static widgetParamsDescription = {
        img: {
            description: "image as blob",
            optional: true,
            TYPE: "string",
        },
        video: {
            description: "video as blob",
            optional: true,
            TYPE: "string",
        },
        color: {
            description: "text color",
            optional: true,
            TYPE: "string",
        },
        textBackground: {
            description: "text background",
            optional: true,
            TYPE: "string",
        },

        hidden: {
            description: "hides the widget",
            optional: true,
            TYPE: "boolean",
        },
        replace: {
            description: "text that should be replaced to the box",
            optional: true,
            TYPE: "string",
        },
        tag: {
            description: "tag that have the replaced text",
            optional: true,
            TYPE: "string",
        },
        exec: {
            description: "action on click",
            optional: true,
            TYPE: "(ctx: any, me: IAvatarState) => void",
        },
        init: {
            description: "action through initialisation",
            optional: true,
            TYPE: "(ctx: any, me: IAvatarState) => void",
        },
        text: {
            description: "",
            optional: true,
            TYPE: "string",
        },
        authorImg: {
            description: "",
            optional: true,
            TYPE: "string",
        },
        date: {
            description: "",
            optional: true,
            TYPE: "string",
        },
        authorFullname: {
            description: "",
            optional: true,
            TYPE: "string",
        },
        authorUsername: {
            description: "",
            optional: true,
            TYPE: "string",
        },
    };

    public static contextInsPoints = {
        POST: "TEXT",
    };

    public mount() {
        if (!this.el) this._createElement();
        const {
            img,
            hidden,
            replace,
            tag,
            ctx,
            text,
            authorImg,
            date,
            authorFullname,
            authorUsername,
            color
        } = this.state;

        if (this._prevReplace !== replace) {
            if (this.insrtedTags.has(this.el)) {
                const containerIds = this.insrtedTags.get(this.el);
                for (const containerId of containerIds) {
                    // console.log('container id 1', containerId)
                    const replacedTag = this.replacedTags[containerId];
                    const container = this.article.querySelector(
                        `#${containerId}`
                    );
                    container?.replaceWith(replacedTag);
                }
            }
        }
        this._prevReplace = replace;

        const addMedia = () => {
            if (img) {
                const imgTag = document.createElement("img");
                imgTag.src = img;
                imgTag.style.position = "relative";
                imgTag.style.objectFit = "cover";
                imgTag.style.width = "auto";
                imgTag.style.height = "auto";
                imgTag.style.margin = "inherit";
                if ((this.insPointName = "SUSPENDED")) {
                    imgTag.style.cursor = "pointer";
                }
                return imgTag;
            }
        };
        const addAuthorRetweetImage = () => {
            if (authorImg) {
                const imgAuthorRetweet = document.createElement("img");
                imgAuthorRetweet.src = authorImg;
                imgAuthorRetweet.style.position = "relative";
                imgAuthorRetweet.style.objectFit = "cover";
                imgAuthorRetweet.style.width = "20px";
                imgAuthorRetweet.style.height = "20px";
                imgAuthorRetweet.style.borderRadius = "50%";
                imgAuthorRetweet.style.marginRight = "10px";
                if ((this.insPointName = "SUSPENDED")) {
                    imgAuthorRetweet.style.cursor = "pointer";
                }
                return imgAuthorRetweet;
            }
        };
        const addAuthorRetweetName = () => {
            if (authorFullname) {
                const container = document.createElement("span");
                container.style.position = "inherit";
                container.style.width = "inherit";
                container.style.maxWidth = "max-content";
                container.style.minWidth = "min-content";
                container.style.color = color;
                container.style.background = "inherit";
                container.style.fontSize = "15px";
                container.style.fontWeight = "700";
                container.style.textAlign = "inherit";
                container.style.fontFamily = "TwitterChirp";
                container.style.marginRight = "10px";
                container.textContent = authorFullname;
                return container;
            }
        };
        const addAuthorRetweetUserName = () => {
            if (authorUsername) {
                const container = document.createElement("span");
                container.style.position = "inherit";
                container.style.marginRight = "10px";
                container.style.width = "inherit";
                container.style.maxWidth = "max-content";
                container.style.color = "rgb(83, 100, 113)";
                container.style.background = "inherit";
                container.style.fontSize = "15px";
                container.style.fontWeight = "400";
                container.style.textAlign = "inherit";
                container.style.fontFamily = "TwitterChirp";
                container.textContent = "@" + authorUsername;
                return container;
            }
        };
        const addRetweetDate = () => {
            if (date) {
                const container = document.createElement("span");
                container.style.position = "inherit";
                container.style.width = "inherit";
                container.style.maxWidth = "inherit";
                container.style.color = color;
                container.style.background = "inherit";
                container.style.fontSize = "15px";
                container.style.fontWeight = "400";
                container.style.textAlign = "inherit";
                container.style.fontFamily = "TwitterChirp";
                container.textContent = date;
                return container;
            }
        };

        const addInnerText = () => {
            if (text) {
                const container = document.createElement("div");
                container.style.position = "inherit";
                container.style.width = "inherit";
                container.style.maxWidth = "inherit";
                container.style.color = color;
                container.style.background = "inherit";
                container.style.padding = "10px 0px";
                container.style.fontSize = "inherit";
                container.style.fontWeight = "inherit";
                container.style.textAlign = "inherit";
                container.style.fontFamily = "TwitterChirp";
                container.textContent = text;
                return container;
            }
        };
        const addRecoveredInfo = () => {
            const label = document.createElement("span");
            label.style.display ='inline-block';
            label.style.width ='6px';
            label.style.height ='6px';
            label.style.background = '#D7422E';
            label.style.borderRadius ='50%';
            label.style.marginLeft = '4px';
            label.style.marginBottom = '1px';
                const container = document.createElement("div");
                container.style.position = "inherit";
                container.style.width = "inherit";
                container.style.maxWidth = "inherit";
                container.style.color = '#2F8ECD';
                container.style.background = "inherit";
                container.style.padding = "10px 0px";
                container.style.fontSize = "inherit";
                container.style.fontWeight = "inherit";
                container.style.textAlign = "inherit";
                container.style.fontFamily = "TwitterChirp";
                container.textContent = 'Recovered from IPFS';
                container.appendChild(label)
                return container;
            
        };
        const addRetweetInfo = () => {
            const container = document.createElement("div");
            container.id = `text-${Math.trunc(Math.random() * 1_000_000_000)}`;
            container.style.position = "relative";
            container.style.width = "97%";
            container.style.bottom = "0";
            container.style.zIndex = "50000";
            container.style.marginTop = "12px";
            container.style.display = "flex";
            if (authorImg) container.appendChild(addAuthorRetweetImage());
            if (authorFullname) container.appendChild(addAuthorRetweetName());
            if (authorUsername)
                container.appendChild(addAuthorRetweetUserName());
            if (date) container.appendChild(addRetweetDate());
            return container;
        };

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
            if (authorImg) container.appendChild(addRetweetInfo());
            if (text) container.appendChild(addInnerText());
            if (img) container.appendChild(addMedia());
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
                if (!this.article)
                    this.article = (<HTMLElement>ctx.el).querySelector(
                        ".css-901oao.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0"
                    ).parentElement;
                const tags = ctx.el.querySelectorAll(tag ?? "article");
                if (this.insrtedTags.has(this.el)) {
                    const containerIds = this.insrtedTags.get(this.el);
                    for (const containerId of containerIds) {
                        const container = createBox();
                        const oldContainer = this.article.querySelector(
                            `#${containerId}`
                        );
                        if (!oldContainer) {
                            this.insrtedTags.set(
                                this.el,
                                this.insrtedTags
                                    .get(this.el)
                                    .filter((x) => x !== containerId)
                            );
                            continue;
                        }
                        oldContainer.replaceWith(container);
                        this.insrtedTags.set(this.el, [
                            ...this.insrtedTags.get(this.el),
                            container.id,
                        ]);
                        this.replacedTags[container.id] =
                            this.replacedTags[containerId];
                        delete this.replacedTags[containerId];
                    }
                }
                tags.forEach((link) => {
                    if (link.textContent.includes(replace)) {
                        const container = createBox();
                        if (!this.insrtedTags.has(this.el)) {
                            this.insrtedTags.set(this.el, [container.id]);
                        } else if (
                            !this.insrtedTags
                                .get(this.el)
                                .includes(container.id)
                        ) {
                            this.insrtedTags.set(this.el, [
                                ...this.insrtedTags.get(this.el),
                                container.id,
                            ]);
                        }
                        this.replacedTags[container.id] = link;
                        link.replaceWith(container);
                    }
                });
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
                if (this.insrtedTags.has(this.el)) {
                    const containerIds = this.insrtedTags.get(this.el);
                    for (const containerId of containerIds) {
                        const replacedTag = this.replacedTags[containerId];
                        const container = this.article.querySelector(
                            `#${containerId}`
                        );
                        container?.replaceWith(replacedTag);
                    }
                }
            }
            this.el.innerHTML = "";
        }
    }

    public unmount() {
        if (this.el) {
            if (this.insrtedTags.has(this.el)) {
                const containerIds = this.insrtedTags.get(this.el);
                for (const containerId of containerIds) {
                    const replacedTag = this.replacedTags[containerId];
                    const container = this.article.querySelector(
                        `#${containerId}`
                    );
                    container?.replaceWith(replacedTag);
                }
            }
            this.el.remove();
        }
    }

    private _createElement() {
        this.el = document.createElement("div");
        this.el.classList.add("dapplet-widget-text");
        this.el.addEventListener("click", (e) => {
            this.state.exec?.(this.state.ctx, this.state);
            e.preventDefault();
            return false;
        });
        this.state.init?.(this.state.ctx, this.state);
    }
}
