import { IFeature } from '@dapplets/dapplet-extension'
import { T_TwitterFeatureConfig, ITwitterAdapter } from 'twitter-adapter.dapplet-base.eth'
import ETHEREUM_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature {
    public config: T_TwitterFeatureConfig;

    @Inject("identity-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;

    public async activate() {
        const { button, avatarBadge } = this.adapter.exports;

        const { $ } = this.adapter.attachConfig({
            POST: () => [
                button({
                    "DEFAULT": {
                        label: 'ETH',
                        img: ETHEREUM_ICON,
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                button({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                avatarBadge({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        horizontal: 'left',
                        vertical: 'top',
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                avatarBadge({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        horizontal: 'right',
                        vertical: 'top',
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                avatarBadge({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        horizontal: 'left',
                        vertical: 'bottom',
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                avatarBadge({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        horizontal: 'right',
                        vertical: 'bottom',
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                })
            ],
            PROFILE: () => [
                button({
                    "DEFAULT": {
                        label: 'ETH',
                        img: ETHEREUM_ICON,
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                button({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                avatarBadge({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        horizontal: 'left',
                        vertical: 'top',
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                avatarBadge({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        horizontal: 'right',
                        vertical: 'top',
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                avatarBadge({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        horizontal: 'left',
                        vertical: 'bottom',
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                }),
                avatarBadge({
                    "DEFAULT": {
                        label: 'TEST',
                        img: ETHEREUM_ICON,
                        horizontal: 'right',
                        vertical: 'bottom',
                        exec: (ctx, me) => {
                            console.log(ctx);
                        }
                    }
                })
            ]
        });
    }
}
