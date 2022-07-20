import { css } from "lit";

export const styles = css`
    @font-face {
        font-family: TwitterChirp;
        src: url(https://abs.twimg.com/fonts/v2/chirp-regular-web.woff2)
            format("woff2");
        src: url(https://abs.twimg.com/fonts/v2/chirp-regular-web.woff)
            format("woff");
        font-weight: 400;
        font-style: "normal";
        font-display: "swap";
    }

    @font-face {
        font-family: TwitterChirp;
        src: url(https://abs.twimg.com/fonts/v2/chirp-medium-web.woff2)
            format("woff2");
        src: url(https://abs.twimg.com/fonts/v2/chirp-medium-web.woff)
            format("woff");
        font-weight: 500;
        font-style: "normal";
        font-display: "swap";
    }

    @font-face {
        font-family: TwitterChirp;
        src: url(https://abs.twimg.com/fonts/v2/chirp-bold-web.woff2)
            format("woff2");
        src: url(https://abs.twimg.com/fonts/v2/chirp-bold-web.woff)
            format("woff");
        font-weight: 700;
        font-style: "normal";
        font-display: "swap";
    }

    @font-face {
        font-family: TwitterChirp;
        src: url(https://abs.twimg.com/fonts/v2/chirp-heavy-web.woff2)
            format("woff2");
        src: url(https://abs.twimg.com/fonts/v2/chirp-heavy-web.woff)
            format("woff");
        font-weight: 800;
        font-style: "normal";
        font-display: "swap";
    }

    :host {
        overflow: hidden;
    }

    .post {
        padding: 12px 16px;
        cursor: pointer;
        border-bottom: 1px solid #eff3f4;
        transition-property: background-color, box-shadow;
        transition-duration: 0.2s;
        display: flex;
        font-family: TwitterChirp;
    }

    .post:hover {
        background: rgba(0, 0, 0, 0.03);
    }

    .avatar-container {
        flex-basis: 48px;
    }

    .avatar-container > img {
        width: 48px;
        height: 48px;
        margin-right: 12px;
        border-radius: 24px;
    }

    .text-container {
    }
`;
