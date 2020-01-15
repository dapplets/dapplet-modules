import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        const likes = Core.connect({ url: "wss://examples.dapplets.org" });
        const { button } = this.adapter.widgets;
        this.config = {
            TWEET_SOUTH: [
                button((ctx, setState, { likes }) => ({
                    "DEFAULT": {
                        label: likes.like_num,
                        img: GNOSIS_ICON,
                        disabled: false,
                        exec: () => {
                            // Core.wallet({ dappletId: '1'}).send(ctx, e => setState(({
                            //     CREATED: "DEFAULT"
                            // })[e.type] || e.type))
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
