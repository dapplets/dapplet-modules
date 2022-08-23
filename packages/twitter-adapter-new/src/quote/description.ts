export default {
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