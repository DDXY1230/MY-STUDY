let _obj = {
  isNumeric: 'Number',
  isFunction: 'Function',
  isBoolean: 'Boolean',
  isString: 'String',
  isNull: 'Null',
  isUndefined: 'Undefined',
  isSymbol: 'Symbol',
  isPlainObject: 'Object',
  isArray: 'Array',
  isRegExp: 'RegExp',
  isDate: 'Date',
  isWindow: 'Window',
}
let _toString = _obj.toString
let _type = {}
for(let key in _obj) {
  console.log(key)
  if(!_obj.hasOwnProperty(key)) break
  let reg = new RegExp("\\[object " + _obj[key] + "\\]")
  _type[key] = function(val) {
    // _toString.call(val)//"[object xxx]"
    // return _toString.call(val) === `[object ${_obj[key]}]` // 或者用正则也行
    return reg.test(_toString.call(val))
  }
}
console.log(_type.isFunction(function(){}))
console.log(_type.isFunction(Array))
console.log(_type.isNumeric('1'))
console.log(_type.isWindow())
