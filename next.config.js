const withPlugins = require('next-compose-plugins');

const withImages = require('next-images')

module.exports = withPlugins([
  withImages({ esModule: true }),
], {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  }
})