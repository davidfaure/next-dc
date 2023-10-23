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
      this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
      }).to(this.menu, {
        boxShadow: "none"
      }, 0);
      this.isExpanded = true;
      this.topLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.topStartString);
      this.bottomLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.bottomStartString);
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
/******/ 	__webpack_require__.h = () => ("97a33ac5de2fee6e6418")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mODllNDcwYzgyZWMzNDhjNjdiYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ2tCO0FBRW9EO0FBRTlFLE1BQU1NLFVBQVUsQ0FBQztFQUM5QkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBQ3RFLElBQUksQ0FBQ0MsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztJQUNyRSxJQUFJLENBQUNFLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsSUFBSSxDQUFDRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQ25FLElBQUksQ0FBQ0ksT0FBTyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM3RSxJQUFJLENBQUNLLFVBQVUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMseUNBQXlDLENBQUM7SUFFbkYsSUFBSSxDQUFDTSxVQUFVLEdBQUcsS0FBSztJQUN2QixJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0lBRXhCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQ0wsVUFBVSxFQUFFLE9BQU8sQ0FBQztJQUUxRSxJQUFJLENBQUNNLGdCQUFnQixDQUFDLENBQUM7RUFDekI7RUFFQUMsZUFBZUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2pCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDSCxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUNDLFdBQVcsRUFBRTtNQUN6QyxJQUFJLENBQUNBLFdBQVcsR0FBRyxJQUFJO01BQ3ZCLElBQUksQ0FBQ08sVUFBVSxHQUFHeEIsNENBQUksQ0FBQ3lCLFFBQVEsQ0FBQztRQUFFQyxVQUFVLEVBQUVBLENBQUEsS0FBTyxJQUFJLENBQUNULFdBQVcsR0FBRztNQUFPLENBQUMsQ0FBQztNQUNqRixJQUFJLENBQUNPLFVBQVUsQ0FDWkcsRUFBRSxDQUFDLElBQUksQ0FBQ2QsWUFBWSxFQUFFO1FBQ3JCZSxLQUFLLEVBQUUsT0FBTztRQUNkQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxZQUFZLEVBQUUsR0FBRztRQUNqQkMsR0FBRyxFQUFFLEdBQUc7UUFDUkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsUUFBUSxFQUFFLE9BQU87UUFDakJDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRWxDLGtEQUFNQTtNQUNkLENBQUMsQ0FBQyxDQUNEMEIsRUFBRSxDQUNELElBQUksQ0FBQ2YsSUFBSSxFQUNUO1FBQ0V3QixTQUFTLEVBQUU7TUFDYixDQUFDLEVBQ0QsQ0FDRixDQUFDO01BQ0gsSUFBSSxDQUFDcEIsVUFBVSxHQUFHLElBQUk7TUFDdEIsSUFBSSxDQUFDRixPQUFPLENBQUN1QixZQUFZLENBQUMsUUFBUSxFQUFFakMsaURBQWMsQ0FBQztNQUNuRCxJQUFJLENBQUNXLFVBQVUsQ0FBQ3NCLFlBQVksQ0FBQyxRQUFRLEVBQUVuQyxvREFBaUIsQ0FBQztJQUMzRCxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNjLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQ0MsV0FBVyxFQUFFO01BQy9DLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUk7TUFDdkIsSUFBSSxDQUFDcUIsV0FBVyxHQUFHdEMsNENBQUksQ0FBQ3lCLFFBQVEsQ0FBQztRQUFFQyxVQUFVLEVBQUVBLENBQUEsS0FBTyxJQUFJLENBQUNULFdBQVcsR0FBRztNQUFPLENBQUMsQ0FBQztNQUNsRixJQUFJLENBQUNxQixXQUFXLENBQ2JYLEVBQUUsQ0FBQyxJQUFJLENBQUNkLFlBQVksRUFBRTtRQUNyQmUsS0FBSyxFQUFFLE9BQU87UUFDZEMsTUFBTSxFQUFFLE1BQU07UUFDZEMsWUFBWSxFQUFFLE1BQU07UUFDcEJHLFFBQVEsRUFBRSxVQUFVO1FBQ3BCRixHQUFHLEVBQUUsTUFBTTtRQUNYQyxJQUFJLEVBQUUsTUFBTTtRQUNaRSxRQUFRLEVBQUUsR0FBRztRQUNiQyxJQUFJLEVBQUVsQyxrREFBTUE7TUFDZCxDQUFDLENBQUMsQ0FDRDBCLEVBQUUsQ0FBQyxJQUFJLENBQUNmLElBQUksRUFBRTtRQUNid0IsU0FBUyxFQUFFO01BQ2IsQ0FBQyxDQUFDO01BQ0osSUFBSSxDQUFDcEIsVUFBVSxHQUFHLEtBQUs7SUFDekI7RUFDRjtFQUVBSyxnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUNiLFVBQVUsQ0FBQ2EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsZUFBZSxDQUFDaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVFO0FBQ0Y7Ozs7Ozs7O1VDeEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5pbXBvcnQgeyBib3R0b21TdGFydFN0cmluZywgYm90dG9tRW5kU3RyaW5nLCB0b3BTdGFydFN0cmluZywgdG9wRW5kU3RyaW5nIH0gZnJvbSBcIi4uLy4uL2RhdGFcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X193cmFwcGVyXCIpXG4gICAgdGhpcy5tZW51SGlkZGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19oaWRkZW5cIilcbiAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRcIilcbiAgICB0aGlzLnRvcExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fdG9wXCIpXG4gICAgdGhpcy5ib3R0b21MaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19idXJnZXJfX2xpbmVfX2JvdHRvbVwiKVxuXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2VcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcblxuICAgIGNvbnNvbGUubG9nKHRoaXMudG9wTGluZS5nZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiksIHRoaXMuYm90dG9tTGluZSwgXCJBTE9SU1wiKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVNZW51Q2xpY2tcIilcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVJbiA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZUluXG4gICAgICAgIC50byh0aGlzLmV4cGFuZGVkTWVudSwge1xuICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMubWVudSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWVcbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wU3RhcnRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbVN0YXJ0U3RyaW5nKVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy50aW1lbGluZU91dCA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZU91dFxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgICB3aWR0aDogXCIyMnJlbVwiLFxuICAgICAgICAgIGhlaWdodDogXCI3cmVtXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRyZW1cIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI2cmVtXCIsXG4gICAgICAgICAgbGVmdDogXCI2cmVtXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHRoaXMubWVudSwge1xuICAgICAgICAgIGJveFNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMTgpIDJweCAycHggNHB4XCJcbiAgICAgICAgfSlcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk3YTMzYWM1ZGUyZmVlNmU2NDE4XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJTTU9PVEgiLCJib3R0b21TdGFydFN0cmluZyIsImJvdHRvbUVuZFN0cmluZyIsInRvcFN0YXJ0U3RyaW5nIiwidG9wRW5kU3RyaW5nIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVIaWRkZW4iLCJtZW51IiwiZXhwYW5kZWRNZW51IiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpc0V4cGFuZGVkIiwiaXNBbmltYXRpbmciLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImJveFNoYWRvdyIsInNldEF0dHJpYnV0ZSIsInRpbWVsaW5lT3V0IiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=