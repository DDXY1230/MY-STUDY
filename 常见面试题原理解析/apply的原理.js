Function.prototype.call = function(context,args) {
  let context = context ? Object(context):window
  context.fn = this
  if(!args) {
    return context.fn()
  }
  // 利用数组的toString特性
  let r = eval('context.fn(' + args + ')')
  delete context.fn
  return r
}