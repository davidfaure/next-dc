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

    // this.spans = splitIndividual(paragraphs)

    console.log(this.lines, "TEST");
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
/******/ 	__webpack_require__.h = () => ("da53cf11e6c26f2a27d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMWU3Yjc0ZWY4YzYyMzg5M2IzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDaEIsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUV4RCxJQUFJRCxVQUFVLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDM0JWLGtEQUFJLENBQUNRLFVBQVUsRUFBRUYsT0FBTyxJQUFJO1FBQzFCSCxpREFBSyxDQUFDO1VBQUVHO1FBQVEsQ0FBQyxDQUFDO1FBQ2xCSCxpREFBSyxDQUFDO1VBQUVHO1FBQVEsQ0FBQyxDQUFDO1FBQ2xCSCxpREFBSyxDQUFDO1VBQUVHO1FBQVEsQ0FBQyxDQUFDO1FBRWxCQyxLQUFLLENBQUNJLElBQUksQ0FBQyxHQUFHTCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO01BQ3RELENBQUMsQ0FBQztJQUNKLENBQUMsTUFBTTtNQUNMTixpREFBSyxDQUFDO1FBQUVHO01BQVEsQ0FBQyxDQUFDO01BQ2xCSCxpREFBSyxDQUFDO1FBQUVHO01BQVEsQ0FBQyxDQUFDO01BQ2xCSCxpREFBSyxDQUFDO1FBQUVHO01BQVEsQ0FBQyxDQUFDO01BRWxCQyxLQUFLLENBQUNJLElBQUksQ0FBQyxHQUFHTCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3REO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUE0sUUFBUSxFQUFFO1FBQ1JMO01BQ0Y7SUFDRixDQUFDLENBQUM7O0lBRUY7O0lBRUFNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1AsS0FBSyxFQUFFLE1BQU0sQ0FBQztJQUUvQixJQUFJLENBQUNRLFFBQVEsQ0FBQyxDQUFDOztJQUVmO0lBQ0E7SUFDQTtFQUNGOztFQUVBQyxTQUFTQSxDQUFBLEVBQUc7SUFDVixLQUFLLENBQUNBLFNBQVMsQ0FBQyxDQUFDO0lBRWpCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNQLEtBQUssQ0FBQztJQUV2QlAsa0RBQUksQ0FBQyxJQUFJLENBQUNPLEtBQUssRUFBRSxDQUFDVSxJQUFJLEVBQUVDLFNBQVMsS0FBSztNQUNwQ2xCLGtEQUFJLENBQUNpQixJQUFJLEVBQUVFLElBQUksSUFBSTtRQUNqQkEsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFVBQVUsR0FBSSxrQkFBaUIsR0FBRyxHQUFHSCxTQUFTLEdBQUcsR0FBSSxRQUFPO1FBQ3ZFQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNFLGVBQWUsQ0FBQyxHQUFHLGVBQWU7TUFDcEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUVsQnZCLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxLQUFLLEVBQUVVLElBQUksSUFBSTtNQUN2QmpCLGtEQUFJLENBQUNpQixJQUFJLEVBQUVFLElBQUksSUFBSTtRQUNqQkEsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDRSxlQUFlLENBQUMsR0FBRyxrQkFBa0I7TUFDdkQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQVAsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDUixLQUFLLEdBQUdMLHFEQUFTLENBQUMsSUFBSSxDQUFDVSxRQUFRLENBQUNMLEtBQUssQ0FBQztFQUM3QztBQUNGOzs7Ozs7OztVQ3hFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9SZXZlYWwuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIlxuaW1wb3J0IHsgc3BsaXRJbmRpdmlkdWFsIH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgY29uc3QgbGluZXMgPSBbXVxuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSwgaDIsIHBcIilcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZWFjaChwYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG4gICAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcblxuICAgICAgICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG4gICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcblxuICAgICAgbGluZXMucHVzaCguLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIikpXG4gICAgfVxuXG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmVzXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHRoaXMuc3BhbnMgPSBzcGxpdEluZGl2aWR1YWwocGFyYWdyYXBocylcblxuICAgIGNvbnNvbGUubG9nKHRoaXMubGluZXMsIFwiVEVTVFwiKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICAvLyBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgIC8vICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICAvLyB9XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcblxuICAgIGNvbnNvbGUubG9nKHRoaXMubGluZXMpXG5cbiAgICBlYWNoKHRoaXMubGluZXMsIChsaW5lLCBsaW5lSW5kZXgpID0+IHtcbiAgICAgIGVhY2gobGluZSwgd29yZCA9PiB7XG4gICAgICAgIHdvcmQuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gMS41cyAkezAuNSArIGxpbmVJbmRleCAqIDAuMX1zIGVhc2VgXG4gICAgICAgIHdvcmQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gXCJ0cmFuc2xhdGVZKDApXCJcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG5cbiAgICBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4ge1xuICAgICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBcInRyYW5zbGF0ZVkoMTAwJSlcIlxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5saW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRzLmxpbmVzKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYTUzY2YxMWU2YzI2ZjJhMjdkNFwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiQW5pbWF0aW9uIiwiY2FsY3VsYXRlIiwic3BsaXQiLCJzcGxpdEluZGl2aWR1YWwiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJsaW5lcyIsInBhcmFncmFwaHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwicHVzaCIsImVsZW1lbnRzIiwiY29uc29sZSIsImxvZyIsIm9uUmVzaXplIiwiYW5pbWF0ZUluIiwibGluZSIsImxpbmVJbmRleCIsIndvcmQiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJhbmltYXRlT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==