//singleton pattern 单例设计模式(对象) 表现形式其实就是一个对象,作用:把描述同一件事物的属性进行分组归类,存储在同一个堆内存空间中
//避免了全局变量之间的冲突和污染,其实就是一个对象


/**高级单例模式如下(面试的时候这样写,不要直接写一个对象,不然面试官会疯掉)
 * 自定义一个自执行的匿名函数形成了一个不被销毁的私有作用域空间,在这个私有作用域中创建一个堆内存,把这个堆内存赋值给命名空间
 * 实际应用于功能模块的划分,每个人负责自己的模块,也可以调用别人的方法
*/
let nameSpace = (function () {
  function fn() {
    //...
  }
  return {
    fn: fn
  }
})()
//-----------------------------
// 工厂模式(函数) FactoryPattern  把实现相同功能的代码进行封装,后期需要这个功能只需要执行函数即可
//减少页面冗余代码,减少重复代码,低耦合高内聚
function createPerson(name,age) {
  let obj = {}
  obj.name = name
  obj.age = age
  return obj
}
//以上创建了工厂
let p1 = createPerson('xxx', 12)
let p1 = createPerson('aaa', 13)