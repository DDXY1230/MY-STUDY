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
let reg2 = /\d+/g
//创建对象的方式(基于构造函数的方式), 两个参数:元字符字符串, 修饰符号字符串
let reg3 = new RegExp('\\d+', "g")

// 真实姓名的正则表达式
/**
 * 1.汉字 /^[\u4e00-\u9fa5]$/
 * 2.名字长度2~10位
 * 3.可能有译名
 */
let reg4 = /^[\u4e00-\u9fa5]{2,10}(·[\u4e00-\u9fa5]{2,10}){0,2}$/
console.log(reg4.test('利好'))

/**
 * 验证邮箱的正则
 * 
 */
let regEmail = /^\w+((-\w+)|(\.\w+))*@[a-zA-Z0-9]+((\.|-)[a-zA-Z0-9]+)*\.[a-zA-Z0-9]+$/
/**
 * 身份证号码的正则
 */
// let sfIdreg = /^\d{17}(\d|[xX])$/
let sfReg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|[xX])$/
// console.log(sfReg.exec('431103198012077867'))
//res.exec()捕获结果是数组,包含每一个分组的信息,只把第一个符合条件的捕获到,对应小分组单独的小数据,其余的捕获不到,这个特性叫做正则的懒惰性





//正则表达是中间的部分内容是变量存储的值
let type = 'hahah'
let reg6 = /^@\"+type+\"@$/ //如果匹配,并不对type,所以字面量创建方式不能用变量作为规则
//对象创建的可以用变量作为规则
let reg7 = new RegExp("^@"+type+"@$") // 这样就可以用变化多端的变量作为规则了,传统的字面量创建方式不能实现,只能用创建对象的方式比较好

let str8 = 'zhzhzhhzhzh2323hzkkkkkkk90990kk'
let reg8 = /\d+/g
// console.log(reg8.lastIndex)
// console.log(reg8.exec(str8))
// console.log(reg8.lastIndex)
// console.log(reg8.exec(str8))
// console.log(reg8.lastIndex)
// console.log(reg8.exec(str8))
// console.log(reg8.lastIndex)
// console.log(reg8.exec(str8))
console.log('------------------------------')
/**
 * reg7.lastIndex: 当前正则下一次匹配的起始索引位置
 * 懒惰性捕获的原因:默认情况下lastIndex的值不会被修改,每一次都是从字符串开始位置查找,所以找到的永远是第一个
 * 为了解决懒惰性,可以在正则后面家g,全局捕获,这样每次执行lastIndex就会往后面找,如果一直往后面捕获,就会循环捕获,lastIndex又回归初始值0 
 * 用test也一样,匹配成功,lastIndex的值都会往后走一位
 */


//每次都要执行才能获取一个符合条件的,现在编写一个execAll,一次把匹配的都获取出来,前提,正则一定要设置g为全局修饰符
~function() {
  function execAll (str = "") {
    // 如果正则不加g,不允许走此函数否则会导致死循环,只返回第一次捕获的值
    if(!this.global) return this.exec(str)

    // str是要匹配的字符串
    let ary = []
    let res = this.exec(str)
    console.log(res)
    while(res) {
      ary.push(res[0])
    console.log(res)

      res = this.exec(str)
    }
    return ary.length === 0 ? null : ary
  }
  RegExp.prototype.execAll = execAll
}()
console.log(reg8.execAll(str8))
//---------------------------------------------
// 其实实际开发中正则中虽然没有一次性捕获所有,但是字符串有个match方法可以做到,是不是很方便啊哈哈哈,但是这个方法是字符串的哦,记住了吗,但是正则也要加g,如果不加g的情况下也跟exec一样只能捕获一个
console.log('==================')
console.log(str8.match(reg8))

