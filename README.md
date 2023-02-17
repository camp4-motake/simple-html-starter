# Simple Static HTML Starter

## Feature

- html: [11ty 2.0](https://github.com/11ty/eleventy/)
- js: [TypeScript](https://www.typescriptlang.org/ja/) | [esbuild](https://esbuild.github.io/)
- css: postcss | [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) ([stage2](https://preset-env.cssdb.org/features/#stage-2))

## Task

```sh
# install deps
npm ci

# development -> http://localhost:8080
npm run dev

# production build
npm run build
```

## deploy

production build し、生成された`dist/`ディレクトリ内をアップします。
