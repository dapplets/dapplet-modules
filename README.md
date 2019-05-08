# typescript-examples
## TypeScript Install
Run `npm install -g typescript` and `tsc` will be available
## Build Adapters
```
cd adapters
tsc
```
or `tsc -w` for watching
## Build Features
```
cd features
tsc
```
or `tsc -w` for watching
## Build extension 
```
cd extension
npm install
npm run build
```
or `npm run watch` for watching

Attach `/extension/dist` folder to Chrome
