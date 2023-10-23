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
        end: "bottom bottom",
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
/******/ 	__webpack_require__.h = () => ("8d442c99e40efe3e0ab3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZjM1MDMzM2RkM2ZjMzBlYTZiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUNKQTtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUNGLE9BQU8sR0FBR0EsT0FBTztJQUV0QixJQUFJLHNCQUFzQixJQUFJRyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtJQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sT0FBTyxFQUFFLFNBQVMsQ0FBQztFQUNqQztFQUVBTyxTQUFTQSxDQUFBLEVBQUc7SUFDVixLQUFLLENBQUNBLFNBQVMsQ0FBQyxDQUFDO0lBQ2pCRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDM0JWLDRDQUFJLENBQUNZLElBQUksQ0FBQyxJQUFJLENBQUNQLE1BQU0sRUFBRTtNQUNyQlEsYUFBYSxFQUFFO1FBQ2JDLE9BQU8sRUFBRSxJQUFJLENBQUNWLE9BQU87UUFDckJXLEtBQUssRUFBRSxTQUFTO1FBQ2hCQyxHQUFHLEVBQUUsZUFBZTtRQUNwQkMsS0FBSyxFQUFFLElBQUk7UUFDWEMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNEQyxLQUFLLEVBQUU7SUFDVCxDQUFDLENBQUM7RUFDSjtFQUVBWCxVQUFVQSxDQUFBLEVBQUc7SUFDWCxLQUFLLENBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDOUI7QUFDRjs7Ozs7Ozs7VUN4Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiXG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnRcbiAgICB9KVxuICAgIHRoaXMuaW1hZ2VzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKV1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhlbGVtZW50LCBcIkVMRU1FTlRcIilcbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0aW5nIElOXCIpXG4gICAgZ3NhcC5mcm9tKHRoaXMuaW1hZ2VzLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgc3RhcnQ6IFwidG9wIDgwJVwiLFxuICAgICAgICBlbmQ6IFwiYm90dG9tIGJvdHRvbVwiLFxuICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgbWFya2VyczogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNjYWxlOiAwLjJcbiAgICB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZyBPVVRcIilcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGQ0NDJjOTllNDBlZmUzZTBhYjNcIikiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJhbmltYXRlT3V0IiwiY29uc29sZSIsImxvZyIsImFuaW1hdGVJbiIsImZyb20iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJtYXJrZXJzIiwic2NhbGUiXSwic291cmNlUm9vdCI6IiJ9