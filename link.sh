#!/bin/sh
cd packages

cd common-adapter
npm link @dapplets/dapplet-extension
cd ..

cd common-lib
npm link @dapplets/dapplet-extension
cd ..

cd dapplets-org-feature-1
npm link @dapplets/dapplet-extension
cd ..

cd dynamic-adapter
npm link @dapplets/dapplet-extension
cd ..

cd instagram-adapter
npm link @dapplets/dapplet-extension
cd ..

cd social-feature-1
npm link @dapplets/dapplet-extension
cd ..

cd twitter-adapter
npm link @dapplets/dapplet-extension
cd ..

cd twitter-adapter-new
npm link @dapplets/dapplet-extension
cd ..

cd twitter-adapter-legacy
npm link @dapplets/dapplet-extension
cd ..

cd twitter-feature-1
npm link @dapplets/dapplet-extension
cd ..

cd twitter-feature-2
npm link @dapplets/dapplet-extension
cd ..

cd twitter-feature-3
npm link @dapplets/dapplet-extension
cd ..

cd twitter-near-redirector
npm link @dapplets/dapplet-extension
cd ..
