import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import PICTURE from './picture.png';

@Injectable
export default class Feature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        const { button } = this.adapter.widgets;
        this.config = {
            TWEET_SOUTH: [
                button((ctx, setState) => ({
                    "DEFAULT": {
                        disabled: false,
                        img: PICTURE,
                        label: 'Click me',
                        exec: () => alert('Hello!')
                    }
                }))
            ],
            TWEET_COMBO: [],
            DM_SOUTH: []
        }
    }

    public activate() {
        this.adapter.attachFeature(this);
    }

    public deactivate() {
        this.adapter.detachFeature(this);
    }
}
