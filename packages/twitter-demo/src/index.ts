import { IFeature } from '@dapplets/dapplet-extension';
import { T_TwitterFeatureConfig, ITwitterAdapter } from 'twitter-adapter.dapplet-base.eth';
import EXAMPLE_IMG from './icon19.png';
import DARK from './icon19_dark.png';
import LIGHT from './icon19_light.png';
import BIG_IMG from './icon64.png';
import BOY from './uzumaki-v.jpeg';

@Injectable
export default class TwitterDemo implements IFeature {

  @Inject('twitter-adapter.dapplet-base.eth')
  public adapter: any;

  private _overlay: any;
  private _config: any;

  async activate(): Promise<void> {

    if (!this._overlay) {
      this._overlay = Core
        .overlay({ name: 'twitter-demo-overlay', title: 'Twitter Demo' })
        .listen({
          forceOverlay: () => localStorage.setItem('tw-dd-open-force', 'open'),
        });
    }
    
    Core.onAction(() => this.openOverlay());

    if (localStorage.getItem('tw-dd-open-force') === 'open') {
      localStorage.removeItem('tw-dd-open-force');
      //(() => this.openOverlay())();
      this.openOverlay();
    }

    const { avatar, avatarBadge, usernameBadge, label, button, picture, caption } = this.adapter.exports;

    /*const config2 = {
      POST: async (ctx) => [
        avatar({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BOY,
          },
        }),
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: { DARK, LIGHT },
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        avatarBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            vertical: 'bottom',
            horizontal: 'right',
            img: { DARK, LIGHT },
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        label({
          initial: 'DEFAULT',
          DEFAULT: {
            basic: true,
            img: EXAMPLE_IMG,
            text: 'label',
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
      ],
      PROFILE: async (ctx) => [
        avatar({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BOY,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        avatarBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            vertical: 'bottom',
            horizontal: 'right',
            img: BIG_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
            label: 'button#1',
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
            label: 'button#2',
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
      ],
    };*/

    this._config = {
      POST: async (ctx) => [
        {
          QUOTE_POST: async (repostCtx) => [
            button({
              initial: 'DEFAULT',
              DEFAULT: {
                label: 'repost',
                img: EXAMPLE_IMG,
                exec: () => {
                  console.log('ctx = ', ctx)
                  console.log('repostCtx = ', repostCtx)
                  console.log('parent ctx = ', repostCtx.parent)
                  this.openOverlay();
                },
              },
            }),
            button({
              initial: 'DEFAULT',
              DEFAULT: {
                label: 'repost#2',
                img: EXAMPLE_IMG,
                exec: () => {
                  console.log('ctx = ', ctx)
                  console.log('repostCtx = ', repostCtx)
                  console.log('parent ctx = ', repostCtx.parent)
                  this.openOverlay();
                },
              },
            }),
          ]
        },
        [
          {
            label: 'Add tweet to the Ethereum registry',
            exec: (ctx) => {
              console.log('ctx1 = ', ctx);
              this.openOverlay();
            },
          },
          {
            label: 'Add tweet to the NEAR registry',
            exec: (ctx) => {
              console.log('ctx2 = ', ctx);
              this.openOverlay();
            },
          },
          {
            label: 'Add tweet to the Swarm',
            exec: (ctx) => {
              console.log('ctx3 = ', ctx);
              this.openOverlay();
            },
          },
        ],
        avatar({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BOY,
          },
        }),
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: { DARK, LIGHT },
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        avatarBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            vertical: 'bottom',
            horizontal: 'right',
            img: { DARK, LIGHT },
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            label: 'button',
            img: EXAMPLE_IMG,
            exec: () => {
              $(ctx, 'pic').hidden = !$(ctx, 'pic').hidden;
            },
          },
        }),
        label({
          initial: 'DEFAULT',
          DEFAULT: {
            basic: true,
            img: EXAMPLE_IMG,
            text: 'label',
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        picture({
          id: 'pic',
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
          },
        }),
        caption({
          initial: 'DEFAULT',
          DEFAULT: {
            img: EXAMPLE_IMG,
            text: 'caption',
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
      ],
      PROFILE: async (ctx) => [
        avatar({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BOY,
            exec: () => {
              this.openOverlay({ index: '0/0' });
            },
          },
        }),
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        avatarBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            vertical: 'bottom',
            horizontal: 'right',
            img: BIG_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
            label: 'button#1',
            exec: () => {
              console.log('this.config = ', this._config);
              //console.log('Reset to config2')
              //this.adapter.resetConfig(this._config, config2);
            },
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
            label: 'button#2',
            exec: () => {
              console.log('this.config = ', this._config);
              //console.log('Reset to config2')
              //this.adapter.resetConfig(this._config, config2);
            },
          },
        }),
      ],
      HEADING: (ctx) => [
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '2/0' });
            },
          },
        }),
      ],
      SUSPENDED: (ctx) => [
        avatar({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BOY,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: BIG_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay();
            },
          },
        }),
      ],
    };
    const { $ } = this.adapter.attachConfig(this._config);
  }

  openOverlay(props?: any): void {
    this._overlay.send('data', props);
  }
}
