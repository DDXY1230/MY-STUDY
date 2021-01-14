"use strict";

var http = require('http');

var server = http.createServer();
server.on('request', function (req, res) {
  req.on('data', function (data) {
    console.log(data);
  });
  req.on("end", function () {
    res.end('ok');
  });
});