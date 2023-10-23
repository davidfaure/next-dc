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
    console.log(this.topLine, this.bottomLine, "ALORS");
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
/******/ 	__webpack_require__.h = () => ("466eb98a14f719570eb4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MGM2ZDAwNDMwZDZlYjQzY2VkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNrQjtBQUVvRDtBQUM1QztBQUVsQyxNQUFNTyxVQUFVLENBQUM7RUFDOUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUN0RSxJQUFJLENBQUNDLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsMkJBQTJCLENBQUM7SUFDckUsSUFBSSxDQUFDRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0csWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuRSxJQUFJLENBQUNJLE9BQU8sR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0NBQXNDLENBQUM7SUFDN0UsSUFBSSxDQUFDSyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlDQUF5QyxDQUFDO0lBRW5GLElBQUksQ0FBQ00sVUFBVSxHQUFHLEtBQUs7SUFDdkIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsS0FBSztJQUV4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBRW5ELElBQUksQ0FBQ0ssZ0JBQWdCLENBQUMsQ0FBQztFQUN6QjtFQUVBQyxlQUFlQSxDQUFDQyxDQUFDLEVBQUU7SUFDakJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUNILFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQ0MsV0FBVyxFQUFFO01BQ3pDLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUk7TUFDdkIsSUFBSSxDQUFDTSxVQUFVLEdBQUd4Qiw0Q0FBSSxDQUFDeUIsUUFBUSxDQUFDO1FBQUVDLFVBQVUsRUFBRUEsQ0FBQSxLQUFPLElBQUksQ0FBQ1IsV0FBVyxHQUFHO01BQU8sQ0FBQyxDQUFDO01BQ2pGLElBQUksQ0FBQ00sVUFBVSxDQUNaRyxFQUFFLENBQUMsSUFBSSxDQUFDYixZQUFZLEVBQUU7UUFDckJjLEtBQUssRUFBRSxPQUFPO1FBQ2RDLE1BQU0sRUFBRSxPQUFPO1FBQ2ZDLFlBQVksRUFBRSxHQUFHO1FBQ2pCQyxHQUFHLEVBQUUsR0FBRztRQUNSQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxRQUFRLEVBQUUsT0FBTztRQUNqQkMsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFbEMsa0RBQU1BO01BQ2QsQ0FBQyxDQUFDLENBQ0QwQixFQUFFLENBQ0QsQ0FBQyxDQUFDLEVBQ0Y7UUFDRU8sUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFbEMsa0RBQU07UUFDWm1DLFFBQVEsRUFBRSxTQUFBQSxDQUFVQyxRQUFRLEVBQUU7VUFDNUIsTUFBTUMsZ0JBQWdCLEdBQUdoQyw4REFBaUIsQ0FBQ0YsaURBQWMsRUFBRUMsK0NBQVksRUFBRWdDLFFBQVEsQ0FBQztVQUNsRixNQUFNRSxtQkFBbUIsR0FBR2pDLDhEQUFpQixDQUMzQ0osb0RBQWlCLEVBQ2pCQyxrREFBZSxFQUNma0MsUUFDRixDQUFDO1VBQ0QsSUFBSSxDQUFDdEIsT0FBTyxDQUFDeUIsWUFBWSxDQUFDLFFBQVEsRUFBRUYsZ0JBQWdCLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUN0RSxJQUFJLENBQUMxQixVQUFVLENBQUN3QixZQUFZLENBQUMsUUFBUSxFQUFFRCxtQkFBbUIsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlFO01BQ0YsQ0FDRixDQUFDLENBQ0FmLEVBQUUsQ0FDRCxJQUFJLENBQUNkLElBQUksRUFDVDtRQUNFOEIsU0FBUyxFQUFFO01BQ2IsQ0FBQyxFQUNELENBQ0YsQ0FBQztNQUNILElBQUksQ0FBQzFCLFVBQVUsR0FBRyxJQUFJO0lBQ3hCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ0EsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDQyxXQUFXLEVBQUU7TUFDL0MsSUFBSSxDQUFDQSxXQUFXLEdBQUcsSUFBSTtNQUN2QixJQUFJLENBQUMwQixXQUFXLEdBQUc1Qyw0Q0FBSSxDQUFDeUIsUUFBUSxDQUFDO1FBQUVDLFVBQVUsRUFBRUEsQ0FBQSxLQUFPLElBQUksQ0FBQ1IsV0FBVyxHQUFHO01BQU8sQ0FBQyxDQUFDO01BQ2xGLElBQUksQ0FBQzBCLFdBQVcsQ0FDYmpCLEVBQUUsQ0FBQyxJQUFJLENBQUNiLFlBQVksRUFBRTtRQUNyQmMsS0FBSyxFQUFFLE9BQU87UUFDZEMsTUFBTSxFQUFFLE1BQU07UUFDZEMsWUFBWSxFQUFFLE1BQU07UUFDcEJHLFFBQVEsRUFBRSxVQUFVO1FBQ3BCRixHQUFHLEVBQUUsTUFBTTtRQUNYQyxJQUFJLEVBQUUsTUFBTTtRQUNaRSxRQUFRLEVBQUUsR0FBRztRQUNiQyxJQUFJLEVBQUVsQyxrREFBTUE7TUFDZCxDQUFDLENBQUMsQ0FDRDBCLEVBQUUsQ0FBQyxJQUFJLENBQUNkLElBQUksRUFBRTtRQUNiOEIsU0FBUyxFQUFFO01BQ2IsQ0FBQyxDQUFDO01BQ0osSUFBSSxDQUFDMUIsVUFBVSxHQUFHLEtBQUs7SUFDekI7RUFDRjtFQUVBSSxnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUNaLFVBQVUsQ0FBQ1ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsZUFBZSxDQUFDdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVFO0FBQ0Y7Ozs7Ozs7O1VDeEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5pbXBvcnQgeyBib3R0b21TdGFydFBvaW50cywgYm90dG9tRW5kUG9pbnRzLCB0b3BTdGFydFBvaW50cywgdG9wRW5kUG9pbnRzIH0gZnJvbSBcIi4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgaW50ZXJwb2xhdGVQb2ludHMgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcbiAgICB0aGlzLm1lbnVIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2hpZGRlblwiKVxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMudG9wTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fYnVyZ2VyX19saW5lX190b3BcIilcbiAgICB0aGlzLmJvdHRvbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fYm90dG9tXCIpXG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgY29uc29sZS5sb2codGhpcy50b3BMaW5lLCB0aGlzLmJvdHRvbUxpbmUsIFwiQUxPUlNcIilcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICBoYW5kbGVNZW51Q2xpY2soZSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTWVudUNsaWNrXCIpXG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgICB0aGlzLnRpbWVsaW5lSW4gPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVJblxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byhcbiAgICAgICAgICB7fSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgICAgZWFzZTogU01PT1RILFxuICAgICAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VG9wUG9pbnRzID0gaW50ZXJwb2xhdGVQb2ludHModG9wU3RhcnRQb2ludHMsIHRvcEVuZFBvaW50cywgcHJvZ3Jlc3MpXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb3R0b21Qb2ludHMgPSBpbnRlcnBvbGF0ZVBvaW50cyhcbiAgICAgICAgICAgICAgICBib3R0b21TdGFydFBvaW50cyxcbiAgICAgICAgICAgICAgICBib3R0b21FbmRQb2ludHMsXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB0aGlzLnRvcExpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGN1cnJlbnRUb3BQb2ludHMuZmxhdCgpLmpvaW4oXCIgXCIpKVxuICAgICAgICAgICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGN1cnJlbnRCb3R0b21Qb2ludHMuZmxhdCgpLmpvaW4oXCIgXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAudG8oXG4gICAgICAgICAgdGhpcy5tZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy50aW1lbGluZU91dCA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZU91dFxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgICB3aWR0aDogXCIyMnJlbVwiLFxuICAgICAgICAgIGhlaWdodDogXCI3cmVtXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRyZW1cIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI2cmVtXCIsXG4gICAgICAgICAgbGVmdDogXCI2cmVtXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHRoaXMubWVudSwge1xuICAgICAgICAgIGJveFNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMTgpIDJweCAycHggNHB4XCJcbiAgICAgICAgfSlcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ2NmViOThhMTRmNzE5NTcwZWI0XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJTTU9PVEgiLCJib3R0b21TdGFydFBvaW50cyIsImJvdHRvbUVuZFBvaW50cyIsInRvcFN0YXJ0UG9pbnRzIiwidG9wRW5kUG9pbnRzIiwiaW50ZXJwb2xhdGVQb2ludHMiLCJOYXZpZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJidXR0b25NZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUhpZGRlbiIsIm1lbnUiLCJleHBhbmRlZE1lbnUiLCJ0b3BMaW5lIiwiYm90dG9tTGluZSIsImlzRXhwYW5kZWQiLCJpc0FuaW1hdGluZyIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTWVudUNsaWNrIiwiZSIsInRpbWVsaW5lSW4iLCJ0aW1lbGluZSIsIm9uQ29tcGxldGUiLCJ0byIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwib25VcGRhdGUiLCJwcm9ncmVzcyIsImN1cnJlbnRUb3BQb2ludHMiLCJjdXJyZW50Qm90dG9tUG9pbnRzIiwic2V0QXR0cmlidXRlIiwiZmxhdCIsImpvaW4iLCJib3hTaGFkb3ciLCJ0aW1lbGluZU91dCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9