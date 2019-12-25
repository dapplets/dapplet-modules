import { IFeature } from '@dapplets/dapplet-extension-types'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './gnosis.png'

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        const overlay = Core.overlay('https://examples.dapplets.org', 'Gnosis');

        let { button } = this.adapter.actionFactories;
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
                            overlay.open(() => overlay.publish('tweet_select', ctx));
                            overlay.unsubscribe('pm_attach');
                            overlay.subscribe('pm_attach',
                                async ({ market, tweet }) => {
                                    setState("TX_RUNNING");
                                    Core.sendWalletConnectTx('1', ctx, (e) => {
                                        if (e.type === "CREATED") {
                                            overlay.publish('tx_created');
                                            setState("DEFAULT");
                                        } else if (e.type === "PAIRING") {
                                            setState("PAIRING");
                                        } else if (e.type === "REJECTED") {
                                            setState("ERR");
                                        }
                                    });
                                },
                                SubscribeOptions.SINGLE_THREAD
                            );
                        }
                    },
                    "TX_RUNNING": { 
                        label: 'Pending', 
                        loading: true, 
                        disabled: true 
                    },
                    "PAIRING": { 
                        label: 'Pairing', 
                        loading: true, 
                        disabled: true 
                    },
                    "ERR": {
                        label: 'Error'
                    }
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
