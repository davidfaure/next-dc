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
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.gallery, gallery => {
      console.log("Attaching event listeners", gallery); // Log to confirm
      gallery.addEventListener("mouseenter", this.onGalleryHover.bind(this));
      gallery.addEventListener("mouseleave", this.onGalleryLeave.bind(this));
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
  }
  onGalleryHover() {
    console.log("hover");
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.cursor, {
      duration: 0.3,
      width: "60px",
      height: "60px",
      backgroundColor: "transparent",
      color: "green",
      textAlign: "center",
      lineHeight: "60px",
      border: "1px solid green",
      ease: "power2.out"
    });
    this.cursor.innerHTML = "Drag";
  }
  onGalleryLeave() {
    console.log("leave");
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.cursor, {
      duration: 0.3,
      width: "20px",
      height: "20px",
      backgroundColor: "green",
      border: "none",
      ease: "power2.out"
    });
    this.cursor.innerHTML = "";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1bfae84e6a6d57d97a56")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZWY1ZGNmNGU2MTQ0ZWUzNzNjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQy9DLElBQUksQ0FBQ0gsT0FBTyxHQUFHQSxPQUFPO0lBRXRCSCw0Q0FBSSxDQUFDLElBQUksQ0FBQ08sT0FBTyxFQUFFQSxPQUFPLElBQUk7TUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixFQUFFRixPQUFPLENBQUMsRUFBQztNQUNsREEsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUN0RUwsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDRyxjQUFjLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDLENBQUM7RUFDSjtFQUVBRSxnQkFBZ0JBLENBQUNDLEtBQUssRUFBRTtJQUN0QixNQUFNO01BQUVDLE9BQU8sRUFBRUMsQ0FBQztNQUFFQyxPQUFPLEVBQUVDO0lBQUUsQ0FBQyxHQUFHSixLQUFLO0lBRXhDaEIsNENBQUksQ0FBQ3FCLEVBQUUsQ0FBQyxJQUFJLENBQUNoQixNQUFNLEVBQUU7TUFDbkJpQixRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUVMLENBQUM7TUFDUE0sR0FBRyxFQUFFSixDQUFDO01BQ05LLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztFQUNKO0VBRUFiLGNBQWNBLENBQUEsRUFBRztJQUNmSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEJWLDRDQUFJLENBQUNxQixFQUFFLENBQUMsSUFBSSxDQUFDaEIsTUFBTSxFQUFFO01BQ25CaUIsUUFBUSxFQUFFLEdBQUc7TUFDYkksS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsZUFBZSxFQUFFLGFBQWE7TUFDOUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRSxRQUFRO01BQ25CQyxVQUFVLEVBQUUsTUFBTTtNQUNsQkMsTUFBTSxFQUFFLGlCQUFpQjtNQUN6QlAsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDcEIsTUFBTSxDQUFDNEIsU0FBUyxHQUFHLE1BQU07RUFDaEM7RUFFQW5CLGNBQWNBLENBQUEsRUFBRztJQUNmTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEJWLDRDQUFJLENBQUNxQixFQUFFLENBQUMsSUFBSSxDQUFDaEIsTUFBTSxFQUFFO01BQ25CaUIsUUFBUSxFQUFFLEdBQUc7TUFDYkksS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsZUFBZSxFQUFFLE9BQU87TUFDeEJJLE1BQU0sRUFBRSxNQUFNO01BQ2RQLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQzRCLFNBQVMsR0FBRyxFQUFFO0VBQzVCO0FBQ0Y7Ozs7Ozs7O1VDdERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnNvclwiKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGVhY2godGhpcy5nYWxsZXJ5LCBnYWxsZXJ5ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXR0YWNoaW5nIGV2ZW50IGxpc3RlbmVyc1wiLCBnYWxsZXJ5KSAvLyBMb2cgdG8gY29uZmlybVxuICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uR2FsbGVyeUhvdmVyLmJpbmQodGhpcykpXG4gICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25HYWxsZXJ5TGVhdmUuYmluZCh0aGlzKSlcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ3Vyc29yTW92ZShldmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnRcblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICB9XG5cbiAgb25HYWxsZXJ5SG92ZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJob3ZlclwiKVxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNjBweFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgbGluZUhlaWdodDogXCI2MHB4XCIsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZWVuXCIsXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJEcmFnXCJcbiAgfVxuXG4gIG9uR2FsbGVyeUxlYXZlKCkge1xuICAgIGNvbnNvbGUubG9nKFwibGVhdmVcIilcbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBcIlwiXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFiZmFlODRlNmE2ZDU3ZDk3YTU2XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiY3Vyc29yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdhbGxlcnkiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uR2FsbGVyeUhvdmVyIiwiYmluZCIsIm9uR2FsbGVyeUxlYXZlIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==