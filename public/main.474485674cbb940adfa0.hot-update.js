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
    console.log("ANIMATE IN");
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.elements.lines, (span, index) => {});
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(this.elements.lines, {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      // This will delay the animation of each letter, creating a cascading effect
      duration: 0.5,
      ease: "power2.out"
    });
  }
  animateOut() {
    super.animateOut();
    console.log("ANIMATE OUT");
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(this.elements.lines, {
      opacity: 0.1,
      y: 10,
      duration: 0.5,
      ease: "power2.in"
    });

    // each(this.lines, line => {
    //   each(line, word => {
    //     word.style[this.transformPrefix] = "translateY(100%)"
    //   })
    // })
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
/******/ 	__webpack_require__.h = () => ("12503f75108ebbde752d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NzQ0ODU2NzRjYmI5NDBhZGZhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVXO0FBRUk7QUFDRTtBQUN4QjtBQUV2QixpRUFBZSxjQUFjQyx5REFBUyxDQUFDO0VBQ3JDSyxXQUFXQSxDQUFDO0lBQUVDO0VBQVEsQ0FBQyxFQUFFO0lBQ3ZCLElBQUlDLEtBQUssR0FBRyxFQUFFO0lBQ2QsTUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztJQUV4RCxJQUFJRCxVQUFVLENBQUNFLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDM0JYLGtEQUFJLENBQUNTLFVBQVUsRUFBRUYsT0FBTyxJQUFJO1FBQzFCLElBQUlLLFVBQVUsR0FBRyxFQUFFO1FBQ25CLElBQUlDLE1BQU0sR0FBR04sT0FBTyxDQUFDTyxXQUFXLENBQUNYLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDMUMsS0FBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0YsTUFBTSxFQUFFSSxDQUFDLEVBQUUsRUFBRTtVQUN0Q0gsVUFBVSxJQUFLLFNBQVFDLE1BQU0sQ0FBQ0UsQ0FBQyxDQUFFLFNBQVE7UUFDM0M7UUFDQVIsT0FBTyxDQUFDUyxTQUFTLEdBQUdKLFVBQVU7TUFDaEMsQ0FBQyxDQUFDO01BQ0ZKLEtBQUssR0FBRyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxNQUFNO01BQ0wsSUFBSUUsVUFBVSxHQUFHLEVBQUU7TUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1gsS0FBSyxDQUFDLEVBQUUsQ0FBQztNQUMxQyxLQUFLLElBQUlZLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1FBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtNQUMzQztNQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUU5QkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQztJQUVBLEtBQUssQ0FBQztNQUNKSCxPQUFPO01BQ1BVLFFBQVEsRUFBRTtRQUNSVDtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDVSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUNyRCxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0lBRWYsSUFBSSxzQkFBc0IsSUFBSUMsTUFBTSxFQUFFO01BQ3BDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxTQUFTQSxDQUFBLEVBQUc7SUFDVixLQUFLLENBQUNBLFNBQVMsQ0FBQyxDQUFDO0lBRWpCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFFekIxQixrREFBSSxDQUFDLElBQUksQ0FBQ2lCLFFBQVEsQ0FBQ1QsS0FBSyxFQUFFLENBQUNtQixJQUFJLEVBQUVDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztJQUU5Q3ZCLDRDQUFJLENBQUN3QixFQUFFLENBQUMsSUFBSSxDQUFDWixRQUFRLENBQUNULEtBQUssRUFBRTtNQUMzQnNCLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLENBQUMsRUFBRSxDQUFDO01BQ0pDLE9BQU8sRUFBRSxJQUFJO01BQUU7TUFDZkMsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0VBQ0o7RUFFQVgsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUVsQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBRTFCckIsNENBQUksQ0FBQ3dCLEVBQUUsQ0FBQyxJQUFJLENBQUNaLFFBQVEsQ0FBQ1QsS0FBSyxFQUFFO01BQzNCc0IsT0FBTyxFQUFFLEdBQUc7TUFDWkMsQ0FBQyxFQUFFLEVBQUU7TUFDTEUsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDRjs7RUFFQWIsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDYixLQUFLLEdBQUdOLHFEQUFTLENBQUMsSUFBSSxDQUFDZSxRQUFRLENBQUNULEtBQUssQ0FBQztFQUM3QztBQUNGOzs7Ozs7OztVQ3RGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9SZXZlYWwuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIlxuaW1wb3J0IHsgc3BsaXRJbmRpdmlkdWFsIH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgbGV0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBodG1sU3RyaW5nID0gXCJcIlxuICAgICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGh0bWxTdHJpbmcgKz0gYDxzcGFuPiR7cEFycmF5W2ldfTwvc3Bhbj5gXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG4gICAgICB9KVxuICAgICAgbGluZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZ1xuXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKVxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG5cbiAgICBjb25zb2xlLmxvZyhcIkFOSU1BVEUgSU5cIilcblxuICAgIGVhY2godGhpcy5lbGVtZW50cy5saW5lcywgKHNwYW4sIGluZGV4KSA9PiB7fSlcblxuICAgIGdzYXAudG8odGhpcy5lbGVtZW50cy5saW5lcywge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHk6IDAsXG4gICAgICBzdGFnZ2VyOiAwLjAzLCAvLyBUaGlzIHdpbGwgZGVsYXkgdGhlIGFuaW1hdGlvbiBvZiBlYWNoIGxldHRlciwgY3JlYXRpbmcgYSBjYXNjYWRpbmcgZWZmZWN0XG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcblxuICAgIGNvbnNvbGUubG9nKFwiQU5JTUFURSBPVVRcIilcblxuICAgIGdzYXAudG8odGhpcy5lbGVtZW50cy5saW5lcywge1xuICAgICAgb3BhY2l0eTogMC4xLFxuICAgICAgeTogMTAsXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgZWFzZTogXCJwb3dlcjIuaW5cIlxuICAgIH0pXG5cbiAgICAvLyBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4ge1xuICAgIC8vICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAvLyAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBcInRyYW5zbGF0ZVkoMTAwJSlcIlxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5saW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRzLmxpbmVzKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMjUwM2Y3NTEwOGViYmRlNzUyZFwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiQW5pbWF0aW9uIiwiY2FsY3VsYXRlIiwic3BsaXQiLCJzcGxpdEluZGl2aWR1YWwiLCJnc2FwIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImh0bWxTdHJpbmciLCJwQXJyYXkiLCJ0ZXh0Q29udGVudCIsImkiLCJpbm5lckhUTUwiLCJlbGVtZW50cyIsIndyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJjb25zb2xlIiwibG9nIiwic3BhbiIsImluZGV4IiwidG8iLCJvcGFjaXR5IiwieSIsInN0YWdnZXIiLCJkdXJhdGlvbiIsImVhc2UiXSwic291cmNlUm9vdCI6IiJ9