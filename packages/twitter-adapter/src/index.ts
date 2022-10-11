import { IResolver } from '@dapplets/dapplet-extension'
import {
  ITwitterAdapter,
  ITwitterFeature,
  T_TwitterActionFactory,
  T_TwitterFeatureConfig,
} from './types'

@Injectable
export default class implements IResolver {
  // ToDo: unify interfaces of resolvers and adapters
  getBranch() {
    return document.getElementById('react-root') ? 'new' : 'legacy'
  }
}

export { T_TwitterFeatureConfig, ITwitterAdapter, T_TwitterActionFactory, ITwitterFeature }
