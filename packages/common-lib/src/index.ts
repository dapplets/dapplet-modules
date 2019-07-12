// ==UserScript==
// @name CommonLib
// @type other
// @description CommonLib for twitter.com
// @author Dapplets Team
// @version 1
// @familyId CommonLib
// ==/UserScript==

import {} from '@dapplets/dapplet-extension-types'

@Module("common-lib.dapplet-base.eth", "0.1.0")
export default class CommonLib {
    constructor() {
        console.log('CommonLib created');
    }

    hello() {
        console.log('hello');
    }
}