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
/******/ 	__webpack_require__.h = () => ("897f9beabecf2aae4627")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMjk3OTdmMmJlMzFkODRkMjM4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDaEIsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUV4RCxJQUFJRCxVQUFVLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDM0JWLGtEQUFJLENBQUNRLFVBQVUsRUFBRUYsT0FBTyxJQUFJO1FBQzFCSCxpREFBSyxDQUFDO1VBQUVHO1FBQVEsQ0FBQyxDQUFDO1FBQ2xCSCxpREFBSyxDQUFDO1VBQUVHO1FBQVEsQ0FBQyxDQUFDO1FBRWxCQyxLQUFLLENBQUNJLElBQUksQ0FBQyxHQUFHTCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO01BQ3RELENBQUMsQ0FBQztJQUNKLENBQUMsTUFBTTtNQUNMTixpREFBSyxDQUFDO1FBQUVHO01BQVEsQ0FBQyxDQUFDO01BQ2xCSCxpREFBSyxDQUFDO1FBQUVHO01BQVEsQ0FBQyxDQUFDO01BRWxCQyxLQUFLLENBQUNJLElBQUksQ0FBQyxHQUFHTCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3REO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUE0sUUFBUSxFQUFFO1FBQ1JMO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNNLEtBQUssR0FBR1QsMkRBQWUsQ0FBQ0ksVUFBVSxDQUFDO0lBRXhDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNGLEtBQUssRUFBRSxNQUFNLENBQUM7SUFFL0IsSUFBSSxDQUFDRyxRQUFRLENBQUMsQ0FBQzs7SUFFZjtJQUNBO0lBQ0E7RUFDRjs7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDQSxTQUFTLENBQUMsQ0FBQztJQUVqQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUixLQUFLLENBQUM7SUFFdkJQLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxLQUFLLEVBQUUsQ0FBQ1csSUFBSSxFQUFFQyxTQUFTLEtBQUs7TUFDcENuQixrREFBSSxDQUFDa0IsSUFBSSxFQUFFRSxJQUFJLElBQUk7UUFDakJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEdBQUksa0JBQWlCLEdBQUcsR0FBR0gsU0FBUyxHQUFHLEdBQUksUUFBTztRQUN2RUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDRSxlQUFlLENBQUMsR0FBRyxlQUFlO01BQ3BELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFDLFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFFbEJ4QixrREFBSSxDQUFDLElBQUksQ0FBQ08sS0FBSyxFQUFFVyxJQUFJLElBQUk7TUFDdkJsQixrREFBSSxDQUFDa0IsSUFBSSxFQUFFRSxJQUFJLElBQUk7UUFDakJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0UsZUFBZSxDQUFDLEdBQUcsa0JBQWtCO01BQ3ZELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFQLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ1QsS0FBSyxHQUFHTCxxREFBUyxDQUFDLElBQUksQ0FBQ1UsUUFBUSxDQUFDTCxLQUFLLENBQUM7RUFDN0M7QUFDRjs7Ozs7Ozs7VUNyRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUmV2ZWFsLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcbmltcG9ydCB7IHNwbGl0SW5kaXZpZHVhbCB9IGZyb20gXCIuLi91dGlscy90ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGNvbnN0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcblxuICAgICAgICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG5cbiAgICAgIGxpbmVzLnB1c2goLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpKVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5zcGFucyA9IHNwbGl0SW5kaXZpZHVhbChwYXJhZ3JhcGhzKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5zcGFucywgXCJURVNUXCIpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIC8vIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIC8vIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5saW5lcylcblxuICAgIGVhY2godGhpcy5saW5lcywgKGxpbmUsIGxpbmVJbmRleCkgPT4ge1xuICAgICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAgICAgd29yZC5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAxLjVzICR7MC41ICsgbGluZUluZGV4ICogMC4xfXMgZWFzZWBcbiAgICAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBcInRyYW5zbGF0ZVkoMClcIlxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcblxuICAgIGVhY2godGhpcy5saW5lcywgbGluZSA9PiB7XG4gICAgICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmxpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudHMubGluZXMpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg5N2Y5YmVhYmVjZjJhYWU0NjI3XCIpIl0sIm5hbWVzIjpbImVhY2giLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsInNwbGl0SW5kaXZpZHVhbCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJwdXNoIiwiZWxlbWVudHMiLCJzcGFucyIsImNvbnNvbGUiLCJsb2ciLCJvblJlc2l6ZSIsImFuaW1hdGVJbiIsImxpbmUiLCJsaW5lSW5kZXgiLCJ3b3JkIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtUHJlZml4IiwiYW5pbWF0ZU91dCJdLCJzb3VyY2VSb290IjoiIn0=