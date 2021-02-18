// let url = require('url')
// let str = 'http://user:pwd@localhost:8080/user?id=5#top'
// //第二个参数为true,可以吧query解析成对象
// let urlObj = url.parse(str,true)
// console.log(urlObj)
// console.log(url.format(urlObj))

console.log('梁伟业吃粑粑', process.platform)

let config = process.argv.slice(2).reduce((memo,current,index,array) => {
  if(current.includes('--')){
    memo[current.slice(2)] = array[index + 1]
  }
  return memo
}, {})