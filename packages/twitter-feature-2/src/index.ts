import { IFeature } from '@dapplets/dapplet-extension-types'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        let { button_2 } = this.adapter.actionFactories();
        this.config = {
            connections: {
                likes: Core.connect("wss://examples.dapplets.org")
            },
            TWEET_SOUTH: [
                button_2((ctx, setState, sub) => ({
                    "DEFAULT": { label: sub.likes.like_num, img: GNOSIS_ICON, disabled: false, exec: () => setState("TX_RUNNING") },
                    "TX_RUNNING": { label: 'tx', loading: true, disabled: false, exec: () => setState("ERR") },
                    "ERR": { label: 'err', img: GNOSIS_ICON, disabled: false, exec: () => setState("DEFAULT") }
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
