import {} from '@dapplets/dapplet-extension'
import { IWidget } from 'dynamic-adapter.dapplet-base.eth'
import LEFT_ICON from './icons/caret-left-solid.svg'
import RIGHT_ICON from './icons/caret-right-solid.svg'
import DOTS_ICON from './icons/ellipsis-h-solid.svg'
import EYE_ICON from './icons/eye-slash-solid.svg'
import CLOSE_ICON from './icons/times-solid.svg'

type Message = {
  uuid: string
  text: string
  menu?: Function
  group?: string
}

export interface IStatusLineState {
  exec?: (ctx: any, me: IStatusLineState) => void
  init?: () => void
  ctx?: any
  text?: string
  link?: string
  img?: string
  closed?: boolean
  currentIndex?: number
  messages?: Message[]
  hidden?: boolean
}

export class StatusLineWidget implements IWidget<IStatusLineState> {
  public el: HTMLElement
  public state: IStatusLineState
  public insPointName: string

  public mount() {
    if (!this.el) this._createElement()
    const { closed, currentIndex, hidden, messages: items } = this.state

    if (
      this.state.currentIndex === undefined &&
      this.state.messages &&
      this.state.messages.length > 0
    )
      this.state.currentIndex = this.state.messages.length - 1
    const isNoItems = !this.state.messages || this.state.messages.length === 0

    const htmlString = `<style>
            .dapplet-widget-basic-container { 
                top: 0;
                position: fixed;
                background: #f7ab34;
                width: 100%;
                padding: 8px 0;
                text-align: center;
                z-index: 9999;
            }
            .dapplet-widget-basic-container > div { 
                display: inline-flex;
                max-width: 1280px;
                width: 100%;
                margin: 0 auto;
            }
            .dapplet-widget-basic-container.no-displayed {
                display: none;
            }
            .dapplet-widget-text, .dapplet-widget-text > a, .dapplet-widget-counter {
                color: #000;
                font-family: sans-serif;
                font-weight: bold;
            }
            .dapplet-widget-btn {
                cursor: pointer;
                opacity: 0.8;
                transition: opacity .1s ease;
            }
            .dapplet-widget-btn:hover {
                opacity: 1;               
            }
        </style>
        <div class="dapplet-widget-basic-container ${
          closed || hidden || isNoItems ? 'no-displayed' : 'displayed'
        } ">
            <div>
                <div style="width: 20px; margin-left: 8px;"><img class="dapplet-widget-btn dapplet-widget-btn-left" src=${LEFT_ICON} style="height: 18px;"/></div>
                <div style="width: 40px;" class="dapplet-widget-counter">${currentIndex + 1}/${
      items?.length
    }</div>
                <div style="width: 20px;"><img class="dapplet-widget-btn dapplet-widget-btn-right" src=${RIGHT_ICON} style="height: 18px;"/></div>
                <div style="width: 100%;" class="dapplet-widget-text">${this._linkify(
                  items?.[currentIndex]?.text
                )}</div>
                ${
                  items?.[currentIndex]?.menu
                    ? `<div style="width: 30px;"><img class="dapplet-widget-btn dapplet-widget-btn-dots" src=${DOTS_ICON} style="height: 18px;"/></div>`
                    : ''
                }
                <div style="width: 30px; margin-right: 8px;"><img class="dapplet-widget-btn dapplet-widget-btn-hide" src=${EYE_ICON} style="height: 18px;"/></div>
                <div style="width: 30px; margin-right: 8px;"><img class="dapplet-widget-btn dapplet-widget-btn-close" src=${CLOSE_ICON} style="height: 18px;"/></div>
            </div>
        </div>`

    // <div style="width: 30px;"><img class="dapplet-widget-btn dapplet-widget-btn-menu" src=${MENU_ICON} style="height: 18px;"/></div>

    this.el.innerHTML = htmlString

    this.el
      .getElementsByClassName('dapplet-widget-btn-left')[0]
      ?.addEventListener('click', () => this._onLeftClick())
    this.el
      .getElementsByClassName('dapplet-widget-btn-right')[0]
      ?.addEventListener('click', () => this._onRightClick())
    // this.el.getElementsByClassName('dapplet-widget-btn-menu')[0]?.addEventListener("click", () => this._onMenuClick());
    this.el
      .getElementsByClassName('dapplet-widget-btn-dots')[0]
      ?.addEventListener('click', () => this._onDotsClick())
    this.el
      .getElementsByClassName('dapplet-widget-btn-hide')[0]
      ?.addEventListener('click', () => this._onHideClick())
    this.el
      .getElementsByClassName('dapplet-widget-btn-close')[0]
      ?.addEventListener('click', () => this._onCloseClick())
  }

  public unmount() {
    this.el && this.el.remove()
  }

  private _createElement() {
    this.el = document.createElement('div')
    this.mount()
    this.state.init?.()
  }

  private _onLeftClick() {
    if (this.state.currentIndex > 0) {
      this.state.currentIndex--
    } else {
      this.state.currentIndex = this.state.messages.length - 1
    }
  }

  private _onRightClick() {
    if (this.state.currentIndex < this.state.messages.length - 1) {
      this.state.currentIndex++
    } else {
      this.state.currentIndex = 0
    }
  }

  // private _onMenuClick() {
  //   console.log('menu clicked')
  // }

  private _onDotsClick() {
    const item = this.state.messages[this.state.currentIndex]
    item.menu?.(item)
  }

  private _onHideClick() {
    this.state.hidden = true
    setTimeout(() => (this.state.hidden = false), 3000)
  }

  private async _onCloseClick() {
    const itemToBeRemoved = this.state.messages[this.state.currentIndex]
    this.state.messages = this.state.messages.filter((x) => x !== itemToBeRemoved)
    if (this.state.currentIndex > this.state.messages.length - 1)
      this.state.currentIndex = this.state.messages.length - 1
    const hiddenMessages = (await Core.storage.get('hiddenMessages')) || []
    hiddenMessages.push(itemToBeRemoved.uuid)
    await Core.storage.set('hiddenMessages', hiddenMessages)
  }

  public async addMessage(item: Message) {
    const hiddenMessages = (await Core.storage.get('hiddenMessages')) || []
    if (hiddenMessages.indexOf(item.uuid) !== -1) return
    if (!this.state.messages) this.state.messages = []
    this.state.messages.push(item)
    this.state.currentIndex = this.state.messages.length - 1
    this.mount()
  }

  public removeMessage(messageId: string) {
    if (!this.state.messages || this.state.messages.length === 0) return
    this.state.messages = this.state.messages.filter((x) => x.uuid !== messageId)
    if (this.state.currentIndex > this.state.messages.length - 1)
      this.state.currentIndex = this.state.messages.length - 1
    this.mount()
  }

  private _linkify(str: string) {
    if (!str) return ''
    return str.replace(
      /(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,
      function () {
        return (
          '<a href="' +
          arguments[2] +
          '" target="_blank">' +
          (arguments[7] || arguments[2]) +
          '</a>'
        )
      }
    )
  }
}
