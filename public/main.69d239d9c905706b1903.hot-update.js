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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");



class Cursor {
  constructor({
    cursor,
    template
  }) {
    this.cursor = cursor;
    this.template = template;
    this.gallery = document.querySelectorAll(".home__gallery");
    this.hero = document.querySelectorAll(".home__hero");
    this.links = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__wrapper");
    if (this.template === "home") {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.gallery, gallery => {
        gallery.addEventListener("mouseover", this.onGalleryHover.bind(this));
        gallery.addEventListener("mouseleave", this.onGalleryLeave.bind(this));
      });
      this.hero.addEventListener("mouseover", this.onHeroHover.bind(this));
      this.hero.addEventListener("mouseleave", this.onHeroLeave.bind(this));
    }
  }
  handleCursorMove(event) {
    const {
      clientX: x,
      clientY: y
    } = event;
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      left: x,
      top: y,
      ease: "power2.out"
    });
  }
  onGalleryHover() {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      width: "12rem",
      height: "12rem",
      backgroundColor: "#2baf50",
      color: "#fff",
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "500",
      lineHeight: "12rem",
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
    this.cursor.innerHTML = "Drag";
  }
  onGalleryLeave() {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      width: "1rem",
      height: "1rem",
      backgroundColor: "#2baf50",
      border: "none",
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
    this.cursor.innerHTML = "";
  }
  onHeroHover() {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      width: "1rem",
      height: "1rem",
      backgroundColor: "#FFF",
      border: "none",
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
  }
  onHeroLeave() {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      width: "1rem",
      height: "1rem",
      backgroundColor: "#2baf50",
      border: "none",
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
    this.cursor.innerHTML = "";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53ac07b4caa328db5887")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OWQyMzlkOWM5MDU3MDZiMTkwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ007QUFDWTtBQUUxQixNQUFNRyxNQUFNLENBQUM7RUFDMUJDLFdBQVdBLENBQUM7SUFBRUMsTUFBTTtJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNoQyxJQUFJLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxRCxJQUFJLENBQUNDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDcEQsSUFBSSxDQUFDRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsbURBQW1ELENBQUM7SUFFM0YsSUFBSSxJQUFJLENBQUNILFFBQVEsS0FBSyxNQUFNLEVBQUU7TUFDNUJMLDRDQUFJLENBQUMsSUFBSSxDQUFDTSxPQUFPLEVBQUVBLE9BQU8sSUFBSTtRQUM1QkEsT0FBTyxDQUFDSyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRVAsT0FBTyxDQUFDSyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDRyxjQUFjLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUN4RSxDQUFDLENBQUM7TUFDRixJQUFJLENBQUNKLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ0ksV0FBVyxDQUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDcEUsSUFBSSxDQUFDSixJQUFJLENBQUNFLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNLLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFO0VBQ0Y7RUFFQUksZ0JBQWdCQSxDQUFDQyxLQUFLLEVBQUU7SUFDdEIsTUFBTTtNQUFFQyxPQUFPLEVBQUVDLENBQUM7TUFBRUMsT0FBTyxFQUFFQztJQUFFLENBQUMsR0FBR0osS0FBSztJQUV4Q25CLDRDQUFJLENBQUN3QixFQUFFLENBQUMsSUFBSSxDQUFDbkIsTUFBTSxFQUFFO01BQ25Cb0IsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFTCxDQUFDO01BQ1BNLEdBQUcsRUFBRUosQ0FBQztNQUNOSyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSjtFQUVBZixjQUFjQSxDQUFBLEVBQUc7SUFDZmIsNENBQUksQ0FBQ3dCLEVBQUUsQ0FBQyxJQUFJLENBQUNuQixNQUFNLEVBQUU7TUFDbkJvQixRQUFRLEVBQUUsR0FBRztNQUNiSSxLQUFLLEVBQUUsT0FBTztNQUNkQyxNQUFNLEVBQUUsT0FBTztNQUNmQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsS0FBSyxFQUFFLE1BQU07TUFDYkMsU0FBUyxFQUFFLFFBQVE7TUFDbkJDLFFBQVEsRUFBRSxNQUFNO01BQ2hCQyxVQUFVLEVBQUUsS0FBSztNQUNqQkMsVUFBVSxFQUFFLE9BQU87TUFDbkJSLElBQUksRUFBRTFCLGtEQUFNQTtJQUNkLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ0csTUFBTSxDQUFDZ0MsU0FBUyxHQUFHLE1BQU07RUFDaEM7RUFFQXRCLGNBQWNBLENBQUEsRUFBRztJQUNmZiw0Q0FBSSxDQUFDd0IsRUFBRSxDQUFDLElBQUksQ0FBQ25CLE1BQU0sRUFBRTtNQUNuQm9CLFFBQVEsRUFBRSxHQUFHO01BQ2JJLEtBQUssRUFBRSxNQUFNO01BQ2JDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLGVBQWUsRUFBRSxTQUFTO01BQzFCTyxNQUFNLEVBQUUsTUFBTTtNQUNkVixJQUFJLEVBQUUxQixrREFBTUE7SUFDZCxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNHLE1BQU0sQ0FBQ2dDLFNBQVMsR0FBRyxFQUFFO0VBQzVCO0VBRUFyQixXQUFXQSxDQUFBLEVBQUc7SUFDWmhCLDRDQUFJLENBQUN3QixFQUFFLENBQUMsSUFBSSxDQUFDbkIsTUFBTSxFQUFFO01BQ25Cb0IsUUFBUSxFQUFFLEdBQUc7TUFDYkksS0FBSyxFQUFFLE1BQU07TUFDYkMsTUFBTSxFQUFFLE1BQU07TUFDZEMsZUFBZSxFQUFFLE1BQU07TUFDdkJPLE1BQU0sRUFBRSxNQUFNO01BQ2RWLElBQUksRUFBRTFCLGtEQUFNQTtJQUNkLENBQUMsQ0FBQztFQUNKO0VBRUFlLFdBQVdBLENBQUEsRUFBRztJQUNaakIsNENBQUksQ0FBQ3dCLEVBQUUsQ0FBQyxJQUFJLENBQUNuQixNQUFNLEVBQUU7TUFDbkJvQixRQUFRLEVBQUUsR0FBRztNQUNiSSxLQUFLLEVBQUUsTUFBTTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxlQUFlLEVBQUUsU0FBUztNQUMxQk8sTUFBTSxFQUFFLE1BQU07TUFDZFYsSUFBSSxFQUFFMUIsa0RBQU1BO0lBQ2QsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDRyxNQUFNLENBQUNnQyxTQUFTLEdBQUcsRUFBRTtFQUM1QjtBQUNGOzs7Ozs7OztVQ3BGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3Rvcih7IGN1cnNvciwgdGVtcGxhdGUgfSkge1xuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cbiAgICB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcbiAgICB0aGlzLmhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2hlcm9cIilcbiAgICB0aGlzLmxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX3dyYXBwZXJcIilcblxuICAgIGlmICh0aGlzLnRlbXBsYXRlID09PSBcImhvbWVcIikge1xuICAgICAgZWFjaCh0aGlzLmdhbGxlcnksIGdhbGxlcnkgPT4ge1xuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5vbkdhbGxlcnlIb3Zlci5iaW5kKHRoaXMpKVxuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25HYWxsZXJ5TGVhdmUuYmluZCh0aGlzKSlcbiAgICAgIH0pXG4gICAgICB0aGlzLmhlcm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLm9uSGVyb0hvdmVyLmJpbmQodGhpcykpXG4gICAgICB0aGlzLmhlcm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbkhlcm9MZWF2ZS5iaW5kKHRoaXMpKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgfVxuXG4gIG9uR2FsbGVyeUhvdmVyKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxMnJlbVwiLFxuICAgICAgaGVpZ2h0OiBcIjEycmVtXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMTJyZW1cIixcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJEcmFnXCJcbiAgfVxuXG4gIG9uR2FsbGVyeUxlYXZlKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBlYXNlOiBTTU9PVEhcbiAgICB9KVxuICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IFwiXCJcbiAgfVxuXG4gIG9uSGVyb0hvdmVyKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBlYXNlOiBTTU9PVEhcbiAgICB9KVxuICB9XG5cbiAgb25IZXJvTGVhdmUoKSB7XG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJcIlxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1M2FjMDdiNGNhYTMyOGRiNTg4N1wiKSJdLCJuYW1lcyI6WyJnc2FwIiwiZWFjaCIsIlNNT09USCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiY3Vyc29yIiwidGVtcGxhdGUiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVybyIsImxpbmtzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uR2FsbGVyeUhvdmVyIiwiYmluZCIsIm9uR2FsbGVyeUxlYXZlIiwib25IZXJvSG92ZXIiLCJvbkhlcm9MZWF2ZSIsImhhbmRsZUN1cnNvck1vdmUiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImlubmVySFRNTCIsImJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=