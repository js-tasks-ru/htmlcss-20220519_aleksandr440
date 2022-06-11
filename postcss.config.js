module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('precss')({
      lookup: { disable: true },
      properties: {
        disable: true,
        preserve: true,
      },
    }),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-advanced-variables'),
    require('postcss-nested-vars'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
