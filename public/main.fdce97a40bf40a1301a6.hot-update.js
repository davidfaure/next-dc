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
    if (this.template === "home") {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.gallery, gallery => {
        console.log("Attaching event listeners"); // Log to confirm
        gallery.addEventListener("mouseenter", this.onGalleryHover.bind(this));
        gallery.addEventListener("mouseleave", this.onGalleryLeave.bind(this));
      });
    }
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
/******/ 	__webpack_require__.h = () => ("37ec259ec6b2757bd0ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mZGNlOTdhNDBiZjQwYTEzMDFhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQyxNQUFNO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0lBRTFELElBQUksSUFBSSxDQUFDSCxRQUFRLEtBQUssTUFBTSxFQUFFO01BQzVCSiw0Q0FBSSxDQUFDLElBQUksQ0FBQ0ssT0FBTyxFQUFFQSxPQUFPLElBQUk7UUFDNUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDLEVBQUM7UUFDekNKLE9BQU8sQ0FBQ0ssZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEVQLE9BQU8sQ0FBQ0ssZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0csY0FBYyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDeEUsQ0FBQyxDQUFDO0lBQ0o7RUFDRjtFQUVBRSxnQkFBZ0JBLENBQUNDLEtBQUssRUFBRTtJQUN0QixNQUFNO01BQUVDLE9BQU8sRUFBRUMsQ0FBQztNQUFFQyxPQUFPLEVBQUVDO0lBQUUsQ0FBQyxHQUFHSixLQUFLO0lBRXhDaEIsNENBQUksQ0FBQ3FCLEVBQUUsQ0FBQyxJQUFJLENBQUNqQixNQUFNLEVBQUU7TUFDbkJrQixRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUVMLENBQUM7TUFDUE0sR0FBRyxFQUFFSixDQUFDO01BQ05LLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztFQUNKO0VBRUFiLGNBQWNBLENBQUEsRUFBRztJQUNmSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEJWLDRDQUFJLENBQUNxQixFQUFFLENBQUMsSUFBSSxDQUFDakIsTUFBTSxFQUFFO01BQ25Ca0IsUUFBUSxFQUFFLEdBQUc7TUFDYkksS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsZUFBZSxFQUFFLGFBQWE7TUFDOUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRSxRQUFRO01BQ25CQyxVQUFVLEVBQUUsTUFBTTtNQUNsQkMsTUFBTSxFQUFFLGlCQUFpQjtNQUN6QlAsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDckIsTUFBTSxDQUFDNkIsU0FBUyxHQUFHLE1BQU07RUFDaEM7RUFFQW5CLGNBQWNBLENBQUEsRUFBRztJQUNmTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDcEJWLDRDQUFJLENBQUNxQixFQUFFLENBQUMsSUFBSSxDQUFDakIsTUFBTSxFQUFFO01BQ25Ca0IsUUFBUSxFQUFFLEdBQUc7TUFDYkksS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsZUFBZSxFQUFFLE9BQU87TUFDeEJJLE1BQU0sRUFBRSxNQUFNO01BQ2RQLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQzZCLFNBQVMsR0FBRyxFQUFFO0VBQzVCO0FBQ0Y7Ozs7Ozs7O1VDekRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgY3Vyc29yLCB0ZW1wbGF0ZSB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3JcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcbiAgICB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcblxuICAgIGlmICh0aGlzLnRlbXBsYXRlID09PSBcImhvbWVcIikge1xuICAgICAgZWFjaCh0aGlzLmdhbGxlcnksIGdhbGxlcnkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkF0dGFjaGluZyBldmVudCBsaXN0ZW5lcnNcIikgLy8gTG9nIHRvIGNvbmZpcm1cbiAgICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uR2FsbGVyeUhvdmVyLmJpbmQodGhpcykpXG4gICAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbkdhbGxlcnlMZWF2ZS5iaW5kKHRoaXMpKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDdXJzb3JNb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0gPSBldmVudFxuXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB0b3A6IHksXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gIH1cblxuICBvbkdhbGxlcnlIb3ZlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcImhvdmVyXCIpXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICAgIGhlaWdodDogXCI2MHB4XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjYwcHhcIixcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JlZW5cIixcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBcIkRyYWdcIlxuICB9XG5cbiAgb25HYWxsZXJ5TGVhdmUoKSB7XG4gICAgY29uc29sZS5sb2coXCJsZWF2ZVwiKVxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IFwiXCJcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzdlYzI1OWVjNmIyNzU3YmQwZWFcIikiXSwibmFtZXMiOlsiZ3NhcCIsImVhY2giLCJDdXJzb3IiLCJjb25zdHJ1Y3RvciIsImN1cnNvciIsInRlbXBsYXRlIiwiZ2FsbGVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwib25HYWxsZXJ5SG92ZXIiLCJiaW5kIiwib25HYWxsZXJ5TGVhdmUiLCJoYW5kbGVDdXJzb3JNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwieCIsImNsaWVudFkiLCJ5IiwidG8iLCJkdXJhdGlvbiIsImxlZnQiLCJ0b3AiLCJlYXNlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJib3JkZXIiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9