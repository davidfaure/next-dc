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
    cursor,
    template
  }) {
    this.cursor = cursor;
    this.template = template;
    this.gallery = document.querySelectorAll(".home__gallery");
    this.initEvents();
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
  initEvents() {
    if (this.template === "home") {
      console.log("ici");
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.gallery, gallery => {
        gallery.addEventListener("mouseenter", () => this.onGalleryHover());
        gallery.addEventListener("mouseleave", () => this.onGalleryLeave());
      });
    }
  }
  onGalleryHover() {
    console.log("hover");
  }
  onGalleryLeave() {
    console.log("leave");
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5deedcbd877baca40864")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mNThkNDAyNTIwY2NiZWY1ZTlmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQyxNQUFNO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0lBRTFELElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDbkI7RUFFQUMsZ0JBQWdCQSxDQUFDQyxLQUFLLEVBQUU7SUFDdEIsTUFBTTtNQUFFQyxPQUFPLEVBQUVDLENBQUM7TUFBRUMsT0FBTyxFQUFFQztJQUFFLENBQUMsR0FBR0osS0FBSztJQUV4Q1gsNENBQUksQ0FBQ2dCLEVBQUUsQ0FBQyxJQUFJLENBQUNaLE1BQU0sRUFBRTtNQUNuQmEsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFTCxDQUFDO01BQ1BNLEdBQUcsRUFBRUosQ0FBQztNQUNOSyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSjtFQUVBWCxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLElBQUksQ0FBQ0osUUFBUSxLQUFLLE1BQU0sRUFBRTtNQUM1QmdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUNsQnJCLDRDQUFJLENBQUMsSUFBSSxDQUFDSyxPQUFPLEVBQUVBLE9BQU8sSUFBSTtRQUM1QkEsT0FBTyxDQUFDaUIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ25FbEIsT0FBTyxDQUFDaUIsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sSUFBSSxDQUFDRSxjQUFjLENBQUMsQ0FBQyxDQUFDO01BQ3JFLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQUQsY0FBY0EsQ0FBQSxFQUFHO0lBQ2ZILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUN0QjtFQUVBRyxjQUFjQSxDQUFBLEVBQUc7SUFDZkosT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3RCO0FBQ0Y7Ozs7Ozs7O1VDeENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgY3Vyc29yLCB0ZW1wbGF0ZSB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3JcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcbiAgICB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcblxuICAgIHRoaXMuaW5pdEV2ZW50cygpXG4gIH1cblxuICBoYW5kbGVDdXJzb3JNb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0gPSBldmVudFxuXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB0b3A6IHksXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnRlbXBsYXRlID09PSBcImhvbWVcIikge1xuICAgICAgY29uc29sZS5sb2coXCJpY2lcIilcbiAgICAgIGVhY2godGhpcy5nYWxsZXJ5LCBnYWxsZXJ5ID0+IHtcbiAgICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm9uR2FsbGVyeUhvdmVyKCkpXG4gICAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdGhpcy5vbkdhbGxlcnlMZWF2ZSgpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkdhbGxlcnlIb3ZlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcImhvdmVyXCIpXG4gIH1cblxuICBvbkdhbGxlcnlMZWF2ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImxlYXZlXCIpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVkZWVkY2JkODc3YmFjYTQwODY0XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJjdXJzb3IiLCJ0ZW1wbGF0ZSIsImdhbGxlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbml0RXZlbnRzIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwib25HYWxsZXJ5SG92ZXIiLCJvbkdhbGxlcnlMZWF2ZSJdLCJzb3VyY2VSb290IjoiIn0=