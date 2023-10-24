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
      // mixBlendMode: "normal",
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
      // mixBlendMode: "difference",
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
      // mixBlendMode: "normal",
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
      // mixBlendMode: "difference",
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
/******/ 	__webpack_require__.h = () => ("1ac801776dedfd164bcc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBTUE7SUFDZCxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNLLFVBQVUsQ0FBQ2dDLFdBQVcsR0FBRyxFQUFFO0VBQ2xDO0VBRUFyQixXQUFXQSxDQUFBLEVBQUc7SUFDWmxCLDRDQUFJLENBQUMwQixFQUFFLENBQUMsSUFBSSxDQUFDckIsTUFBTSxFQUFFO01BQ25Cc0IsUUFBUSxFQUFFLEdBQUc7TUFDYkksS0FBSyxFQUFFLE9BQU87TUFDZEMsTUFBTSxFQUFFLE9BQU87TUFDZkMsZUFBZSxFQUFFLGFBQWE7TUFDOUJPLE1BQU0sRUFBRSxNQUFNO01BQ2Q7TUFDQVYsSUFBSSxFQUFFNUIsa0RBQU1BO0lBQ2QsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUSxXQUFXLENBQUMrQixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0lBQ3hDLElBQUksQ0FBQ25DLFVBQVUsQ0FBQ2dDLFdBQVcsR0FBRyx1QkFBdUI7RUFDdkQ7RUFFQXBCLFdBQVdBLENBQUEsRUFBRztJQUNabkIsNENBQUksQ0FBQzBCLEVBQUUsQ0FBQyxJQUFJLENBQUNyQixNQUFNLEVBQUU7TUFDbkJzQixRQUFRLEVBQUUsR0FBRztNQUNiSSxLQUFLLEVBQUUsTUFBTTtNQUNiQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxlQUFlLEVBQUUsU0FBUztNQUMxQk8sTUFBTSxFQUFFLE1BQU07TUFDZDtNQUNBVixJQUFJLEVBQUU1QixrREFBTUE7SUFDZCxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNRLFdBQVcsQ0FBQytCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDdkMsSUFBSSxDQUFDbkMsVUFBVSxDQUFDZ0MsV0FBVyxHQUFHLEVBQUU7RUFDbEM7QUFDRjs7Ozs7Ozs7VUM3RkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NsYXNzZXMvQ3Vyc29yLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7IFNNT09USCB9IGZyb20gXCIuLi91dGlscy9lYXNpbmdzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoeyBjdXJzb3IsIHRlbXBsYXRlIH0pIHtcbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXG4gICAgdGhpcy5jdXJzb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3JfX3RleHRcIilcbiAgICB0aGlzLmN1cnNvckltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3JfX2ltYWdlXCIpXG4gICAgdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgdGhpcy5oZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19oZXJvXCIpXG5cbiAgICBpZiAodGhpcy50ZW1wbGF0ZSA9PT0gXCJob21lXCIpIHtcbiAgICAgIGVhY2godGhpcy5nYWxsZXJ5LCBnYWxsZXJ5ID0+IHtcbiAgICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMub25HYWxsZXJ5SG92ZXIuYmluZCh0aGlzKSlcbiAgICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uR2FsbGVyeUxlYXZlLmJpbmQodGhpcykpXG4gICAgICB9KVxuICAgICAgdGhpcy5oZXJvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5vbkhlcm9Ib3Zlci5iaW5kKHRoaXMpKVxuICAgICAgdGhpcy5oZXJvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25IZXJvTGVhdmUuYmluZCh0aGlzKSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDdXJzb3JNb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0gPSBldmVudFxuXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB0b3A6IHksXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gIH1cblxuICBvbkdhbGxlcnlIb3ZlcigpIHtcbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgd2lkdGg6IFwiMTJyZW1cIixcbiAgICAgIGhlaWdodDogXCIxMnJlbVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEycmVtXCIsXG4gICAgICAvLyBtaXhCbGVuZE1vZGU6IFwibm9ybWFsXCIsXG4gICAgICBlYXNlOiBTTU9PVEhcbiAgICB9KVxuICAgIHRoaXMuY3Vyc29yVGV4dC50ZXh0Q29udGVudCA9IFwiRHJhZ1wiXG4gIH1cblxuICBvbkdhbGxlcnlMZWF2ZSgpIHtcbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgLy8gbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3JUZXh0LnRleHRDb250ZW50ID0gXCJcIlxuICB9XG5cbiAgb25IZXJvSG92ZXIoKSB7XG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIHdpZHRoOiBcIjI1cmVtXCIsXG4gICAgICBoZWlnaHQ6IFwiMzByZW1cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIC8vIG1peEJsZW5kTW9kZTogXCJub3JtYWxcIixcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG5cbiAgICB0aGlzLmN1cnNvckltYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB0aGlzLmN1cnNvclRleHQudGV4dENvbnRlbnQgPSBcIkxlYXJuIG1vcmUgKGFib3V0IHVzKVwiXG4gIH1cblxuICBvbkhlcm9MZWF2ZSgpIHtcbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgLy8gbWl4QmxlbmRNb2RlOiBcImRpZmZlcmVuY2VcIixcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG4gICAgdGhpcy5jdXJzb3JJbWFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB0aGlzLmN1cnNvclRleHQudGV4dENvbnRlbnQgPSBcIlwiXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFhYzgwMTc3NmRlZGZkMTY0YmNjXCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiU01PT1RIIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJjdXJzb3IiLCJ0ZW1wbGF0ZSIsImN1cnNvclRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJzb3JJbWFnZSIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVybyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkdhbGxlcnlIb3ZlciIsImJpbmQiLCJvbkdhbGxlcnlMZWF2ZSIsIm9uSGVyb0hvdmVyIiwib25IZXJvTGVhdmUiLCJoYW5kbGVDdXJzb3JNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwieCIsImNsaWVudFkiLCJ5IiwidG8iLCJkdXJhdGlvbiIsImxlZnQiLCJ0b3AiLCJlYXNlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ0ZXh0Q29udGVudCIsImJvcmRlciIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=