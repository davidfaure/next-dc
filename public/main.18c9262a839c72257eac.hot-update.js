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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/colors */ "./app/utils/colors.js");






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
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].timeline();
    this.timeline.to(this.elements.lines, {
      opacity: 1,
      stagger: 0.02,
      duration: 0.2,
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_3__.COLOR_GREEN,
      ease: "power2.out",
      delay: 0.2
    });
  }
  animateOut() {
    super.animateOut();
    gsap__WEBPACK_IMPORTED_MODULE_4__["default"].to(this.elements.lines, {
      opacity: 0.1,
      duration: 0.2,
      ease: "power2.in"
    });
  }
  onResize() {
    this.lines = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.calculate)(this.elements.lines);
  }
});

/***/ }),

/***/ "./app/utils/colors.js":
/*!*****************************!*\
  !*** ./app/utils/colors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_BLACK: () => (/* binding */ COLOR_BLACK),
/* harmony export */   COLOR_GREEN: () => (/* binding */ COLOR_GREEN),
/* harmony export */   COLOR_WHITE: () => (/* binding */ COLOR_WHITE)
/* harmony export */ });
const COLOR_BLACK = "#000";
const COLOR_WHITE = "#fff";
const COLOR_GREEN = "#2baf50";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e3997dfecb40338ecc8e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxHQUFHUCxxREFBUyxDQUFDLElBQUksQ0FBQ2dCLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDO0VBQzdDO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRU8sTUFBTXNCLFdBQVcsR0FBRyxNQUFNO0FBQzFCLE1BQU1DLFdBQVcsR0FBRyxNQUFNO0FBQzFCLE1BQU0xQixXQUFXLEdBQUcsU0FBUzs7Ozs7Ozs7VUNGcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUmV2ZWFsLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvdXRpbHMvY29sb3JzLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcbmltcG9ydCB7IHNwbGl0SW5kaXZpZHVhbCB9IGZyb20gXCIuLi91dGlscy90ZXh0XCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IENPTE9SX0dSRUVOIH0gZnJvbSBcIi4uL3V0aWxzL2NvbG9yc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBsZXQgbGluZXMgPSBbXVxuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSwgaDIsIHBcIilcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZWFjaChwYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcbiAgICAgIH0pXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgfVxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG5cbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfVxuXG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmVzXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgdGhpcy50aW1lbGluZSA9IGdzYXAudGltZWxpbmUoKVxuICAgIHRoaXMudGltZWxpbmUudG8odGhpcy5lbGVtZW50cy5saW5lcywge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHN0YWdnZXI6IDAuMDIsXG4gICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgY29sb3I6IENPTE9SX0dSRUVOLFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCIsXG4gICAgICBkZWxheTogMC4yXG4gICAgfSlcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG5cbiAgICBnc2FwLnRvKHRoaXMuZWxlbWVudHMubGluZXMsIHtcbiAgICAgIG9wYWNpdHk6IDAuMSxcbiAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICBlYXNlOiBcInBvd2VyMi5pblwiXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENPTE9SX0JMQUNLID0gXCIjMDAwXCJcbmV4cG9ydCBjb25zdCBDT0xPUl9XSElURSA9IFwiI2ZmZlwiXG5leHBvcnQgY29uc3QgQ09MT1JfR1JFRU4gPSBcIiMyYmFmNTBcIlxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTM5OTdkZmVjYjQwMzM4ZWNjOGVcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0Iiwic3BsaXRJbmRpdmlkdWFsIiwiZ3NhcCIsIkNPTE9SX0dSRUVOIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImh0bWxTdHJpbmciLCJwQXJyYXkiLCJ0ZXh0Q29udGVudCIsImkiLCJpbm5lckhUTUwiLCJlbGVtZW50cyIsIm9uUmVzaXplIiwid2luZG93IiwiYW5pbWF0ZU91dCIsImFuaW1hdGVJbiIsInRpbWVsaW5lIiwidG8iLCJvcGFjaXR5Iiwic3RhZ2dlciIsImR1cmF0aW9uIiwiY29sb3IiLCJlYXNlIiwiZGVsYXkiLCJDT0xPUl9CTEFDSyIsIkNPTE9SX1dISVRFIl0sInNvdXJjZVJvb3QiOiIifQ==