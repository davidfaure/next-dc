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
    this.menu = document.querySelector(".navigation__menu");
    this.expandedMenu = document.querySelector(".navigation__expanded");
    this.addEventListener();
  }
  handleMenuClick(e) {
    console.log("handleMenuClick");
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.menu, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
      top: "0",
      left: "0",
      position: "fixed",
      duration: 0.5,
      ease: "expo"
    });
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
/******/ 	__webpack_require__.h = () => ("b8cabf6b2df42edbde82")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYTNhYjgyMzk3N2Y4YmY1YjVmMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBRVIsTUFBTUMsVUFBVSxDQUFDO0VBQzlCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFDdEUsSUFBSSxDQUFDQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0UsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuRSxJQUFJLENBQUNHLGdCQUFnQixDQUFDLENBQUM7RUFDekI7RUFFQUMsZUFBZUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QlosNENBQUksQ0FBQ2EsRUFBRSxDQUFDLElBQUksQ0FBQ1AsSUFBSSxFQUFFO01BQ2pCUSxLQUFLLEVBQUUsT0FBTztNQUNkQyxNQUFNLEVBQUUsT0FBTztNQUNmQyxZQUFZLEVBQUUsR0FBRztNQUNqQkMsR0FBRyxFQUFFLEdBQUc7TUFDUkMsSUFBSSxFQUFFLEdBQUc7TUFDVEMsUUFBUSxFQUFFLE9BQU87TUFDakJDLFFBQVEsRUFBRSxHQUFHO01BQ2JDLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQztFQUNKO0VBRUFiLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ0wsVUFBVSxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUNhLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RTtBQUNGOzs7Ozs7OztVQzNCQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fd3JhcHBlclwiKVxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICBoYW5kbGVNZW51Q2xpY2soZSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTWVudUNsaWNrXCIpXG4gICAgZ3NhcC50byh0aGlzLm1lbnUsIHtcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgbGVmdDogXCIwXCIsXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgIGVhc2U6IFwiZXhwb1wiXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiOGNhYmY2YjJkZjQyZWRiZGU4MlwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJleHBhbmRlZE1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTWVudUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0byIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=