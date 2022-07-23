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
    src: url(https://abs.twimg.com/fonts/v2/chirp-bold-web.woff) format("woff");
    font-weight: 700;
    font-style: "normal";
    font-display: "swap";
  }

  @font-face {
    font-family: TwitterChirp;
    src: url(https://abs.twimg.com/fonts/v2/chirp-heavy-web.woff2)
      format("woff2");
    src: url(https://abs.twimg.com/fonts/v2/chirp-heavy-web.woff) format("woff");
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
    border-bottom: 0.5px solid rgba(204, 204, 204, 0.3);
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
  .text-dark {
    color: #fff;
    margin: 15px 0px;
  }
  .text-light {
    margin: 15px 0px;
  }
  .text-dark-user-name {
    color: rgb(83, 100, 113);
  }
  .text-light-name {
    font-weight: 700;
    color: #000;
  }
  .text-dark-name {
    font-weight: 700;
    color: #fff;
  }
  .text-light-user-name {
    color: rgb(83, 100, 113);
  }

  .delimeter-profile-info {
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgb(83, 100, 113);
    margin: 0 4px 4px 4px;
  }
  .tweery-lable {
    color: #2f8ecd;
  }
  .tweery-lable-delimeter {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #2f8ecd;
    border-radius: 50%;
    margin-left: 4px;
    margin-bottom: 2px;
  }
`;
