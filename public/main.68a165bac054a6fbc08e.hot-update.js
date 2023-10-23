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
    if (!this.isExpanded) return;
    const hoveredLi = e.currentTarget;
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(hoveredLi, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.02,
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
    });
    this.navLi.forEach(li => {
      if (li !== hoveredLi) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(li, {
          opacity: 0.2,
          duration: 0.3,
          stagger: 0.02,
          ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
        });
      }
    });
  }
  handleLiMouseOut() {
    if (!this.isExpanded) return;
    this.navLi.forEach(li => {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(li, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.02,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      });
    });
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
/******/ 	__webpack_require__.h = () => ("371e5858886d68450582")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OGExNjViYWMwNTRhNmZiYzA4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDa0I7QUFFb0Q7QUFDaEU7QUFFZCxNQUFNTyxVQUFVLENBQUM7RUFDOUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUV0RSxJQUFJLENBQUNDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsSUFBSSxDQUFDRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQ25FLElBQUksQ0FBQ0csbUJBQW1CLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdDQUFnQyxDQUFDO0lBRW5GLElBQUksQ0FBQ0ksU0FBUyxHQUFHTCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLG9EQUFvRCxDQUFDO0lBQ2hHLElBQUksQ0FBQ0MsT0FBTyxHQUFHUCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLHNEQUFzRCxDQUFDO0lBQ2hHLElBQUksQ0FBQ0UsS0FBSyxHQUFHUixRQUFRLENBQUNNLGdCQUFnQixDQUFDLG1EQUFtRCxDQUFDO0lBRTNGLElBQUksQ0FBQ0csT0FBTyxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM3RSxJQUFJLENBQUNTLFVBQVUsR0FBR1YsUUFBUSxDQUFDQyxhQUFhLENBQUMseUNBQXlDLENBQUM7SUFFbkYsSUFBSSxDQUFDVSxVQUFVLEdBQUcsS0FBSztJQUN2QixJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0lBRXhCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUV2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUCxLQUFLLEVBQUUsUUFBUSxDQUFDO0VBQ25DO0VBRUFRLGVBQWVBLENBQUNDLENB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QixJQUFJLENBQUMsSUFBSSxDQUFDbkMsVUFBVSxFQUFFO0lBRXRCLElBQUksQ0FBQ0gsS0FBSyxDQUFDb0MsT0FBTyxDQUFDQyxFQUFFLElBQUk7TUFDdkJ2RCw0Q0FBSSxDQUFDbUMsRUFBRSxDQUFDb0IsRUFBRSxFQUFFO1FBQ1ZILE9BQU8sRUFBRSxDQUFDO1FBQ1ZULFFBQVEsRUFBRSxHQUFHO1FBQ2JVLE9BQU8sRUFBRSxJQUFJO1FBQ2JULElBQUksRUFBRTNDLGtEQUFNQTtNQUNkLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFzQixnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUNkLFVBQVUsQ0FBQ2MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0csZUFBZSxDQUFDK0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFbkQsNENBQUksQ0FBQyxJQUFJLENBQUNZLEtBQUssRUFBRXFDLEVBQUUsSUFBSTtNQUNyQkEsRUFBRSxDQUFDaEMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQzBCLGlCQUFpQixDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDbkVGLEVBQUUsQ0FBQ2hDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUNpQyxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDcEtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5pbXBvcnQgeyBib3R0b21TdGFydFN0cmluZywgYm90dG9tRW5kU3RyaW5nLCB0b3BTdGFydFN0cmluZywgdG9wRW5kU3RyaW5nIH0gZnJvbSBcIi4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5idXR0b25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X193cmFwcGVyXCIpXG5cbiAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRcIilcbiAgICB0aGlzLmV4cGFuZGVkTWVudVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkX193cmFwcGVyXCIpXG5cbiAgICB0aGlzLm5hdk51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX19ub19fd3JhcFwiKVxuICAgIHRoaXMubmF2TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX19uYW1lX193cmFwXCIpXG4gICAgdGhpcy5uYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX193cmFwcGVyXCIpXG5cbiAgICB0aGlzLnRvcExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fdG9wXCIpXG4gICAgdGhpcy5ib3R0b21MaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51X19idXJnZXJfX2xpbmVfX2JvdHRvbVwiKVxuXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2VcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLm5hdkxpLCBcIm5hdiBsaVwiKVxuICB9XG5cbiAgaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVJbiA9IGdzYXAudGltZWxpbmUoeyBvbkNvbXBsZXRlOiAoKSA9PiAodGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlKSB9KVxuICAgICAgdGhpcy50aW1lbGluZUluXG4gICAgICAgIC5zZXQoW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLCB7XG4gICAgICAgICAgeTogMTAwLFxuICAgICAgICAgIHJvdGF0aW9uWDogLTUwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCJcbiAgICAgICAgfSlcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxuICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcImFsbFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkTWVudVdyYXBwZXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXV0b0FscGhhOiBcIjFcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiPCs9MC42XCJcbiAgICAgICAgKVxuICAgICAgICAudG8oXG4gICAgICAgICAgW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICByb3RhdGlvblg6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI8XCJcbiAgICAgICAgKVxuICAgICAgICAudG8oXG4gICAgICAgICAgdGhpcy5tZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlXG4gICAgICB0aGlzLnRvcExpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIHRvcEVuZFN0cmluZylcbiAgICAgIHRoaXMuYm90dG9tTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgYm90dG9tRW5kU3RyaW5nKVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuXG4gICAgICB0aGlzLnRpbWVsaW5lT3V0ID0gZ3NhcC50aW1lbGluZSh7IG9uQ29tcGxldGU6ICgpID0+ICh0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UpIH0pXG5cbiAgICAgIHRoaXMudGltZWxpbmVPdXRcbiAgICAgICAgLnRvKFt0aGlzLm5hdk51bWJlciwgdGhpcy5uYXZOYW1lXSwge1xuICAgICAgICAgIHk6IC0xMDAsXG4gICAgICAgICAgcm90YXRpb25YOiA1MCxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkTWVudSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogXCIyMnJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjdyZW1cIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cmVtXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgICAgbGVmdDogXCI2cmVtXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIjxcIlxuICAgICAgICApXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG5cbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlXG5cbiAgICAgIHRoaXMudG9wTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgdG9wU3RhcnRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbVN0YXJ0U3RyaW5nKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUxpTW91c2VPdmVyKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBob3ZlcmVkTGkgPSBlLmN1cnJlbnRUYXJnZXRcblxuICAgIGdzYXAudG8oaG92ZXJlZExpLCB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIHN0YWdnZXI6IDAuMDIsXG4gICAgICBlYXNlOiBTTU9PVEhcbiAgICB9KVxuXG4gICAgdGhpcy5uYXZMaS5mb3JFYWNoKGxpID0+IHtcbiAgICAgIGlmIChsaSAhPT0gaG92ZXJlZExpKSB7XG4gICAgICAgIGdzYXAudG8obGksIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjIsXG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICBzdGFnZ2VyOiAwLjAyLFxuICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVMaU1vdXNlT3V0KCkge1xuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKSByZXR1cm5cblxuICAgIHRoaXMubmF2TGkuZm9yRWFjaChsaSA9PiB7XG4gICAgICBnc2FwLnRvKGxpLCB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgIHN0YWdnZXI6IDAuMDIsXG4gICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gICAgZWFjaCh0aGlzLm5hdkxpLCBsaSA9PiB7XG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTGlNb3VzZU92ZXIuYmluZCh0aGlzKSlcbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZUxpTW91c2VPdXQuYmluZCh0aGlzKSlcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNzFlNTg1ODg4NmQ2ODQ1MDU4MlwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiU01PT1RIIiwiYm90dG9tU3RhcnRTdHJpbmciLCJib3R0b21FbmRTdHJpbmciLCJ0b3BTdGFydFN0cmluZyIsInRvcEVuZFN0cmluZyIsImVhY2giLCJOYXZpZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJidXR0b25NZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImV4cGFuZGVkTWVudSIsImV4cGFuZGVkTWVudVdyYXBwZXIiLCJuYXZOdW1iZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2TmFtZSIsIm5hdkxpIiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpc0V4cGFuZGVkIiwiaXNBbmltYXRpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwic2V0IiwieSIsInJvdGF0aW9uWCIsInRyYW5zZm9ybU9yaWdpbiIsInRvIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJwb2ludGVyRXZlbnRzIiwiZHVyYXRpb24iLCJlYXNlIiwiYXV0b0FscGhhIiwiYm94U2hhZG93Iiwic2V0QXR0cmlidXRlIiwidGltZWxpbmVPdXQiLCJoYW5kbGVMaU1vdXNlT3ZlciIsImhvdmVyZWRMaSIsImN1cnJlbnRUYXJnZXQiLCJvcGFjaXR5Iiwic3RhZ2dlciIsImZvckVhY2giLCJsaSIsImhhbmRsZUxpTW91c2VPdXQiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==