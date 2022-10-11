import { IWidget } from 'dynamic-adapter.dapplet-base.eth'

interface IImg {
  main: string
  hover: string
  active: string
}

export interface IControlState {
  img: string | IImg
  width: string
  height?: string
  tooltip?: string
  exec: (ctx: any, me: IControlState) => void
  init: (tx: any, me: IControlState) => void
  ctx: any
  hidden: boolean
}

export class Control implements IWidget<IControlState> {
  public el: HTMLElement
  public state: IControlState
  insPointName: string
  private _stickerId = Math.trunc(Math.random() * 1_000_000_000)

  public static contextInsPoints = {
    RIGHT_CONTROLS: 'RIGHT_CONTROLS',
  }

  public mount() {
    const { img, width = '26px', height, hidden, tooltip } = this.state

    if (!this.el) this._createElement()

    if (hidden) {
      this.el.firstChild?.remove()
      this.el.style.display = 'none'
      return
    }

    this.el.style.removeProperty('display')
    const container = document.createElement('div')
    container.classList.add(`dapplet-label-${this._stickerId}`)
    container.style.width = width
    if (height !== undefined) container.style.height = height

    container.style.margin = '0 5px'

    container.style.touchAction = 'none'
    container.style.userSelect = 'none'
    container.style.boxSizing = 'border-box'
    container.style.cursor = 'pointer'
    container.style.zIndex = '9999'

    const image = document.createElement('img')
    image.style.width = '100%'
    image.style.height = '100%'
    if (typeof img === 'string') {
      image.src = img
    } else {
      image.src = img.main
      image.addEventListener('mouseenter', () => (image.src = img.hover))
      image.addEventListener('mouseleave', () => (image.src = img.main))
      image.addEventListener('mousedown', () => (image.src = img.active))
      image.addEventListener('mouseup', () => (image.src = img.main))
    }
    container.appendChild(image)

    container.addEventListener('click', (e) => {
      e.stopPropagation()
      this.state.exec?.(this.state.ctx, this.state)
      e.preventDefault()
      return false
    })

    this.el.innerHTML = ''
    this.el.appendChild(container)
    this.el.title = tooltip ?? ''
  }

  public unmount() {
    this.el && this.el.remove()
  }

  private _createElement() {
    this.el = document.createElement('div')
    this.el.classList.add('dapplet-widget-video-label')
    if (
      ![...(<any>document.styleSheets)]
        .map((styleSheet) => styleSheet.id)
        .includes('dapplet-widget-video-label-styles')
    ) {
      const styleTag: HTMLStyleElement = document.createElement('style')
      styleTag.id = 'dapplet-widget-video-label-styles'
      styleTag.innerText = `
            .dapplet-widget-video-label {
                display: inline-flex;
                width: 50px;
                height: 100%;
                justify-content: center;
                margin-right: 8px;
                opacity: .9;
            }
            .dapplet-widget-video-label:hover {
                opacity: 1;
                transition: opacity .1s cubic-bezier(0,0,0.2,1);
            }`
      document.head.appendChild(styleTag)
    }
    this.state.init?.(this.state.ctx, this.state)
  }
}
