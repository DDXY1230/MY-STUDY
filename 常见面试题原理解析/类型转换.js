// false undefined null '' 0 NaN  都为false
// !可以用来转换成boolean类型
// 1/true 
console.log(1+{})//1[object Object]
console.log(true+{})//true[object Object]
// + 左右如果有一方是字符串那么,就会转化成字符串
let obj = {
  [Symbol.toPrimitive] () {// 首先调用此函数
    return 500
  },
  toString() { // 其次
    return 200
  },
  valueOf() {// 再次
    return {}
  },
}
console.log( 1 + obj) // 501
console.log(1+ +'123') // 124
console.log('a' < 'b')// true   因为此时转成了ascall编码
console.log('a'.charCodeAt(0))// 97
console.log('b'.charCodeAt(0))// 98
console.log(null == undefined)// true