// ...运算符只能拷贝一层
// 深拷贝的方式
let obj = {
  name: 'abc',
  address: {x:100,y:200},
  fn:function say(params) {}, 
  color: undefined
}
let obj_ = JSON.parse(JSON.stringify(obj))
console.log(obj)
console.log(obj_)
/**JSON.parse(JSON.stringify()) 这种方式不能拷贝函数和undefined*/
console.log('-------------------------------------')
/**那么比较好的深拷贝需要自己写函数 */
function deepClone(obj,hash = new WeakMap()) {
  if(obj == null) return obj// 如果是null或者undefined就不进行拷贝操作
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceof RegExp) return new RegExp(obj)
  if(typeof obj !== 'object') {
    return obj
  }
  // 也有可能是[] {} 有一种比较啰嗦的写法: Object.prototype.toString.call(obj) == [object Array] ? [] : {}
  // 但是有一简单的写法, 如下
  if(hash.get(obj)) return hash.get(obj)
  let cloneObj = new obj.constructor
  hash.set(obj,cloneObj)
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      // 实现递归拷贝
      cloneObj[key] = deepClone(obj[key],hash)
    }
  }
  return cloneObj
}
// let obj2 = new Date()
// let obj2 = new RegExp()
let obj2 = {name: '123',add: {x: 100,y:{a:'aa',b:'bb'}}, hh:undefined}
obj2.o = obj2
let cobj2 = deepClone(obj2)
obj2.name = '456'
console.log(obj2)
console.log(cobj2)