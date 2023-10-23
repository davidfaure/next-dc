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
/******/ 	__webpack_require__.h = () => ("26eeaf59e10cdfa09eac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hY2FmZGY2NTJjNmM2OWM0ODIxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQyxNQUFNO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0VBQzVEO0VBRUFDLGdCQUFnQkEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3RCLE1BQU07TUFBRUMsT0FBTyxFQUFFQyxDQUFDO01BQUVDLE9BQU8sRUFBRUM7SUFBRSxDQUFDLEdBQUdKLEtBQUs7SUFFeENWLDRDQUFJLENBQUNlLEVBQUUsQ0FBQyxJQUFJLENBQUNYLE1BQU0sRUFBRTtNQUNuQlksUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFTCxDQUFDO01BQ1BNLEdBQUcsRUFBRUosQ0FBQztNQUNOSyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFDRixJQUFJLElBQUksQ0FBQ2QsUUFBUSxLQUFLLE1BQU0sRUFBRTtNQUM1QmUsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQ2YsT0FBTyxDQUFDO01BQ2hDTCw0Q0FBSSxDQUFDLElBQUksQ0FBQ0ssT0FBTyxFQUFFQSxPQUFPLElBQUk7UUFDNUJBLE9BQU8sQ0FBQ2dCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFbEIsT0FBTyxDQUFDZ0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0csY0FBYyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDeEUsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBRCxjQUFjQSxDQUFBLEVBQUc7SUFDZkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCckIsNENBQUksQ0FBQ2UsRUFBRSxDQUFDLElBQUksQ0FBQ1gsTUFBTSxFQUFFO01BQ25CWSxRQUFRLEVBQUUsR0FBRztNQUNiVSxLQUFLLEVBQUUsTUFBTTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxlQUFlLEVBQUUsYUFBYTtNQUM5QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFLFFBQVE7TUFDbkJDLFVBQVUsRUFBRSxNQUFNO01BQ2xCQyxNQUFNLEVBQUUsaUJBQWlCO01BQ3pCYixJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNmLE1BQU0sQ0FBQzZCLFNBQVMsR0FBRyxNQUFNO0VBQ2hDO0VBRUFSLGNBQWNBLENBQUEsRUFBRztJQUNmTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEJyQiw0Q0FBSSxDQUFDZSxFQUFFLENBQUMsSUFBSSxDQUFDWCxNQUFNLEVBQUU7TUFDbkJZLFFBQVEsRUFBRSxHQUFHO01BQ2JVLEtBQUssRUFBRSxNQUFNO01BQ2JDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLGVBQWUsRUFBRSxPQUFPO01BQ3hCSSxNQUFNLEVBQUUsTUFBTTtNQUNkYixJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNmLE1BQU0sQ0FBQzZCLFNBQVMsR0FBRyxFQUFFO0VBQzVCO0FBQ0Y7Ozs7Ozs7O1VDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgY3Vyc29yLCB0ZW1wbGF0ZSB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3JcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcbiAgICB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgICBpZiAodGhpcy50ZW1wbGF0ZSA9PT0gXCJob21lXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaWNpXCIsIHRoaXMuZ2FsbGVyeSlcbiAgICAgIGVhY2godGhpcy5nYWxsZXJ5LCBnYWxsZXJ5ID0+IHtcbiAgICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uR2FsbGVyeUhvdmVyLmJpbmQodGhpcykpXG4gICAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbkdhbGxlcnlMZWF2ZS5iaW5kKHRoaXMpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkdhbGxlcnlIb3ZlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcImhvdmVyXCIpXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICAgIGhlaWdodDogXCI2MHB4XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjYwcHhcIixcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JlZW5cIixcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBcIkRyYWdcIlxuICB9XG5cbiAgb25HYWxsZXJ5TGVhdmUoKSB7XG4gICAgY29uc29sZS5sb2coXCJsZWF2ZVwiKVxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IFwiXCJcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjZlZWFmNTllMTBjZGZhMDllYWNcIikiXSwibmFtZXMiOlsiZ3NhcCIsImVhY2giLCJDdXJzb3IiLCJjb25zdHJ1Y3RvciIsImN1cnNvciIsInRlbXBsYXRlIiwiZ2FsbGVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZUN1cnNvck1vdmUiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uR2FsbGVyeUhvdmVyIiwiYmluZCIsIm9uR2FsbGVyeUxlYXZlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJib3JkZXIiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9