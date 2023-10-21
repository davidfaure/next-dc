"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super({
      classes: {},
      element: ".preloader",
      elements: {
        title: ".preloader__text",
        number: ".preloader__number",
        numberText: ".preloader__number__text"
      }
    });
    this.counter = 0;
    this.index = 0;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
  }
  onComplete() {
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    this.timeline.to(this.element, {
      autoAlpha: 0,
      duration: 1
    });
    this.timeline.call(_ => {
      this.emit("complete");
    });
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7125a1f426e7623e5dec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MjllNDI2NDA2NTA1NWI2MTBlZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0k7QUFFYztBQUV6QyxpRUFBZSxjQUFjRSx5REFBUyxDQUFDO0VBQ3JDQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixLQUFLLENBQUM7TUFDSkMsT0FBTyxFQUFFLENBQUMsQ0FBQztNQUNYQyxPQUFPLEVBQUUsWUFBWTtNQUNyQkMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUJDLFVBQVUsRUFBRTtNQUNkO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBRWQsSUFBSSxDQUFDQyxlQUFlLEdBQUdYLDZDQUFNLENBQUMsV0FBVyxDQUFDO0VBQzVDO0VBRUFZLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ0MsUUFBUSxHQUFHZCw0Q0FBSSxDQUFDYyxRQUFRLENBQUMsQ0FBQztJQUUvQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQ1YsT0FBTyxFQUFFO01BQzdCVyxTQUFTLEVBQUUsQ0FBQztNQUNaQyxRQUFRLEVBQUU7SUFDWixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxDQUFDLElBQUk7TUFDdEIsSUFBSSxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDbkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBlbGVtZW50OiBcIi5wcmVsb2FkZXJcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcbiAgICAgICAgbnVtYmVyOiBcIi5wcmVsb2FkZXJfX251bWJlclwiLFxuICAgICAgICBudW1iZXJUZXh0OiBcIi5wcmVsb2FkZXJfX251bWJlcl9fdGV4dFwiXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY291bnRlciA9IDBcbiAgICB0aGlzLmluZGV4ID0gMFxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgdGhpcy50aW1lbGluZSA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgdGhpcy50aW1lbGluZS50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIGR1cmF0aW9uOiAxXG4gICAgfSlcblxuICAgIHRoaXMudGltZWxpbmUuY2FsbChfID0+IHtcbiAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIpXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzEyNWExZjQyNmU3NjIzZTVkZWNcIikiXSwibmFtZXMiOlsiR1NBUCIsIlByZWZpeCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsImNvdW50ZXIiLCJpbmRleCIsInRyYW5zZm9ybVByZWZpeCIsIm9uQ29tcGxldGUiLCJ0aW1lbGluZSIsInRvIiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJjYWxsIiwiXyIsImVtaXQiXSwic291cmNlUm9vdCI6IiJ9