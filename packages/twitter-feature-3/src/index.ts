import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from 'twitter-adapter.dapplet-base.eth'
import FAKESTAMP_PIC from './fakeStamp.png'

@Injectable
export default class TwitterFeature {
    public config: T_TwitterFeatureConfig;

    constructor(
        @Inject("twitter-adapter.dapplet-base.eth")
        public adapter: ITwitterAdapter
    ) {
        const { picture } = this.adapter.widgets;
        this.config = {
            POST_PICTURE: [
                picture({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        img: FAKESTAMP_PIC
                    }
                })
            ]
        };

        this.adapter.attachConfig(this.config);
    }
}