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
/******/ 	__webpack_require__.h = () => ("321dc7ddd7d1a139db33")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OGM4NTJiZDgzNjIzOWJkN2M5ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ2tCO0FBRW9EO0FBRTlFLE1BQU1NLFVBQVUsQ0FBQztFQUM5QkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBRXRFLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxJQUFJLENBQUNFLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7SUFDbkUsSUFBSSxDQUFDRyxtQkFBbUIsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0NBQWdDLENBQUM7SUFFbkYsSUFBSSxDQUFDSSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsb0RBQW9ELENBQUM7SUFDaEcsSUFBSSxDQUFDQyxPQUFPLEdBQUdQLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsc0RBQXNELENBQUM7SUFFaEcsSUFBSSxDQUFDRSxPQUFPLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHNDQUFzQyxDQUFDO0lBQzdFLElBQUksQ0FBQ1EsVUFBVSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQztJQUVuRixJQUFJLENBQUNTLFVBQVUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEtBQUs7SUFFeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0wsT0FBTyxDQUFDTSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDTCxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBRTFFLElBQUksQ0FBQ00sZ0JBQWdCLENBQUMsQ0FBQztFQUN6QjtFQUVBQyxlQUFlQSxDQUFDQyxDQUFDLEVBQUU7SUFDakJMLE9BQU8sQ0FB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RixPQUFPLENBQUM0QixZQUFZLENBQUMsUUFBUSxFQUFFekMsaURBQWMsQ0FBQztNQUNuRCxJQUFJLENBQUNjLFVBQVUsQ0FBQzJCLFlBQVksQ0FBQyxRQUFRLEVBQUUzQyxvREFBaUIsQ0FBQztJQUMzRDtFQUNGO0VBRUFzQixnQkFBZ0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUNoQixVQUFVLENBQUNnQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUNzQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUU7QUFDRjs7Ozs7Ozs7VUN4R0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmltcG9ydCB7IGJvdHRvbVN0YXJ0U3RyaW5nLCBib3R0b21FbmRTdHJpbmcsIHRvcFN0YXJ0U3RyaW5nLCB0b3BFbmRTdHJpbmcgfSBmcm9tIFwiLi4vLi4vZGF0YVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcblxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJcIilcblxuICAgIHRoaXMubmF2TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX25vX193cmFwXCIpXG4gICAgdGhpcy5uYXZOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX25hbWVfX3dyYXBcIilcblxuICAgIHRoaXMudG9wTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fYnVyZ2VyX19saW5lX190b3BcIilcbiAgICB0aGlzLmJvdHRvbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fYm90dG9tXCIpXG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgY29uc29sZS5sb2codGhpcy50b3BMaW5lLmdldEF0dHJpYnV0ZShcInBvaW50c1wiKSwgdGhpcy5ib3R0b21MaW5lLCBcIkFMT1JTXCIpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxuICB9XG5cbiAgaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1lbnVDbGlja1wiKVxuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy50aW1lbGluZUluID0gZ3NhcC50aW1lbGluZSh7IG9uQ29tcGxldGU6ICgpID0+ICh0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UpIH0pXG4gICAgICB0aGlzLnRpbWVsaW5lSW5cbiAgICAgICAgLnNldChbdGhpcy5uYXZOdW1iZXIsIHRoaXMubmF2TmFtZV0sIHtcbiAgICAgICAgICB5OiAxMDAsXG4gICAgICAgICAgcm90YXRpb25YOiAtNTAsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjUwJSA1MCVcIlxuICAgICAgICB9KVxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkTWVudVdyYXBwZXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXV0b0FscGhhOiBcIjFcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiPCs9MC42XCJcbiAgICAgICAgKVxuICAgICAgICAudG8oXG4gICAgICAgICAgW3RoaXMubmF2TnVtYmVyLCB0aGlzLm5hdk5hbWVdLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICByb3RhdGlvblg6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI8XCJcbiAgICAgICAgKVxuICAgICAgICAudG8oXG4gICAgICAgICAgdGhpcy5tZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZVxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BFbmRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbUVuZFN0cmluZylcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVPdXRcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMjJyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cmVtXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNnJlbVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BTdGFydFN0cmluZylcbiAgICAgIHRoaXMuYm90dG9tTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgYm90dG9tU3RhcnRTdHJpbmcpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMyMWRjN2RkZDdkMWExMzlkYjMzXCIpIl0sIm5hbWVzIjpbImdzYXAiLCJTTU9PVEgiLCJib3R0b21TdGFydFN0cmluZyIsImJvdHRvbUVuZFN0cmluZyIsInRvcFN0YXJ0U3RyaW5nIiwidG9wRW5kU3RyaW5nIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJleHBhbmRlZE1lbnUiLCJleHBhbmRlZE1lbnVXcmFwcGVyIiwibmF2TnVtYmVyIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdk5hbWUiLCJ0b3BMaW5lIiwiYm90dG9tTGluZSIsImlzRXhwYW5kZWQiLCJpc0FuaW1hdGluZyIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTWVudUNsaWNrIiwiZSIsInRpbWVsaW5lSW4iLCJ0aW1lbGluZSIsIm9uQ29tcGxldGUiLCJzZXQiLCJ5Iiwicm90YXRpb25YIiwidHJhbnNmb3JtT3JpZ2luIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImF1dG9BbHBoYSIsImJveFNoYWRvdyIsInNldEF0dHJpYnV0ZSIsInRpbWVsaW5lT3V0IiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=