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
    const offsetBottom = scroll + innerHeight;
    if (offsetBottom >= this.offset.top) {
      this.parallax = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(-this.amount, this.amount, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll, -this.offset.height, innerHeight, this.amount, -this.amount));
      this.scale = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(1, 1.3, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll, -this.offset.height, innerHeight, 1, 1.3));
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
/******/ 	__webpack_require__.h = () => ("2ac5aa4b2d6a2cf63f9d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGUvLi9hcHAvYW5pbWF0aW9ucy9QYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgeyBjbGFtcCwgbWFwIH0gZnJvbSBcIi4uL3V0aWxzL21hdGhcIlxuaW1wb3J0IHsgZ2V0T2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4IGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50XG4gICAgfSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5tZWRpYSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuICAgIHRoaXMubWVkaWEub25sb2FkID0gXyA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFsbGF4ID0ge1xuICAgICAgY3VycmVudDogLXRoaXMuYW1vdW50LFxuICAgICAgdGFyZ2V0OiAtdGhpcy5hbW91bnRcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlID0ge1xuICAgICAgY3VycmVudDogMS4xNSxcbiAgICAgIHRhcmdldDogMS4xNVxuICAgIH1cblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LCB0aGlzLm1lZGlhLCB0aGlzLm9mZnNldClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuYW1vdW50ID0gMTUwXG4gICAgdGhpcy5vZmZzZXQgPSBnZXRPZmZzZXQodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIGlmICghdGhpcy5vZmZzZXQpIHJldHVyblxuICAgIGNvbnN0IHsgaW5uZXJIZWlnaHQgfSA9IHdpbmRvd1xuICAgIGNvbnN0IG9mZnNldEJvdHRvbSA9IHNjcm9sbCArIGlubmVySGVpZ2h0XG5cbiAgICBpZiAob2Zmc2V0Qm90dG9tID49IHRoaXMub2Zmc2V0LnRvcCkge1xuICAgICAgdGhpcy5wYXJhbGxheCA9IGNsYW1wKFxuICAgICAgICAtdGhpcy5hbW91bnQsXG4gICAgICAgIHRoaXMuYW1vdW50LFxuICAgICAgICBtYXAodGhpcy5vZmZzZXQudG9wIC0gc2Nyb2xsLCAtdGhpcy5vZmZzZXQuaGVpZ2h0LCBpbm5lckhlaWdodCwgdGhpcy5hbW91bnQsIC10aGlzLmFtb3VudClcbiAgICAgIClcbiAgICAgIHRoaXMuc2NhbGUgPSBjbGFtcChcbiAgICAgICAgMSxcbiAgICAgICAgMS4zLFxuICAgICAgICBtYXAodGhpcy5vZmZzZXQudG9wIC0gc2Nyb2xsLCAtdGhpcy5vZmZzZXQuaGVpZ2h0LCBpbm5lckhlaWdodCwgMSwgMS4zKVxuICAgICAgKVxuXG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVxuICAgICAgXSA9IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMucGFyYWxsYXh9cHgsIDApIHNjYWxlKCR7dGhpcy5zY2FsZX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9IGB0cmFuc2xhdGUzZCgwLCAtJHt0aGlzLmFtb3VudH1weCwgMCkgc2NhbGUoMS4xNSlgXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYWM1YWE0YjJkNmEyY2Y2M2Y5ZFwiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJQcmVmaXgiLCJjbGFtcCIsIm1hcCIsImdldE9mZnNldCIsIlBhcmFsbGF4IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwibWVkaWEiLCJxdWVyeVNlbGVjdG9yIiwib25sb2FkIiwiXyIsIm9uUmVzaXplIiwicGFyYWxsYXgiLCJjdXJyZW50IiwiYW1vdW50IiwidGFyZ2V0Iiwic2NhbGUiLCJjb25zb2xlIiwibG9nIiwib2Zmc2V0IiwidXBkYXRlIiwic2Nyb2xsIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJvZmZzZXRCb3R0b20iLCJ0b3AiLCJoZWlnaHQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=