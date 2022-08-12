export default {
    img: {
        description:'image as blob',
        optional: true,
        TYPE: 'string',
    },
    video: {
        description:'video as blob',
        optional: true,
        TYPE: 'string',
    },
    text: {
        description:'text label',
        optional: true,
        TYPE: 'string',
    },
    position: {
        description:'position of the text label',
        optional: true,
        TYPE: "'center' | 'top' | 'bottom'",
        default: 'center',
    },
    color: {
        description:'text color',
        optional: true,
        TYPE: 'string',
    },
    textBackground: {
        description:'text background',
        optional: true,
        TYPE: 'string',
    },
    tooltip: {
        description:'text tooltip',
        optional: true,
        TYPE: 'string',
    },
    hidden: {
        description:'hides the widget',
        optional: true,
        TYPE: 'boolean',
    },
    replace: {
        description:'text that should be replaced to the box',
        optional: true,
        TYPE: 'string',
    },
    tag: {
        description:'tag that have the replaced text',
        optional: true,
        TYPE: 'string',
    },
    exec: {
        description:'action on click',
        optional: true,
        TYPE: '(ctx: any, me: IAvatarState) => void',
    },
    init: {
        description:'action through initialisation',
        optional: true,
        TYPE: '(ctx: any, me: IAvatarState) => void',
    },
};
