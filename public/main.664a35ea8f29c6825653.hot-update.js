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
    this.isExpanded = false;
    this.isAnimating = false;
    this.addEventListener();
  }
  handleMenuClick(e) {
    console.log("handleMenuClick");
    if (!this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
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
    } else if (this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineOut = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
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
/******/ 	__webpack_require__.h = () => ("b03a8a00663afa0d5954")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNrQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUU7QUFDRjs7Ozs7Ozs7VUM5REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcbiAgICB0aGlzLm1lbnVIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2hpZGRlblwiKVxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVNZW51Q2xpY2tcIilcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVJbiA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZUluXG4gICAgICAgIC50byh0aGlzLmV4cGFuZGVkTWVudSwge1xuICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMubWVudSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVPdXRcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMjJyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cmVtXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNnJlbVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMDNhOGEwMDY2M2FmYTBkNTk1NFwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiU01PT1RIIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVIaWRkZW4iLCJtZW51IiwiZXhwYW5kZWRNZW51IiwiaXNFeHBhbmRlZCIsImlzQW5pbWF0aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwidGltZWxpbmVJbiIsInRpbWVsaW5lIiwib25Db21wbGV0ZSIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJib3hTaGFkb3ciLCJ0aW1lbGluZU91dCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9