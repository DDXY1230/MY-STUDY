"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Promise =
/*#__PURE__*/
function () {
  function Promise(fn) {
    var _this = this;

    _classCallCheck(this, Promise);

    this.sucesses = [];

    var resolve = function resolve(data) {
      _this.sucesses.forEach(function (item) {
        return item(data);
      });
    };

    fn(resolve);
  }

  _createClass(Promise, [{
    key: "then",
    value: function then(success) {
      this.sucesses.push(success);
    }
  }]);

  return Promise;
}();

var p = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('ok');
  });
}, 2000);
p.then(function (data) {
  return console.log(data);
});