"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class Customer {
//   constructor(kind) {
//     this.kind = kind
//   }
//   pay(amount) {
//     return this.kind.pay(amount)
//   }
// }
// class Normal{
//   pay(amount) {
//     return amount
//   }
// }
// class Member{
//   pay(amount) {
//     return amount * .8
//   }
// }
// class Vip{
//   pay(amount) {
//     return amount * .5
//   }
// }
// let c1 = new Customer(new Normal())
// let c2 = new Customer(new Member())
// let c3 = new Customer(new Vip())
// c1.kind = new Vip()
// console.log(c1.pay(100))
// console.log(c2.pay(100))
// console.log(c3.pay(100))
var _require = require("jquery"),
    cssNumber = _require.cssNumber;

var Customer =
/*#__PURE__*/
function () {
  function Customer() {
    _classCallCheck(this, Customer);

    this.kinds = {
      normal: function normal(amount) {
        return amount;
      },
      menber: function menber(amount) {
        return amount * .9;
      },
      vip: function vip(amount) {
        return amount * .5;
      }
    };
  }

  _createClass(Customer, [{
    key: "pay",
    value: function pay(kind, amount) {
      return this.kinds[kind](amount);
    }
  }]);

  return Customer;
}();

var c = new Customer();
console.log(c.pay('normal', 100));