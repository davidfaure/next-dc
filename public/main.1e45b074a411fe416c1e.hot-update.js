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
    console.log("update HOME", scroll.current, this.quoteBounds.top - this.quoteBounds.height, this.quoteBounds.bottom - this.quoteBounds.height);
    // if (this.quoteBounds.top < this.scroll.current)
    super.update();
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("36eb0b5d241dc6880458")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZTQ1YjA3NGE0MTFmZTQxNmMxZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBRWxDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENDLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUN2REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBR1IsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUNRLHFCQUFxQixDQUFDLENBQUM7RUFDbkY7O0VBRUE7QUFDRjtBQUNBO0VBQ0UsTUFBTUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDZixPQUFPLENBQUNnQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNuQixPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUUvQyxPQUFPLEtBQUssQ0FBQ2UsSUFBSSxDQUFDQyxHQUFHLENBQUM7RUFDeEI7RUFFQSxNQUFNRyxJQUFJQSxDQUFDSCxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNmLE9BQU8sQ0FBQ2dCLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0lBRWxELE9BQU8sS0FBSyxDQUFDbUIsSUFBSSxDQUFDSCxHQUFHLENBQUM7RUFDeEI7RUFFQUssTUFBTUEsQ0FBQ2pCLE1BQU0sRUFBRTtJQUNia0IsT0FBTyxDQUFDQyxHQUFHLENBQ1QsYUFBYSxFQUNibkIsTUFBTSxDQUFDb0IsT0FBTyxFQUNkLElBQUksQ0FBQ1gsV0FBVyxDQUFDWSxHQUFHLEdBQUcsSUFBSSxDQUFDWixXQUFXLENBQUNhLE1BQU0sRUFDOUMsSUFBSSxDQUFDYixXQUFXLENBQUNjLE1BQU0sR0FBRyxJQUFJLENBQUNkLFdBQVcsQ0FBQ2EsTUFDN0MsQ0FBQztJQUNEO0lBQ0EsS0FBSyxDQUFDTCxNQUFNLENBQUMsQ0FBQztFQUNoQjtBQUNGOzs7Ozs7OztVQ2hEQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBhY3RpdmU6IFwiaG9tZS0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB3cmFwcGVyOiBcIi5ob21lX19jb250ZW50XCIsXG4gICAgICAgIHNjcm9sbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fYmFyXCIpLFxuICAgICAgICBnYWxsZXJ5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIiksXG4gICAgICAgIHF1b3RlSW1nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlX19pbWFnZVwiKSxcbiAgICAgICAgcXVvdGVTZWN0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLFxuICAgICAgICBxdW90ZVN0aWNreTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fc3RpY2t5XCIpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaXNTdGlja3kgPSBmYWxzZVxuICAgIHRoaXMucXVvdGVCb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIGFzeW5jIHNob3codXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIHJldHVybiBzdXBlci5zaG93KHVybClcbiAgfVxuXG4gIGFzeW5jIGhpZGUodXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIHJldHVybiBzdXBlci5oaWRlKHVybClcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwidXBkYXRlIEhPTUVcIixcbiAgICAgIHNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5xdW90ZUJvdW5kcy50b3AgLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodCxcbiAgICAgIHRoaXMucXVvdGVCb3VuZHMuYm90dG9tIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHRcbiAgICApXG4gICAgLy8gaWYgKHRoaXMucXVvdGVCb3VuZHMudG9wIDwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgICBzdXBlci51cGRhdGUoKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNmViMGI1ZDI0MWRjNjg4MDQ1OFwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZWxlbWVudCIsImVsZW1lbnRzIiwid3JhcHBlciIsInNjcm9sbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVvdGVJbWciLCJxdW90ZVNlY3Rpb24iLCJxdW90ZVN0aWNreSIsImlzU3RpY2t5IiwicXVvdGVCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzaG93IiwidXJsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZSIsInJlbW92ZSIsInVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwidG9wIiwiaGVpZ2h0IiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==