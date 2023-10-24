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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");




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
    this.spans = [...this.elements.title.querySelectorAll("span span")];
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.each)(this.spans, span => {
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(span, {
        autoAlpha: 1,
        duration: 1.4,
        stagger: 0.06,
        ease: "expo.out",
        y: "0%",
        delay: 0.5
      }, 0);
    });
    return super.show(url);
  }
  async hide(url) {
    this.element.classList.remove(this.classes.active);
    return super.hide(url);
  }
  update(scroll) {
    const tween = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(this.elements.quoteImg, {
      scale: 1,
      ease: "expo",
      paused: true
    });
    const start = (this.quoteBounds.top - this.quoteBounds.height) * 1.1;
    const end = (this.quoteBounds.bottom - this.quoteBounds.height) * 1.2;
    if (start < scroll.current && end > scroll.current) {
      const targetProgress = (start - scroll.current) / (start - end) * 0.05;
      this.currentProgress = (0,utils_math__WEBPACK_IMPORTED_MODULE_2__.lerp)(this.currentProgress, targetProgress, 0.02);
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
/******/ 	__webpack_require__.h = () => ("c5b983a15e9cbe80fb00")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDekIsV0FBVyxDQUFDdUIsTUFBTSxJQUFJLEdBQUc7SUFFckUsSUFBSUYsS0FBSyxHQUFHaEMsTUFBTSxDQUFDcUMsT0FBTyxJQUFJRixHQUFHLEdBQUduQyxNQUFNLENBQUNxQyxPQUFPLEVBQUU7TUFDbEQsTUFBTUMsY0FBYyxHQUFJLENBQUNOLEtBQUssR0FBR2hDLE1BQU0sQ0FBQ3FDLE9BQU8sS0FBS0wsS0FBSyxHQUFHRyxHQUFHLENBQUMsR0FBSSxJQUFJO01BQ3hFLElBQUksQ0FBQ3pCLGVBQWUsR0FBR2pCLGdEQUFJLENBQUMsSUFBSSxDQUFDaUIsZUFBZSxFQUFFNEIsY0FBYyxFQUFFLElBQUksQ0FBQztNQUN2RVQsS0FBSyxDQUFDVSxRQUFRLENBQUMsSUFBSSxDQUFDN0IsZUFBZSxDQUFDO0lBQ3RDO0lBQ0EsS0FBSyxDQUFDa0IsTUFBTSxDQUFDLENBQUM7RUFDaEI7QUFDRjs7Ozs7Ozs7VUM3RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFjdGl2ZTogXCJob21lLS1hY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIGVsZW1lbnQ6IFwiLmhvbWVcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHdyYXBwZXI6IFwiLmhvbWVfX2NvbnRlbnRcIixcbiAgICAgICAgc2Nyb2xsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19iYXJcIiksXG4gICAgICAgIGdhbGxlcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKSxcbiAgICAgICAgcXVvdGVJbWc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX21lZGlhX19pbWFnZVwiKSxcbiAgICAgICAgcXVvdGVTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLFxuICAgICAgICBxdW90ZVN0aWNreTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fc3RpY2t5XCIpLFxuICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19oZXJvX190aXRsZVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmlzU3RpY2t5ID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IDBcbiAgICB0aGlzLnF1b3RlQm91bmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBhc3luYyBzaG93KHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICB0aGlzLnNwYW5zID0gWy4uLnRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKV1cblxuICAgIGVhY2godGhpcy5zcGFucywgc3BhbiA9PiB7XG4gICAgICBnc2FwLnRvKFxuICAgICAgICBzcGFuLFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICAgIGR1cmF0aW9uOiAxLjQsXG4gICAgICAgICAgc3RhZ2dlcjogMC4wNixcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgICAgeTogXCIwJVwiLFxuICAgICAgICAgIGRlbGF5OiAwLjVcbiAgICAgICAgfSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc3VwZXIuc2hvdyh1cmwpXG4gIH1cblxuICBhc3luYyBoaWRlKHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuaGlkZSh1cmwpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgY29uc3QgdHdlZW4gPSBnc2FwLnRvKHRoaXMuZWxlbWVudHMucXVvdGVJbWcsIHtcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgZWFzZTogXCJleHBvXCIsXG4gICAgICBwYXVzZWQ6IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3Qgc3RhcnQgPSAodGhpcy5xdW90ZUJvdW5kcy50b3AgLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodCkgKiAxLjFcbiAgICBjb25zdCBlbmQgPSAodGhpcy5xdW90ZUJvdW5kcy5ib3R0b20gLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodCkgKiAxLjJcblxuICAgIGlmIChzdGFydCA8IHNjcm9sbC5jdXJyZW50ICYmIGVuZCA+IHNjcm9sbC5jdXJyZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXRQcm9ncmVzcyA9ICgoc3RhcnQgLSBzY3JvbGwuY3VycmVudCkgLyAoc3RhcnQgLSBlbmQpKSAqIDAuMDVcbiAgICAgIHRoaXMuY3VycmVudFByb2dyZXNzID0gbGVycCh0aGlzLmN1cnJlbnRQcm9ncmVzcywgdGFyZ2V0UHJvZ3Jlc3MsIDAuMDIpXG4gICAgICB0d2Vlbi5wcm9ncmVzcyh0aGlzLmN1cnJlbnRQcm9ncmVzcylcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzViOTgzYTE1ZTljYmU4MGZiMDBcIikiXSwibmFtZXMiOlsiUGFnZSIsImdzYXAiLCJlYWNoIiwibGVycCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsImFjdGl2ZSIsImVsZW1lbnQiLCJlbGVtZW50cyIsIndyYXBwZXIiLCJzY3JvbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5IiwicXVlcnlTZWxlY3RvckFsbCIsInF1b3RlSW1nIiwicXVvdGVTZWN0aW9uIiwicXVvdGVTdGlja3kiLCJ0aXRsZSIsImlzU3RpY2t5IiwiY3VycmVudFByb2dyZXNzIiwicXVvdGVCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzaG93IiwidXJsIiwiY2xhc3NMaXN0IiwiYWRkIiwic3BhbnMiLCJzcGFuIiwidG8iLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsInN0YWdnZXIiLCJlYXNlIiwieSIsImRlbGF5IiwiaGlkZSIsInJlbW92ZSIsInVwZGF0ZSIsInR3ZWVuIiwic2NhbGUiLCJwYXVzZWQiLCJzdGFydCIsInRvcCIsImhlaWdodCIsImVuZCIsImJvdHRvbSIsImN1cnJlbnQiLCJ0YXJnZXRQcm9ncmVzcyIsInByb2dyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==