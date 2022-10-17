import { IWidget } from 'dynamic-adapter.dapplet-base.eth'

export interface IInputState {
  text?: string
  theme?: string
  hidden?: boolean
  exec?: any
  init?: any
  disabled?: boolean
  ctx?: any
  tooltip?: string
  setState: any
}

export class Input implements IWidget<IInputState> {
  public el: HTMLElement
  public state: IInputState
  insPointName: string

  public static contextInsPoints = {
    POST: 'SOUTH',
  }

  public mount() {
    if (!this.el) this._createElement()

    const { text, hidden, tooltip } = this.state

    if (hidden) {
      this.el.innerHTML = ''
      this.el.style.display = 'none'
      return
    } else {
      this.el.style.removeProperty('display')
    }

    if (!this.el.firstChild) {
      const ch = document.createElement('input')
      ch.addEventListener('input', (e: any) => {
        this.state.text = e.target.value
      })

      this.el.appendChild(ch)
    }

    ;(<any>this.el.firstChild).value = text

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
