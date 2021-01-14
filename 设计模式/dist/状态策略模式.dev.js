"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Button =
/*#__PURE__*/
function () {
  function Button(container) {
    _classCallCheck(this, Button);

    this.liked = false;
    this.state = likeState;
    this.element = document.createElement('button');
    container.appendChild(this.element);
    this.render();
  }

  _createClass(Button, [{
    key: "setState",
    value: function setState(state) {
      this.state = state;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.state.render(this.element);
    }
  }]);

  return Button;
}();

var likeState = {
  render: function render(ele) {
    ele.innerHTML('赞');
  }
};
var likedState = {
  render: function render(ele) {
    ele.innerHTML('取消');
  }
};
var b1 = new Button(document.body);
b1.element.addEventListener('click', function () {
  b1.setState(likeState);
});