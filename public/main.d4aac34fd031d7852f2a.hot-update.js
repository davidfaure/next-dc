"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/pages/Home/index.js":
/*!*********************************!*\
  !*** ./app/pages/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Page */ "./app/components/Page.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends components_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      classes: {
        active: "home--active"
      },
      element: ".home",
      elements: {
        wrapper: ".home__content",
        scroll: document.querySelector(".progress__bar"),
        gallery: document.querySelectorAll(".home__gallery"),
        quoteImg: document.querySelector(".home__quote__media__image"),
        quoteSection: document.querySelector(".home__quote"),
        quoteSticky: document.querySelector(".home__quote__sticky")
      }
    });
    this.isSticky = false;
    this.currentProgress = 0;
    this.quoteBounds = document.querySelector(".home__quote").getBoundingClientRect();
  }

  /**
   * Animations.
   */
  async show(url) {
    this.element.classList.add(this.classes.active);
    return super.show(url);
  }
  async hide(url) {
    this.element.classList.remove(this.classes.active);
    return super.hide(url);
  }
  update(scroll) {
    // console.log(
    //   "update HOME",
    //   scroll.current,
    //   this.quoteBounds.top - this.quoteBounds.height,
    //   this.quoteBounds.bottom - this.quoteBounds.height
    // )

    const tweenUp = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.quoteImg, {
      scale: 1,
      ease: "expo",
      paused: true
    });
    const tweenDown = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.quoteImg, {
      scale: 0.2,
      ease: "expo",
      paused: true
    });
    const start = (this.quoteBounds.top - this.quoteBounds.height) * 1.1;
    const end = (this.quoteBounds.bottom - this.quoteBounds.height) * 1.2;
    if (start < scroll.current && end > scroll.current) {
      const targetProgress = (start - scroll.current) / (start - end) * 0.05;
      this.currentProgress = (0,utils_math__WEBPACK_IMPORTED_MODULE_1__.lerp)(this.currentProgress, targetProgress, 0.02);
      // console.log("je suis dans la section", this.currentProgress)
      tweenUp.progress(this.currentProgress);
    } else {
      const targetProgress = (start - scroll.current) / (start - end) * 0.001;
      this.currentProgress = (0,utils_math__WEBPACK_IMPORTED_MODULE_1__.lerp)(this.currentProgress, targetProgress, 0.01);
      // console.log("je suis dans la section", this.currentProgress)
      tweenDown.progress(this.currentProgress);
    }
    super.update();
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c0679f72430b89e3eba5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNGFhYzM0ZmQwMzFkNzg1MmYyYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDWDtBQUNVO0FBRWpDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENHLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztRQUM5REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ1MscUJBQXFCLENBQUMsQ0FBQztFQUNuRjs7RUFFQTtBQUNGO0FBQ0E7RUFDRSxNQUFNQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNoQixPQUFPLENBQUNpQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNwQixPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUUvQyxPQUFPLEtBQUssQ0FBQ2dCLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUEsTUFBTUcsSUFBSUEsQ0FBQ0gsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDaEIsT0FBTyxDQUFDaUIsU0FBUyxDQUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDdEIsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFFbEQsT0FBTyxLQUFLLENBQUNvQixJQUFJLENBQUNILEdBQUcsQ0FBQztFQUN4QjtFQUVBSyxNQUFNQSxDQUFDbEIsTUFBTSxFQUFFO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLE1BQU1tQixPQUFPLEdBQUczQiw0Q0FBSSxDQUFDNEIsRUFBRSxDQUFDLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ08sUUFBUSxFQUFFO01BQzlDZ0IsS0FBSyxFQUFFLENBQUM7TUFDUkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsU0FBUyxHQUFHaEMsNENBQUksQ0FBQzRCLEVBQUUsQ0FBQyxJQUFJLENBQUN0QixRQUFRLENBQUNPLFFBQVEsRUFBRTtNQUNoRGdCLEtBQUssRUFBRSxHQUFHO01BQ1ZDLElBQUksRUFBRSxNQUFNO01BQ1pDLE1BQU0sRUFBRTtJQUNWLENBQUMsQ0FBQztJQUVGLE1BQU1FLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQ2YsV0FBVyxDQUFDZ0IsR0FBRyxHQUFHLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQ2lCLE1BQU0sSUFBSSxHQUFHO0lBQ3BFLE1BQU1DLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQ2xCLFdBQVcsQ0FBQ21CLE1BQU0sR0FBRyxJQUFJLENBQUNuQixXQUFXLENBQUNpQixNQUFNLElBQUksR0FBRztJQUVyRSxJQUFJRixLQUFLLEdBQUd6QixNQUFNLENBQUM4QixPQUFPLElBQUlGLEdBQUcsR0FBRzVCLE1BQU0sQ0FBQzhCLE9BQU8sRUFBRTtNQUNsRCxNQUFNQyxjQUFjLEdBQUksQ0FBQ04sS0FBSyxHQUFHekIsTUFBTSxDQUFDOEIsT0FBTyxLQUFLTCxLQUFLLEdBQUdHLEdBQUcsQ0FBQyxHQUFJLElBQUk7TUFDeEUsSUFBSSxDQUFDbkIsZUFBZSxHQUFHaEIsZ0RBQUksQ0FBQyxJQUFJLENBQUNnQixlQUFlLEVBQUVzQixjQUFjLEVBQUUsSUFBSSxDQUFDO01BQ3ZFO01BQ0FaLE9BQU8sQ0FBQ2EsUUFBUSxDQUFDLElBQUksQ0FBQ3ZCLGVBQWUsQ0FBQztJQUN4QyxDQUFDLE1BQU07TUFDTCxNQUFNc0IsY0FBYyxHQUFJLENBQUNOLEtBQUssR0FBR3pCLE1BQU0sQ0FBQzhCLE9BQU8sS0FBS0wsS0FBSyxHQUFHRyxHQUFHLENBQUMsR0FBSSxLQUFLO01BQ3pFLElBQUksQ0FBQ25CLGVBQWUsR0FBR2hCLGdEQUFJLENBQUMsSUFBSSxDQUFDZ0IsZUFBZSxFQUFFc0IsY0FBYyxFQUFFLElBQUksQ0FBQztNQUN2RTtNQUNBUCxTQUFTLENBQUNRLFFBQVEsQ0FBQyxJQUFJLENBQUN2QixlQUFlLENBQUM7SUFDMUM7SUFDQSxLQUFLLENBQUNTLE1BQU0sQ0FBQyxDQUFDO0VBQ2hCO0FBQ0Y7Ozs7Ozs7O1VDN0VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9wYWdlcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjb21wb25lbnRzL1BhZ2VcIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCJ1dGlscy9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBhY3RpdmU6IFwiaG9tZS0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB3cmFwcGVyOiBcIi5ob21lX19jb250ZW50XCIsXG4gICAgICAgIHNjcm9sbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fYmFyXCIpLFxuICAgICAgICBnYWxsZXJ5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIiksXG4gICAgICAgIHF1b3RlSW1nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlX19tZWRpYV9faW1hZ2VcIiksXG4gICAgICAgIHF1b3RlU2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKSxcbiAgICAgICAgcXVvdGVTdGlja3k6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX3N0aWNreVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmlzU3RpY2t5ID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IDBcbiAgICB0aGlzLnF1b3RlQm91bmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBhc3luYyBzaG93KHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuc2hvdyh1cmwpXG4gIH1cblxuICBhc3luYyBoaWRlKHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuaGlkZSh1cmwpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgLy8gY29uc29sZS5sb2coXG4gICAgLy8gICBcInVwZGF0ZSBIT01FXCIsXG4gICAgLy8gICBzY3JvbGwuY3VycmVudCxcbiAgICAvLyAgIHRoaXMucXVvdGVCb3VuZHMudG9wIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHQsXG4gICAgLy8gICB0aGlzLnF1b3RlQm91bmRzLmJvdHRvbSAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0XG4gICAgLy8gKVxuXG4gICAgY29uc3QgdHdlZW5VcCA9IGdzYXAudG8odGhpcy5lbGVtZW50cy5xdW90ZUltZywge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgIHBhdXNlZDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB0d2VlbkRvd24gPSBnc2FwLnRvKHRoaXMuZWxlbWVudHMucXVvdGVJbWcsIHtcbiAgICAgIHNjYWxlOiAwLjIsXG4gICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgIHBhdXNlZDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBzdGFydCA9ICh0aGlzLnF1b3RlQm91bmRzLnRvcCAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0KSAqIDEuMVxuICAgIGNvbnN0IGVuZCA9ICh0aGlzLnF1b3RlQm91bmRzLmJvdHRvbSAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0KSAqIDEuMlxuXG4gICAgaWYgKHN0YXJ0IDwgc2Nyb2xsLmN1cnJlbnQgJiYgZW5kID4gc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldFByb2dyZXNzID0gKChzdGFydCAtIHNjcm9sbC5jdXJyZW50KSAvIChzdGFydCAtIGVuZCkpICogMC4wNVxuICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBsZXJwKHRoaXMuY3VycmVudFByb2dyZXNzLCB0YXJnZXRQcm9ncmVzcywgMC4wMilcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiamUgc3VpcyBkYW5zIGxhIHNlY3Rpb25cIiwgdGhpcy5jdXJyZW50UHJvZ3Jlc3MpXG4gICAgICB0d2VlblVwLnByb2dyZXNzKHRoaXMuY3VycmVudFByb2dyZXNzKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9ICgoc3RhcnQgLSBzY3JvbGwuY3VycmVudCkgLyAoc3RhcnQgLSBlbmQpKSAqIDAuMDAxXG4gICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IGxlcnAodGhpcy5jdXJyZW50UHJvZ3Jlc3MsIHRhcmdldFByb2dyZXNzLCAwLjAxKVxuICAgICAgLy8gY29uc29sZS5sb2coXCJqZSBzdWlzIGRhbnMgbGEgc2VjdGlvblwiLCB0aGlzLmN1cnJlbnRQcm9ncmVzcylcbiAgICAgIHR3ZWVuRG93bi5wcm9ncmVzcyh0aGlzLmN1cnJlbnRQcm9ncmVzcylcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzA2NzlmNzI0MzBiODllM2ViYTVcIikiXSwibmFtZXMiOlsiUGFnZSIsImdzYXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZWxlbWVudCIsImVsZW1lbnRzIiwid3JhcHBlciIsInNjcm9sbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVvdGVJbWciLCJxdW90ZVNlY3Rpb24iLCJxdW90ZVN0aWNreSIsImlzU3RpY2t5IiwiY3VycmVudFByb2dyZXNzIiwicXVvdGVCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzaG93IiwidXJsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZSIsInJlbW92ZSIsInVwZGF0ZSIsInR3ZWVuVXAiLCJ0byIsInNjYWxlIiwiZWFzZSIsInBhdXNlZCIsInR3ZWVuRG93biIsInN0YXJ0IiwidG9wIiwiaGVpZ2h0IiwiZW5kIiwiYm90dG9tIiwiY3VycmVudCIsInRhcmdldFByb2dyZXNzIiwicHJvZ3Jlc3MiXSwic291cmNlUm9vdCI6IiJ9