/**
 * call 的特点
 * 1)可以改变this的指向
 * 2)同时让当前函数执行
 */
Function.prototype.call = function(context) {
  let context = context ? Object(context):window
  context.fn = this
  let args = []
  for(let i =1;i < arguments.length;i++) {
    args.push('arguments[' + i + ']')
  }
  // 利用数组的toString特性
  let r = eval('context.fn(' + args + ')')
  delete context.fn
  return r
}