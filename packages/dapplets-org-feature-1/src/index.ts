import { IFeature } from '@dapplets/dapplet-extension'
import PICTURE from './picture.png';

@Injectable
export default class Feature {
    @Inject("common-adapter.dapplet-base.eth")
    viewportAdapter: any;

    activate() {
        // ToDo: exports in CommonAdapter type is function, but in runtime it's object.
        const { button, statusLine } = this.viewportAdapter.exports;

        statusLine.addMessage({
            uuid: "0x01", 
            text: "Testing message in status bar.",
            menu: () => alert('Status bar action button clicked')
        });
        
        this.viewportAdapter.attachConfig({
            BODY: () => [
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
