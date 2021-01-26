const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',// production 生产模式和把devtool设置成null,自动启动摇树,
  context: __dirname, // 如果给了context,那么所有的相对路径都是相对于context的
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist-0'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.jsx$/,
        // use: 'babel-loader', // 如果有额外的配置文件这个地方只写这一句就可以了,没有的话,就如下写
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["@babel/preset-env", {modules: false}], // 转义es6,保留模块化的语法便于摇树
              "@babel/preset-react" // 用来转义jsx
            ],
            plugins: [ // 这里写一个就支持一个,但是大家知道es6的新特性很多,不可能全部写在这里,所以我们可以封装成一个预设,上面是预设,以下要写,是因为上面的预设没有包含这两个功能
              ["@babel/plugin-proposal-decorators", {
                legacy: true
              }],
              ["@babel/plugin-proposal-class-properties", {
                loose: true
              }],
              ["@babel/plugin-transform-runtime", {
                corejs: 3, // 把这设置以下就可以不用引入polyfill了,也可以兼容ie
                helpers: true,
                useESModules: false
              }]
            ]
          }
        }
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75, // 一个rem是75像素px
              remPrecesion: 8 // 如果除不尽就保留8位小数
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ]
}