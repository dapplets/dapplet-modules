import { IFeature } from '@dapplets/dapplet-extension-types'
import { ITwitterAdapter } from '@dapplets/twitter-adapter/src/types'
import * as GNOSIS_ICON from './gnosis.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;

    constructor() {
        const overlay = Core.overlay('https://examples.dapplets.org', 'Gnosis');
        const twitterService = Core.connect("wss://examples.dapplets.org");

        let { button } = this.adapter.actionFactories;
        this.adapter.addFeature({
            TWEET_SOUTH: [
                button({
                    img: GNOSIS_ICON,
                    init: function (ctx) {
                        const state = this.state;
                        twitterService.subscribe(ctx.id.toString(), (msg) => {
                            if (msg && msg.like_num != undefined) {
                                state.label = msg.like_num.toString();
                            }
                        });
                    },
                    exec: function (ctx) {
                        overlay.open(() => overlay.publish('tweet_select', ctx));
                        overlay.unsubscribe('pm_attach');
                        overlay.subscribe('pm_attach',
                            async ({ market, tweet }) => {
                                console.log('data from overlay recieved', { market, tweet });
                                const result = await Core.sendWalletConnectTx('1', ctx);
                                overlay.publish('tx_created');
                            },
                            SubscribeOptions.SINGLE_THREAD
                        );
                    }
                })
            ],
            TWEET_COMBO: [],
            DM_SOUTH: []
        });
    }
}
