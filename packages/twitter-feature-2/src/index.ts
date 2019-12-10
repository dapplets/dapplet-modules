import { IFeature } from '@dapplets/dapplet-extension-types'
import { ITwitterAdapter, T_TwitterFeatureConfig } from '@dapplets/twitter-adapter/src/types'
import * as ETHEREUM_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        let { button } = this.adapter.actionFactories;
        this.config = {
            TWEET_SOUTH: [
                button({
                    img: ETHEREUM_ICON,
                    exec: async function (ctx) {
                        this.state.label = 'TX';
                        this.state.disabled = true;
                        this.state.loading = true;

                        try {
                            await Core.sendWalletConnectTx('1', ctx);
                        } catch (err) {
                            console.error(err);
                            this.state.label = "ERR";
                        } finally {
                            this.state.label = "NEW";
                            this.state.disabled = false;
                            this.state.loading = false;
                        }
                    },
                    label: "NEW"
                })
            ],
            TWEET_COMBO: [],
            DM_SOUTH: []
        };
    }

    public activate(order: number) {
        this.adapter.attachFeature(this, order);
    }

    public deactivate() {
        this.adapter.detachFeature(this);
    }
}