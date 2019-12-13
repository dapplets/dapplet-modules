import { IFeature } from '@dapplets/dapplet-extension-types'
import { ITwitterAdapter, T_TwitterFeatureConfig } from '@dapplets/twitter-adapter/src/types'
import FAKESTAMP_PIC from './fakeStamp.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    public contextIds: [];
    public orderIndex: null;

    constructor() {
        let { picture } = this.adapter.actionFactories;
        this.config = {
            PICTURE: [
                picture({
                    img: FAKESTAMP_PIC
                })
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