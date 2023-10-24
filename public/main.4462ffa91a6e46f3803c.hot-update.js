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
    console.log(offsetBottom, "offsetBottom");
    console.log(this.offset.top, "this offset");
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
/******/ 	__webpack_require__.h = () => ("6dd88e4621e2d7bf068a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUU7SUFDbEUsQ0FBQyxNQUFNO01BQ0xDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUMxQixJQUFJLENBQUNYLEtBQUssQ0FBQ29CLEtBQUssQ0FBQyxJQUFJLENBQUNyQixTQUFTLENBQUMsR0FBSSxtQkFBa0IsSUFBSSxDQUFDUSxNQUFPLG9CQUFtQjtJQUN2RjtFQUNGO0FBQ0Y7Ozs7Ozs7O1VDNUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1BhcmFsbGF4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCB7IGNsYW1wLCBtYXAgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aFwiXG5pbXBvcnQgeyBnZXRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWxsYXggZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnRcbiAgICB9KVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIHRoaXMudHJhbnNmb3JtID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB0aGlzLm1lZGlhID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG4gICAgdGhpcy5tZWRpYS5vbmxvYWQgPSBfID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKVxuICAgIH1cblxuICAgIHRoaXMucGFyYWxsYXggPSB7XG4gICAgICBjdXJyZW50OiAtdGhpcy5hbW91bnQsXG4gICAgICB0YXJnZXQ6IC10aGlzLmFtb3VudFxuICAgIH1cblxuICAgIHRoaXMuc2NhbGUgPSB7XG4gICAgICBjdXJyZW50OiAxLjE1LFxuICAgICAgdGFyZ2V0OiAxLjE1XG4gICAgfVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsIHRoaXMubWVkaWEsIHRoaXMub2Zmc2V0KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5hbW91bnQgPSAxNTBcbiAgICB0aGlzLm9mZnNldCA9IGdldE9mZnNldCh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuXG4gICAgY29uc3QgeyBpbm5lckhlaWdodCB9ID0gd2luZG93XG4gICAgY29uc3Qgb2Zmc2V0Qm90dG9tID0gc2Nyb2xsICsgaW5uZXJIZWlnaHRcblxuICAgIGNvbnNvbGUubG9nKG9mZnNldEJvdHRvbSwgXCJvZmZzZXRCb3R0b21cIilcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9mZnNldC50b3AsIFwidGhpcyBvZmZzZXRcIilcblxuICAgIGlmIChvZmZzZXRCb3R0b20gPj0gdGhpcy5vZmZzZXQudG9wKSB7XG4gICAgICB0aGlzLnBhcmFsbGF4ID0gY2xhbXAoXG4gICAgICAgIC10aGlzLmFtb3VudCxcbiAgICAgICAgdGhpcy5hbW91bnQsXG4gICAgICAgIG1hcChcbiAgICAgICAgICB0aGlzLm9mZnNldC50b3AgLSBzY3JvbGwuY3VycmVudCxcbiAgICAgICAgICAtdGhpcy5vZmZzZXQuaGVpZ2h0LFxuICAgICAgICAgIGlubmVySGVpZ2h0LFxuICAgICAgICAgIHRoaXMuYW1vdW50LFxuICAgICAgICAgIC10aGlzLmFtb3VudFxuICAgICAgICApXG4gICAgICApXG4gICAgICB0aGlzLnNjYWxlID0gY2xhbXAoXG4gICAgICAgIDEsXG4gICAgICAgIDEuMyxcbiAgICAgICAgbWFwKHRoaXMub2Zmc2V0LnRvcCAtIHNjcm9sbC5jdXJyZW50LCAtdGhpcy5vZmZzZXQuaGVpZ2h0LCBpbm5lckhlaWdodCwgMSwgMS4zKVxuICAgICAgKVxuXG4gICAgICBjb25zb2xlLmxvZyhcIkFMTE9cIilcblxuICAgICAgdGhpcy5tZWRpYS5zdHlsZVtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1cbiAgICAgIF0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLnBhcmFsbGF4fXB4LCAwKSBzY2FsZSgke3RoaXMuc2NhbGV9KWBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJJQ0kgRFUgQ09VUFwiKVxuICAgICAgdGhpcy5tZWRpYS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSBgdHJhbnNsYXRlM2QoMCwgLSR7dGhpcy5hbW91bnR9cHgsIDApIHNjYWxlKDEuMTUpYFxuICAgIH1cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmRkODhlNDYyMWUyZDdiZjA2OGFcIikiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiUHJlZml4IiwiY2xhbXAiLCJtYXAiLCJnZXRPZmZzZXQiLCJQYXJhbGxheCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsInRyYW5zZm9ybSIsIm1lZGlhIiwicXVlcnlTZWxlY3RvciIsIm9ubG9hZCIsIl8iLCJvblJlc2l6ZSIsInBhcmFsbGF4IiwiY3VycmVudCIsImFtb3VudCIsInRhcmdldCIsInNjYWxlIiwiY29uc29sZSIsImxvZyIsIm9mZnNldCIsInVwZGF0ZSIsInNjcm9sbCIsImlubmVySGVpZ2h0Iiwid2luZG93Iiwib2Zmc2V0Qm90dG9tIiwidG9wIiwiaGVpZ2h0Iiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9