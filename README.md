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
Run HTTP server for sharing static files from root project directory
```
http-server
```

Add injectors and adapters to Extension Dev Tab

**TwitterAdapter**

ID: `TwitterAdapter-v1`

URL: `http://localhost:8080/adapters/twitterAdapter.js`

**TwitterFeature**

ID: `TwitterFeature-v1`

URL: `http://localhost:8080/features/PMFeature.js`
