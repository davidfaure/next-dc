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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");



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
    this.currentProgress = 0;
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

    const tween = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.elements.quoteImg, {
      scale: 1,
      ease: "expo",
      paused: true
    });
    const start = (this.quoteBounds.top - this.quoteBounds.height) * 1.1;
    const end = (this.quoteBounds.bottom - this.quoteBounds.height) * 1.2;
    if (start < scroll.current && end > scroll.current || start > scroll.current && end < scroll.current) {
      const targetProgress = (start - scroll.current) / (start - end) * 0.05;
      this.currentProgress = (0,utils_math__WEBPACK_IMPORTED_MODULE_1__.lerp)(this.currentProgress, targetProgress, 0.02);
      // console.log("je suis dans la section", this.currentProgress)
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
/******/ 	__webpack_require__.h = () => ("b793fc7e124d7fa7831d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZjM2MzllZDAwZWVkYmIzZWI4YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDWDtBQUNVO0FBRWpDLGlFQUFlLGNBQWNBLHVEQUFJLENBQUM7RUFDaENHLFdBQVdBLENBQUEsRUFBRztJQUNaLEtBQUssQ0FBQztNQUNKQyxPQUFPLEVBQUU7UUFDUEMsTUFBTSxFQUFFO01BQ1YsQ0FBQztNQUNEQyxPQUFPLEVBQUUsT0FBTztNQUNoQkMsUUFBUSxFQUFFO1FBQ1JDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLE1BQU0sRUFBRUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaERDLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwREMsUUFBUSxFQUFFSixRQUFRLENBQUNDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQztRQUM5REksWUFBWSxFQUFFTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDcERLLFdBQVcsRUFBRU4sUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCO01BQzVEO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTSxRQUFRLEdBQUcsS0FBSztJQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ1MscUJBQXFCLENBQUMsQ0FBQztFQUNuRjs7RUFFQTtBQUNGO0FBQ0E7RUFDRSxNQUFNQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDZCxJQUFJLENBQUNoQixPQUFPLENBQUNpQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNwQixPQUFPLENBQUNDLE1BQU0sQ0FBQztJQUUvQyxPQUFPLEtBQUssQ0FBQ2dCLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0VBQ3hCO0VBRUEsTUFBTUcsSUFBSUEsQ0FBQ0gsR0FBRyxFQUFFO0lBQ2QsSUFBSSxDQUFDaEIsT0FBTyxDQUFDaUIsU0FBUyxDQUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDdEIsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFFbEQsT0FBTyxLQUFLLENBQUNvQixJQUFJLENBQUNILEdBQUcsQ0FBQztFQUN4QjtFQUVBSyxNQUFNQSxDQUFDbEIsTUFBTSxFQUFFO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLE1BQU1tQixLQUFLLEdBQUczQiw0Q0FBSSxDQUFDNEIsRUFBRSxDQUFDLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ08sUUFBUSxFQUFFO01BQzVDZ0IsS0FBSyxFQUFFLENBQUM7TUFDUkMsSUFBSSxFQUFFLE1BQU07TUFDWkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDZCxXQUFXLENBQUNlLEdBQUcsR0FBRyxJQUFJLENBQUNmLFdBQVcsQ0FBQ2dCLE1BQU0sSUFBSSxHQUFHO0lBQ3BFLE1BQU1DLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQ2pCLFdBQVcsQ0FBQ2tCLE1BQU0sR0FBRyxJQUFJLENBQUNsQixXQUFXLENBQUNnQixNQUFNLElBQUksR0FBRztJQUVyRSxJQUNHRixLQUFLLEdBQUd4QixNQUFNLENBQUM2QixPQUFPLElBQUlGLEdBQUcsR0FBRzNCLE1BQU0sQ0FBQzZCLE9BQU8sSUFDOUNMLEtBQUssR0FBR3hCLE1BQU0sQ0FBQzZCLE9BQU8sSUFBSUYsR0FBRyxHQUFHM0IsTUFBTSxDQUFDNkIsT0FBUSxFQUNoRDtNQUNBLE1BQU1DLGNBQWMsR0FBSSxDQUFDTixLQUFLLEdBQUd4QixNQUFNLENBQUM2QixPQUFPLEtBQUtMLEtBQUssR0FBR0csR0FBRyxDQUFDLEdBQUksSUFBSTtNQUN4RSxJQUFJLENBQUNsQixlQUFlLEdBQUdoQixnREFBSSxDQUFDLElBQUksQ0FBQ2dCLGVBQWUsRUFBRXFCLGNBQWMsRUFBRSxJQUFJLENBQUM7TUFDdkU7TUFDQVgsS0FBSyxDQUFDWSxRQUFRLENBQUMsSUFBSSxDQUFDdEIsZUFBZSxDQUFDO0lBQ3RDO0lBQ0EsS0FBSyxDQUFDUyxNQUFNLENBQUMsQ0FBQztFQUNoQjtBQUNGOzs7Ozs7OztVQ3JFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgYWN0aXZlOiBcImhvbWUtLWFjdGl2ZVwiXG4gICAgICB9LFxuICAgICAgZWxlbWVudDogXCIuaG9tZVwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgd3JhcHBlcjogXCIuaG9tZV9fY29udGVudFwiLFxuICAgICAgICBzY3JvbGw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NfX2JhclwiKSxcbiAgICAgICAgZ2FsbGVyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpLFxuICAgICAgICBxdW90ZUltZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZV9fbWVkaWFfX2ltYWdlXCIpLFxuICAgICAgICBxdW90ZVNlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIiksXG4gICAgICAgIHF1b3RlU3RpY2t5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlX19zdGlja3lcIilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pc1N0aWNreSA9IGZhbHNlXG4gICAgdGhpcy5jdXJyZW50UHJvZ3Jlc3MgPSAwXG4gICAgdGhpcy5xdW90ZUJvdW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgYXN5bmMgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKVxuXG4gICAgcmV0dXJuIHN1cGVyLnNob3codXJsKVxuICB9XG5cbiAgYXN5bmMgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuYWN0aXZlKVxuXG4gICAgcmV0dXJuIHN1cGVyLmhpZGUodXJsKVxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFxuICAgIC8vICAgXCJ1cGRhdGUgSE9NRVwiLFxuICAgIC8vICAgc2Nyb2xsLmN1cnJlbnQsXG4gICAgLy8gICB0aGlzLnF1b3RlQm91bmRzLnRvcCAtIHRoaXMucXVvdGVCb3VuZHMuaGVpZ2h0LFxuICAgIC8vICAgdGhpcy5xdW90ZUJvdW5kcy5ib3R0b20gLSB0aGlzLnF1b3RlQm91bmRzLmhlaWdodFxuICAgIC8vIClcblxuICAgIGNvbnN0IHR3ZWVuID0gZ3NhcC50byh0aGlzLmVsZW1lbnRzLnF1b3RlSW1nLCB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIGVhc2U6IFwiZXhwb1wiLFxuICAgICAgcGF1c2VkOiB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMucXVvdGVCb3VuZHMudG9wIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHQpICogMS4xXG4gICAgY29uc3QgZW5kID0gKHRoaXMucXVvdGVCb3VuZHMuYm90dG9tIC0gdGhpcy5xdW90ZUJvdW5kcy5oZWlnaHQpICogMS4yXG5cbiAgICBpZiAoXG4gICAgICAoc3RhcnQgPCBzY3JvbGwuY3VycmVudCAmJiBlbmQgPiBzY3JvbGwuY3VycmVudCkgfHxcbiAgICAgIChzdGFydCA+IHNjcm9sbC5jdXJyZW50ICYmIGVuZCA8IHNjcm9sbC5jdXJyZW50KVxuICAgICkge1xuICAgICAgY29uc3QgdGFyZ2V0UHJvZ3Jlc3MgPSAoKHN0YXJ0IC0gc2Nyb2xsLmN1cnJlbnQpIC8gKHN0YXJ0IC0gZW5kKSkgKiAwLjA1XG4gICAgICB0aGlzLmN1cnJlbnRQcm9ncmVzcyA9IGxlcnAodGhpcy5jdXJyZW50UHJvZ3Jlc3MsIHRhcmdldFByb2dyZXNzLCAwLjAyKVxuICAgICAgLy8gY29uc29sZS5sb2coXCJqZSBzdWlzIGRhbnMgbGEgc2VjdGlvblwiLCB0aGlzLmN1cnJlbnRQcm9ncmVzcylcbiAgICAgIHR3ZWVuLnByb2dyZXNzKHRoaXMuY3VycmVudFByb2dyZXNzKVxuICAgIH1cbiAgICBzdXBlci51cGRhdGUoKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNzkzZmM3ZTEyNGQ3ZmE3ODMxZFwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiZ3NhcCIsImxlcnAiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJhY3RpdmUiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ3cmFwcGVyIiwic2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxdW90ZUltZyIsInF1b3RlU2VjdGlvbiIsInF1b3RlU3RpY2t5IiwiaXNTdGlja3kiLCJjdXJyZW50UHJvZ3Jlc3MiLCJxdW90ZUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNob3ciLCJ1cmwiLCJjbGFzc0xpc3QiLCJhZGQiLCJoaWRlIiwicmVtb3ZlIiwidXBkYXRlIiwidHdlZW4iLCJ0byIsInNjYWxlIiwiZWFzZSIsInBhdXNlZCIsInN0YXJ0IiwidG9wIiwiaGVpZ2h0IiwiZW5kIiwiYm90dG9tIiwiY3VycmVudCIsInRhcmdldFByb2dyZXNzIiwicHJvZ3Jlc3MiXSwic291cmNlUm9vdCI6IiJ9