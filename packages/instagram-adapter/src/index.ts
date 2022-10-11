import { IFeature } from '@dapplets/dapplet-extension'
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth'
import { AvatarBadge, IBadgeState } from './avatar-badge'
import { Button, IButtonState } from './button'

@Injectable
export default class InstagramAdapter {
  // ToDo: refactor it
  public exports = () => ({
    button: this.adapter.createWidgetFactory<IButtonState>(Button),
    avatarBadge: this.adapter.createWidgetFactory<IBadgeState>(AvatarBadge),
  })

  public config = {
    POST: {
      containerSelector:
        'main > div > section > ._aam1._aam5 > ._ab8w._ab94._abc0._abcm, main > ._aa6b._aa6d > ._aa6e, .x78zum5.xdt5ytf.xg6iff7.x1n2onr6',
      contextSelector: 'article[role="presentation"]',
      insPoints: {
        POST_SOUTH: {
          selector:
            'section._aamu._ae3_ > *:nth-last-child(2), section._aamu._ae3_._ae40._ae41._ae48 > *:nth-last-child(3)',
        },
        POST_AVATAR_BADGE: {
          selector: 'header canvas',
        },
      },
      events: {
        like: (node: any, ctx: any, emit: Function) => {
          const likeBtn = node.querySelector(
            'section._aamu._ae3_._ae47._ae48 svg[class*="_ab6-"]'
          )?.parentElement
          if (!likeBtn) return
          likeBtn.addEventListener('click', () => {
            if (likeBtn.querySelector('svg').getAttribute('class') === '_ab6-') emit(ctx)
          })
        },
        dislike: (node: any, ctx: any, emit: Function) => {
          const likeBtn = node.querySelector(
            'section._aamu._ae3_._ae47._ae48 svg[class*="_ab6-"]'
          )?.parentElement
          if (!likeBtn) return
          likeBtn.addEventListener('click', () => {
            if (likeBtn.querySelector('svg').getAttribute('class') === '_ab6-') emit(ctx)
          })
        },
      },
      // console.log(p.querySelector('div._aagv img').getAttribute('src'))
      contextBuilder: (p: any) => ({
        id: p
          .querySelector('div._aacl._aaco._aacu._aacx._aad6._aade._aaqb a')
          ?.getAttribute('href')
          ?.split('/')[2],
        authorUsername: p.querySelector('header a._acao._acat, a._acao._acat, a._acao._acat')
          ?.innerText,
        authorImg: p.querySelector('header img')?.src,
        location: p.querySelector('div._aaqm a')?.innerText,
        img: p.querySelector('div._aagv img')?.getAttribute('src'),
        text: p.querySelector(
          'span._aacl._aaco._aacu._aacx._aad7._aade > span._aacl._aaco._aacu._aacx._aad7._aade, ul._a9z6._a9za li._a9zj._a9zl._a9z5 span._aacl._aaco._aacu._aacx._aad7._aade'
        )?.innerText,
      }),
    },
    PROFILE: {
      containerSelector: 'main[role=main]',
      contextSelector: 'div > header',
      insPoints: {
        PROFILE_AVATAR_BADGE: {
          selector: 'div.XjzKX > * > *:last-child',
        },
        PROFILE_BUTTON_GROUP: {
          selector: 'div.nZSzR > *:nth-last-child(1)',
          insert: 'begin',
        },
      },
      contextBuilder: (h: any) => ({
        id: h.querySelector('h2')?.innerText,
        authorUsername: h.querySelector('h2')?.innerText,
        authorFullname: h.querySelector('h2')?.innerText,
        authorImg: h.querySelector('img.be6sR')?.getAttribute('src'),
      }),
    },
  }

  constructor(
    @Inject('dynamic-adapter.dapplet-base.eth')
    readonly adapter: IDynamicAdapter<any>
  ) {
    this.adapter.configure(this.config)
  }

  // ToDo: refactor it
  public attachConfig(feature: IFeature) {
    // ToDo: automate two-way dependency handling(?)
    return this.adapter.attachConfig(feature)
  }

  // ToDo: refactor it
  public detachConfig(feature: IFeature) {
    this.adapter.detachConfig(feature)
  }
}
