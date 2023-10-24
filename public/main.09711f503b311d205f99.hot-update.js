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
        quoteSticky: document.querySelector(".home__quote__sticky"),
        title: document.querySelector(".home__hero__title")
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
    console.log("ICI", this.elements.title);
    return super.show(url);
  }
  async hide(url) {
    this.element.classList.remove(this.classes.active);
    return super.hide(url);
  }
  update(scroll) {
    const tween = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.quoteImg, {
      scale: 1,
      ease: "expo",
      paused: true
    });
    const start = (this.quoteBounds.top - this.quoteBounds.height) * 1.1;
    const end = (this.quoteBounds.bottom - this.quoteBounds.height) * 1.2;
    if (start < scroll.current && end > scroll.current) {
      const targetProgress = (start - scroll.current) / (start - end) * 0.05;
      this.currentProgress = (0,utils_math__WEBPACK_IMPORTED_MODULE_1__.lerp)(this.currentProgress, targetProgress, 0.02);
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
/******/ 	__webpack_require__.h = () => ("df3cc0527be506e59272")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wOTcxMWY1MDNiMzExZDIwNWY5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDWDtBQUNVO0FBRWpDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENHLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztRQUM5REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7UUFDM0RNLEtBQUssRUFBRVAsUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CO01BQ3BEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTyxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ1UscUJBQXFCLENBQUMsQ0FBQztFQUNuRjs7RUFFQTtBQUNGO0FBQ0E7RUFDRSxNQUFNQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNqQixPQUFPLENBQUNrQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNyQixPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUUvQ3FCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUNwQixRQUFRLENBQUNVLEtBQUssQ0FBQztJQUV2QyxPQUFPLEtBQUssQ0FBQ0ssSUFBSSxDQUFDQyxHQUFHLENBQUM7RUFDeEI7RUFFQSxNQUFNSyxJQUFJQSxDQUFDTCxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNqQixPQUFPLENBQUNrQixTQUFTLENBQUNLLE1BQU0sQ0FBQyxJQUFJLENBQUN6QixPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUVsRCxPQUFPLEtBQUssQ0FBQ3VCLElBQUksQ0FBQ0wsR0FBRyxDQUFDO0VBQ3hCO0VBRUFPLE1BQU1BLENBQUNyQixNQUFNLEVBQUU7SUFDYixNQUFNc0IsS0FBSyxHQUFHOUIsNENBQUksQ0FBQytCLEVBQUUsQ0FBQyxJQUFJLENBQUN6QixRQUFRLENBQUNPLFFBQVEsRUFBRTtNQUM1Q21CLEtBQUssRUFBRSxDQUFDO01BQ1JDLElBQUksRUFBRSxNQUFNO01BQ1pDLE1BQU0sRUFBRTtJQUNWLENBQUMsQ0FBQztJQUVGLE1BQU1DLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQ2lCLEdBQUcsR0FBRyxJQUFJLENBQUNqQixXQUFXLENBQUNrQixNQUFNLElBQUksR0FBRztJQUNwRSxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUNuQixXQUFXLENBQUNvQixNQUFNLEdBQUcsSUFBSSxDQUFDcEIsV0FBVyxDQUFDa0IsTUFBTSxJQUFJLEdBQUc7SUFFckUsSUFBSUYsS0FBSyxHQUFHM0IsTUFBTSxDQUFDZ0MsT0FBTyxJQUFJRixHQUFHLEdBQUc5QixNQUFNLENBQUNnQyxPQUFPLEVBQUU7TUFDbEQsTUFBTUMsY0FBYyxHQUFJLENBQUNOLEtBQUssR0FBRzNCLE1BQU0sQ0FBQ2dDLE9BQU8sS0FBS0wsS0FBSyxHQUFHRyxHQUFHLENBQUMsR0FBSSxJQUFJO01BQ3hFLElBQUksQ0FBQ3BCLGVBQWUsR0FBR2pCLGdEQUFJLENBQUMsSUFBSSxDQUFDaUIsZUFBZSxFQUFFdUIsY0FBYyxFQUFFLElBQUksQ0FBQztNQUN2RVgsS0FBSyxDQUFDWSxRQUFRLENBQUMsSUFBSSxDQUFDeEIsZUFBZSxDQUFDO0lBQ3RDO0lBQ0EsS0FBSyxDQUFDVyxNQUFNLENBQUMsQ0FBQztFQUNoQjtBQUNGOzs7Ozs7OztVQzdEQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgYWN0aXZlOiBcImhvbWUtLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgd3JhcHBlcjogXCIuaG9tZV9fY29udGVudFwiLFxuICAgICAgICBzY3JvbGw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX2JhclwiKSxcbiAgICAgICAgZ2FsbGVyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpLFxuICAgICAgICBxdW90ZUltZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fbWVkaWFfX2ltYWdlXCIpLFxuICAgICAgICBxdW90ZVNlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIiksXG4gICAgICAgIHF1b3RlU3RpY2t5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlX19zdGlja3lcIiksXG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2hlcm9fX3RpdGxlXCIpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaXNTdGlja3kgPSBmYWxzZVxuICAgIHRoaXMuY3VycmVudFByb2dyZXNzID0gMFxuICAgIHRoaXMucXVvdGVCb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIGFzeW5jIHNob3codXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIGNvbnNvbGUubG9nKFwiSUNJXCIsIHRoaXMuZWxlbWVudHMudGl0bGUpXG5cbiAgICByZXR1cm4gc3VwZXIuc2hvdyh1cmwpXG4gIH1cblxuICBhc3luYyBoaWRlKHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuaGlkZSh1cmwpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgY29uc3QgdHdlZW4gPSBnc2FwLnRvKHRoaXMuZWxlbWVudHMucXVvdGVJbWcsIHtcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgZWFzZTogXCJleHBvXCIsXG4gICAgICBwYXVzZWQ6IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3Qgc3RhcnQgPSAodGhpcy5xdW90ZUJvdW5kcy50b3AgLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodCkgKiAxLjFcbiAgICBjb25zdCBlbmQgPSAodGhpcy5xdW90ZUJvdW5kcy5ib3R0b20gLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodCkgKiAxLjJcblxuICAgIGlmIChzdGFydCA8IHNjcm9sbC5jdXJyZW50ICYmIGVuZCA+IHNjcm9sbC5jdXJyZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9ICgoc3RhcnQgLSBzY3JvbGwuY3VycmVudCkgLyAoc3RhcnQgLSBlbmQpKSAqIDAuMDVcbiAgICAgIHRoaXMuY3VycmVudFByb2dyZXNzID0gbGVycCh0aGlzLmN1cnJlbnRQcm9ncmVzcywgdGFyZ2V0UHJvZ3Jlc3MsIDAuMDIpXG4gICAgICB0d2Vlbi5wcm9ncmVzcyh0aGlzLmN1cnJlbnRQcm9ncmVzcylcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGYzY2MwNTI3YmU1MDZlNTkyNzJcIikiXSwibmFtZXMiOlsiUGFnZSIsImdzYXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZWxlbWVudCIsImVsZW1lbnRzIiwid3JhcHBlciIsInNjcm9sbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVvdGVJbWciLCJxdW90ZVNlY3Rpb24iLCJxdW90ZVN0aWNreSIsInRpdGxlIiwiaXNTdGlja3kiLCJjdXJyZW50UHJvZ3Jlc3MiLCJxdW90ZUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNob3ciLCJ1cmwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwiaGlkZSIsInJlbW92ZSIsInVwZGF0ZSIsInR3ZWVuIiwidG8iLCJzY2FsZSIsImVhc2UiLCJwYXVzZWQiLCJzdGFydCIsInRvcCIsImhlaWdodCIsImVuZCIsImJvdHRvbSIsImN1cnJlbnQiLCJ0YXJnZXRQcm9ncmVzcyIsInByb2dyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==