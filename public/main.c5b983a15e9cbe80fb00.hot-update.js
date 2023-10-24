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
      console.log("show span");
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
/******/ 	__webpack_require__.h = () => ("2bd2936fc609aa3bb654")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxJQUFJLENBQUMxQixXQUFXLENBQUMyQixNQUFNLEdBQUcsSUFBSSxDQUFDM0IsV0FBVyxDQUFDeUIsTUFBTSxJQUFJLEdBQUc7SUFFckUsSUFBSUYsS0FBSyxHQUFHbEMsTUFBTSxDQUFDdUMsT0FBTyxJQUFJRixHQUFHLEdBQUdyQyxNQUFNLENBQUN1QyxPQUFPLEVBQUU7TUFDbEQsTUFBTUMsY0FBYyxHQUFJLENBQUNOLEtBQUssR0FBR2xDLE1BQU0sQ0FBQ3VDLE9BQU8sS0FBS0wsS0FBSyxHQUFHRyxHQUFHLENBQUMsR0FBSSxJQUFJO01BQ3hFLElBQUksQ0FBQzNCLGVBQWUsR0FBR2pCLGdEQUFJLENBQUMsSUFBSSxDQUFDaUIsZUFBZSxFQUFFOEIsY0FBYyxFQUFFLElBQUksQ0FBQztNQUN2RVQsS0FBSyxDQUFDVSxRQUFRLENBQUMsSUFBSSxDQUFDL0IsZUFBZSxDQUFDO0lBQ3RDO0lBQ0EsS0FBSyxDQUFDb0IsTUFBTSxDQUFDLENBQUM7RUFDaEI7QUFDRjs7Ozs7Ozs7VUM5RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFjdGl2ZTogXCJob21lLS1hY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIGVsZW1lbnQ6IFwiLmhvbWVcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHdyYXBwZXI6IFwiLmhvbWVfX2NvbnRlbnRcIixcbiAgICAgICAgc2Nyb2xsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19iYXJcIiksXG4gICAgICAgIGdhbGxlcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKSxcbiAgICAgICAgcXVvdGVJbWc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX21lZGlhX19pbWFnZVwiKSxcbiAgICAgICAgcXVvdGVTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLFxuICAgICAgICBxdW90ZVN0aWNreTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fc3RpY2t5XCIpLFxuICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19oZXJvX190aXRsZVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmlzU3RpY2t5ID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IDBcbiAgICB0aGlzLnF1b3RlQm91bmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBhc3luYyBzaG93KHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICB0aGlzLnNwYW5zID0gWy4uLnRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKV1cblxuICAgIGVhY2godGhpcy5zcGFucywgc3BhbiA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInNob3cgc3BhblwiKVxuICAgICAgZ3NhcC50byhcbiAgICAgICAgc3BhbixcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMS40LFxuICAgICAgICAgIHN0YWdnZXI6IDAuMDYsXG4gICAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICAgIHk6IFwiMCVcIixcbiAgICAgICAgICBkZWxheTogMC41XG4gICAgICAgIH0sXG4gICAgICAgIDBcbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHN1cGVyLnNob3codXJsKVxuICB9XG5cbiAgYXN5bmMgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKVxuXG4gICAgcmV0dXJuIHN1cGVyLmhpZGUodXJsKVxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIGNvbnN0IHR3ZWVuID0gZ3NhcC50byh0aGlzLmVsZW1lbnRzLnF1b3RlSW1nLCB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIGVhc2U6IFwiZXhwb1wiLFxuICAgICAgcGF1c2VkOiB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMucXVvdGVCb3VuZHMudG9wIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHQpICogMS4xXG4gICAgY29uc3QgZW5kID0gKHRoaXMucXVvdGVCb3VuZHMuYm90dG9tIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHQpICogMS4yXG5cbiAgICBpZiAoc3RhcnQgPCBzY3JvbGwuY3VycmVudCAmJiBlbmQgPiBzY3JvbGwuY3VycmVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0UHJvZ3Jlc3MgPSAoKHN0YXJ0IC0gc2Nyb2xsLmN1cnJlbnQpIC8gKHN0YXJ0IC0gZW5kKSkgKiAwLjA1XG4gICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IGxlcnAodGhpcy5jdXJyZW50UHJvZ3Jlc3MsIHRhcmdldFByb2dyZXNzLCAwLjAyKVxuICAgICAgdHdlZW4ucHJvZ3Jlc3ModGhpcy5jdXJyZW50UHJvZ3Jlc3MpXG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZSgpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJiZDI5MzZmYzYwOWFhM2JiNjU0XCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJnc2FwIiwiZWFjaCIsImxlcnAiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJhY3RpdmUiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ3cmFwcGVyIiwic2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdW90ZUltZyIsInF1b3RlU2VjdGlvbiIsInF1b3RlU3RpY2t5IiwidGl0bGUiLCJpc1N0aWNreSIsImN1cnJlbnRQcm9ncmVzcyIsInF1b3RlQm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2hvdyIsInVybCIsImNsYXNzTGlzdCIsImFkZCIsInNwYW5zIiwic3BhbiIsImNvbnNvbGUiLCJsb2ciLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2UiLCJ5IiwiZGVsYXkiLCJoaWRlIiwicmVtb3ZlIiwidXBkYXRlIiwidHdlZW4iLCJzY2FsZSIsInBhdXNlZCIsInN0YXJ0IiwidG9wIiwiaGVpZ2h0IiwiZW5kIiwiYm90dG9tIiwiY3VycmVudCIsInRhcmdldFByb2dyZXNzIiwicHJvZ3Jlc3MiXSwic291cmNlUm9vdCI6IiJ9