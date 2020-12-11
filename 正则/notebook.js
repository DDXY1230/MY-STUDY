/*正则:
\d: 0-9之间的数字
+:让前面的表达式出现1 到多个
*: 0到多次
?: 0次或1次
*/
// 例子: 
let str = "good googd study, day day up"
let reg = /\d+/  // 是否有连续的数字
console.log(reg.test(str))

let str2 = "2020-12-20"
console.log(reg.exec(str2)) // 只把第一个符合条件的捕获到


// 编写正则表达式
// 创建的方式: 
//字面量方式   
let reg2 = /\d+/
//创建对象的方式(基于构造函数的方式), 两个参数:元字符字符串, 修饰符号字符串
let reg3 = new RegExp('\\d+')
