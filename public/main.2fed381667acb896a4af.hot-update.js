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
    this.topLine = document.querySelector(".navigation__menu__burger__line:nth-child(1)");
    this.bottomLine = document.querySelector(".navigation__menu__burger__line:nth-child(2)");
    this.isExpanded = false;
    this.isAnimating = false;
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
        onUpdate: progress => {
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
/******/ 	__webpack_require__.h = () => ("4ce2c0c4b1943c360928")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZmVkMzgxNjY3YWNiODk2YTRhZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNrQjtBQUVvRDtBQUM1QztBQUVsQyxNQUFNTyxVQUFVLENBQUM7RUFDOUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUN0RSxJQUFJLENBQUNDLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsMkJBQTJCLENBQUM7SUFDckUsSUFBSSxDQUFDRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0csWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuRSxJQUFJLENBQUNJLE9BQU8sR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsOENBQThDLENBQUM7SUFDckYsSUFBSSxDQUFDSyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDhDQUE4QyxDQUFDO0lBRXhGLElBQUksQ0FBQ00sVUFBVSxHQUFHLEtBQUs7SUFDdkIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsS0FBSztJQUV4QixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7RUFDekI7RUFFQUMsZUFBZUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDTixVQUFVLElBQUksQ0FBQyxJQUFJLENBQUNDLFdBQVcsRUFBRTtNQUN6QyxJQUFJLENBQUNBLFdBQVcsR0FBRyxJQUFJO01BQ3ZCLElBQUksQ0FBQ00sVUFBVSxHQUFHeEIsNENBQUksQ0FBQ3lCLFFBQVEsQ0FBQztRQUFFQyxVQUFVLEVBQUVBLENBQUEsS0FBTyxJQUFJLENBQUNSLFdBQVcsR0FBRztNQUFPLENBQUMsQ0FBQztNQUNqRixJQUFJLENBQUNNLFVBQVUsQ0FDWkcsRUFBRSxDQUFDLElBQUksQ0FBQ2IsWUFBWSxFQUFFO1FBQ3JCYyxLQUFLLEVBQUUsT0FBTztRQUNkQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxZQUFZLEVBQUUsR0FBRztRQUNqQkMsR0FBRyxFQUFFLEdBQUc7UUFDUkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsUUFBUSxFQUFFLE9BQU87UUFDakJDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRWxDLGtEQUFNQTtNQUNkLENBQUMsQ0FBQyxDQUNEMEIsRUFBRSxDQUNELENBQUMsQ0FBQyxFQUNGO1FBQ0VPLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRWxDLGtEQUFNO1FBQ1ptQyxRQUFRLEVBQUVDLFFBQVEsSUFBSTtVQUNwQixNQUFNQyxnQkFBZ0IsR0FBR2hDLDhEQUFpQixDQUFDRixpREFBYyxFQUFFQywrQ0FBWSxFQUFFZ0MsUUFBUSxDQUFDO1VBQ2xGLE1BQU1FLG1CQUFtQixHQUFHakMsOERBQWlCLENBQzNDSixvREFBaUIsRUFDakJDLGtEQUFlLEVBQ2ZrQyxRQUNGLENBQUM7VUFDRCxJQUFJLENBQUN0QixPQUFPLENBQUN5QixZQUFZLENBQUMsUUFBUSxFQUFFRixnQkFBZ0IsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1VBQ3RFLElBQUksQ0FBQzFCLFVBQVUsQ0FBQ3dCLFlBQVksQ0FBQyxRQUFRLEVBQUVELG1CQUFtQixDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUU7TUFDRixDQUNGLENBQUMsQ0FDQWYsRUFBRSxDQUNELElBQUksQ0FBQ2QsSUFBSSxFQUNUO1FBQ0U4QixTQUFTLEVBQUU7TUFDYixDQUFDLEVBQ0QsQ0FDRixDQUFDO01BQ0gsSUFBSSxDQUFDMUIsVUFBVSxHQUFHLElBQUk7SUFDeEIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDQSxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUNDLFdBQVcsRUFBRTtNQUMvQyxJQUFJLENBQUNBLFdBQVcsR0FBRyxJQUFJO01BQ3ZCLElBQUksQ0FBQzBCLFdBQVcsR0FBRzVDLDRDQUFJLENBQUN5QixRQUFRLENBQUM7UUFBRUMsVUFBVSxFQUFFQSxDQUFBLEtBQU8sSUFBSSxDQUFDUixXQUFXLEdBQUc7TUFBTyxDQUFDLENBQUM7TUFDbEYsSUFBSSxDQUFDMEIsV0FBVyxDQUNiakIsRUFBRSxDQUFDLElBQUksQ0FBQ2IsWUFBWSxFQUFFO1FBQ3JCYyxLQUFLLEVBQUUsT0FBTztRQUNkQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxZQUFZLEVBQUUsTUFBTTtRQUNwQkcsUUFBUSxFQUFFLFVBQVU7UUFDcEJGLEdBQUcsRUFBRSxNQUFNO1FBQ1hDLElBQUksRUFBRSxNQUFNO1FBQ1pFLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRWxDLGtEQUFNQTtNQUNkLENBQUMsQ0FBQyxDQUNEMEIsRUFBRSxDQUFDLElBQUksQ0FBQ2QsSUFBSSxFQUFFO1FBQ2I4QixTQUFTLEVBQUU7TUFDYixDQUFDLENBQUM7TUFDSixJQUFJLENBQUMxQixVQUFVLEdBQUcsS0FBSztJQUN6QjtFQUNGO0VBRUFFLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ1YsVUFBVSxDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUN5QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUU7QUFDRjs7Ozs7Ozs7VUN0RkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmltcG9ydCB7IGJvdHRvbVN0YXJ0UG9pbnRzLCBib3R0b21FbmRQb2ludHMsIHRvcFN0YXJ0UG9pbnRzLCB0b3BFbmRQb2ludHMgfSBmcm9tIFwiLi4vLi4vZGF0YVwiXG5pbXBvcnQgeyBpbnRlcnBvbGF0ZVBvaW50cyB9IGZyb20gXCIuLi91dGlscy9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fd3JhcHBlclwiKVxuICAgIHRoaXMubWVudUhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9faGlkZGVuXCIpXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51XCIpXG4gICAgdGhpcy5leHBhbmRlZE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkXCIpXG4gICAgdGhpcy50b3BMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDEpXCIpXG4gICAgdGhpcy5ib3R0b21MaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDIpXCIpXG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVNZW51Q2xpY2tcIilcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVJbiA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZUluXG4gICAgICAgIC50byh0aGlzLmV4cGFuZGVkTWVudSwge1xuICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgICBlYXNlOiBTTU9PVEgsXG4gICAgICAgICAgICBvblVwZGF0ZTogcHJvZ3Jlc3MgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VG9wUG9pbnRzID0gaW50ZXJwb2xhdGVQb2ludHModG9wU3RhcnRQb2ludHMsIHRvcEVuZFBvaW50cywgcHJvZ3Jlc3MpXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb3R0b21Qb2ludHMgPSBpbnRlcnBvbGF0ZVBvaW50cyhcbiAgICAgICAgICAgICAgICBib3R0b21TdGFydFBvaW50cyxcbiAgICAgICAgICAgICAgICBib3R0b21FbmRQb2ludHMsXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB0aGlzLnRvcExpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGN1cnJlbnRUb3BQb2ludHMuZmxhdCgpLmpvaW4oXCIgXCIpKVxuICAgICAgICAgICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGN1cnJlbnRCb3R0b21Qb2ludHMuZmxhdCgpLmpvaW4oXCIgXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAudG8oXG4gICAgICAgICAgdGhpcy5tZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy50aW1lbGluZU91dCA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZU91dFxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgICB3aWR0aDogXCIyMnJlbVwiLFxuICAgICAgICAgIGhlaWdodDogXCI3cmVtXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRyZW1cIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI2cmVtXCIsXG4gICAgICAgICAgbGVmdDogXCI2cmVtXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHRoaXMubWVudSwge1xuICAgICAgICAgIGJveFNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMTgpIDJweCAycHggNHB4XCJcbiAgICAgICAgfSlcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRjZTJjMGM0YjE5NDNjMzYwOTI4XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJTTU9PVEgiLCJib3R0b21TdGFydFBvaW50cyIsImJvdHRvbUVuZFBvaW50cyIsInRvcFN0YXJ0UG9pbnRzIiwidG9wRW5kUG9pbnRzIiwiaW50ZXJwb2xhdGVQb2ludHMiLCJOYXZpZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJidXR0b25NZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUhpZGRlbiIsIm1lbnUiLCJleHBhbmRlZE1lbnUiLCJ0b3BMaW5lIiwiYm90dG9tTGluZSIsImlzRXhwYW5kZWQiLCJpc0FuaW1hdGluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNZW51Q2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsInRpbWVsaW5lSW4iLCJ0aW1lbGluZSIsIm9uQ29tcGxldGUiLCJ0byIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwib25VcGRhdGUiLCJwcm9ncmVzcyIsImN1cnJlbnRUb3BQb2ludHMiLCJjdXJyZW50Qm90dG9tUG9pbnRzIiwic2V0QXR0cmlidXRlIiwiZmxhdCIsImpvaW4iLCJib3hTaGFkb3ciLCJ0aW1lbGluZU91dCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9