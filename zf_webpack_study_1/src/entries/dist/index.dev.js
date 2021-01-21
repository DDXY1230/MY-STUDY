"use strict";

require("../hahah.css");

// ie 最新版都不支持Promise,所以一般情况还要引入babel-polyfill来解决此问题
// require('babel-polyfill')
// let promise = new Promise(resolve => resolve())
// 一般情况不这么使用,而是使用polyfill的cdn地址,他可以只能的判断当前使用的什么浏览器,从而判断是否需要pollfill
document.write('这里是index.js');