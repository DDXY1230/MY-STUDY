const s = Symbol()
console.log(s)
console.log(typeof s)
console.log('112233')

const r = Symbol()
console.log(s === r) // Symbol()永远是一个独一无二的值

console.log(Symbol('foo'))
//
const name = Symbol()
const person = {
    [name]: 'zce',
    say() {
        console.log(this[name]) // 在这个对象的内部可以通过创建属性时的名字拿到,而在外边无法创建一抹一样的symbol,所以外部无法取到,symbol最突出的作用就是为对象创建私有属性
    }
}
person.say()
console.log('----------------------1')

// 手写一个只执行一次的once函数
function once(fn) {
    let done = false
    return function () {
        if (!done) {
            done = true
            return fn.apply(this, arguments)
        }
    }
}
let pay = once(function (money) {
    console.log(`支付了${money}RMB`)
})
pay(9)
pay(19)
pay(9)
pay(9)
console.log('------------------------2')
// 实现一个缓存函数(缓存函数接受纯函数)
function memorize(f) {
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || f.apply(f, arguments)
        return cache[key]
    }
}
// 测试
function getArea(r) {
    console.log(r)
    return Math.PI * r * r
}
let getAreaMemery = memorize(getArea)
console.log(getAreaMemery(2))
console.log(getAreaMemery(2))
console.log(getAreaMemery(2))
console.log(getAreaMemery(2))
console.log('---------------------3')

// 下载封装,后端返回的是流,前端接受用的格式是blob
function downLoadContent(res) {
    const link = document.createElement("a");
    let blob = new Blob([res.data], {
        type: "multipary/form-data"
    });
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    let fileName = res.headers["content-disposition"]
        .split(";")[1]
        .split("=")[1];
    link.setAttribute("download", decodeURI(fileName));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}