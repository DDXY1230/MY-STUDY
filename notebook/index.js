const s =Symbol()
console.log(s)
console.log(typeof s)
console.log('112233')

const r = Symbol()
console.log(s === r)// Symbol()永远是一个独一无二的值

console.log(Symbol('foo'))
//
const name = Symbol()
const person = {
    [name]: 'zce',
    say() {
        console.log(this[name])// 在这个对象的内部可以通过创建属性时的名字拿到,而在外边无法创建一抹一样的symbol,所以外部无法取到,symbol最突出的作用就是为对象创建私有属性
    }
}
person.say()