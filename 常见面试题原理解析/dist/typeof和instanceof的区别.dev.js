"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// typeof 不完全准确,null 正则 数组都会返回object
console.log(_typeof(null)); // object

console.log(_typeof(new RegExp('/A/'))); // object

console.log(_typeof([])); // object

console.log(_typeof(function () {})); // function
// Object.prototype.toString不能校验自定义的类型,只能校验系统已经存在的

console.log(Object.prototype.toString.call([])); // [object Array]

console.log(Object.prototype.toString.call(new RegExp('a'))); // [object RegExp]

console.log(Object.prototype.toString.call('hhh')); // [object String]
// instanceof
// 但是instanceof不能处理基本数据类型,只能处理构造函数创建出来的实例

console.log([] instanceof Array);
console.log({} instanceof Object);

var A = function A() {
  _classCallCheck(this, A);
};

var a = new A();

function instanceof_(A, B) {
  B = B.prototype;
  A = A.__proto__;

  while (true) {
    if (A === null) {
      return false;
    }

    if (A === B) {
      return true;
    }

    A = A.__proto__;
  }
}

console.log(instanceof_(a, A)); //--------------------------

console.log('============');

function func1() {
  // arguments.__proto__ = Array.prototype  // 如果手动修改原型链的指向,那么下面返回true
  console.log(arguments instanceof Array); // false
  // arguments 不是一个数组,只是类数组
}

func1(); // --------------------------------
// constructor

/**
 * 不会往上找,constructor的属性太容易被修改
 */

var n = 12;
console.log(n.constructor === Number); // true

var a22 = [];
console.log(a22.constructor === Array); // true

console.log(a22.constructor === Object); // false