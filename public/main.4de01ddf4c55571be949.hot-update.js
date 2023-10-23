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

    const tween = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.quoteImg, {
      scale: 1,
      ease: "expo",
      paused: true
    });
    const start = (this.quoteBounds.top - this.quoteBounds.height) * 0.8;
    const end = this.quoteBounds.bottom - this.quoteBounds.height;
    if (start < scroll.current && end > scroll.current) {
      const targetProgress = (start - scroll.current) / (start - end) * 0.1;
      this.currentProgress = (0,utils_math__WEBPACK_IMPORTED_MODULE_1__.lerp)(this.currentProgress, targetProgress, 0.02);
      // console.log("je suis dans la section", this.currentProgress)
      tween.progress(this.currentProgress);
    }
    super.update();
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a11f24ce6491c016805")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZGUwMWRkZjRjNTU1NzFiZTk0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDWDtBQUNVO0FBRWpDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENHLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztRQUM5REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ1MscUJBQXFCLENBQUMsQ0FBQztFQUNuRjs7RUFFQTtBQUNGO0FBQ0E7RUFDRSxNQUFNQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNoQixPQUFPLENBQUNpQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNwQixPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUUvQyxPQUFPLEtBQUssQ0FBQ2dCLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUEsTUFBTUcsSUFBSUEsQ0FBQ0gsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDaEIsT0FBTyxDQUFDaUIsU0FBUyxDQUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDdEIsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFFbEQsT0FBTyxLQUFLLENBQUNvQixJQUFJLENBQUNILEdBQUcsQ0FBQztFQUN4QjtFQUVBSyxNQUFNQSxDQUFDbEIsTUFBTSxFQUFFO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLE1BQU1tQixLQUFLLEdBQUczQiw0Q0FBSSxDQUFDNEIsRUFBRSxDQUFDLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ08sUUFBUSxFQUFFO01BQzVDZ0IsS0FBSyxFQUFFLENBQUM7TUFDUkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDZCxXQUFXLENBQUNlLEdBQUcsR0FBRyxJQUFJLENBQUNmLFdBQVcsQ0FBQ2dCLE1BQU0sSUFBSSxHQUFHO0lBQ3BFLE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNqQixXQUFXLENBQUNrQixNQUFNLEdBQUcsSUFBSSxDQUFDbEIsV0FBVyxDQUFDZ0IsTUFBTTtJQUU3RCxJQUFJRixLQUFLLEdBQUd4QixNQUFNLENBQUM2QixPQUFPLElBQUlGLEdBQUcsR0FBRzNCLE1BQU0sQ0FBQzZCLE9BQU8sRUFBRTtNQUNsRCxNQUFNQyxjQUFjLEdBQUksQ0FBQ04sS0FBSyxHQUFHeEIsTUFBTSxDQUFDNkIsT0FBTyxLQUFLTCxLQUFLLEdBQUdHLEdBQUcsQ0FBQyxHQUFJLEdBQUc7TUFDdkUsSUFBSSxDQUFDbEIsZUFBZSxHQUFHaEIsZ0RBQUksQ0FBQyxJQUFJLENBQUNnQixlQUFlLEVBQUVxQixjQUFjLEVBQUUsSUFBSSxDQUFDO01BQ3ZFO01BQ0FYLEtBQUssQ0FBQ1ksUUFBUSxDQUFDLElBQUksQ0FBQ3RCLGVBQWUsQ0FBQztJQUN0QztJQUNBLEtBQUssQ0FBQ1MsTUFBTSxDQUFDLENBQUM7RUFDaEI7QUFDRjs7Ozs7Ozs7VUNsRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFjdGl2ZTogXCJob21lLS1hY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIGVsZW1lbnQ6IFwiLmhvbWVcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHdyYXBwZXI6IFwiLmhvbWVfX2NvbnRlbnRcIixcbiAgICAgICAgc2Nyb2xsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19iYXJcIiksXG4gICAgICAgIGdhbGxlcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKSxcbiAgICAgICAgcXVvdGVJbWc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX21lZGlhX19pbWFnZVwiKSxcbiAgICAgICAgcXVvdGVTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLFxuICAgICAgICBxdW90ZVN0aWNreTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fc3RpY2t5XCIpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaXNTdGlja3kgPSBmYWxzZVxuICAgIHRoaXMuY3VycmVudFByb2dyZXNzID0gMFxuICAgIHRoaXMucXVvdGVCb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIGFzeW5jIHNob3codXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIHJldHVybiBzdXBlci5zaG93KHVybClcbiAgfVxuXG4gIGFzeW5jIGhpZGUodXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIHJldHVybiBzdXBlci5oaWRlKHVybClcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAvLyAgIFwidXBkYXRlIEhPTUVcIixcbiAgICAvLyAgIHNjcm9sbC5jdXJyZW50LFxuICAgIC8vICAgdGhpcy5xdW90ZUJvdW5kcy50b3AgLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodCxcbiAgICAvLyAgIHRoaXMucXVvdGVCb3VuZHMuYm90dG9tIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHRcbiAgICAvLyApXG5cbiAgICBjb25zdCB0d2VlbiA9IGdzYXAudG8odGhpcy5lbGVtZW50cy5xdW90ZUltZywge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgIHBhdXNlZDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBzdGFydCA9ICh0aGlzLnF1b3RlQm91bmRzLnRvcCAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0KSAqIDAuOFxuICAgIGNvbnN0IGVuZCA9IHRoaXMucXVvdGVCb3VuZHMuYm90dG9tIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHRcblxuICAgIGlmIChzdGFydCA8IHNjcm9sbC5jdXJyZW50ICYmIGVuZCA+IHNjcm9sbC5jdXJyZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9ICgoc3RhcnQgLSBzY3JvbGwuY3VycmVudCkgLyAoc3RhcnQgLSBlbmQpKSAqIDAuMVxuICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBsZXJwKHRoaXMuY3VycmVudFByb2dyZXNzLCB0YXJnZXRQcm9ncmVzcywgMC4wMilcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiamUgc3VpcyBkYW5zIGxhIHNlY3Rpb25cIiwgdGhpcy5jdXJyZW50UHJvZ3Jlc3MpXG4gICAgICB0d2Vlbi5wcm9ncmVzcyh0aGlzLmN1cnJlbnRQcm9ncmVzcylcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGExMWYyNGNlNjQ5MWMwMTY4MDVcIikiXSwibmFtZXMiOlsiUGFnZSIsImdzYXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZWxlbWVudCIsImVsZW1lbnRzIiwid3JhcHBlciIsInNjcm9sbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVvdGVJbWciLCJxdW90ZVNlY3Rpb24iLCJxdW90ZVN0aWNreSIsImlzU3RpY2t5IiwiY3VycmVudFByb2dyZXNzIiwicXVvdGVCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzaG93IiwidXJsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZSIsInJlbW92ZSIsInVwZGF0ZSIsInR3ZWVuIiwidG8iLCJzY2FsZSIsImVhc2UiLCJwYXVzZWQiLCJzdGFydCIsInRvcCIsImhlaWdodCIsImVuZCIsImJvdHRvbSIsImN1cnJlbnQiLCJ0YXJnZXRQcm9ncmVzcyIsInByb2dyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==