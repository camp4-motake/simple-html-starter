import { existsSync } from 'fs';
import { build } from 'esbuild';
import ImageCompress from './lib/ImageCompress.mjs';

const inProduction = process.env.NODE_ENV === 'production';
const root = existsSync('../package.json') ? '../' : './';

/**
 * image compress & webp generate
 */
new ImageCompress({
  src: ['src/images/**/*.{jpg,png,svg}', '!**/_*/**'],
  dest: 'dist',
  option: { base: 'src', cacheDir: `${root}.cache/images` },
});

/**
 * esbuild
 * @link https://github.com/evanw/esbuild
 * @link https://esbuild.github.io/api/
 */
build({
  entryPoints: ['src/scripts/main.ts'],
  outdir: 'dist/assets',
  bundle: true,
  incremental: !inProduction,
  minify: inProduction,
  sourcemap: !inProduction,
  treeShaking: true,
  watch: !inProduction,
  target: ['es2020', 'chrome58'],
})
  .then(() => console.log('⚡ Done'))
  .catch(() => process.exit(1));
