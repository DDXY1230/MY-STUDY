"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 自己实现emit
 */
var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this._events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(type, listener) {
      var listeners = this._events[type];

      if (listeners) {
        listeners.push(listener);
      } else {
        this._events[type] = [listener];
      }
    }
  }, {
    key: "emit",
    value: function emit(type) {
      var listeners = this._events[type];
      var args = Array.prototype.slice.call(arguments, 1);

      if (listeners) {
        listeners.forEach(function (i) {
          return i.apply(void 0, _toConsumableArray(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

var eve = new EventEmitter();
eve.on('click', function (name) {
  console.log(1, name);
});
eve.emit('click', 'afpx');