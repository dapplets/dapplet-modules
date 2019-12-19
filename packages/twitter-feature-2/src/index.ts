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
                likes: Core.connect("wss://examples.dapplets.org"),
                votes: Core.connect("wss://examples.dapplets.org")
            },
            TWEET_SOUTH: [
                //ToDo:
                // 1. on click - change currentState (visible by changing Icon and subscription for label)
                // 2. READY => DEFAULT
                // 3. use Core.sendWalletConnectTx(...)   ()
                button_2((ctx, state, { likes, dapplet }) => ({  //likes -- DataSource Factory for 'likes' subscription 
                    "READY": {
                        label: likes.like_num, 
                        img: GNOSIS_ICON, 
                        disabled: false, 
                        exec: () => {
                            Core.sendWalletConnectTx("1", ctx).bind(state);  //use subscription for state change
                        }
                    },
                    "TX_RUNNING": { label: 'tx', img: GNOSIS_ICON, disabled: true, exec: () => console.log('txrunning clicked') },
                    "ERR": { label: 'err', img: GNOSIS_ICON, disabled: false, exec: () => console.log('err clicked') }
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