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
  }
  createObserver() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!this.isVisible && entry.isIntersecting) {
          this.animateIn();
        } else if (entry.isIntersecting) {
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
/******/ 	__webpack_require__.h = () => ("0b6c26ca431990b28e84")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMmQ5NjUzNjlhMDYzZjdiYjQ2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUUzQixpRUFBZSxNQUFNO0VBQ25CQyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUM7RUFBUyxDQUFDLEVBQUU7SUFDakMsTUFBTTtNQUFFQyxjQUFjO01BQUVDO0lBQWdCLENBQUMsR0FBR0gsT0FBTyxDQUFDSSxPQUFPO0lBRTNELElBQUksQ0FBQ0MsS0FBSyxHQUFHSCxjQUFjO0lBRTNCLElBQUksQ0FBQ0YsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBRXhCLElBQUksQ0FBQ0ssTUFBTSxHQUFHSCxlQUFlLEdBQUdILE9BQU8sQ0FBQ08sT0FBTyxDQUFDSixlQUFlLENBQUMsR0FBR0gsT0FBTztJQUMxRSxJQUFJLENBQUNRLGVBQWUsR0FBR1YsNkNBQU0sQ0FBQyxXQUFXLENBQUM7SUFFMUMsSUFBSSxDQUFDVyxTQUFTLEdBQUcsS0FBSztJQUV0QixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXJCLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDbkI7RUFFQUQsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsSUFBSSxDQUFDRSxRQUFRLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQ0MsT0FBTyxJQUFJO01BQ3pEQSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUNSLFNBQVMsSUFBSVEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDM0MsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztRQUNsQixDQUFDLE1BQU0sSUFBSUYsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDL0IsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztRQUNsQixDQUFDLE1BQU07VUFDTCxJQUFJLENBQUNSLFVBQVUsQ0FBQyxDQUFDO1FBQ25CO01BQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUNTLE9BQU8sQ0FBQyxJQUFJLENBQUNkLE1BQU0sQ0FBQztFQUN6QjtFQUVBYSxTQUFTQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNWLFNBQVMsR0FBRyxJQUFJO0VBQ3ZCO0VBRUFFLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ0YsU0FBUyxHQUFHLEtBQUs7RUFDeEI7QUFDRjs7Ozs7Ozs7VUMxQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NsYXNzZXMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgY29uc3QgeyBhbmltYXRpb25EZWxheSwgYW5pbWF0aW9uVGFyZ2V0IH0gPSBlbGVtZW50LmRhdGFzZXRcblxuICAgIHRoaXMuZGVsYXkgPSBhbmltYXRpb25EZWxheVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50c1xuXG4gICAgdGhpcy50YXJnZXQgPSBhbmltYXRpb25UYXJnZXQgPyBlbGVtZW50LmNsb3Nlc3QoYW5pbWF0aW9uVGFyZ2V0KSA6IGVsZW1lbnRcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZVxuXG4gICAgdGhpcy5jcmVhdGVPYnNlcnZlcigpXG5cbiAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICB9XG5cbiAgY3JlYXRlT2JzZXJ2ZXIoKSB7XG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlICYmIGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlSW4oKVxuICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlSW4oKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSkub2JzZXJ2ZSh0aGlzLnRhcmdldClcbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYjZjMjZjYTQzMTk5MGIyOGU4NFwiKSJdLCJuYW1lcyI6WyJQcmVmaXgiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uVGFyZ2V0IiwiZGF0YXNldCIsImRlbGF5IiwidGFyZ2V0IiwiY2xvc2VzdCIsInRyYW5zZm9ybVByZWZpeCIsImlzVmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiYW5pbWF0ZU91dCIsIm9ic2VydmVyIiwid2luZG93IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJhbmltYXRlSW4iLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIifQ==