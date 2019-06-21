import { Widget } from "../common/widget";

interface IButtonState {
    clazz: string;
    img: string;
    label: string;
}

export class Button extends Widget<IButtonState> {

    public mount() {
        const { clazz, img, label } = this.state;        

        const htmlString = `<div class="${clazz} css-1dbjc4n r-1iusvr4 r-18u37iz r-16y2uox r-1h0z5md">
            <div role="button" data-focusable="true" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-bztko3 r-lrvibr">
                <div dir="ltr" class="css-901oao r-1awozwy r-1re7ezh r-6koalj r-1qd0xha r-a023e6 r-16dba41 r-1h0z5md r-ad9z0x r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0">
                    <div class="css-1dbjc4n r-xoduu5">
                        <img height="18" src="${img}" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                        <div class="css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div>
                    </div>
                    ${label ? `<div class="css-1dbjc4n r-xoduu5 r-1udh08x">
                        <span dir="auto" class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-1n0xq6e r-bcqeeo r-d3hbe1 r-1wgg2b2 r-axxi2z r-qvutc0">
                            <span dir="auto" class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">${label}</span>
                        </span>
                    </div>` : ''}
                </div>
            </div>
        </div>`

        if (!this.el) {
            const div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            this.el = <Element>div.lastChild;

            this.el.addEventListener("click", e => {
                this.emit("beforeexec");
            });
        } else {
            this.el.innerHTML = htmlString;
        }
    }
}