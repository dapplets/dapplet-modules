import { IAction, IModule, IView, ID, IFeature, ICore, IContentAdapter } from '@dapplets/dapplet-extension-types'
import { T_TwitterActionFactory, T_TwitterAdapterConfig, T_TwitterViewSet, Context, T_InsertConfig, ITwitterFeature, IButtonConfig } from '@dapplets/twitter-adapter/src/types'

const ETHEREUM_ICON: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAgCAYAAADwvkPPAAAACXBIWXMAAAsTAAALEwEAmpwYAAADn0lEQVRIiaWWTWxUVRTHf+e+GabfIrXFmGhNIJhIUIhdWKsGEjFRE+JmKEVropIWOqVS2krRAGM0xlBmEGypNSHxI+l0SoILidWdLsREAkSQpPUrcWEwtoSkbVqmM+8eF7STmelMp9Szevd//vd3T/LuO+fBEqKut/PZxv5Gbz6fyWdo6OuoFOzgZLws8L9hcUsIuFtF3/H3dt67bNj2Ux3PgL48tyxz1H6wmF9yJfzhtkLHZ64Aa9MzWjsYCJ+/o8qcAvPWQhCA9PiH/M6SYf6P2x9GOZDjnE2esft3LQkWDAaN49IP5LwKqvL+Kz0Hy/PCRu+ZfA14MhcIAGHVrMy+t1BOifoP31htvZ4RgZWLwuYLVFMdbem+lL0yrye0RBCAiNieYDCYZCQf6nvatyq8lLUEuArMZEnVjFZONqTB/OG2QjX0ZRgTqA6g8ng0EHpEPDwAehhkLO0g5ai//8BdSZjH57yNsmau+jGQd7FOVUFx2etg1+/obf/JxjmMsV+4MbcKpFFgdI5Xadx4EEDqe9rWq5jLoFcVTky48Wi5z1mVSHj2ALtBK1IKcVGNGnG6140VXxmtmHoBtEOhVo1sNFacLaCbB5vD1ajzy0rH90ki4fwFeigDBOAgstNiL49UTAyr2ulIc2izMfYJXPuU+If8jvNv1TYR3afwdLYXkCcuisrR6+MlZ50NW547JNAHPLgMEMB9CP6Sotm4sWJPq5pqkO+XCbuoojUer3vaeF15VIzucgtjflV5EfhtiZAbCE1GprcalR1x19loBlrCX6N6y8ys+FWgylsqmxT2ATdzQCxKb6zk1kNqZcJq0TWLFESbQ8MGwK0o7RLkd0RPxCe54FhGXJ9dCxwHEkmM6A8G85hrnI98UwVREY0AUyumaYeUD73uZOcacewloOz2Rs4ZY/YDqGuPIPrNjRLzZfkkBxV9k9stylWoiQZCFwCSHfPa8PmbG56v/RPBPyetU9XdqiRcj6cL164umuUcsC25TzkSbQkNzjPSukak5diQIv0pkhe0w0kk/haRr0i/Pj/+M16aNmAWNEcbc9vmukRqFGesp9Q1Dd8Fg4lUcQHszP7jM8ayHXQ6MzcfKtIabe3+I1PPOlAie0MjItKcg3U2uufYp9kSOUddpDn0mSCfZ8jXxUMTgt4RDCDBdCClb2Esr0aaQuO5/IvCzgROTVlX64AY6MmBvaFvF/Pn/XGJtoZ/VpU6N6Zd+bz/AdGOYJE0REqSAAAAAElFTkSuQmCC';

@Injectable
export default class TwitterFeature implements ITwitterFeature {

    @Load("twitter-adapter.dapplet-base.eth")
    public adapter: any;

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
                    clazz: 'dapplet-tweet-south-ethereum-2',
                    img: ETHEREUM_ICON,
                    init: function(ctx) {
                    },
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
                    clazz: 'dapplet-dm-south-ethereum-2',
                    img: ETHEREUM_ICON,
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
            ],
        });
    }//init()
}