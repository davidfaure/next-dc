"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/classes/Animation.js":
/*!**********************************!*\
  !*** ./app/classes/Animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    element,
    elements
  }) {
    const {
      animationDelay,
      animationTarget
    } = element.dataset;
    this.delay = animationDelay;
    this.element = element;
    this.elements = elements;
    this.target = animationTarget ? element.closest(animationTarget) : element;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
    this.isVisible = false;
    this.createObserver();
    this.animateOut();

    // if ('IntersectionObserver' in window) {
    //   this.createObserver()

    //   this.animateOut()
    // } else {
    //   this.animateIn()
    // }
  }

  createObserver() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        // if (!this.isVisible && entry.isIntersecting) {
        //   this.animateIn()
        // }
        if (entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    }).observe(this.target);
  }
  animateIn() {
    this.isVisible = true;
  }
  animateOut() {
    this.isVisible = false;
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("228939cbd755ab6d3518")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZTQ2MTA0MDU2OGVjNTBlYWFiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUUzQixpRUFBZSxNQUFNO0VBQ25CQyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUM7RUFBUyxDQUFDLEVBQUU7SUFDakMsTUFBTTtNQUFFQyxjQUFjO01BQUVDO0lBQWdCLENBQUMsR0FBR0gsT0FBTyxDQUFDSSxPQUFPO0lBRTNELElBQUksQ0FBQ0MsS0FBSyxHQUFHSCxjQUFjO0lBRTNCLElBQUksQ0FBQ0YsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBRXhCLElBQUksQ0FBQ0ssTUFBTSxHQUFHSCxlQUFlLEdBQUdILE9BQU8sQ0FBQ08sT0FBTyxDQUFDSixlQUFlLENBQUMsR0FBR0gsT0FBTztJQUMxRSxJQUFJLENBQUNRLGVBQWUsR0FBR1YsNkNBQU0sQ0FBQyxXQUFXLENBQUM7SUFFMUMsSUFBSSxDQUFDVyxTQUFTLEdBQUcsS0FBSztJQUV0QixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXJCLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7O0lBRWpCO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7RUFDRjs7RUFFQUQsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsSUFBSSxDQUFDRSxRQUFRLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQ0MsT0FBTyxJQUFJO01BQ3pEQSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO1FBQ3ZCO1FBQ0E7UUFDQTtRQUNBLElBQUlBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO1VBQ3hCLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDUixVQUFVLENBQUMsQ0FBQztRQUNuQjtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDUyxPQUFPLENBQUMsSUFBSSxDQUFDZCxNQUFNLENBQUM7RUFDekI7RUFFQWEsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDVixTQUFTLEdBQUcsSUFBSTtFQUN2QjtFQUVBRSxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUNGLFNBQVMsR0FBRyxLQUFLO0VBQ3hCO0FBQ0Y7Ozs7Ozs7O1VDbkRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uRGVsYXksIGFuaW1hdGlvblRhcmdldCB9ID0gZWxlbWVudC5kYXRhc2V0XG5cbiAgICB0aGlzLmRlbGF5ID0gYW5pbWF0aW9uRGVsYXlcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHNcblxuICAgIHRoaXMudGFyZ2V0ID0gYW5pbWF0aW9uVGFyZ2V0ID8gZWxlbWVudC5jbG9zZXN0KGFuaW1hdGlvblRhcmdldCkgOiBlbGVtZW50XG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcblxuICAgIHRoaXMuY3JlYXRlT2JzZXJ2ZXIoKVxuXG4gICAgdGhpcy5hbmltYXRlT3V0KClcblxuICAgIC8vIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgIC8vICAgdGhpcy5jcmVhdGVPYnNlcnZlcigpXG5cbiAgICAvLyAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0ZUluKClcbiAgICAvLyB9XG4gIH1cblxuICBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIC8vIGlmICghdGhpcy5pc1Zpc2libGUgJiYgZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgLy8gICB0aGlzLmFuaW1hdGVJbigpXG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlSW4oKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSkub2JzZXJ2ZSh0aGlzLnRhcmdldClcbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMjg5MzljYmQ3NTVhYjZkMzUxOFwiKSJdLCJuYW1lcyI6WyJQcmVmaXgiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uVGFyZ2V0IiwiZGF0YXNldCIsImRlbGF5IiwidGFyZ2V0IiwiY2xvc2VzdCIsInRyYW5zZm9ybVByZWZpeCIsImlzVmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiYW5pbWF0ZU91dCIsIm9ic2VydmVyIiwid2luZG93IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJhbmltYXRlSW4iLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIifQ==