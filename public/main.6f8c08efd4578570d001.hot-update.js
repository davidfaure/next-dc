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
    this.elements.spans = split({
      append: true,
      element: this.elements.title,
      expression: "<br>"
    });
    each(this.elements.spans, element => {
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
/******/ 	__webpack_require__.h = () => ("5e1bacea635037c85271")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZjhjMDhlZmQ0NTc4NTcwZDAwMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0k7QUFFYztBQUV6QyxpRUFBZSxjQUFjRSx5REFBUyxDQUFDO0VBQ3JDQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixLQUFLLENBQUM7TUFDSkMsT0FBTyxFQUFFLENBQUMsQ0FBQztNQUNYQyxPQUFPLEVBQUUsWUFBWTtNQUNyQkMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUJDLFVBQVUsRUFBRTtNQUNkO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBRWQsSUFBSSxDQUFDQyxlQUFlLEdBQUdYLDZDQUFNLENBQUMsV0FBVyxDQUFDO0lBRTFDWSxNQUFNLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDUixRQUFRLENBQUNTLEtBQUssR0FBR0MsS0FBSyxDQUFDO01BQzFCQyxNQUFNLEVBQUUsSUFBSTtNQUNaWixPQUFPLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEtBQUs7TUFDNUJXLFVBQVUsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUVGQyxJQUFJLENBQUMsSUFBSSxDQUFDYixRQUFRLENBQUNTLEtBQUssRUFBRVYsT0FBTyxJQUFJO01BQ25DVyxLQUFLLENBQUM7UUFDSkMsTUFBTSxFQUFFLEtBQUs7UUFDYlosT0FBTztRQUNQYSxVQUFVLEVBQUU7TUFDZCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtFQUVBRSxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNDLFFBQVEsR0FBR3JCLDRDQUFJLENBQUNxQixRQUFRLENBQUMsQ0FBQztJQUUvQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQ2pCLE9BQU8sRUFBRTtNQUM3QmtCLFNBQVMsRUFBRSxDQUFDO01BQ1pDLFFBQVEsRUFBRTtJQUNaLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUNDLENBQUMsSUFBSTtNQUN0QixJQUFJLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUNuREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXG4gICAgICAgIG51bWJlclRleHQ6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jb3VudGVyID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgd2luZG93LlRFWFRVUkVTID0ge31cblxuICAgIHRoaXMuZWxlbWVudHMuc3BhbnMgPSBzcGxpdCh7XG4gICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogXCI8YnI+XCJcbiAgICB9KVxuXG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLnNwYW5zLCBlbGVtZW50ID0+IHtcbiAgICAgIHNwbGl0KHtcbiAgICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJcIlxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Db21wbGV0ZSgpIHtcbiAgICB0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICB0aGlzLnRpbWVsaW5lLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgZHVyYXRpb246IDFcbiAgICB9KVxuXG4gICAgdGhpcy50aW1lbGluZS5jYWxsKF8gPT4ge1xuICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIilcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZTFiYWNlYTYzNTAzN2M4NTI3MVwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiUHJlZml4IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiY291bnRlciIsImluZGV4IiwidHJhbnNmb3JtUHJlZml4Iiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGFucyIsInNwbGl0IiwiYXBwZW5kIiwiZXhwcmVzc2lvbiIsImVhY2giLCJvbkNvbXBsZXRlIiwidGltZWxpbmUiLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiY2FsbCIsIl8iLCJlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==