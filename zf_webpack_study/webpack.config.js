const path = require('path')
let glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  //因为开发环境和生产环境下的webpack配置有很多不一样的地方,development环境下压缩失效
  mode: 'development',// development,production,node  一共有三个选项,不同模式优化的方案不一样
  // devtool: 'eval',
  devtool: 'source-map',
  optimization: {
    //这里放一些优化的插件
    minimizer: [
      new TerserWebpackPlugin({// 如果是生产环境,默认会启用
        parallel: true,// 开启多进程并行压缩
        // cache: true// 开启缓存,如果代码没有发生变化就用缓存
      }),
      new OptimizeCssAssetsWebpackPlugin({
        assetNameRegExp: /\.css$/g, // 指定要压缩模块的正则
        cssProcessor: require('cssnano'),//cssnano是postcss的优化和分解插件,cssnano采用的格式很好的css,
      })
    ]
  },
  // entry如果是字符串的值,那就是单入口
  // entry: './src/index.js', // 入口文件,如果是单入口,chunk的名字就是main

  //多入口要用对象的形式
  entry: {
    index: './src/index.js',
    login: './src/login.js',
    vendor: ['react', 'react-dom']
    // vendor: /node_modules/ //把node_modules里面的东西都添加到vendor里面去
    // vendor: glob.sync('./node_modules/**/*.js')
  },
   
  output:{
    path: path.join(__dirname, 'dist-1'),// 放在当前目录下的dist文件夹内,输出的目录只能是绝对目录
    
    // filename: 'bundle.js'// 这是对应上面单入口的写法

    //若是多入口,那么要写成变量的形式
    filename: '[name].[hash:8].[chunkhash].js',// 这里的name是一个变量,来源于entry对象里面的key,hash用来标识,
    //当前的hash是32位的,代表本次的编译  :8 代表只要前八位的hash值,为了预防缓存,文件变了,就用新的,文件内容发生变化
    //hash值就会发生变化
    //chunkhash: 代码块的hash,代码块内容没变那么就可以沿用缓存
    //contenthash: 代表文件的内容,内容变化才会变,
    // 如果此处用多入口的方式书配置,而entry处只配了单入口,那么此时这个name就是main
    publicPath: '/'// 根路径
  },

  //devServer有个特点,如果你是用来devServer,那么所有生成的文件会写到内存里
  //而不回写到硬盘里,为了速度
  devServer: {
    //不配也行,但是不配的话,显示的目录就是当前文件夹的根目录
    contentBase: path.join(__dirname, 'dist-1/'),// 配了之后以此作为根目录在浏览器中显示
    port: 8081,// 自定义端口号
    host: 'localhost',
    compress: true// 压缩
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: 'babel-loader', // 如果有额外的配置文件这个地方只写这一句就可以了,没有的话,就如下写
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",// 转义es6
              "@babel/preset-react"// 用来转义jsx
            ],
            plugins: [// 这里写一个就支持一个,但是大家知道es6的新特性很多,不可能全部写在这里,所以我们可以封装成一个预设,上面是预设,以下要写,是因为上面的预设没有包含这两个功能
              ["@babel/plugin-proposal-decorators",{legacy: true}],
              ["@babel/plugin-proposal-class-properties",{loose: true}],
              ["@babel/plugin-transform-runtime",{
                corejs:false,
                helpers: true,
                // useESModules: false
              }]
            ]
          }
        }
      },
      {
        test: /\.css$/,//匹配以.css结尾的文件
        // use: ['style-loader', 'css-loader']// 多个loader要用数组,并且顺序是有将就的,从右边到左边
        
        //以下是对css进行压缩,上面的写法是普通写法,没有进行压缩,以下两种写法均可
        // use: [MiniCssExtractPlugin.loader, 'css-loader']
        use: [{loader: MiniCssExtractPlugin.loader}, 
        'css-loader',
        'postcss-loader'//如果有配置文件postcss.config.js,就直接这样写,没有的话如下
        // {
        //   loader: 'postcss-loader',
        //   options: {
        //     plugins: [require('autoprefixer')({browsers: ['ios > 6']})]
        //   }
        // }

        ]// 这里光写‘postcss-loader’还不行哦,还要写配置文件postcss.config.js和.browserslistrc配置浏览器支持的版本
      },
      {
        test: /\.(jpg|png|gig|jpeg|svg)$/,
        // use: 'file-loader'
        // url-loader是对file-loader的增强,写法如下
        use: {
          // url-loader内置了file-loader,所以一般用url-loader就行了
          loader: 'url-loader',
          options: {
            // esModule: false,// 默认为true
            limit: 10 * 1024,// 如果要加载的图片小于10k,那么就转成base64
            name: '[name].1.[ext]',
            outputPath: 'images',
            publicPath: '/images'
          }
        }
      },
      {
        test:/\.(html|htm)$/,
        loader: 'html-withimg-loader'
      },
      {
        test: /\.less$/,
        use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader','less-loader']
      },
      {
        test: /\.scss$/,
        use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    //这个插件是产出html文件,在编译的时候会读取模版文件
    new HtmlWebpackPlugin({
      filename: 'index.html',// 产出后的文件名
      template: './src/index.html',// 指定模版文件
      hash: true,// 为了避免缓存,
      chunks: ['index','login'], //默认不写的话,所有产生的chunk都会被插入,引入在先的先加载,后的后加载
      chunksSortMode: 'manual',// 对引入的代码块进行排序的模式,不设置可能顺序会错乱  
      //none  auto manual dependency Function等其实是按照entry的顺序不设置的话
    }),
    new CleanWebpackPlugin(),// 打包前先清楚之前打包的东西
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',// 代码快chunk的名字,加了contenthash,只要内容不变,就用缓存的
      chunkFilename: '[id].css'// 在异步加载是用后面再学
    })
  ]
}