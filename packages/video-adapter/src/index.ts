import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { ICaptionState, Caption } from './caption';
import { IStickerState, Sticker } from './sticker';

interface IVideoAdapterConfig {
    events?: { [event: string]: Function },
    VIDEO?: (ctx: any) => any[]
}

@Injectable
export default class VideoAdapter implements IContentAdapter<IVideoAdapterConfig> {

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        private dynamicAdapter: IDynamicAdapter<IVideoAdapterConfig>
    ) {
        this.dynamicAdapter.configure(this.config);
    }

    // ToDo: refactor it
    public exports = featureId => ({
        caption: this.dynamicAdapter.createWidgetFactory<ICaptionState>(Caption),
        sticker: this.dynamicAdapter.createWidgetFactory<IStickerState>(Sticker),
    });

    public config = {
        VIDEO: {
            containerSelector: "html",
            contextSelector: "video",
            insPoints: {
                CAPTION: {},
                STICKER: {},
            },
            contextBuilder: (n: HTMLVideoElement) => ({
                id: n.src,
                element: n,
                height: n.videoHeight,
                width: n.videoWidth,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                poster: n.poster,
                duration: n.duration,
                loop: n.loop,
                muted: n.muted,
                currentTime: n.currentTime,
                src: n.src,
                volume: n.volume,
                paused: n.paused,
                pause: () => n.pause(),
                play: () => n.play(),
                setCurrentTime: (time: number) => n.currentTime = time,
                onTimeUpdate: (callback) => n.addEventListener('timeupdate', callback)
            }),
        }
    };

    // ToDo: refactor it
    public attachConfig(config: IVideoAdapterConfig, featureId?: string) { // ToDo: automate two-way dependency handling(?)
        return this.dynamicAdapter.attachConfig(config);
    }

    // ToDo: refactor it
    // feature deactivation
    // ToDo: detachConfig uses config and featureId as the key of the feature. Refactor to use only one key.
    public detachConfig(config: IVideoAdapterConfig, featureId?: string) {
        // ToDo: detach statusLine messages
        this.dynamicAdapter.detachConfig(config, featureId);
    }
}
