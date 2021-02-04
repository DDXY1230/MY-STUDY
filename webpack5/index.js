const webpack = require('webpack')
const webpackOptions = require('./webpack.config.js')
webpack(webpackOptions, (err, stats) => {
  if (err) {
    console.log(err)
  } else {
    console.log(stats.toJson({
      hash: true, // 显示hash
      assets: false //不显示打包的资源
    }))
  }
})