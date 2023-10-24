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
    this.cursorText = document.querySelector(".cursor__text");
    this.cursorImage = document.querySelector(".cursor__image");
    this.gallery = document.querySelectorAll(".home__gallery");
    this.hero = document.querySelector(".home__hero");
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
      mixBlendMode: "normal",
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
    this.cursorText.textContent = "Drag";
  }
  onGalleryLeave() {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      width: "1rem",
      height: "1rem",
      backgroundColor: "#2baf50",
      border: "none",
      mixBlendMode: "difference",
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
    this.cursorText.textContent = "";
  }
  onHeroHover() {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      width: "25rem",
      height: "30rem",
      backgroundColor: "transparent",
      border: "none",
      mixBlendMode: "normal",
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
    this.cursorImage.style.display = "block";
    this.cursorText.textContent = "Learn more (about us)";
  }
  onHeroLeave() {
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      width: "1rem",
      height: "1rem",
      backgroundColor: "#2baf50",
      border: "none",
      mixBlendMode: "difference",
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
    this.cursorImage.style.display = "none";
    this.cursorText.textContent = "";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("47c645b8b8671c934e0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLEVBQUUsWUFBWTtNQUMxQlQsSUFBSSxFQUFFNUIsa0RBQU1BO0lBQ2QsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDSyxVQUFVLENBQUNpQyxXQUFXLEdBQUcsRUFBRTtFQUNsQztFQUVBdEIsV0FBV0EsQ0FBQSxFQUFHO0lBQ1psQiw0Q0FBSSxDQUFDMEIsRUFBRSxDQUFDLElBQUksQ0FBQ3JCLE1BQU0sRUFBRTtNQUNuQnNCLFFBQVEsRUFBRSxHQUFHO01BQ2JJLEtBQUssRUFBRSxPQUFPO01BQ2RDLE1BQU0sRUFBRSxPQUFPO01BQ2ZDLGVBQWUsRUFBRSxhQUFhO01BQzlCUSxNQUFNLEVBQUUsTUFBTTtNQUNkRixZQUFZLEVBQUUsUUFBUTtNQUN0QlQsSUFBSSxFQUFFNUIsa0RBQU1BO0lBQ2QsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUSxXQUFXLENBQUNnQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0lBQ3hDLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ2lDLFdBQVcsR0FBRyx1QkFBdUI7RUFDdkQ7RUFFQXJCLFdBQVdBLENBQUEsRUFBRztJQUNabkIsNENBQUksQ0FBQzBCLEVBQUUsQ0FBQyxJQUFJLENBQUNyQixNQUFNLEVBQUU7TUFDbkJzQixRQUFRLEVBQUUsR0FBRztNQUNiSSxLQUFLLEVBQUUsTUFBTTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxlQUFlLEVBQUUsU0FBUztNQUMxQlEsTUFBTSxFQUFFLE1BQU07TUFDZEYsWUFBWSxFQUFFLFlBQVk7TUFDMUJULElBQUksRUFBRTVCLGtEQUFNQTtJQUNkLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ1EsV0FBVyxDQUFDZ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUN2QyxJQUFJLENBQUNwQyxVQUFVLENBQUNpQyxXQUFXLEdBQUcsRUFBRTtFQUNsQztBQUNGOzs7Ozs7OztVQzdGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3Rvcih7IGN1cnNvciwgdGVtcGxhdGUgfSkge1xuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cbiAgICB0aGlzLmN1cnNvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvcl9fdGV4dFwiKVxuICAgIHRoaXMuY3Vyc29ySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvcl9faW1hZ2VcIilcbiAgICB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcbiAgICB0aGlzLmhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2hlcm9cIilcblxuICAgIGlmICh0aGlzLnRlbXBsYXRlID09PSBcImhvbWVcIikge1xuICAgICAgZWFjaCh0aGlzLmdhbGxlcnksIGdhbGxlcnkgPT4ge1xuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5vbkdhbGxlcnlIb3Zlci5iaW5kKHRoaXMpKVxuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25HYWxsZXJ5TGVhdmUuYmluZCh0aGlzKSlcbiAgICAgIH0pXG4gICAgICB0aGlzLmhlcm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLm9uSGVyb0hvdmVyLmJpbmQodGhpcykpXG4gICAgICB0aGlzLmhlcm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbkhlcm9MZWF2ZS5iaW5kKHRoaXMpKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgfVxuXG4gIG9uR2FsbGVyeUhvdmVyKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxMnJlbVwiLFxuICAgICAgaGVpZ2h0OiBcIjEycmVtXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMTJyZW1cIixcbiAgICAgIG1peEJsZW5kTW9kZTogXCJub3JtYWxcIixcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3JUZXh0LnRleHRDb250ZW50ID0gXCJEcmFnXCJcbiAgfVxuXG4gIG9uR2FsbGVyeUxlYXZlKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBtaXhCbGVuZE1vZGU6IFwiZGlmZmVyZW5jZVwiLFxuICAgICAgZWFzZTogU01PT1RIXG4gICAgfSlcbiAgICB0aGlzLmN1cnNvclRleHQudGV4dENvbnRlbnQgPSBcIlwiXG4gIH1cblxuICBvbkhlcm9Ib3ZlcigpIHtcbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgd2lkdGg6IFwiMjVyZW1cIixcbiAgICAgIGhlaWdodDogXCIzMHJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgbWl4QmxlbmRNb2RlOiBcIm5vcm1hbFwiLFxuICAgICAgZWFzZTogU01PT1RIXG4gICAgfSlcblxuICAgIHRoaXMuY3Vyc29ySW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIHRoaXMuY3Vyc29yVGV4dC50ZXh0Q29udGVudCA9IFwiTGVhcm4gbW9yZSAoYWJvdXQgdXMpXCJcbiAgfVxuXG4gIG9uSGVyb0xlYXZlKCkge1xuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBtaXhCbGVuZE1vZGU6IFwiZGlmZmVyZW5jZVwiLFxuICAgICAgZWFzZTogU01PT1RIXG4gICAgfSlcbiAgICB0aGlzLmN1cnNvckltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIHRoaXMuY3Vyc29yVGV4dC50ZXh0Q29udGVudCA9IFwiXCJcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDdjNjQ1YjhiODY3MWM5MzRlMGZcIikiXSwibmFtZXMiOlsiZ3NhcCIsImVhY2giLCJTTU9PVEgiLCJDdXJzb3IiLCJjb25zdHJ1Y3RvciIsImN1cnNvciIsInRlbXBsYXRlIiwiY3Vyc29yVGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnNvckltYWdlIiwiZ2FsbGVyeSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoZXJvIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uR2FsbGVyeUhvdmVyIiwiYmluZCIsIm9uR2FsbGVyeUxlYXZlIiwib25IZXJvSG92ZXIiLCJvbkhlcm9MZWF2ZSIsImhhbmRsZUN1cnNvck1vdmUiLCJldmVudCIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInkiLCJ0byIsImR1cmF0aW9uIiwibGVmdCIsInRvcCIsImVhc2UiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIm1peEJsZW5kTW9kZSIsInRleHRDb250ZW50IiwiYm9yZGVyIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==