import { IContentAdapter } from '@dapplets/dapplet-extension'

@Injectable
export default class TwitterAdapter implements IContentAdapter<any> {
  public config = {
    VIDEO: {
      containerSelector: '#player',
      contextBuilder: (el: any) => {
        const video = el.querySelector('video')
        if (!video) return
        const url = new URL(video.src)
        return {
          id: url.searchParams.get('driveid'),
        }
      },
    },
  }

  constructor(
    @Inject('dynamic-adapter.dapplet-base.eth')
    readonly adapter: any
  ) {
    this.adapter.configure(this.config)
  }

  public attachConfig(config: any) {
    return this.adapter.attachConfig(config)
  }

  public detachConfig(config: any, featureId?: string): void {
    this.adapter.detachConfig(config, featureId)
  }

  public resetConfig(config: any, newConfig?: any): void {
    this.adapter.resetConfig(config, newConfig ?? config)
  }
}
