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
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);




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
    (0,lodash_each__WEBPACK_IMPORTED_MODULE_2__.each)(this.navLi, li => {
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
/******/ 	__webpack_require__.h = () => ("1f6c6492e78407d46938")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYjg1NGY2Mzg1M2RhYTdjMWZmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDa0I7QUFFb0Q7QUFDM0Q7QUFFbkIsTUFBTU8sVUFBVSxDQUFDO0VBQzlCQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsNEJBQTRCLENBQUM7SUFFdEUsSUFBSSxDQUFDQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0UsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuRSxJQUFJLENBQUNHLG1CQUFtQixHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUVuRixJQUFJLENBQUNJLFNBQVMsR0FBR0wsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxvREFBb0QsQ0FBQztJQUNoRyxJQUFJLENBQUNDLE9BQU8sR0FBR1AsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxzREFBc0QsQ0FBQztJQUNoRyxJQUFJLENBQUNFLEtBQUssR0FBR1IsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxtREFBbUQsQ0FBQztJQUUzRixJQUFJLENBQUNHLE9BQU8sR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0NBQXNDLENBQUM7SUFDN0UsSUFBSSxDQUFDUyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHlDQUF5QyxDQUFDO0lBRW5GLElBQUksQ0FBQ1UsVUFBVSxHQUFHLEtBQUs7SUFDdkIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsS0FBSztJQUV4QixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7RUFDekI7RUFFQUMsZUFBZUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUNKLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FB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ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5pbXBvcnQgeyBib3R0b21TdGFydFN0cmluZywgYm90dG9tRW5kU3RyaW5nLCB0b3BTdGFydFN0cmluZywgdG9wRW5kU3RyaW5nIH0gZnJvbSBcIi4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcblxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJcIilcblxuICAgIHRoaXMubmF2TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX25vX193cmFwXCIpXG4gICAgdGhpcy5uYXZOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX25hbWVfX3dyYXBcIilcbiAgICB0aGlzLm5hdkxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX3dyYXBwZXJcIilcblxuICAgIHRoaXMudG9wTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fYnVyZ2VyX19saW5lX190b3BcIilcbiAgICB0aGlzLmJvdHRvbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fYm90dG9tXCIpXG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGhhbmRsZU1lbnVDbGljayhlKSB7XG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgICB0aGlzLnRpbWVsaW5lSW4gPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVJblxuICAgICAgICAuc2V0KFt0aGlzLm5hdk51bWJlciwgdGhpcy5uYXZOYW1lXSwge1xuICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICByb3RhdGlvblg6IC01MCxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLmV4cGFuZGVkTWVudSwge1xuICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51V3JhcHBlcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdXRvQWxwaGE6IFwiMVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI8Kz0wLjZcIlxuICAgICAgICApXG4gICAgICAgIC50byhcbiAgICAgICAgICBbdGhpcy5uYXZOdW1iZXIsIHRoaXMubmF2TmFtZV0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHJvdGF0aW9uWDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjxcIlxuICAgICAgICApXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLm1lbnUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMFxuICAgICAgICApXG5cbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWVcbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wRW5kU3RyaW5nKVxuICAgICAgdGhpcy5ib3R0b21MaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBib3R0b21FbmRTdHJpbmcpXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG5cbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcblxuICAgICAgdGhpcy50aW1lbGluZU91dFxuICAgICAgICAudG8oW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLCB7XG4gICAgICAgICAgeTogLTEwMCxcbiAgICAgICAgICByb3RhdGlvblg6IDUwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjIycmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRyZW1cIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgICAgbGVmdDogXCI2cmVtXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjxcIlxuICAgICAgICApXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG5cbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG5cbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wU3RhcnRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbVN0YXJ0U3RyaW5nKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxpTW91c2VPdmVyKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBob3ZlcmVkTGkgPSBlLmN1cnJlbnRUYXJnZXRcblxuICAgIGNvbnNvbGUubG9nKGhvdmVyZWRMaSwgXCJIT1ZFUkVEXCIpXG4gIH1cblxuICBoYW5kbGVMaU1vdXNlT3V0KCkge1xuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKSByZXR1cm5cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICAgIGVhY2godGhpcy5uYXZMaSwgbGkgPT4ge1xuICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmhhbmRsZUxpTW91c2VPdmVyLmJpbmQodGhpcykpXG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5oYW5kbGVMaU1vdXNlT3V0LmJpbmQodGhpcykpXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWY2YzY0OTJlNzg0MDdkNDY5MzhcIikiXSwibmFtZXMiOlsiZ3NhcCIsIlNNT09USCIsImJvdHRvbVN0YXJ0U3RyaW5nIiwiYm90dG9tRW5kU3RyaW5nIiwidG9wU3RhcnRTdHJpbmciLCJ0b3BFbmRTdHJpbmciLCJlYWNoIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJleHBhbmRlZE1lbnUiLCJleHBhbmRlZE1lbnVXcmFwcGVyIiwibmF2TnVtYmVyIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdk5hbWUiLCJuYXZMaSIsInRvcExpbmUiLCJib3R0b21MaW5lIiwiaXNFeHBhbmRlZCIsImlzQW5pbWF0aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwic2V0IiwieSIsInJvdGF0aW9uWCIsInRyYW5zZm9ybU9yaWdpbiIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJhdXRvQWxwaGEiLCJib3hTaGFkb3ciLCJzZXRBdHRyaWJ1dGUiLCJ0aW1lbGluZU91dCIsImhhbmRsZUxpTW91c2VPdmVyIiwiaG92ZXJlZExpIiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMaU1vdXNlT3V0IiwiYmluZCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==