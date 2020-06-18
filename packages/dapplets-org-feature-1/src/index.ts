import { IFeature } from '@dapplets/dapplet-extension'
//import { } from '@dapplets/common-adapter'
import PICTURE from './picture.png';

@Injectable
export default class Feature implements IFeature {

    @Inject("common-adapter.dapplet-base.eth")
    public adapter: any;
    public config: any;

    constructor() {
        const { button, popup } = this.adapter.widgets;
        this.config = {
            BODY: [
                button({
                    "DEFAULT": {
                        disabled: false,
                        img: PICTURE,
                        label: 'Click me',
                        exec: () => alert('Hello!')
                    }
                }),
                popup({
                    "DEFAULT": {
                        text: 'I was banned! You can find me at Google https://google.com',
                        img: PICTURE,
                        link: 'https://google.com'
                    }
                })
            ]
        }
    }
}
