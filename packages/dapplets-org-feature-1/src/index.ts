import { IFeature } from '@dapplets/dapplet-extension'
import CommonAdapter from 'common-adapter.dapplet-base.eth'
import PICTURE from './picture.png';

type Msg = {
    uuid: string;
    type: number;
    text: string;
};

@Injectable
export default class Feature {
    constructor(
        @Inject("common-adapter.dapplet-base.eth")
        commonAdapter: any,

        @Inject("identity-adapter.dapplet-base.eth")
        identityAdapter: any
    ) {
        // ToDo: exports in CommonAdapter type is function, but in runtime it's object.
        const { button, statusLine } = commonAdapter.exports;
        const overlay = Core.overlay({ url: 'https://localhost:8080', title: 'Test' });
        const activeMessageIds = [];

        identityAdapter.attachConfig({
            events: {
                profile_changed: (after, before) => {
                    if (!before || !after || after.authorUsername !== before.authorUsername) {
                        statusLine.removeMessage(activeMessageIds);
                        after && this.getMessages(after.authorUsername).then((messages: Msg[]) => messages.forEach(m => {
                            statusLine.addMessage({
                                uuid: m.uuid, 
                                text: m.text,
                                menu: (m.type === 0) ? () => overlay.send('test', {}) : null
                            });
                            activeMessageIds.push(m.uuid);
                        }));
                    }
                }
            }
        });

        commonAdapter.attachConfig({
            BODY: [
                button({
                    "DEFAULT": {
                        disabled: false,
                        img: PICTURE,
                        label: 'Click me',
                        exec: () => { }
                    }
                })
            ]
        });
    }

    getMessages(p: string): Promise<Msg[]> {
        if (p !== 'Ethernian') return Promise.resolve([]);
        const msgs: Msg[] = [{
            uuid: 'fb99ef73-a43c-41c8-b7de-a0c445729437',
            text: 'I was banned! You can find me at https://google.com',
            type: 0
        }, {
            uuid: 'fb99ef73-a43c-41c8-b7de-a0c445729438',
            text: 'Hello, World!',
            type: 0
        }, {
            uuid: 'fb99ef73-a43c-41c8-b7de-a0c445729439',
            text: 'Message without any menu.',
            type: 1
        }];
        return Promise.resolve(msgs);
    }
}
