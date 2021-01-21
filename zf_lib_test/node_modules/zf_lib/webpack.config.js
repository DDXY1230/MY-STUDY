const path = require('path')
const webpack = require('webpack')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'zfmath': './src/index.js',
    'zfmath.min': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist-0'),
    filename: '[name].js',
    library: 'zfLib', // 导出库的名字,umd 擦拭给这个值赋值,umd最广泛,可以requir 也可以imports s
    libraryTarget: 'umd', // umd,commonjs,commonjs2,this,window支持的集中模式,以何种方式导出
    libraryExport: 'default' // 当一个模块有多个导出的时候导出那个属性,默认导出default
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        include: /\.min\.js$/   //压缩以.min.js结尾的文件
      })
    ]
  }
}