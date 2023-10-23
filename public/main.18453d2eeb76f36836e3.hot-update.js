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
    if (this.template === "home") {
      console.log("ici", this.gallery);
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.gallery, gallery => {
        gallery.addEventListener("mouseenter", this.onGalleryHover.bind(this));
        gallery.addEventListener("mouseleave", this.onGalleryLeave.bind(this));
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
/******/ 	__webpack_require__.h = () => ("acafdf652c6c69c48216")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xODQ1M2QyZWViNzZmMzY4MzZlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQyxNQUFNO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0VBQzVEO0VBRUFDLGdCQUFnQkEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3RCLE1BQU07TUFBRUMsT0FBTyxFQUFFQyxDQUFDO01BQUVDLE9BQU8sRUFBRUM7SUFBRSxDQUFDLEdBQUdKLEtBQUs7SUFFeENWLDRDQUFJLENBQUNlLEVBQUUsQ0FBQyxJQUFJLENBQUNYLE1BQU0sRUFBRTtNQUNuQlksUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFTCxDQUFDO01BQ1BNLEdBQUcsRUFBRUosQ0FBQztNQUNOSyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFDRixJQUFJLElBQUksQ0FBQ2QsUUFBUSxLQUFLLE1BQU0sRUFBRTtNQUM1QmUsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQ2YsT0FBTyxDQUFDO01BQ2hDTCw0Q0FBSSxDQUFDLElBQUksQ0FBQ0ssT0FBTyxFQUFFQSxPQUFPLElBQUk7UUFDNUJBLE9BQU8sQ0FBQ2dCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFbEIsT0FBTyxDQUFDZ0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0csY0FBYyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDeEUsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBRCxjQUFjQSxDQUFBLEVBQUc7SUFDZkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3RCO0VBRUFJLGNBQWNBLENBQUEsRUFBRztJQUNmTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7RUFDdEI7QUFDRjs7Ozs7Ozs7VUNuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NsYXNzZXMvQ3Vyc29yLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoeyBjdXJzb3IsIHRlbXBsYXRlIH0pIHtcbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuICB9XG5cbiAgaGFuZGxlQ3Vyc29yTW92ZShldmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnRcblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICAgIGlmICh0aGlzLnRlbXBsYXRlID09PSBcImhvbWVcIikge1xuICAgICAgY29uc29sZS5sb2coXCJpY2lcIiwgdGhpcy5nYWxsZXJ5KVxuICAgICAgZWFjaCh0aGlzLmdhbGxlcnksIGdhbGxlcnkgPT4ge1xuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25HYWxsZXJ5SG92ZXIuYmluZCh0aGlzKSlcbiAgICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uR2FsbGVyeUxlYXZlLmJpbmQodGhpcykpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uR2FsbGVyeUhvdmVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaG92ZXJcIilcbiAgfVxuXG4gIG9uR2FsbGVyeUxlYXZlKCkge1xuICAgIGNvbnNvbGUubG9nKFwibGVhdmVcIilcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWNhZmRmNjUyYzZjNjljNDgyMTZcIikiXSwibmFtZXMiOlsiZ3NhcCIsImVhY2giLCJDdXJzb3IiLCJjb25zdHJ1Y3RvciIsImN1cnNvciIsInRlbXBsYXRlIiwiZ2FsbGVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZUN1cnNvck1vdmUiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uR2FsbGVyeUhvdmVyIiwiYmluZCIsIm9uR2FsbGVyeUxlYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==