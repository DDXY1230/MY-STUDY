"use strict";

function cssloader(content) {
  // 处理很多其他资源,比如导入图片等
  return content;
}

function styleloader(content) {
  var style = document.createElement('style');
  style.innerHTML = content;
  document.head.appendChild(style);
}