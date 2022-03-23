const withPlugins = require('next-compose-plugins');

const withImages = require('next-images')

const nextConfig = {
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  }
}

module.exports = withPlugins([
  withImages({ esModule: true }),
], nextConfig);