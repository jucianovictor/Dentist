const nextConfig = {
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  }
}

module.exports = nextConfig;