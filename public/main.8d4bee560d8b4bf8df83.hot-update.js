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
      borderRadius: "0",
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
/******/ 	__webpack_require__.h = () => ("7855152b4fec895e928f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZDRiZWU1NjBkOGI0YmY4ZGY4My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBRVIsTUFBTUMsVUFBVSxDQUFDO0VBQzlCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFDdEUsSUFBSSxDQUFDQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDJCQUEyQixDQUFDO0lBQ3JFLElBQUksQ0FBQ0UsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxJQUFJLENBQUNHLFlBQVksR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDbkUsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3pCO0VBRUFDLGVBQWVBLENBQUNDLENBQUMsRUFBRTtJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUIsSUFBSSxDQUFDQyxRQUFRLEdBQUdkLDRDQUFJLENBQUNjLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ0EsUUFBUSxDQUNWQyxFQUFFLENBQUMsSUFBSSxDQUFDVCxVQUFVLEVBQUU7TUFDbkJVLEtBQUssRUFBRSxPQUFPO01BQ2RDLE1BQU0sRUFBRSxPQUFPO01BQ2ZDLFlBQVksRUFBRSxHQUFHO01BQ2pCQyxHQUFHLEVBQUUsR0FBRztNQUNSQyxJQUFJLEVBQUUsR0FBRztNQUNUQyxRQUFRLEVBQUUsT0FBTztNQUNqQkMsUUFBUSxFQUFFLEdBQUc7TUFDYkMsTUFBTSxFQUFFLENBQUMsQ0FBQztNQUNWQyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FDRFQsRUFBRSxDQUNELElBQUksQ0FBQ1IsSUFBSSxFQUNUO01BQ0VrQixTQUFTLEVBQUU7SUFDYixDQUFDLEVBQ0QsQ0FDRixDQUFDO0VBQ0w7RUFFQWhCLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ04sVUFBVSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUNnQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUU7QUFDRjs7Ozs7Ozs7VUN0Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcbiAgICB0aGlzLm1lbnVIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2hpZGRlblwiKVxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICBoYW5kbGVNZW51Q2xpY2soZSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTWVudUNsaWNrXCIpXG4gICAgdGhpcy50aW1lbGluZSA9IGdzYXAudGltZWxpbmUoKVxuICAgIHRoaXMudGltZWxpbmVcbiAgICAgIC50byh0aGlzLm1lbnVIaWRkZW4sIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICB6SW5kZXg6IC0xLFxuICAgICAgICBlYXNlOiBcImV4cG9cIlxuICAgICAgfSlcbiAgICAgIC50byhcbiAgICAgICAgdGhpcy5tZW51LFxuICAgICAgICB7XG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgICAgICB9LFxuICAgICAgICAwXG4gICAgICApXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVNZW51Q2xpY2suYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzg1NTE1MmI0ZmVjODk1ZTkyOGZcIikiXSwibmFtZXMiOlsiZ3NhcCIsIk5hdmlnYXRpb24iLCJjb25zdHJ1Y3RvciIsImJ1dHRvbk1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51SGlkZGVuIiwibWVudSIsImV4cGFuZGVkTWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNZW51Q2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsInRpbWVsaW5lIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwiekluZGV4IiwiZWFzZSIsImJveFNoYWRvdyIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9