let glob = require('glob')
let files = glob.sync('./src/**/*.{js,jpg}')// 所以src下面的js文件
console.log(files)