"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Page.js":
/*!********************************!*\
  !*** ./app/components/Page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var animations_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animations/Paragraph */ "./app/animations/Paragraph.js");
/* harmony import */ var classes_Detection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classes/Detection */ "./app/classes/Detection.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/dom */ "./app/utils/dom.js");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends (events__WEBPACK_IMPORTED_MODULE_1___default()) {
  constructor({
    classes,
    element,
    elements,
    isScrollable = true
  }) {
    super();
    (0,auto_bind__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    this.classes = {
      ...classes
    };
    this.selectors = {
      element,
      elements: {
        animationsParagraphs: '[data-animation="paragraph"]',
        ...elements
      }
    };
    this.scroll = {
      ease: 0.07,
      position: 0,
      current: 0,
      target: 0,
      limit: 0
    };
    this.isScrollable = isScrollable;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_3___default()("transform");
    console.log(this.selectors, this.elements);
  }
  create() {
    this.animations = [];
    this.element = document.querySelector(this.selectors.element);
    this.elements = {};
    lodash_each__WEBPACK_IMPORTED_MODULE_6___default()(this.selectors.elements, (selector, key) => {
      if (selector instanceof window.HTMLElement || selector instanceof window.NodeList) {
        this.elements[key] = selector;
      } else if (Array.isArray(selector)) {
        this.elements[key] = selector;
      } else {
        this.elements[key] = this.element.querySelectorAll(selector);
        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = this.element.querySelector(selector);
        }
      }
    });
    if (this.isScrollable) {
      this.scroll = {
        ease: 0.07,
        position: 0,
        current: 0,
        target: 0,
        limit: this.elements.wrapper.clientHeight - window.innerHeight
      };
    }
    this.createAnimations();
  }

  /**
   * Animations.
   */
  createAnimations() {
    this.paragraphs = (0,utils_dom__WEBPACK_IMPORTED_MODULE_7__.mapEach)(this.elements.animationsParagraphs, element => {
      return new animations_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"]({
        element
      });
    });
    this.animations.push(...this.paragraphs);
  }

  /**
   * Animations.
   */
  reset() {
    this.scroll = {
      ease: 0.07,
      position: 0,
      current: 0,
      target: 0,
      limit: 0
    };
  }
  set(value) {
    this.scroll.current = this.scroll.target = this.scroll.last = value;
    this.transform(this.elements.wrapper, this.scroll.current);
  }
  show(url) {
    this.isVisible = true;
    return Promise.resolve();
  }
  hide(url) {
    this.isVisible = false;
    return Promise.resolve();
  }
  transform(element, y) {
    element.style[this.transformPrefix] = `translate3d(0, ${-Math.round(y)}px, 0)`;
  }

  /**
   * Events.
   */
  onResize() {
    if (!this.elements.wrapper) return;
    window.requestAnimationFrame(_ => {
      this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight;
      lodash_each__WEBPACK_IMPORTED_MODULE_6___default()(this.animations, animation => {
        animation.onResize && animation.onResize();
      });
    });
  }
  onTouchDown(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_5__["default"].isMobile()) return;
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientY : event.clientY;
  }
  onTouchMove(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_5__["default"].isMobile() || !this.isDown) return;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = (this.start - y) * 3;
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_5__["default"].isMobile()) return;
    this.isDown = false;
  }
  onWheel(event) {
    const normalized = normalize_wheel__WEBPACK_IMPORTED_MODULE_2___default()(event);
    const speed = normalized.pixelY;
    this.scroll.target += speed;
    return speed;
  }

  /**
   * Frames.
   */
  update() {
    this.scroll.target = (0,utils_math__WEBPACK_IMPORTED_MODULE_8__.clamp)(0, this.scroll.limit, this.scroll.target);
    this.scroll.current = (0,utils_math__WEBPACK_IMPORTED_MODULE_8__.lerp)(this.scroll.current, this.scroll.target, this.scroll.ease);
    this.scroll.current = Math.floor(this.scroll.current);
    if (this.scroll.current < 0.1) {
      this.scroll.current = 0;
    }
    if (this.selectors.elements.scroll) {
      console.log("J'ai accès");
    }
    if (this.elements.wrapper) {
      this.transform(this.elements.wrapper, this.scroll.current);
    }
    this.scroll.last = this.scroll.current;
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e944149d9be681ebced1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxHQUFHWCxnREFBSSxDQUFDLElBQUksQ0FBQ1EsTUFBTSxDQUFDRyxPQUFPLEVBQUUsSUFBSSxDQUFDSCxNQUFNLENBQUNJLE1BQU0sRUFBRSxJQUFJLENBQUNKLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQ3JGLElBQUksQ0FBQ0QsTUFBTSxDQUFDRyxPQUFPLEdBQUdzQyxJQUFJLENBQUNxQixLQUFLLENBQUMsSUFBSSxDQUFDOUQsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFFckQsSUFBSSxJQUFJLENBQUNILE1BQU0sQ0FBQ0csT0FBTyxHQUFHLEdBQUcsRUFBRTtNQUM3QixJQUFJLENBQUNILE1BQU0sQ0FBQ0csT0FBTyxHQUFHLENBQUM7SUFDekI7SUFFQSxJQUFJLElBQUksQ0FBQ0wsU0FBUyxDQUFDRixRQUFRLENBQUNJLE1BQU0sRUFBRTtNQUNsQ08sT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQzNCO0lBRUEsSUFBSSxJQUFJLENBQUNaLFFBQVEsQ0FBQzBCLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNVLFNBQVMsQ0FBQyxJQUFJLENBQUNwQyxRQUFRLENBQUMwQixPQUFPLEVBQUUsSUFBSSxDQUFDdEIsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFDNUQ7SUFFQSxJQUFJLENBQUNILE1BQU0sQ0FBQytCLElBQUksR0FBRyxJQUFJLENBQUMvQixNQUFNLENBQUNHLE9BQU87RUFDeEM7QUFDRjs7Ozs7Ozs7VUN4TUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIlxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gXCJub3JtYWxpemUtd2hlZWxcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiYW5pbWF0aW9ucy9QYXJhZ3JhcGhcIlxuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCJjbGFzc2VzL0RldGVjdGlvblwiXG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCB7IG1hcEVhY2ggfSBmcm9tIFwidXRpbHMvZG9tXCJcbmltcG9ydCB7IGNsYW1wLCBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHsgY2xhc3NlcywgZWxlbWVudCwgZWxlbWVudHMsIGlzU2Nyb2xsYWJsZSA9IHRydWUgfSkge1xuICAgIHN1cGVyKClcblxuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAuLi5jbGFzc2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RvcnMgPSB7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgYW5pbWF0aW9uc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxuXG4gICAgICAgIC4uLmVsZW1lbnRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IGlzU2Nyb2xsYWJsZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0b3JzLCB0aGlzLmVsZW1lbnRzKVxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnRzLCAoc2VsZWN0b3IsIGtleSkgPT4ge1xuICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHNlbGVjdG9yXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHNlbGVjdG9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaXNTY3JvbGxhYmxlKSB7XG4gICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgZWFzZTogMC4wNyxcbiAgICAgICAgcG9zaXRpb246IDAsXG4gICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgIHRhcmdldDogMCxcbiAgICAgICAgbGltaXQ6IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBjcmVhdGVBbmltYXRpb25zKCkge1xuICAgIHRoaXMucGFyYWdyYXBocyA9IG1hcEVhY2godGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFBhcmFncmFwaCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5wYXJhZ3JhcGhzKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGVhc2U6IDAuMDcsXG4gICAgICBwb3NpdGlvbjogMCxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cbiAgfVxuXG4gIHNldCh2YWx1ZSkge1xuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0ID0gdmFsdWVcblxuICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuZWxlbWVudHMud3JhcHBlciwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgfVxuXG4gIHNob3codXJsKSB7XG4gICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIGhpZGUodXJsKSB7XG4gICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICB0cmFuc2Zvcm0oZWxlbWVudCwgeSkge1xuICAgIGVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZTNkKDAsICR7LU1hdGgucm91bmQoeSl9cHgsIDApYFxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50cy5cbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50cy53cmFwcGVyKSByZXR1cm5cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgICAgZWFjaCh0aGlzLmFuaW1hdGlvbnMsIGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi5vblJlc2l6ZSAmJiBhbmltYXRpb24ub25SZXNpemUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgdGhpcy5zY3JvbGwucG9zaXRpb24gPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgdGhpcy5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkgfHwgIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuICAgIGNvbnN0IGRpc3RhbmNlID0gKHRoaXMuc3RhcnQgLSB5KSAqIDNcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnBvc2l0aW9uICsgZGlzdGFuY2VcbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICB9XG5cbiAgb25XaGVlbChldmVudCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBOb3JtYWxpemVXaGVlbChldmVudClcbiAgICBjb25zdCBzcGVlZCA9IG5vcm1hbGl6ZWQucGl4ZWxZXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gc3BlZWRcblxuICAgIHJldHVybiBzcGVlZFxuICB9XG5cbiAgLyoqXG4gICAqIEZyYW1lcy5cbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBjbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGxlcnAodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5lYXNlKVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RvcnMuZWxlbWVudHMuc2Nyb2xsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkonYWkgYWNjw6hzXCIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU5NDQxNDlkOWJlNjgxZWJjZWQxXCIpIl0sIm5hbWVzIjpbIkF1dG9CaW5kIiwiRXZlbnRFbWl0dGVyIiwiTm9ybWFsaXplV2hlZWwiLCJQcmVmaXgiLCJQYXJhZ3JhcGgiLCJEZXRlY3Rpb24iLCJlYWNoIiwibWFwRWFjaCIsImNsYW1wIiwibGVycCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlzU2Nyb2xsYWJsZSIsInNlbGVjdG9ycyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwic2Nyb2xsIiwiZWFzZSIsInBvc2l0aW9uIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImFuaW1hdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY3JlYXRlQW5pbWF0aW9ucyIsInBhcmFncmFwaHMiLCJwdXNoIiwicmVzZXQiLCJzZXQiLCJ2YWx1ZSIsImxhc3QiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidXJsIiwiaXNWaXNpYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaWRlIiwieSIsInN0eWxlIiwiTWF0aCIsInJvdW5kIiwib25SZXNpemUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwiYW5pbWF0aW9uIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzTW9iaWxlIiwiaXNEb3duIiwic3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZCIsInNwZWVkIiwicGl4ZWxZIiwidXBkYXRlIiwiZmxvb3IiXSwic291cmNlUm9vdCI6IiJ9