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
    element,
    scroll
  }) {
    super({
      element
    });
    this.images = [...element.querySelectorAll("img")];
    this.element = element;
    this.bounds = this.element.getBoundingClientRect();
    this.scroll = scroll;
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
    console.log(this.images, "ELEMENT");
  }
  animateIn() {
    super.animateIn();
    console.log("animating IN", this.bounds, window.innerHeight, this.scroll);
    // gsap.from(this.images, {
    //   scale: 0.2,
    //   duration: 1.2,
    //   ease: "expo.out",
    //   delay: 1
    // })
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.images, {
      scrollTrigger: {
        trigger: this.element,
        scrub: true,
        markers: true
      },
      scale: 0.2,
      ease: "expo"
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
/******/ 	__webpack_require__.h = () => ("2d32226e5becab5a58aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZGMyNDA5ZDE3YWNhMDMyYTZjNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUM7RUFBTyxDQUFDLEVBQUU7SUFDL0IsS0FBSyxDQUFDO01BQ0pEO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0ksTUFBTSxHQUFHLElBQUksQ0FBQ0osT0FBTyxDQUFDSyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xELElBQUksQ0FBQ0osTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksc0JBQXNCLElBQUlLLE1BQU0sRUFBRTtNQUNwQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBQ25CO0lBRUFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1AsTUFBTSxFQUFFLFNBQVMsQ0FBQztFQUNyQztFQUVBUSxTQUFTQSxDQUFBLEVBQUc7SUFDVixLQUFLLENBQUNBLFNBQVMsQ0FBQyxDQUFDO0lBQ2pCRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDTCxNQUFNLEVBQUVFLE1BQU0sQ0FBQ0ssV0FBVyxFQUFFLElBQUksQ0FBQ1YsTUFBTSxDQUFDO0lBQ3pFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBTCw0Q0FBSSxDQUFDZ0IsSUFBSSxDQUFDLElBQUksQ0FBQ1YsTUFBTSxFQUFFO01BQ3JCVyxhQUFhLEVBQUU7UUFDYkMsT0FBTyxFQUFFLElBQUksQ0FBQ2QsT0FBTztRQUNyQmUsS0FBSyxFQUFFLElBQUk7UUFDWEMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNEQyxLQUFLLEVBQUUsR0FBRztNQUNWQyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSjtFQUVBWCxVQUFVQSxDQUFBLEVBQUc7SUFDWCxLQUFLLENBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDOUI7QUFDRjs7Ozs7Ozs7VUMvQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiXG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIHNjcm9sbCB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudFxuICAgIH0pXG4gICAgdGhpcy5pbWFnZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpXVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuc2Nyb2xsID0gc2Nyb2xsXG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmltYWdlcywgXCJFTEVNRU5UXCIpXG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZyBJTlwiLCB0aGlzLmJvdW5kcywgd2luZG93LmlubmVySGVpZ2h0LCB0aGlzLnNjcm9sbClcbiAgICAvLyBnc2FwLmZyb20odGhpcy5pbWFnZXMsIHtcbiAgICAvLyAgIHNjYWxlOiAwLjIsXG4gICAgLy8gICBkdXJhdGlvbjogMS4yLFxuICAgIC8vICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgIC8vICAgZGVsYXk6IDFcbiAgICAvLyB9KVxuICAgIGdzYXAuZnJvbSh0aGlzLmltYWdlcywge1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICBtYXJrZXJzOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2NhbGU6IDAuMixcbiAgICAgIGVhc2U6IFwiZXhwb1wiXG4gICAgfSlcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgT1VUXCIpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJkMzIyMjZlNWJlY2FiNWE1OGFhXCIpIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJzY3JvbGwiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwiYW5pbWF0ZU91dCIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlSW4iLCJpbm5lckhlaWdodCIsImZyb20iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInNjcnViIiwibWFya2VycyIsInNjYWxlIiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=