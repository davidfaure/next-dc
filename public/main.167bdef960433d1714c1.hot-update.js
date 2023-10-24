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
    if (offsetBottom >= this.offset.top) {
      this.parallax = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(-this.amount, this.amount, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll.current, -this.offset.height, innerHeight, this.amount, -this.amount));
      this.scale = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(1, 1.3, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll.current, -this.offset.height, innerHeight, 1, 1.3));
      console.log("ALLO");
      this.media.style[this.transform] = `translate3d(0, ${this.parallax}px, 0) scale(${this.scale})`;
    } else {
      console.log("ICI DU COUP");
      this.media.style[this.transform] = `translate3d(0, -${this.amount}px, 0) scale(1.15)`;
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f9f79cc366021e05e81f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTLENBQUMsR0FBSSxtQkFBa0IsSUFBSSxDQUFDUSxNQUFPLG9CQUFtQjtJQUN2RjtFQUNGO0FBQ0Y7Ozs7Ozs7O1VDekVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1BhcmFsbGF4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCB7IGNsYW1wLCBtYXAgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aFwiXG5pbXBvcnQgeyBnZXRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWxsYXggZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnRcbiAgICB9KVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIHRoaXMudHJhbnNmb3JtID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB0aGlzLm1lZGlhID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG4gICAgdGhpcy5tZWRpYS5vbmxvYWQgPSBfID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKVxuICAgIH1cblxuICAgIHRoaXMucGFyYWxsYXggPSB7XG4gICAgICBjdXJyZW50OiAtdGhpcy5hbW91bnQsXG4gICAgICB0YXJnZXQ6IC10aGlzLmFtb3VudFxuICAgIH1cblxuICAgIHRoaXMuc2NhbGUgPSB7XG4gICAgICBjdXJyZW50OiAxLjE1LFxuICAgICAgdGFyZ2V0OiAxLjE1XG4gICAgfVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsIHRoaXMubWVkaWEsIHRoaXMub2Zmc2V0KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5hbW91bnQgPSAxNTBcbiAgICB0aGlzLm9mZnNldCA9IGdldE9mZnNldCh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuXG4gICAgY29uc3QgeyBpbm5lckhlaWdodCB9ID0gd2luZG93XG4gICAgY29uc3Qgb2Zmc2V0Qm90dG9tID0gc2Nyb2xsLmN1cnJlbnQgKyBpbm5lckhlaWdodFxuXG4gICAgaWYgKG9mZnNldEJvdHRvbSA+PSB0aGlzLm9mZnNldC50b3ApIHtcbiAgICAgIHRoaXMucGFyYWxsYXggPSBjbGFtcChcbiAgICAgICAgLXRoaXMuYW1vdW50LFxuICAgICAgICB0aGlzLmFtb3VudCxcbiAgICAgICAgbWFwKFxuICAgICAgICAgIHRoaXMub2Zmc2V0LnRvcCAtIHNjcm9sbC5jdXJyZW50LFxuICAgICAgICAgIC10aGlzLm9mZnNldC5oZWlnaHQsXG4gICAgICAgICAgaW5uZXJIZWlnaHQsXG4gICAgICAgICAgdGhpcy5hbW91bnQsXG4gICAgICAgICAgLXRoaXMuYW1vdW50XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIHRoaXMuc2NhbGUgPSBjbGFtcChcbiAgICAgICAgMSxcbiAgICAgICAgMS4zLFxuICAgICAgICBtYXAodGhpcy5vZmZzZXQudG9wIC0gc2Nyb2xsLmN1cnJlbnQsIC10aGlzLm9mZnNldC5oZWlnaHQsIGlubmVySGVpZ2h0LCAxLCAxLjMpXG4gICAgICApXG5cbiAgICAgIGNvbnNvbGUubG9nKFwiQUxMT1wiKVxuXG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVxuICAgICAgXSA9IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMucGFyYWxsYXh9cHgsIDApIHNjYWxlKCR7dGhpcy5zY2FsZX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIklDSSBEVSBDT1VQXCIpXG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9IGB0cmFuc2xhdGUzZCgwLCAtJHt0aGlzLmFtb3VudH1weCwgMCkgc2NhbGUoMS4xNSlgXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmOWY3OWNjMzY2MDIxZTA1ZTgxZlwiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJQcmVmaXgiLCJjbGFtcCIsIm1hcCIsImdldE9mZnNldCIsIlBhcmFsbGF4IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwibWVkaWEiLCJxdWVyeVNlbGVjdG9yIiwib25sb2FkIiwiXyIsIm9uUmVzaXplIiwicGFyYWxsYXgiLCJjdXJyZW50IiwiYW1vdW50IiwidGFyZ2V0Iiwic2NhbGUiLCJjb25zb2xlIiwibG9nIiwib2Zmc2V0IiwidXBkYXRlIiwic2Nyb2xsIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJvZmZzZXRCb3R0b20iLCJ0b3AiLCJoZWlnaHQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=