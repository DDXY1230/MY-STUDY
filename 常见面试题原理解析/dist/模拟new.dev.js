"use strict";

function Animal(type) {
  this.type = type;
}

Animal.prototype.say = function () {
  console.log('say');
};

function mockNew() {
  var Constructor = [].shift.call(arguments);
  var obj = {}; // 返回的结果这里不能用Object.assign(null)因为产生的是控对象没有原型链

  obj.__proto__ = Constructor.prototype; // 原型上的方法

  var r = Constructor.apply(obj, arguments);
  return r instanceof Object ? r : obj;
}

var animal = mockNew(Animal, '哺乳类');
animal.say();