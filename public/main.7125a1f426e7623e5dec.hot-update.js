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
    window.TEXTURES = {};
    this.elements.titleSpans = split({
      append: true,
      element: this.elements.title,
      expression: "<br>"
    });
    each(this.elements.titleSpans, element => {
      split({
        append: false,
        element,
        expression: ""
      });
    });
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
/******/ 	__webpack_require__.h = () => ("6f8c08efd4578570d001")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MTI1YTFmNDI2ZTc2MjNlNWRlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0k7QUFFYztBQUV6QyxpRUFBZSxjQUFjRSx5REFBUyxDQUFDO0VBQ3JDQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixLQUFLLENBQUM7TUFDSkMsT0FBTyxFQUFFLENBQUMsQ0FBQztNQUNYQyxPQUFPLEVBQUUsWUFBWTtNQUNyQkMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUJDLFVBQVUsRUFBRTtNQUNkO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBRWQsSUFBSSxDQUFDQyxlQUFlLEdBQUdYLDZDQUFNLENBQUMsV0FBVyxDQUFDO0lBRTFDWSxNQUFNLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDUixRQUFRLENBQUNTLFVBQVUsR0FBR0MsS0FBSyxDQUFDO01BQy9CQyxNQUFNLEVBQUUsSUFBSTtNQUNaWixPQUFPLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEtBQUs7TUFDNUJXLFVBQVUsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUVGQyxJQUFJLENBQUMsSUFBSSxDQUFDYixRQUFRLENBQUNTLFVBQVUsRUFBRVYsT0FBTyxJQUFJO01BQ3hDVyxLQUFLLENBQUM7UUFDSkMsTUFBTSxFQUFFLEtBQUs7UUFDYlosT0FBTztRQUNQYSxVQUFVLEVBQUU7TUFDZCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtFQUVBRSxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNDLFFBQVEsR0FBR3JCLDRDQUFJLENBQUNxQixRQUFRLENBQUMsQ0FBQztJQUUvQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQ2pCLE9BQU8sRUFBRTtNQUM3QmtCLFNBQVMsRUFBRSxDQUFDO01BQ1pDLFFBQVEsRUFBRTtJQUNaLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUNDLENBQUMsSUFBSTtNQUN0QixJQUFJLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUNuREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXG4gICAgICAgIG51bWJlclRleHQ6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jb3VudGVyID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgd2luZG93LlRFWFRVUkVTID0ge31cblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHNwbGl0KHtcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgIH0pXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywgZWxlbWVudCA9PiB7XG4gICAgICBzcGxpdCh7XG4gICAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGV4cHJlc3Npb246IFwiXCJcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgdGhpcy50aW1lbGluZSA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgdGhpcy50aW1lbGluZS50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIGR1cmF0aW9uOiAxXG4gICAgfSlcblxuICAgIHRoaXMudGltZWxpbmUuY2FsbChfID0+IHtcbiAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIpXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmY4YzA4ZWZkNDU3ODU3MGQwMDFcIikiXSwibmFtZXMiOlsiR1NBUCIsIlByZWZpeCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsImNvdW50ZXIiLCJpbmRleCIsInRyYW5zZm9ybVByZWZpeCIsIndpbmRvdyIsIlRFWFRVUkVTIiwidGl0bGVTcGFucyIsInNwbGl0IiwiYXBwZW5kIiwiZXhwcmVzc2lvbiIsImVhY2giLCJvbkNvbXBsZXRlIiwidGltZWxpbmUiLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiY2FsbCIsIl8iLCJlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==