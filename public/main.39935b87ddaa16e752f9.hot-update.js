"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Scale.js":
/*!*********************************!*\
  !*** ./app/animations/Scale.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.images = [...element.querySelectorAll("img")];
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
    console.log(element, "ELEMENT");
  }
  animateIn() {
    super.animateIn();
    console.log("animating IN");
  }
  animateOut() {
    super.animateOut();
    console.log("animating OUT");
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9852cf0310e4ccf94558")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zOTkzNWI4N2RkYWExNmU3NTJmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRXpDLGlFQUFlLGNBQWNBLHlEQUFTLENBQUM7RUFDckNDLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsS0FBSyxDQUFDO01BQ0pBO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRCxPQUFPLENBQUNFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxELElBQUksc0JBQXNCLElBQUlDLE1BQU0sRUFBRTtNQUNwQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBQ25CO0lBRUFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixPQUFPLEVBQUUsU0FBUyxDQUFDO0VBQ2pDO0VBRUFPLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFDakJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUM3QjtFQUVBRixVQUFVQSxDQUFBLEVBQUc7SUFDWCxLQUFLLENBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDOUI7QUFDRjs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudFxuICAgIH0pXG4gICAgdGhpcy5pbWFnZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpXVxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZWxlbWVudCwgXCJFTEVNRU5UXCIpXG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZyBJTlwiKVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZyBPVVRcIilcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTg1MmNmMDMxMGU0Y2NmOTQ1NThcIikiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZUluIl0sInNvdXJjZVJvb3QiOiIifQ==