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
  }

  // onGalleryHover() {
  //   console.log("hover")
  //   gsap.to(this.cursor, {
  //     duration: 0.3,
  //     width: "60px",
  //     height: "60px",
  //     backgroundColor: "transparent",
  //     color: "green",
  //     textAlign: "center",
  //     lineHeight: "60px",
  //     border: "1px solid green",
  //     ease: "power2.out"
  //   })
  //   this.cursor.innerHTML = "Drag"
  // }

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
/******/ 	__webpack_require__.h = () => ("7fe454b02aef8311625c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNGM4YmMyZDI4MTg4YjEyY2FmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQy9DLElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBRXRCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVMLE9BQU8sRUFBRSxJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUV4Q0ssTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3hFO0VBRUFELGdCQUFnQkEsQ0FBQ0UsS0FBSyxFQUFFO0lBQ3RCLE1BQU07TUFBRUMsT0FBTyxFQUFFQyxDQUFDO01BQUVDLE9BQU8sRUFBRUM7SUFBRSxDQUFDLEdBQUdKLEtBQUs7SUFFeENkLDRDQUFJLENBQUNtQixFQUFFLENBQUMsSUFBSSxDQUFDZCxNQUFNLEVBQUU7TUFDbkJlLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRUwsQ0FBQztNQUNQTSxHQUFHLEVBQUVKLENBQUM7TUFDTkssSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0VBQ0o7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGOzs7Ozs7OztVQ3BEQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJzb3JcIilcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBjb25zb2xlLmxvZyhcIklDSVwiLCBlbGVtZW50LCB0aGlzLmN1cnNvcilcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlQ3Vyc29yTW92ZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgaGFuZGxlQ3Vyc29yTW92ZShldmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnRcblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICB9XG5cbiAgLy8gb25HYWxsZXJ5SG92ZXIoKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCJob3ZlclwiKVxuICAvLyAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgLy8gICAgIGR1cmF0aW9uOiAwLjMsXG4gIC8vICAgICB3aWR0aDogXCI2MHB4XCIsXG4gIC8vICAgICBoZWlnaHQ6IFwiNjBweFwiLFxuICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gIC8vICAgICBjb2xvcjogXCJncmVlblwiLFxuICAvLyAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAvLyAgICAgbGluZUhlaWdodDogXCI2MHB4XCIsXG4gIC8vICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZWVuXCIsXG4gIC8vICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAvLyAgIH0pXG4gIC8vICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJEcmFnXCJcbiAgLy8gfVxuXG4gIC8vIG9uR2FsbGVyeUxlYXZlKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwibGVhdmVcIilcbiAgLy8gICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gIC8vICAgICBkdXJhdGlvbjogMC4zLFxuICAvLyAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAvLyAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxuICAvLyAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgLy8gICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gIC8vICAgfSlcbiAgLy8gICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBcIlwiXG4gIC8vIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdmZTQ1NGIwMmFlZjgzMTE2MjVjXCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImJpbmQiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiXSwic291cmNlUm9vdCI6IiJ9