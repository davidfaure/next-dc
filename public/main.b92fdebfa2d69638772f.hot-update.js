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
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
    this.timeline.to(this.elements.lines, {
      opacity: 1,
      stagger: 0.02,
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
/******/ 	__webpack_require__.h = () => ("60ad49c062b926a76481")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNULEtBQUssQ0FBQztFQUM3QztBQUNGOzs7Ozs7OztVQ3pFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9SZXZlYWwuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIlxuaW1wb3J0IHsgc3BsaXRJbmRpdmlkdWFsIH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgbGV0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBodG1sU3RyaW5nID0gXCJcIlxuICAgICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGh0bWxTdHJpbmcgKz0gYDxzcGFuPiR7cEFycmF5W2ldfTwvc3Bhbj5gXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG4gICAgICB9KVxuICAgICAgbGluZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZ1xuXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcblxuICAgIHRoaXMudGltZWxpbmUgPSBnc2FwLnRpbWVsaW5lKClcbiAgICB0aGlzLnRpbWVsaW5lLnRvKHRoaXMuZWxlbWVudHMubGluZXMsIHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBzdGFnZ2VyOiAwLjAyLFxuICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiLFxuICAgICAgZGVsYXk6IDAuMlxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgZ3NhcC50byh0aGlzLmVsZW1lbnRzLmxpbmVzLCB7XG4gICAgICBvcGFjaXR5OiAwLjEsXG4gICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgZWFzZTogXCJwb3dlcjIuaW5cIlxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmxpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudHMubGluZXMpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYwYWQ0OWMwNjJiOTI2YTc2NDgxXCIpIl0sIm5hbWVzIjpbImVhY2giLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsInNwbGl0SW5kaXZpZHVhbCIsImdzYXAiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJsaW5lcyIsInBhcmFncmFwaHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaHRtbFN0cmluZyIsInBBcnJheSIsInRleHRDb250ZW50IiwiaSIsImlubmVySFRNTCIsImVsZW1lbnRzIiwib25SZXNpemUiLCJ3aW5kb3ciLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwidGltZWxpbmUiLCJ0byIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiZHVyYXRpb24iLCJlYXNlIiwiZGVsYXkiXSwic291cmNlUm9vdCI6IiJ9