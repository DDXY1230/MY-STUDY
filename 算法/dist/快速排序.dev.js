"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// 快速排序
Array.prototype.quickSort = function () {
  var rec = function rec(arr) {
    if (arr.length === 1 || arr.length === 0) {
      return arr;
    }

    var left = [];
    var right = [];
    var mid = arr[0];

    for (var i = 1; i < arr.length; i += 1) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [].concat(_toConsumableArray(rec(left)), [mid], _toConsumableArray(rec(right)));
  };

  var res = rec(this);
  return res;
};

var arr = [4, 66, 3, 6, 78, 4, 3, 55, 99, 6, 6, 3, 5, 2];
var arr_ = arr.quickSort();
console.log(arr);
console.log(arr_);