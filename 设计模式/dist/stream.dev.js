"use strict";

var fs = require('fs');

var path = require('path');

var rs = fs.createReadStream(path.join(__dirname, '1.txt'), 'utf-8');
rs.on('data', function (data) {
  console.log(data);
});
rs.on('end', function () {
  console.log('end');
});