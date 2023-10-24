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
    console.log("log ici", this.media);
    const {
      innerHeight
    } = window;
    const offsetBottom = scroll.current + innerHeight;
    if (offsetBottom >= this.offset.top) {
      this.parallax = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(-this.amount, this.amount, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll.current, -this.offset.height, innerHeight, this.amount, -this.amount));
      this.scale = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(1, 1.3, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll.current, -this.offset.height, innerHeight, 1, 1.3));
      console.log(this.parallax, this.scale, this.amount, "ALLO");
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
/******/ 	__webpack_require__.h = () => ("167bdef960433d1714c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNJLEtBQU0sR0FBRTtJQUNsRSxDQUFDLE1BQU07TUFDTCxJQUFJLENBQUNULEtBQUssQ0FBQ29CLEtBQUssQ0FBQyxJQUFJLENBQUNyQixTQUFTLENBQUMsR0FBSSxtQkFBa0IsSUFBSSxDQUFDUSxNQUFPLG9CQUFtQjtJQUN2RjtFQUNGO0FBQ0Y7Ozs7Ozs7O1VDMUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1BhcmFsbGF4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCB7IGNsYW1wLCBtYXAgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aFwiXG5pbXBvcnQgeyBnZXRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWxsYXggZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnRcbiAgICB9KVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIHRoaXMudHJhbnNmb3JtID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB0aGlzLm1lZGlhID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG4gICAgdGhpcy5tZWRpYS5vbmxvYWQgPSBfID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKVxuICAgIH1cblxuICAgIHRoaXMucGFyYWxsYXggPSB7XG4gICAgICBjdXJyZW50OiAtdGhpcy5hbW91bnQsXG4gICAgICB0YXJnZXQ6IC10aGlzLmFtb3VudFxuICAgIH1cblxuICAgIHRoaXMuc2NhbGUgPSB7XG4gICAgICBjdXJyZW50OiAxLjE1LFxuICAgICAgdGFyZ2V0OiAxLjE1XG4gICAgfVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsIHRoaXMubWVkaWEsIHRoaXMub2Zmc2V0KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5hbW91bnQgPSAxNTBcbiAgICB0aGlzLm9mZnNldCA9IGdldE9mZnNldCh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuXG5cbiAgICBjb25zb2xlLmxvZyhcImxvZyBpY2lcIiwgdGhpcy5tZWRpYSlcbiAgICBjb25zdCB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3dcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBzY3JvbGwuY3VycmVudCArIGlubmVySGVpZ2h0XG5cbiAgICBpZiAob2Zmc2V0Qm90dG9tID49IHRoaXMub2Zmc2V0LnRvcCkge1xuICAgICAgdGhpcy5wYXJhbGxheCA9IGNsYW1wKFxuICAgICAgICAtdGhpcy5hbW91bnQsXG4gICAgICAgIHRoaXMuYW1vdW50LFxuICAgICAgICBtYXAoXG4gICAgICAgICAgdGhpcy5vZmZzZXQudG9wIC0gc2Nyb2xsLmN1cnJlbnQsXG4gICAgICAgICAgLXRoaXMub2Zmc2V0LmhlaWdodCxcbiAgICAgICAgICBpbm5lckhlaWdodCxcbiAgICAgICAgICB0aGlzLmFtb3VudCxcbiAgICAgICAgICAtdGhpcy5hbW91bnRcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgdGhpcy5zY2FsZSA9IGNsYW1wKFxuICAgICAgICAxLFxuICAgICAgICAxLjMsXG4gICAgICAgIG1hcCh0aGlzLm9mZnNldC50b3AgLSBzY3JvbGwuY3VycmVudCwgLXRoaXMub2Zmc2V0LmhlaWdodCwgaW5uZXJIZWlnaHQsIDEsIDEuMylcbiAgICAgIClcblxuICAgICAgY29uc29sZS5sb2codGhpcy5wYXJhbGxheCwgdGhpcy5zY2FsZSwgdGhpcy5hbW91bnQsIFwiQUxMT1wiKVxuXG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVxuICAgICAgXSA9IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMucGFyYWxsYXh9cHgsIDApIHNjYWxlKCR7dGhpcy5zY2FsZX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9IGB0cmFuc2xhdGUzZCgwLCAtJHt0aGlzLmFtb3VudH1weCwgMCkgc2NhbGUoMS4xNSlgXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNjdiZGVmOTYwNDMzZDE3MTRjMVwiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJQcmVmaXgiLCJjbGFtcCIsIm1hcCIsImdldE9mZnNldCIsIlBhcmFsbGF4IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwibWVkaWEiLCJxdWVyeVNlbGVjdG9yIiwib25sb2FkIiwiXyIsIm9uUmVzaXplIiwicGFyYWxsYXgiLCJjdXJyZW50IiwiYW1vdW50IiwidGFyZ2V0Iiwic2NhbGUiLCJjb25zb2xlIiwibG9nIiwib2Zmc2V0IiwidXBkYXRlIiwic2Nyb2xsIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJvZmZzZXRCb3R0b20iLCJ0b3AiLCJoZWlnaHQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=