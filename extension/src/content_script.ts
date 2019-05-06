import { initBGFunctions } from "chrome-extension-message-wrapper";

import { IContentAdapter, IFeature } from './interfaces';

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    const { bgFetchText } = await initBGFunctions(chrome);

    // ============ FEATURE LOADING ================

    const featureCode: string = await bgFetchText("/features/PMFeature.js");
    const Feature = eval('(function(){ ' + featureCode + ' return Feature; })();');

    const feature: IFeature = new Feature();
    const adapterId = feature.getContentAdapterId();
    console.log('adapterId', adapterId);

    // ============ ADAPTER LOADING ================

    const adapterCode: string = await bgFetchText(`/adapters/${adapterId}.js`);
    const ContentAdapter = eval('(function(){ ' + adapterCode + ' return ContentAdapter; })();');

    const adapter: IContentAdapter = new ContentAdapter();

    const isSiteCompatible = adapter.isSiteCompatible(document);
    console.log('isSiteCompatible', isSiteCompatible);
    if (!isSiteCompatible) return;

    const isPageCompatible = adapter.isPageCompatible(document);
    console.log('isPageCompatible', isPageCompatible);
    if (!isPageCompatible) return;

    // ============ ADAPTER ACTIVATION =============

    adapter.activate(document);
    console.log('activated');

    // ============ FEATURE ATTACHING =============

    adapter.attachFeature(feature);
    console.log('attached');

    // ============ ADAPTER DEACTIVATION 5 SECONDS =============

    // await pause(10000);
    // adapter.deactivate(document);
    // console.log('deactivated');
}

init();