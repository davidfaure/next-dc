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
      element,
      scroll
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
  update() {
    super.update();
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93f74a927c41c389a5bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZDMyMjI2ZTViZWNhYjVhNThhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUM7RUFBTyxDQUFDLEVBQUU7SUFDL0IsS0FBSyxDQUFDO01BQ0pELE9BQU87TUFDUEM7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsSUFBSSxDQUFDSCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDSSxNQUFNLEdBQUcsSUFBSSxDQUFDSixPQUFPLENBQUNLLHFCQUFxQixDQUFDLENBQUM7SUFDbEQsSUFBSSxDQUFDSixNQUFNLEdBQUdBLE1BQU07SUFFcEIsSUFBSSxzQkFBc0IsSUFBSUssTUFBTSxFQUFFO01BQ3BDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFDbkI7SUFFQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUCxNQUFNLEVBQUUsU0FBUyxDQUFDO0VBQ3JDO0VBRUFRLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFDakJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUNMLE1BQU0sRUFBRUUsTUFBTSxDQUFDSyxXQUFXLEVBQUUsSUFBSSxDQUFDVixNQUFNLENBQUM7SUFDekU7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FMLDRDQUFJLENBQUNnQixJQUFJLENBQUMsSUFBSSxDQUFDVixNQUFNLEVBQUU7TUFDckJXLGFBQWEsRUFBRTtRQUNiQyxPQUFPLEVBQUUsSUFBSSxDQUFDZCxPQUFPO1FBQ3JCZSxLQUFLLEVBQUUsSUFBSTtRQUNYQyxPQUFPLEVBQUU7TUFDWCxDQUFDO01BQ0RDLEtBQUssRUFBRSxHQUFHO01BQ1ZDLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztFQUNKO0VBRUFYLFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUM5QjtFQUVBVSxNQUFNQSxDQUFBLEVBQUc7SUFDUCxLQUFLLENBQUNBLE1BQU0sQ0FBQyxDQUFDO0VBQ2hCO0FBQ0Y7Ozs7Ozs7O1VDcERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1NjYWxlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIlxuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBzY3JvbGwgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBzY3JvbGxcbiAgICB9KVxuICAgIHRoaXMuaW1hZ2VzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKV1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLnNjcm9sbCA9IHNjcm9sbFxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy5pbWFnZXMsIFwiRUxFTUVOVFwiKVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgSU5cIiwgdGhpcy5ib3VuZHMsIHdpbmRvdy5pbm5lckhlaWdodCwgdGhpcy5zY3JvbGwpXG4gICAgLy8gZ3NhcC5mcm9tKHRoaXMuaW1hZ2VzLCB7XG4gICAgLy8gICBzY2FsZTogMC4yLFxuICAgIC8vICAgZHVyYXRpb246IDEuMixcbiAgICAvLyAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAvLyAgIGRlbGF5OiAxXG4gICAgLy8gfSlcbiAgICBnc2FwLmZyb20odGhpcy5pbWFnZXMsIHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogdGhpcy5lbGVtZW50LFxuICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgbWFya2VyczogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNjYWxlOiAwLjIsXG4gICAgICBlYXNlOiBcImV4cG9cIlxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0aW5nIE9VVFwiKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHN1cGVyLnVwZGF0ZSgpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkzZjc0YTkyN2M0MWMzODlhNWJmXCIpIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJzY3JvbGwiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwiYW5pbWF0ZU91dCIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlSW4iLCJpbm5lckhlaWdodCIsImZyb20iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInNjcnViIiwibWFya2VycyIsInNjYWxlIiwiZWFzZSIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=