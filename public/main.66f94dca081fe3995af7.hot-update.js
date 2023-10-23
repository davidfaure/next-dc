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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");


class Navigation {
  constructor() {
    this.buttonMenu = document.querySelector(".navigation__menu__wrapper");
    this.menuHidden = document.querySelector(".navigation__menu__hidden");
    this.menu = document.querySelector(".navigation__menu");
    this.expandedMenu = document.querySelector(".navigation__expanded");
    this.addEventListener();
  }
  handleMenuClick(e) {
    console.log("handleMenuClick");
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
    this.timeline.to(this.expandedMenu, {
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
/******/ 	__webpack_require__.h = () => ("5a3631881b76f0f6e038")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NmY5NGRjYTA4MWZlMzk5NWFmNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNrQjtBQUUxQixNQUFNRSxVQUFVLENBQUM7RUFDOUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUN0RSxJQUFJLENBQUNDLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsMkJBQTJCLENBQUM7SUFDckUsSUFBSSxDQUFDRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0csWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuRSxJQUFJLENBQUNJLGdCQUFnQixDQUFDLENBQUM7RUFDekI7RUFFQUMsZUFBZUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QixJQUFJLENBQUNDLFFBQVEsR0FBR2YsNENBQUksQ0FBQ2UsUUFBUSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDQSxRQUFRLENBQ1ZDLEVBQUUsQ0FBQyxJQUFJLENBQUNQLFlBQVksRUFBRTtNQUNyQlEsS0FBSyxFQUFFLE9BQU87TUFDZEMsTUFBTSxFQUFFLE9BQU87TUFDZkMsWUFBWSxFQUFFLEdBQUc7TUFDakJDLEdBQUcsRUFBRSxHQUFHO01BQ1JDLElBQUksRUFBRSxHQUFHO01BQ1RDLFFBQVEsRUFBRSxPQUFPO01BQ2pCQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUV2QixrREFBTUE7SUFDZCxDQUFDLENBQUMsQ0FDRGUsRUFBRSxDQUNELElBQUksQ0FBQ1IsSUFBSSxFQUNUO01BQ0VpQixTQUFTLEVBQUU7SUFDYixDQUFDLEVBQ0QsQ0FDRixDQUFDO0VBQ0w7RUFFQWYsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxDQUFDTixVQUFVLENBQUNNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLGVBQWUsQ0FBQ2UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVFO0FBQ0Y7Ozs7Ozs7O1VDdENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X193cmFwcGVyXCIpXG4gICAgdGhpcy5tZW51SGlkZGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19oaWRkZW5cIilcbiAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRcIilcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxuICB9XG5cbiAgaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1lbnVDbGlja1wiKVxuICAgIHRoaXMudGltZWxpbmUgPSBnc2FwLnRpbWVsaW5lKClcbiAgICB0aGlzLnRpbWVsaW5lXG4gICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgIH0pXG4gICAgICAudG8oXG4gICAgICAgIHRoaXMubWVudSxcbiAgICAgICAge1xuICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgICAgfSxcbiAgICAgICAgMFxuICAgICAgKVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVhMzYzMTg4MWI3NmYwZjZlMDM4XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJTTU9PVEgiLCJOYXZpZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJidXR0b25NZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUhpZGRlbiIsIm1lbnUiLCJleHBhbmRlZE1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTWVudUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lbGluZSIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJib3hTaGFkb3ciLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==