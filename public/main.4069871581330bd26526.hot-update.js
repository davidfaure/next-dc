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

  // update(scroll) {
  //   console.log("update HOME", scroll)
  //   super.update()
  // }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb48ca601249697f8cca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MDY5ODcxNTgxMzMwYmQyNjUyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBRWxDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENDLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUN2REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztFQUN2Qjs7RUFFQTtBQUNGO0FBQ0E7RUFDRSxNQUFNQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFFL0MsT0FBTyxLQUFLLENBQUNhLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUEsTUFBTUcsSUFBSUEsQ0FBQ0gsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDYixPQUFPLENBQUNjLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ25CLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0lBRWxELE9BQU8sS0FBSyxDQUFDaUIsSUFBSSxDQUFDSCxHQUFHLENBQUM7RUFDeEI7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7QUFDRjs7Ozs7Ozs7VUN6Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcImNvbXBvbmVudHMvUGFnZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgYWN0aXZlOiBcImhvbWUtLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgd3JhcHBlcjogXCIuaG9tZV9fY29udGVudFwiLFxuICAgICAgICBzY3JvbGw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX2JhclwiKSxcbiAgICAgICAgZ2FsbGVyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpLFxuICAgICAgICBxdW90ZUltZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9faW1hZ2VcIiksXG4gICAgICAgIHF1b3RlU2VjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKSxcbiAgICAgICAgcXVvdGVTdGlja3k6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX3N0aWNreVwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmlzU3RpY2t5ID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgYXN5bmMgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKVxuXG4gICAgcmV0dXJuIHN1cGVyLnNob3codXJsKVxuICB9XG5cbiAgYXN5bmMgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKVxuXG4gICAgcmV0dXJuIHN1cGVyLmhpZGUodXJsKVxuICB9XG5cbiAgLy8gdXBkYXRlKHNjcm9sbCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwidXBkYXRlIEhPTUVcIiwgc2Nyb2xsKVxuICAvLyAgIHN1cGVyLnVwZGF0ZSgpXG4gIC8vIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiNDhjYTYwMTI0OTY5N2Y4Y2NhXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJhY3RpdmUiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ3cmFwcGVyIiwic2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdW90ZUltZyIsInF1b3RlU2VjdGlvbiIsInF1b3RlU3RpY2t5IiwiaXNTdGlja3kiLCJzaG93IiwidXJsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZSIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=