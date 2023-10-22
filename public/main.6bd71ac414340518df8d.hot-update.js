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
    this.index = 0;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
    window.TEXTURES = {};
    this.elements.spans = (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      append: true,
      element: this.elements.title,
      expression: "<br>"
    });

    // each(this.elements.spans, element => {
    //   split({
    //     append: false,
    //     element,
    //     expression: ""
    //   })
    // })
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
/******/ 	__webpack_require__.h = () => ("bb6024356d8b86b669e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YmQ3MWFjNDE0MzQwNTE4ZGY4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0k7QUFFYztBQUNKO0FBQ1I7QUFFN0IsaUVBQWUsY0FBY0UseURBQVMsQ0FBQztFQUNyQ0csV0FBV0EsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDO01BQ0pDLE9BQU8sRUFBRSxDQUFDLENBQUM7TUFDWEMsT0FBTyxFQUFFLFlBQVk7TUFDckJDLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCQyxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCQyxVQUFVLEVBQUU7TUFDZDtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUVkLElBQUksQ0FBQ0MsZUFBZSxHQUFHYiw2Q0FBTSxDQUFDLFdBQVcsQ0FBQztJQUUxQ2MsTUFBTSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRXBCLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxLQUFLLEdBQUdkLGtEQUFLLENBQUM7TUFDMUJlLE1BQU0sRUFBRSxJQUFJO01BQ1pYLE9BQU8sRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSztNQUM1QlUsVUFBVSxFQUFFO0lBQ2QsQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFDLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ0MsUUFBUSxHQUFHckIsNENBQUksQ0FBQ3FCLFFBQVEsQ0FBQyxDQUFDO0lBRS9CLElBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFFLENBQUMsSUFBSSxDQUFDZixPQUFPLEVBQUU7TUFDN0JnQixTQUFTLEVBQUUsQ0FBQztNQUNaQyxRQUFRLEVBQUU7SUFDWixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxDQUFDLElBQUk7TUFDdEIsSUFBSSxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDckRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCIuLi91dGlscy90ZXh0XCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXG4gICAgICAgIG51bWJlclRleHQ6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jb3VudGVyID0gMFxuICAgIHRoaXMuaW5kZXggPSAwXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgd2luZG93LlRFWFRVUkVTID0ge31cblxuICAgIHRoaXMuZWxlbWVudHMuc3BhbnMgPSBzcGxpdCh7XG4gICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogXCI8YnI+XCJcbiAgICB9KVxuXG4gICAgLy8gZWFjaCh0aGlzLmVsZW1lbnRzLnNwYW5zLCBlbGVtZW50ID0+IHtcbiAgICAvLyAgIHNwbGl0KHtcbiAgICAvLyAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAvLyAgICAgZWxlbWVudCxcbiAgICAvLyAgICAgZXhwcmVzc2lvbjogXCJcIlxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICB9XG5cbiAgb25Db21wbGV0ZSgpIHtcbiAgICB0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICB0aGlzLnRpbWVsaW5lLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgZHVyYXRpb246IDFcbiAgICB9KVxuXG4gICAgdGhpcy50aW1lbGluZS5jYWxsKF8gPT4ge1xuICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIilcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYjYwMjQzNTZkOGI4NmI2NjllNFwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiUHJlZml4IiwiQ29tcG9uZW50Iiwic3BsaXQiLCJlYWNoIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiY291bnRlciIsImluZGV4IiwidHJhbnNmb3JtUHJlZml4Iiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGFucyIsImFwcGVuZCIsImV4cHJlc3Npb24iLCJvbkNvbXBsZXRlIiwidGltZWxpbmUiLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiY2FsbCIsIl8iLCJlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==