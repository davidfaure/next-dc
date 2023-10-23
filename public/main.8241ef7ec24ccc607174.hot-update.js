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
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.gallery, gallery => {
        gallery.addEventListener("mouseenter", () => this.onGalleryHover());
        gallery.addEventListener("mouseleave", () => this.onGalleryLeave());
      });
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c5b310a64cd61e57dc3f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44MjQxZWY3ZWMyNGNjYzYwNzE3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQyxNQUFNO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0lBRTFELElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDbkI7RUFFQUMsZ0JBQWdCQSxDQUFDQyxLQUFLLEVBQUU7SUFDdEIsTUFBTTtNQUFFQyxPQUFPLEVBQUVDLENBQUM7TUFBRUMsT0FBTyxFQUFFQztJQUFFLENBQUMsR0FBR0osS0FBSztJQUV4Q1gsNENBQUksQ0FBQ2dCLEVBQUUsQ0FBQyxJQUFJLENBQUNaLE1BQU0sRUFBRTtNQUNuQmEsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFTCxDQUFDO01BQ1BNLEdBQUcsRUFBRUosQ0FBQztNQUNOSyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSjtFQUVBWCxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLElBQUksQ0FBQ0osUUFBUSxLQUFLLE1BQU0sRUFBRTtNQUM1QkosNENBQUksQ0FBQyxJQUFJLENBQUNLLE9BQU8sRUFBRUEsT0FBTyxJQUFJO1FBQzVCQSxPQUFPLENBQUNlLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNuRWhCLE9BQU8sQ0FBQ2UsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sSUFBSSxDQUFDRSxjQUFjLENBQUMsQ0FBQyxDQUFDO01BQ3JFLENBQUMsQ0FBQztJQUNKO0VBQ0Y7QUFDRjs7Ozs7Ozs7VUMvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NsYXNzZXMvQ3Vyc29yLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoeyBjdXJzb3IsIHRlbXBsYXRlIH0pIHtcbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5pbml0RXZlbnRzKClcbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgfVxuXG4gIGluaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMudGVtcGxhdGUgPT09IFwiaG9tZVwiKSB7XG4gICAgICBlYWNoKHRoaXMuZ2FsbGVyeSwgZ2FsbGVyeSA9PiB7XG4gICAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5vbkdhbGxlcnlIb3ZlcigpKVxuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHRoaXMub25HYWxsZXJ5TGVhdmUoKSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNWIzMTBhNjRjZDYxZTU3ZGMzZlwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiZWFjaCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiY3Vyc29yIiwidGVtcGxhdGUiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5pdEV2ZW50cyIsImhhbmRsZUN1cnNvck1vdmUiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwib25HYWxsZXJ5SG92ZXIiLCJvbkdhbGxlcnlMZWF2ZSJdLCJzb3VyY2VSb290IjoiIn0=