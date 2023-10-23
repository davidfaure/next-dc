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
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(this.menuHidden, {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
      top: "0",
      left: "0",
      position: "fixed",
      duration: 0.5,
      zIndex: -1,
      ease: "expo"
    }).to(this.menu, {
      boxShadow: "none"
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
/******/ 	__webpack_require__.h = () => ("50f88bf8eead7c859eb5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iOTE3MzI2YTY1NDE1ZWI4MGZmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBRVIsTUFBTUMsVUFBVSxDQUFDO0VBQzlCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFDdEUsSUFBSSxDQUFDQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDJCQUEyQixDQUFDO0lBQ3JFLElBQUksQ0FBQ0UsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxJQUFJLENBQUNHLFlBQVksR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDbkUsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3pCO0VBRUFDLGVBQWVBLENBQUNDLENBQUMsRUFBRTtJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUJiLDRDQUFJLENBQ0RjLEVBQUUsQ0FBQyxJQUFJLENBQUNSLFVBQVUsRUFBRTtNQUNuQlMsS0FBSyxFQUFFLE9BQU87TUFDZEMsTUFBTSxFQUFFLE9BQU87TUFDZkMsWUFBWSxFQUFFLEdBQUc7TUFDakJDLEdBQUcsRUFBRSxHQUFHO01BQ1JDLElBQUksRUFBRSxHQUFHO01BQ1RDLFFBQVEsRUFBRSxPQUFPO01BQ2pCQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO01BQ1ZDLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQyxDQUNEVCxFQUFFLENBQUMsSUFBSSxDQUFDUCxJQUFJLEVBQUU7TUFDYmlCLFNBQVMsRUFBRTtJQUNiLENBQUMsQ0FBQztFQUNOO0VBRUFmLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ04sVUFBVSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUNlLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RTtBQUNGOzs7Ozs7OztVQ2pDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fd3JhcHBlclwiKVxuICAgIHRoaXMubWVudUhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9faGlkZGVuXCIpXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51XCIpXG4gICAgdGhpcy5leHBhbmRlZE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkXCIpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVNZW51Q2xpY2tcIilcbiAgICBnc2FwXG4gICAgICAudG8odGhpcy5tZW51SGlkZGVuLCB7XG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxuICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgZWFzZTogXCJleHBvXCJcbiAgICAgIH0pXG4gICAgICAudG8odGhpcy5tZW51LCB7XG4gICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVNZW51Q2xpY2suYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTBmODhiZjhlZWFkN2M4NTllYjVcIikiXSwibmFtZXMiOlsiZ3NhcCIsIk5hdmlnYXRpb24iLCJjb25zdHJ1Y3RvciIsImJ1dHRvbk1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51SGlkZGVuIiwibWVudSIsImV4cGFuZGVkTWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNZW51Q2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsInpJbmRleCIsImVhc2UiLCJib3hTaGFkb3ciLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==