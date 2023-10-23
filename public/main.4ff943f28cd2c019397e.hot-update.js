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
    this.isAnimating = true;
    if (!this.isExpanded && !this.isAnimating) {
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
    } else {
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
        boxShadow: "none"
      }, 0);
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
/******/ 	__webpack_require__.h = () => ("bbee7019b99256292fbd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcbiAgICB0aGlzLm1lbnVIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2hpZGRlblwiKVxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kbGVNZW51Q2xpY2tcIilcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLnRpbWVsaW5lSW4gPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVJblxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLm1lbnUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVPdXRcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMjJyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cmVtXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNnJlbVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLm1lbnUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYmVlNzAxOWI5OTI1NjI5MmZiZFwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiU01PT1RIIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVIaWRkZW4iLCJtZW51IiwiZXhwYW5kZWRNZW51IiwiaXNFeHBhbmRlZCIsImlzQW5pbWF0aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwidGltZWxpbmVJbiIsInRpbWVsaW5lIiwib25Db21wbGV0ZSIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJib3hTaGFkb3ciLCJ0aW1lbGluZU91dCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9