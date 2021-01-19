const path = require("path");
const base = require("./webpack.base.js");
const { smart } = require("webpack-merge");
const { webpack } = require("webpack");
module.exports = smart(base, {
  mode: "production",
  devtool: "eval",
  optimization: {
    minimize: true,
    //这里放一些优化的插件
    minimizer: [
      new TerserWebpackPlugin({
        // 如果是生产环境,默认会启用
        parallel: true, //  开启多进程并行压缩
        // cache: true// 开启缓存,如果代码没有发生变化就用缓存
      }),
      new OptimizeCssAssetsWebpackPlugin({
        assetNameRegExp: /\.css$/g, // 指定要压缩模块的正则
        cssProcessor: require("cssnano"), //cssnano是postcss的优化和分解插件,cssnano采用的格式很好的css,
      }),
    ],
  },
  plugins: [
    // 会把这些变量和值挂在全局对象上面区
    new webpack.DefinePlugin({
      PRODUCTION:JSON.stringify(true),
      VERSION: '1',
      EXPRESSION: '1+2',
      COPYRIGHT: {
        AUTHOR: JSON.stringify('lxmlxm')
      }
    })
  ]
});
