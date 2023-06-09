import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth'
import TwitterAdapter from '.'
import ICON_DAPPLET from './Red_Icon1.svg'

declare let chrome

interface IStarter {
  label: string
  exec: (ctx) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any
  id: number
  dapplet?: string
  order?: number
}

export default class Starter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public config: any
  public widgets: IStarter[] = []
  private _buttonId = 0
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _core: any = Core
  private _overlay = this._core.starterOverlay
    ? this._core.starterOverlay()
    : Core.overlay({ url: 'starter.html', title: 'Starter' }) // ToDo: utilize starterOverlay

  constructor(public adapter: TwitterAdapter) {
    const { buttonStarter } = this.adapter.exports('twitter-adapter.dapplet-base.eth')
    this.config = {
      events: {
        starter: (ctx) => this.openStarter(ctx),
      },
      POST: (ctx) =>
        buttonStarter({
          DEFAULT: {
            img: ICON_DAPPLET,
            exec: () => this.openStarter(ctx),
          },
        }),
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public openStarter(ctx: any) {
    this._overlay.sendAndListen(
      'ctx',
      {
        ctx,
        buttons: this.widgets,
      },
      {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        button_clicked: (op, { _, message }) => {
          const id = message
          const button = this.widgets.find((b) => b.id === id)
          button?.exec?.(ctx)
        },
      }
    )
  }

  public async attachConfig(config: T_TwitterFeatureConfig) {
    if (!config.POST) return

    const postConfigData = config.POST({ id: 'STARTER' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const insert = (configData: any) => {
      const widgets: IStarter[] | false =
        Array.isArray(configData) &&
        configData
          .filter((widget) => Array.isArray(widget))
          .flat()
          .map((starter: { label: string; exec: () => void }) => {
            return { ...starter, config, id: ++this._buttonId }
          })
      if (!widgets) return
      if (this.widgets.length === 0 && widgets.length !== 0) {
        this.adapter.adapter.attachConfig(this.config)
      }
      this.widgets.push(...widgets)
    }

    postConfigData instanceof Promise ? postConfigData.then(insert) : insert(postConfigData)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public detachConfig(config: any) {
    this.widgets = this.widgets.filter((w) => w.config !== config)
    if (this.widgets.length === 0) this.adapter.adapter.detachConfig(this.config)
  }
}
