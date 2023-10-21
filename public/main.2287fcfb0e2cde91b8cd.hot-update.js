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
    this.spans = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.splitIndividual)(paragraphs);
    console.log(this.spans, "TEST");
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
/******/ 	__webpack_require__.h = () => ("d29797f2be31d84d2389")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMjg3ZmNmYjBlMmNkZTkxYjhjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDaEIsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUV4RCxJQUFJLENBQUNDLEtBQUssR0FBR04sMkRBQWUsQ0FBQ0ksVUFBVSxDQUFDO0lBRXhDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNGLEtBQUssRUFBRSxNQUFNLENBQUM7SUFFL0IsSUFBSUYsVUFBVSxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzNCYixrREFBSSxDQUFDUSxVQUFVLEVBQUVGLE9BQU8sSUFBSTtRQUMxQkgsaURBQUssQ0FBQztVQUFFRztRQUFRLENBQUMsQ0FBQztRQUNsQkgsaURBQUssQ0FBQztVQUFFRztRQUFRLENBQUMsQ0FBQztRQUVsQkMsS0FBSyxDQUFDTyxJQUFJLENBQUMsR0FBR1IsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztNQUN0RCxDQUFDLENBQUM7SUFDSixDQUFDLE1BQU07TUFDTE4saURBQUssQ0FBQztRQUFFRztNQUFRLENBQUMsQ0FBQztNQUNsQkgsaURBQUssQ0FBQztRQUFFRztNQUFRLENBQUMsQ0FBQztNQUVsQkMsS0FBSyxDQUFDTyxJQUFJLENBQUMsR0FBR1IsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RDtJQUVBLEtBQUssQ0FBQztNQUNKSCxPQUFPO01BQ1BTLFFBQVEsRUFBRTtRQUNSUjtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUyxRQUFRLENBQUMsQ0FBQzs7SUFFZjtJQUNBO0lBQ0E7RUFDRjs7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDQSxTQUFTLENBQUMsQ0FBQztJQUVqQk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDTCxLQUFLLENBQUM7SUFFdkJQLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxLQUFLLEVBQUUsQ0FBQ1csSUFBSSxFQUFFQyxTQUFTLEtBQUs7TUFDcENuQixrREFBSSxDQUFDa0IsSUFBSSxFQUFFRSxJQUFJLElBQUk7UUFDakJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEdBQUksa0JBQWlCLEdBQUcsR0FBR0gsU0FBUyxHQUFHLEdBQUksUUFBTztRQUN2RUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDRSxlQUFlLENBQUMsR0FBRyxlQUFlO01BQ3BELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFDLFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFFbEJ4QixrREFBSSxDQUFDLElBQUksQ0FBQ08sS0FBSyxFQUFFVyxJQUFJLElBQUk7TUFDdkJsQixrREFBSSxDQUFDa0IsSUFBSSxFQUFFRSxJQUFJLElBQUk7UUFDakJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0UsZUFBZSxDQUFDLEdBQUcsa0JBQWtCO01BQ3ZELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFQLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ1QsS0FBSyxHQUFHTCxxREFBUyxDQUFDLElBQUksQ0FBQ2EsUUFBUSxDQUFDUixLQUFLLENBQUM7RUFDN0M7QUFDRjs7Ozs7Ozs7VUN0RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUmV2ZWFsLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcbmltcG9ydCB7IHNwbGl0SW5kaXZpZHVhbCB9IGZyb20gXCIuLi91dGlscy90ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGNvbnN0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICB0aGlzLnNwYW5zID0gc3BsaXRJbmRpdmlkdWFsKHBhcmFncmFwaHMpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNwYW5zLCBcIlRFU1RcIilcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZWFjaChwYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG4gICAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuXG4gICAgICAgIGxpbmVzLnB1c2goLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG4gICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcblxuICAgICAgbGluZXMucHVzaCguLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIikpXG4gICAgfVxuXG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmVzXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgLy8gaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgLy8gfVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVzKVxuXG4gICAgZWFjaCh0aGlzLmxpbmVzLCAobGluZSwgbGluZUluZGV4KSA9PiB7XG4gICAgICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgICAgICB3b3JkLnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtIDEuNXMgJHswLjUgKyBsaW5lSW5kZXggKiAwLjF9cyBlYXNlYFxuICAgICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IFwidHJhbnNsYXRlWSgwKVwiXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAgIGVhY2gobGluZSwgd29yZCA9PiB7XG4gICAgICAgIHdvcmQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDI5Nzk3ZjJiZTMxZDg0ZDIzODlcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0Iiwic3BsaXRJbmRpdmlkdWFsIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsInNwYW5zIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInB1c2giLCJlbGVtZW50cyIsIm9uUmVzaXplIiwiYW5pbWF0ZUluIiwibGluZSIsImxpbmVJbmRleCIsIndvcmQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJhbmltYXRlT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==