import { css } from "lit";

export const styles = css`
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
