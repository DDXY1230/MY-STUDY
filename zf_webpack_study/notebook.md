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