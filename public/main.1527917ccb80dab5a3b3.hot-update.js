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
    super({
      element
    });
    this.onResize();
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
/******/ 	__webpack_require__.h = () => ("8512b40ef4aafb5de532")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNTI3OTE3Y2NiODBkYWI1YTNiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUVkO0FBQ2U7QUFDRjtBQUV6QixNQUFNSyxRQUFRLFNBQVNMLHlEQUFTLENBQUM7RUFDOUNNLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU87SUFFdEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdQLDZDQUFNLENBQUMsV0FBVyxDQUFDO0lBRXBDLElBQUksQ0FBQ1EsS0FBSyxHQUFHRixPQUFPLENBQUNHLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDekMsSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU0sR0FBR0MsQ0FBQyxJQUFJO01BQ3ZCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUksQ0FBQ0MsUUFBUSxHQUFHO01BQ2RDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQ0MsTUFBTTtNQUNyQkMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDRDtJQUNoQixDQUFDO0lBRUQsSUFBSSxDQUFDRSxLQUFLLEdBQUc7TUFDWEgsT0FBTyxFQUFFLElBQUk7TUFDYkUsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUVELEtBQUssQ0FBQztNQUNKVjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ00sUUFBUSxDQUFDLENBQUM7RUFDakI7RUFFQUEsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDRyxNQUFNLEdBQUcsR0FBRztJQUNqQixJQUFJLENBQUNHLE1BQU0sR0FBR2YscURBQVMsQ0FBQyxJQUFJLENBQUNHLE9BQU8sQ0FBQztFQUN2QztFQUVBYSxNQUFNQSxDQUFDQyxNQUFNLEVBQUU7SUFDYixJQUFJLENBQUMsSUFBSSxDQUFDRixNQUFNLEVBQUU7SUFFbEIsTUFBTTtNQUFFRztJQUFZLENBQUMsR0FBR0MsTUFBTTtJQUM5QixNQUFNQyxZQUFZLEdBQUdILE1BQU0sQ0FBQ04sT0FBTyxHQUFHTyxXQUFXO0lBRWpELElBQUlFLFlBQVksSUFBSSxJQUFJLENBQUNMLE1BQU0sQ0FBQ00sR0FBRyxFQUFFO01BQ25DLElBQUksQ0FBQ1gsUUFBUSxHQUFHWixrREFBSyxDQUNuQixDQUFDLElBQUksQ0FBQ2MsTUFBTSxFQUNaLElBQUksQ0FBQ0EsTUFBTSxFQUNYYixnREFBRyxDQUNELElBQUksQ0FBQ2dCLE1BQU0sQ0FBQ00sR0FBRyxHQUFHSixNQUFNLENBQUNOLE9BQU8sRUFDaEMsQ0FBQyxJQUFJLENBQUNJLE1BQU0sQ0FBQ08sTUFBTSxFQUNuQkosV0FBVyxFQUNYLElBQUksQ0FBQ04sTUFBTSxFQUNYLENBQUMsSUFBSSxDQUFDQSxNQUNSLENBQ0YsQ0FBQztNQUNELElBQUksQ0FBQ0UsS0FBSyxHQUFHaEIsa0RBQUssQ0FDaEIsQ0FBQyxFQUNELEdBQUcsRUFDSEMsZ0RBQUcsQ0FBQyxJQUFJLENBQUNnQixNQUFNLENBQUNNLEdBQUcsR0FBR0osTUFBTSxDQUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUNJLE1BQU0sQ0FBQ08sTUFBTSxFQUFFSixXQUFXLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FDaEYsQ0FBQztNQUVELElBQUksQ0FBQ2IsS0FBSyxDQUFDa0IsS0FBSyxDQUNkLElBQUksQ0FBQ25CLFNBQVMsQ0FDZixHQUFJLGtCQUFpQixJQUFJLENBQUNNLFFBQVMsZ0JBQWUsSUFBSSxDQUFDSSxLQUFNLEdBQUU7SUFDbEUsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDVCxLQUFLLENBQUNrQixLQUFLLENBQUMsSUFBSSxDQUFDbkIsU0FBUyxDQUFDLEdBQUksbUJBQWtCLElBQUksQ0FBQ1EsTUFBTyxvQkFBbUI7SUFDdkY7RUFDRjtBQUNGOzs7Ozs7OztVQ3RFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9QYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgeyBjbGFtcCwgbWFwIH0gZnJvbSBcIi4uL3V0aWxzL21hdGhcIlxuaW1wb3J0IHsgZ2V0T2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4IGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5tZWRpYSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuICAgIHRoaXMubWVkaWEub25sb2FkID0gXyA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFsbGF4ID0ge1xuICAgICAgY3VycmVudDogLXRoaXMuYW1vdW50LFxuICAgICAgdGFyZ2V0OiAtdGhpcy5hbW91bnRcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlID0ge1xuICAgICAgY3VycmVudDogMS4xNSxcbiAgICAgIHRhcmdldDogMS4xNVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnRcbiAgICB9KVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmFtb3VudCA9IDE1MFxuICAgIHRoaXMub2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZiAoIXRoaXMub2Zmc2V0KSByZXR1cm5cblxuICAgIGNvbnN0IHsgaW5uZXJIZWlnaHQgfSA9IHdpbmRvd1xuICAgIGNvbnN0IG9mZnNldEJvdHRvbSA9IHNjcm9sbC5jdXJyZW50ICsgaW5uZXJIZWlnaHRcblxuICAgIGlmIChvZmZzZXRCb3R0b20gPj0gdGhpcy5vZmZzZXQudG9wKSB7XG4gICAgICB0aGlzLnBhcmFsbGF4ID0gY2xhbXAoXG4gICAgICAgIC10aGlzLmFtb3VudCxcbiAgICAgICAgdGhpcy5hbW91bnQsXG4gICAgICAgIG1hcChcbiAgICAgICAgICB0aGlzLm9mZnNldC50b3AgLSBzY3JvbGwuY3VycmVudCxcbiAgICAgICAgICAtdGhpcy5vZmZzZXQuaGVpZ2h0LFxuICAgICAgICAgIGlubmVySGVpZ2h0LFxuICAgICAgICAgIHRoaXMuYW1vdW50LFxuICAgICAgICAgIC10aGlzLmFtb3VudFxuICAgICAgICApXG4gICAgICApXG4gICAgICB0aGlzLnNjYWxlID0gY2xhbXAoXG4gICAgICAgIDEsXG4gICAgICAgIDEuMyxcbiAgICAgICAgbWFwKHRoaXMub2Zmc2V0LnRvcCAtIHNjcm9sbC5jdXJyZW50LCAtdGhpcy5vZmZzZXQuaGVpZ2h0LCBpbm5lckhlaWdodCwgMSwgMS4zKVxuICAgICAgKVxuXG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVxuICAgICAgXSA9IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMucGFyYWxsYXh9cHgsIDApIHNjYWxlKCR7dGhpcy5zY2FsZX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lZGlhLnN0eWxlW3RoaXMudHJhbnNmb3JtXSA9IGB0cmFuc2xhdGUzZCgwLCAtJHt0aGlzLmFtb3VudH1weCwgMCkgc2NhbGUoMS4xNSlgXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NTEyYjQwZWY0YWFmYjVkZTUzMlwiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJQcmVmaXgiLCJjbGFtcCIsIm1hcCIsImdldE9mZnNldCIsIlBhcmFsbGF4IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwibWVkaWEiLCJxdWVyeVNlbGVjdG9yIiwib25sb2FkIiwiXyIsIm9uUmVzaXplIiwicGFyYWxsYXgiLCJjdXJyZW50IiwiYW1vdW50IiwidGFyZ2V0Iiwic2NhbGUiLCJvZmZzZXQiLCJ1cGRhdGUiLCJzY3JvbGwiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsIm9mZnNldEJvdHRvbSIsInRvcCIsImhlaWdodCIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==