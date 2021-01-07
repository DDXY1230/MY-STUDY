"use strict";

/**
 * canvas 一些基本工具函数
 */
var c = {}; // 获取鼠标在元素上的坐标

c.getOffset = function (ele) {
  var mouse = {
    x: 0,
    y: 0
  };
  ele.addEventListener('mousemove', function (e) {
    var _c$eventWrapper = c.eventWrapper(e),
        x = _c$eventWrapper.x,
        y = _c$eventWrapper.y;

    mouse.x = x;
    mouse.y = y;
  });
  return mouse;
}; // 坐标转换


c.eventWrapper = function (ev) {
  var pageX = ev.pageX,
      pageY = ev.pageY,
      target = ev.target;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      left = _target$getBoundingCl.left,
      top = _target$getBoundingCl.top;

  return {
    x: pageX - left,
    y: pageY - top
  };
}; // 角度转弧度


c.toRad = function (angle) {
  return angle * Math.PI / 180;
}; // 弧度转角度


c.toAngle = function (rad) {
  return rad * 180 / Math.PI;
};