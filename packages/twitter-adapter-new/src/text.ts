import { IWidget } from "dynamic-adapter.dapplet-base.eth";

export interface ITextState {
    imgRetweet?: string;
  // video?: string
  text?: string;
  color?: string;
  textBackground?: string;
  tag?: string;
  replace?: string;
  hidden?: boolean;
  //loading?: boolean
  //disabled?: boolean
  exec?: (ctx: any, me: ITextState) => void;
  init?: (ctx: any, me: ITextState) => void;
  ctx: any;
  innerText?: string;
  authorRetweetImage?: string;
  retweetDate?: string;
  authorRetweetName?: string;
  authorRetweetUserName?: string;
  //username: string
  //insPointName: string
}

export class Text implements IWidget<ITextState> {
  public el: HTMLElement;
  public state: ITextState;
  insPointName: string;

  article: HTMLElement;
  replacedTags = <Element>{};
  insrtedTags = new WeakMap<HTMLElement, string[]>();
  private _prevReplace: string;

  // ToDo
  public static widgetParamsDescription = {
    imgRetweet: {
      description: "image as blob",
      optional: true,
      TYPE: "string",
    },
    video: {
      description: "video as blob",
      optional: true,
      TYPE: "string",
    },
    text: {
      description: "text label",
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
    innerText: {
      description: "",
      optional: true,
      TYPE: "string",
    },
    authorRetweetImage: {
      description: "",
      optional: true,
      TYPE: "string",
    },
    retweetDate: {
      description: "",
      optional: true,
      TYPE: "string",
    },
    authorRetweetName: {
      description: "",
      optional: true,
      TYPE: "string",
    },
    authorRetweetUserName: {
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
        imgRetweet,
      // video,
      text,
      color = "black",
      textBackground = "white",
      hidden,
      replace,
      tag,
      ctx,
      innerText,
      authorRetweetImage,
      retweetDate,
      authorRetweetName,
      authorRetweetUserName,
    } = this.state;

    if (this._prevReplace !== replace) {
      if (this.insrtedTags.has(this.el)) {
        const containerIds = this.insrtedTags.get(this.el);
        for (const containerId of containerIds) {
          // console.log('container id 1', containerId)
          const replacedTag = this.replacedTags[containerId];
          const container = this.article.querySelector(`#${containerId}`);
          container?.replaceWith(replacedTag);
        }
      }
    }
    this._prevReplace = replace;

    const addMedia = () => {
      if (imgRetweet) {
        const imgTag = document.createElement("img");
        imgTag.src = imgRetweet;
        imgTag.style.position = "relative";
        imgTag.style.objectFit = "cover";
        imgTag.style.width = "auto";
        imgTag.style.height = "auto";
        imgTag.style.margin = "inherit";
        return imgTag;
      }
    };
    const addAuthorRetweetImage = () => {
        if (authorRetweetImage ) {
           
          const imgAuthorRetweet = document.createElement("img");
          imgAuthorRetweet.src = authorRetweetImage;
          imgAuthorRetweet.style.position = "relative";
          imgAuthorRetweet.style.objectFit = "cover";
          imgAuthorRetweet.style.width = "20px";
          imgAuthorRetweet.style.height = "20px";
          imgAuthorRetweet.style.borderRadius = "50%";
          imgAuthorRetweet.style.marginRight = "10px";
         return imgAuthorRetweet
         
        }
      };
      const addAuthorRetweetName = () => {
        if (authorRetweetName ) {
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
            container.textContent = authorRetweetName;
            return container;
         
        }
      };
      const addAuthorRetweetUserName = () => {
        if (authorRetweetUserName ) {
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
            container.textContent = authorRetweetUserName;
            return container;
         
        }
      };
      const addRetweetDate = () => {
        if (retweetDate ) {
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
            container.textContent = retweetDate;
            return container;
         
        }
      };

    const addInnerText = () => {
      if (innerText) {
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
        container.textContent = innerText;
        return container;
      }
    };
    const addRetweetInfo = () => {
        const container = document.createElement("div");
            container.id = `text-${Math.trunc(Math.random() * 1_000_000_000)}`;
            container.style.position = "relative";
            container.style.width = "97%";
            container.style.bottom = "0";
            container.style.zIndex = "50000";
            container.style.marginTop = '12px';
            container.style.display='flex';
            if(authorRetweetImage) container.appendChild(addAuthorRetweetImage());
          if(authorRetweetName)  container.appendChild(addAuthorRetweetName())
          if (authorRetweetUserName)container.appendChild(addAuthorRetweetUserName())
          if(retweetDate) container.appendChild(addRetweetDate())
            return container;
      };

    const addText = () => {
      const container = document.createElement("div");
      container.style.position = "inherit";
      container.style.width = "inherit";
      container.style.maxWidth = "inherit";
      container.style.left = "50%";
      container.style.transform = "translateX(-50%)";
      // container.style.borderRadius = '10px';
      container.style.color = "inherit";
      container.style.background = "inherit";
      container.style.padding = "10px 0px";
      container.style.fontSize = "inherit";
      container.style.fontWeight = "inherit";
      container.style.textAlign = "inherit";
      container.style.margin = "inherit";
      container.style.fontFamily = "TwitterChirp";
      container.textContent = text;
      return container;
    };

    const createBox = () => {
      const container = document.createElement("div");
      container.id = `text-${Math.trunc(Math.random() * 1_000_000_000)}`;
      container.style.position = "relative";
      container.style.width = "97%";
      container.style.bottom = "0";
      container.style.zIndex = "50000";
      container.style.border = "1px solid #ccc";
      container.style.borderStyle = "1px solid #ccc";
      container.style.borderRadius = "10px";
      // container.style.textAlign = 'center';
      // container.style.marginTop = '12px';
      container.style.margin = "0 auto";
      container.style.paddingLeft = "10px";
    if  (authorRetweetImage ) container.appendChild(addRetweetInfo())
      if (innerText) container.appendChild(addInnerText());
      if (imgRetweet) container.appendChild(addMedia());

      if (text) container.appendChild(addText());
      container.addEventListener("click", (e) => {
        this.state.exec?.(this.state.ctx, this.state);
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
      // if(innerText)container.appendChild(addInnerText());
      // container.addEventListener('click', (e) => {
      //     this.state.exec?.(this.state.ctx, this.state);
      //     e.preventDefault();
      //     e.stopPropagation();
      //     return false;
      // });
      return container;
    };

    if (!hidden) {
      if (replace !== undefined) {
        // console.log('ctx.el', ctx.el)
        if (!this.article)
          this.article = (<HTMLElement>ctx.el).querySelector(
            ".css-901oao.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0"
          ).parentElement;
        const tags = ctx.el.querySelectorAll(tag ?? "article");
        // console.log('tags', tags)
        if (this.insrtedTags.has(this.el)) {
          const containerIds = this.insrtedTags.get(this.el);
          for (const containerId of containerIds) {
            const container = createBox();
            const oldContainer = this.article.querySelector(`#${containerId}`);
            if (!oldContainer) {
              this.insrtedTags.set(
                this.el,
                this.insrtedTags.get(this.el).filter((x) => x !== containerId)
              );
              continue;
            }
            oldContainer.replaceWith(container);
            this.insrtedTags.set(this.el, [
              ...this.insrtedTags.get(this.el),
              container.id,
            ]);
            this.replacedTags[container.id] = this.replacedTags[containerId];
            delete this.replacedTags[containerId];
          }
        }
        tags.forEach((link) => {
          if (link.textContent.includes(replace)) {
            const container = createBox();
            if (!this.insrtedTags.has(this.el)) {
              this.insrtedTags.set(this.el, [container.id]);
            } else if (!this.insrtedTags.get(this.el).includes(container.id)) {
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
        // this.el.style.marginBottom = '22px';
        const retweet = this.el.querySelector(
          ".css-1dbjc4n.r-1ssbvtb.r-1s2bzr4"
        );
        if (retweet) {
          retweet.innerHTML = "";

          // this.el.appendChild(addMedia()) ;
          // if (innerText) retweet.appendChild(addInnerText());
          if (text) retweet.appendChild(addText());
        }
      }
    } else {
      if (replace) {
        if (this.insrtedTags.has(this.el)) {
          const containerIds = this.insrtedTags.get(this.el);
          for (const containerId of containerIds) {
            // console.log('replacedTag',containerId)
            const replacedTag = this.replacedTags[containerId];
            const container = this.article.querySelector(`#${containerId}`);
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
          const container = this.article.querySelector(`#${containerId}`);
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
