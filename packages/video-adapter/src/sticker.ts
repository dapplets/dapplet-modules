import { IWidget } from 'dynamic-adapter.dapplet-base.eth'
import interact from 'interactjs'

type IStickerTransformParams = {
  scale: number
  translateX: number
  translateY: number
  rotate: number
  time: number
}

export interface IStickerState {
  stickerId?: number
  img: string
  from?: number
  to?: number
  vertical?: number
  horizontal?: number
  widthCo?: number
  heightCo?: number
  rotated?: number
  opacity?: number
  transform?:
    | string
    | {
        [name: string]: IStickerTransformParams
      }
  mutable?: boolean
  reset?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exec: (ctx: any, me: IStickerState) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  init: (ctx: any, me: IStickerState) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ctx: any
  hidden: boolean
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void
}

export class Sticker implements IWidget<IStickerState> {
  public el: HTMLElement
  public state: IStickerState
  insPointName: string
  private _translationParams: { x: number; y: number; callback: any } // x, y -> %
  private _scale: { factor: number; callback: any }
  private _rotate: { angle: number; callback: any }
  private _coordinates = { x: 0, y: 0 }
  private _stickerId = Math.trunc(Math.random() * 1_000_000_000)
  private _requestAnimationFrameID: number
  private _wasDisabled: boolean
  private _stopPropagationListener = (e: MouseEvent) => {
    e.stopImmediatePropagation()
  }

  public static contextInsPoints = {
    VIDEO: 'VIDEO',
  }

  public mount() {
    const {
      stickerId,
      img,
      from = 0,
      to = Infinity,
      vertical = 50,
      horizontal = 50,
      widthCo = 1,
      heightCo = 1,
      rotated = 0,
      mutable = true,
      opacity = 1,
      transform,
      hidden,
      reset,
      ctx,
      disabled,
    } = this.state

    if (stickerId !== undefined) this._stickerId = stickerId

    if (!this.el) this._createElement(mutable)

    if (reset) {
      this._translationParams.x = 0
      this._translationParams.y = 0
      this._scale.factor = 1
      this._rotate.angle = null
      this._coordinates.x = 0
      this._coordinates.y = 0
    }

    if (!hidden && ctx.currentTime >= from && ctx.currentTime <= to) {
      this.el.style.removeProperty('display')

      const clientWidth = ctx.element.offsetWidth + ctx.element.offsetLeft * 2
      const clientHeight = ctx.element.offsetHeight + ctx.element.offsetTop * 2

      const videoAspectRatio = ctx.width / ctx.height
      const clientAspectRatio = clientWidth / clientHeight

      const size: { x?: number; y?: number } = {}

      if (clientAspectRatio <= videoAspectRatio) {
        const minDimension = videoAspectRatio >= 1 ? clientWidth / videoAspectRatio : clientWidth
        size.x = (widthCo * minDimension) / 5
        size.y = (heightCo * minDimension) / 5
      } else {
        const minDimension = videoAspectRatio >= 1 ? clientHeight : clientHeight * videoAspectRatio
        size.x = (widthCo * minDimension) / 5
        size.y = (heightCo * minDimension) / 5
      }

      if (this.el.firstElementChild === null) {
        const childEl = document.createElement('div')
        childEl.style.position = 'absolute'
        childEl.style.display = 'flex'
        childEl.style.alignItems = 'center'

        childEl.classList.add(`dapplet-sticker-${this._stickerId}`)

        // for .draggable and .resizable
        childEl.style.touchAction = 'none'
        childEl.style.userSelect = 'none'
        childEl.style.boxSizing = 'border-box'

        childEl.style.cursor = 'pointer'

        const imageContainer = document.createElement('div')
        imageContainer.style.zIndex = '99999'
        imageContainer.style.display = 'flex'
        imageContainer.style.width = '100%'
        imageContainer.style.height = '100%'
        imageContainer.style.alignItems = 'center'

        const image = document.createElement('img')
        image.src = img
        image.style.width = '100%'
        imageContainer.appendChild(image)

        if (mutable) {
          childEl.setAttribute('data-angle', String(this._rotate.angle ?? rotated))

          childEl.addEventListener(`drug-sticker-${this._stickerId}`, (e: any) => {
            e.stopPropagation()
            this._translationParams.x += (e.detail.x * 100) / size.x / this._scale.factor
            this._translationParams.y += (e.detail.y * 100) / size.y / this._scale.factor
            e.target.style.transform = setTransform(
              this._scale.factor,
              this._translationParams.x,
              this._translationParams.y,
              this._rotate.angle ?? rotated
            )
            this.state.onChange?.(e)
          })

          childEl.addEventListener(`scale-sticker-${this._stickerId}`, (e: any) => {
            e.stopPropagation()

            const oldTranslationParamX = this._translationParams.x
            const oldTranslationParamY = this._translationParams.y
            const oldScaleCoefX = this._scale.factor
            const oldScaleCoefY = this._scale.factor

            this._scale.factor = e.detail.factor

            this._translationParams.x = (oldTranslationParamX * oldScaleCoefX) / this._scale.factor
            this._translationParams.y = (oldTranslationParamY * oldScaleCoefY) / this._scale.factor

            e.target.style.transform = setTransform(
              this._scale.factor,
              this._translationParams.x,
              this._translationParams.y,
              this._rotate.angle ?? rotated
            )
            this.state.onChange?.(e)
          })

          childEl.addEventListener(`rotate-sticker-${this._stickerId}`, (e: any) => {
            e.stopPropagation()
            console.log(typeof e)
            this._rotate.angle = e.detail.angle
            e.target.style.transform = setTransform(
              this._scale.factor,
              this._translationParams.x,
              this._translationParams.y,
              this._rotate.angle
            )
            this.state.onChange?.(e)
          })

          // add rotate handles
          const rotationHandle1 = document.createElement('div')
          rotationHandle1.classList.add('sticker-rotation-handle')
          rotationHandle1.classList.add(`sticker-rotation-handle-${this._stickerId}`)
          rotationHandle1.classList.add(`srh-first`)
          rotationHandle1.style.top = '75%'
          rotationHandle1.style.left = '75%'

          const rotationHandle2 = document.createElement('div')
          rotationHandle2.classList.add('sticker-rotation-handle')
          rotationHandle2.classList.add(`sticker-rotation-handle-${this._stickerId}`)
          rotationHandle2.classList.add(`srh-second`)
          rotationHandle2.style.top = '-25%'
          rotationHandle2.style.left = '-25%'

          const rotationHandle3 = document.createElement('div')
          rotationHandle3.classList.add('sticker-rotation-handle')
          rotationHandle3.classList.add(`sticker-rotation-handle-${this._stickerId}`)
          rotationHandle3.classList.add(`srh-third`)
          rotationHandle3.style.top = '75%'
          rotationHandle3.style.left = '-25%'

          const rotationHandle4 = document.createElement('div')
          rotationHandle4.classList.add('sticker-rotation-handle')
          rotationHandle4.classList.add(`sticker-rotation-handle-${this._stickerId}`)
          rotationHandle4.classList.add(`srh-fourth`)
          rotationHandle4.style.top = '-25%'
          rotationHandle4.style.left = '75%'

          // container.onclick = () => {
          childEl.style.outline = 'solid #588CA3'
          rotationHandle1.style.display = 'table'
          rotationHandle2.style.display = 'table'
          rotationHandle3.style.display = 'table'
          rotationHandle4.style.display = 'table'
          // };

          childEl.appendChild(rotationHandle1)
          childEl.appendChild(rotationHandle2)
          childEl.appendChild(rotationHandle3)
          childEl.appendChild(rotationHandle4)
        }

        childEl.appendChild(imageContainer)

        childEl.addEventListener('click', (e) => {
          e.stopPropagation()
          this.state.exec?.(this.state.ctx, this.state)
          e.preventDefault()
          return false
        })

        this.el.appendChild(childEl)
      }

      const container = <HTMLElement>this.el.firstElementChild

      if (disabled) {
        container.style.zIndex = '-1'
      } else {
        container.style.zIndex = '9999'
      }

      if (disabled && !this._wasDisabled) {
        ctx.element.removeEventListener('click', this._stopPropagationListener)
        ctx.element.removeEventListener('dblclick', this._stopPropagationListener)
        ctx.element.parentElement.removeEventListener('click', this._stopPropagationListener)
        this._wasDisabled = disabled
      } else if (!disabled && this._wasDisabled) {
        ctx.element.addEventListener('click', this._stopPropagationListener)
        ctx.element.addEventListener('dblclick', this._stopPropagationListener)
        ctx.element.parentElement.addEventListener('click', this._stopPropagationListener)
        this._wasDisabled = disabled
      }

      if (mutable && img) (<HTMLImageElement>container.lastElementChild.firstElementChild).src = img

      container.style.width = `${size.x}px`
      container.style.height = `${size.y}px`

      container.style.opacity = `${opacity}`

      this._coordinates.y =
        videoAspectRatio > clientAspectRatio
          ? (0.01 * vertical - 0.5) * (clientWidth / videoAspectRatio) +
            0.5 * (clientHeight - size.y)
          : 0.01 * vertical * clientHeight - size.y / 2
      this._coordinates.x =
        videoAspectRatio < clientAspectRatio
          ? (0.01 * horizontal - 0.5) * clientHeight * videoAspectRatio + 0.5 * clientWidth
          : 0.01 * horizontal * clientWidth

      container.style.top = `${this._coordinates.y}px`
      container.style.left = `${this._coordinates.x}px`

      if (transform) {
        if (typeof transform === 'string') {
          container.style.transform = transform
        } else {
          const transformSticker = (
            firstTransformPoint: IStickerTransformParams,
            secondTransformPoint?: IStickerTransformParams
          ) => {
            if (secondTransformPoint === undefined) {
              container.style.transform = setTransform(
                firstTransformPoint.scale,
                firstTransformPoint.translateX,
                firstTransformPoint.translateY,
                firstTransformPoint.rotate
              )
              this._scale.factor = firstTransformPoint.scale
              this._translationParams.x = firstTransformPoint.translateX
              this._translationParams.y = firstTransformPoint.translateY
              this._rotate.angle = firstTransformPoint.rotate
            } else {
              const passedTimeFraction =
                (ctx.currentTime - firstTransformPoint.time) /
                (secondTransformPoint.time - firstTransformPoint.time)
              const scale =
                (secondTransformPoint.scale - firstTransformPoint.scale) * passedTimeFraction +
                firstTransformPoint.scale
              const transX =
                (secondTransformPoint.translateX - firstTransformPoint.translateX) *
                  passedTimeFraction +
                firstTransformPoint.translateX
              const transY =
                (secondTransformPoint.translateY - firstTransformPoint.translateY) *
                  passedTimeFraction +
                firstTransformPoint.translateY
              const angle =
                (secondTransformPoint.rotate - firstTransformPoint.rotate) * passedTimeFraction +
                firstTransformPoint.rotate
              container.style.transform = setTransform(scale, transX, transY, angle)
              this._scale.factor = scale
              this._translationParams.x = transX
              this._translationParams.y = transY
              this._rotate.angle = angle
            }
          }

          const sortedTransformPoints = Object.values(transform).sort((a, b) => a.time - b.time)
          if (sortedTransformPoints.length === 1) {
            transformSticker(sortedTransformPoints[0])
          } else if (sortedTransformPoints.length === 2) {
            if (ctx.currentTime <= sortedTransformPoints[0].time) {
              transformSticker(sortedTransformPoints[0])
            } else if (ctx.currentTime >= sortedTransformPoints[1].time) {
              transformSticker(sortedTransformPoints[1])
            } else {
              transformSticker(sortedTransformPoints[0], sortedTransformPoints[1])
            }
          } else {
            if (ctx.currentTime <= sortedTransformPoints[0].time) {
              transformSticker(sortedTransformPoints[0])
            } else if (
              ctx.currentTime >= sortedTransformPoints[sortedTransformPoints.length - 1].time
            ) {
              transformSticker(sortedTransformPoints[sortedTransformPoints.length - 1])
            } else {
              const currentTransformPoint = sortedTransformPoints.find(
                (transformPoint) => transformPoint.time === ctx.currentTime
              )
              if (currentTransformPoint !== undefined) {
                transformSticker(currentTransformPoint)
              } else {
                const nearestNextTransformPoint = sortedTransformPoints.find(
                  (transformPoint) => transformPoint.time > ctx.currentTime
                )
                const nearestPrevTransformPoint = sortedTransformPoints
                  .reverse()
                  .find((transformPoint) => transformPoint.time < ctx.currentTime)
                transformSticker(nearestPrevTransformPoint, nearestNextTransformPoint)
              }
            }
          }

          if (sortedTransformPoints.length > 1) {
            this._requestAnimationFrameID &&
              window.cancelAnimationFrame(this._requestAnimationFrameID)
            this._requestAnimationFrameID = window.requestAnimationFrame(() => this.mount())
          }
        }
      } else {
        container.style.transform = setTransform(
          this._scale.factor,
          this._translationParams.x,
          this._translationParams.y,
          this._rotate.angle ?? rotated
        )
      }
    } else {
      this.el.firstChild?.remove()
      this.el.style.display = 'none'
      return
    }
  }

  public unmount() {
    this.el && this.el.remove()
  }

  private _createElement(mutable: boolean) {
    this.el = document.createElement('div')
    this.el.style.position = 'absolute'
    this.el.style.top = '0'
    this.el.style.bottom = '0'
    this.el.style.right = '0'
    this.el.style.left = '0'
    this.el.style.width = '0'
    this.el.style.height = '0'

    const id = this._stickerId

    this._translationParams = {
      x: 0,
      y: 0,
      callback: mutable
        ? (target, position) =>
            target.dispatchEvent(
              new CustomEvent(`drug-sticker-${id}`, {
                detail: { x: position.x, y: position.y },
              })
            )
        : null,
    }
    this._scale = {
      factor: 1,
      callback: mutable
        ? (target, factor) =>
            target.dispatchEvent(new CustomEvent(`scale-sticker-${id}`, { detail: { factor } }))
        : null,
    }
    this._rotate = {
      angle: null,
      callback: mutable
        ? (target, angle) =>
            target.dispatchEvent(new CustomEvent(`rotate-sticker-${id}`, { detail: { angle } }))
        : null,
    }

    if (mutable) {
      const position = { ...this._translationParams }
      const scale = { ...this._scale }
      const rotate = { ...this._rotate }

      interact(`.dapplet-sticker-${id}`)
        .draggable({
          listeners: {
            move(event) {
              event.stopPropagation()
              position.x = event.dx
              position.y = event.dy
              position.callback(event.target, position)
            },
          },
        })
        .resizable({
          edges: { top: true, left: true, bottom: true, right: true },
          listeners: {
            move: function (event) {
              event.stopPropagation()
              const transform = event.target.style.transform
              const transformParams = transform.match(/[a-z]+\(.+?\)/g)
              const scaleParam =
                transformParams && transformParams.find((x) => /scale\(.*\)/.test(x))
              const oldFactor =
                scaleParam === undefined || scaleParam === null
                  ? 1
                  : +scaleParam.match(/[0-9.]+/)[0]

              const factor =
                oldFactor +
                2 *
                  (event.deltaRect.width === 0
                    ? (event.deltaRect.bottom ? event.deltaRect.bottom : -event.deltaRect.top) /
                      event.target.offsetHeight
                    : (event.deltaRect.right ? event.deltaRect.right : -event.deltaRect.left) /
                      event.target.offsetWidth)

              scale.callback(event.target, factor > 0.3 ? (factor < 4 ? factor : 4) : 0.32)
            },
          },
        })

      interact(`.sticker-rotation-handle-${id}`).draggable({
        onstart: function (event) {
          const box = event.target.parentElement
          const rect = box.getBoundingClientRect()

          // store the center as the element has css `transform-origin: center center`
          box.setAttribute('data-center-x', rect.left + rect.width / 2)
          box.setAttribute('data-center-y', rect.top + rect.height / 2)
          // get the angle of the element when the drag starts
          box.setAttribute('data-angle', getDragAngle(event))
        },
        onmove: function (event) {
          const box = event.target.parentElement
          const angle = getDragAngle(event)
          rotate.callback(box, angle)
        },
        onend: function (event) {
          const box = event.target.parentElement

          // save the angle on dragend
          const x = getDragAngle(event)
          box.setAttribute('data-angle', x)
        },
      })
    }

    function getDragAngle(event) {
      const box = event.target.parentElement
      const startAngle = parseFloat(box.getAttribute('data-angle')) || 0
      const center = {
        x: parseFloat(box.getAttribute('data-center-x')) || 0,
        y: parseFloat(box.getAttribute('data-center-y')) || 0,
      }
      const angle = Math.atan2(center.y - event.clientY, center.x - event.clientX)

      const a = (angle - startAngle) % (2 * Math.PI)
      if (a > 1.5 * Math.PI) return a - 2 * Math.PI
      if (a < -(0.5 * Math.PI)) return a + 2 * Math.PI
      return a
    }

    if (!document.getElementById('sticker-rotation-handle-styles')) {
      const styleTag: HTMLStyleElement = document.createElement('style')
      styleTag.id = 'sticker-rotation-handle-styles'
      styleTag.innerText =
        ".sticker-rotation-handle{display:none;position:absolute;width:50%;height:50%;line-height:1;text-align:center;font-weight:700;color:#fff;cursor:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0MiA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgdHJhbnNmb3JtPSJyb3RhdGUoODAgMjEgMjcpIj4KPHBhdGggZD0iTTQxLjYgMjYuNTI1QzQxLjYgMTkuMTI1IDM3LjYgMTIuMjI1IDMxLjIgOC41MjUwNUMzMC4zIDguMDI1MDUgMjkuMTk5OSA4LjMyNTA1IDI4LjU5OTkgOS4yMjUwNUMyOC4wOTk5IDEwLjEyNSAyOC40IDExLjIyNSAyOS4yOTk5IDExLjgyNUMzNC41OTk5IDE0LjgyNSAzNy44OTk5IDIwLjUyNSAzNy44OTk5IDI2LjYyNUMzNy44OTk5IDM1LjYyNSAzMC44OTk5IDQzLjAyNTEgMjIuMDk5OSA0My42MjVMMjUuMiA0MC41MjVDMjUuOSAzOS44MjUgMjUuOSAzOC42MjUgMjUuMiAzNy45MjVDMjQuNSAzNy4yMjUgMjMuMjk5OSAzNy4yMjUgMjIuNTk5OSAzNy45MjVMMTYuNyA0My44MjVDMTYuMyA0NC4yMjUgMTYuMiA0NC42MjUgMTYuMiA0NS4xMjVDMTYuMiA0NS42MjUgMTYuNCA0Ni4xMjUgMTYuNyA0Ni40MjVMMjIuNTk5OSA1Mi4zMjVDMjIuOTk5OSA1Mi43MjUgMjMuMzk5OSA1Mi44MjUgMjMuODk5OSA1Mi44MjVDMjQuMzk5OSA1Mi44MjUgMjQuOSA1Mi42MjUgMjUuMiA1Mi4zMjVDMjUuOSA1MS42MjUgMjUuOSA1MC40MjUgMjUuMiA0OS43MjVMMjIuNzk5OSA0Ny4zMjVDMzMuMTk5OSA0Ni4yMjUgNDEuNiAzNy4zMjUgNDEuNiAyNi41MjVaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJibGFjayIvPgo8cGF0aCBkPSJNMTYuNSAxNC45MjVDMTYuOSAxNS4zMjUgMTcuMyAxNS40MjUgMTcuOCAxNS40MjVDMTguMyAxNS40MjUgMTguOCAxNS4yMjUgMTkuMSAxNC45MjVMMjUgOS4wMjVDMjUuNCA4LjYyNSAyNS41IDguMjI1IDI1LjUgNy43MjVDMjUuNSA3LjIyNSAyNS4zIDYuNzI1IDI1IDYuNDI1TDE5LjEgMC41MjVDMTguNCAtMC4xNzUgMTcuMiAtMC4xNzUgMTYuNSAwLjUyNUMxNS44IDEuMjI1IDE1LjggMi40MjUgMTYuNSAzLjEyNUwxOS4zIDUuOTI1QzguNSA2LjcyNSAwIDE1LjcyNSAwIDI2LjYyNUMwIDM0LjAyNSA0IDQwLjkyNSAxMC40IDQ0LjYyNUMxMC43IDQ0LjgyNSAxMSA0NC44MjUgMTEuMyA0NC44MjVDMTEuOSA0NC44MjUgMTIuNiA0NC41MjUgMTIuOSA0My45MjVDMTMuNCA0My4wMjUgMTMuMSA0MS45MjUgMTIuMiA0MS4zMjVDNi45IDM4LjMyNSAzLjYgMzIuNjI1IDMuNiAyNi41MjVDMy42IDE3LjcyNSAxMC40IDEwLjQyNSAxOSA5LjYyNUwxNi4zIDEyLjMyNUMxNS44IDEyLjkyNSAxNS44IDE0LjEyNSAxNi41IDE0LjkyNVoiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIi8+CjwvZz4KPC9zdmc+Cg==) 15 15,move!important}.sticker-rotation-handle::after{content:'';position:absolute;width:8%;height:8%;z-index:100000;border:solid #588ca3;background:#fff}.sticker-rotation-handle.srh-first::after{top:40%;left:40%}.sticker-rotation-handle.srh-second::after{bottom:41%;right:41%}.sticker-rotation-handle.srh-third::after{top:40%;right:41%}.sticker-rotation-handle.srh-fourth::after{bottom:41%;left:40%}.dapplet-widget-video-sticker>div:hover{outline:solid #588ca3!important;transition:outline .1s ease-in}"
      document.head.appendChild(styleTag)
    }

    this.el.classList.add('dapplet-widget-video-sticker')
    this.state.ctx.onTimeUpdate(() => this.mount()) // ToDo: check memory leak
    //setInterval(() => this.mount(), 33); // ToDo: check memory leak
    this.state.ctx.onResize(() => this.mount())
    this.state.ctx.onTranslate(() => this.mount())
    this.state.init?.(this.state.ctx, this.state)
  }
}

const setTransform = (factor: number, transX: number, transY: number, angle: number) => {
  return `scale(${factor}) translate(${transX}%, ${transY}%) rotate(${angle}rad)`
}
