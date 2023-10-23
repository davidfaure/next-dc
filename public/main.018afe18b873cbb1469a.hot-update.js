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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({
    element
  }) {
    let lines = [];
    const paragraphs = element.querySelectorAll("h1, h2, p");
    if (paragraphs.length !== 0) {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(paragraphs, element => {
        let htmlString = "";
        let pArray = element.textContent.split("");
        for (let i = 0; i < pArray.length; i++) {
          htmlString += `<span>${pArray[i]}</span>`;
        }
        element.innerHTML = htmlString;
      });
      lines = [...element.querySelectorAll("span")];
    } else {
      let htmlString = "";
      let pArray = element.textContent.split("");
      for (let i = 0; i < pArray.length; i++) {
        htmlString += `<span>${pArray[i]}</span>`;
      }
      element.innerHTML = htmlString;
      lines = [...element.querySelectorAll("span")];
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
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(this.elements.lines, {
      opacity: 1,
      stagger: 0.02,
      // This will delay the animation of each letter, creating a cascading effect
      duration: 0.2,
      ease: "power2.out",
      delay: 0.2
    });
  }
  animateOut() {
    super.animateOut();
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(this.elements.lines, {
      opacity: 0.1,
      duration: 0.2,
      ease: "power2.in"
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
/******/ 	__webpack_require__.h = () => ("77ae3352026702319cb2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1JldmVhbC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBzcGxpdEluZGl2aWR1YWwgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBsZXQgbGluZXMgPSBbXVxuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSwgaDIsIHBcIilcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZWFjaChwYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcbiAgICAgIH0pXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgfVxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG5cbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfVxuXG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmVzXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgZ3NhcC50byh0aGlzLmVsZW1lbnRzLmxpbmVzLCB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgc3RhZ2dlcjogMC4wMiwgLy8gVGhpcyB3aWxsIGRlbGF5IHRoZSBhbmltYXRpb24gb2YgZWFjaCBsZXR0ZXIsIGNyZWF0aW5nIGEgY2FzY2FkaW5nIGVmZmVjdFxuICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiLFxuICAgICAgZGVsYXk6IDAuMlxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgZ3NhcC50byh0aGlzLmVsZW1lbnRzLmxpbmVzLCB7XG4gICAgICBvcGFjaXR5OiAwLjEsXG4gICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgZWFzZTogXCJwb3dlcjIuaW5cIlxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmxpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudHMubGluZXMpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc3YWUzMzUyMDI2NzAyMzE5Y2IyXCIpIl0sIm5hbWVzIjpbImVhY2giLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsInNwbGl0SW5kaXZpZHVhbCIsImdzYXAiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJsaW5lcyIsInBhcmFncmFwaHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaHRtbFN0cmluZyIsInBBcnJheSIsInRleHRDb250ZW50IiwiaSIsImlubmVySFRNTCIsImVsZW1lbnRzIiwib25SZXNpemUiLCJ3aW5kb3ciLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwidG8iLCJvcGFjaXR5Iiwic3RhZ2dlciIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==