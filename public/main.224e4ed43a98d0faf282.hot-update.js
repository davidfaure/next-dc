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
        quoteImg: document.querySelector(".home__quote__image"),
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

    const tween = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(this.elements.quoteImg, {
      scale: 0.2,
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
/******/ 	__webpack_require__.h = () => ("9ea916a151d8f72916b4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMjRlNGVkNDNhOThkMGZhZjI4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNYO0FBRXZCLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENFLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUN2REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUNRLHFCQUFxQixDQUFDLENBQUM7RUFDbkY7O0VBRUE7QUFDRjtBQUNBO0VBQ0UsTUFBTUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDZixPQUFPLENBQUNnQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNuQixPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUUvQyxPQUFPLEtBQUssQ0FBQ2UsSUFBSSxDQUFDQyxHQUFHLENBQUM7RUFDeEI7RUFFQSxNQUFNRyxJQUFJQSxDQUFDSCxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNmLE9BQU8sQ0FBQ2dCLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0lBRWxELE9BQU8sS0FBSyxDQUFDbUIsSUFBSSxDQUFDSCxHQUFHLENBQUM7RUFDeEI7RUFFQUssTUFBTUEsQ0FBQ2pCLE1BQU0sRUFBRTtJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQSxNQUFNa0IsS0FBSyxHQUFHekIsNENBQUksQ0FBQzBCLElBQUksQ0FBQyxJQUFJLENBQUNyQixRQUFRLENBQUNPLFFBQVEsRUFBRTtNQUM5Q2UsS0FBSyxFQUFFLEdBQUc7TUFDVkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ2QsV0FBVyxDQUFDZSxHQUFHLEdBQUcsSUFBSSxDQUFDZixXQUFXLENBQUNnQixNQUFNO0lBQzVELE1BQU1DLEdBQUcsR0FBRyxJQUFJLENBQUNqQixXQUFXLENBQUNrQixNQUFNLEdBQUcsSUFBSSxDQUFDbEIsV0FBVyxDQUFDZ0IsTUFBTTtJQUU3RCxJQUFJRixLQUFLLEdBQUd2QixNQUFNLENBQUM0QixPQUFPLElBQUlGLEdBQUcsR0FBRzFCLE1BQU0sQ0FBQzRCLE9BQU8sRUFBRTtNQUNsRCxNQUFNQyxRQUFRLEdBQUcsQ0FBQ04sS0FBSyxHQUFHdkIsTUFBTSxDQUFDNEIsT0FBTyxLQUFLTCxLQUFLLEdBQUdHLEdBQUcsQ0FBQztNQUN6REksT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUVGLFFBQVEsQ0FBQztNQUNoRFgsS0FBSyxDQUFDVyxRQUFRLENBQUNBLFFBQVEsQ0FBQztJQUMxQjtJQUNBLEtBQUssQ0FBQ1osTUFBTSxDQUFDLENBQUM7RUFDaEI7QUFDRjs7Ozs7Ozs7VUMvREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvUGFnZVwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgYWN0aXZlOiBcImhvbWUtLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgd3JhcHBlcjogXCIuaG9tZV9fY29udGVudFwiLFxuICAgICAgICBzY3JvbGw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX2JhclwiKSxcbiAgICAgICAgZ2FsbGVyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpLFxuICAgICAgICBxdW90ZUltZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9faW1hZ2VcIiksXG4gICAgICAgIHF1b3RlU2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKSxcbiAgICAgICAgcXVvdGVTdGlja3k6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX3N0aWNreVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmlzU3RpY2t5ID0gZmFsc2VcbiAgICB0aGlzLnF1b3RlQm91bmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBhc3luYyBzaG93KHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuc2hvdyh1cmwpXG4gIH1cblxuICBhc3luYyBoaWRlKHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuaGlkZSh1cmwpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgLy8gY29uc29sZS5sb2coXG4gICAgLy8gICBcInVwZGF0ZSBIT01FXCIsXG4gICAgLy8gICBzY3JvbGwuY3VycmVudCxcbiAgICAvLyAgIHRoaXMucXVvdGVCb3VuZHMudG9wIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHQsXG4gICAgLy8gICB0aGlzLnF1b3RlQm91bmRzLmJvdHRvbSAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0XG4gICAgLy8gKVxuXG4gICAgY29uc3QgdHdlZW4gPSBnc2FwLmZyb20odGhpcy5lbGVtZW50cy5xdW90ZUltZywge1xuICAgICAgc2NhbGU6IDAuMixcbiAgICAgIGVhc2U6IFwiZXhwb1wiLFxuICAgICAgcGF1c2VkOiB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5xdW90ZUJvdW5kcy50b3AgLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodFxuICAgIGNvbnN0IGVuZCA9IHRoaXMucXVvdGVCb3VuZHMuYm90dG9tIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHRcblxuICAgIGlmIChzdGFydCA8IHNjcm9sbC5jdXJyZW50ICYmIGVuZCA+IHNjcm9sbC5jdXJyZW50KSB7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IChzdGFydCAtIHNjcm9sbC5jdXJyZW50KSAvIChzdGFydCAtIGVuZClcbiAgICAgIGNvbnNvbGUubG9nKFwiamUgc3VpcyBkYW5zIGxhIHNlY3Rpb25cIiwgcHJvZ3Jlc3MpXG4gICAgICB0d2Vlbi5wcm9ncmVzcyhwcm9ncmVzcylcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWVhOTE2YTE1MWQ4ZjcyOTE2YjRcIikiXSwibmFtZXMiOlsiUGFnZSIsImdzYXAiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJhY3RpdmUiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ3cmFwcGVyIiwic2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdW90ZUltZyIsInF1b3RlU2VjdGlvbiIsInF1b3RlU3RpY2t5IiwiaXNTdGlja3kiLCJxdW90ZUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNob3ciLCJ1cmwiLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRlIiwicmVtb3ZlIiwidXBkYXRlIiwidHdlZW4iLCJmcm9tIiwic2NhbGUiLCJlYXNlIiwicGF1c2VkIiwic3RhcnQiLCJ0b3AiLCJoZWlnaHQiLCJlbmQiLCJib3R0b20iLCJjdXJyZW50IiwicHJvZ3Jlc3MiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==