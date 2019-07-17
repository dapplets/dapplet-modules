import {} from '@dapplets/dapplet-extension-types'

@Injectable
export default class CommonLib {
    constructor() {
        console.log('CommonLib created');
    }

    hello() {
        console.log('hello');
    }
}