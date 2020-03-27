import { IFeature } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from '@dapplets/dynamic-adapter';
import { IButtonState, Button } from './button';
import { IPopupState, Popup } from './popup';


@Injectable
export default class CommonAdapter {

    @Inject("dynamic-adapter.dapplet-base.eth")
    private adapter: IDynamicAdapter;

    // ToDo: refactor it
    public widgets = {
        button: this.adapter.createWidgetFactory<IButtonState>(Button),
        popup: this.adapter.createWidgetFactory<IPopupState>(Popup)
    };

    public config = [{
        containerSelector: "html",
        contextSelector: "body",
        insPoints: {
            BODY: { }
        },
        //ToDo: remove any twitter dependencies
        contextType: 'tweet', // create_tweet | destroy_tweet
        contextEvent: 'TWEET_EVENT',
        contextBuilder: (node: any) => ({
            
        }),
    }];

    // ToDo: refactor it
    constructor() {
        this.adapter.attachConfig(this.config);
    }

    // ToDo: refactor it
    public attachFeature(feature: IFeature): void { // ToDo: automate two-way dependency handling(?)
        this.adapter.attachFeature(feature);
    }

    // ToDo: refactor it
    public detachFeature(feature: IFeature): void {
        this.adapter.detachFeature(feature);
    }
}
 