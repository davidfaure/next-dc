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
    this.wrapper = document.querySelector(".home__quote");
    this.onResize();
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
  }
  animateIn() {
    super.animateIn();
    console.log("ANIMATE IN", this.elements.lines);
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
    console.log("ANIMATE OUT", this.elements.lines);
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
/******/ 	__webpack_require__.h = () => ("29d4d33315c6d593f246")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxHQUFHO01BQ1pFLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztFQUNKO0VBRUFWLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ2IsS0FBSyxHQUFHTixxREFBUyxDQUFDLElBQUksQ0FBQ2UsUUFBUSxDQUFDVCxLQUFLLENBQUM7RUFDN0M7QUFDRjs7Ozs7Ozs7VUM3RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUmV2ZWFsLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcbmltcG9ydCB7IHNwbGl0SW5kaXZpZHVhbCB9IGZyb20gXCIuLi91dGlscy90ZXh0XCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGxldCBsaW5lcyA9IFtdXG4gICAgY29uc3QgcGFyYWdyYXBocyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxLCBoMiwgcFwiKVxuXG4gICAgaWYgKHBhcmFncmFwaHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlYWNoKHBhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgICAgbGV0IHBBcnJheSA9IGVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZ1xuICAgICAgfSlcbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBodG1sU3RyaW5nID0gXCJcIlxuICAgICAgbGV0IHBBcnJheSA9IGVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGh0bWxTdHJpbmcgKz0gYDxzcGFuPiR7cEFycmF5W2ldfTwvc3Bhbj5gXG4gICAgICB9XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcblxuICAgICAgbGluZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKV1cbiAgICB9XG5cbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZXNcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIilcbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgY29uc29sZS5sb2coXCJBTklNQVRFIElOXCIsIHRoaXMuZWxlbWVudHMubGluZXMpXG5cbiAgICBnc2FwLnRvKHRoaXMuZWxlbWVudHMubGluZXMsIHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBzdGFnZ2VyOiAwLjAyLCAvLyBUaGlzIHdpbGwgZGVsYXkgdGhlIGFuaW1hdGlvbiBvZiBlYWNoIGxldHRlciwgY3JlYXRpbmcgYSBjYXNjYWRpbmcgZWZmZWN0XG4gICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCIsXG4gICAgICBkZWxheTogMC4yXG4gICAgfSlcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG5cbiAgICBjb25zb2xlLmxvZyhcIkFOSU1BVEUgT1VUXCIsIHRoaXMuZWxlbWVudHMubGluZXMpXG5cbiAgICBnc2FwLnRvKHRoaXMuZWxlbWVudHMubGluZXMsIHtcbiAgICAgIG9wYWNpdHk6IDAuMSxcbiAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICBlYXNlOiBcInBvd2VyMi5pblwiXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjlkNGQzMzMxNWM2ZDU5M2YyNDZcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0Iiwic3BsaXRJbmRpdmlkdWFsIiwiZ3NhcCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJodG1sU3RyaW5nIiwicEFycmF5IiwidGV4dENvbnRlbnQiLCJpIiwiaW5uZXJIVE1MIiwiZWxlbWVudHMiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25SZXNpemUiLCJ3aW5kb3ciLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwiY29uc29sZSIsImxvZyIsInRvIiwib3BhY2l0eSIsInN0YWdnZXIiLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=