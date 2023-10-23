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
    this.addEventListener();
  }
  handleMenuClick(e) {
    console.log("handleMenuClick");
    if (!this.isExpanded) {
      this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
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
      this.timelineOut = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
      this.timelineOut.from(this.expandedMenu, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0",
        top: "0",
        left: "0",
        position: "fixed",
        duration: 0.8,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_0__.SMOOTH
      });
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
/******/ 	__webpack_require__.h = () => ("448567af9c8e54f087fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YTM2MzE4ODFiNzZmMGY2ZTAzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNrQjtBQUUxQixNQUFNRSxVQUFVLENBQUM7RUFDOUJDLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztJQUN0RSxJQUFJLENBQUNDLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsMkJBQTJCLENBQUM7SUFDckUsSUFBSSxDQUFDRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0csWUFBWSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuRSxJQUFJLENBQUNJLFVBQVUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztFQUN6QjtFQUVBQyxlQUFlQSxDQUFDQyxDQUFDLEVBQUU7SUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUNMLFVBQVUsRUFBRTtNQUNwQixJQUFJLENBQUNNLFVBQVUsR0FBR2hCLDRDQUFJLENBQUNpQixRQUFRLENBQUMsQ0FBQztNQUNqQyxJQUFJLENBQUNELFVBQVUsQ0FDWkUsRUFBRSxDQUFDLElBQUksQ0FBQ1QsWUFBWSxFQUFFO1FBQ3JCVSxLQUFLLEVBQUUsT0FBTztRQUNkQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxZQUFZLEVBQUUsR0FBRztRQUNqQkMsR0FBRyxFQUFFLEdBQUc7UUFDUkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsUUFBUSxFQUFFLE9BQU87UUFDakJDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRXpCLGtEQUFNQTtNQUNkLENBQUMsQ0FBQyxDQUNEaUIsRUFBRSxDQUNELElBQUksQ0FBQ1YsSUFBSSxFQUNUO1FBQ0VtQixTQUFTLEVBQUU7TUFDYixDQUFDLEVBQ0QsQ0FDRixDQUFDO01BQ0gsSUFBSSxDQUFDakIsVUFBVSxHQUFHLElBQUk7SUFDeEIsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDa0IsV0FBVyxHQUFHNUIsNENBQUksQ0FBQ2lCLFFBQVEsQ0FBQyxDQUFDO01BQ2xDLElBQUksQ0FBQ1csV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDcEIsWUFBWSxFQUFFO1FBQ3ZDVSxLQUFLLEVBQUUsT0FBTztRQUNkQyxNQUFNLEVBQUUsT0FBTztRQUNmQyxZQUFZLEVBQUUsR0FBRztRQUNqQkMsR0FBRyxFQUFFLEdBQUc7UUFDUkMsSUFBSSxFQUFFLEdBQUc7UUFDVEMsUUFBUSxFQUFFLE9BQU87UUFDakJDLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRXpCLGtEQUFNQTtNQUNkLENBQUMsQ0FBQztJQUNKO0VBQ0Y7RUFFQVUsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxDQUFDUCxVQUFVLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLGVBQWUsQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RTtBQUNGOzs7Ozs7OztVQ3REQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFNNT09USCB9IGZyb20gXCIuLi91dGlscy9lYXNpbmdzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9fd3JhcHBlclwiKVxuICAgIHRoaXMubWVudUhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fbWVudV9faGlkZGVuXCIpXG4gICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19tZW51XCIpXG4gICAgdGhpcy5leHBhbmRlZE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkXCIpXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2VcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKVxuICB9XG5cbiAgaGFuZGxlTWVudUNsaWNrKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1lbnVDbGlja1wiKVxuICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLnRpbWVsaW5lSW4gPSBnc2FwLnRpbWVsaW5lKClcbiAgICAgIHRoaXMudGltZWxpbmVJblxuICAgICAgICAudG8odGhpcy5leHBhbmRlZE1lbnUsIHtcbiAgICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwXCIsXG4gICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgICAgZWFzZTogU01PT1RIXG4gICAgICAgIH0pXG4gICAgICAgIC50byhcbiAgICAgICAgICB0aGlzLm1lbnUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZWxpbmVPdXQgPSBnc2FwLnRpbWVsaW5lKClcbiAgICAgIHRoaXMudGltZWxpbmVPdXQuZnJvbSh0aGlzLmV4cGFuZGVkTWVudSwge1xuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBcIixcbiAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgbGVmdDogXCIwXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICAgIGVhc2U6IFNNT09USFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuYnV0dG9uTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVNZW51Q2xpY2suYmluZCh0aGlzKSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDQ4NTY3YWY5YzhlNTRmMDg3ZmVcIikiXSwibmFtZXMiOlsiZ3NhcCIsIlNNT09USCIsIk5hdmlnYXRpb24iLCJjb25zdHJ1Y3RvciIsImJ1dHRvbk1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51SGlkZGVuIiwibWVudSIsImV4cGFuZGVkTWVudSIsImlzRXhwYW5kZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTWVudUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJ0byIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiYm94U2hhZG93IiwidGltZWxpbmVPdXQiLCJmcm9tIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=