"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/classes/Cursor.js":
/*!*******************************!*\
  !*** ./app/classes/Cursor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cursor)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

class Cursor {
  constructor({
    cursor,
    template
  }) {
    this.cursor = cursor;
    this.template = template;
  }
  handleCursorMove(event) {
    const {
      clientX: x,
      clientY: y
    } = event;
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.cursor, {
      duration: 0.3,
      left: x,
      top: y,
      ease: "power2.out"
    });
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("237b08e263d09b173b16")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wODliOTg5NjNjY2Y1OTRlYmJhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBRVIsTUFBTUMsTUFBTSxDQUFDO0VBQzFCQyxXQUFXQSxDQUFDO0lBQUVDLE1BQU07SUFBRUM7RUFBUyxDQUFDLEVBQUU7SUFDaEMsSUFBSSxDQUFDRCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7RUFDMUI7RUFFQUMsZ0JBQWdCQSxDQUFDQyxLQUFLLEVBQUU7SUFDdEIsTUFBTTtNQUFFQyxPQUFPLEVBQUVDLENBQUM7TUFBRUMsT0FBTyxFQUFFQztJQUFFLENBQUMsR0FBR0osS0FBSztJQUV4Q04sNENBQUksQ0FBQ1csRUFBRSxDQUFDLElBQUksQ0FBQ1IsTUFBTSxFQUFFO01BQ25CUyxRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUVMLENBQUM7TUFDUE0sR0FBRyxFQUFFSixDQUFDO01BQ05LLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDbEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgY3Vyc29yLCB0ZW1wbGF0ZSB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3JcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjM3YjA4ZTI2M2QwOWIxNzNiMTZcIikiXSwibmFtZXMiOlsiZ3NhcCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiY3Vyc29yIiwidGVtcGxhdGUiLCJoYW5kbGVDdXJzb3JNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwieCIsImNsaWVudFkiLCJ5IiwidG8iLCJkdXJhdGlvbiIsImxlZnQiLCJ0b3AiLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==