import { IFeature } from '@dapplets/dapplet-extension';

@Injectable
export default class TwitterAdapter {

    @Inject("dynamic-adapter.dapplet-base.eth")
    private adapter: IDynamicAdapter;

    // ToDo: refactor it
    public widgets = {
    };

    public config = [];

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