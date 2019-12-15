import { IFeature } from '@dapplets/dapplet-extension-types'
import { ITwitterAdapter, T_TwitterFeatureConfig } from '@dapplets/twitter-adapter/src/types'
import ETHEREUM_ICON from './ethereum.png'

// 1. Augmentation Server 
//      - connection created with Feature
//      - responsible for any button of the feature
//      - needs ctxID
//      - data transformations?
// 2. Overlay & 3. LongTerm calls (WalletConnect)
//      - connection created on button action
//      - connection dedicated to specific button
//      - needs Context
//      - data transformations?

// Security
// 1. Augmentation Server not audited, but can change any button state? 
// 1.a  Should we restrict the set of changeable properties in state?


//ToDo: use symbols?
enum BTN {
    READY='ready', TX_RUNNING='running', ERR='error'
}

let EthTxStatus   = (m)=>({state : m.status == 'MINED' ? BTN.READY : BTN.ERR}) 
let OverlayStatus = (m)=>({state : m.status == 'OK' ? BTN.READY : BTN.ERR}) 


@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    public contextIds: [];
    public orderIndex: null;

    constructor() {
        //ToDo: use Generics for state conversions
        let sendTx = (state, ctx) => Core.sendWalletConnectTx2('1', ctx).map(EthTxStatus)
        let openOverlay = (state, ctx) => Core.overlay2('1', ctx).map(OverlayStatus) 

        let { button } = this.adapter.actionFactories();
        //ToDo: set standard icons from adaper
        let WAITING_ICON = ETHEREUM_ICON
        let ERROR_ICON = ETHEREUM_ICON

        this.config = {
            TWEET_SOUTH: [
                button({
                    state: BTN.READY,
                    //ToDo: use state streams for labels
                    [BTN.READY]      : { label:'new',   img: ETHEREUM_ICON,    disabled: false,  exec: sendTx       }, 
                    [BTN.TX_RUNNING] : { label:'tx' ,   img: WAITING_ICON,     disabled: true ,  exec: undefined    }, 
                    [BTN.ERR]        : { label:'err',   img: ERROR_ICON,       disabled: false,  exec: openOverlay  },
                })
            ],
            TWEET_COMBO: [],
            DM_SOUTH: []
        };
    }

    public activate() {
        this.adapter.attachFeature(this);
    }

    public deactivate() {
        this.adapter.detachFeature(this);
    }
}