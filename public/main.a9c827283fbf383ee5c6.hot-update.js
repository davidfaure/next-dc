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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_1__);



class Navigation {
  constructor() {
    this.buttonMenu = document.querySelector(".navigation__menu__wrapper");
    this.menu = document.querySelector(".navigation__menu");
    this.expandedMenu = document.querySelector(".navigation__expanded");
    this.expandedMenuWrapper = document.querySelector(".navigation__expanded__wrapper");
    this.navNumber = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__no__wrap");
    this.navName = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__name__wrap");
    this.topLine = document.querySelector(".navigation__menu__burger__line__top");
    this.bottomLine = document.querySelector(".navigation__menu__burger__line__bottom");
    this.isExpanded = false;
    this.isAnimating = false;
    console.log(this.topLine.getAttribute("points"), this.bottomLine, "ALORS");
    this.addEventListener();
  }
  handleMenuClick(e) {
    console.log("handleMenuClick");
    if (!this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
        autoAlpha: "1"
      }).to(this.menu, {
        boxShadow: "none"
      }, 0);
      this.isExpanded = true;
      this.topLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.topEndString);
      this.bottomLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.bottomEndString);
    } else if (this.isExpanded && !this.isAnimating) {
      this.isAnimating = true;
      this.timelineOut = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
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
      this.topLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.topStartString);
      this.bottomLine.setAttribute("points", _data__WEBPACK_IMPORTED_MODULE_1__.bottomStartString);
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
/******/ 	__webpack_require__.h = () => ("0d5edcd050b39ca252fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hOWM4MjcyODNmYmYzODNlZTVjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ2tCO0FBRW9EO0FBRTlFLE1BQU1NLFVBQVUsQ0FBQztFQUM5QkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBRXRFLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxJQUFJLENBQUNFLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDbkUsSUFBSSxDQUFDRyxtQkFBbUIsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0NBQWdDLENBQUM7SUFFbkYsSUFBSSxDQUFDSSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsb0RBQW9ELENBQUM7SUFDaEcsSUFBSSxDQUFDQyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsc0RBQXNELENBQUM7SUFFaEcsSUFBSSxDQUFDRSxPQUFPLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNDQUFzQyxDQUFDO0lBQzdFLElBQUksQ0FBQ1EsVUFBVSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQztJQUVuRixJQUFJLENBQUNTLFVBQVUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEtBQUs7SUFFeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDTCxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBRTFFLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsQ0FBQztFQUN6QjtFQUVBQyxlQUFlQSxDQUFDQyxDQUFDLEVBQUU7SUFDakJMLE9BQU8sQ0FB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QSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFNNT09USCB9IGZyb20gXCIuLi91dGlscy9lYXNpbmdzXCJcblxuaW1wb3J0IHsgYm90dG9tU3RhcnRTdHJpbmcsIGJvdHRvbUVuZFN0cmluZywgdG9wU3RhcnRTdHJpbmcsIHRvcEVuZFN0cmluZyB9IGZyb20gXCIuLi8uLi9kYXRhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fd3JhcHBlclwiKVxuXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51XCIpXG4gICAgdGhpcy5leHBhbmRlZE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkXCIpXG4gICAgdGhpcy5leHBhbmRlZE1lbnVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlclwiKVxuXG4gICAgdGhpcy5uYXZOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkX193cmFwcGVyX19tZW51X19saV9fbm9fX3dyYXBcIilcbiAgICB0aGlzLm5hdk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkX193cmFwcGVyX19tZW51X19saV9fbmFtZV9fd3JhcFwiKVxuXG4gICAgdGhpcy50b3BMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19idXJnZXJfX2xpbmVfX3RvcFwiKVxuICAgIHRoaXMuYm90dG9tTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fYnVyZ2VyX19saW5lX19ib3R0b21cIilcblxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnRvcExpbmUuZ2V0QXR0cmlidXRlKFwicG9pbnRzXCIpLCB0aGlzLmJvdHRvbUxpbmUsIFwiQUxPUlNcIilcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICBoYW5kbGVNZW51Q2xpY2soZSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTWVudUNsaWNrXCIpXG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgICB0aGlzLnRpbWVsaW5lSW4gPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVJblxuICAgICAgICAuc2V0KFt0aGlzLm5hdk51bWJlciwgdGhpcy5uYXZOYW1lXSwge1xuICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICByb3RhdGlvblg6IC01MCxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLmV4cGFuZGVkTWVudSwge1xuICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51V3JhcHBlciwge1xuICAgICAgICAgIGF1dG9BbHBoYTogXCIxXCJcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMubWVudSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWVcbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wRW5kU3RyaW5nKVxuICAgICAgdGhpcy5ib3R0b21MaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBib3R0b21FbmRTdHJpbmcpXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwYW5kZWQgJiYgIXRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgICB0aGlzLnRpbWVsaW5lT3V0ID0gZ3NhcC50aW1lbGluZSh7IG9uQ29tcGxldGU6ICgpID0+ICh0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UpIH0pXG4gICAgICB0aGlzLnRpbWVsaW5lT3V0XG4gICAgICAgIC50byh0aGlzLmV4cGFuZGVkTWVudSwge1xuICAgICAgICAgIHdpZHRoOiBcIjIycmVtXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjdyZW1cIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHJlbVwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjZyZW1cIixcbiAgICAgICAgICBsZWZ0OiBcIjZyZW1cIixcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICB9KVxuICAgICAgICAudG8odGhpcy5tZW51LCB7XG4gICAgICAgICAgYm94U2hhZG93OiBcInJnYmEoMCwgMCwgMCwgMC4xOCkgMnB4IDJweCA0cHhcIlxuICAgICAgICB9KVxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2VcbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wU3RhcnRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbVN0YXJ0U3RyaW5nKVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5idXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU1lbnVDbGljay5iaW5kKHRoaXMpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZDVlZGNkMDUwYjM5Y2EyNTJmYVwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiU01PT1RIIiwiYm90dG9tU3RhcnRTdHJpbmciLCJib3R0b21FbmRTdHJpbmciLCJ0b3BTdGFydFN0cmluZyIsInRvcEVuZFN0cmluZyIsIk5hdmlnYXRpb24iLCJjb25zdHJ1Y3RvciIsImJ1dHRvbk1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiZXhwYW5kZWRNZW51IiwiZXhwYW5kZWRNZW51V3JhcHBlciIsIm5hdk51bWJlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZOYW1lIiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpc0V4cGFuZGVkIiwiaXNBbmltYXRpbmciLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwic2V0IiwieSIsInJvdGF0aW9uWCIsInRyYW5zZm9ybU9yaWdpbiIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJhdXRvQWxwaGEiLCJib3hTaGFkb3ciLCJzZXRBdHRyaWJ1dGUiLCJ0aW1lbGluZU91dCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9