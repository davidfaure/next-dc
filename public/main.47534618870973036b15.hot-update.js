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
    console.log(this.element, element, this.media);
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
/******/ 	__webpack_require__.h = () => ("77b7f5ec58f5437d3979")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9QYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgeyBjbGFtcCwgbWFwIH0gZnJvbSBcIi4uL3V0aWxzL21hdGhcIlxuaW1wb3J0IHsgZ2V0T2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4IGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50XG4gICAgfSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5tZWRpYSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuICAgIHRoaXMubWVkaWEub25sb2FkID0gXyA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFsbGF4ID0ge1xuICAgICAgY3VycmVudDogLXRoaXMuYW1vdW50LFxuICAgICAgdGFyZ2V0OiAtdGhpcy5hbW91bnRcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlID0ge1xuICAgICAgY3VycmVudDogMS4xNSxcbiAgICAgIHRhcmdldDogMS4xNVxuICAgIH1cblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LCBlbGVtZW50LCB0aGlzLm1lZGlhKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5hbW91bnQgPSAxNTBcbiAgICB0aGlzLm9mZnNldCA9IGdldE9mZnNldCh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3dcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBzY3JvbGwuY3VycmVudCArIGlubmVySGVpZ2h0XG5cbiAgICBpZiAob2Zmc2V0Qm90dG9tID49IHRoaXMub2Zmc2V0LnRvcCkge1xuICAgICAgdGhpcy5wYXJhbGxheCA9IGNsYW1wKFxuICAgICAgICAtdGhpcy5hbW91bnQsXG4gICAgICAgIHRoaXMuYW1vdW50LFxuICAgICAgICBtYXAoXG4gICAgICAgICAgdGhpcy5vZmZzZXQudG9wIC0gc2Nyb2xsLmN1cnJlbnQsXG4gICAgICAgICAgLXRoaXMub2Zmc2V0LmhlaWdodCxcbiAgICAgICAgICBpbm5lckhlaWdodCxcbiAgICAgICAgICB0aGlzLmFtb3VudCxcbiAgICAgICAgICAtdGhpcy5hbW91bnRcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgdGhpcy5zY2FsZSA9IGNsYW1wKFxuICAgICAgICAxLFxuICAgICAgICAxLjMsXG4gICAgICAgIG1hcCh0aGlzLm9mZnNldC50b3AgLSBzY3JvbGwuY3VycmVudCwgLXRoaXMub2Zmc2V0LmhlaWdodCwgaW5uZXJIZWlnaHQsIDEsIDEuMylcbiAgICAgIClcblxuICAgICAgdGhpcy5tZWRpYS5zdHlsZVtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1cbiAgICAgIF0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLnBhcmFsbGF4fXB4LCAwKSBzY2FsZSgke3RoaXMuc2NhbGV9KWBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZWRpYS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSBgdHJhbnNsYXRlM2QoMCwgLSR7dGhpcy5hbW91bnR9cHgsIDApIHNjYWxlKDEuMTUpYFxuICAgIH1cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzdiN2Y1ZWM1OGY1NDM3ZDM5NzlcIikiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiUHJlZml4IiwiY2xhbXAiLCJtYXAiLCJnZXRPZmZzZXQiLCJQYXJhbGxheCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsInRyYW5zZm9ybSIsIm1lZGlhIiwicXVlcnlTZWxlY3RvciIsIm9ubG9hZCIsIl8iLCJvblJlc2l6ZSIsInBhcmFsbGF4IiwiY3VycmVudCIsImFtb3VudCIsInRhcmdldCIsInNjYWxlIiwiY29uc29sZSIsImxvZyIsIm9mZnNldCIsInVwZGF0ZSIsInNjcm9sbCIsImlubmVySGVpZ2h0Iiwid2luZG93Iiwib2Zmc2V0Qm90dG9tIiwidG9wIiwiaGVpZ2h0Iiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9