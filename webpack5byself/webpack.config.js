const path = require('path')
module.exports = {
  mode: 'development',
  devtool: false,
  // entry: './src/index.js',
  entry: {
    // index: './src/index.js',
    // login: './src/login.js'
    page1: './src/page1.js',
    page2: './src/page2.js',
    page3: './src/page3.js'
  },
  output: {
    path: path.join(__dirname, 'dist-1'),
    // filename: 'main.js'
    filename: '[name].js'// 多入口就要用多个filename名字
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'initial', // 指定分割的类型,默认3种选项 all async(默认) initial
          name: 'vendors',// 给分割出去的代码块起一个名字叫做vendor
          test: /node_modules/,// 如果模块的id(路径)匹配该正则就会匹配到vendor代码块
          priority: -10, // 优先级
        },
        commons: {
          chunks: 'initial',
          name: 'commons',
          minSize: 0, // 如果模块的大小大于多少的话才需要提取
          minChunks: 3, // 最少几个chunks引用才需要提取
          priority: -20
        }
      }
    }
  }
}