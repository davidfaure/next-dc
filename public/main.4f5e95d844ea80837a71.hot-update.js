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
  update() {
    super.update();
    const quoteBounds = this.elements.quoteSection.getBoundingClientRect();
    if (quoteBounds.top <= 0 && quoteBounds.bottom >= window.innerHeight && !this.isSticky) {
      // The home__quote section is in view
      console.log("The quote section is in view");
      this.isSticky = true;
      this.elements.quoteSticky.style.position = "fixed";
      this.elements.quoteSticky.style.top = "0"; // adjust as needed
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("35f32ca92783b002c67b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZjVlOTVkODQ0ZWE4MDgzN2E3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBRWxDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENDLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUN2REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztFQUN2Qjs7RUFFQTtBQUNGO0FBQ0E7RUFDRSxNQUFNQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFFL0MsT0FBTyxLQUFLLENBQUNhLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUEsTUFBTUcsSUFBSUEsQ0FBQ0gsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDYixPQUFPLENBQUNjLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ25CLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0lBRWxELE9BQU8sS0FBSyxDQUFDaUIsSUFBSSxDQUFDSCxHQUFHLENBQUM7RUFDeEI7RUFFQUssTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsS0FBSyxDQUFDQSxNQUFNLENBQUMsQ0FBQztJQUVkLE1BQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNsQixRQUFRLENBQUNRLFlBQVksQ0FBQ1cscUJBQXFCLENBQUMsQ0FBQztJQUV0RSxJQUFJRCxXQUFXLENBQUNFLEdBQUcsSUFBSSxDQUFDLElBQUlGLFdBQVcsQ0FBQ0csTUFBTSxJQUFJQyxNQUFNLENBQUNDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQ2IsUUFBUSxFQUFFO01BQ3RGO01BQ0FjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO01BQzNDLElBQUksQ0FBQ2YsUUFBUSxHQUFHLElBQUk7TUFDcEIsSUFBSSxDQUFDVixRQUFRLENBQUNTLFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE9BQU87TUFDbEQsSUFBSSxDQUFDM0IsUUFBUSxDQUFDUyxXQUFXLENBQUNpQixLQUFLLENBQUNOLEdBQUcsR0FBRyxHQUFHLEVBQUM7SUFDNUM7RUFDRjtBQUNGOzs7Ozs7OztVQ2xEQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBhY3RpdmU6IFwiaG9tZS0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB3cmFwcGVyOiBcIi5ob21lX19jb250ZW50XCIsXG4gICAgICAgIHNjcm9sbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fYmFyXCIpLFxuICAgICAgICBnYWxsZXJ5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIiksXG4gICAgICAgIHF1b3RlSW1nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlX19pbWFnZVwiKSxcbiAgICAgICAgcXVvdGVTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLFxuICAgICAgICBxdW90ZVN0aWNreTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fc3RpY2t5XCIpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaXNTdGlja3kgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBhc3luYyBzaG93KHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuc2hvdyh1cmwpXG4gIH1cblxuICBhc3luYyBoaWRlKHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuaGlkZSh1cmwpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgc3VwZXIudXBkYXRlKClcblxuICAgIGNvbnN0IHF1b3RlQm91bmRzID0gdGhpcy5lbGVtZW50cy5xdW90ZVNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGlmIChxdW90ZUJvdW5kcy50b3AgPD0gMCAmJiBxdW90ZUJvdW5kcy5ib3R0b20gPj0gd2luZG93LmlubmVySGVpZ2h0ICYmICF0aGlzLmlzU3RpY2t5KSB7XG4gICAgICAvLyBUaGUgaG9tZV9fcXVvdGUgc2VjdGlvbiBpcyBpbiB2aWV3XG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBxdW90ZSBzZWN0aW9uIGlzIGluIHZpZXdcIilcbiAgICAgIHRoaXMuaXNTdGlja3kgPSB0cnVlXG4gICAgICB0aGlzLmVsZW1lbnRzLnF1b3RlU3RpY2t5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiXG4gICAgICB0aGlzLmVsZW1lbnRzLnF1b3RlU3RpY2t5LnN0eWxlLnRvcCA9IFwiMFwiIC8vIGFkanVzdCBhcyBuZWVkZWRcbiAgICB9XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM1ZjMyY2E5Mjc4M2IwMDJjNjdiXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJhY3RpdmUiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ3cmFwcGVyIiwic2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdW90ZUltZyIsInF1b3RlU2VjdGlvbiIsInF1b3RlU3RpY2t5IiwiaXNTdGlja3kiLCJzaG93IiwidXJsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZSIsInJlbW92ZSIsInVwZGF0ZSIsInF1b3RlQm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=