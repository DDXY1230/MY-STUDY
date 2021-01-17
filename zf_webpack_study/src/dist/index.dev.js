"use strict";

require("./test1");

require("./test2");

require("./index.css");

require("./sass.scss");

require("./less.less");

var logo = require('./images/samoye.jpg');

console.log(logo);
var img = new Image();
img.src = logo;
img.style.width = '100px';
document.body.appendChild(img);