"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Reveal.js":
/*!**********************************!*\
  !*** ./app/animations/Reveal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text */ "./app/utils/text.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({
    element
  }) {
    const lines = [];
    const paragraphs = element.querySelectorAll("h1, h2, p");

    // if (paragraphs.length !== 0) {
    //   each(paragraphs, element => {
    //     split({ element })
    //     split({ element })

    //     lines.push(...element.querySelectorAll("span span"))
    //   })
    // } else {
    //   split({ element })
    //   split({ element })

    //   lines.push(...element.querySelectorAll("span span"))
    // }

    super({
      element,
      elements: {
        lines
      }
    });
    this.spans = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.splitIndividual)(paragraphs);
    console.log(this.spans, "TEST");
    this.onResize();

    // if ("IntersectionObserver" in window) {
    //   this.animateOut()
    // }
  }

  animateIn() {
    super.animateIn();
    console.log(this.lines);
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.lines, (line, lineIndex) => {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(line, word => {
        word.style.transition = `transform 1.5s ${0.5 + lineIndex * 0.1}s ease`;
        word.style[this.transformPrefix] = "translateY(0)";
      });
    });
  }
  animateOut() {
    super.animateOut();
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.lines, line => {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(line, word => {
        word.style[this.transformPrefix] = "translateY(100%)";
      });
    });
  }
  onResize() {
    this.lines = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.calculate)(this.elements.lines);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9f66f06d4a7716152c67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44OTdmOWJlYWJlY2YyYWFlNDYyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDaEIsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzs7SUFFeEQ7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBOztJQUVBLEtBQUssQ0FBQztNQUNKSCxPQUFPO01BQ1BJLFFBQVEsRUFBRTtRQUNSSDtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDSSxLQUFLLEdBQUdQLDJEQUFlLENBQUNJLFVBQVUsQ0FBQztJQUV4Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDRixLQUFLLEVBQUUsTUFBTSxDQUFDO0lBRS9CLElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUM7O0lBRWY7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ04sS0FBSyxDQUFDO0lBRXZCUCxrREFBSSxDQUFDLElBQUksQ0FBQ08sS0FBSyxFQUFFLENBQUNTLElBQUksRUFBRUMsU0FBUyxLQUFLO01BQ3BDakIsa0RBQUksQ0FBQ2dCLElBQUksRUFBRUUsSUFBSSxJQUFJO1FBQ2pCQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxHQUFJLGtCQUFpQixHQUFHLEdBQUdILFNBQVMsR0FBRyxHQUFJLFFBQU87UUFDdkVDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0UsZUFBZSxDQUFDLEdBQUcsZUFBZTtNQUNwRCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtFQUVBQyxVQUFVQSxDQUFBLEVBQUc7SUFDWCxLQUFLLENBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBRWxCdEIsa0RBQUksQ0FBQyxJQUFJLENBQUNPLEtBQUssRUFBRVMsSUFBSSxJQUFJO01BQ3ZCaEIsa0RBQUksQ0FBQ2dCLElBQUksRUFBRUUsSUFBSSxJQUFJO1FBQ2pCQSxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNFLGVBQWUsQ0FBQyxHQUFHLGtCQUFrQjtNQUN2RCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtFQUVBUCxRQUFRQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNQLEtBQUssR0FBR0wscURBQVMsQ0FBQyxJQUFJLENBQUNRLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDO0VBQzdDO0FBQ0Y7Ozs7Ozs7O1VDdEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1JldmVhbC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBzcGxpdEluZGl2aWR1YWwgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBjb25zdCBsaW5lcyA9IFtdXG4gICAgY29uc3QgcGFyYWdyYXBocyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxLCBoMiwgcFwiKVxuXG4gICAgLy8gaWYgKHBhcmFncmFwaHMubGVuZ3RoICE9PSAwKSB7XG4gICAgLy8gICBlYWNoKHBhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgIC8vICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcbiAgICAvLyAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG5cbiAgICAvLyAgICAgbGluZXMucHVzaCguLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIikpXG4gICAgLy8gICB9KVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBzcGxpdCh7IGVsZW1lbnQgfSlcbiAgICAvLyAgIHNwbGl0KHsgZWxlbWVudCB9KVxuXG4gICAgLy8gICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICAvLyB9XG5cbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZXNcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zcGFucyA9IHNwbGl0SW5kaXZpZHVhbChwYXJhZ3JhcGhzKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5zcGFucywgXCJURVNUXCIpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIC8vIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIC8vIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5saW5lcylcblxuICAgIGVhY2godGhpcy5saW5lcywgKGxpbmUsIGxpbmVJbmRleCkgPT4ge1xuICAgICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAgICAgd29yZC5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAxLjVzICR7MC41ICsgbGluZUluZGV4ICogMC4xfXMgZWFzZWBcbiAgICAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBcInRyYW5zbGF0ZVkoMClcIlxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcblxuICAgIGVhY2godGhpcy5saW5lcywgbGluZSA9PiB7XG4gICAgICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmxpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudHMubGluZXMpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlmNjZmMDZkNGE3NzE2MTUyYzY3XCIpIl0sIm5hbWVzIjpbImVhY2giLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsInNwbGl0SW5kaXZpZHVhbCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50cyIsInNwYW5zIiwiY29uc29sZSIsImxvZyIsIm9uUmVzaXplIiwiYW5pbWF0ZUluIiwibGluZSIsImxpbmVJbmRleCIsIndvcmQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJhbmltYXRlT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==