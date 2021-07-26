import { IFeature } from '@dapplets/dapplet-extension'
import VideoAdapter from 'video-adapter.dapplet-base.eth'

@Injectable
export default class VideoFeature implements IFeature {

    @Inject("video-adapter.dapplet-base.eth")
    public adapter: any

    activate() {
        const { caption } = this.adapter.exports;
        this.adapter.attachConfig({
            VIDEO: (ctx: any) => [
                caption({
                    "DEFAULT": {
                        text: 'Media Downloader',
                        from: 2051,
                        to: 3620,
                        exec: (ctx) => {
                            console.log(ctx);
                        }
                    }
                })
            ]
        })
    }
}