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
        gallery.addEventListener("mouseenter", this.onGalleryHover.bind(this), true);
        gallery.addEventListener("mouseleave", this.onGalleryLeave.bind(this), true);
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
/******/ 	__webpack_require__.h = () => ("5d0d806299f44300dc58")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNTk3ZmZkMzcxOTI4ZDMyY2RjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQyxNQUFNO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0lBRTFELElBQUksSUFBSSxDQUFDSCxRQUFRLEtBQUssTUFBTSxFQUFFO01BQzVCSiw0Q0FBSSxDQUFDLElBQUksQ0FBQ0ssT0FBTyxFQUFFQSxPQUFPLElBQUk7UUFDNUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDLEVBQUM7UUFDekNKLE9BQU8sQ0FBQ0ssZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQzVFUCxPQUFPLENBQUNLLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNHLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQztNQUM5RSxDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUFFLGdCQUFnQkEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3RCLE1BQU07TUFBRUMsT0FBTyxFQUFFQyxDQUFDO01BQUVDLE9BQU8sRUFBRUM7SUFBRSxDQUFDLEdBQUdKLEtBQUs7SUFFeENoQiw0Q0FBSSxDQUFDcUIsRUFBRSxDQUFDLElBQUksQ0FBQ2pCLE1BQU0sRUFBRTtNQUNuQmtCLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRUwsQ0FBQztNQUNQTSxHQUFHLEVBQUVKLENBQUM7TUFDTkssSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0VBQ0o7RUFFQWIsY0FBY0EsQ0FBQSxFQUFHO0lBQ2ZILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQlYsNENBQUksQ0FBQ3FCLEVBQUUsQ0FBQyxJQUFJLENBQUNqQixNQUFNLEVBQUU7TUFDbkJrQixRQUFRLEVBQUUsR0FBRztNQUNiSSxLQUFLLEVBQUUsTUFBTTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxlQUFlLEVBQUUsYUFBYTtNQUM5QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFLFFBQVE7TUFDbkJDLFVBQVUsRUFBRSxNQUFNO01BQ2xCQyxNQUFNLEVBQUUsaUJBQWlCO01BQ3pCUCxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNyQixNQUFNLENBQUM2QixTQUFTLEdBQUcsTUFBTTtFQUNoQztFQUVBbkIsY0FBY0EsQ0FBQSxFQUFHO0lBQ2ZMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQlYsNENBQUksQ0FBQ3FCLEVBQUUsQ0FBQyxJQUFJLENBQUNqQixNQUFNLEVBQUU7TUFDbkJrQixRQUFRLEVBQUUsR0FBRztNQUNiSSxLQUFLLEVBQUUsTUFBTTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxlQUFlLEVBQUUsT0FBTztNQUN4QkksTUFBTSxFQUFFLE1BQU07TUFDZFAsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDckIsTUFBTSxDQUFDNkIsU0FBUyxHQUFHLEVBQUU7RUFDNUI7QUFDRjs7Ozs7Ozs7VUN6REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NsYXNzZXMvQ3Vyc29yLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoeyBjdXJzb3IsIHRlbXBsYXRlIH0pIHtcbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgaWYgKHRoaXMudGVtcGxhdGUgPT09IFwiaG9tZVwiKSB7XG4gICAgICBlYWNoKHRoaXMuZ2FsbGVyeSwgZ2FsbGVyeSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXR0YWNoaW5nIGV2ZW50IGxpc3RlbmVyc1wiKSAvLyBMb2cgdG8gY29uZmlybVxuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25HYWxsZXJ5SG92ZXIuYmluZCh0aGlzKSwgdHJ1ZSlcbiAgICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uR2FsbGVyeUxlYXZlLmJpbmQodGhpcyksIHRydWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgfVxuXG4gIG9uR2FsbGVyeUhvdmVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiaG92ZXJcIilcbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgd2lkdGg6IFwiNjBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjYwcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNjBweFwiLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmVlblwiLFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IFwiRHJhZ1wiXG4gIH1cblxuICBvbkdhbGxlcnlMZWF2ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImxlYXZlXCIpXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJcIlxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZDBkODA2Mjk5ZjQ0MzAwZGM1OFwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiZWFjaCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiY3Vyc29yIiwidGVtcGxhdGUiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkdhbGxlcnlIb3ZlciIsImJpbmQiLCJvbkdhbGxlcnlMZWF2ZSIsImhhbmRsZUN1cnNvck1vdmUiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImJvcmRlciIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=