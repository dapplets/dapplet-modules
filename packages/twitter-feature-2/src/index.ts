import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import ETHEREUM_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        const wallet = Core.wallet();
        const server = Core.connect<{ like_num: string }>({ url: "wss://examples.dapplets.org/feature-2" });

        const { button } = this.adapter.widgets;
        this.config = {
            POST_STARTER: [ 
                {
                    label: 'Add tweet to the Ethereum registry',
                    exec: (ctx, me) => {
                        wallet.sendAndListen('1', ctx, {});
                    }
                }
            ],
            POST_SOUTH: [
                button({
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: server.like_num,
                        img: ETHEREUM_ICON,
                        disabled: false,
                        exec: (ctx, me) => { // ToDo: rename exec() to onclick()
                            me.state = 'PENDING';
                            wallet.sendAndListen('1', ctx, {
                                rejected: () => me.state = 'ERR',
                                created: () => me.state = 'DEFAULT'
                            });
                        }
                    },
                    "PENDING": {
                        label: 'Pending',
                        loading: true,
                        disabled: true
                    },
                    "ERR": {
                        label: 'Error',
                        img: ETHEREUM_ICON,
                        exec: (ctx, me) => me.state = 'DEFAULT'
                    }
                })
            ],
            POST_COMBO: [],
            DM_SOUTH: []
        }
    }
}
