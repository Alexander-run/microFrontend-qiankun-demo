const path = require('path')
const APP_NAME = require('./package.json').name
module.exports = {
  webpack: (config) => {
    config.output.library = APP_NAME
    config.output.libraryTarget = 'umd'
    config.output.chunkLoadingGlobal = `webpackJsonp_${APP_NAME}`
    config.output.globalObject = 'window'

    return config
  },

  devServer: function (_) {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.liveReload = false;

    return config;
  }
}