"use strict";

// 模拟indexOf的方法
~function () {
  function myIndexOf(T) {
    var reg = new RegExp(T);
    res = reg.exec(this);
    return res === null ? -1 : res.index;
  }

  String.prototype.myIndexOf = myIndexOf;
}();
var S = 'sdfjeitjksdfsdf';
T = 'sd';
console.log(S.myIndexOf(T));