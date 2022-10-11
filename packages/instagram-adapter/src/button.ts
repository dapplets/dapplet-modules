import { IWidget } from 'dynamic-adapter.dapplet-base.eth'

export interface IButtonState {
  img: string
  label: string
  loading: boolean
  disabled: boolean
  hidden: boolean
  tooltip?: string
  exec: (ctx: any, me: IButtonState) => void
  init: (ctx: any, me: IButtonState) => void
  ctx: any
  insPointName: string
}

export class Button implements IWidget<IButtonState> {
  public el: HTMLElement
  public state: IButtonState
  insPointName: string

  public static contextInsPoints = {
    POST: 'POST_SOUTH',
    PROFILE: 'PROFILE_BUTTON_GROUP',
  }

  public mount() {
    if (!this.el) this._createElement()

    const { img, label, loading, disabled, hidden, tooltip } = this.state

    if (hidden) {
      this.el.innerHTML = ''
      return
    }

    if (this.insPointName === 'POST') {
      const htmlString = `
                <span class="_15y0l">
                    <button class="wpO6b" type="button" style="align-items: center;background: transparent;border: none;cursor: pointer;display: flex;justify-content: center;padding: 8px;">
                        ${
                          loading
                            ? `<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
                                <circle cx="50" cy="50" fill="none" stroke="#1da1f2" stroke-width="14" r="40" stroke-dasharray="188.49555921538757 64.83185307179586" transform="rotate(77.5793 50 50)">
                                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                                </circle>
                            </svg>`
                            : `<img height="24" src="${img}" />`
                        }
                    </button>
                </span>
            `

      this.el.innerHTML = htmlString
    } else if (this.insPointName === 'PROFILE') {
      const htmlString = `
                <span style="margin-left: 8px;" class="QzzMF Igw0E IwRSH eGOV_ ui_ht bPdm3">
                    <button class="sqdOP L3NKy _8A5w5 ZIAjV">
                        ${
                          img
                            ? `<img style="position: relative; top: 2px; margin-right: 4px;" height="14" src="${img}" />`
                            : ''
                        }
                        ${label}
                    </button>
                </span>
            `

      this.el.innerHTML = htmlString
    }

    this.el.title = tooltip ?? ''
  }

  public unmount() {
    this.el && this.el.remove()
  }

  private _createElement() {
    this.el = document.createElement('div')
    this.el.addEventListener('click', () => {
      if (!this.state.disabled) {
        this.state.exec?.(this.state.ctx, this.state)
      }
    })
    this.mount()
    this.state.init?.(this.state.ctx, this.state)
  }
}
