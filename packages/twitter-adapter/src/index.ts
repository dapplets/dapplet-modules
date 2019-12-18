import { IResolver } from '@dapplets/dapplet-extension-types';
import { T_TwitterFeatureConfig, ITwitterAdapter } from './types';

@Injectable
export default class implements IResolver {
    getBranch() {
        return (!!document.getElementById('react-root')) ? 'new' : 'legacy';
    }
}

export { 
    T_TwitterFeatureConfig,
    ITwitterAdapter
}