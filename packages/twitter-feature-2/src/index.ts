import { IFeature } from '@dapplets/dapplet-extension-types'
import { ITwitterAdapter, T_TwitterFeatureConfig } from '@dapplets/twitter-adapter/src/types'
import * as ETHEREUM_ICON from './ethereum.png'


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

enum BTN {
    READY, TX_RUNNING, ERR
}

const STATE = Symbol('state')

let ICON_WAITING, ICON_ERR
let EthTxStatus   = (m)=>({[STATE] : m.status == 'MINED' ? BTN.READY : BTN.ERR}) 
let OverlayStatus = (m)=>({[STATE] : m.status == 'OK' ? BTN.READY : BTN.ERR}) 



@Injectable
export default class TwitterFeature implements IFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;
    public config: T_TwitterFeatureConfig;

    constructor() {
        //ToDo: use Generics for state conversions
        let sendTx = (state, ctx) => Core.sendWalletConnectTx2('1', ctx).map(EthTxStatus)
        let openOverlay = (state, ctx) => Core.overlay('1', ctx).map(OverlayStatus) 

        let { button } = this.adapter.actionFactories();

        this.config = {
            TWEET_SOUTH: [
                button({
                    [button.STATE]: BTN.READY,
                    //ToDo: use state streams for labels
                    [BTN.READY]      : { label:'new',   img: ETHEREUM_ICON,    disabled: false,  exec: sendTx       }, 
                    [BTN.TX_RUNNING] : { label:'tx' ,   img: ICON_WAITING,     disabled: true ,  exec: undefined    }, 
                    [BTN.ERR]        : { label:'err',   img: ICON_ERR,         disabled: false,  exec: openOverlay  },
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