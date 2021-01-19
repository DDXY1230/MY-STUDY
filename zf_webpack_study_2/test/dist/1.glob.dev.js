"use strict";

var glob = require('glob');

var files = glob.sync('./src/**/*.{js,jpg}'); // 所以src下面的js文件

console.log(files);