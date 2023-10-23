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
    document.querySelector(".home__gallery").addEventListener("mouseenter", () => {
      console.log("Hovered!");
    });
    window.addEventListener("mousemove", this.handleCursorMove.bind(this));
    // each(this.element, element => {
    //   element.addEventListener("mouseenter", this.onGalleryHover.bind(this))
    // })
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
/******/ 	__webpack_require__.h = () => ("6db643033a33c7ce2cd3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lOTE5ZDhiYjkyZjU3ZmQ3OWE4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQy9DLElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBRXRCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVMLE9BQU8sRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUV4Q0MsUUFBUSxDQUFDSSxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU07TUFDNUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDLENBQUM7SUFFRkcsTUFBTSxDQUFDRCxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RFO0lBQ0E7SUFDQTtFQUNGOztFQUVBRCxnQkFBZ0JBLENBQUNFLEtBQUssRUFBRTtJQUN0QixNQUFNO01BQUVDLE9BQU8sRUFBRUMsQ0FBQztNQUFFQyxPQUFPLEVBQUVDO0lBQUUsQ0FBQyxHQUFHSixLQUFLO0lBRXhDZiw0Q0FBSSxDQUFDb0IsRUFBRSxDQUFDLElBQUksQ0FBQ2YsTUFBTSxFQUFFO01BQ25CZ0IsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFTCxDQUFDO01BQ1BNLEdBQUcsRUFBRUosQ0FBQztNQUNOSyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFFRkMscUJBQXFCLENBQUMsTUFBTSxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDNUM7RUFFQUEsTUFBTUEsQ0FBQSxFQUFHO0lBQ1BELHFCQUFxQixDQUFDLE1BQU0sSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0VBQzVDO0VBRUFDLGNBQWNBLENBQUEsRUFBRztJQUNmbkIsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNGOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGOzs7Ozs7OztVQ2pFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJzb3JcIilcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zb2xlLmxvZyhcIklDSVwiLCBlbGVtZW50LCB0aGlzLmN1cnNvcilcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhvdmVyZWQhXCIpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlQ3Vyc29yTW92ZS5iaW5kKHRoaXMpKVxuICAgIC8vIGVhY2godGhpcy5lbGVtZW50LCBlbGVtZW50ID0+IHtcbiAgICAvLyAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbkdhbGxlcnlIb3Zlci5iaW5kKHRoaXMpKVxuICAgIC8vIH0pXG4gIH1cblxuICBoYW5kbGVDdXJzb3JNb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0gPSBldmVudFxuXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB0b3A6IHksXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXIoKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXIoKSlcbiAgfVxuXG4gIG9uR2FsbGVyeUhvdmVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaG92ZXJcIilcbiAgICAvLyBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgLy8gICBkdXJhdGlvbjogMC4zLFxuICAgIC8vICAgd2lkdGg6IFwiNjBweFwiLFxuICAgIC8vICAgaGVpZ2h0OiBcIjYwcHhcIixcbiAgICAvLyAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIC8vICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICAvLyAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAvLyAgIGxpbmVIZWlnaHQ6IFwiNjBweFwiLFxuICAgIC8vICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmVlblwiLFxuICAgIC8vICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICAvLyB9KVxuICAgIC8vIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IFwiRHJhZ1wiXG4gIH1cblxuICAvLyBvbkdhbGxlcnlMZWF2ZSgpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcImxlYXZlXCIpXG4gIC8vICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAvLyAgICAgZHVyYXRpb246IDAuMyxcbiAgLy8gICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgLy8gICAgIGhlaWdodDogXCIyMHB4XCIsXG4gIC8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcbiAgLy8gICAgIGJvcmRlcjogXCJub25lXCIsXG4gIC8vICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAvLyAgIH0pXG4gIC8vICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJcIlxuICAvLyB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZGI2NDMwMzNhMzNjN2NlMmNkM1wiKSJdLCJuYW1lcyI6WyJnc2FwIiwiZWFjaCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImN1cnNvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJoYW5kbGVDdXJzb3JNb3ZlIiwiYmluZCIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsIm9uR2FsbGVyeUhvdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==