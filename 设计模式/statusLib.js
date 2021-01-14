// let StateMachine = require('javascript-state-machine')
// 不调用上面的工具库,以下自己实现
class StateMachine {
  constructor(options) {
    let {
      init = '', transitions = [], methods = {}
    } = options
    this.state = init
    transitions.forEach(i => {
      let {
        from,
        to,
        name
      } = i
      // this[name] = function() {
      //   if(this.state == from) {
      //     this.state = to
      //     let onMethod = 'on' + name.slice(0,1).toUpperCase() + name.slice(1)
      //     console.log(onMethod)
      //     methods[onMethod] && methods[onMethod]()
      //   }
      // }
      let onMethod = 'on' + name.slice(0, 1).toUpperCase() + name.slice(1)
      this[onMethod] = methods[onMethod]
    })
  }
}
let fsm = new StateMachine({
  init: 'solid',
  transitions: [{
      from: 'solid',
      to: 'liquid',
      name: 'melt'
    },
    {
      from: 'liquid',
      to: 'solid',
      name: 'freeze'
    },
    {
      from: 'liquid',
      to: 'gas',
      name: 'vaporize'
    },
    {
      from: 'gas',
      to: 'liquid',
      name: 'condense'
    }
  ],
  methods: {
    onMelt() {
      console.log('onMelt融化')
    },
    onFreeze() {
      console.log('onMelt冷冻')
    },
    onVaporize() {
      console.log('onMelt蒸发')
    },
    onCondense() {
      console.log('onMelt液化')
    }
  }
})
fsm.onCondense()
fsm.onVaporize()