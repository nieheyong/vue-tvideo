module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-tvideo/' : '/',
  configureWebpack: {
    devtool: 'source-map'
  },
  pwa: {
    workboxOptions: {
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      skipWaiting: true,
      importWorkboxFrom: 'local',
      importsDirectory: 'js',
      navigateFallback: '/'
    }
  }
}
