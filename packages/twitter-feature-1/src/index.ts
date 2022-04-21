import { } from '@dapplets/dapplet-extension' // ToDo: import { Core } from '@dapplets/dapplet-extension'
import { ITwitterAdapter } from 'twitter-adapter.dapplet-base.eth'
import GNOSIS_ICON from './gnosis.png'

// const EVENTS_DEF = {
//     TX_SENT: (op: any, m: any) => m.type === "TX_SENT",
//     WC_CONNECT: (op: any, m: any) => m.type === "WC_CONNECT",
//     SWARM_NODE: (op: any, m: any) => m.type === "SWARM_NODE",
//     SWARM_SENT: "SWARM_SENT"
// }

@Injectable
export default class TwitterFeature {

    @Inject("twitter-adapter.dapplet-base.eth")
    public adapter: ITwitterAdapter;

    async activate() {
        if (Core.state === undefined) {
          alert(`
GNOSIS DAPPLET

Download the latest version of Dapplets Extension here:

https://github.com/dapplets/dapplet-extension/releases/latest
          `);
          return;
        }
        const serverUrl = await Core.storage.get('serverUrl');
        const wallet = await Core.wallet({ type: 'ethereum', network: 'goerli' });
        const server = Core.connect({ url: serverUrl }, { pm_num: '' });

        // ToDo: exports in ITwitterAdapter type is function, but in runtime it's object.
        const { button } = this.adapter.exports;

        this.adapter.attachConfig({
            POST: async (ctx) => [
                [{
                    label: 'Attach tweet to prediction market',
                    exec: async (_, me) => {
                        const overlayUrl = await Core.storage.get('overlayUrl');
                        const overlay = Core.overlay({ url: overlayUrl, title: 'Gnosis' });
                        overlay.listen({
                            pm_attach: async () => {
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
                                  overlay.send('tx_created');
                              } catch (err) {
                                  console.error(err);
                                  me.state = 'ERR';
                              }
                            }
                        });
                        overlay.send('tweet_select', ctx);
                    }
                }],
                button({
                    initial: "DEFAULT",
                    "DEFAULT": {
                        label: server.state[ctx.id].pm_num,
                        img: GNOSIS_ICON,
                        loading: false,
                        disabled: false,
                        exec: async (_, me) => {
                            const overlayUrl = await Core.storage.get('overlayUrl');
                            const overlay = Core.overlay({ url: overlayUrl, title: 'Gnosis' });
                            overlay.listen({
                                pm_attach: async () => {
                                    me.state = 'PENDING';
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
                                      // const res = await wallet.request({ method: '1', params: [ctx] });
                                      me.state = 'DEFAULT';
                                      overlay.send('tx_created');
                                    } catch (err) {
                                      console.error(err);
                                      me.state = 'ERR';
                                    }
                                }
                            });
                            overlay.send('tweet_select', ctx);
                        }
                    },
                    "PENDING": {
                        label: 'Pending',
                        loading: true,
                        disabled: true,
                        exec: null,
                    },
                    "ERR": {
                        label: 'Error',
                        loading: false,
                        disabled: false,
                        img: GNOSIS_ICON,
                        exec: (_, me) => me.state = 'DEFAULT'
                    }
                })
            ]
        });
    }

    // async deactivate() {
        
    // }
}