"use strict";

function Dog(name) {
  this.name = name;
}

var dog1 = new Dog('三毛');

function _new(Fn) {
  // let obj = {}
  // obj.__proto__ = Fn.prototype
  //上面两句等同于下面一句
  var obj = Object.create(Fn.prototype);

  for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arg[_key - 1] = arguments[_key];
  }

  Fn.call.apply(Fn, [obj].concat(arg));
  return obj;
}

var dog2 = _new(Dog, '三毛');