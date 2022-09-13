const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html)(\?.*)?$/i
const compressionPluginOption = {
  algorithm: 'gzip',
  test: productionGzipExtensions,
  threshold: 10240,
  minRatio: 0.8,
  deleteOriginalAssets: false
}
const createCompressionPlugin = () => new CompressionPlugin(compressionPluginOption)

module.exports = createCompressionPlugin
