const port = 8082;
const { name } = require('../package.json')
module.exports = {
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: true
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
};