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
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
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
      color: _utils_colors__WEBPACK_IMPORTED_MODULE_3__.COLOR_WHITE,
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
/******/ 	__webpack_require__.h = () => ("a0138e60813e9219e42a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztJQUNULElBQUksQ0FBQ1YsS0FBSyxHQUFHUCxxREFBUyxDQUFDLElBQUksQ0FBQ2dCLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDO0VBQzdDO0FBQ0Y7Ozs7Ozs7O1VDM0VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1JldmVhbC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBDT0xPUl9HUkVFTiwgQ09MT1JfV0hJVEUgfSBmcm9tIFwiLi4vdXRpbHMvY29sb3JzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGxldCBsaW5lcyA9IFtdXG4gICAgY29uc3QgcGFyYWdyYXBocyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxLCBoMiwgcFwiKVxuXG4gICAgaWYgKHBhcmFncmFwaHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlYWNoKHBhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgICAgbGV0IHBBcnJheSA9IGVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZ1xuICAgICAgfSlcbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBodG1sU3RyaW5nID0gXCJcIlxuICAgICAgbGV0IHBBcnJheSA9IGVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGh0bWxTdHJpbmcgKz0gYDxzcGFuPiR7cEFycmF5W2ldfTwvc3Bhbj5gXG4gICAgICB9XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcblxuICAgICAgbGluZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKV1cbiAgICB9XG5cbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZXNcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG5cbiAgICB0aGlzLnRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSgpXG4gICAgdGhpcy50aW1lbGluZS50byh0aGlzLmVsZW1lbnRzLmxpbmVzLCB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgc3RhZ2dlcjogMC4wMixcbiAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICBjb2xvcjogQ09MT1JfR1JFRU4sXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIixcbiAgICAgIGRlbGF5OiAwLjJcbiAgICB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcblxuICAgIGdzYXAudG8odGhpcy5lbGVtZW50cy5saW5lcywge1xuICAgICAgb3BhY2l0eTogMC4xLFxuICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgIGNvbG9yOiBDT0xPUl9XSElURSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLmluXCJcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5saW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRzLmxpbmVzKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMDEzOGU2MDgxM2U5MjE5ZTQyYVwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiQW5pbWF0aW9uIiwiY2FsY3VsYXRlIiwic3BsaXQiLCJnc2FwIiwiQ09MT1JfR1JFRU4iLCJDT0xPUl9XSElURSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJodG1sU3RyaW5nIiwicEFycmF5IiwidGV4dENvbnRlbnQiLCJpIiwiaW5uZXJIVE1MIiwiZWxlbWVudHMiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsInRvIiwib3BhY2l0eSIsInN0YWdnZXIiLCJkdXJhdGlvbiIsImNvbG9yIiwiZWFzZSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==