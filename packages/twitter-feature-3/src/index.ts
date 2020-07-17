import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from 'twitter-adapter.dapplet-base.eth'
import FAKESTAMP_PIC from './fakeStamp.png'

@Injectable
export default class TwitterFeature {
    public config: T_TwitterFeatureConfig;

    constructor(
        @Inject("twitter-adapter.dapplet-base.eth")
        public adapter: any
    ) {
        // ToDo: exports in ITwitterAdapter type is function, but in runtime it's object.
        const { picture } = this.adapter.exports;
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