import { IFeature } from '@dapplets/dapplet-extension-types'
import { ITwitterAdapter } from '@dapplets/twitter-adapter/src/types'
import * as ETHEREUM_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;

    constructor() {
        console.log('Feature2: created');
        this.init();
    }

    public init() {
        console.log("feature-2: this.adapter.actionFactories>", this.adapter.actionFactories);
        let { button, menuItem } = this.adapter.actionFactories;
        this.adapter.addFeature({
            TWEET_SOUTH: [
                button({
                    img: ETHEREUM_ICON,
                    exec: async function (ctx) {
                        this.state.label = 'TX';
                        this.state.disabled = true;
                        this.state.loading = true;

                        await Core.sendWalletConnectTx('1', ctx);
                        this.state.label = "NEW";
                        this.state.disabled = false;
                        this.state.loading = false;
                    }, 
                    //ToDo: what about global parameters?
                    //ToDo: return state object useful bound to button state?
                    label: "NEW" //ToDo: implement binding and reload
                })
            ],
            TWEET_COMBO: [         
            ],
            DM_SOUTH: [
            ],
        });
    }//init()
}