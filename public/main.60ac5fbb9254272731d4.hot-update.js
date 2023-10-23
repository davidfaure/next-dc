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
/******/ 	__webpack_require__.h = () => ("9d387fdbfc29f4fd07b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MGFjNWZiYjkyNTQyNzI3MzFkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDa0I7QUFFb0Q7QUFDaEU7QUFFZCxNQUFNTyxVQUFVLENBQUM7RUFDOUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUV0RSxJQUFJLENBQUNDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsSUFBSSxDQUFDRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQ25FLElBQUksQ0FBQ0csbUJBQW1CLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdDQUFnQyxDQUFDO0lBRW5GLElBQUksQ0FBQ0ksU0FBUyxHQUFHTCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLG9EQUFvRCxDQUFDO0lBQ2hHLElBQUksQ0FBQ0MsT0FBTyxHQUFHUCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLHNEQUFzRCxDQUFDO0lBQ2hHLElBQUksQ0FBQ0UsS0FBSyxHQUFHUixRQUFRLENBQUNNLGdCQUFnQixDQUFDLG1EQUFtRCxDQUFDO0lBRTNGLElBQUksQ0FBQ0csT0FBTyxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM3RSxJQUFJLENBQUNTLFVBQVUsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMseUNBQXlDLENBQUM7SUFFbkYsSUFBSSxDQUFDVSxVQUFVLEdBQUcsS0FBSztJQUN2QixJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0lBRXhCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUV2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUCxLQUFLLEVBQUUsUUFBUSxDQUFDO0VBQ25DO0VBRUFRLGVBQWVBLENBQUNDLENB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Q0Y7Ozs7Ozs7O1VDeklBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5pbXBvcnQgeyBib3R0b21TdGFydFN0cmluZywgYm90dG9tRW5kU3RyaW5nLCB0b3BTdGFydFN0cmluZywgdG9wRW5kU3RyaW5nIH0gZnJvbSBcIi4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X193cmFwcGVyXCIpXG5cbiAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkX193cmFwcGVyXCIpXG5cbiAgICB0aGlzLm5hdk51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX19ub19fd3JhcFwiKVxuICAgIHRoaXMubmF2TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX19uYW1lX193cmFwXCIpXG4gICAgdGhpcy5uYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX193cmFwcGVyXCIpXG5cbiAgICB0aGlzLnRvcExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fdG9wXCIpXG4gICAgdGhpcy5ib3R0b21MaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19idXJnZXJfX2xpbmVfX2JvdHRvbVwiKVxuXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2VcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLm5hdkxpLCBcIm5hdiBsaVwiKVxuICB9XG5cbiAgaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVJbiA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZUluXG4gICAgICAgIC5zZXQoW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLCB7XG4gICAgICAgICAgeTogMTAwLFxuICAgICAgICAgIHJvdGF0aW9uWDogLTUwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCJcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxuICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICB9KVxuICAgICAgICAudG8oXG4gICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnVXcmFwcGVyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogXCIxXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjwrPTAuNlwiXG4gICAgICAgIClcbiAgICAgICAgLnRvKFxuICAgICAgICAgIFt0aGlzLm5hdk51bWJlciwgdGhpcy5uYXZOYW1lXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgcm90YXRpb25YOiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjUwJSA1MCVcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiPFwiXG4gICAgICAgIClcbiAgICAgICAgLnRvKFxuICAgICAgICAgIHRoaXMubWVudSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAwXG4gICAgICAgIClcblxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZVxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BFbmRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbUVuZFN0cmluZylcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcblxuICAgICAgdGhpcy50aW1lbGluZU91dCA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuXG4gICAgICB0aGlzLnRpbWVsaW5lT3V0XG4gICAgICAgIC50byhbdGhpcy5uYXZOdW1iZXIsIHRoaXMubmF2TmFtZV0sIHtcbiAgICAgICAgICB5OiAtMTAwLFxuICAgICAgICAgIHJvdGF0aW9uWDogNTAsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjUwJSA1MCVcIixcbiAgICAgICAgICBkdXJhdGlvbjogMC40LFxuICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICB9KVxuICAgICAgICAudG8oXG4gICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IFwiMjJyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCI3cmVtXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHJlbVwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHRvcDogXCI2cmVtXCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjZyZW1cIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiPFwiXG4gICAgICAgIClcbiAgICAgICAgLnRvKHRoaXMubWVudSwge1xuICAgICAgICAgIGJveFNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMTgpIDJweCAycHggNHB4XCJcbiAgICAgICAgfSlcblxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2VcblxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BTdGFydFN0cmluZylcbiAgICAgIHRoaXMuYm90dG9tTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgYm90dG9tU3RhcnRTdHJpbmcpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTGlNb3VzZU92ZXIoZSkge1xuICAgIC8vIGlmICghdGhpcy5pc0V4cGFuZGVkKSByZXR1cm5cblxuICAgIGNvbnN0IGhvdmVyZWRMaSA9IGUuY3VycmVudFRhcmdldFxuXG4gICAgY29uc29sZS5sb2coaG92ZXJlZExpLCBcIkhPVkVSRURcIilcbiAgfVxuXG4gIGhhbmRsZUxpTW91c2VPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQpIHJldHVyblxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gICAgZWFjaCh0aGlzLm5hdkxpLCBsaSA9PiB7XG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTGlNb3VzZU92ZXIuYmluZCh0aGlzKSlcbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZUxpTW91c2VPdXQuYmluZCh0aGlzKSlcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZDM4N2ZkYmZjMjlmNGZkMDdiNlwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiU01PT1RIIiwiYm90dG9tU3RhcnRTdHJpbmciLCJib3R0b21FbmRTdHJpbmciLCJ0b3BTdGFydFN0cmluZyIsInRvcEVuZFN0cmluZyIsImVhY2giLCJOYXZpZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJidXR0b25NZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImV4cGFuZGVkTWVudSIsImV4cGFuZGVkTWVudVdyYXBwZXIiLCJuYXZOdW1iZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2TmFtZSIsIm5hdkxpIiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpc0V4cGFuZGVkIiwiaXNBbmltYXRpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwic2V0IiwieSIsInJvdGF0aW9uWCIsInRyYW5zZm9ybU9yaWdpbiIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJhdXRvQWxwaGEiLCJib3hTaGFkb3ciLCJzZXRBdHRyaWJ1dGUiLCJ0aW1lbGluZU91dCIsImhhbmRsZUxpTW91c2VPdmVyIiwiaG92ZXJlZExpIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUxpTW91c2VPdXQiLCJiaW5kIiwibGkiXSwic291cmNlUm9vdCI6IiJ9