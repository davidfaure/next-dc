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
/******/ 	__webpack_require__.h = () => ("6d5b976beec7cd30429c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40Y2UyYzBjNGIxOTQzYzM2MDkyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNrQjtBQUVvRDtBQUM1QztBQUVsQyxNQUFNTyxVQUFVLENBQUM7RUFDOUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUN0RSxJQUFJLENBQUNDLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsMkJBQTJCLENBQUM7SUFDckUsSUFBSSxDQUFDRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0csWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuRSxJQUFJLENBQUNJLE9BQU8sR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsOENBQThDLENBQUM7SUFDckYsSUFBSSxDQUFDSyxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDhDQUE4QyxDQUFDO0lBRXhGLElBQUksQ0FBQ00sVUFBVSxHQUFHLEtBQUs7SUFDdkIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsS0FBSztJQUV4QixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7RUFDekI7RUFFQUMsZUFBZUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDTixVQUFVLElBQUksQ0FBQyxJQUFJLENBQUNDLFdBQVcsRUFBRTtNQUN6QyxJQUFJLENBQUNBLFdBQVcsR0FBRyxJQUFJO01BQ3ZCLElBQUksQ0FBQ00sVUFBVSxHQUFHeEIsNENBQUksQ0FBQ3lCLFFBQVEsQ0FBQztRQUFFQyxVQUFVLEVBQUVBLENBQUEsS0FBTyxJQUFJLENBQUNSLFdBQVcsR0FBRztNQUFPLENBQUMsQ0FBQztNQUNqRixJQUFJLENBQUNNLFVBQVUsQ0FDWkcsRUFBRSxDQUFDLElBQUksQ0FBQ2IsWUFBWSxFQUFFO1FBQ3JCYyxLQUFLLEVBQUUsT0FBTztRQUNkQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxZQUFZLEVBQUUsR0FBRztRQUNqQkMsR0FBRyxFQUFFLEdBQUc7UUFDUkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsUUFBUSxFQUFFLE9BQU87UUFDakJDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRWxDLGtEQUFNQTtNQUNkLENBQUMsQ0FBQyxDQUNEMEIsRUFBRSxDQUNELENBQUMsQ0FBQyxFQUNGO1FBQ0VPLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRWxDLGtEQUFNO1FBQ1ptQyxRQUFRLEVBQUUsU0FBQUEsQ0FBVUMsUUFBUSxFQUFFO1VBQzVCLE1BQU1DLGdCQUFnQixHQUFHaEMsOERBQWlCLENBQUNGLGlEQUFjLEVBQUVDLCtDQUFZLEVBQUVnQyxRQUFRLENBQUM7VUFDbEYsTUFBTUUsbUJBQW1CLEdBQUdqQyw4REFBaUIsQ0FDM0NKLG9EQUFpQixFQUNqQkMsa0RBQWUsRUFDZmtDLFFBQ0YsQ0FBQztVQUNELElBQUksQ0FBQ3RCLE9BQU8sQ0FBQ3lCLFlBQVksQ0FBQyxRQUFRLEVBQUVGLGdCQUFnQixDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7VUFDdEUsSUFBSSxDQUFDMUIsVUFBVSxDQUFDd0IsWUFBWSxDQUFDLFFBQVEsRUFBRUQsbUJBQW1CLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RTtNQUNGLENBQ0YsQ0FBQyxDQUNBZixFQUFFLENBQ0QsSUFBSSxDQUFDZCxJQUFJLEVBQ1Q7UUFDRThCLFNBQVMsRUFBRTtNQUNiLENBQUMsRUFDRCxDQUNGLENBQUM7TUFDSCxJQUFJLENBQUMxQixVQUFVLEdBQUcsSUFBSTtJQUN4QixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNBLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQ0MsV0FBVyxFQUFFO01BQy9DLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUk7TUFDdkIsSUFBSSxDQUFDMEIsV0FBVyxHQUFHNUMsNENBQUksQ0FBQ3lCLFFBQVEsQ0FBQztRQUFFQyxVQUFVLEVBQUVBLENBQUEsS0FBTyxJQUFJLENBQUNSLFdBQVcsR0FBRztNQUFPLENBQUMsQ0FBQztNQUNsRixJQUFJLENBQUMwQixXQUFXLENBQ2JqQixFQUFFLENBQUMsSUFBSSxDQUFDYixZQUFZLEVBQUU7UUFDckJjLEtBQUssRUFBRSxPQUFPO1FBQ2RDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLFlBQVksRUFBRSxNQUFNO1FBQ3BCRyxRQUFRLEVBQUUsVUFBVTtRQUNwQkYsR0FBRyxFQUFFLE1BQU07UUFDWEMsSUFBSSxFQUFFLE1BQU07UUFDWkUsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFbEMsa0RBQU1BO01BQ2QsQ0FBQyxDQUFDLENBQ0QwQixFQUFFLENBQUMsSUFBSSxDQUFDZCxJQUFJLEVBQUU7UUFDYjhCLFNBQVMsRUFBRTtNQUNiLENBQUMsQ0FBQztNQUNKLElBQUksQ0FBQzFCLFVBQVUsR0FBRyxLQUFLO0lBQ3pCO0VBQ0Y7RUFFQUUsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxDQUFDVixVQUFVLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLGVBQWUsQ0FBQ3lCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RTtBQUNGOzs7Ozs7OztVQ3RGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFNNT09USCB9IGZyb20gXCIuLi91dGlscy9lYXNpbmdzXCJcblxuaW1wb3J0IHsgYm90dG9tU3RhcnRQb2ludHMsIGJvdHRvbUVuZFBvaW50cywgdG9wU3RhcnRQb2ludHMsIHRvcEVuZFBvaW50cyB9IGZyb20gXCIuLi8uLi9kYXRhXCJcbmltcG9ydCB7IGludGVycG9sYXRlUG9pbnRzIH0gZnJvbSBcIi4uL3V0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X193cmFwcGVyXCIpXG4gICAgdGhpcy5tZW51SGlkZGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19oaWRkZW5cIilcbiAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRcIilcbiAgICB0aGlzLnRvcExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZTpudGgtY2hpbGQoMSlcIilcbiAgICB0aGlzLmJvdHRvbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZTpudGgtY2hpbGQoMilcIilcblxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxuICB9XG5cbiAgaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1lbnVDbGlja1wiKVxuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy50aW1lbGluZUluID0gZ3NhcC50aW1lbGluZSh7IG9uQ29tcGxldGU6ICgpID0+ICh0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UpIH0pXG4gICAgICB0aGlzLnRpbWVsaW5lSW5cbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxuICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICB9KVxuICAgICAgICAudG8oXG4gICAgICAgICAge30sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgICAgIGVhc2U6IFNNT09USCxcbiAgICAgICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRvcFBvaW50cyA9IGludGVycG9sYXRlUG9pbnRzKHRvcFN0YXJ0UG9pbnRzLCB0b3BFbmRQb2ludHMsIHByb2dyZXNzKVxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Qm90dG9tUG9pbnRzID0gaW50ZXJwb2xhdGVQb2ludHMoXG4gICAgICAgICAgICAgICAgYm90dG9tU3RhcnRQb2ludHMsXG4gICAgICAgICAgICAgICAgYm90dG9tRW5kUG9pbnRzLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBjdXJyZW50VG9wUG9pbnRzLmZsYXQoKS5qb2luKFwiIFwiKSlcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b21MaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBjdXJyZW50Qm90dG9tUG9pbnRzLmZsYXQoKS5qb2luKFwiIFwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMubWVudSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVPdXRcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMjJyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cmVtXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNnJlbVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZDViOTc2YmVlYzdjZDMwNDI5Y1wiKSJdLCJuYW1lcyI6WyJnc2FwIiwiU01PT1RIIiwiYm90dG9tU3RhcnRQb2ludHMiLCJib3R0b21FbmRQb2ludHMiLCJ0b3BTdGFydFBvaW50cyIsInRvcEVuZFBvaW50cyIsImludGVycG9sYXRlUG9pbnRzIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVIaWRkZW4iLCJtZW51IiwiZXhwYW5kZWRNZW51IiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpc0V4cGFuZGVkIiwiaXNBbmltYXRpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTWVudUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIm9uVXBkYXRlIiwicHJvZ3Jlc3MiLCJjdXJyZW50VG9wUG9pbnRzIiwiY3VycmVudEJvdHRvbVBvaW50cyIsInNldEF0dHJpYnV0ZSIsImZsYXQiLCJqb2luIiwiYm94U2hhZG93IiwidGltZWxpbmVPdXQiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==