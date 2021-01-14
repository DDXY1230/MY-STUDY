"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// let StateMachine = require('javascript-state-machine')
// 不调用上面的工具库,以下自己实现
var StateMachine = function StateMachine(options) {
  var _this = this;

  _classCallCheck(this, StateMachine);

  var _options$init = options.init,
      init = _options$init === void 0 ? '' : _options$init,
      _options$transitions = options.transitions,
      transitions = _options$transitions === void 0 ? [] : _options$transitions,
      _options$methods = options.methods,
      methods = _options$methods === void 0 ? {} : _options$methods;
  this.state = init;
  transitions.forEach(function (i) {
    var from = i.from,
        to = i.to,
        name = i.name; // this[name] = function() {
    //   if(this.state == from) {
    //     this.state = to
    //     let onMethod = 'on' + name.slice(0,1).toUpperCase() + name.slice(1)
    //     console.log(onMethod)
    //     methods[onMethod] && methods[onMethod]()
    //   }
    // }

    var onMethod = 'on' + name.slice(0, 1).toUpperCase() + name.slice(1);
    _this[onMethod] = methods[onMethod];
  });
};

var fsm = new StateMachine({
  init: 'solid',
  transitions: [{
    from: 'solid',
    to: 'liquid',
    name: 'melt'
  }, {
    from: 'liquid',
    to: 'solid',
    name: 'freeze'
  }, {
    from: 'liquid',
    to: 'gas',
    name: 'vaporize'
  }, {
    from: 'gas',
    to: 'liquid',
    name: 'condense'
  }],
  methods: {
    onMelt: function onMelt() {
      console.log('onMelt融化');
    },
    onFreeze: function onFreeze() {
      console.log('onMelt冷冻');
    },
    onVaporize: function onVaporize() {
      console.log('onMelt蒸发');
    },
    onCondense: function onCondense() {
      console.log('onMelt液化');
    }
  }
});
fsm.onCondense();
fsm.onVaporize();