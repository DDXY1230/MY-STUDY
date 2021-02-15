let url = require('url')
let str = 'http://user:pwd@localhost:8080/user?id=5#top'
//第二个参数为true,可以吧query解析成对象
let urlObj = url.parse(str,true)
console.log(urlObj)
console.log(url.format(urlObj))