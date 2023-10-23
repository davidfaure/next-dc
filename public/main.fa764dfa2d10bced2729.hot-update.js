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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


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

    const tween = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.elements.quoteImg, {
      scale: 1,
      ease: "expo",
      paused: true
    });
    const start = this.quoteBounds.top - this.quoteBounds.height;
    const end = this.quoteBounds.bottom - this.quoteBounds.height;
    if (start < scroll.current && end > scroll.current) {
      const progress = (start - scroll.current) / (start - end);
      console.log("je suis dans la section", progress);
      tween.progress(progress);
    }
    super.update();
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a389b269fd892bb2fc25")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYTc2NGRmYTJkMTBiY2VkMjcyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNYO0FBRXZCLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENFLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztRQUM5REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUNRLHFCQUFxQixDQUFDLENBQUM7RUFDbkY7O0VBRUE7QUFDRjtBQUNBO0VBQ0UsTUFBTUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDZixPQUFPLENBQUNnQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNuQixPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUUvQyxPQUFPLEtBQUssQ0FBQ2UsSUFBSSxDQUFDQyxHQUFHLENBQUM7RUFDeEI7RUFFQSxNQUFNRyxJQUFJQSxDQUFDSCxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNmLE9BQU8sQ0FBQ2dCLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0lBRWxELE9BQU8sS0FBSyxDQUFDbUIsSUFBSSxDQUFDSCxHQUFHLENBQUM7RUFDeEI7RUFFQUssTUFBTUEsQ0FBQ2pCLE1BQU0sRUFBRTtJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQSxNQUFNa0IsS0FBSyxHQUFHekIsNENBQUksQ0FBQzBCLEVBQUUsQ0FBQyxJQUFJLENBQUNyQixRQUFRLENBQUNPLFFBQVEsRUFBRTtNQUM1Q2UsS0FBSyxFQUFFLENBQUM7TUFDUkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ2QsV0FBVyxDQUFDZSxHQUFHLEdBQUcsSUFBSSxDQUFDZixXQUFXLENBQUNnQixNQUFNO0lBQzVELE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNqQixXQUFXLENBQUNrQixNQUFNLEdBQUcsSUFBSSxDQUFDbEIsV0FBVyxDQUFDZ0IsTUFBTTtJQUU3RCxJQUFJRixLQUFLLEdBQUd2QixNQUFNLENBQUM0QixPQUFPLElBQUlGLEdBQUcsR0FBRzFCLE1BQU0sQ0FBQzRCLE9BQU8sRUFBRTtNQUNsRCxNQUFNQyxRQUFRLEdBQUcsQ0FBQ04sS0FBSyxHQUFHdkIsTUFBTSxDQUFDNEIsT0FBTyxLQUFLTCxLQUFLLEdBQUdHLEdBQUcsQ0FBQztNQUN6REksT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUVGLFFBQVEsQ0FBQztNQUNoRFgsS0FBSyxDQUFDVyxRQUFRLENBQUNBLFFBQVEsQ0FBQztJQUMxQjtJQUNBLEtBQUssQ0FBQ1osTUFBTSxDQUFDLENBQUM7RUFDaEI7QUFDRjs7Ozs7Ozs7VUMvREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgYWN0aXZlOiBcImhvbWUtLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgd3JhcHBlcjogXCIuaG9tZV9fY29udGVudFwiLFxuICAgICAgICBzY3JvbGw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX2JhclwiKSxcbiAgICAgICAgZ2FsbGVyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpLFxuICAgICAgICBxdW90ZUltZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fbWVkaWFfX2ltYWdlXCIpLFxuICAgICAgICBxdW90ZVNlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIiksXG4gICAgICAgIHF1b3RlU3RpY2t5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlX19zdGlja3lcIilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pc1N0aWNreSA9IGZhbHNlXG4gICAgdGhpcy5xdW90ZUJvdW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgYXN5bmMgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKVxuXG4gICAgcmV0dXJuIHN1cGVyLnNob3codXJsKVxuICB9XG5cbiAgYXN5bmMgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKVxuXG4gICAgcmV0dXJuIHN1cGVyLmhpZGUodXJsKVxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFxuICAgIC8vICAgXCJ1cGRhdGUgSE9NRVwiLFxuICAgIC8vICAgc2Nyb2xsLmN1cnJlbnQsXG4gICAgLy8gICB0aGlzLnF1b3RlQm91bmRzLnRvcCAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0LFxuICAgIC8vICAgdGhpcy5xdW90ZUJvdW5kcy5ib3R0b20gLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodFxuICAgIC8vIClcblxuICAgIGNvbnN0IHR3ZWVuID0gZ3NhcC50byh0aGlzLmVsZW1lbnRzLnF1b3RlSW1nLCB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIGVhc2U6IFwiZXhwb1wiLFxuICAgICAgcGF1c2VkOiB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5xdW90ZUJvdW5kcy50b3AgLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodFxuICAgIGNvbnN0IGVuZCA9IHRoaXMucXVvdGVCb3VuZHMuYm90dG9tIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHRcblxuICAgIGlmIChzdGFydCA8IHNjcm9sbC5jdXJyZW50ICYmIGVuZCA+IHNjcm9sbC5jdXJyZW50KSB7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IChzdGFydCAtIHNjcm9sbC5jdXJyZW50KSAvIChzdGFydCAtIGVuZClcbiAgICAgIGNvbnNvbGUubG9nKFwiamUgc3VpcyBkYW5zIGxhIHNlY3Rpb25cIiwgcHJvZ3Jlc3MpXG4gICAgICB0d2Vlbi5wcm9ncmVzcyhwcm9ncmVzcylcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTM4OWIyNjlmZDg5MmJiMmZjMjVcIikiXSwibmFtZXMiOlsiUGFnZSIsImdzYXAiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJhY3RpdmUiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ3cmFwcGVyIiwic2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdW90ZUltZyIsInF1b3RlU2VjdGlvbiIsInF1b3RlU3RpY2t5IiwiaXNTdGlja3kiLCJxdW90ZUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNob3ciLCJ1cmwiLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRlIiwicmVtb3ZlIiwidXBkYXRlIiwidHdlZW4iLCJ0byIsInNjYWxlIiwiZWFzZSIsInBhdXNlZCIsInN0YXJ0IiwidG9wIiwiaGVpZ2h0IiwiZW5kIiwiYm90dG9tIiwiY3VycmVudCIsInByb2dyZXNzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=