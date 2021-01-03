// 正则捕获的贪婪性
let str = '珠峰2019@2020学习'
let reg = /\d+/g
// let reg = /\d+?/g
console.log(str.match(reg))// 字符串的match方法传入一个正则
// 可以按照正则的方式捕获到符合正则要求的字符串组成一个数组
// 加上? 出现0-1次,就可以取消正则的贪婪性,就会一个一个的找出数字了
// (?:)只匹配不捕获
// (?=)正向预查
// (?!)负向预查
//---------------------------------
/**
 * 其他能捕获的方法,test也能捕获
 * 
 */
const str2 = "{0}年{1}月{2}日"
let reg2 = /\{(\d+)\}/g// 加上g那么会出现$1递增的情况
console.log(reg2.test(str2)) // true
console.log(RegExp.$1)// 0 
console.log(reg2.test(str2)) // true
console.log(RegExp.$1)// 0 
console.log(reg2.test(str2)) // true
console.log(RegExp.$1)// 0 
// RegExp.$1 - RegExp.$1:获取当前本次正则匹配后,第一个到第九个分组的信息

//--------------------------------
/**
 * replace一般都是伴随正则一起使用
 */
let str3 = 'zhufeng@2019|zhufeng2020'
let str4 = str3.replace('zhufeng', '珠峰')// 不用正则,执行一次只能替换一次
console.log(str4)
// 使用正则,一次性全部替换的时候要加g,不加g只替换一次
let str5 = str3.replace(/zhufeng/g, '珠峰')
console.log(str5)
//---------------------------------------

let time = "2020-12-31"
// 变成‘2020年12月31日
let reg5 = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
// 这样可以实现
//time = time.replace(reg5,"$1年$2月$3日")
//console.log(time)//2020年12月31日
// 还可以这样写
// 在函数中返回啥,就是当前大正则匹配的内容
time = time.replace(reg5,(big,$1,$2,$3) => {
  // $1-$3是我们自己设置的形参
  console.log(big, $1,$2,$3)
  return $1+'年-'+$2+'月-'+$3+'日-'
})
console.log(time)//2020年12月31日
//---------------------------------------------------------
let str6 = "good good study, day day up"
let reg6 = /\b([a-zA-Z])[a-zA-Z]*\b/g
//函数被执行了6次,每次都把正则匹配的信息传递给函数
let str7 = str6.replace(reg6,(...arg) => {
  console.log(arg)
  let [content, $1,$2,$3] = arg;
  $1 = $1.toUpperCase()
  content = content.substring(1)
  return $1 + content
})
console.log(str7)
//------------------------------------------
// 验证一个字符串中那个字母出现的次数最多,多少次?
let str8 = "zhufengpeixunzhoulaoshi"
let obj = {}
str8.split('').forEach( char => {
  // if(char in obj){
  // if(obj.hasOwnProperty){
  if(typeof obj[char] !== 'undefined'){
    obj[char] ++
    return
  }
    obj[char] = 1
})
console.log(obj)
let max = 1
for(let key in obj) {
  let item = obj[key]
  item > max ? max = item : null
}
let res = []
console.log(max)
for(let key in obj) {
  let item = obj[key]
  if(item === max) {
    res.push(key)
  }
}
console.log(res)
console.log('-------------------------')
// 除了以上的方法还可以怎么做? 排序
let arg8 = str8.split('').sort((a,b) =>a.localeCompare(b))
console.log(arg8)
let str9 = arg8.join('')
console.log(str9)
let reg8 = /([a-zA-Z])\1+/g
console.log(str9.match(reg8))// 返回一个数组
let arg9 = str9.match(reg8)
arg9.sort((a,b) => b.length - a.length)// 降序
console.log(arg9)
let max2 = arg9[0].length
let res9 = [arg9[0].substr(0,1)]
for(let i = 1; i< arg9.length; i++) {
  let item = arg9[i]
  if(item.length < max2) {
    break
  }
  res9.push(item.substr(0,1))
}
console.log(res9)
//------------------------------------


//时间格式
let time1 = "2020-8-13 16:40:3"
~function() {
  function formatTime (tem = "{0}年{1}月{2}日 {3}时{4}分{5}秒") {
    // 首先获取时间字符串中的年月日登信息
    let timeArg = this.match(/\d+/g)
    let template = tem
    template = template.replace(/\{(\d+)\}/g,(...[,$1]) => {
      let time = timeArg[$1] || '00'
      return time.length < 2 ? time = '0' + time : time
    })
    return template
  }
  //获取URL地址问号后面的参数信息
  function queryUrlPatams() {
    // /()=()/g
    let obj = {}
    this.replace(/([^?=&#]+)=([^?=&#]+)/g,(...[a,$1,$2]) => {
      console.log(a,$1,$2)
      obj[$1] = $2
    })
    this.replace(/#([^?=&#]+)/g,(...[,$1]) => {
      obj['HASH'] = $1
    })
    return obj
  }
  // 千分符
  function millimeter () {
    //普通方法
    // let num = this.split('').reverse().join('')
    // for(let i = 2; i < num.length; i += 3) {
    //   let prev = num.substring(1,i + 1),next = num.substring(i + 1)
    //   num = prev + ',' + next
    // }
    // return num.split('').reverse().join('')
    //以下用正则方式
    return this.replace(/\d{1,3}(?=(\d{3})+$)/g,(content)=>{
      return content+ ','
    })
  }
  /**扩展到内置类String.prototype */
  ["formatTime", "queryUrlPatams","millimeter"].forEach(item => {
    String.prototype[item] = eval(item) 
  })
}()
console.log(time1.formatTime("{0}年-{1}月-{2}日 {3}时{4}分{5}秒"))
console.log('-------------------')
let url1 = 'http://www.zhufengpeixun?lx=11&from=wx&to=qq#abc'
console.log(url1.queryUrlPatams())
let num1 = '18295839493'
console.log(num1.millimeter())