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

    this.state = 'initial';
    this.successes = [];
    this.errors = [];

    var resolve = function resolve(data) {
      _this.state = 'fulfilled';

      _this.successes.forEach(function (item) {
        return item(data);
      });
    };

    var reject = function reject(error) {
      _this.state = 'failed';

      _this.errors.forEach(function (item) {
        return item(error);
      });
    };

    fn(resolve, reject);
  }

  _createClass(Promise, [{
    key: "then",
    value: function then(success, error) {
      this.successes.push(success);
      this.errors.push(error);
    }
  }]);

  return Promise;
}();

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var num = Math.random();

    if (num > .5) {
      resolve('yes');
    } else {
      reject('no');
    }
  }, 5000);
});
p.then(function (data) {
  console.log('成功', data);
}, function (error) {
  console.log('失败', error);
});