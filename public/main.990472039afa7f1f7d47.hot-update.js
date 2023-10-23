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
    console.log(this.images, "ELEMENT");
  }
  animateIn() {
    super.animateIn();
    console.log("animating IN", this.element);
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.images, {
      scale: 0.2,
      duration: 1.2,
      ease: "expo",
      delay: 1
    });
    // gsap.from(this.images, {
    //   scrollTrigger: {
    //     trigger: this.element,
    //     scrub: true,
    //     markers: true
    //   },
    //   scale: 0.2
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
/******/ 	__webpack_require__.h = () => ("3e651112745938417b0b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45OTA0NzIwMzlhZmE3ZjFmN2Q0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDbEI7QUFDdUI7QUFFOUNDLDRDQUFJLENBQUNFLGNBQWMsQ0FBQ0QsMERBQWEsQ0FBQztBQUVsQyxpRUFBZSxjQUFjRix5REFBUyxDQUFDO0VBQ3JDSSxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLEtBQUssQ0FBQztNQUNKQTtJQUNGLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0MsTUFBTSxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUNGLE9BQU8sR0FBR0EsT0FBTztJQUV0QixJQUFJLHNCQUFzQixJQUFJRyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtJQUVBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLE1BQU0sRUFBRSxTQUFTLENBQUM7RUFDckM7RUFFQU0sU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDQSxTQUFTLENBQUMsQ0FBQztJQUNqQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQ04sT0FBTyxDQUFDO0lBQ3pDSiw0Q0FBSSxDQUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDUCxNQUFNLEVBQUU7TUFDckJRLEtBQUssRUFBRSxHQUFHO01BQ1ZDLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRSxNQUFNO01BQ1pDLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztJQUNGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDRjs7RUFFQVIsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzlCO0FBQ0Y7Ozs7Ozs7O1VDNUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1NjYWxlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIlxuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50XG4gICAgfSlcbiAgICB0aGlzLmltYWdlcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIildXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy5pbWFnZXMsIFwiRUxFTUVOVFwiKVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG4gICAgY29uc29sZS5sb2coXCJhbmltYXRpbmcgSU5cIiwgdGhpcy5lbGVtZW50KVxuICAgIGdzYXAuZnJvbSh0aGlzLmltYWdlcywge1xuICAgICAgc2NhbGU6IDAuMixcbiAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgIGRlbGF5OiAxXG4gICAgfSlcbiAgICAvLyBnc2FwLmZyb20odGhpcy5pbWFnZXMsIHtcbiAgICAvLyAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAvLyAgICAgdHJpZ2dlcjogdGhpcy5lbGVtZW50LFxuICAgIC8vICAgICBzY3J1YjogdHJ1ZSxcbiAgICAvLyAgICAgbWFya2VyczogdHJ1ZVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHNjYWxlOiAwLjJcbiAgICAvLyB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcbiAgICBjb25zb2xlLmxvZyhcImFuaW1hdGluZyBPVVRcIilcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2U2NTExMTI3NDU5Mzg0MTdiMGJcIikiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJhbmltYXRlT3V0IiwiY29uc29sZSIsImxvZyIsImFuaW1hdGVJbiIsImZyb20iLCJzY2FsZSIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==