import { IFeature } from '@dapplets/dapplet-extension'
import BLACK_IMG from './Black_Icon3.svg'
import MAIN_IMG from './Red_Icon3.svg'
import WHITE_IMG from './White_Icon3.svg'

@Injectable
export default class DemoDapplet implements IFeature {
  @Inject('twitter-config.dapplet-base.eth')
  public adapter: any

  async activate() {
    const { avatarBadge, button } = this.adapter.exports

    this.adapter.attachConfig({
      PROFILE: () => [
        avatarBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            vertical: 'bottom',
            horizontal: 'right',
            img: MAIN_IMG,
            tooltip: 'PROFILE_AVATAR_BADGE',
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            label: 'TEST',
            tooltip: 'PROFILE_BUTTON',
          },
        }),
      ],
      POST: () => [
        avatarBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            vertical: 'bottom',
            horizontal: 'right',
            tooltip: 'POST_AVATAR_BADGE',
            img: { DARK: WHITE_IMG, LIGHT: BLACK_IMG },
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            label: 'TEST',
            img: MAIN_IMG,
            tooltip: 'POST_BUTTON',
          },
        }),
      ],
    })
  }
}
