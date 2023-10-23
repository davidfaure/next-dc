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
/******/ 	__webpack_require__.h = () => ("2ba52ab052c3a7b37ad5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MGY4OGJmOGVlYWQ3Yzg1OWViNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBRVIsTUFBTUMsVUFBVSxDQUFDO0VBQzlCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFDdEUsSUFBSSxDQUFDQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDJCQUEyQixDQUFDO0lBQ3JFLElBQUksQ0FBQ0UsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxJQUFJLENBQUNHLFlBQVksR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDbkUsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3pCO0VBRUFDLGVBQWVBLENBQUNDLENBQUMsRUFBRTtJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUJiLDRDQUFJLENBQ0RjLEVBQUUsQ0FBQyxJQUFJLENBQUNSLFVBQVUsRUFBRTtNQUNuQlMsS0FBSyxFQUFFLE9BQU87TUFDZEMsTUFBTSxFQUFFLE9BQU87TUFDZkMsWUFBWSxFQUFFLEdBQUc7TUFDakJDLEdBQUcsRUFBRSxHQUFHO01BQ1JDLElBQUksRUFBRSxHQUFHO01BQ1RDLFFBQVEsRUFBRSxPQUFPO01BQ2pCQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO01BQ1ZDLElBQUksRUFBRTtJQUNSLENBQUMsQ0FBQyxDQUNEVCxFQUFFLENBQ0QsSUFBSSxDQUFDUCxJQUFJLEVBQ1Q7TUFDRWlCLFNBQVMsRUFBRTtJQUNiLENBQUMsRUFDRCxDQUNGLENBQUM7RUFDTDtFQUVBZixnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUNOLFVBQVUsQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsZUFBZSxDQUFDZSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUU7QUFDRjs7Ozs7Ozs7VUNyQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcbiAgICB0aGlzLm1lbnVIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2hpZGRlblwiKVxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICBoYW5kbGVNZW51Q2xpY2soZSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTWVudUNsaWNrXCIpXG4gICAgZ3NhcFxuICAgICAgLnRvKHRoaXMubWVudUhpZGRlbiwge1xuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgIHpJbmRleDogLTEsXG4gICAgICAgIGVhc2U6IFwiZXhwb1wiXG4gICAgICB9KVxuICAgICAgLnRvKFxuICAgICAgICB0aGlzLm1lbnUsXG4gICAgICAgIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgIH0sXG4gICAgICAgIDBcbiAgICAgIClcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYmE1MmFiMDUyYzNhN2IzN2FkNVwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVIaWRkZW4iLCJtZW51IiwiZXhwYW5kZWRNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwiekluZGV4IiwiZWFzZSIsImJveFNoYWRvdyIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9