"use strict";

//o(n) * log n
// 归并排序
Array.prototype.mergeSort = function () {
  var rec = function rec(arr) {
    // 将数组分成两办
    if (arr.length === 1) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, arr.length);
    var orderLeft = rec(left);
    var orderRight = rec(right);
    var res = [];

    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }

    return res;
  };

  return rec(this);
};

var arr = [4, 66, 3, 6, 78, 4, 3, 55, 99, 6, 6, 3, 5, 2];
var arr_ = arr.mergeSort();
console.log(arr_);