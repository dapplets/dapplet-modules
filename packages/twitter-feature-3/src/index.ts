import { ITwitterAdapter, T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth'
import FAKESTAMP_PIC from './fakeStamp.png'

@Injectable
export default class TwitterFeature {
  public config: T_TwitterFeatureConfig

  constructor(
    @Inject('twitter-adapter.dapplet-base.eth')
    public adapter: ITwitterAdapter
  ) {
    // ToDo: exports in ITwitterAdapter type is function, but in runtime it's object.
    const { picture } = this.adapter.exports
    this.config = {
      POST: () => [
        picture({
          initial: 'DEFAULT',
          DEFAULT: {
            img: FAKESTAMP_PIC,
          },
        }),
      ],
    }

    this.adapter.attachConfig(this.config)
  }
}
