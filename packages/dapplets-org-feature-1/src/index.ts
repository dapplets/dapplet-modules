import { IFeature } from '@dapplets/dapplet-extension'
import CommonAdapter from '@dapplets/common-adapter'
import PICTURE from './picture.png';

@Injectable
export default class Feature {
    constructor(
        @Inject("common-adapter.dapplet-base.eth")
        adapter: CommonAdapter // ToDo: error of class CommonAdapter is included to bundle
    ) {
        const { button, popup } = adapter.widgets;

        adapter.attachConfig({
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
        });
    }
}
