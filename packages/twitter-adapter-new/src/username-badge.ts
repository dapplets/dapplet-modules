import { IWidget } from 'dynamic-adapter.dapplet-base.eth'

export interface IUsernameBadgeState {
  img: string
  tooltip?: string
  hidden?: boolean
  //label: string;
  //loading: boolean;
  //disabled: boolean;
  exec?: (ctx: any, me: IUsernameBadgeState) => void
  init?: (tx: any, me: IUsernameBadgeState) => void
  ctx: any
  username: string
  insPointName: string
}

export class UsernameBadge implements IWidget<IUsernameBadgeState> {
  public el: HTMLElement
  public state: IUsernameBadgeState
  insPointName: string

  // ToDo
  public static widgetParamsDescription = {
    img: {
      description: 'image as blob',
      optional: false,
      TYPE: 'string',
    },
    tooltip: {
      description: 'text tooltip',
      optional: true,
      TYPE: 'string',
    },
    hidden: {
      description: 'hides the widget',
      optional: true,
      TYPE: 'boolean',
    },
    exec: {
      description: 'action on click',
      optional: true,
      TYPE: '(ctx: any, me: IUsernameBadgeState) => void',
    },
    init: {
      description: 'action through initialisation',
      optional: true,
      TYPE: '(ctx: any, me: IUsernameBadgeState) => void',
    },
  }

  public static contextInsPoints = {
    POST: 'USERNAME_BADGE',
    PROFILE: 'USERNAME_BADGE',
    HEADING: 'USERNAME_BADGE',
    SUSPENDED: 'USERNAME_BADGE',
  }

  public mount() {
    this._injectStyles()
    if (!this.el) this._createElement()

    const { img, hidden, tooltip } = this.state

    if (!hidden) {
      if (!this.el.firstChild) {
        const imgTag = document.createElement('img')
        this.el.appendChild(imgTag)
      }
      const imgTag: HTMLImageElement = this.el.firstChild as any

      switch (this.insPointName) {
        case 'POST':
          imgTag.src = img
          imgTag.style.width = '18px'
          imgTag.style.height = '18px'
          imgTag.style.padding = '0 .5em'
          break

        case 'PROFILE':
        case 'SUSPENDED':
          imgTag.src = img
          imgTag.style.width = '24px'
          imgTag.style.height = '24px'
          imgTag.style.position = 'relative'
          break

        case 'HEADING':
          imgTag.src = img
          imgTag.style.width = '24px'
          imgTag.style.height = '24px'
          imgTag.style.position = 'relative'
          imgTag.style.padding = '0 .7em'
          break
      }

      this.el.title = tooltip ?? ''
    } else {
      this.el.firstChild?.remove()
    }
  }

  public unmount() {
    this.el && this.el.remove()
  }

  private _createElement() {
    switch (this.insPointName) {
      case 'PROFILE':
      case 'SUSPENDED':
        this.el = document.createElement('div')
        this.el.classList.add('dapplet-widget-profile-avatar-badge')
        break

      case 'HEADING':
        this.el = document.createElement('span')
        break

      default:
        this.el = document.createElement('div')
    }

    this.el.addEventListener('click', (e) => {
      this.state.exec?.(this.state.ctx, this.state)
      e.preventDefault()
      return false
    })

    this.el.classList.add('dapplet-widget-badge')
    this.mount()
    this.state.init?.(this.state.ctx, this.state)
  }

  private _injectStyles() {
    if (document.getElementById('dapplet-widget-badge-styles')) return

    const styleTag: HTMLStyleElement = document.createElement('style')
    styleTag.id = 'dapplet-widget-badge-styles'
    styleTag.type = 'text/css'
    styleTag.innerText = `
            .dapplet-widget-badge > img:hover {
                filter: brightness(0.9);
            }

            .dapplet-widget-profile-button:hover {
                background-color: rgba(15, 20, 25, 0.1);
            }

            .dapplet-widget-profile-avatar-badge {
                cursor: pointer;
            }
        `
    document.head.appendChild(styleTag)
  }
}
