import { IAction, IModule, IView, ID, IFeature, ICore, IContentAdapter } from '@dapplets/dapplet-extension-types'
import { ITwitterAdapter } from '@dapplets/twitter-adapter/src/types'
import * as GNOSIS_ICON from './gnosis.png'

@Injectable
export default class TwitterFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;

    constructor() {
        console.log('Feature-1 created. calling init.');
        this.init();
    }

    public init() {
        const overlay = Core.overlay('https://localhost:8080', 'Gnosis');
        const twitterService = Core.connect("wss://localhost:8080");

        const me = this;
        let { button, menuItem } = this.adapter.actionFactories;
        this.adapter.addFeature({
            TWEET_SOUTH: [
                // call at view creation time
                button({
                    clazz: 'dapplet-tweet-south-metamask',
                    img: GNOSIS_ICON,
                    init: function (ctx) {
                        const state = this.state;
                        twitterService.subscribe(ctx.id, (msg) => {
                            if (msg && msg.like_num != undefined) {
                                state.label = msg.like_num.toString();
                            }
                        });
                    },
                    exec: function (ctx) {
                        overlay.open(() => overlay.publish('tweet_select', ctx));
                        overlay.unsubscribe('pm_attach');
                        overlay.subscribe('pm_attach', async ({ market, tweet }) => {
                            console.log('data from overlay recieved', { market, tweet });
                            const result = await Core.sendWalletConnectTx('1', ctx);
                            overlay.publish('tx_created');
                        }, SubscribeOptions.SINGLE_THREAD);
                    }
                })
            ],
            TWEET_COMBO: [
                // menuItem({
                //     clazz: '',
                //     text: "hello one", 
                //     exec: (ctx:any) => core.sendWalletConnectTx({
                //         id: ctx.tweetId,
                //         author: ctx.authorId
                //     }), 
                //     //ToDo: what about global parameters?
                //     //ToDo: return state object useful bound to button state?
                // })
            ],
            DM_SOUTH: [
                button({
                    clazz: 'dapplet-dm-south-metamask',
                    img: GNOSIS_ICON,
                    exec: (ctx: any) => {
                        alert(JSON.stringify(ctx));
                        // core.sendWalletConnectTx({
                        //     id: ctx.tweetId,
                        //     author: ctx.authorId
                        // })
                    }
                    //ToDo: what about global parameters?
                    //ToDo: return state object useful bound to button state?
                    //label: (ctx:any) => ctx.text //ToDo: implement binding and reload
                })
            ]
        }); //add feature config
    }
}
