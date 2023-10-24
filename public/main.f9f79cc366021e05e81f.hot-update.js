"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Parallax.js":
/*!************************************!*\
  !*** ./app/animations/Parallax.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom */ "./app/utils/dom.js");




class Parallax extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.element = element;
    this.transform = prefix__WEBPACK_IMPORTED_MODULE_1___default()("transform");
    this.media = element.querySelector("img");
    this.media.onload = _ => {
      this.onResize();
    };
    this.parallax = {
      current: -this.amount,
      target: -this.amount
    };
    this.scale = {
      current: 1.15,
      target: 1.15
    };
    this.onResize();
    console.log(this.element, this.media, this.offset);
  }
  onResize() {
    this.amount = 150;
    this.offset = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getOffset)(this.element);
  }
  update(scroll) {
    if (!this.offset) return;
    const {
      innerHeight
    } = window;
    const offsetBottom = scroll.current + innerHeight;
    console.log(offsetBottom, "offsetBottom");
    console.log(this.offset, "this offset");
    if (offsetBottom >= this.offset.top) {
      this.parallax = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(-this.amount, this.amount, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll.current, -this.offset.height, innerHeight, this.amount, -this.amount));
      this.scale = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(1, 1.3, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll.current, -this.offset.height, innerHeight, 1, 1.3));
      this.media.style[this.transform] = `translate3d(0, ${this.parallax}px, 0) scale(${this.scale})`;
    } else {
      this.media.style[this.transform] = `translate3d(0, -${this.amount}px, 0) scale(1.15)`;
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4ba52a7ecad87ed1b7f3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDb0IsS0FBSyxDQUFDLElBQUksQ0FBQ3JCLFNBQVMsQ0FBQyxHQUFJLG1CQUFrQixJQUFJLENBQUNRLE1BQU8sb0JBQW1CO0lBQ3ZGO0VBQ0Y7QUFDRjs7Ozs7Ozs7VUN6RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IHsgY2xhbXAsIG1hcCB9IGZyb20gXCIuLi91dGlscy9tYXRoXCJcbmltcG9ydCB7IGdldE9mZnNldCB9IGZyb20gXCIuLi91dGlscy9kb21cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbGxheCBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudFxuICAgIH0pXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHRoaXMubWVkaWEgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcbiAgICB0aGlzLm1lZGlhLm9ubG9hZCA9IF8gPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbGxheCA9IHtcbiAgICAgIGN1cnJlbnQ6IC10aGlzLmFtb3VudCxcbiAgICAgIHRhcmdldDogLXRoaXMuYW1vdW50XG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZSA9IHtcbiAgICAgIGN1cnJlbnQ6IDEuMTUsXG4gICAgICB0YXJnZXQ6IDEuMTVcbiAgICB9XG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCwgdGhpcy5tZWRpYSwgdGhpcy5vZmZzZXQpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmFtb3VudCA9IDE1MFxuICAgIHRoaXMub2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZiAoIXRoaXMub2Zmc2V0KSByZXR1cm5cbiAgICBjb25zdCB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3dcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBzY3JvbGwuY3VycmVudCArIGlubmVySGVpZ2h0XG5cbiAgICBjb25zb2xlLmxvZyhvZmZzZXRCb3R0b20sIFwib2Zmc2V0Qm90dG9tXCIpXG4gICAgY29uc29sZS5sb2codGhpcy5vZmZzZXQsIFwidGhpcyBvZmZzZXRcIilcblxuICAgIGlmIChvZmZzZXRCb3R0b20gPj0gdGhpcy5vZmZzZXQudG9wKSB7XG4gICAgICB0aGlzLnBhcmFsbGF4ID0gY2xhbXAoXG4gICAgICAgIC10aGlzLmFtb3VudCxcbiAgICAgICAgdGhpcy5hbW91bnQsXG4gICAgICAgIG1hcChcbiAgICAgICAgICB0aGlzLm9mZnNldC50b3AgLSBzY3JvbGwuY3VycmVudCxcbiAgICAgICAgICAtdGhpcy5vZmZzZXQuaGVpZ2h0LFxuICAgICAgICAgIGlubmVySGVpZ2h0LFxuICAgICAgICAgIHRoaXMuYW1vdW50LFxuICAgICAgICAgIC10aGlzLmFtb3VudFxuICAgICAgICApXG4gICAgICApXG4gICAgICB0aGlzLnNjYWxlID0gY2xhbXAoXG4gICAgICAgIDEsXG4gICAgICAgIDEuMyxcbiAgICAgICAgbWFwKHRoaXMub2Zmc2V0LnRvcCAtIHNjcm9sbC5jdXJyZW50LCAtdGhpcy5vZmZzZXQuaGVpZ2h0LCBpbm5lckhlaWdodCwgMSwgMS4zKVxuICAgICAgKVxuXG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVxuICAgICAgXSA9IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMucGFyYWxsYXh9cHgsIDApIHNjYWxlKCR7dGhpcy5zY2FsZX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9IGB0cmFuc2xhdGUzZCgwLCAtJHt0aGlzLmFtb3VudH1weCwgMCkgc2NhbGUoMS4xNSlgXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YmE1MmE3ZWNhZDg3ZWQxYjdmM1wiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJQcmVmaXgiLCJjbGFtcCIsIm1hcCIsImdldE9mZnNldCIsIlBhcmFsbGF4IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwibWVkaWEiLCJxdWVyeVNlbGVjdG9yIiwib25sb2FkIiwiXyIsIm9uUmVzaXplIiwicGFyYWxsYXgiLCJjdXJyZW50IiwiYW1vdW50IiwidGFyZ2V0Iiwic2NhbGUiLCJjb25zb2xlIiwibG9nIiwib2Zmc2V0IiwidXBkYXRlIiwic2Nyb2xsIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJvZmZzZXRCb3R0b20iLCJ0b3AiLCJoZWlnaHQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=