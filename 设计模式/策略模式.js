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

const { cssNumber } = require("jquery")

class Customer {
  constructor() {
    this.kinds = {
      normal(amount) {
        return amount
      },
      menber(amount) {
        return amount * .9
      },
      vip(amount) {
        return amount * .5
      },
    }
  }
  pay(kind,amount) {
    return this.kinds[kind](amount)
  }
}
let c = new Customer()
console.log(c.pay('normal', 100))