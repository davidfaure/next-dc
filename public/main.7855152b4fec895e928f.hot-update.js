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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

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
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();
    this.timeline.to(this.menuHidden, {
      width: "100vw",
      height: "100vh",
      // borderRadius: "0",
      top: "0",
      left: "0",
      position: "fixed",
      duration: 0.5,
      zIndex: -1,
      ease: "expo"
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
/******/ 	__webpack_require__.h = () => ("21f858e8617a13058998")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ODU1MTUyYjRmZWM4OTVlOTI4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBRVIsTUFBTUMsVUFBVSxDQUFDO0VBQzlCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFDdEUsSUFBSSxDQUFDQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDJCQUEyQixDQUFDO0lBQ3JFLElBQUksQ0FBQ0UsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxJQUFJLENBQUNHLFlBQVksR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDbkUsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3pCO0VBRUFDLGVBQWVBLENBQUNDLENBQUMsRUFBRTtJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUIsSUFBSSxDQUFDQyxRQUFRLEdBQUdkLDRDQUFJLENBQUNjLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ0EsUUFBUSxDQUNWQyxFQUFFLENBQUMsSUFBSSxDQUFDVCxVQUFVLEVBQUU7TUFDbkJVLEtBQUssRUFBRSxPQUFPO01BQ2RDLE1BQU0sRUFBRSxPQUFPO01BQ2Y7TUFDQUMsR0FBRyxFQUFFLEdBQUc7TUFDUkMsSUFBSSxFQUFFLEdBQUc7TUFDVEMsUUFBUSxFQUFFLE9BQU87TUFDakJDLFFBQVEsRUFBRSxHQUFHO01BQ2JDLE1BQU0sRUFBRSxDQUFDLENBQUM7TUFDVkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxDQUFDLENBQ0RSLEVBQUUsQ0FDRCxJQUFJLENBQUNSLElBQUksRUFDVDtNQUNFaUIsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxFQUNELENBQ0YsQ0FBQztFQUNMO0VBRUFmLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ04sVUFBVSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUNlLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RTtBQUNGOzs7Ozs7OztVQ3RDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fd3JhcHBlclwiKVxuICAgIHRoaXMubWVudUhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9faGlkZGVuXCIpXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51XCIpXG4gICAgdGhpcy5leHBhbmRlZE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkXCIpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVNZW51Q2xpY2tcIilcbiAgICB0aGlzLnRpbWVsaW5lID0gZ3NhcC50aW1lbGluZSgpXG4gICAgdGhpcy50aW1lbGluZVxuICAgICAgLnRvKHRoaXMubWVudUhpZGRlbiwge1xuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgLy8gYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgIGVhc2U6IFwiZXhwb1wiXG4gICAgICB9KVxuICAgICAgLnRvKFxuICAgICAgICB0aGlzLm1lbnUsXG4gICAgICAgIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgIH0sXG4gICAgICAgIDBcbiAgICAgIClcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMWY4NThlODYxN2ExMzA1ODk5OFwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVIaWRkZW4iLCJtZW51IiwiZXhwYW5kZWRNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwidGltZWxpbmUiLCJ0byIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJ6SW5kZXgiLCJlYXNlIiwiYm94U2hhZG93IiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=