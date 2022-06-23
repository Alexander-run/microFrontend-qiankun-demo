const path = require('path')
const name= require('./package.json').name
module.exports = {
  webpack: function override(config, env) {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
  dev: {
    proxyTable: {
      '/onestop-management': {
        target: 'https://dev-oop.advai.cn',
        changeOrigin: true,
      },
    }
  }
};