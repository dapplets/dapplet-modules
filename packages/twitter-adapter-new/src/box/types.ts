export enum Position {
  Center = 'center',
  Top = 'top',
  Bottom = 'bottom'
}

export interface IBoxState {
    img?: string
    video?: string
    text?: string
    position?: Position
    width?: string
    color?: string,
    textBackground?: string,
    tag?: string
    replace?: string
    tooltip?: string
    hidden?: boolean
    exec?: (ctx: any, me: IBoxState) => void
    init?: (ctx: any, me: IBoxState) => void
    ctx: any
}
