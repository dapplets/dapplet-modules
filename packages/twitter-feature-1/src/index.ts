import { IFeature } from '@dapplets/dapplet-extension' // ToDo: import { Core } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from '@dapplets/twitter-adapter'
import GNOSIS_ICON from './gnosis.png'

const EVENTS_DEF = {
    TX_SENT: (op: any, m: any) => m.type === "TX_SENT",
    WC_CONNECT: (op: any, m: any) => m.type === "WC_CONNECT",
    SWARM_NODE: (op: any, m: any) => m.type === "SWARM_NODE",
    SWARM_SENT: "SWARM_SENT"
}

@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        const overlay = Core.overlay({ url: 'https://localhost:8080', title: 'Gnosis' });
        const wallet = Core.wallet({}, EVENTS_DEF);
        const server = Core.connect<{ pm_num: string }>({ url: "wss://localhost:8080/feature-1" });

        const { button, badge } = this.adapter.widgets;
        this.config = {
            TWEET_SOUTH: [
                button({
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: server.pm_num,
                        img: GNOSIS_ICON,
                        disabled: false,
                        exec: (ctx, me) => { // ToDo: rename exec() to onclick()
                            // me.label = 'abcd'
                            console.log(ctx);
                            //let err = me.setState(me.state == 'DEFAULT'? 'ERR2' : 'DEFAULT')
                            //console.log('err', me.state)
                            //setTimeout(()=>err.label = "ABCD", 1000)
                            /*
                            overlay.sendAndListen('tweet_select', ctx, {
                                'pm_attach': (op, { market, tweet }) => {
                                    console.log('pm_attach', op, { market, tweet });
                                    wallet.sendAndListen('1', ctx, {
                                        rejected: () => me.state = 'ERR',
                                        created: () => {
                                            me.state = 'DEFAULT';
                                            overlay.send('tx_created');
                                        }
                                    });
                                }
                            })
                            */
                        }
                    },
                    "PENDING": {
                        label: 'Pending',
                        loading: true,
                        disabled: true
                    },
                    "ERR": {
                        label: 'Error',
                        img: GNOSIS_ICON,
                        exec: (ctx, me) => me.setState('DEFAULT'),
                        NEXT: "ERR2"
                    },
                    "ERR2": {
                        label: 'Error2',
                        img: GNOSIS_ICON,
                        exec: (ctx, me) => me.setState('DEFAULT')
                    }
                })
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