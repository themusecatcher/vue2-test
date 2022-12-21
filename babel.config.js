const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = []
if (IS_PROD) {
  // 去除生产环境日志的插件
  plugins.push('transform-remove-console')
}

// lazy load ant-design-vue
// if your use import on Demand, Use this code
plugins.push(['import', {
  'libraryName': 'ant-design-vue', // 包名
  'libraryDirectory': 'es', // 目录，默认lib
  'style': 'css' // `style: true` 会加载 less 文件
}])

module.exports = {
  // presets: [
  //   '@vue/cli-plugin-babel/preset',
  //   [
  //     '@babel/preset-env',
  //     {
  //       'useBuiltIns': 'entry',
  //       'corejs': 3
  //     }
  //   ]
  // ],
  plugins
}
