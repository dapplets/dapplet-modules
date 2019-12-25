import { IFeature } from '@dapplets/dapplet-extension-types'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import FAKESTAMP_PIC from './fakeStamp.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    public contextIds: [];
    public orderIndex: null;

    constructor() {
        const { picture } = this.adapter.widgets;
        this.config = {
            PICTURE: [
                picture(() => ({
                    DEFAULT: {
                        img: FAKESTAMP_PIC
                    }
                }))
            ]
        };
    }

    public activate() {
        this.adapter.attachFeature(this);
    }

    public deactivate() {
        this.adapter.detachFeature(this);
    }
}