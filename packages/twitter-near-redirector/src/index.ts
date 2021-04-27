import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth'
import NEAR_ICON from './near.png';

@Injectable
export default class TwitterFeature {
    public config: T_TwitterFeatureConfig;

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: any;

    async activate() {
        const contract: any = Core.contract('near', 'dev-1615369741028-1922063', { viewMethods: ['get'], changeMethods: ['add'] });

        const { button } = this.adapter.exports;
        this.adapter.attachConfig({
            POST_SOUTH: [
                button({
                    "DEFAULT": {
                        loading: true,
                        init: async (ctx, me) => {
                            const url = `https://twitter.com/${ctx.authorUsername}/status/${ctx.id}`;
                            const hash = Core.utils.keccak256(Core.utils.toUtf8Bytes(url));
                            const redirections = await contract.get({ key: hash });
                            if (redirections.length > 0) {
                                me.state = 'HAS_REDIRECT';
                            } else {
                                me.state = 'NO_REDIRECT';
                            }
                        }
                    },
                    "HAS_REDIRECT": {
                        img: NEAR_ICON,
                        label: 'Redirect',
                        exec: async (ctx) => {
                            const url = `https://twitter.com/${ctx.authorUsername}/status/${ctx.id}`;
                            const hash = Core.utils.keccak256(Core.utils.toUtf8Bytes(url));
                            const redirections = await contract.get({ key: hash });
                            if (redirections.length === 0) return;
                            const { targetURL, message } = redirections[0];

                            if (confirm(`Redirect to ${targetURL}?\nMessage: ${message}`)) {
                                window.location = targetURL;
                            }
                        }
                    },
                    "NO_REDIRECT": {
                        img: NEAR_ICON,
                        label: 'Create',
                        exec: async (ctx, me) => {
                            const url = `https://twitter.com/${ctx.authorUsername}/status/${ctx.id}`;
                            const target = prompt(`You are creating a redirect from ${url}\nEnter a target URL:`);
                            if (!target) return;
                            const message = prompt(`Enter a message:`);

                            if (target) {
                                const hash = Core.utils.keccak256(Core.utils.toUtf8Bytes(url));
                                await contract.add({ key: hash, target: target, message: message ?? '' });
                                me.state = 'HAS_REDIRECT';
                                alert('Redirect created.')
                            }
                        }
                    }
                })
            ]
        });
    }
}
