import { IFeature } from '@dapplets/dapplet-extension-types'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        const { button } = this.adapter.widgets;
        this.config = {
            connections: {
                likes: Core.connect("wss://examples.dapplets.org")
            },
            TWEET_SOUTH: [
                button((ctx, setState, { likes }) => ({
                    "DEFAULT": {
                        label: likes.like_num,
                        img: GNOSIS_ICON,
                        disabled: false,
                        exec: () => {
                            Core.sendWalletConnectTx('1', ctx, e => setState(({
                                CREATED: "DEFAULT"
                            })[e.type] || e.type))
                        }
                    },
                    "PENDING": { label: 'Pending', loading: true, disabled: true },
                    "PAIRING": { label: 'Pairing', loading: true, disabled: true },
                    "REJECTED": { label: 'Error' }
                }))
            ]
        }
    }

    public activate() {
        this.adapter.attachFeature(this);
    }

    public deactivate() {
        this.adapter.detachFeature(this);
    }
}
