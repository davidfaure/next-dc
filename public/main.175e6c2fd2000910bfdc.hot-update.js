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

    // this.onResize()

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
/******/ 	__webpack_require__.h = () => ("8065143452bcf41ed133")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNzVlNmMyZmQyMDAwOTEwYmZkYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDaEIsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzs7SUFFeEQ7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBOztJQUVBLEtBQUssQ0FBQztNQUNKSCxPQUFPO01BQ1BJLFFBQVEsRUFBRTtRQUNSSDtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDSSxLQUFLLEdBQUdQLDJEQUFlLENBQUNJLFVBQVUsQ0FBQztJQUV4Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDRixLQUFLLEVBQUUsTUFBTSxDQUFDOztJQUUvQjs7SUFFQTtJQUNBO0lBQ0E7RUFDRjs7RUFFQUcsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDQSxTQUFTLENBQUMsQ0FBQztJQUVqQkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDTixLQUFLLENBQUM7SUFFdkJQLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxLQUFLLEVBQUUsQ0FBQ1EsSUFBSSxFQUFFQyxTQUFTLEtBQUs7TUFDcENoQixrREFBSSxDQUFDZSxJQUFJLEVBQUVFLElBQUksSUFBSTtRQUNqQkEsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFVBQVUsR0FBSSxrQkFBaUIsR0FBRyxHQUFHSCxTQUFTLEdBQUcsR0FBSSxRQUFPO1FBQ3ZFQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNFLGVBQWUsQ0FBQyxHQUFHLGVBQWU7TUFDcEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUVsQnJCLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxLQUFLLEVBQUVRLElBQUksSUFBSTtNQUN2QmYsa0RBQUksQ0FBQ2UsSUFBSSxFQUFFRSxJQUFJLElBQUk7UUFDakJBLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0UsZUFBZSxDQUFDLEdBQUcsa0JBQWtCO01BQ3ZELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFFLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ2YsS0FBSyxHQUFHTCxxREFBUyxDQUFDLElBQUksQ0FBQ1EsUUFBUSxDQUFDSCxLQUFLLENBQUM7RUFDN0M7QUFDRjs7Ozs7Ozs7VUN0RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUmV2ZWFsLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcbmltcG9ydCB7IHNwbGl0SW5kaXZpZHVhbCB9IGZyb20gXCIuLi91dGlscy90ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGNvbnN0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICAvLyBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAvLyAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgLy8gICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgIC8vICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcblxuICAgIC8vICAgICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICAvLyAgIH0pXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgIC8vICAgc3BsaXQoeyBlbGVtZW50IH0pXG5cbiAgICAvLyAgIGxpbmVzLnB1c2goLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpKVxuICAgIC8vIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNwYW5zID0gc3BsaXRJbmRpdmlkdWFsKHBhcmFncmFwaHMpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNwYW5zLCBcIlRFU1RcIilcblxuICAgIC8vIHRoaXMub25SZXNpemUoKVxuXG4gICAgLy8gaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgLy8gfVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVzKVxuXG4gICAgZWFjaCh0aGlzLmxpbmVzLCAobGluZSwgbGluZUluZGV4KSA9PiB7XG4gICAgICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgICAgICB3b3JkLnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtIDEuNXMgJHswLjUgKyBsaW5lSW5kZXggKiAwLjF9cyBlYXNlYFxuICAgICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IFwidHJhbnNsYXRlWSgwKVwiXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAgIGVhY2gobGluZSwgd29yZCA9PiB7XG4gICAgICAgIHdvcmQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODA2NTE0MzQ1MmJjZjQxZWQxMzNcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0Iiwic3BsaXRJbmRpdmlkdWFsIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnRzIiwic3BhbnMiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZUluIiwibGluZSIsImxpbmVJbmRleCIsIndvcmQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJhbmltYXRlT3V0Iiwib25SZXNpemUiXSwic291cmNlUm9vdCI6IiJ9