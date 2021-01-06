function Animal(type){
  this.type = type
}
Animal.prototype.say = function() {
  console.log('say')
}
function mockNew() {
  let Constructor = [].shift.call(arguments)
  let obj = {} // 返回的结果这里不能用Object.assign(null)因为产生的是控对象没有原型链
  obj.__proto__ = Constructor.prototype// 原型上的方法
  let r = Constructor.apply(obj,arguments)
  return r instanceof Object ? r : obj
}
let animal = mockNew(Animal, '哺乳类')
animal.say()