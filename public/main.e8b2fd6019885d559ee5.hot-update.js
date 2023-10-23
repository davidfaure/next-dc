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
    console.log("animating");
  }
  animateOut() {
    super.animateOut();
    console.log("animating");
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39935b87ddaa16e752f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lOGIyZmQ2MDE5ODg1ZDU1OWVlNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRXpDLGlFQUFlLGNBQWNBLHlEQUFTLENBQUM7RUFDckNDLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsS0FBSyxDQUFDO01BQ0pBO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFHRCxPQUFPLENBQUNFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxELElBQUksc0JBQXNCLElBQUlDLE1BQU0sRUFBRTtNQUNwQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBQ25CO0lBRUFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixPQUFPLEVBQUUsU0FBUyxDQUFDO0VBQ2pDO0VBRUFPLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFDakJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUMxQjtFQUVBRixVQUFVQSxDQUFBLEVBQUc7SUFDWCxLQUFLLENBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDMUI7QUFDRjs7Ozs7Ozs7VUN6QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudFxuICAgIH0pXG4gICAgdGhpcy5pbWFnZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpXVxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZWxlbWVudCwgXCJFTEVNRU5UXCIpXG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZ1wiKVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZ1wiKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOTkzNWI4N2RkYWExNmU3NTJmOVwiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwiYW5pbWF0ZU91dCIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlSW4iXSwic291cmNlUm9vdCI6IiJ9