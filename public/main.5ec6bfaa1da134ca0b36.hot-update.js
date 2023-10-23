"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/classes/Cursor.js":
/*!*******************************!*\
  !*** ./app/classes/Cursor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cursor)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


class Cursor {
  constructor({
    element
  }) {
    this.cursor = document.getElementById("cursor");
    this.element = element;
    console.log("ICI", element, this.cursor);
    window.addEventListener("mousemove", this.handleCursorMove.bind(this));
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.element, element => {
      element.addEventListener("mouseenter", this.onGalleryHover.bind(this));
    });
  }
  handleCursorMove(event) {
    const {
      clientX: x,
      clientY: y
    } = event;
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.cursor, {
      duration: 0.3,
      left: x,
      top: y,
      ease: "power2.out"
    });
    requestAnimationFrame(() => this.render());
  }
  render() {
    requestAnimationFrame(() => this.render());
  }
  onGalleryHover() {
    console.log("hover");
    // gsap.to(this.cursor, {
    //   duration: 0.3,
    //   width: "60px",
    //   height: "60px",
    //   backgroundColor: "transparent",
    //   color: "green",
    //   textAlign: "center",
    //   lineHeight: "60px",
    //   border: "1px solid green",
    //   ease: "power2.out"
    // })
    // this.cursor.innerHTML = "Drag"
  }

  // onGalleryLeave() {
  //   console.log("leave")
  //   gsap.to(this.cursor, {
  //     duration: 0.3,
  //     width: "20px",
  //     height: "20px",
  //     backgroundColor: "green",
  //     border: "none",
  //     ease: "power2.out"
  //   })
  //   this.cursor.innerHTML = ""
  // }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e919d8bb92f57fd79a87")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZWM2YmZhYTFkYTEzNGNhMGIzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQy9DLElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBRXRCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVMLE9BQU8sRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUV4Q0ssTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RFWiw0Q0FBSSxDQUFDLElBQUksQ0FBQ0csT0FBTyxFQUFFQSxPQUFPLElBQUk7TUFDNUJBLE9BQU8sQ0FBQ08sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0csY0FBYyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQyxDQUFDO0VBQ0o7RUFFQUQsZ0JBQWdCQSxDQUFDRyxLQUFLLEVBQUU7SUFDdEIsTUFBTTtNQUFFQyxPQUFPLEVBQUVDLENBQUM7TUFBRUMsT0FBTyxFQUFFQztJQUFFLENBQUMsR0FBR0osS0FBSztJQUV4Q2YsNENBQUksQ0FBQ29CLEVBQUUsQ0FBQyxJQUFJLENBQUNmLE1BQU0sRUFBRTtNQUNuQmdCLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRUwsQ0FBQztNQUNQTSxHQUFHLEVBQUVKLENBQUM7TUFDTkssSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBRUZDLHFCQUFxQixDQUFDLE1BQU0sSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQzVDO0VBRUFBLE1BQU1BLENBQUEsRUFBRztJQUNQRCxxQkFBcUIsQ0FBQyxNQUFNLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQztFQUM1QztFQUVBWixjQUFjQSxDQUFBLEVBQUc7SUFDZk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNGOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGOzs7Ozs7OztVQzdEQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJzb3JcIilcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zb2xlLmxvZyhcIklDSVwiLCBlbGVtZW50LCB0aGlzLmN1cnNvcilcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlQ3Vyc29yTW92ZS5iaW5kKHRoaXMpKVxuICAgIGVhY2godGhpcy5lbGVtZW50LCBlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbkdhbGxlcnlIb3Zlci5iaW5kKHRoaXMpKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVDdXJzb3JNb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0gPSBldmVudFxuXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB0b3A6IHksXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXIoKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXIoKSlcbiAgfVxuXG4gIG9uR2FsbGVyeUhvdmVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaG92ZXJcIilcbiAgICAvLyBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgLy8gICBkdXJhdGlvbjogMC4zLFxuICAgIC8vICAgd2lkdGg6IFwiNjBweFwiLFxuICAgIC8vICAgaGVpZ2h0OiBcIjYwcHhcIixcbiAgICAvLyAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIC8vICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICAvLyAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAvLyAgIGxpbmVIZWlnaHQ6IFwiNjBweFwiLFxuICAgIC8vICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmVlblwiLFxuICAgIC8vICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICAvLyB9KVxuICAgIC8vIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IFwiRHJhZ1wiXG4gIH1cblxuICAvLyBvbkdhbGxlcnlMZWF2ZSgpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcImxlYXZlXCIpXG4gIC8vICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAvLyAgICAgZHVyYXRpb246IDAuMyxcbiAgLy8gICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgLy8gICAgIGhlaWdodDogXCIyMHB4XCIsXG4gIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcbiAgLy8gICAgIGJvcmRlcjogXCJub25lXCIsXG4gIC8vICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAvLyAgIH0pXG4gIC8vICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJcIlxuICAvLyB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlOTE5ZDhiYjkyZjU3ZmQ3OWE4N1wiKSJdLCJuYW1lcyI6WyJnc2FwIiwiZWFjaCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImN1cnNvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUN1cnNvck1vdmUiLCJiaW5kIiwib25HYWxsZXJ5SG92ZXIiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9