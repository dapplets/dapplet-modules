import { IContentAdapter } from '@dapplets/dapplet-extension';
import { IDynamicAdapter } from 'dynamic-adapter.dapplet-base.eth';
import { IButtonState, Button } from './button';
import { IPopupState, Popup } from './popup';
import { StatusLine } from './statusLine';

interface ICommonAdapterConfig {
    events?: { [event: string]: Function },
    BODY?: any[]
}

@Injectable
export default class CommonAdapter implements IContentAdapter<ICommonAdapterConfig> {

    constructor(
        @Inject("dynamic-adapter.dapplet-base.eth")
        private dynamicAdapter: IDynamicAdapter
    ) {
        this.dynamicAdapter.configure(this.config);
    }

    // ToDo: refactor it
    public exports = featureId => ({
        button: this.dynamicAdapter.createWidgetFactory<IButtonState>(Button),
        popup: this.dynamicAdapter.createWidgetFactory<IPopupState>(Popup),
        statusLine: this.statusLine.forFeature(featureId)
    });

    public statusLine = new StatusLine();

    public config = {
        BODY: {
            containerSelector: "html",
            contextSelector: "body > *:nth-last-child(2)",
            insPoints: {
                BODY: {}
            },
            //ToDo: remove any twitter dependencies
            contextBuilder: (node: any) => ({

            }),
        }
    };

    // ToDo: refactor it
    public attachConfig(config: ICommonAdapterConfig, featureId?: string) { // ToDo: automate two-way dependency handling(?)
        return this.dynamicAdapter.attachConfig(config);
    }

    // ToDo: refactor it
    // feature deactivation
    // ToDo: detachConfig uses config and featureId as the key of the feature. Refactor to use only one key.
    public detachConfig(config: ICommonAdapterConfig, featureId?: string) {
        // ToDo: detach statusLine messages
        this.dynamicAdapter.detachConfig(config, featureId);
        this.statusLine.removeAll(featureId);
    }
}
