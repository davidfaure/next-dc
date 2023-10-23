"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Navigation.js":
/*!**************************************!*\
  !*** ./app/components/Navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");




class Navigation {
  constructor() {
    this.buttonMenu = document.querySelector(".navigation__menu__wrapper");
    this.menuHidden = document.querySelector(".navigation__menu__hidden");
    this.menu = document.querySelector(".navigation__menu");
    this.expandedMenu = document.querySelector(".navigation__expanded");
    this.topLine = document.querySelector(".navigation__menu__burger__line__top");
    this.bottomLine = document.querySelector(".navigation__menu__burger__line__bottom");
    this.isExpanded = false;
    this.isAnimating = false;
    console.log(this.topLine.getAttribute("points"), this.bottomLine, "ALORS");
    this.addEventListener();
  }
  handleMenuClick(e) {
    console.log("handleMenuClick");
    if (!this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        onComplete: () => this.isAnimating = false
      });
      this.timelineIn.to(this.expandedMenu, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0",
        top: "0",
        left: "0",
        position: "fixed",
        duration: 0.8,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }).to({}, {
        duration: 0.5,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH,
        onUpdate: function (progress) {
          const currentTopPoints = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.interpolatePoints)(_data__WEBPACK_IMPORTED_MODULE_1__.topStartPoints, _data__WEBPACK_IMPORTED_MODULE_1__.topEndPoints, progress);
          const currentBottomPoints = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.interpolatePoints)(_data__WEBPACK_IMPORTED_MODULE_1__.bottomStartPoints, _data__WEBPACK_IMPORTED_MODULE_1__.bottomEndPoints, progress);
          console.log(currentTopPoints);
          this.topLine.setAttribute("points", currentTopPoints.flat().join(" "));
          this.bottomLine.setAttribute("points", currentBottomPoints.flat().join(" "));
        }
      }).to(this.menu, {
        boxShadow: "none"
      }, 0);
      this.isExpanded = true;
    } else if (this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        onComplete: () => this.isAnimating = false
      });
      this.timelineOut.to(this.expandedMenu, {
        width: "22rem",
        height: "7rem",
        borderRadius: "4rem",
        position: "absolute",
        top: "6rem",
        left: "6rem",
        duration: 0.8,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }).to(this.menu, {
        boxShadow: "rgba(0, 0, 0, 0.18) 2px 2px 4px"
      });
      this.isExpanded = false;
    }
  }
  addEventListener() {
    this.buttonMenu.addEventListener("click", this.handleMenuClick.bind(this));
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("212fc7f6a08c947147c6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5pbXBvcnQgeyBib3R0b21TdGFydFBvaW50cywgYm90dG9tRW5kUG9pbnRzLCB0b3BTdGFydFBvaW50cywgdG9wRW5kUG9pbnRzIH0gZnJvbSBcIi4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgaW50ZXJwb2xhdGVQb2ludHMgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcbiAgICB0aGlzLm1lbnVIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2hpZGRlblwiKVxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMudG9wTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fYnVyZ2VyX19saW5lX190b3BcIilcbiAgICB0aGlzLmJvdHRvbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fYm90dG9tXCIpXG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgY29uc29sZS5sb2codGhpcy50b3BMaW5lLmdldEF0dHJpYnV0ZShcInBvaW50c1wiKSwgdGhpcy5ib3R0b21MaW5lLCBcIkFMT1JTXCIpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxuICB9XG5cbiAgaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1lbnVDbGlja1wiKVxuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy50aW1lbGluZUluID0gZ3NhcC50aW1lbGluZSh7IG9uQ29tcGxldGU6ICgpID0+ICh0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UpIH0pXG4gICAgICB0aGlzLnRpbWVsaW5lSW5cbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxuICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICB9KVxuICAgICAgICAudG8oXG4gICAgICAgICAge30sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICAgIGVhc2U6IFNNT09USCxcbiAgICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRvcFBvaW50cyA9IGludGVycG9sYXRlUG9pbnRzKHRvcFN0YXJ0UG9pbnRzLCB0b3BFbmRQb2ludHMsIHByb2dyZXNzKVxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Qm90dG9tUG9pbnRzID0gaW50ZXJwb2xhdGVQb2ludHMoXG4gICAgICAgICAgICAgICAgYm90dG9tU3RhcnRQb2ludHMsXG4gICAgICAgICAgICAgICAgYm90dG9tRW5kUG9pbnRzLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRvcFBvaW50cylcbiAgICAgICAgICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBjdXJyZW50VG9wUG9pbnRzLmZsYXQoKS5qb2luKFwiIFwiKSlcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b21MaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBjdXJyZW50Qm90dG9tUG9pbnRzLmZsYXQoKS5qb2luKFwiIFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMubWVudSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVPdXRcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMjJyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cmVtXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNnJlbVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMTJmYzdmNmEwOGM5NDcxNDdjNlwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiU01PT1RIIiwiYm90dG9tU3RhcnRQb2ludHMiLCJib3R0b21FbmRQb2ludHMiLCJ0b3BTdGFydFBvaW50cyIsInRvcEVuZFBvaW50cyIsImludGVycG9sYXRlUG9pbnRzIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVIaWRkZW4iLCJtZW51IiwiZXhwYW5kZWRNZW51IiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpc0V4cGFuZGVkIiwiaXNBbmltYXRpbmciLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIm9uVXBkYXRlIiwicHJvZ3Jlc3MiLCJjdXJyZW50VG9wUG9pbnRzIiwiY3VycmVudEJvdHRvbVBvaW50cyIsInNldEF0dHJpYnV0ZSIsImZsYXQiLCJqb2luIiwiYm94U2hhZG93IiwidGltZWxpbmVPdXQiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==