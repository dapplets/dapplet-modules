import { html } from "lit";

export const loader = html`
    <svg
        width="18px"
        height="18px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        class="lds-rolling"
        style="background: none;"
    >
        <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#1da1f2"
            stroke-width="14"
            r="40"
            stroke-dasharray="188.49555921538757 64.83185307179586"
            transform="rotate(77.5793 50 50)"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
            ></animateTransform>
        </circle>
    </svg>
`;
