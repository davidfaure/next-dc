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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




class Navigation {
  constructor() {
    this.buttonMenu = document.querySelector(".navigation__menu__wrapper");
    this.menu = document.querySelector(".navigation__menu");
    this.expandedMenu = document.querySelector(".navigation__expanded");
    this.expandedMenuWrapper = document.querySelector(".navigation__expanded__wrapper");
    this.navNumber = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__no__wrap");
    this.navName = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__name__wrap");
    this.navLi = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__wrapper");
    this.topLine = document.querySelector(".navigation__menu__burger__line__top");
    this.bottomLine = document.querySelector(".navigation__menu__burger__line__bottom");
    this.isExpanded = false;
    this.isAnimating = false;
    this.addEventListener();
    console.log(this.navLi, "nav li");
  }
  handleMenuClick(e) {
    if (!this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
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
        pointerEvents: "all",
        duration: 0.8,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }).to(this.expandedMenuWrapper, {
        autoAlpha: "1",
        duration: 0.2,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }, "<+=0.6").to([this.navNumber, this.navName], {
        y: 0,
        rotationX: 0,
        transformOrigin: "50% 50%",
        duration: 0.8,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }, "<").to(this.menu, {
        boxShadow: "none"
      }, 0);
      this.isExpanded = true;
      this.topLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.topEndString);
      this.bottomLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.bottomEndString);
    } else if (this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        onComplete: () => this.isAnimating = false
      });
      this.timelineOut.to([this.navNumber, this.navName], {
        y: -100,
        rotationX: 50,
        transformOrigin: "50% 50%",
        duration: 0.4,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }).to(this.expandedMenu, {
        width: "22rem",
        height: "7rem",
        borderRadius: "4rem",
        position: "absolute",
        pointerEvents: "none",
        top: "6rem",
        left: "6rem",
        duration: 0.8,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      }, "<").to(this.menu, {
        boxShadow: "rgba(0, 0, 0, 0.18) 2px 2px 4px"
      });
      this.isExpanded = false;
      this.topLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.topStartString);
      this.bottomLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.bottomStartString);
    }
  }
  handleLiMouseOver(e) {
    // if (!this.isExpanded) return

    const hoveredLi = e.currentTarget;
    console.log(hoveredLi, "HOVERED");
  }
  handleLiMouseOut() {
    if (!this.isExpanded) return;
  }
  addEventListener() {
    this.buttonMenu.addEventListener("click", this.handleMenuClick.bind(this));
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(this.navLi, li => {
      li.addEventListener("mouseover", this.handleLiMouseOver.bind(this));
      li.addEventListener("mouseout", this.handleLiMouseOut.bind(this));
    });
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("421d9a2c79534ee9cd10")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YzYxNmFmMTJmODg3MGIyOTMxOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDa0I7QUFFb0Q7QUFDaEU7QUFFZCxNQUFNTyxVQUFVLENBQUM7RUFDOUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUV0RSxJQUFJLENBQUNDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsSUFBSSxDQUFDRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQ25FLElBQUksQ0FBQ0csbUJBQW1CLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdDQUFnQyxDQUFDO0lBRW5GLElBQUksQ0FBQ0ksU0FBUyxHQUFHTCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLG9EQUFvRCxDQUFDO0lBQ2hHLElBQUksQ0FBQ0MsT0FBTyxHQUFHUCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLHNEQUFzRCxDQUFDO0lBQ2hHLElBQUksQ0FBQ0UsS0FBSyxHQUFHUixRQUFRLENBQUNNLGdCQUFnQixDQUFDLG1EQUFtRCxDQUFDO0lBRTNGLElBQUksQ0FBQ0csT0FBTyxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM3RSxJQUFJLENBQUNTLFVBQVUsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMseUNBQXlDLENBQUM7SUFFbkYsSUFBSSxDQUFDVSxVQUFVLEdBQUcsS0FBSztJQUN2QixJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0lBRXhCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUV2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUCxLQUFLLEVBQUUsUUFBUSxDQUFDO0VBQ25DO0VBRUFRLGVBQWVBLENBQUNDLENB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LENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUMzSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmltcG9ydCB7IGJvdHRvbVN0YXJ0U3RyaW5nLCBib3R0b21FbmRTdHJpbmcsIHRvcFN0YXJ0U3RyaW5nLCB0b3BFbmRTdHJpbmcgfSBmcm9tIFwiLi4vLi4vZGF0YVwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcblxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJcIilcblxuICAgIHRoaXMubmF2TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX25vX193cmFwXCIpXG4gICAgdGhpcy5uYXZOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX25hbWVfX3dyYXBcIilcbiAgICB0aGlzLm5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX3dyYXBwZXJcIilcblxuICAgIHRoaXMudG9wTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fYnVyZ2VyX19saW5lX190b3BcIilcbiAgICB0aGlzLmJvdHRvbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fYm90dG9tXCIpXG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcblxuICAgIGNvbnNvbGUubG9nKHRoaXMubmF2TGksIFwibmF2IGxpXCIpXG4gIH1cblxuICBoYW5kbGVNZW51Q2xpY2soZSkge1xuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy50aW1lbGluZUluID0gZ3NhcC50aW1lbGluZSh7IG9uQ29tcGxldGU6ICgpID0+ICh0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UpIH0pXG4gICAgICB0aGlzLnRpbWVsaW5lSW5cbiAgICAgICAgLnNldChbdGhpcy5uYXZOdW1iZXIsIHRoaXMubmF2TmFtZV0sIHtcbiAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgcm90YXRpb25YOiAtNTAsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjUwJSA1MCVcIlxuICAgICAgICB9KVxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwiYWxsXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51V3JhcHBlcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdXRvQWxwaGE6IFwiMVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI8Kz0wLjZcIlxuICAgICAgICApXG4gICAgICAgIC50byhcbiAgICAgICAgICBbdGhpcy5uYXZOdW1iZXIsIHRoaXMubmF2TmFtZV0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHJvdGF0aW9uWDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjxcIlxuICAgICAgICApXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLm1lbnUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMFxuICAgICAgICApXG5cbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWVcbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wRW5kU3RyaW5nKVxuICAgICAgdGhpcy5ib3R0b21MaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBib3R0b21FbmRTdHJpbmcpXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG5cbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcblxuICAgICAgdGhpcy50aW1lbGluZU91dFxuICAgICAgICAudG8oW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLCB7XG4gICAgICAgICAgeTogLTEwMCxcbiAgICAgICAgICByb3RhdGlvblg6IDUwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjIycmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRyZW1cIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHRvcDogXCI2cmVtXCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjZyZW1cIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiPFwiXG4gICAgICAgIClcbiAgICAgICAgLnRvKHRoaXMubWVudSwge1xuICAgICAgICAgIGJveFNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMTgpIDJweCAycHggNHB4XCJcbiAgICAgICAgfSlcblxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2VcblxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BTdGFydFN0cmluZylcbiAgICAgIHRoaXMuYm90dG9tTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgYm90dG9tU3RhcnRTdHJpbmcpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTGlNb3VzZU92ZXIoZSkge1xuICAgIC8vIGlmICghdGhpcy5pc0V4cGFuZGVkKSByZXR1cm5cblxuICAgIGNvbnN0IGhvdmVyZWRMaSA9IGUuY3VycmVudFRhcmdldFxuXG4gICAgY29uc29sZS5sb2coaG92ZXJlZExpLCBcIkhPVkVSRURcIilcbiAgfVxuXG4gIGhhbmRsZUxpTW91c2VPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQpIHJldHVyblxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gICAgZWFjaCh0aGlzLm5hdkxpLCBsaSA9PiB7XG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTGlNb3VzZU92ZXIuYmluZCh0aGlzKSlcbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZUxpTW91c2VPdXQuYmluZCh0aGlzKSlcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MjFkOWEyYzc5NTM0ZWU5Y2QxMFwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiU01PT1RIIiwiYm90dG9tU3RhcnRTdHJpbmciLCJib3R0b21FbmRTdHJpbmciLCJ0b3BTdGFydFN0cmluZyIsInRvcEVuZFN0cmluZyIsImVhY2giLCJOYXZpZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJidXR0b25NZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImV4cGFuZGVkTWVudSIsImV4cGFuZGVkTWVudVdyYXBwZXIiLCJuYXZOdW1iZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2TmFtZSIsIm5hdkxpIiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpc0V4cGFuZGVkIiwiaXNBbmltYXRpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwic2V0IiwieSIsInJvdGF0aW9uWCIsInRyYW5zZm9ybU9yaWdpbiIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJwb2ludGVyRXZlbnRzIiwiZHVyYXRpb24iLCJlYXNlIiwiYXV0b0FscGhhIiwiYm94U2hhZG93Iiwic2V0QXR0cmlidXRlIiwidGltZWxpbmVPdXQiLCJoYW5kbGVMaU1vdXNlT3ZlciIsImhvdmVyZWRMaSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVMaU1vdXNlT3V0IiwiYmluZCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==