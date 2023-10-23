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
        gallery.addEventListener("mouseover", this.onGalleryHover.bind(this));
        // gallery.addEventListener("mouseleave", this.onGalleryLeave.bind(this))
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
/******/ 	__webpack_require__.h = () => ("3c9f5704ce901d11f552")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hOTI1MDQzNWI5NzM5YWIyNjcyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQyxNQUFNO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0lBRTFELElBQUksSUFBSSxDQUFDSCxRQUFRLEtBQUssTUFBTSxFQUFFO01BQzVCSiw0Q0FBSSxDQUFDLElBQUksQ0FBQ0ssT0FBTyxFQUFFQSxPQUFPLElBQUk7UUFDNUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDLEVBQUM7UUFDekNKLE9BQU8sQ0FBQ0ssZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckU7TUFDRixDQUFDLENBQUM7SUFDSjtFQUNGOztFQUVBQyxnQkFBZ0JBLENBQUNDLEtBQUssRUFBRTtJQUN0QixNQUFNO01BQUVDLE9BQU8sRUFBRUMsQ0FBQztNQUFFQyxPQUFPLEVBQUVDO0lBQUUsQ0FBQyxHQUFHSixLQUFLO0lBRXhDZiw0Q0FBSSxDQUFDb0IsRUFBRSxDQUFDLElBQUksQ0FBQ2hCLE1BQU0sRUFBRTtNQUNuQmlCLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRUwsQ0FBQztNQUNQTSxHQUFHLEVBQUVKLENBQUM7TUFDTkssSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0VBQ0o7RUFFQVosY0FBY0EsQ0FBQSxFQUFHO0lBQ2ZILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQlYsNENBQUksQ0FBQ29CLEVBQUUsQ0FBQyxJQUFJLENBQUNoQixNQUFNLEVBQUU7TUFDbkJpQixRQUFRLEVBQUUsR0FBRztNQUNiSSxLQUFLLEVBQUUsTUFBTTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxlQUFlLEVBQUUsYUFBYTtNQUM5QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFLFFBQVE7TUFDbkJDLFVBQVUsRUFBRSxNQUFNO01BQ2xCQyxNQUFNLEVBQUUsaUJBQWlCO01BQ3pCUCxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNwQixNQUFNLENBQUM0QixTQUFTLEdBQUcsTUFBTTtFQUNoQztFQUVBQyxjQUFjQSxDQUFBLEVBQUc7SUFDZnhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUNwQlYsNENBQUksQ0FBQ29CLEVBQUUsQ0FBQyxJQUFJLENBQUNoQixNQUFNLEVBQUU7TUFDbkJpQixRQUFRLEVBQUUsR0FBRztNQUNiSSxLQUFLLEVBQUUsTUFBTTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxlQUFlLEVBQUUsT0FBTztNQUN4QkksTUFBTSxFQUFFLE1BQU07TUFDZFAsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDcEIsTUFBTSxDQUFDNEIsU0FBUyxHQUFHLEVBQUU7RUFDNUI7QUFDRjs7Ozs7Ozs7VUN6REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NsYXNzZXMvQ3Vyc29yLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoeyBjdXJzb3IsIHRlbXBsYXRlIH0pIHtcbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgaWYgKHRoaXMudGVtcGxhdGUgPT09IFwiaG9tZVwiKSB7XG4gICAgICBlYWNoKHRoaXMuZ2FsbGVyeSwgZ2FsbGVyeSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXR0YWNoaW5nIGV2ZW50IGxpc3RlbmVyc1wiKSAvLyBMb2cgdG8gY29uZmlybVxuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5vbkdhbGxlcnlIb3Zlci5iaW5kKHRoaXMpKVxuICAgICAgICAvLyBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25HYWxsZXJ5TGVhdmUuYmluZCh0aGlzKSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ3Vyc29yTW92ZShldmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnRcblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICB9XG5cbiAgb25HYWxsZXJ5SG92ZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJob3ZlclwiKVxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNjBweFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgbGluZUhlaWdodDogXCI2MHB4XCIsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZWVuXCIsXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJEcmFnXCJcbiAgfVxuXG4gIG9uR2FsbGVyeUxlYXZlKCkge1xuICAgIGNvbnNvbGUubG9nKFwibGVhdmVcIilcbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBcIlwiXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNjOWY1NzA0Y2U5MDFkMTFmNTUyXCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJjdXJzb3IiLCJ0ZW1wbGF0ZSIsImdhbGxlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uR2FsbGVyeUhvdmVyIiwiYmluZCIsImhhbmRsZUN1cnNvck1vdmUiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImJvcmRlciIsImlubmVySFRNTCIsIm9uR2FsbGVyeUxlYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==