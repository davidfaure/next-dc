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
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].fromTo(span, {
        autoAlpha: 0,
        y: "100%"
      }, {
        autoAlpha: 1,
        duration: 1.4,
        stagger: 0.06,
        ease: "expo.out",
        y: "0%"
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
/******/ 	__webpack_require__.h = () => ("37aabad56386a286d971")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDeEIsV0FBVyxDQUFDeUIsTUFBTSxHQUFHLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQ3VCLE1BQU0sSUFBSSxHQUFHO0lBRXJFLElBQUlGLEtBQUssR0FBR2hDLE1BQU0sQ0FBQ3FDLE9BQU8sSUFBSUYsR0FBRyxHQUFHbkMsTUFBTSxDQUFDcUMsT0FBTyxFQUFFO01BQ2xELE1BQU1DLGNBQWMsR0FBSSxDQUFDTixLQUFLLEdBQUdoQyxNQUFNLENBQUNxQyxPQUFPLEtBQUtMLEtBQUssR0FBR0csR0FBRyxDQUFDLEdBQUksSUFBSTtNQUN4RSxJQUFJLENBQUN6QixlQUFlLEdBQUdqQixnREFBSSxDQUFDLElBQUksQ0FBQ2lCLGVBQWUsRUFBRTRCLGNBQWMsRUFBRSxJQUFJLENBQUM7TUFDdkVWLEtBQUssQ0FBQ1csUUFBUSxDQUFDLElBQUksQ0FBQzdCLGVBQWUsQ0FBQztJQUN0QztJQUNBLEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQyxDQUFDO0VBQ2hCO0FBQ0Y7Ozs7Ozs7O1VDaEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9wYWdlcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjb21wb25lbnRzL1BhZ2VcIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCJ1dGlscy9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBhY3RpdmU6IFwiaG9tZS0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB3cmFwcGVyOiBcIi5ob21lX19jb250ZW50XCIsXG4gICAgICAgIHNjcm9sbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fYmFyXCIpLFxuICAgICAgICBnYWxsZXJ5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIiksXG4gICAgICAgIHF1b3RlSW1nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlX19tZWRpYV9faW1hZ2VcIiksXG4gICAgICAgIHF1b3RlU2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKSxcbiAgICAgICAgcXVvdGVTdGlja3k6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX3N0aWNreVwiKSxcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9faGVyb19fdGl0bGVcIilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pc1N0aWNreSA9IGZhbHNlXG4gICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSAwXG4gICAgdGhpcy5xdW90ZUJvdW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgYXN5bmMgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKVxuXG4gICAgdGhpcy5zcGFucyA9IFsuLi50aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIildXG5cbiAgICBlYWNoKHRoaXMuc3BhbnMsIHNwYW4gPT4ge1xuICAgICAgZ3NhcC5mcm9tVG8oXG4gICAgICAgIHNwYW4sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgICAgeTogXCIxMDAlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMS40LFxuICAgICAgICAgIHN0YWdnZXI6IDAuMDYsXG4gICAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICAgIHk6IFwiMCVcIlxuICAgICAgICB9LFxuICAgICAgICAwXG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiBzdXBlci5zaG93KHVybClcbiAgfVxuXG4gIGFzeW5jIGhpZGUodXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIHJldHVybiBzdXBlci5oaWRlKHVybClcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBjb25zdCB0d2VlbiA9IGdzYXAudG8odGhpcy5lbGVtZW50cy5xdW90ZUltZywge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICBlYXNlOiBcImV4cG9cIixcbiAgICAgIHBhdXNlZDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBzdGFydCA9ICh0aGlzLnF1b3RlQm91bmRzLnRvcCAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0KSAqIDEuMVxuICAgIGNvbnN0IGVuZCA9ICh0aGlzLnF1b3RlQm91bmRzLmJvdHRvbSAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0KSAqIDEuMlxuXG4gICAgaWYgKHN0YXJ0IDwgc2Nyb2xsLmN1cnJlbnQgJiYgZW5kID4gc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldFByb2dyZXNzID0gKChzdGFydCAtIHNjcm9sbC5jdXJyZW50KSAvIChzdGFydCAtIGVuZCkpICogMC4wNVxuICAgICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSBsZXJwKHRoaXMuY3VycmVudFByb2dyZXNzLCB0YXJnZXRQcm9ncmVzcywgMC4wMilcbiAgICAgIHR3ZWVuLnByb2dyZXNzKHRoaXMuY3VycmVudFByb2dyZXNzKVxuICAgIH1cbiAgICBzdXBlci51cGRhdGUoKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzN2FhYmFkNTYzODZhMjg2ZDk3MVwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiZ3NhcCIsImVhY2giLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZWxlbWVudCIsImVsZW1lbnRzIiwid3JhcHBlciIsInNjcm9sbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVvdGVJbWciLCJxdW90ZVNlY3Rpb24iLCJxdW90ZVN0aWNreSIsInRpdGxlIiwiaXNTdGlja3kiLCJjdXJyZW50UHJvZ3Jlc3MiLCJxdW90ZUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNob3ciLCJ1cmwiLCJjbGFzc0xpc3QiLCJhZGQiLCJzcGFucyIsInNwYW4iLCJmcm9tVG8iLCJhdXRvQWxwaGEiLCJ5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiZWFzZSIsImhpZGUiLCJyZW1vdmUiLCJ1cGRhdGUiLCJ0d2VlbiIsInRvIiwic2NhbGUiLCJwYXVzZWQiLCJzdGFydCIsInRvcCIsImhlaWdodCIsImVuZCIsImJvdHRvbSIsImN1cnJlbnQiLCJ0YXJnZXRQcm9ncmVzcyIsInByb2dyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==