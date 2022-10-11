import {} from '@dapplets/dapplet-extension'
import { ITwitterAdapter, T_TwitterFeatureConfig } from 'twitter-adapter.dapplet-base.eth'
import ETHEREUM_ICON from './ethereum.png'

@Injectable
export default class TwitterFeature {
  public config: T_TwitterFeatureConfig

  @Inject('twitter-adapter.dapplet-base.eth')
  public adapter: ITwitterAdapter

  public async activate() {
    if (Core.state === undefined) {
      alert(`
ETHEREUM CONTRACT EXAMPLE DAPPLET

Download the latest version of Dapplets Extension here:

https://github.com/dapplets/dapplet-extension/releases/latest
            `)
      return
    }
    const wallet = await Core.wallet({ type: 'ethereum', network: 'goerli' })
    const serverUrl = await Core.storage.get('serverUrl')
    const server = Core.connect({ url: serverUrl }, { like_num: '' })

    // ToDo: exports in ITwitterAdapter type is function, but in runtime it's object.
    const { button } = this.adapter.exports
    const { $ } = this.adapter.attachConfig({
      POST: async (ctx) => [
        [
          {
            label: 'Add tweet to the Ethereum registry',
            exec: async () => {
              // try {
              //     if (!(await wallet.isConnected())) {
              //         try {
              //             await wallet.connect();
              //         } catch (err) {
              //             console.error('ERROR connect to wallet:', err)
              //             return;
              //         }
              //     }
              //     wallet.request({ method: '1', params: [ctx] });
              // } catch (err) {
              //     console.error(err);
              // }
            },
          },
        ],
        button({
          id: 'first_button',
          initial: 'DEFAULT',
          DEFAULT: {
            label: server.state[ctx.id].like_num,
            img: ETHEREUM_ICON,
            disabled: false,
            exec: async (_, me) => {
              // ToDo: rename exec() to onclick()
              me.state = 'PENDING'
              try {
                // if (!(await wallet.isConnected())) {
                //     try {
                //         await wallet.connect();
                //     } catch (err) {
                //         console.error('ERROR connect to wallet:', err)
                //         me.state = 'ERR';
                //         return;
                //     }
                // }
                // await wallet.request({ method: '1', params: [ctx] });
                me.state = 'DEFAULT'
              } catch (err) {
                console.error(err)
                me.state = 'ERR'
              }
            },
          },
          PENDING: {
            label: 'Pending',
            loading: true,
            disabled: true,
          },
          ERR: {
            label: 'Error',
            img: ETHEREUM_ICON,
            exec: (_, me) => (me.state = 'DEFAULT'),
          },
        }),
        button({
          id: 'second_button',
          initial: 'DEFAULT',
          DEFAULT: {
            img: ETHEREUM_ICON,
            label: 'LOADING...',
            init: async (_, me) => {
              const counter = (await Core.storage.get(ctx.id)) ?? 0
              me.label = counter
            },
            exec: async (_, me) => {
              let counter = (await Core.storage.get(ctx.id)) ?? 0
              await Core.storage.set(ctx.id, ++counter)
              me.label = counter
              $(ctx, 'first_button').state = 'ERR'
            },
          },
        }),
        button({
          initial: 'ON',
          ON: {
            img: ETHEREUM_ICON,
            label: 'ON',
            exec: async (_, me) => {
              me.label = 'ON2'
              me.newState = 'OFF'
            },
          },
          OFF: {
            img: ETHEREUM_ICON,
            label: 'OFF',
            exec: async (_, me) => {
              me.label = 'OFF2'
              me.setState('ON', true)
            },
          },
        }),
      ],
    })
  }
}
