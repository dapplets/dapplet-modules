import { IContentAdapter } from '@dapplets/dapplet-extension'
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth'
import { Caption, ICaptionState } from './caption'
import { Control, IControlState } from './control'
import { ILabelState, Label } from './label'
import { IStickerState, Sticker } from './sticker'

interface IVideoAdapterConfig {
  events?: { [event: string]: Function }
  VIDEO?: (ctx: any) => any[]
}

@Injectable
export default class VideoAdapter implements IContentAdapter<IVideoAdapterConfig> {
  private _observers = new WeakMap<any, ResizeObserver>()
  private _styleObservers = new WeakMap<any, MutationObserver>()
  private _fullscreenHandlerMap = new Map<string, Function>()
  private _fullscreenElementMap = new WeakMap<Element, HTMLElement>()

  constructor(
    @Inject('dynamic-adapter.dapplet-base.eth')
    private dynamicAdapter: IDynamicAdapter<IVideoAdapterConfig>
  ) {
    this.dynamicAdapter.configure(this.config)
  }

  // ToDo: refactor it
  public exports = () => ({
    caption: this.dynamicAdapter.createWidgetFactory<ICaptionState>(Caption),
    sticker: this.dynamicAdapter.createWidgetFactory<IStickerState>(Sticker),
    label: this.dynamicAdapter.createWidgetFactory<ILabelState>(Label),
    control: this.dynamicAdapter.createWidgetFactory<IControlState>(Control),
  })

  public config = {
    VIDEO: {
      containerSelector: 'html',
      contextSelector: 'video',
      insPoints: {
        VIDEO: {
          selector: (n: HTMLElement, refresh: Function, id?: string): HTMLElement => {
            if (this._fullscreenElementMap.has(n)) return this._fullscreenElementMap.get(n)
            const el = getWrapper(n.parentElement, n)
            const fullscreenChangeHandler = () => {
              const isFullscreen = !!document.fullscreenElement
              if (isFullscreen) {
                this._fullscreenElementMap.set(n, <HTMLElement>document.fullscreenElement)
              } else {
                this._fullscreenElementMap.delete(n)
                el.removeEventListener('fullscreenchange', this._fullscreenHandlerMap.get(id))
                this._fullscreenHandlerMap.delete(id)
              }
              refresh()
            }
            this._fullscreenHandlerMap.set(id, fullscreenChangeHandler)
            el.addEventListener('fullscreenchange', fullscreenChangeHandler)
            return el
          },
          insert: 'begin',
        },
      },
      contextBuilder: (n: HTMLVideoElement, parent: any) => {
        if (!n) return

        // ToDo: call dispatchEvent of n
        if (!this._observers.has(n)) {
          const observer = new ResizeObserver(() => {
            n.dispatchEvent(new CustomEvent('resize'))
          })
          observer.observe(n)
          this._observers.set(n, observer)
        }

        if (!this._styleObservers.has(n)) {
          const mutationObserver = new MutationObserver(() => {
            n.dispatchEvent(new CustomEvent('dpp-translate'))
          })
          mutationObserver.observe(n, {
            attributes: true,
            attributeFilter: ['style'],
          })
          this._styleObservers.set(n, mutationObserver)
        }

        let src: string
        if (!n.src || n.src === '') {
          if (n.firstElementChild && (<HTMLSourceElement>n.firstElementChild).src) {
            src = (<HTMLSourceElement>n.firstElementChild).src
          } else return
        } else {
          src = n.src
        }
        if (Number.isNaN(n.duration)) return

        const videoExtensions = [
          'webm',
          'mkv',
          'flv',
          'vob',
          'ogv',
          'ogg',
          'rrc',
          'gifv',
          'mng',
          'mov',
          'avi',
          'qt',
          'wmv',
          'yuv',
          'rm',
          'asf',
          'amv',
          'mp4',
          'm4p',
          'm4v',
          'mpg',
          'mp2',
          'mpeg',
          'mpe',
          'mpv',
          'm4v',
          'svi',
          '3gp',
          '3g2',
          'mxf',
          'roq',
          'nsv',
          'flv',
          'f4v',
          'f4p',
          'f4a',
          'f4b',
        ]
        const regexResult = /\.(\w{3,4})(?:$|\?|#)/.exec(src)?.[1]?.toLowerCase()
        const regexSwarmResult = /\/bzz\/([a-f0-9]{64})\/?$/gm.exec(src)?.[0]
        const regexSiaskyResult = /siasky\.net\/([A-Za-z0-9_-]{46})\/?$/gm.exec(src)?.[0]
        const regexIpfsResult =
          /\/ipfs\/(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})\/?$/gm.exec(
            src
          )?.[0]
        const isStableId =
          (regexResult !== null && videoExtensions.indexOf(regexResult) !== -1) ||
          !!regexSwarmResult ||
          !!regexSiaskyResult ||
          !!regexIpfsResult

        if (!isStableId) {
          Core.contextStarted(['id'], document.location.hostname)
        } else {
          src = src.split('?')[0]
        }

        if (n.parentElement.localName === 'body' && !n.id) {
          const videoWrapper = document.createElement('div')
          videoWrapper.setAttribute('id', 'dp-video-in-body')
          videoWrapper.style.position = 'absolute'
          videoWrapper.style.top = `calc(50% - ${n.videoHeight}px / 2)`
          videoWrapper.style.left = `calc(50% - ${n.videoWidth}px / 2)`
          videoWrapper.style.width = `${n.videoWidth}px`
          videoWrapper.style.height = `${n.videoHeight}px`
          n.style.width = '100%'
          n.style.height = '100%'
          n.setAttribute('controlsList', 'nofullscreen')
          videoWrapper.appendChild(n)
          const fullScreenBtn = createFullscreenButton()
          videoWrapper.appendChild(fullScreenBtn)
          document.body.appendChild(videoWrapper)
          fontLoader({ family: 'Roboto' })
        }
        if (!document.getElementById('dp-video-adapter')) {
          const styleTag: HTMLStyleElement = document.createElement('style')
          styleTag.id = 'dp-video-adapter'
          styleTag.innerText =
            'body:fullscreen #dp-video-in-body{width:100%!important;height:100%!important;top:0!important;left:0!important;}}'
          document.head.appendChild(styleTag)
        }

        const obj = {
          id: !isStableId && parent ? parent.id : src,
          pause: () => n.pause(),
          play: () => n.play(),
          setCurrentTime: (time: number) => (n.currentTime = time),
          onTimeUpdate: (callback) => n.addEventListener('timeupdate', callback),
          onResize: (callback) => n.addEventListener('resize', callback),
          onTranslate: (callback) => n.addEventListener('dpp-translate', callback),
        }

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
        })

        return obj
      },
    },
    RIGHT_CONTROLS: {
      containerSelector: 'html',
      contextSelector:
        '[data-testid="videoPlayer"] .css-1dbjc4n.r-13awgt0 .css-1dbjc4n.r-1awozwy.r-18u37iz.r-17s6mgv.r-ero68b, .html5-video-player .ytp-right-controls',
      insPoints: {
        RIGHT_CONTROLS: { insert: 'begin' },
      },
      contextBuilder: () => ({
        id: 'RIGHT_CONTROLS',
      }),
    },
  }

  // ToDo: refactor it
  public attachConfig(config: IVideoAdapterConfig /*, featureId?: string*/) {
    // ToDo: automate two-way dependency handling(?)
    return this.dynamicAdapter.attachConfig(config)
  }

  // ToDo: refactor it
  // feature deactivation
  // ToDo: detachConfig uses config and featureId as the key of the feature. Refactor to use only one key.
  public detachConfig(config: IVideoAdapterConfig, featureId?: string) {
    // ToDo: detach statusLine messages
    this.dynamicAdapter.detachConfig(config, featureId)
  }
}

const createFullscreenButton = () => {
  const fullScreenBtn = document.createElement('button')
  fullScreenBtn.innerText = 'fullscreen'
  fullScreenBtn.style.position = 'absolute'
  fullScreenBtn.style.top = '30px'
  fullScreenBtn.style.left = '80px'
  fullScreenBtn.style.fontFamily = "'Roboto', sans-serif"
  fullScreenBtn.style.fontSize = '1rem'
  fullScreenBtn.style.fontWeight = '500'
  fullScreenBtn.style.color = 'black'
  fullScreenBtn.style.background = 'white'
  fullScreenBtn.style.border = '1px solid white'
  fullScreenBtn.style.borderRadius = '10px'
  fullScreenBtn.style.padding = '3px 7px'
  fullScreenBtn.style.cursor = 'pointer'
  fullScreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.body.requestFullscreen()
    }
  })
  return fullScreenBtn
}

const fontLoader = (param: { family: string }) => {
  const headID = document.getElementsByTagName('head')[0]

  // link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';

  // <link rel="preconnect" href="https://fonts.googleapis.com">
  // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  // <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">`;

  const linkApis = document.createElement('link')
  linkApis.rel = 'preconnect'
  linkApis.href = 'https://fonts.googleapis.com'
  headID.appendChild(linkApis)

  const linkGstatic = document.createElement('link')
  linkGstatic.rel = 'preconnect'
  linkGstatic.href = 'https://fonts.gstatic.com'
  linkGstatic.setAttribute('crossorigin', '')
  headID.appendChild(linkGstatic)

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href =
    'https://fonts.googleapis.com/css2?family=' + param.family + ':wght@400;500;700&display=swap'
  headID.appendChild(link)
}

const getWrapper = (parent: HTMLElement, el: HTMLElement) => {
  if (parent.offsetWidth !== el.offsetWidth || parent.offsetHeight !== el.offsetHeight) {
    return el
  }
  const grandParent = parent.parentElement
  if (
    grandParent !== null &&
    grandParent.offsetWidth === parent.offsetWidth &&
    grandParent.offsetHeight === parent.offsetHeight
  ) {
    return getWrapper(grandParent, parent)
  } else {
    return el
  }
}
