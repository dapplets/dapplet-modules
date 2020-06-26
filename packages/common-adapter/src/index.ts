import { IFeature, IContentAdapter} from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { IButtonState, Button } from './button';
import { IPopupState, Popup } from './popup';

interface ICommonAdapterConfig {
    events?: { [event: string]: Function },
    BODY?: any[]
}

@Injectable
export default class CommonAdapter implements IContentAdapter<ICommonAdapterConfig> {

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        private adapter: IDynamicAdapter
    ) {
        this.adapter.configure(this.config);
    }
 
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
        contextType: 'post', // create_tweet | destroy_tweet
        contextEvent: 'POST_EVENT',
        contextBuilder: (node: any) => ({
            
        }),
    }];

    // ToDo: refactor it
    public attachConfig(config: ICommonAdapterConfig): void { // ToDo: automate two-way dependency handling(?)
        this.adapter.attachConfig(config);
    }

    // ToDo: refactor it
    public detachConfig(feature: ICommonAdapterConfig): void {
        this.adapter.detachConfig(feature);
    }
}
 