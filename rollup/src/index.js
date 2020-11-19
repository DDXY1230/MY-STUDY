import { log } from './log'
import messages from './message'
// import { name, version } from '../package.json'
import _ from 'lodash'
import cjs from './cm'
const msg = messages.hi
log(msg)
log(_.camelCase('hello world'))
console.log(cjs)


// console.log(name)
// console.log(version)

// 先安装: yarn add rollup -D
// 查看帮助: yarn rollup
// 按照浏览器的格式打包输出在控制台自调用函数: yarn rollup ./src/index.js --format iife
// 打包输出到指定文件: yarn rollup ./src/index.js --format iife --file ./dist/index.js
// 默认打包用到的部分,没有用到的部分一律不打包,因为rollup会自动开启treeshakeing
// yarn rollup --config rollup.config.js   用配置文件启动

//-----------------
/**
 * rollup使用插件的方式: 
 * yarn add rollup-plugin-json -D
 * 
 * 按照模块名称进行: yarn add rollup-plugin-node-resolve -D
 * rollup默认支持es modules,所以commonjs的不会被支持,为了解决这个问题
 * 需要安装插件:yarn add rollup-plugin-commonjs -D
 * 
 * 
 */