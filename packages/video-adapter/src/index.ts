import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { ICaptionState, Caption } from './caption';

interface ICommonAdapterConfig {
    events?: { [event: string]: Function },
    VIDEO?: (ctx: any) => any[]
}

@Injectable
export default class VideoAdapter implements IContentAdapter<ICommonAdapterConfig> {

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        private dynamicAdapter: IDynamicAdapter<ICommonAdapterConfig>
    ) {
        this.dynamicAdapter.configure(this.config);
    }

    // ToDo: refactor it
    public exports = featureId => ({
        caption: this.dynamicAdapter.createWidgetFactory<ICaptionState>(Caption)
    });

    public config = {
        VIDEO: {
            containerSelector: "html",
            contextSelector: "video",
            insPoints: {
                CAPTION: {}
            },
            contextBuilder: (n: HTMLVideoElement) => ({
                id: n.src,
                height: n.videoHeight,
                width: n.videoWidth,
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
                onTimeUpdate: (callback) => n.ontimeupdate = callback
            }),
        }
    };

    // ToDo: refactor it
    public attachConfig(config: ICommonAdapterConfig, featureId?: string) { // ToDo: automate two-way dependency handling(?)
        return this.dynamicAdapter.attachConfig(config);
    }

    // ToDo: refactor it
    // feature deactivation
    // ToDo: detachConfig uses config and featureId as the key of the feature. Refactor to use only one key.
    public detachConfig(config: ICommonAdapterConfig, featureId?: string) {
        // ToDo: detach statusLine messages
        this.dynamicAdapter.detachConfig(config, featureId);
    }
}
