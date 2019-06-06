# Dapplet Extension: Examples of Using

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

This repository is built as a mono-repository. Lerna is used to assemble packages inside.

### Solution Structure

```
$/
  dist/
  docs/
  src/
    common-lib/
    dapplet-extension-types/
    twitter-adapter/
    twitter-feature-1/
    twitter-feature-2/
```

- `dist` - Build results. This directory is locally accessible at http://localhost:8080
- `dist\index.json` - Config file for modules declaration and binding beetwen them and hostnames
- `docs` - Documentation
- `src` - Examples of modules for Dapplet Extension
- `src\dapplet-extension-types` - Global types of dapplet extension
- `src\common-lib` - CommonLib for adapters
- `src\twitter-adapter` - Content adapter for twitter.com
- `src\twitter-feature-1` - First Feature injecting controls for twitter.com
- `src\twitter-feature-2` - Second Feature injecting controls for twitter.com

### Building

1.  Clone repo
2.  `npm run bootstrap` to install all dependencies and symbolic linking of adjacent packages 
3.  `npm run start` to run the dev task in watch mode
4.  `npm run build` to build a production version

### Attaching Bundles to Extension
During `npm run start`, connect to Dev Server via Extension Dev Tab

Dev Config URL: `http://localhost:8080/index.json`

## Built With

* [TypeScript](https://www.typescriptlang.org/)

## Authors

* **Dmitry Palchun** - *Initial work* - [ethernian](https://github.com/ethernian)
* **Alexander Sakhaev** - *Initial work* - [alsakhaev](https://github.com/alsakhaev)

