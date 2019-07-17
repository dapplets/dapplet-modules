import { IResolver } from '@dapplets/dapplet-extension-types';

@Injectable
export default class implements IResolver {
    getBranch() {
        return (!!document.getElementById('react-root')) ? 'new' : 'legacy';
    }
}
