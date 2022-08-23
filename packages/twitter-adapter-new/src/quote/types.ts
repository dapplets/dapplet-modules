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