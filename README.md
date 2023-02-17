# Simple Static HTML Starter

## Feature

- html: [11ty2.0](https://github.com/11ty/eleventy/)
- js: [TypeScript](https://www.typescriptlang.org/ja/) | [esbuild](https://esbuild.github.io/)
- css: postcss-cli | [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env): [stage2](https://preset-env.cssdb.org/features/#stage-2) / [Nested rues](https://qiita.com/otsuky/items/68a5fa533aff3f9386e5) / [import](https://github.com/postcss/postcss-import)

## Task

```sh
# install deps
npm ci

# development -> http://localhost:8080
npm run dev
s
# production build
npm run build
```

## deploy

production build し、生成された`dist/`ディレクトリ内をアップします。
