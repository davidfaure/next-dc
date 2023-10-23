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
        gallery: document.querySelectorAll(".home__gallery")
        // quoteImg: document.querySelector(".home__quote__image"),
        // quoteSection: document.querySelector(".home__quote")
      }
    });
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
  onWheel(event) {
    super.onWheel(event);
    console.log(window.scrollY);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91052dd962fbb9135ce6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YTk3NDFhMzEyM2JjNmEzYzA4MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBRWxDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENDLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDbkQ7UUFDQTtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7O0VBRUE7QUFDRjtBQUNBO0VBQ0UsTUFBTUMsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDVCxPQUFPLENBQUNVLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ2IsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFFL0MsT0FBTyxLQUFLLENBQUNTLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUEsTUFBTUcsSUFBSUEsQ0FBQ0gsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDVCxPQUFPLENBQUNVLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ2YsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFFbEQsT0FBTyxLQUFLLENBQUNhLElBQUksQ0FBQ0gsR0FBRyxDQUFDO0VBQ3hCO0VBRUFLLE9BQU9BLENBQUNDLEtBQUssRUFBRTtJQUNiLEtBQUssQ0FBQ0QsT0FBTyxDQUFDQyxLQUFLLENBQUM7SUFFcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztFQUM3QjtBQUNGOzs7Ozs7OztVQ3ZDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBhY3RpdmU6IFwiaG9tZS0tYWN0aXZlXCJcbiAgICAgIH0sXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB3cmFwcGVyOiBcIi5ob21lX19jb250ZW50XCIsXG4gICAgICAgIHNjcm9sbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc19fYmFyXCIpLFxuICAgICAgICBnYWxsZXJ5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcbiAgICAgICAgLy8gcXVvdGVJbWc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX2ltYWdlXCIpLFxuICAgICAgICAvLyBxdW90ZVNlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBhc3luYyBzaG93KHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuc2hvdyh1cmwpXG4gIH1cblxuICBhc3luYyBoaWRlKHVybCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpXG5cbiAgICByZXR1cm4gc3VwZXIuaGlkZSh1cmwpXG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgc3VwZXIub25XaGVlbChldmVudClcblxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MTA1MmRkOTYyZmJiOTEzNWNlNlwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZWxlbWVudCIsImVsZW1lbnRzIiwid3JhcHBlciIsInNjcm9sbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2hvdyIsInVybCIsImNsYXNzTGlzdCIsImFkZCIsImhpZGUiLCJyZW1vdmUiLCJvbldoZWVsIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Nyb2xsWSJdLCJzb3VyY2VSb290IjoiIn0=