"use strict";

var _obj = {
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
  isWindow: 'Window'
};
var _toString = _obj.toString;
var _type = {};

var _loop = function _loop(key) {
  console.log(key);
  if (!_obj.hasOwnProperty(key)) return "break";
  var reg = new RegExp("\\[object " + _obj[key] + "\\]");

  _type[key] = function (val) {
    // _toString.call(val)//"[object xxx]"
    // return _toString.call(val) === `[object ${_obj[key]}]` // 或者用正则也行
    return reg.test(_toString.call(val));
  };
};

for (var key in _obj) {
  var _ret = _loop(key);

  if (_ret === "break") break;
}

console.log(_type.isFunction(function () {}));
console.log(_type.isFunction(Array));
console.log(_type.isNumeric('1'));
console.log(_type.isWindow());