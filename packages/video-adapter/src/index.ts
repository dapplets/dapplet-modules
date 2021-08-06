import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { ICaptionState, Caption } from './caption';
import { IStickerState, Sticker } from './sticker';
import { ILabelState, Label } from './label';

interface IVideoAdapterConfig {
    events?: { [event: string]: Function },
    VIDEO?: (ctx: any) => any[]
}

@Injectable
export default class VideoAdapter implements IContentAdapter<IVideoAdapterConfig> {

    private _observers = new WeakMap<any, ResizeObserver>();

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        private dynamicAdapter: IDynamicAdapter<IVideoAdapterConfig>
    ) {
        this.dynamicAdapter.configure(this.config);
    }

    // ToDo: refactor it
    public exports = () => ({
        caption: this.dynamicAdapter.createWidgetFactory<ICaptionState>(Caption),
        sticker: this.dynamicAdapter.createWidgetFactory<IStickerState>(Sticker),
        label: this.dynamicAdapter.createWidgetFactory<ILabelState>(Label),
    });

    public config = {
        VIDEO: {
            containerSelector: "html",
            contextSelector: "video",
            insPoints: {
                CAPTION: {},
                STICKER: {},
                LABEL: {},
            },
            contextBuilder: (n: HTMLVideoElement) => {

                // ToDo: call dispatchEvent of n
                if (!this._observers.has(n)) {
                    const observer = new ResizeObserver(() => {
                        n.dispatchEvent(new CustomEvent('resize'));
                        /*console.log('entries:', entries)
                          for (const entry of entries) {
                              if (entry.contentBoxSize) {
                                  const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                                  n.dispatchEvent(new CustomEvent('resize', { detail: {
                                      width: contentBoxSize.inlineSize,
                                      height: contentBoxSize.blockSize
                                  }}));
                              } else {
                                  n.dispatchEvent(new CustomEvent('resize', { detail: {
                                      width: entry.contentRect.width,
                                      height: entry.contentRect.height
                                  }}));
                              }
                          }*/
                    });
                    observer.observe(n);
                    this._observers.set(n, observer);
                }

                const obj = {
                    id: n.src,
                    pause: () => n.pause(),
                    play: () => n.play(),
                    setCurrentTime: (time: number) => n.currentTime = time,
                    onTimeUpdate: (callback) => n.addEventListener('timeupdate', callback),
                    onResize: (callback) => n.addEventListener('resize', callback)
                };

                Object.defineProperties(obj, {
                    element: { get: () => n },
                    height: { get: () => n.videoHeight },
                    width: { get: () => n.videoWidth },
                    poster: { get: () => n.poster },
                    duration: { get: () => n.duration },
                    loop: { get: () => n.loop },
                    muted: { get: () => n.muted },
                    currentTime: { get: () => n.currentTime },
                    src: { get: () => n.src },
                    volume: { get: () => n.volume },
                    paused: { get: () => n.paused }
                });

                return obj;
            },
        }
    };

    // ToDo: refactor it
    public attachConfig(config: IVideoAdapterConfig/*, featureId?: string*/) { // ToDo: automate two-way dependency handling(?)
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
