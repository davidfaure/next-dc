"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Paragraph.js":
/*!*************************************!*\
  !*** ./app/animations/Paragraph.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({
    element
  }) {
    const lines = [];
    const paragraphs = element.querySelectorAll("h1, h2, p");
    if (paragraphs.length !== 0) {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(paragraphs, element => {
        (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
          element
        });
        (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
          element
        });
        lines.push(...element.querySelectorAll("span span"));
      });
    } else {
      (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
        element
      });
      (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
        element
      });
      lines.push(...element.querySelectorAll("span span"));
    }
    super({
      element,
      elements: {
        lines
      }
    });
    this.onResize();
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
  }
  animateIn() {
    super.animateIn();
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 0.5
    });
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    });
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.lines, line => {
      this.timelineIn.fromTo(line, {
        autoAlpha: 0,
        y: "100%"
      }, {
        autoAlpha: 1,
        duration: 1.4,
        stagger: 0.06,
        ease: "expo.out",
        y: "0%"
      }, 0);
    });
  }
  animateOut() {
    super.animateOut();
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.lines, {
      autoAlpha: 0
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
/******/ 	__webpack_require__.h = () => ("b99c90f0187c9a7a6b9c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZmQ0MmI5ZWMzNGE1ZWQzMzlkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVXO0FBRUk7QUFDdEI7QUFFdkIsaUVBQWUsY0FBY0MseURBQVMsQ0FBQztFQUNyQ0ksV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNoQixNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUJILGlEQUFLLENBQUM7VUFBRUc7UUFBUSxDQUFDLENBQUM7UUFDbEJILGlEQUFLLENBQUM7VUFBRUc7UUFBUSxDQUFDLENBQUM7UUFFbEJDLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDdEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNO01BQ0xOLGlEQUFLLENBQUM7UUFBRUc7TUFBUSxDQUFDLENBQUM7TUFDbEJILGlEQUFLLENBQUM7UUFBRUc7TUFBUSxDQUFDLENBQUM7TUFFbEJDLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQ7SUFFQSxLQUFLLENBQUM7TUFDSkgsT0FBTztNQUNQTSxRQUFRLEVBQUU7UUFDUkw7TUFDRjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ00sUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdiLDRDQUFJLENBQUNjLFFBQVEsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFFL0MsSUFBSSxDQUFDRixVQUFVLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNkLE9BQU8sRUFBRTtNQUFFZSxTQUFTLEVBQUU7SUFBRSxDQUFDLENBQUM7SUFFbkRyQixrREFBSSxDQUFDLElBQUksQ0FBQ08sS0FBSyxFQUFFZSxJQUFJLElBQUk7TUFDdkIsSUFBSSxDQUFDTCxVQUFVLENBQUNNLE1BQU0sQ0FDcEJELElBQUksRUFDSjtRQUNFRCxTQUFTLEVBQUUsQ0FBQztRQUNaRyxDQUFDLEVBQUU7TUFDTCxDQUFDLEVBQ0Q7UUFDRUgsU0FBUyxFQUFFLENBQUM7UUFDWkksUUFBUSxFQUFFLEdBQUc7UUFDYkMsT0FBTyxFQUFFLElBQUk7UUFDYkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJILENBQUMsRUFBRTtNQUNMLENBQUMsRUFDRCxDQUNGLENBQUM7SUFDSCxDQUFDLENBQUM7RUFDSjtFQUVBVCxVQUFVQSxDQUFBLEVBQUc7SUFDWCxLQUFLLENBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBRWxCWCw0Q0FBSSxDQUFDZ0IsR0FBRyxDQUFDLElBQUksQ0FBQ2IsS0FBSyxFQUFFO01BQUVjLFNBQVMsRUFBRTtJQUFFLENBQUMsQ0FBQztFQUN4QztFQUVBUixRQUFRQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNOLEtBQUssR0FBR0wscURBQVMsQ0FBQyxJQUFJLENBQUNVLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDO0VBQzdDO0FBQ0Y7Ozs7Ozs7O1VDM0VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBjb25zdCBsaW5lcyA9IFtdXG4gICAgY29uc3QgcGFyYWdyYXBocyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxLCBoMiwgcFwiKVxuXG4gICAgaWYgKHBhcmFncmFwaHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlYWNoKHBhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcbiAgICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG5cbiAgICAgICAgbGluZXMucHVzaCguLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIikpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcbiAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuXG4gICAgICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICB9XG5cbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZXNcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcblxuICAgIHRoaXMudGltZWxpbmVJbiA9IGdzYXAudGltZWxpbmUoeyBkZWxheTogMC41IH0pXG5cbiAgICB0aGlzLnRpbWVsaW5lSW4uc2V0KHRoaXMuZWxlbWVudCwgeyBhdXRvQWxwaGE6IDEgfSlcblxuICAgIGVhY2godGhpcy5saW5lcywgbGluZSA9PiB7XG4gICAgICB0aGlzLnRpbWVsaW5lSW4uZnJvbVRvKFxuICAgICAgICBsaW5lLFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICAgIHk6IFwiMTAwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgZHVyYXRpb246IDEuNCxcbiAgICAgICAgICBzdGFnZ2VyOiAwLjA2LFxuICAgICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgICB5OiBcIjAlXCJcbiAgICAgICAgfSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgZ3NhcC5zZXQodGhpcy5saW5lcywgeyBhdXRvQWxwaGE6IDAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjk5YzkwZjAxODdjOWE3YTZiOWNcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0IiwiZ3NhcCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJwdXNoIiwiZWxlbWVudHMiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJkZWxheSIsInNldCIsImF1dG9BbHBoYSIsImxpbmUiLCJmcm9tVG8iLCJ5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=