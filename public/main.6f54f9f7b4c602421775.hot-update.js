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
        animationsReveal: '[data-animation="reveal"]',
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
    console.log(this.elements);
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
      this.scrollPercentage = this.scroll.current / this.scroll.limit;
      this.elements.scroll.style[this.transformPrefix] = `scaleY(${this.scrollPercentage})`;
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
/******/ 	__webpack_require__.h = () => ("fb87eeb84a0643e2668f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxPQUFPLEdBQUdaLGdEQUFJLENBQUMsSUFBSSxDQUFDUyxNQUFNLENBQUNHLE9BQU8sRUFBRSxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksTUFBTSxFQUFFLElBQUksQ0FBQ0osTUFBTSxDQUFDQyxJQUFJLENBQUM7SUFDckYsSUFBSSxDQUFDRCxNQUFNLENBQUNHLE9BQU8sR0FBR3NDLElBQUksQ0FBQ3FCLEtBQUssQ0FBQyxJQUFJLENBQUM5RCxNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUVyRCxJQUFJLElBQUksQ0FBQ0gsTUFBTSxDQUFDRyxPQUFPLEdBQUcsR0FBRyxFQUFFO01BQzdCLElBQUksQ0FBQ0gsTUFBTSxDQUFDRyxPQUFPLEdBQUcsQ0FBQztJQUN6QjtJQUVBLElBQUksSUFBSSxDQUFDTixTQUFTLENBQUNGLFFBQVEsQ0FBQ0ssTUFBTSxFQUFFO01BQ2xDLElBQUksQ0FBQytELGdCQUFnQixHQUFHLElBQUksQ0FBQy9ELE1BQU0sQ0FBQ0csT0FBTyxHQUFHLElBQUksQ0FBQ0gsTUFBTSxDQUFDSyxLQUFLO01BQy9ELElBQUksQ0FBQ1YsUUFBUSxDQUFDSyxNQUFNLENBQUN3QyxLQUFLLENBQUMsSUFBSSxDQUFDbEMsZUFBZSxDQUFDLEdBQUksVUFBUyxJQUFJLENBQUN5RCxnQkFBaUIsR0FBRTtJQUN2RjtJQUVBLElBQUksSUFBSSxDQUFDcEUsUUFBUSxDQUFDeUIsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ1ksU0FBUyxDQUFDLElBQUksQ0FBQ3JDLFFBQVEsQ0FBQ3lCLE9BQU8sRUFBRSxJQUFJLENBQUNwQixNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ0gsTUFBTSxDQUFDK0IsSUFBSSxHQUFHLElBQUksQ0FBQy9CLE1BQU0sQ0FBQ0csT0FBTztFQUN4QztBQUNGOzs7Ozs7OztVQ3pNQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSBcImNsYXNzZXMvRGV0ZWN0aW9uXCJcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IHsgbWFwRWFjaCB9IGZyb20gXCJ1dGlscy9kb21cIlxuaW1wb3J0IHsgY2xhbXAsIGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc2VzLCBlbGVtZW50LCBlbGVtZW50cywgaXNTY3JvbGxhYmxlID0gdHJ1ZSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC4uLmNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICAgIGFuaW1hdGlvbnNSZXZlYWw6ICdbZGF0YS1hbmltYXRpb249XCJyZXZlYWxcIl0nLFxuXG4gICAgICAgIC4uLmVsZW1lbnRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IGlzU2Nyb2xsYWJsZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5lbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cywgKHNlbGVjdG9yLCBrZXkpID0+IHtcbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgIGVhc2U6IDAuMDcsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgIGxpbWl0OiB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBjcmVhdGVBbmltYXRpb25zKCkge1xuICAgIHRoaXMucGFyYWdyYXBocyA9IG1hcEVhY2godGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFBhcmFncmFwaCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5wYXJhZ3JhcGhzKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGVhc2U6IDAuMDcsXG4gICAgICBwb3NpdGlvbjogMCxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cbiAgfVxuXG4gIHNldCh2YWx1ZSkge1xuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0ID0gdmFsdWVcblxuICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuZWxlbWVudHMud3JhcHBlciwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgfVxuXG4gIHNob3codXJsKSB7XG4gICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIGhpZGUodXJsKSB7XG4gICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICB0cmFuc2Zvcm0oZWxlbWVudCwgeSkge1xuICAgIGVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZTNkKDAsICR7LU1hdGgucm91bmQoeSl9cHgsIDApYFxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50cy5cbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50cy53cmFwcGVyKSByZXR1cm5cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgICAgZWFjaCh0aGlzLmFuaW1hdGlvbnMsIGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi5vblJlc2l6ZSAmJiBhbmltYXRpb24ub25SZXNpemUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgdGhpcy5zY3JvbGwucG9zaXRpb24gPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgdGhpcy5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkgfHwgIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuICAgIGNvbnN0IGRpc3RhbmNlID0gKHRoaXMuc3RhcnQgLSB5KSAqIDNcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnBvc2l0aW9uICsgZGlzdGFuY2VcbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICB9XG5cbiAgb25XaGVlbChldmVudCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBOb3JtYWxpemVXaGVlbChldmVudClcbiAgICBjb25zdCBzcGVlZCA9IG5vcm1hbGl6ZWQucGl4ZWxZXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gc3BlZWRcblxuICAgIHJldHVybiBzcGVlZFxuICB9XG5cbiAgLyoqXG4gICAqIEZyYW1lcy5cbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBjbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGxlcnAodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5lYXNlKVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RvcnMuZWxlbWVudHMuc2Nyb2xsKSB7XG4gICAgICB0aGlzLnNjcm9sbFBlcmNlbnRhZ2UgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC8gdGhpcy5zY3JvbGwubGltaXRcbiAgICAgIHRoaXMuZWxlbWVudHMuc2Nyb2xsLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGBzY2FsZVkoJHt0aGlzLnNjcm9sbFBlcmNlbnRhZ2V9KWBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmI4N2VlYjg0YTA2NDNlMjY2OGZcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJFdmVudEVtaXR0ZXIiLCJOb3JtYWxpemVXaGVlbCIsIlByZWZpeCIsIlBhcmFncmFwaCIsIkRldGVjdGlvbiIsImVhY2giLCJtYXBFYWNoIiwiY2xhbXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaXNTY3JvbGxhYmxlIiwic2VsZWN0b3JzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJhbmltYXRpb25zUmV2ZWFsIiwic2Nyb2xsIiwiZWFzZSIsInBvc2l0aW9uIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiY3JlYXRlIiwiYW5pbWF0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjcmVhdGVBbmltYXRpb25zIiwiY29uc29sZSIsImxvZyIsInBhcmFncmFwaHMiLCJwdXNoIiwicmVzZXQiLCJzZXQiLCJ2YWx1ZSIsImxhc3QiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidXJsIiwiaXNWaXNpYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaWRlIiwieSIsInN0eWxlIiwiTWF0aCIsInJvdW5kIiwib25SZXNpemUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwiYW5pbWF0aW9uIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzTW9iaWxlIiwiaXNEb3duIiwic3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZCIsInNwZWVkIiwicGl4ZWxZIiwidXBkYXRlIiwiZmxvb3IiLCJzY3JvbGxQZXJjZW50YWdlIl0sInNvdXJjZVJvb3QiOiIifQ==