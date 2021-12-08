import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { ICaptionState, Caption } from './caption';
import { IStickerState, Sticker } from './sticker';
import { ILabelState, Label } from './label';
import { IControlState, Control } from './control';

interface IVideoAdapterConfig {
    events?: { [event: string]: Function },
    VIDEO?: (ctx: any) => any[]
}

@Injectable
export default class VideoAdapter implements IContentAdapter<IVideoAdapterConfig> {

    private _observers = new WeakMap<any, ResizeObserver>();
    private _styleObservers = new WeakMap<any, MutationObserver>();

    constructor(
        @Inject('dynamic-adapter.dapplet-base.eth')
        private dynamicAdapter: IDynamicAdapter<IVideoAdapterConfig>
    ) {
        this.dynamicAdapter.configure(this.config);
    }

    // ToDo: refactor it
    public exports = () => ({
        caption: this.dynamicAdapter.createWidgetFactory<ICaptionState>(Caption),
        sticker: this.dynamicAdapter.createWidgetFactory<IStickerState>(Sticker),
        label: this.dynamicAdapter.createWidgetFactory<ILabelState>(Label),
        control: this.dynamicAdapter.createWidgetFactory<IControlState>(Control),
    });

    public config = {
        VIDEO: {
            containerSelector: 'html',
            contextSelector: 'video',
            insPoints: {
                VIDEO: { insert: 'begin' },
            },
            contextBuilder: (n: HTMLVideoElement, parent: any) => {

                if (!n) return;

                // ToDo: call dispatchEvent of n
                if (!this._observers.has(n)) {
                    const observer = new ResizeObserver(() => {
                        n.dispatchEvent(new CustomEvent('resize'));
                    });
                    observer.observe(n);
                    this._observers.set(n, observer);
                }

                if (!this._styleObservers.has(n)) {
                    const mutationObserver = new MutationObserver(() => {
                        n.dispatchEvent(new CustomEvent('dpp-translate'));
                    })
                    mutationObserver.observe(n, {
                        attributes: true,
                        attributeFilter: ['style'],
                    });
                    this._styleObservers.set(n, mutationObserver);
                }

                let src: string;
                if (!n.src || n.src === '') {
                  if (n.firstElementChild && (<HTMLSourceElement>n.firstElementChild).src) {
                    src = (<HTMLSourceElement>n.firstElementChild).src;
                  } else return;
                } else {
                  src = n.src;
                }
                if (Number.isNaN(n.duration)) return;

                const videoExtensions = ["webm", "mkv", "flv", "vob", "ogv", "ogg", "rrc", "gifv", "mng", "mov", "avi", "qt", "wmv", "yuv", "rm", "asf", "amv", "mp4", "m4p", "m4v", "mpg", "mp2", "mpeg", "mpe", "mpv", "m4v", "svi", "3gp", "3g2", "mxf", "roq", "nsv", "flv", "f4v", "f4p", "f4a", "f4b"];
                const regexResult = /\.(\w{3,4})(?:$|\?|#)/.exec(src)?.[1]?.toLowerCase();
                const regexSwarmResult = /\/bzz\//.exec(src)?.[0]?.toLowerCase();
                const isStableId = (regexResult !== null && videoExtensions.indexOf(regexResult) !== -1) || !!regexSwarmResult;

                if (!isStableId) {
                    Core.contextStarted(['id'], document.location.hostname);
                }

                const obj = {
                    id: !isStableId && parent ? parent.id : src,
                    pause: () => n.pause(),
                    play: () => n.play(),
                    setCurrentTime: (time: number) => n.currentTime = time,
                    onTimeUpdate: (callback) => n.addEventListener('timeupdate', callback),
                    onResize: (callback) => n.addEventListener('resize', callback),
                    onTranslate: (callback) => n.addEventListener('dpp-translate', callback),
                };

                Object.defineProperties(obj, {
                    element: {
                        get: () => n,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    isStableLink: {
                        get: () => isStableId,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    height: {
                        get: () => n.videoHeight,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    width: {
                        get: () => n.videoWidth,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    poster: {
                        get: () => n.poster,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    duration: {
                        get: () => n.duration,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    loop: {
                        get: () => n.loop,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    muted: {
                        get: () => n.muted,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    currentTime: {
                        get: () => n.currentTime,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    src: {
                        get: () => src,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    volume: {
                        get: () => n.volume,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                    paused: {
                        get: () => n.paused,
                        set: (value: number) => value,
                        enumerable: true,
                    },
                });

                return obj;
            },
        },
        RIGHT_CONTROLS: {
          containerSelector: 'html',
          contextSelector: '[data-testid="videoPlayer"] .css-1dbjc4n.r-13awgt0 .css-1dbjc4n.r-1awozwy.r-18u37iz.r-17s6mgv.r-ero68b, .html5-video-player .ytp-right-controls',
          insPoints: {
            RIGHT_CONTROLS: { insert: 'begin' },
          },
          contextBuilder: () => ({
            id: 'RIGHT_CONTROLS'
          }),
        },
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
