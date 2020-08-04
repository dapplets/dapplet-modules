import { IFeature } from '@dapplets/dapplet-extension'
import CommonAdapter from 'common-adapter.dapplet-base.eth'
import PICTURE from './picture.png';

@Injectable
export default class Feature {
    constructor(
        @Inject("common-adapter.dapplet-base.eth")
        viewportAdapter: any
    ) {
        // ToDo: exports in CommonAdapter type is function, but in runtime it's object.
        const { button, statusLine } = viewportAdapter.exports;

        statusLine.addMessage({
            uuid: "0x01", 
            text: "Testing message in status bar.",
            menu: () => alert('Status bar action button clicked')
        });

        viewportAdapter.attachConfig({
            BODY: [
                button({
                    "DEFAULT": {
                        disabled: false,
                        img: PICTURE,
                        label: 'Click me',
                        exec: () => alert('Floating button clicked')
                    }
                })
            ]
        });
    }
}
