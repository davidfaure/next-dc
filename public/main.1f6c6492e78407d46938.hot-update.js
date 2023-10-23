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
    if (!this.isExpanded) return;
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
/******/ 	__webpack_require__.h = () => ("60ac5fbb9254272731d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmltcG9ydCB7IGJvdHRvbVN0YXJ0U3RyaW5nLCBib3R0b21FbmRTdHJpbmcsIHRvcFN0YXJ0U3RyaW5nLCB0b3BFbmRTdHJpbmcgfSBmcm9tIFwiLi4vLi4vZGF0YVwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcblxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJcIilcblxuICAgIHRoaXMubmF2TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX25vX193cmFwXCIpXG4gICAgdGhpcy5uYXZOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX25hbWVfX3dyYXBcIilcbiAgICB0aGlzLm5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX3dyYXBwZXJcIilcblxuICAgIHRoaXMudG9wTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fYnVyZ2VyX19saW5lX190b3BcIilcbiAgICB0aGlzLmJvdHRvbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fYm90dG9tXCIpXG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgICB0aGlzLnRpbWVsaW5lSW4gPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVJblxuICAgICAgICAuc2V0KFt0aGlzLm5hdk51bWJlciwgdGhpcy5uYXZOYW1lXSwge1xuICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICByb3RhdGlvblg6IC01MCxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLmV4cGFuZGVkTWVudSwge1xuICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51V3JhcHBlcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdXRvQWxwaGE6IFwiMVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI8Kz0wLjZcIlxuICAgICAgICApXG4gICAgICAgIC50byhcbiAgICAgICAgICBbdGhpcy5uYXZOdW1iZXIsIHRoaXMubmF2TmFtZV0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHJvdGF0aW9uWDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjxcIlxuICAgICAgICApXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLm1lbnUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMFxuICAgICAgICApXG5cbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWVcbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wRW5kU3RyaW5nKVxuICAgICAgdGhpcy5ib3R0b21MaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBib3R0b21FbmRTdHJpbmcpXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG5cbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcblxuICAgICAgdGhpcy50aW1lbGluZU91dFxuICAgICAgICAudG8oW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLCB7XG4gICAgICAgICAgeTogLTEwMCxcbiAgICAgICAgICByb3RhdGlvblg6IDUwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjIycmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRyZW1cIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgICAgbGVmdDogXCI2cmVtXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjxcIlxuICAgICAgICApXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG5cbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG5cbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wU3RhcnRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbVN0YXJ0U3RyaW5nKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxpTW91c2VPdmVyKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBob3ZlcmVkTGkgPSBlLmN1cnJlbnRUYXJnZXRcblxuICAgIGNvbnNvbGUubG9nKGhvdmVyZWRMaSwgXCJIT1ZFUkVEXCIpXG4gIH1cblxuICBoYW5kbGVMaU1vdXNlT3V0KCkge1xuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKSByZXR1cm5cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICAgIGVhY2godGhpcy5uYXZMaSwgbGkgPT4ge1xuICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmhhbmRsZUxpTW91c2VPdmVyLmJpbmQodGhpcykpXG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5oYW5kbGVMaU1vdXNlT3V0LmJpbmQodGhpcykpXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjBhYzVmYmI5MjU0MjcyNzMxZDRcIikiXSwibmFtZXMiOlsiZ3NhcCIsIlNNT09USCIsImJvdHRvbVN0YXJ0U3RyaW5nIiwiYm90dG9tRW5kU3RyaW5nIiwidG9wU3RhcnRTdHJpbmciLCJ0b3BFbmRTdHJpbmciLCJlYWNoIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJleHBhbmRlZE1lbnUiLCJleHBhbmRlZE1lbnVXcmFwcGVyIiwibmF2TnVtYmVyIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdk5hbWUiLCJuYXZMaSIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXNFeHBhbmRlZCIsImlzQW5pbWF0aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwic2V0IiwieSIsInJvdGF0aW9uWCIsInRyYW5zZm9ybU9yaWdpbiIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJhdXRvQWxwaGEiLCJib3hTaGFkb3ciLCJzZXRBdHRyaWJ1dGUiLCJ0aW1lbGluZU91dCIsImhhbmRsZUxpTW91c2VPdmVyIiwiaG92ZXJlZExpIiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMaU1vdXNlT3V0IiwiYmluZCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==