const path = require('path')
const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const buildDate = JSON.stringify(new Date().toLocaleString())
const createCompressionPlugin = require('./config/plugin.config')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const isProd = process.env.NODE_ENV === 'production'

const assetsCDN = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    echarts: 'echarts'
  },
  css: [],
  // https://unpkg.com/browse/vue@2.6.10/
  js: [
    '//alicdn.jinhui365.com/npm/vue@2.6.12/vue.min.js',
    '//alicdn.jinhui365.com/npm/vue-router@3.2.0/vue-router.min.js',
    '//alicdn.jinhui365.com/npm/echarts@4.9.0/echarts.min.js',
  ]
}
const time = new Date().getTime()
// vue.config.js
const vueConfig = {
  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        BUILD_DATE: buildDate
      })
    ],
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name]-[hash].js?time=${time}`,
      chunkFilename: `js/[name]-[hash].js?time=${time}`
    },
    // if prod, add externals
    externals: isProd ? assetsCDN.externals : {}
  },

  chainWebpack: config => {
    config.resolve.alias.set('@$', resolve('src'))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })

    // if prod is on
    // assets require on cdn
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN
        return args
      })
    }
  },

  css: {
    loaderOptions: {
      less: {
        globalVars: { // 或者globalVars
          // `themeColor` is global variables fields name
          themeColor: '#52c41a'
        }
      }
    }
  },

  devServer: {
    // development server port 8000
    host: process.env.VUE_APP_HOST,
    // development server port 8000
    port: process.env.VUE_APP_PORT,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    open: true
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}
if (isProd) {
  // 依赖大小分析工具
  // vueConfig.configureWebpack.plugins.push(new BundleAnalyzerPlugin())
  // gizp 压缩工具
  vueConfig.configureWebpack.plugins.push(createCompressionPlugin())
}
module.exports = vueConfig
