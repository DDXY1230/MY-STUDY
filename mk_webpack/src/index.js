console.log('hello webpack111222')
require('./main.css')
require('./a.css')
require('./main1.scss')
import aFn from './a.js'
aFn()
if (process.env.NODE_ENV == "development") {
    console.log('base url is localhost')
} else if (process.env.NODE_ENV == "production") {
    console.log('base url is xixixi')
}
// 安装babel的开发依赖:yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
// 然后在安装生产依赖:yarn add @babel/runtime -S  这个时候是生产环境,主要是提供运行环境
// copy-webpack-plugin clean-webpack-plugin的用法: yarn add clean-webpack-plugin copy-webpack-plugin -D