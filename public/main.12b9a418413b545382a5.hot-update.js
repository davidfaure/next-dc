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
      lines.push(...element.querySelectorAll("span span"));
    }
    super({
      element,
      elements: {
        lines
      }
    });

    // this.spans = splitIndividual(paragraphs)

    console.log(this.element, this.elements, "TEST");
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
/******/ 	__webpack_require__.h = () => ("1ec0cbb0ca8423c859e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMmI5YTQxODQxM2I1NDUzODJhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUIsSUFBSUssVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtRQUMzQztRQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUNoQyxDQUFDLENBQUM7TUFDRkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUcsRUFBRTtNQUNuQixJQUFJQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDVixLQUFLLENBQUMsRUFBRSxDQUFDO01BQzFDLEtBQUssSUFBSVcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixNQUFNLENBQUNGLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7UUFDdENILFVBQVUsSUFBSyxTQUFRQyxNQUFNLENBQUNFLENBQUMsQ0FBRSxTQUFRO01BQzNDO01BQ0FSLE9BQU8sQ0FBQ1MsU0FBUyxHQUFHSixVQUFVO01BRTlCSixLQUFLLENBQUNTLElBQUksQ0FBQyxHQUFHVixPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3REO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUFcsUUFBUSxFQUFFO1FBQ1JWO01BQ0Y7SUFDRixDQUFDLENBQUM7O0lBRUY7O0lBRUFXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQ1csUUFBUSxFQUFFLE1BQU0sQ0FBQztJQUVoRCxJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFDOztJQUVmO0lBQ0E7SUFDQTtFQUNGOztFQUVBQyxTQUFTQSxDQUFBLEVBQUc7SUFDVixLQUFLLENBQUNBLFNBQVMsQ0FBQyxDQUFDO0lBRWpCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNaLEtBQUssQ0FBQztJQUV2QlAsa0RBQUksQ0FBQyxJQUFJLENBQUNPLEtBQUssRUFBRSxDQUFDZSxJQUFJLEVBQUVDLFNBQVMsS0FBSztNQUNwQ3ZCLGtEQUFJLENBQUNzQixJQUFJLEVBQUVFLElBQUksSUFBSTtRQUNqQkEsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFVBQVUsR0FBSSxrQkFBaUIsR0FBRyxHQUFHSCxTQUFTLEdBQUcsR0FBSSxRQUFPO1FBQ3ZFQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNFLGVBQWUsQ0FBQyxHQUFHLGVBQWU7TUFDcEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUVsQjVCLGtEQUFJLENBQUMsSUFBSSxDQUFDTyxLQUFLLEVBQUVlLElBQUksSUFBSTtNQUN2QnRCLGtEQUFJLENBQUNzQixJQUFJLEVBQUVFLElBQUksSUFBSTtRQUNqQkEsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDRSxlQUFlLENBQUMsR0FBRyxrQkFBa0I7TUFDdkQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQVAsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDYixLQUFLLEdBQUdMLHFEQUFTLENBQUMsSUFBSSxDQUFDZSxRQUFRLENBQUNWLEtBQUssQ0FBQztFQUM3QztBQUNGOzs7Ozs7OztVQzdFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9SZXZlYWwuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIlxuaW1wb3J0IHsgc3BsaXRJbmRpdmlkdWFsIH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgbGV0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBodG1sU3RyaW5nID0gXCJcIlxuICAgICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGh0bWxTdHJpbmcgKz0gYDxzcGFuPiR7cEFycmF5W2ldfTwvc3Bhbj5gXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG4gICAgICB9KVxuICAgICAgbGluZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZ1xuXG4gICAgICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICB9XG5cbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZXNcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gdGhpcy5zcGFucyA9IHNwbGl0SW5kaXZpZHVhbChwYXJhZ3JhcGhzKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LCB0aGlzLmVsZW1lbnRzLCBcIlRFU1RcIilcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgLy8gaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgLy8gfVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVzKVxuXG4gICAgZWFjaCh0aGlzLmxpbmVzLCAobGluZSwgbGluZUluZGV4KSA9PiB7XG4gICAgICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgICAgICB3b3JkLnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtIDEuNXMgJHswLjUgKyBsaW5lSW5kZXggKiAwLjF9cyBlYXNlYFxuICAgICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IFwidHJhbnNsYXRlWSgwKVwiXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAgIGVhY2gobGluZSwgd29yZCA9PiB7XG4gICAgICAgIHdvcmQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWVjMGNiYjBjYTg0MjNjODU5ZTBcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0Iiwic3BsaXRJbmRpdmlkdWFsIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImh0bWxTdHJpbmciLCJwQXJyYXkiLCJ0ZXh0Q29udGVudCIsImkiLCJpbm5lckhUTUwiLCJwdXNoIiwiZWxlbWVudHMiLCJjb25zb2xlIiwibG9nIiwib25SZXNpemUiLCJhbmltYXRlSW4iLCJsaW5lIiwibGluZUluZGV4Iiwid29yZCIsInN0eWxlIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybVByZWZpeCIsImFuaW1hdGVPdXQiXSwic291cmNlUm9vdCI6IiJ9