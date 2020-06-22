import { IFeature } from '@dapplets/dapplet-extension'
import { ITwitterAdapter } from '@dapplets/twitter-adapter'
import OVERLAY_HTML from './overlay.html'

@Injectable
export default class TwitterFeature { // implements IFeature
    private config: any;

    constructor(
        @Inject("identity-adapter.dapplet-base.eth")
        public adapter: ITwitterAdapter
    ) {
        const overlay = Core.overlay({ url: OVERLAY_HTML, title: 'Likes' });
        this.config = {
            events: {
                started: (ctx) => console.log('context started', ctx),
                finished: (ctx) => console.log('context finished', ctx),
                like: (ctx) => (overlay.send('like', ctx), console.log('like', ctx)),
                dislike: (ctx) => (overlay.send('dislike', ctx), console.log('dislike', ctx))
            }
        };

        this.adapter.attachConfig(this.config);
    }
}