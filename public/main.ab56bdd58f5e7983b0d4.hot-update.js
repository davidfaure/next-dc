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
    } else {
      this.isSticky = false;
      this.elements.quoteSticky.style.position = "sticky";
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb5faed3a9e6a9f9bdc0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYjU2YmRkNThmNWU3OTgzYjBkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBRWxDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENDLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUN2REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztFQUN2Qjs7RUFFQTtBQUNGO0FBQ0E7RUFDRSxNQUFNQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDakIsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFFL0MsT0FBTyxLQUFLLENBQUNhLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUEsTUFBTUcsSUFBSUEsQ0FBQ0gsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDYixPQUFPLENBQUNjLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQ25CLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO0lBRWxELE9BQU8sS0FBSyxDQUFDaUIsSUFBSSxDQUFDSCxHQUFHLENBQUM7RUFDeEI7RUFFQUssTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsS0FBSyxDQUFDQSxNQUFNLENBQUMsQ0FBQztJQUVkLE1BQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNsQixRQUFRLENBQUNRLFlBQVksQ0FBQ1cscUJBQXFCLENBQUMsQ0FBQztJQUV0RSxJQUFJRCxXQUFXLENBQUNFLEdBQUcsSUFBSSxDQUFDLElBQUlGLFdBQVcsQ0FBQ0csTUFBTSxJQUFJQyxNQUFNLENBQUNDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQ2IsUUFBUSxFQUFFO01BQ3RGO01BQ0FjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO01BQzNDLElBQUksQ0FBQ2YsUUFBUSxHQUFHLElBQUk7TUFDcEIsSUFBSSxDQUFDVixRQUFRLENBQUNTLFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE9BQU87TUFDbEQsSUFBSSxDQUFDM0IsUUFBUSxDQUFDUyxXQUFXLENBQUNpQixLQUFLLENBQUNOLEdBQUcsR0FBRyxHQUFHLEVBQUM7SUFDNUMsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDVixRQUFRLEdBQUcsS0FBSztNQUNyQixJQUFJLENBQUNWLFFBQVEsQ0FBQ1MsV0FBVyxDQUFDaUIsS0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUTtJQUNyRDtFQUNGO0FBQ0Y7Ozs7Ozs7O1VDckRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9wYWdlcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCJjb21wb25lbnRzL1BhZ2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFjdGl2ZTogXCJob21lLS1hY3RpdmVcIlxuICAgICAgfSxcbiAgICAgIGVsZW1lbnQ6IFwiLmhvbWVcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHdyYXBwZXI6IFwiLmhvbWVfX2NvbnRlbnRcIixcbiAgICAgICAgc2Nyb2xsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzX19iYXJcIiksXG4gICAgICAgIGdhbGxlcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKSxcbiAgICAgICAgcXVvdGVJbWc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVfX2ltYWdlXCIpLFxuICAgICAgICBxdW90ZVNlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIiksXG4gICAgICAgIHF1b3RlU3RpY2t5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlX19zdGlja3lcIilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pc1N0aWNreSA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIGFzeW5jIHNob3codXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIHJldHVybiBzdXBlci5zaG93KHVybClcbiAgfVxuXG4gIGFzeW5jIGhpZGUodXJsKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSlcblxuICAgIHJldHVybiBzdXBlci5oaWRlKHVybClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBzdXBlci51cGRhdGUoKVxuXG4gICAgY29uc3QgcXVvdGVCb3VuZHMgPSB0aGlzLmVsZW1lbnRzLnF1b3RlU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgaWYgKHF1b3RlQm91bmRzLnRvcCA8PSAwICYmIHF1b3RlQm91bmRzLmJvdHRvbSA+PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgIXRoaXMuaXNTdGlja3kpIHtcbiAgICAgIC8vIFRoZSBob21lX19xdW90ZSBzZWN0aW9uIGlzIGluIHZpZXdcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHF1b3RlIHNlY3Rpb24gaXMgaW4gdmlld1wiKVxuICAgICAgdGhpcy5pc1N0aWNreSA9IHRydWVcbiAgICAgIHRoaXMuZWxlbWVudHMucXVvdGVTdGlja3kuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCJcbiAgICAgIHRoaXMuZWxlbWVudHMucXVvdGVTdGlja3kuc3R5bGUudG9wID0gXCIwXCIgLy8gYWRqdXN0IGFzIG5lZWRlZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzU3RpY2t5ID0gZmFsc2VcbiAgICAgIHRoaXMuZWxlbWVudHMucXVvdGVTdGlja3kuc3R5bGUucG9zaXRpb24gPSBcInN0aWNreVwiXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYjVmYWVkM2E5ZTZhOWY5YmRjMFwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiYWN0aXZlIiwiZWxlbWVudCIsImVsZW1lbnRzIiwid3JhcHBlciIsInNjcm9sbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicXVvdGVJbWciLCJxdW90ZVNlY3Rpb24iLCJxdW90ZVN0aWNreSIsImlzU3RpY2t5Iiwic2hvdyIsInVybCIsImNsYXNzTGlzdCIsImFkZCIsImhpZGUiLCJyZW1vdmUiLCJ1cGRhdGUiLCJxdW90ZUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9