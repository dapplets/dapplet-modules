import { IFeature } from '@dapplets/dapplet-extension';
import { T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth';
import MAIN_IMG from './Red_Icon3.svg';
import BLACK_IMG from './Black_Icon3.svg';
import WHITE_IMG from './White_Icon3.svg';

const adapterName = 'twitter-adapter.dapplet-base.eth';

@Injectable
export default class DemoDapplet implements IFeature {

  @Inject(adapterName)
  public adapter: any

  private _overlay: any
  private _config: T_TwitterFeatureConfig
  private _adapterDescription: {
    contextsNames: string[]
    widgets?: any
  }

  async activate(): Promise<void> {

    const contextsNames = Object.keys(this.adapter.config);
    //console.log(contextsNames)

    this._adapterDescription = { contextsNames, widgets: {} };
  
    Object.keys(this.adapter.exports).forEach((widgetName) => {
      //console.log('widgetName:', widgetName);
      const contextInsPoints = this.adapter.getContextInsPoints(widgetName);
      //console.log(contextInsPoints);
      const widgetParamsDescription = this.adapter.getWidgetParamsDescription(widgetName)
      //console.log(widgetParamsDescription);
      this._adapterDescription.widgets[widgetName] = { contextInsPoints, widgetParamsDescription };
    })

    if (!this._overlay) {
      this._overlay = Core
        .overlay({ name: 'twitter-demo-overlay', title: 'Twitter Demo' })
        .listen({
          forceOverlay: () => localStorage.setItem('tw-dd-open-force', 'open'),
        });
    }

    this._overlay.onClose(() => console.log('The overlay closed!'))

    try {
      const adapterManifest = await (<any>Core).getManifest(adapterName);
      console.log('adapterManifest', adapterManifest);
    } catch (err) {
      console.log('Core.getManifest has en error:', err);
    }
    
    Core.onAction(() => this.openOverlay());

    if (localStorage.getItem('tw-dd-open-force') === 'open') {
      localStorage.removeItem('tw-dd-open-force');
      this.openOverlay();
    }

    const { avatar, avatarBadge, usernameBadge, label, button, picture, caption, box } = this.adapter.exports;

    /*const config = contextsNames.reduce((acc, value) => ({
      ...acc,
      [value]: async (ctx) => '',
    }), {});*/

    this._config = {
      POST: async (ctx) => [
        {
          QUOTE_POST: async (repostCtx) =>
            button({
              initial: 'DEFAULT',
              DEFAULT: {
                label: 'quote post',
                img: MAIN_IMG,
                exec: () => {
                  console.log('ctx = ', ctx)
                  console.log('repostCtx = ', repostCtx)
                  console.log('parent ctx = ', repostCtx.parent)
                  this.openOverlay();
                },
              },
            }),
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
            img: MAIN_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '0/0', ctx });
            },
          },
        }),
        avatarBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            vertical: 'bottom',
            horizontal: 'right',
            img: { DARK: WHITE_IMG, LIGHT: BLACK_IMG },
            exec: () => {
              console.log('ctx = ', ctx);
              //this.openOverlay({ index: '0/1', ctx });
              Core.overlayManager.unregisterAll();
            },
          },
        }),
        box({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            text: '5,000 NEAR',
            color: 'white',
            textBackground: 'black',
            replace: 'https://test.ltbx.app/',
            exec: (_:any, me: any) => {
              console.log('ctx = ', ctx);
              me.state = 'ANOTHER';
              // this.openOverlay({ index: '0/0', ctx });
            },
          },
          ANOTHER: {
            img: { DARK: WHITE_IMG, LIGHT: BLACK_IMG },
            text: '1,000 NEAR',
            color: 'white',
            textBackground: 'black',
            replace: 'https://test.ltbx.app/',
            exec: (_:any, me: any) => {
              console.log('ctx = ', ctx);
              me.state = 'HIDDEN';
              setTimeout(() => me.state = 'DEFAULT', 2000);
              // this.openOverlay({ index: '0/0', ctx });
            },
          },
          HIDDEN: {
            img: MAIN_IMG,
            text: '5,000 NEAR',
            color: 'white',
            textBackground: 'black',
            replace: 'https://test.ltbx.app/',
            hidden: true,
            exec: (_:any, me: any) => {
              console.log('ctx = ', ctx);
              me.state = 'DEFAULT';
              // this.openOverlay({ index: '0/0', ctx });
            },
          },
        }),
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: { DARK: WHITE_IMG, LIGHT: BLACK_IMG  },
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '0/2', ctx });
            },
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            label: 'button',
            img: MAIN_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '0/3', ctx });
            },
          },
        }),
        label({
          initial: 'DEFAULT',
          DEFAULT: {
            basic: true,
            img: MAIN_IMG,
            text: 'close overlay',
            exec: () => {
              console.log('ctx = ', ctx);
              if (this._overlay.isOpen()) this._overlay.close();
              //this.openOverlay({ index: '0/4', ctx });
            },
          },
        }),
        picture({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '0/5', ctx });
            },
          },
        }),
        caption({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            text: 'caption',
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '0/6', ctx });
            },
          },
        }),
      ],
      PROFILE: async (ctx) => [
        avatar({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '1/0', ctx });
            },
          },
        }),
        avatarBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            vertical: 'bottom',
            horizontal: 'right',
            img: MAIN_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '1/1', ctx });
            },
          },
        }),
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '1/2', ctx });
            },
          },
        }),
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            label: 'LOGIN',
            init: async (_, me) => {
              const existSessions = await Core.sessions();
              console.log('existSessions', existSessions);
              if (existSessions.length !== 0) me.state = 'LOGGED';
            },
            exec: async (_, me) => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '1/3', ctx });

              const existSessions = await Core.sessions();
              console.log('existSessions', existSessions);

              const newSessions = await (<any>Core).login({ authMethods: ['ethereum/goerli'] }, {
                    onLogin: () => console.log('onLogin'),
                    onLogout: () => console.log('onLogout'),
                    // onReject: () => console.log('onReject'),
                    // onSwitch: () => console.log('onSwitch'),
                });
              console.log(newSessions);
              me.state = 'LOGGED';
            },
          },
          LOGGED: {
            img: MAIN_IMG,
            label: 'LOGOUT',
            exec: async (_, me) => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '1/3', ctx });

              const existSessions = await Core.sessions();
              await Promise.all(existSessions.map(x => x.logout()));
              const newExistSessions = await Core.sessions();
              console.log('existSessions', newExistSessions);
              me.state = 'DEFAULT';
            },
          }
        }),
      ],
      HEADING: (ctx) => [
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            exec: async () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '2/0', ctx });
              const newExistSessions = await Core.sessions();
              console.log('existSessions', newExistSessions);
            },
          },
        }),
      ],
      SUSPENDED: (ctx) => [
        avatar({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '3/0', ctx });
            },
          },
        }),
        usernameBadge({
          initial: 'DEFAULT',
          DEFAULT: {
            img: MAIN_IMG,
            exec: () => {
              console.log('ctx = ', ctx);
              this.openOverlay({ index: '3/1', ctx });
            },
          },
        }),
      ],
    };
    this.adapter.attachConfig(this._config);
  }

  openOverlay(props?: any): void {
    this._overlay.send('data', { ...props, adapterDescription: this._adapterDescription });
  }
}
