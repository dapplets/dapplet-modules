import { IFeature } from '@dapplets/dapplet-extension'

type ShareLink = {
  contextId: string
  time: number
}

@Injectable
export default class VideoFeature implements IFeature {
  @Inject('video-adapter.dapplet-base.eth')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public adapter: any

  private sharelink: ShareLink = null

  constructor() {
    Core.onShareLink((x) => (this.sharelink = x))
  }

  activate() {
    const { caption } = this.adapter.exports
    this.adapter.attachConfig({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      VIDEO: () => [
        caption({
          DEFAULT: {
            text: 'Media Downloader',
            from: 2051,
            to: 3620,
            init: (ctx) => {
              if (this.sharelink && ctx.id === this.sharelink.contextId) {
                const { time } = this.sharelink
                ctx.setCurrentTime(time)
                // ToDo: scroll to ctx.element
              }
            },
            exec: (ctx) => {
              const url = `https://twitter.com/ethswarm/status/${ctx.id}`
              const link = Core.createShareLink(url, { contextId: ctx.id, time: ctx.currentTime })
              console.log(link)
            },
          },
        }),
      ],
    })
  }
}
