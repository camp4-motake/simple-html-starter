const purgeCssConfig = require('./purgecss.config.js');

module.exports = (ctx) => {
  const inProduction = ctx.env === 'production';
  return {
    map: ctx.options.map,
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': { stage: 1, autoprefixer: { grid: 'autoplace' } },
      'postcss-url': { filter: '**/_inline/*', url: 'inline' },
      'postcss-rem': {},
      'postcss-sort-media-queries': {},
      ...(inProduction
        ? {
            '@fullhuman/postcss-purgecss': purgeCssConfig,
            cssnano: { preset: 'default' },
          }
        : {}),
    },
  };
};
