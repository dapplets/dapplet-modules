import { initBGFunctions } from "chrome-extension-message-wrapper";

import { IContentAdapter, IFeature, ICore } from './interfaces';

class Core implements ICore {
    openOverlay(id: string, ctx: any): void {
        console.log('openOverlay', { id, ctx });
    }

    sendWalletConnectTx(tx: any): void {
        console.log('sendWalletConnectTx', { tx });
    }
}

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    const { bgFetchText } = await initBGFunctions(chrome);

    const core = new Core();

    // ============ FEATURE LOADING ================

    const featureCode: string = await bgFetchText("/features/PMFeature.js");
    const Feature = eval('(function(){ ' + featureCode + ' return Feature; })();');

    const adapterId = Feature.REQUIRES.adapter;
    console.log('adapterId', adapterId);

    // ============ ADAPTER LOADING ================

    const adapterCode: string = await bgFetchText(`/adapters/${adapterId}.js`);
    const ContentAdapter = eval('(function(){ ' + adapterCode + ' return ContentAdapter; })();');

    const adapter: IContentAdapter = new ContentAdapter();

    // ============ ADAPTER ACTIVATION =============

    adapter.init(core, document);
    console.log('adapter inited');

    // ============ FEATURE REGISTRATION =============

    const feature = new Feature();
    adapter.registerFeature(feature);
    console.log('feature registered');

    // ============ FEATURE UNREGISTRATION 5 SECONDS =============

    //await pause(5000);
    //adapter.unregisterFeature(feature);
    //console.log('feature unregistered');
}

init();