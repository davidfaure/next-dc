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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");



gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.images = [...element.querySelectorAll("img")];
    this.element = element;
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
    console.log(element, "ELEMENT");
  }
  animateIn() {
    super.animateIn();
    console.log("animating IN");
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.images, {
      scrollTrigger: {
        trigger: this.element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true
      },
      scale: 0.2
    });
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
/******/ 	__webpack_require__.h = () => ("5f350333dd3fc30ea6b9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYjNjNDUxOWM0ZThiZWY3NmUxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUNKQTtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUNGLE9BQU8sR0FBR0EsT0FBTztJQUV0QixJQUFJLHNCQUFzQixJQUFJRyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtJQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sT0FBTyxFQUFFLFNBQVMsQ0FBQztFQUNqQztFQUVBTyxTQUFTQSxDQUFBLEVBQUc7SUFDVixLQUFLLENBQUNBLFNBQVMsQ0FBQyxDQUFDO0lBQ2pCRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDM0JWLDRDQUFJLENBQUNZLElBQUksQ0FBQyxJQUFJLENBQUNQLE1BQU0sRUFBRTtNQUNyQlEsYUFBYSxFQUFFO1FBQ2JDLE9BQU8sRUFBRSxJQUFJLENBQUNWLE9BQU87UUFDckJXLEtBQUssRUFBRSxTQUFTO1FBQ2hCQyxHQUFHLEVBQUUsU0FBUztRQUNkQyxLQUFLLEVBQUUsSUFBSTtRQUNYQyxPQUFPLEVBQUU7TUFDWCxDQUFDO01BQ0RDLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztFQUNKO0VBRUFYLFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUM5QjtBQUNGOzs7Ozs7OztVQ3hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9TY2FsZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgU2Nyb2xsVHJpZ2dlciBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCJcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudFxuICAgIH0pXG4gICAgdGhpcy5pbWFnZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpXVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQsIFwiRUxFTUVOVFwiKVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgSU5cIilcbiAgICBnc2FwLmZyb20odGhpcy5pbWFnZXMsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogdGhpcy5lbGVtZW50LFxuICAgICAgICBzdGFydDogXCJ0b3AgODAlXCIsXG4gICAgICAgIGVuZDogXCJ0b3AgMjAlXCIsXG4gICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICBtYXJrZXJzOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2NhbGU6IDAuMlxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0aW5nIE9VVFwiKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZjM1MDMzM2RkM2ZjMzBlYTZiOVwiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZUluIiwiZnJvbSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsIm1hcmtlcnMiLCJzY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=