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
        console.log("Attaching event listeners", gallery); // Log to confirm
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
/******/ 	__webpack_require__.h = () => ("f8014221a61b58296a74")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZDBkODA2Mjk5ZjQ0MzAwZGM1OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDTTtBQUVkLE1BQU1FLE1BQU0sQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQztJQUFFQyxNQUFNO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0QsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0lBRTFELElBQUksSUFBSSxDQUFDSCxRQUFRLEtBQUssTUFBTSxFQUFFO01BQzVCSiw0Q0FBSSxDQUFDLElBQUksQ0FBQ0ssT0FBTyxFQUFFQSxPQUFPLElBQUk7UUFDNUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixFQUFFSixPQUFPLENBQUMsRUFBQztRQUNsREEsT0FBTyxDQUFDSyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDNUVQLE9BQU8sQ0FBQ0ssZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ0csY0FBYyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDO01BQzlFLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQUUsZ0JBQWdCQSxDQUFDQyxLQUFLLEVBQUU7SUFDdEIsTUFBTTtNQUFFQyxPQUFPLEVBQUVDLENBQUM7TUFBRUMsT0FBTyxFQUFFQztJQUFFLENBQUMsR0FBR0osS0FBSztJQUV4Q2hCLDRDQUFJLENBQUNxQixFQUFFLENBQUMsSUFBSSxDQUFDakIsTUFBTSxFQUFFO01BQ25Ca0IsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFTCxDQUFDO01BQ1BNLEdBQUcsRUFBRUosQ0FBQztNQUNOSyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSjtFQUVBYixjQUFjQSxDQUFBLEVBQUc7SUFDZkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCViw0Q0FBSSxDQUFDcUIsRUFBRSxDQUFDLElBQUksQ0FBQ2pCLE1BQU0sRUFBRTtNQUNuQmtCLFFBQVEsRUFBRSxHQUFHO01BQ2JJLEtBQUssRUFBRSxNQUFNO01BQ2JDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLGVBQWUsRUFBRSxhQUFhO01BQzlCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUUsUUFBUTtNQUNuQkMsVUFBVSxFQUFFLE1BQU07TUFDbEJDLE1BQU0sRUFBRSxpQkFBaUI7TUFDekJQLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQzZCLFNBQVMsR0FBRyxNQUFNO0VBQ2hDO0VBRUFuQixjQUFjQSxDQUFBLEVBQUc7SUFDZkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3BCViw0Q0FBSSxDQUFDcUIsRUFBRSxDQUFDLElBQUksQ0FBQ2pCLE1BQU0sRUFBRTtNQUNuQmtCLFFBQVEsRUFBRSxHQUFHO01BQ2JJLEtBQUssRUFBRSxNQUFNO01BQ2JDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLGVBQWUsRUFBRSxPQUFPO01BQ3hCSSxNQUFNLEVBQUUsTUFBTTtNQUNkUCxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNyQixNQUFNLENBQUM2QixTQUFTLEdBQUcsRUFBRTtFQUM1QjtBQUNGOzs7Ozs7OztVQ3pEQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3Rvcih7IGN1cnNvciwgdGVtcGxhdGUgfSkge1xuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG4gICAgdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpXG5cbiAgICBpZiAodGhpcy50ZW1wbGF0ZSA9PT0gXCJob21lXCIpIHtcbiAgICAgIGVhY2godGhpcy5nYWxsZXJ5LCBnYWxsZXJ5ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBdHRhY2hpbmcgZXZlbnQgbGlzdGVuZXJzXCIsIGdhbGxlcnkpIC8vIExvZyB0byBjb25maXJtXG4gICAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbkdhbGxlcnlIb3Zlci5iaW5kKHRoaXMpLCB0cnVlKVxuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25HYWxsZXJ5TGVhdmUuYmluZCh0aGlzKSwgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ3Vyc29yTW92ZShldmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnRcblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICB9XG5cbiAgb25HYWxsZXJ5SG92ZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCJob3ZlclwiKVxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNjBweFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgbGluZUhlaWdodDogXCI2MHB4XCIsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZWVuXCIsXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJEcmFnXCJcbiAgfVxuXG4gIG9uR2FsbGVyeUxlYXZlKCkge1xuICAgIGNvbnNvbGUubG9nKFwibGVhdmVcIilcbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBcIlwiXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY4MDE0MjIxYTYxYjU4Mjk2YTc0XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJjdXJzb3IiLCJ0ZW1wbGF0ZSIsImdhbGxlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uR2FsbGVyeUhvdmVyIiwiYmluZCIsIm9uR2FsbGVyeUxlYXZlIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwiYm9yZGVyIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==