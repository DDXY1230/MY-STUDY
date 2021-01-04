let _subscribe = (function () {
  // Sub 发布订阅类
  class Sub {
    constructor() {
      // 创建一个事件池, 用来存储后期需要执行的方法
      this.$pond = []
    }
    // 向事件池里面追加方法
    add(func) {
      let flag = this.$pond.some(item => {
        return item === func
      })
      // 不存在才往里面添加方法
      if (!flag) {
        this.$pond.push(func)
      }
    }
    // 从事件池里面移除方法
    remove(func) {
      let $pond = this.$pond
      for(let i = 0; $pond.length;i++){
        let item = $pond[i]
        if(item === func) {
          // 移除(顺序不变的情况下只能用splice)// 但是不能这么写,这样写会导致数组塌陷的现象,索引发生了变化所以只能设置为null
          // $pond.splice(i,1)
          this.$pond[i] = null
          break
        }
      }
    }
    // 通知事件池中的方法,按照顺序依此执行
    fire(...args) {
      let $pond = this.$pond
      for(let i=0; i<$pond.length;i++) {
        let item = $pond[i]
        if(typeof item !== 'function'){
          //此时再删除
          $pond.splice(i, 1)
          i--
          continue
        }
        item.call(this, ...args)
      }
    }
  }

  // 暴露给外部使用
  return function subscribe() {
    return new Sub()
  }
})()
let s1 = _subscribe()