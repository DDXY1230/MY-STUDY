// bind方法可以绑定this指向
// bind 方法返回一个绑定后的函数
let obj = {
  name: 'js'
}
function fn(name, age) {
  console.log(this.name+ '养了一只'+name+age+'岁了')
}

Function.prototype.bind = function(context) {
  let that = this
  let bindArgs = Array.prototype.slice.call(arguments,1)
   function fBound() {
    let args = Array.prototype.slice.call(arguments)
    return that.apply(this instanceof fBound ? this:context,bindArgs.concat(args))
  }
  fBound.prototype = this.prototype
  fBound.prototype = new fn()
  return fBound
}
let bindFn = fn.bind(obj, '猫')
let instance = new bindFn(9)