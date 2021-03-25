import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth'
import NEAR_ICON from './near.svg';

@Injectable
export default class TwitterFeature {
    public config: T_TwitterFeatureConfig;
    private wallet = Core.wallet();

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: any;

    async activate() {
        
        const contract: any = await Core.near.contract('dev-1615369741028-1922063', {
            viewMethods: ['get'],
            changeMethods: ['add']
        });

        const { button } = this.adapter.exports;
        this.adapter.attachConfig({
            POST_SOUTH: [
                button({
                    "DEFAULT": {
                        img: NEAR_ICON,
                        label: 'NEAR',
                        exec: async () => {

                            const result = await contract.add({ key: '0x0', target: 'test', message: 'test' });
                            console.log(result);
                        }
                    }
                })
            ],
            POST_COMBO: [],
            DM_SOUTH: []
        });
    }
}
