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
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 1
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.each)(this.spans, span => {
      console.log("show span");
      this.timelineIn.to(span, {
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
/******/ 	__webpack_require__.h = () => ("dc3072d6214118595e99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ3pCLFdBQVcsQ0FBQzBCLEdBQUcsR0FBRyxJQUFJLENBQUMxQixXQUFXLENBQUMyQixNQUFNLElBQUksR0FBRztJQUNwRSxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM1QixXQUFXLENBQUM2QixNQUFNLEdBQUcsSUFBSSxDQUFDN0IsV0FBVyxDQUFDMkIsTUFBTSxJQUFJLEdBQUc7SUFFckUsSUFBSUYsS0FBSyxHQUFHcEMsTUFBTSxDQUFDeUMsT0FBTyxJQUFJRixHQUFHLEdBQUd2QyxNQUFNLENBQUN5QyxPQUFPLEVBQUU7TUFDbEQsTUFBTUMsY0FBYyxHQUFJLENBQUNOLEtBQUssR0FBR3BDLE1BQU0sQ0FBQ3lDLE9BQU8sS0FBS0wsS0FBSyxHQUFHRyxHQUFHLENBQUMsR0FBSSxJQUFJO01BQ3hFLElBQUksQ0FBQzdCLGVBQWUsR0FBR2pCLGdEQUFJLENBQUMsSUFBSSxDQUFDaUIsZUFBZSxFQUFFZ0MsY0FBYyxFQUFFLElBQUksQ0FBQztNQUN2RVQsS0FBSyxDQUFDVSxRQUFRLENBQUMsSUFBSSxDQUFDakMsZUFBZSxDQUFDO0lBQ3RDO0lBQ0EsS0FBSyxDQUFDc0IsTUFBTSxDQUFDLENBQUM7RUFDaEI7QUFDRjs7Ozs7Ozs7VUNoRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFjdGl2ZTogXCJob21lLS1hY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIGVsZW1lbnQ6IFwiLmhvbWVcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHdyYXBwZXI6IFwiLmhvbWVfX2NvbnRlbnRcIixcbiAgICAgICAgc2Nyb2xsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19iYXJcIiksXG4gICAgICAgIGdhbGxlcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKSxcbiAgICAgICAgcXVvdGVJbWc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX21lZGlhX19pbWFnZVwiKSxcbiAgICAgICAgcXVvdGVTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLFxuICAgICAgICBxdW90ZVN0aWNreTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fc3RpY2t5XCIpLFxuICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19oZXJvX190aXRsZVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmlzU3RpY2t5ID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IDBcbiAgICB0aGlzLnF1b3RlQm91bmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBhc3luYyBzaG93KHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICB0aGlzLnNwYW5zID0gWy4uLnRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKV1cblxuICAgIHRoaXMudGltZWxpbmVJbiA9IGdzYXAudGltZWxpbmUoeyBkZWxheTogMSB9KVxuXG4gICAgZWFjaCh0aGlzLnNwYW5zLCBzcGFuID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBzcGFuXCIpXG4gICAgICB0aGlzLnRpbWVsaW5lSW4udG8oXG4gICAgICAgIHNwYW4sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgZHVyYXRpb246IDEuNCxcbiAgICAgICAgICBzdGFnZ2VyOiAwLjA2LFxuICAgICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgICB5OiBcIjAlXCIsXG4gICAgICAgICAgZGVsYXk6IDAuNVxuICAgICAgICB9LFxuICAgICAgICAwXG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBzdXBlci5zaG93KHVybClcbiAgfVxuXG4gIGFzeW5jIGhpZGUodXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIHJldHVybiBzdXBlci5oaWRlKHVybClcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBjb25zdCB0d2VlbiA9IGdzYXAudG8odGhpcy5lbGVtZW50cy5xdW90ZUltZywge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgIHBhdXNlZDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBzdGFydCA9ICh0aGlzLnF1b3RlQm91bmRzLnRvcCAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0KSAqIDEuMVxuICAgIGNvbnN0IGVuZCA9ICh0aGlzLnF1b3RlQm91bmRzLmJvdHRvbSAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0KSAqIDEuMlxuXG4gICAgaWYgKHN0YXJ0IDwgc2Nyb2xsLmN1cnJlbnQgJiYgZW5kID4gc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldFByb2dyZXNzID0gKChzdGFydCAtIHNjcm9sbC5jdXJyZW50KSAvIChzdGFydCAtIGVuZCkpICogMC4wNVxuICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBsZXJwKHRoaXMuY3VycmVudFByb2dyZXNzLCB0YXJnZXRQcm9ncmVzcywgMC4wMilcbiAgICAgIHR3ZWVuLnByb2dyZXNzKHRoaXMuY3VycmVudFByb2dyZXNzKVxuICAgIH1cbiAgICBzdXBlci51cGRhdGUoKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYzMwNzJkNjIxNDExODU5NWU5OVwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiZ3NhcCIsImVhY2giLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZWxlbWVudCIsImVsZW1lbnRzIiwid3JhcHBlciIsInNjcm9sbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVvdGVJbWciLCJxdW90ZVNlY3Rpb24iLCJxdW90ZVN0aWNreSIsInRpdGxlIiwiaXNTdGlja3kiLCJjdXJyZW50UHJvZ3Jlc3MiLCJxdW90ZUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNob3ciLCJ1cmwiLCJjbGFzc0xpc3QiLCJhZGQiLCJzcGFucyIsInRpbWVsaW5lSW4iLCJ0aW1lbGluZSIsImRlbGF5Iiwic3BhbiIsImNvbnNvbGUiLCJsb2ciLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2UiLCJ5IiwiaGlkZSIsInJlbW92ZSIsInVwZGF0ZSIsInR3ZWVuIiwic2NhbGUiLCJwYXVzZWQiLCJzdGFydCIsInRvcCIsImhlaWdodCIsImVuZCIsImJvdHRvbSIsImN1cnJlbnQiLCJ0YXJnZXRQcm9ncmVzcyIsInByb2dyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==