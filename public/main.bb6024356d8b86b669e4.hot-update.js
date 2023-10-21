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
    (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(this.elements.spans, element => {
      (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
        append: false,
        element,
        expression: "<br>"
      });
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
/******/ 	__webpack_require__.h = () => ("8dbc09ed2829ea13f6aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iYjYwMjQzNTZkOGI4NmI2NjllNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0k7QUFFYztBQUNKO0FBQ1I7QUFFN0IsaUVBQWUsY0FBY0UseURBQVMsQ0FBQztFQUNyQ0csV0FBV0EsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDO01BQ0pDLE9BQU8sRUFBRSxDQUFDLENBQUM7TUFDWEMsT0FBTyxFQUFFLFlBQVk7TUFDckJDLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCQyxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCQyxVQUFVLEVBQUU7TUFDZDtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQztJQUVkLElBQUksQ0FBQ0MsZUFBZSxHQUFHYiw2Q0FBTSxDQUFDLFdBQVcsQ0FBQztJQUUxQ2MsTUFBTSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRXBCLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxLQUFLLEdBQUdkLGtEQUFLLENBQUM7TUFDMUJlLE1BQU0sRUFBRSxJQUFJO01BQ1pYLE9BQU8sRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSztNQUM1QlUsVUFBVSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBRUZmLDRDQUFJLENBQUMsSUFBSSxDQUFDSSxRQUFRLENBQUNTLEtBQUssRUFBRVYsT0FBTyxJQUFJO01BQ25DSixrREFBSyxDQUFDO1FBQ0plLE1BQU0sRUFBRSxLQUFLO1FBQ2JYLE9BQU87UUFDUFksVUFBVSxFQUFFO01BQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDQyxRQUFRLEdBQUdyQiw0Q0FBSSxDQUFDcUIsUUFBUSxDQUFDLENBQUM7SUFFL0IsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsQ0FBQyxJQUFJLENBQUNmLE9BQU8sRUFBRTtNQUM3QmdCLFNBQVMsRUFBRSxDQUFDO01BQ1pDLFFBQVEsRUFBRTtJQUNaLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUNDLENBQUMsSUFBSTtNQUN0QixJQUFJLENBQUNDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUNyREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCJcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJcIixcbiAgICAgICAgbnVtYmVyVGV4dDogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIlxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmNvdW50ZXIgPSAwXG4gICAgdGhpcy5pbmRleCA9IDBcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB3aW5kb3cuVEVYVFVSRVMgPSB7fVxuXG4gICAgdGhpcy5lbGVtZW50cy5zcGFucyA9IHNwbGl0KHtcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgIH0pXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuc3BhbnMsIGVsZW1lbnQgPT4ge1xuICAgICAgc3BsaXQoe1xuICAgICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Db21wbGV0ZSgpIHtcbiAgICB0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICB0aGlzLnRpbWVsaW5lLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgZHVyYXRpb246IDFcbiAgICB9KVxuXG4gICAgdGhpcy50aW1lbGluZS5jYWxsKF8gPT4ge1xuICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIilcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZGJjMDllZDI4MjllYTEzZjZhYVwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiUHJlZml4IiwiQ29tcG9uZW50Iiwic3BsaXQiLCJlYWNoIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiY291bnRlciIsImluZGV4IiwidHJhbnNmb3JtUHJlZml4Iiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGFucyIsImFwcGVuZCIsImV4cHJlc3Npb24iLCJvbkNvbXBsZXRlIiwidGltZWxpbmUiLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiY2FsbCIsIl8iLCJlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==