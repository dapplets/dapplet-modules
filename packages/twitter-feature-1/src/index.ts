import { IFeature } from '@dapplets/dapplet-extension-types'
import { ITwitterAdapter } from '@dapplets/twitter-adapter/src/types'
import * as GNOSIS_ICON from './gnosis.png'

// ===> Reasoning for the change
// 1) no explicit .addFeature(...) call any more: let the Core handle the feature binding.
// 2) introduce `this.control` - switch the specific instance of the feature dynamically on and off depending on content and external data.
// 3) re-use the same controller for user switch on/off

//  ===> ToDo: 
// 1) ToDo: implement BulkController
// 2) authomatic unsubscribe on context destroyed handled by Core.
// 3) ToDo in code below

//  ===> Use Cases
// 1) An annotation mark (gif or meme) on the side/up/down of the tweet made by one of User's trusted persons. No note - no augmentation at all.
// 2) Community generated Avatar

// ===> Implementation Plan
// 1) implement Core dispatcher connecting Adapter and Feature (making addFeature() calls)
// 2) implement hot switch on/off for user setting switch

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;

    public config: ITwitterFeatureConfig;
    public control: IFeatureControl;

    constructor() {
        const overlay = Core.overlay('https://examples.dapplets.org', 'Gnosis');
        const twitterService = Core.connect("wss://examples.dapplets.org");

        let { button } = this.adapter.actionFactories;

        //ToDo: implement BulkController (which of contexts has the feature)
        //ToDo: re-think control
        let subscriptionId:number;
        this.control = (control, ctxs:any[]) => {
            //only widgets from server are shown
            subscriptionId = twitterService.subscribeBulk(ctxs.map(c=>c.id), (msg)=>control.on(msg.ids), subscriptionId);
            //only widgets with TRUMP inside are shown
            ctxs.filter(c=>c.tweetText.contains("TRUMP")).forEach(c=>control.on(c.id));
        }

        this.config = {
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
()