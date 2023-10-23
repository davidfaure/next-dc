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
    this.menuHidden = document.querySelector(".navigation__menu__hidden");
    this.menu = document.querySelector(".navigation__menu");
    this.expandedMenu = document.querySelector(".navigation__expanded");
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
/******/ 	__webpack_require__.h = () => ("026cbb7ba497b25ca5c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45N2EzM2FjNWRlMmZlZTZlNjQxOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ2tCO0FBRW9EO0FBRTlFLE1BQU1NLFVBQVUsQ0FBQztFQUM5QkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0lBQ3RFLElBQUksQ0FBQ0MsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztJQUNyRSxJQUFJLENBQUNFLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsSUFBSSxDQUFDRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0lBQ25FLElBQUksQ0FBQ0ksT0FBTyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM3RSxJQUFJLENBQUNLLFVBQVUsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMseUNBQXlDLENBQUM7SUFFbkYsSUFBSSxDQUFDTSxVQUFVLEdBQUcsS0FBSztJQUN2QixJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0lBRXhCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ00sWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQ0wsVUFBVSxFQUFFLE9BQU8sQ0FBQztJQUUxRSxJQUFJLENBQUNNLGdCQUFnQixDQUFDLENBQUM7RUFDekI7RUFFQUMsZUFBZUEsQ0FBQ0MsQ0FBQyxFQUFFO0lBQ2pCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDSCxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUNDLFdBQVcsRUFBRTtNQUN6QyxJQUFJLENBQUNBLFdBQVcsR0FBRyxJQUFJO01BQ3ZCLElBQUksQ0FBQ08sVUFBVSxHQUFHeEIsNENBQUksQ0FBQ3lCLFFBQVEsQ0FBQztRQUFFQyxVQUFVLEVBQUVBLENBQUEsS0FBTyxJQUFJLENBQUNULFdBQVcsR0FBRztNQUFPLENBQUMsQ0FBQztNQUNqRixJQUFJLENBQUNPLFVBQVUsQ0FDWkcsRUFBRSxDQUFDLElBQUksQ0FBQ2QsWUFBWSxFQUFFO1FBQ3JCZSxLQUFLLEVBQUUsT0FBTztRQUNkQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxZQUFZLEVBQUUsR0FBRztRQUNqQkMsR0FBRyxFQUFFLEdBQUc7UUFDUkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsUUFBUSxFQUFFLE9BQU87UUFDakJDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRWxDLGtEQUFNQTtNQUNkLENBQUMsQ0FBQyxDQUNEMEIsRUFBRSxDQUNELElBQUksQ0FBQ2YsSUFBSSxFQUNUO1FBQ0V3QixTQUFTLEVBQUU7TUFDYixDQUFDLEVBQ0QsQ0FDRixDQUFDO01BQ0gsSUFBSSxDQUFDcEIsVUFBVSxHQUFHLElBQUk7TUFDdEIsSUFBSSxDQUFDRixPQUFPLENBQUN1QixZQUFZLENBQUMsUUFBUSxFQUFFaEMsK0NBQVksQ0FBQztNQUNqRCxJQUFJLENBQUNVLFVBQVUsQ0FBQ3NCLFlBQVksQ0FBQyxRQUFRLEVBQUVsQyxrREFBZSxDQUFDO0lBQ3pELENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2EsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDQyxXQUFXLEVBQUU7TUFDL0MsSUFBSSxDQUFDQSxXQUFXLEdBQUcsSUFBSTtNQUN2QixJQUFJLENBQUNxQixXQUFXLEdBQUd0Qyw0Q0FBSSxDQUFDeUIsUUFBUSxDQUFDO1FBQUVDLFVBQVUsRUFBRUEsQ0FBQSxLQUFPLElBQUksQ0FBQ1QsV0FBVyxHQUFHO01BQU8sQ0FBQyxDQUFDO01BQ2xGLElBQUksQ0FBQ3FCLFdBQVcsQ0FDYlgsRUFBRSxDQUFDLElBQUksQ0FBQ2QsWUFBWSxFQUFFO1FBQ3JCZSxLQUFLLEVBQUUsT0FBTztRQUNkQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxZQUFZLEVBQUUsTUFBTTtRQUNwQkcsUUFBUSxFQUFFLFVBQVU7UUFDcEJGLEdBQUcsRUFBRSxNQUFNO1FBQ1hDLElBQUksRUFBRSxNQUFNO1FBQ1pFLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRWxDLGtEQUFNQTtNQUNkLENBQUMsQ0FBQyxDQUNEMEIsRUFBRSxDQUFDLElBQUksQ0FBQ2YsSUFBSSxFQUFFO1FBQ2J3QixTQUFTLEVBQUU7TUFDYixDQUFDLENBQUM7TUFDSixJQUFJLENBQUNwQixVQUFVLEdBQUcsS0FBSztNQUN2QixJQUFJLENBQUNGLE9BQU8sQ0FBQ3VCLFlBQVksQ0FBQyxRQUFRLEVBQUVqQyxpREFBYyxDQUFDO01BQ25ELElBQUksQ0FBQ1csVUFBVSxDQUFDc0IsWUFBWSxDQUFDLFFBQVEsRUFBRW5DLG9EQUFpQixDQUFDO0lBQzNEO0VBQ0Y7RUFFQW1CLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ2IsVUFBVSxDQUFDYSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxlQUFlLENBQUNpQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUU7QUFDRjs7Ozs7Ozs7VUMxRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmltcG9ydCB7IGJvdHRvbVN0YXJ0U3RyaW5nLCBib3R0b21FbmRTdHJpbmcsIHRvcFN0YXJ0U3RyaW5nLCB0b3BFbmRTdHJpbmcgfSBmcm9tIFwiLi4vLi4vZGF0YVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX3dyYXBwZXJcIilcbiAgICB0aGlzLm1lbnVIaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2hpZGRlblwiKVxuICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudVwiKVxuICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19leHBhbmRlZFwiKVxuICAgIHRoaXMudG9wTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fYnVyZ2VyX19saW5lX190b3BcIilcbiAgICB0aGlzLmJvdHRvbUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX21lbnVfX2J1cmdlcl9fbGluZV9fYm90dG9tXCIpXG5cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgY29uc29sZS5sb2codGhpcy50b3BMaW5lLmdldEF0dHJpYnV0ZShcInBvaW50c1wiKSwgdGhpcy5ib3R0b21MaW5lLCBcIkFMT1JTXCIpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxuICB9XG5cbiAgaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1lbnVDbGlja1wiKVxuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgdGhpcy50aW1lbGluZUluID0gZ3NhcC50aW1lbGluZSh7IG9uQ29tcGxldGU6ICgpID0+ICh0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2UpIH0pXG4gICAgICB0aGlzLnRpbWVsaW5lSW5cbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMFwiLFxuICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgICB9KVxuICAgICAgICAudG8oXG4gICAgICAgICAgdGhpcy5tZW51LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gdHJ1ZVxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BFbmRTdHJpbmcpXG4gICAgICB0aGlzLmJvdHRvbUxpbmUuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsIGJvdHRvbUVuZFN0cmluZylcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBhbmRlZCAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKHsgb25Db21wbGV0ZTogKCkgPT4gKHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZSkgfSlcbiAgICAgIHRoaXMudGltZWxpbmVPdXRcbiAgICAgICAgLnRvKHRoaXMuZXhwYW5kZWRNZW51LCB7XG4gICAgICAgICAgd2lkdGg6IFwiMjJyZW1cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiN3JlbVwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cmVtXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiNnJlbVwiLFxuICAgICAgICAgIGxlZnQ6IFwiNnJlbVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byh0aGlzLm1lbnUsIHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE4KSAycHggMnB4IDRweFwiXG4gICAgICAgIH0pXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZVxuICAgICAgdGhpcy50b3BMaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCB0b3BTdGFydFN0cmluZylcbiAgICAgIHRoaXMuYm90dG9tTGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgYm90dG9tU3RhcnRTdHJpbmcpXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmJ1dHRvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTWVudUNsaWNrLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAyNmNiYjdiYTQ5N2IyNWNhNWMxXCIpIl0sIm5hbWVzIjpbImdzYXAiLCJTTU9PVEgiLCJib3R0b21TdGFydFN0cmluZyIsImJvdHRvbUVuZFN0cmluZyIsInRvcFN0YXJ0U3RyaW5nIiwidG9wRW5kU3RyaW5nIiwiTmF2aWdhdGlvbiIsImNvbnN0cnVjdG9yIiwiYnV0dG9uTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVIaWRkZW4iLCJtZW51IiwiZXhwYW5kZWRNZW51IiwidG9wTGluZSIsImJvdHRvbUxpbmUiLCJpc0V4cGFuZGVkIiwiaXNBbmltYXRpbmciLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1lbnVDbGljayIsImUiLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJvbkNvbXBsZXRlIiwidG8iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImJveFNoYWRvdyIsInNldEF0dHJpYnV0ZSIsInRpbWVsaW5lT3V0IiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=