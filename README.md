# Simple Static HTML Starter

## Feature

[11ty](https://github.com/11ty/eleventy/) | [TypeScript](https://www.typescriptlang.org/ja/) | [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env): [stage2](https://preset-env.cssdb.org/features/#stage-2) + [Nested rues](https://qiita.com/otsuky/items/68a5fa533aff3f9386e5)

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

production buildし、生成された`dist/`ディレクトリ内をアップします。
