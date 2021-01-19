//zf-webpack学习笔记1

## 天生支持js打包,无需多余配置
npm init -y
npm i webpack webpack-cli -D
然后配置webpack.config.js
然后到package.json里面的script设置命令行
我这里设置的是:bundle    
所以我要在命令行执行: npm run bundle 就可以打包我的文件到指定文件夹里面了
或者直接执行:npx webpack 也行的
为了实现实时打包,需要安装: npm i webpack-der-server -D


如果安装了webpack-dev-server;并且配置了dev: ‘webpack-dev-server'
npm run dev  之后出现报错的情况,可能是版本号不对,所以可以重新
可以先卸载:npm uninstall webpack-cli
安装npm install webpack-cli@3 -D


script中的
"dev": "webpack-dev-server --open"  // 后面的--open是可以去掉的,加上就是启动服务自动打开浏览器的意思



## css的打包
首先安装: npm i css-loader style-loader -D
单一指责原则,一个loader干一件事情
  

## html-webpack-plugin
首先安装: npm i html-webpack-plugin -D   // 按照模版生成html
plugin是一个数组

npm i clean-webpack-plugin -D // 打包的时候先清除

## 文件的打包,图片的打包,图标,字体等
首先安装: npm i file-loader url-loader -D

## 对css进行分离 mini
npm install --save-dev mini-css-extract-plugin

## 压缩js 和 css
用terser-webpack-plugin 替换掉 uglifyjs-webpack-plugin 解决uglifyjs不支持es6的问题
npm i ugligyjs-webpack-plugin terser-webpack-plugin optimize-css-assets-webpack-plugin -D
当mode:‘development’的时候,压缩模式不起作用,需要设置production



## webpack里面的hash
hash 代表本次的编译,每编译一次产生新的hash,
chunkhash 代码块的hash,因为每个entry都会产生一个chunk

## 在html中引入图片
cnpm i html-withimg-loader -D

## 插件介绍
cnpm i glob -S
glob很强大的文件匹配功能
glob有很多规则,但不是正则,需要查阅文件才行

## 如何使用less和sass
首先安装: npm i less less-loader -D
        npm i node-sass sass-loader -D

## 处理浏览器的前缀
npm i postcss-loader autoprefixer -D

## 转义器 babel
npm i babel-loader @babel/core @babel/preset-env @babel/preset-react -D
还有一些插件: npm i @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D

## babel runtime 
为什么要使用babel runtime?
因为babel在每个文件都插入了辅助代码,使得代码体积过大
babel对一些公共方法使用了非常小的辅助代码,比如_extend
默认情况下会被添加到每一个需要的文件,你可以引入@babel/runtime 作为一个独立的模块,来避免重复引入
npm install --save @babel/runtime
npm i -D @babel/plugin-transform-runtime


## 标准配置 代码格式化
npm install eslint eslint-loader babel-eslint -D

cnpm i eslint-config-airbnb eslint-loader eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks and eslint-plugin-jsx-ally -D

## 引入字体


## source - map 的原理
在编译的打包的时候有个sourceURl,就是打包的时候存下来地址,进行关联,当你调试的时候就可以定位了


// 在代码中加loader的方式,从右边向左边执行
// let $ = require('babel-loader!expose-loader?$!jquery')
// $是引入jquery模块返回的值传参数
// 跟在配置文件中如下写一样的
{
        test: /\.(jquery)$/,
        loader: 'expose-loader?$'
}


## 外链cdn
npm i html-webpack-externals-plugin -D


## 外部不需要走webpack打包的文件, 比如word pdf ecexl, 设计稿等
npm i copy-webpack-plugin -D


## 配置多种webpack的环境
npm i webpack-merge -D
