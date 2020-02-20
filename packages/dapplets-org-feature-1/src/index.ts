import { IFeature } from '@dapplets/dapplet-extension'
//import { } from '@dapplets/common-adapter'
import PICTURE from './picture.png';

@Injectable
export default class Feature implements IFeature {

    @Inject("common-adapter.dapplet-base.eth")
    public adapter: any;
    public config: any;

    constructor() {
        const { button } = this.adapter.widgets;
        this.config = {
            BODY: [
                button({
                    "DEFAULT": {
                        disabled: false,
                        img: PICTURE,
                        label: 'Click me',
                        exec: () => alert('Hello!')
                    }
                })
            ]
        }
    }

    public activate() {
        this.adapter.attachFeature(this);
    }

    public deactivate() {
        this.adapter.detachFeature(this);
    }
}
