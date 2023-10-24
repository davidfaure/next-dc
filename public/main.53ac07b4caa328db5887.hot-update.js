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
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.links, link => {
        link.addEventListener("mouseover", this.onLinkHover.bind(this));
        link.addEventListener("mouseleave", this.onLinkLeave.bind(this));
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
  onLinkHover() {
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
    this.cursor.innerHTML = "Go";
  }
  onLinkLeave() {
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
/******/ 	__webpack_require__.h = () => ("45f77accb0e255750c96")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1puQiw0Q0FBSSxDQUFDMkIsRUFBRSxDQUFDLElBQUksQ0FBQ3RCLE1BQU0sRUFBRTtNQUNuQnVCLFFBQVEsRUFBRSxHQUFHO01BQ2JJLEtBQUssRUFBRSxNQUFNO01BQ2JDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLGVBQWUsRUFBRSxNQUFNO01BQ3ZCTyxNQUFNLEVBQUUsTUFBTTtNQUNkVixJQUFJLEVBQUU3QixrREFBTUE7SUFDZCxDQUFDLENBQUM7RUFDSjtFQUVBa0IsV0FBV0EsQ0FBQSxFQUFHO0lBQ1pwQiw0Q0FBSSxDQUFDMkIsRUFBRSxDQUFDLElBQUksQ0FBQ3RCLE1BQU0sRUFBRTtNQUNuQnVCLFFBQVEsRUFBRSxHQUFHO01BQ2JJLEtBQUssRUFBRSxNQUFNO01BQ2JDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLGVBQWUsRUFBRSxTQUFTO01BQzFCTyxNQUFNLEVBQUUsTUFBTTtNQUNkVixJQUFJLEVBQUU3QixrREFBTUE7SUFDZCxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNHLE1BQU0sQ0FBQ21DLFNBQVMsR0FBRyxFQUFFO0VBQzVCO0FBQ0Y7Ozs7Ozs7O1VDcEhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgY3Vyc29yLCB0ZW1wbGF0ZSB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3JcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuICAgIHRoaXMuaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9faGVyb1wiKVxuICAgIHRoaXMubGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkX193cmFwcGVyX19tZW51X19saV9fd3JhcHBlclwiKVxuXG4gICAgaWYgKHRoaXMudGVtcGxhdGUgPT09IFwiaG9tZVwiKSB7XG4gICAgICBlYWNoKHRoaXMuZ2FsbGVyeSwgZ2FsbGVyeSA9PiB7XG4gICAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLm9uR2FsbGVyeUhvdmVyLmJpbmQodGhpcykpXG4gICAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbkdhbGxlcnlMZWF2ZS5iaW5kKHRoaXMpKVxuICAgICAgfSlcbiAgICAgIGVhY2godGhpcy5saW5rcywgbGluayA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLm9uTGlua0hvdmVyLmJpbmQodGhpcykpXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbkxpbmtMZWF2ZS5iaW5kKHRoaXMpKVxuICAgICAgfSlcbiAgICAgIHRoaXMuaGVyby5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMub25IZXJvSG92ZXIuYmluZCh0aGlzKSlcbiAgICAgIHRoaXMuaGVyby5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uSGVyb0xlYXZlLmJpbmQodGhpcykpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ3Vyc29yTW92ZShldmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnRcblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICB9XG5cbiAgb25MaW5rSG92ZXIoKSB7XG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIHdpZHRoOiBcIjEycmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMTJyZW1cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgbGluZUhlaWdodDogXCIxMnJlbVwiLFxuICAgICAgZWFzZTogU01PT1RIXG4gICAgfSlcbiAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBcIkdvXCJcbiAgfVxuXG4gIG9uTGlua0xlYXZlKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBlYXNlOiBTTU9PVEhcbiAgICB9KVxuICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IFwiXCJcbiAgfVxuXG4gIG9uR2FsbGVyeUhvdmVyKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxMnJlbVwiLFxuICAgICAgaGVpZ2h0OiBcIjEycmVtXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMTJyZW1cIixcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJEcmFnXCJcbiAgfVxuXG4gIG9uR2FsbGVyeUxlYXZlKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBlYXNlOiBTTU9PVEhcbiAgICB9KVxuICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IFwiXCJcbiAgfVxuXG4gIG9uSGVyb0hvdmVyKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBlYXNlOiBTTU9PVEhcbiAgICB9KVxuICB9XG5cbiAgb25IZXJvTGVhdmUoKSB7XG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gXCJcIlxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NWY3N2FjY2IwZTI1NTc1MGM5NlwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiZWFjaCIsIlNNT09USCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiY3Vyc29yIiwidGVtcGxhdGUiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVybyIsImxpbmtzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uR2FsbGVyeUhvdmVyIiwiYmluZCIsIm9uR2FsbGVyeUxlYXZlIiwibGluayIsIm9uTGlua0hvdmVyIiwib25MaW5rTGVhdmUiLCJvbkhlcm9Ib3ZlciIsIm9uSGVyb0xlYXZlIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiaW5uZXJIVE1MIiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==