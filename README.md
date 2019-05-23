# Dapplet Extension: Examples of Using

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Solution Structure

```
$/
  dist/
  docs/
  src/
    TwitterAdapter/
    TwitterFeature/
    TwitterFeature2/
    CommonLib/
```

- `dist` - Releases
- `docs` - Documentation
- `src` - Examples of modules for Dapplet Extension
- `src\TwitterAdapter` - Content adapter for twitter.com
- `src\TwitterFeature` - First Feature injecting controls for twitter.com
- `src\TwitterFeature2` - Second Feature injecting controls for twitter.com
- `src\CommonLib` - CommonLib for adapter

### Building

1.  Clone repo
2.  `npm install`
3.  `npm run start` to run the dev task in watch mode
4.  `npm run build` to build a production version

### Attaching Bundles to Extension
Add injectors and adapters to Extension Dev Tab

**TwitterAdapter**
```
ID: TwitterAdapter-v1
URL: http://localhost:8080/TwitterAdapter.js
```

**TwitterFeature**
```
ID: TwitterFeature-v1
URL: http://localhost:8080/TwitterFeature.js
```

**TwitterFeature2**
```
ID: TwitterFeature2-v1
URL: http://localhost:8080/TwitterFeature2.js
```

**CommonLib**
```
ID: CommonLib-v1
URL: http://localhost:8080/CommonLib.js
```

## Built With

* [TypeScript](https://www.typescriptlang.org/)

## Authors

* **Dmitry Palchun** - *Initial work* - [ethernian](https://github.com/ethernian)
* **Alexander Sakhaev** - *Initial work* - [alsakhaev](https://github.com/alsakhaev)

