# typescript-examples
## TypeScript Install
Run `npm install -g typescript` and `tsc` will be available

Run `npm install http-server -g`
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

## Attach Bundles to Extension
Run HTTP server for sharing static files
```
http-server
```

Add injectors and adapters to Extension Dev Tab
