// typeof 不完全准确,null 正则 数组都会返回object
console.log(typeof null)// object
console.log(typeof new RegExp('/A/'))// object
console.log(typeof [])// object
console.log(typeof function(){})// function

// Object.prototype.toString不能校验自定义的类型,只能校验系统已经存在的
console.log(Object.prototype.toString.call([]))// [object Array]
console.log(Object.prototype.toString.call(new RegExp('a')))// [object RegExp]
console.log(Object.prototype.toString.call('hhh'))// [object String]

// instanceof
console.log([] instanceof Array)
console.log({} instanceof Object)
class A {

}
let a = new A()
function instanceof_ (A,B) {
  B = B.prototype
  A = A.__proto__
  while(true){
    if(A === null) {
      return false
    }
    if(A === B) {
      return true
    }
    A = A.__proto__
  }
}
console.log(instanceof_(a,A))