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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_1__);



class Navigation {
  constructor() {
    this.buttonMenu = document.querySelector(".navigation__menu__wrapper");
    this.menu = document.querySelector(".navigation__menu");
    this.expandedMenu = document.querySelector(".navigation__expanded");
    this.expandedMenuWrapper = document.querySelector(".navigation__expanded__wrapper");
    this.navNumber = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__no__wrap");
    this.navName = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__name__wrap");
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
      this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        onComplete: () => this.isAnimating = false
      });
      this.timelineIn.set([this.navNumber, this.navName], {
        y: 100,
        rotationX: -50,
        transformOrigin: "50% 50%"
      }).to(this.expandedMenu, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0",
        top: "0",
        left: "0",
        position: "fixed",
        duration: 0.8,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }).to(this.expandedMenuWrapper, {
        autoAlpha: "1"
      }).to([this.navNumber, this.navName], {
        y: 0,
        rotationX: 0,
        transformOrigin: "50% 50%",
        duration: 1.4,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }, "<").to(this.menu, {
        boxShadow: "none"
      }, 0);
      this.isExpanded = true;
      this.topLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.topEndString);
      this.bottomLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.bottomEndString);
    } else if (this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineOut = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
      this.topLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.topStartString);
      this.bottomLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.bottomStartString);
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
/******/ 	__webpack_require__.h = () => ("fec901a04751943f3977")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNjk1NGMwZmU4OWRhN2QyYzRlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ2tCO0FBRW9EO0FBRTlFLE1BQU1NLFVBQVUsQ0FBQztFQUM5QkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBRXRFLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxJQUFJLENBQUNFLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDbkUsSUFBSSxDQUFDRyxtQkFBbUIsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0NBQWdDLENBQUM7SUFFbkYsSUFBSSxDQUFDSSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsb0RBQW9ELENBQUM7SUFDaEcsSUFBSSxDQUFDQyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsc0RBQXNELENBQUM7SUFFaEcsSUFBSSxDQUFDRSxPQUFPLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNDQUFzQyxDQUFDO0lBQzdFLElBQUksQ0FBQ1EsVUFBVSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQztJQUVuRixJQUFJLENBQUNTLFVBQVUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEtBQUs7SUFFeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDTCxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBRTFFLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsQ0FBQztFQUN6QjtFQUVBQyxlQUFlQSxDQUFDQyxDQUFDLEVBQUU7SUFDakJMLE9BQU8sQ0FB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YyxVQUFVLENBQUMyQixZQUFZLENBQUMsUUFBUSxFQUFFM0Msb0RBQWlCLENBQUM7SUFDM0Q7RUFDRjtFQUVBc0IsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxDQUFDaEIsVUFBVSxDQUFDZ0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsZUFBZSxDQUFDc0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVFO0FBQ0Y7Ozs7Ozs7O1VDbEdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5pbXBvcnQgeyBib3R0b21TdGFydFN0cmluZywgYm90dG9tRW5kU3RyaW5nLCB0b3BTdGFydFN0cmluZywgdG9wRW5kU3RyaW5nIH0gZnJvbSBcIi4uLy4uL2RhdGFcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X193cmFwcGVyXCIpXG5cbiAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkX193cmFwcGVyXCIpXG5cbiAgICB0aGlzLm5hdk51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX19ub19fd3JhcFwiKVxuICAgIHRoaXMubmF2TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX19uYW1lX193cmFwXCIpXG5cbiAgICB0aGlzLnRvcExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fdG9wXCIpXG4gICAgdGhpcy5ib3R0b21MaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19idXJnZXJfX2xpbmVfX2JvdHRvbVwiKVxuXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2VcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcblxuICAgIGNvbnNvbGUubG9nKHRoaXMudG9wTGluZS5nZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiksIHRoaXMuYm90dG9tTGluZSwgXCJBTE9SU1wiKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVNZW51Q2xpY2tcIilcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVJbiA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZUluXG4gICAgICAgIC5zZXQoW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLCB7XG4gICAgICAgICAgeTogMTAwLFxuICAgICAgICAgIHJvdGF0aW9uWDogLTUwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCJcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxuICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICB9KVxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnVXcmFwcGVyLCB7XG4gICAgICAgICAgYXV0b0FscGhhOiBcIjFcIlxuICAgICAgICB9KVxuICAgICAgICAudG8oXG4gICAgICAgICAgW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICByb3RhdGlvblg6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDEuNCxcbiAgICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI8XCJcbiAgICAgICAgKVxuICAgICAgICAudG8oXG4gICAgICAgICAgdGhpcy5tZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZVxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BFbmRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbUVuZFN0cmluZylcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVPdXRcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMjJyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cmVtXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNnJlbVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BTdGFydFN0cmluZylcbiAgICAgIHRoaXMuYm90dG9tTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgYm90dG9tU3RhcnRTdHJpbmcpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZlYzkwMWEwNDc1MTk0M2YzOTc3XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJTTU9PVEgiLCJib3R0b21TdGFydFN0cmluZyIsImJvdHRvbUVuZFN0cmluZyIsInRvcFN0YXJ0U3RyaW5nIiwidG9wRW5kU3RyaW5nIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJleHBhbmRlZE1lbnUiLCJleHBhbmRlZE1lbnVXcmFwcGVyIiwibmF2TnVtYmVyIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdk5hbWUiLCJ0b3BMaW5lIiwiYm90dG9tTGluZSIsImlzRXhwYW5kZWQiLCJpc0FuaW1hdGluZyIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTWVudUNsaWNrIiwiZSIsInRpbWVsaW5lSW4iLCJ0aW1lbGluZSIsIm9uQ29tcGxldGUiLCJzZXQiLCJ5Iiwicm90YXRpb25YIiwidHJhbnNmb3JtT3JpZ2luIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImF1dG9BbHBoYSIsImJveFNoYWRvdyIsInNldEF0dHJpYnV0ZSIsInRpbWVsaW5lT3V0IiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=