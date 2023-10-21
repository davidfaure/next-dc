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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





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
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
    window.TEXTURES = {};
    this.elements.spans = (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      append: true,
      element: this.elements.title,
      expression: "<br>"
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(this.elements.spans, element => {
      (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
        append: false,
        element,
        expression: "<br>"
      });
    });
    this.createLoader();
  }
  createLoader() {
    this.animateIn = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline();
    this.animateIn.set(this.elements.title, {
      autoAlpha: 1
    });
  }
  onComplete() {
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].timeline();
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
/******/ 	__webpack_require__.h = () => ("a77ed846dacbf5be7205")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZGJjMDllZDI4MjllYTEzZjZhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ047QUFFYztBQUNKO0FBQ1I7QUFFN0IsaUVBQWUsY0FBY0cseURBQVMsQ0FBQztFQUNyQ0csV0FBV0EsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDO01BQ0pDLE9BQU8sRUFBRSxDQUFDLENBQUM7TUFDWEMsT0FBTyxFQUFFLFlBQVk7TUFDckJDLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCQyxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCQyxVQUFVLEVBQUU7TUFDZDtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFFaEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdaLDZDQUFNLENBQUMsV0FBVyxDQUFDO0lBRTFDYSxNQUFNLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDUCxRQUFRLENBQUNRLEtBQUssR0FBR2Isa0RBQUssQ0FBQztNQUMxQmMsTUFBTSxFQUFFLElBQUk7TUFDWlYsT0FBTyxFQUFFLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLO01BQzVCUyxVQUFVLEVBQUU7SUFDZCxDQUFDLENBQUM7SUFFRmQsNENBQUksQ0FBQyxJQUFJLENBQUNJLFFBQVEsQ0FBQ1EsS0FBSyxFQUFFVCxPQUFPLElBQUk7TUFDbkNKLGtEQUFLLENBQUM7UUFDSmMsTUFBTSxFQUFFLEtBQUs7UUFDYlYsT0FBTztRQUNQVyxVQUFVLEVBQUU7TUFDZCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0VBQ3JCO0VBRUFBLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0MsU0FBUyxHQUFHcEIsc0NBQUksQ0FBQ3FCLFFBQVEsQ0FBQyxDQUFDO0lBRWhDLElBQUksQ0FBQ0QsU0FBUyxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDZCxRQUFRLENBQUNDLEtBQUssRUFBRTtNQUN0Q2MsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDSCxRQUFRLEdBQUd0Qiw0Q0FBSSxDQUFDc0IsUUFBUSxDQUFDLENBQUM7SUFFL0IsSUFBSSxDQUFDQSxRQUFRLENBQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUNsQixPQUFPLEVBQUU7TUFDN0JnQixTQUFTLEVBQUUsQ0FBQztNQUNaRyxRQUFRLEVBQUU7SUFDWixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNMLFFBQVEsQ0FBQ00sSUFBSSxDQUFDQyxDQUFDLElBQUk7TUFDdEIsSUFBSSxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDOURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCwgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIlxuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2xhc3Nlczoge30sXG4gICAgICBlbGVtZW50OiBcIi5wcmVsb2FkZXJcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcbiAgICAgICAgbnVtYmVyOiBcIi5wcmVsb2FkZXJfX251bWJlclwiLFxuICAgICAgICBudW1iZXJUZXh0OiBcIi5wcmVsb2FkZXJfX251bWJlcl9fdGV4dFwiXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY291bnRlciA9IDBcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB3aW5kb3cuVEVYVFVSRVMgPSB7fVxuXG4gICAgdGhpcy5lbGVtZW50cy5zcGFucyA9IHNwbGl0KHtcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgIH0pXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuc3BhbnMsIGVsZW1lbnQgPT4ge1xuICAgICAgc3BsaXQoe1xuICAgICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICB0aGlzLmFuaW1hdGVJbi5zZXQodGhpcy5lbGVtZW50cy50aXRsZSwge1xuICAgICAgYXV0b0FscGhhOiAxXG4gICAgfSlcbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgdGhpcy50aW1lbGluZSA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgdGhpcy50aW1lbGluZS50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIGR1cmF0aW9uOiAxXG4gICAgfSlcblxuICAgIHRoaXMudGltZWxpbmUuY2FsbChfID0+IHtcbiAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIpXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTc3ZWQ4NDZkYWNiZjViZTcyMDVcIikiXSwibmFtZXMiOlsiR1NBUCIsImdzYXAiLCJQcmVmaXgiLCJDb21wb25lbnQiLCJzcGxpdCIsImVhY2giLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJjb3VudGVyIiwidHJhbnNmb3JtUHJlZml4Iiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGFucyIsImFwcGVuZCIsImV4cHJlc3Npb24iLCJjcmVhdGVMb2FkZXIiLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsInNldCIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJ0byIsImR1cmF0aW9uIiwiY2FsbCIsIl8iLCJlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==