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
        commonAdapter: CommonAdapter, // ToDo: error of class CommonAdapter is included to bundle

        @Inject("identity-adapter.dapplet-base.eth")
        identityAdapter: any // ToDo: error of class CommonAdapter is included to bundle
    ) {
        const { button, popup } = commonAdapter.widgets;
        const { statusLine } = commonAdapter;
        const overlay = Core.overlay({ url: 'https://localhost:8080', title: 'Test' });

        const activeMessageIds = [];

        identityAdapter.attachConfig({
            events: {
                profile_shown: (p) => this.getMessages(p.authorUsername).then((messages: Msg[]) => messages.forEach(m => {
                    const map = {
                        0: () => overlay.send('test', {})
                    }
                    
                    statusLine.addMessage({
                        uuid: m.uuid, 
                        text: m.text,
                        menu: map[m.type], 
                        group: p
                    });
                    activeMessageIds.push(m.uuid);
                })),
                profile_hidden: (p) => statusLine.removeMessage(activeMessageIds)
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
            uuid: 'fb99ef73-a43c-41c8-b7de-a0c445729431',
            text: 'I was banned! You can find me at https://google.com',
            type: 0
        }, {
            uuid: 'fb99ef73-a43c-41c8-b7de-a0c445729432',
            text: 'Hello, World!',
            type: 0
        }, {
            uuid: 'fb99ef73-a43c-41c8-b7de-a0c445729433',
            text: 'Message without any menu.',
            type: 1
        }];
        return Promise.resolve(msgs);
    }

    openUrl(url: string) {
        window.open(url, '_blank');
    }
}
