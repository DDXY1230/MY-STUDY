function Dog(name) {
  this.name = name
}

let dog1 = new Dog('三毛')

function _new (Fn, ...arg){
  // let obj = {}
  // obj.__proto__ = Fn.prototype
  //上面两句等同于下面一句
  let obj = Object.create(Fn.prototype)
  Fn.call(obj,...arg)
  return obj
}
let dog2 = _new(Dog, '三毛')