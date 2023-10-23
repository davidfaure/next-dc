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
    this.element.addEventListener("mouseenter", this.onGalleryHover.bind(this));
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
/******/ 	__webpack_require__.h = () => ("5ec6bfaa1da134ca0b36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ZmU0NTRiMDJhZWY4MzExNjI1Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQy9DLElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBRXRCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVMLE9BQU8sRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUV4Q0ssTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RFLElBQUksQ0FBQ1QsT0FBTyxDQUFDTyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDRyxjQUFjLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM3RTtFQUVBRCxnQkFBZ0JBLENBQUNHLEtBQUssRUFBRTtJQUN0QixNQUFNO01BQUVDLE9BQU8sRUFBRUMsQ0FBQztNQUFFQyxPQUFPLEVBQUVDO0lBQUUsQ0FBQyxHQUFHSixLQUFLO0lBRXhDZiw0Q0FBSSxDQUFDb0IsRUFBRSxDQUFDLElBQUksQ0FBQ2YsTUFBTSxFQUFFO01BQ25CZ0IsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFTCxDQUFDO01BQ1BNLEdBQUcsRUFBRUosQ0FBQztNQUNOSyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFFRkMscUJBQXFCLENBQUMsTUFBTSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDNUM7RUFFQUEsTUFBTUEsQ0FBQSxFQUFHO0lBQ1BELHFCQUFxQixDQUFDLE1BQU0sSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQzVDO0VBRUFaLGNBQWNBLENBQUEsRUFBRztJQUNmTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0Y7Ozs7Ozs7O1VDM0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnNvclwiKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGNvbnNvbGUubG9nKFwiSUNJXCIsIGVsZW1lbnQsIHRoaXMuY3Vyc29yKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVDdXJzb3JNb3ZlLmJpbmQodGhpcykpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25HYWxsZXJ5SG92ZXIuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnJlbmRlcigpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnJlbmRlcigpKVxuICB9XG5cbiAgb25HYWxsZXJ5SG92ZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJob3ZlclwiKVxuICAgIC8vIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAvLyAgIGR1cmF0aW9uOiAwLjMsXG4gICAgLy8gICB3aWR0aDogXCI2MHB4XCIsXG4gICAgLy8gICBoZWlnaHQ6IFwiNjBweFwiLFxuICAgIC8vICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgLy8gICBjb2xvcjogXCJncmVlblwiLFxuICAgIC8vICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIC8vICAgbGluZUhlaWdodDogXCI2MHB4XCIsXG4gICAgLy8gICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZWVuXCIsXG4gICAgLy8gICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIC8vIH0pXG4gICAgLy8gdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJEcmFnXCJcbiAgfVxuXG4gIC8vIG9uR2FsbGVyeUxlYXZlKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwibGVhdmVcIilcbiAgLy8gICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gIC8vICAgICBkdXJhdGlvbjogMC4zLFxuICAvLyAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAvLyAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxuICAvLyAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgLy8gICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gIC8vICAgfSlcbiAgLy8gICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBcIlwiXG4gIC8vIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVlYzZiZmFhMWRhMTM0Y2EwYjM2XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImJpbmQiLCJvbkdhbGxlcnlIb3ZlciIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=