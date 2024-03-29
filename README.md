<img width="1245" alt="dapplet-modules" src="https://user-images.githubusercontent.com/43613968/225050355-86e8e904-d198-4913-9458-6bb0daf03d01.png">

# Dapplet Modules

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

This repository is built as a mono-repository. Lerna is used to assemble packages inside.

### Solution Structure

```
$/
  docs/
  packages/
    common-lib/
    dapplet-extension-types/
    dynamic-adapter/
    twitter-adapter/
    twitter-adapter-legacy/
    twitter-adapter-new/
    twitter-feature-1/
    twitter-feature-2/
    twitter-feature-3/
  src/
    client/
    server/
  templates/
    feature/
```

- `docs` - Documentation
- `packages` - Examples of modules for Dapplet Extension
- `packages\dapplet-extension-types` - Global types of dapplet extension
- `packages\common-lib` - CommonLib for adapters
- `packages\dynamic-adapter` - Content adapter for dynamic websites
- `packages\twitter-adapter` - Resolver of Adapter for twitter.com
- `packages\twitter-adapter-legacy` - the config of the twitter adapter for legacy design of twitter.com
- `packages\twitter-adapter-new` -the config of the twitter adapter for new design of twitter.com
- `packages\twitter-feature-1` - First Feature injecting controls for twitter.com
- `packages\twitter-feature-2` - Second Feature injecting controls for twitter.com
- `packages\twitter-feature-3` - Second Feature injecting controls for twitter.com
- `src` - Dev server sources
- `src\client` - Overlay sources
- `src\server` - It serves dist folder and generates dev config dynamically
- `templates` - Template projects which generates modules with `npm run create` command
- `templates\feature` - Empty template project of feature

### Building

1.  Clone repo
2.  `npm install` to install all dependencies and symbolic linking of adjacent packages 
3.  `npm run start` to run the dev task in watch mode or `npm run build` to build a production version

### Attaching Bundles to Extension

During `npm run start`, connect to Dev Server via Extension Dev Tab

Dev Config URL: `https://localhost:8080/index.json`

## Built With

* [TypeScript](https://www.typescriptlang.org/)

## Authors

* **Dmitry Palchun** - *Initial work* - [ethernian](https://github.com/ethernian)
* **Alexander Sakhaev** - *Initial work* - [alsakhaev](https://github.com/alsakhaev)

