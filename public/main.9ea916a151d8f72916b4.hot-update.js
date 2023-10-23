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
    // gsap.from(this.images, {
    //   scrollTrigger: {
    //     trigger: this.element,
    //     scrub: true,
    //     markers: true
    //   },
    //   scale: 0.2,
    //   ease: "expo"
    // })
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
/******/ 	__webpack_require__.h = () => ("81fcd6b5a4079365150d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZWE5MTZhMTUxZDhmNzI5MTZiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUNKQTtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUNGLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNHLE1BQU0sR0FBRyxJQUFJLENBQUNILE9BQU8sQ0FBQ0kscUJBQXFCLENBQUMsQ0FBQztJQUVsRCxJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtJQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNQLE1BQU0sRUFBRSxTQUFTLENBQUM7RUFDckM7RUFFQVEsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDQSxTQUFTLENBQUMsQ0FBQztJQUNqQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQ0wsTUFBTSxFQUFFRSxNQUFNLENBQUNLLFdBQVcsRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUN6RTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDRjs7RUFFQUwsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzlCO0FBQ0Y7Ozs7Ozs7O1VDOUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1NjYWxlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIlxuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50XG4gICAgfSlcbiAgICB0aGlzLmltYWdlcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIildXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmltYWdlcywgXCJFTEVNRU5UXCIpXG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZyBJTlwiLCB0aGlzLmJvdW5kcywgd2luZG93LmlubmVySGVpZ2h0LCB0aGlzLnNjcm9sbClcbiAgICAvLyBnc2FwLmZyb20odGhpcy5pbWFnZXMsIHtcbiAgICAvLyAgIHNjYWxlOiAwLjIsXG4gICAgLy8gICBkdXJhdGlvbjogMS4yLFxuICAgIC8vICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgIC8vICAgZGVsYXk6IDFcbiAgICAvLyB9KVxuICAgIC8vIGdzYXAuZnJvbSh0aGlzLmltYWdlcywge1xuICAgIC8vICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgIC8vICAgICB0cmlnZ2VyOiB0aGlzLmVsZW1lbnQsXG4gICAgLy8gICAgIHNjcnViOiB0cnVlLFxuICAgIC8vICAgICBtYXJrZXJzOiB0cnVlXG4gICAgLy8gICB9LFxuICAgIC8vICAgc2NhbGU6IDAuMixcbiAgICAvLyAgIGVhc2U6IFwiZXhwb1wiXG4gICAgLy8gfSlcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgT1VUXCIpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgxZmNkNmI1YTQwNzkzNjUxNTBkXCIpIl0sIm5hbWVzIjpbIkFuaW1hdGlvbiIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwiYW5pbWF0ZU91dCIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlSW4iLCJpbm5lckhlaWdodCIsInNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=