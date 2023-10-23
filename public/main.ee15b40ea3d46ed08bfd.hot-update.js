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
    this.bounds = this.element.getBoundingClientRect();
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
  update() {
    super.update();
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("86a9ed5aee8e6b581a52")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZTE1YjQwZWEzZDQ2ZWQwOGJmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUNKQTtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUNGLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNHLE1BQU0sR0FBRyxJQUFJLENBQUNILE9BQU8sQ0FBQ0kscUJBQXFCLENBQUMsQ0FBQztJQUVsRCxJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtJQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNQLE1BQU0sRUFBRSxTQUFTLENBQUM7RUFDckM7RUFFQVEsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDQSxTQUFTLENBQUMsQ0FBQztJQUNqQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQ0wsTUFBTSxFQUFFRSxNQUFNLENBQUNLLFdBQVcsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUN6RTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQWYsNENBQUksQ0FBQ2dCLElBQUksQ0FBQyxJQUFJLENBQUNYLE1BQU0sRUFBRTtNQUNyQlksYUFBYSxFQUFFO1FBQ2JDLE9BQU8sRUFBRSxJQUFJLENBQUNkLE9BQU87UUFDckJlLEtBQUssRUFBRSxJQUFJO1FBQ1hDLE9BQU8sRUFBRTtNQUNYLENBQUM7TUFDREMsS0FBSyxFQUFFLEdBQUc7TUFDVkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0VBQ0o7RUFFQVosVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzlCO0VBRUFXLE1BQU1BLENBQUEsRUFBRztJQUNQLEtBQUssQ0FBQ0EsTUFBTSxDQUFDLENBQUM7RUFDaEI7QUFDRjs7Ozs7Ozs7VUNsREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiXG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnRcbiAgICB9KVxuICAgIHRoaXMuaW1hZ2VzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKV1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VzLCBcIkVMRU1FTlRcIilcbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0aW5nIElOXCIsIHRoaXMuYm91bmRzLCB3aW5kb3cuaW5uZXJIZWlnaHQsIHRoaXMuc2Nyb2xsKVxuICAgIC8vIGdzYXAuZnJvbSh0aGlzLmltYWdlcywge1xuICAgIC8vICAgc2NhbGU6IDAuMixcbiAgICAvLyAgIGR1cmF0aW9uOiAxLjIsXG4gICAgLy8gICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgLy8gICBkZWxheTogMVxuICAgIC8vIH0pXG4gICAgZ3NhcC5mcm9tKHRoaXMuaW1hZ2VzLCB7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIG1hcmtlcnM6IHRydWVcbiAgICAgIH0sXG4gICAgICBzY2FsZTogMC4yLFxuICAgICAgZWFzZTogXCJleHBvXCJcbiAgICB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZyBPVVRcIilcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBzdXBlci51cGRhdGUoKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NmE5ZWQ1YWVlOGU2YjU4MWE1MlwiKSJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZUluIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGwiLCJmcm9tIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzY3J1YiIsIm1hcmtlcnMiLCJzY2FsZSIsImVhc2UiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9