/**
 * 自己实现emit
 */
class EventEmitter{
  constructor() {
    this._events = {}
  }
  on(type, listener) {
    let listeners = this._events[type]
    if(listeners) {
      listeners.push(listener)
    }else {
      this._events[type] = [listener]
    }

  }
  emit(type) {
    let listeners = this._events[type]
    let args = Array.prototype.slice.call(arguments,1)
    if(listeners) {
      listeners.forEach(i => i(...args))
    }

  }
}
let eve = new EventEmitter()
eve.on('click', function(name) {
  console.log(1,name)
})
eve.emit('click', 'afpx')