import { IResolver } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter, T_TwitterActionFactory, ITwitterFeature } from './types';

@Injectable
export default class implements IResolver {
    getBranch() {
        return (!!document.getElementById('react-root')) ? 'new' : 'legacy';
    }
}

export {
    T_TwitterFeatureConfig,
    ITwitterAdapter,
    T_TwitterActionFactory,
    ITwitterFeature
}