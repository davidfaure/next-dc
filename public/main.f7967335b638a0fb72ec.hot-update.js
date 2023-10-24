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
/* harmony import */ var animations_Reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animations/Reveal */ "./app/animations/Reveal.js");
/* harmony import */ var animations_Parallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animations/Parallax */ "./app/animations/Parallax.js");
/* harmony import */ var classes_Detection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classes/Detection */ "./app/classes/Detection.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/dom */ "./app/utils/dom.js");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");











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
        animationsParallax: '[data-animation="parallax"]',
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
    console.log();
  }
  create() {
    this.animations = [];
    this.element = document.querySelector(this.selectors.element);
    this.elements = {};
    lodash_each__WEBPACK_IMPORTED_MODULE_8___default()(this.selectors.elements, (selector, key) => {
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
    this.paragraphs = (0,utils_dom__WEBPACK_IMPORTED_MODULE_9__.mapEach)(this.elements.animationsParagraphs, element => {
      return new animations_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"]({
        element
      });
    });
    this.animations.push(...this.paragraphs);
    this.revealsText = (0,utils_dom__WEBPACK_IMPORTED_MODULE_9__.mapEach)(this.elements.animationsReveal, element => {
      return new animations_Reveal__WEBPACK_IMPORTED_MODULE_5__["default"]({
        element
      });
    });
    this.animations.push(...this.revealsText);
    this.parallaxEffects = (0,utils_dom__WEBPACK_IMPORTED_MODULE_9__.mapEach)(this.elements.animationsParallax, element => {
      return new animations_Parallax__WEBPACK_IMPORTED_MODULE_6__["default"]({
        element
      });
    });
    this.animations.push(...this.parallaxEffects);
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
      lodash_each__WEBPACK_IMPORTED_MODULE_8___default()(this.animations, animation => {
        animation.onResize && animation.onResize();
      });
    });
  }
  onTouchDown(event) {
    // if (!Detection.isMobile()) return

    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientY : event.clientY;
  }
  onTouchMove(event) {
    if (!this.isDown) return;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = (this.start - y) * 3;
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp(event) {
    // if (!Detection.isMobile()) return

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
    this.scroll.target = (0,utils_math__WEBPACK_IMPORTED_MODULE_10__.clamp)(0, this.scroll.limit, this.scroll.target);
    this.scroll.current = (0,utils_math__WEBPACK_IMPORTED_MODULE_10__.lerp)(this.scroll.current, this.scroll.target, this.scroll.ease);
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
    if (this.parallax) {
      this.parallax.update(this.scroll.current);
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("190274e6e69f3bdfdb77")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mNzk2NzMzNWI2MzhhMGZiNzJlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDQztBQUNXO0FBQ2pCO0FBRWlCO0FBQ047QUFDSTtBQUVEO0FBRVg7QUFFSztBQUNLO0FBRXhDLGlFQUFlLGNBQWNDLCtDQUFZLENBQUM7RUFDeENXLFdBQVdBLENBQUM7SUFBRUMsT0FBTztJQUFFQyxPQUFPO0lBQUVDLFFBQVE7SUFBRUMsWUFBWSxHQUFHO0VBQUssQ0FBQyxFQUFFO0lBQy9ELEtBQUssQ0FBQyxDQUFDO0lBRVBoQixxREFBUSxDQUFDLElBQUksQ0FBQztJQUVkLElBQUksQ0FBQ2EsT0FBTyxHQUFHO01BQ2IsR0FBR0E7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDSSxTQUFTLEdBQUc7TUFDZkgsT0FBTztNQUNQQyxRQUFRLEVBQUU7UUFDUkcsb0JBQW9CLEVBQUUsOEJBQThCO1FBQ3BEQyxnQkFBZ0IsRUFBRSwyQkFBMkI7UUFDN0NDLGtCQUFrQixFQUFFLDZCQUE2QjtRQUVqRCxHQUFHTDtNQUNMO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ00sTUFBTSxHQUFHO01BQ1pDLElBQUksRUFBRSxJQUFJO01BQ1ZDLFFBQVEsRUFBRSxDQUFDO01BQ1hDLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLE1BQU0sRUFBRSxDQUFDO01BQ1RDLEtBQUssRUFBRTtJQUNULENBQUM7SUFFRCxJQUFJLENBQUNWLFlBQVksR0FBR0EsWUFBWTtJQUVoQyxJQUFJLENBQUNXLGVBQWUsR0FBR3hCLDZDQUFNLENBQUMsV0FBVyxDQUFDO0lBQzFDeUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUNmO0VBRUFDLE1BQU1BLENBQUEsRUFBRztJQUNQLElBQUksQ0FBQ0MsVUFBVSxHQUFHLEVBQUU7SUFFcEIsSUFBSSxDQUFDakIsT0FBTyxHQUFHa0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDaEIsU0FB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QSxJQUFJLElBQUksQ0FBQ3RFLFFBQVEsQ0FBQzRCLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNZLFNBQVMsQ0FBQyxJQUFJLENBQUN4QyxRQUFRLENBQUM0QixPQUFPLEVBQUUsSUFBSSxDQUFDdEIsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFDNUQ7SUFFQSxJQUFJLENBQUNILE1BQU0sQ0FBQ2lDLElBQUksR0FBRyxJQUFJLENBQUNqQyxNQUFNLENBQUNHLE9BQU87SUFDdEMsSUFBSSxJQUFJLENBQUM4RCxRQUFRLEVBQUU7TUFDakIsSUFBSSxDQUFDQSxRQUFRLENBQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM5RCxNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUMzQztFQUNGO0FBQ0Y7Ozs7Ozs7O1VDM05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dG9CaW5kIGZyb20gXCJhdXRvLWJpbmRcIlxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tIFwibm9ybWFsaXplLXdoZWVsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcImFuaW1hdGlvbnMvUGFyYWdyYXBoXCJcbmltcG9ydCBSZXZlYWwgZnJvbSBcImFuaW1hdGlvbnMvUmV2ZWFsXCJcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiYW5pbWF0aW9ucy9QYXJhbGxheFwiXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSBcImNsYXNzZXMvRGV0ZWN0aW9uXCJcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IHsgbWFwRWFjaCB9IGZyb20gXCJ1dGlscy9kb21cIlxuaW1wb3J0IHsgY2xhbXAsIGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc2VzLCBlbGVtZW50LCBlbGVtZW50cywgaXNTY3JvbGxhYmxlID0gdHJ1ZSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC4uLmNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICAgIGFuaW1hdGlvbnNSZXZlYWw6ICdbZGF0YS1hbmltYXRpb249XCJyZXZlYWxcIl0nLFxuICAgICAgICBhbmltYXRpb25zUGFyYWxsYXg6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhbGxheFwiXScsXG5cbiAgICAgICAgLi4uZWxlbWVudHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGVhc2U6IDAuMDcsXG4gICAgICBwb3NpdGlvbjogMCxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIHRoaXMuaXNTY3JvbGxhYmxlID0gaXNTY3JvbGxhYmxlXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKClcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5lbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cywgKHNlbGVjdG9yLCBrZXkpID0+IHtcbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgIGVhc2U6IDAuMDcsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgIGxpbWl0OiB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnBhcmFncmFwaHMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucGFyYWdyYXBocylcblxuICAgIHRoaXMucmV2ZWFsc1RleHQgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1JldmVhbCwgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFJldmVhbCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5yZXZlYWxzVGV4dClcblxuICAgIHRoaXMucGFyYWxsYXhFZmZlY3RzID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNQYXJhbGxheCwgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFBhcmFsbGF4KHsgZWxlbWVudCB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLnBhcmFsbGF4RWZmZWN0cylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG4gIH1cblxuICBzZXQodmFsdWUpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCA9IHZhbHVlXG5cbiAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gIH1cblxuICBzaG93KHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICBoaWRlKHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgdHJhbnNmb3JtKGVsZW1lbnQsIHkpIHtcbiAgICBlbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGUzZCgwLCAkey1NYXRoLnJvdW5kKHkpfXB4LCAwKWBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHMud3JhcHBlcikgcmV0dXJuXG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAgIGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4ge1xuICAgICAgICBhbmltYXRpb24ub25SZXNpemUgJiYgYW5pbWF0aW9uLm9uUmVzaXplKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgLy8gaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMuc2Nyb2xsLnBvc2l0aW9uID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAgIHRoaXMuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuICAgIGNvbnN0IGRpc3RhbmNlID0gKHRoaXMuc3RhcnQgLSB5KSAqIDNcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnBvc2l0aW9uICsgZGlzdGFuY2VcbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIC8vIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICB9XG5cbiAgb25XaGVlbChldmVudCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBOb3JtYWxpemVXaGVlbChldmVudClcbiAgICBjb25zdCBzcGVlZCA9IG5vcm1hbGl6ZWQucGl4ZWxZXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gc3BlZWRcblxuICAgIHJldHVybiBzcGVlZFxuICB9XG5cbiAgLyoqXG4gICAqIEZyYW1lcy5cbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBjbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGxlcnAodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5lYXNlKVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RvcnMuZWxlbWVudHMuc2Nyb2xsKSB7XG4gICAgICB0aGlzLnNjcm9sbFBlcmNlbnRhZ2UgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC8gdGhpcy5zY3JvbGwubGltaXRcbiAgICAgIHRoaXMuZWxlbWVudHMuc2Nyb2xsLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGBzY2FsZVkoJHt0aGlzLnNjcm9sbFBlcmNlbnRhZ2V9KWBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICBpZiAodGhpcy5wYXJhbGxheCkge1xuICAgICAgdGhpcy5wYXJhbGxheC51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICB9XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE5MDI3NGU2ZTY5ZjNiZGZkYjc3XCIpIl0sIm5hbWVzIjpbIkF1dG9CaW5kIiwiRXZlbnRFbWl0dGVyIiwiTm9ybWFsaXplV2hlZWwiLCJQcmVmaXgiLCJQYXJhZ3JhcGgiLCJSZXZlYWwiLCJQYXJhbGxheCIsIkRldGVjdGlvbiIsImVhY2giLCJtYXBFYWNoIiwiY2xhbXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaXNTY3JvbGxhYmxlIiwic2VsZWN0b3JzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJhbmltYXRpb25zUmV2ZWFsIiwiYW5pbWF0aW9uc1BhcmFsbGF4Iiwic2Nyb2xsIiwiZWFzZSIsInBvc2l0aW9uIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImFuaW1hdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY3JlYXRlQW5pbWF0aW9ucyIsInBhcmFncmFwaHMiLCJwdXNoIiwicmV2ZWFsc1RleHQiLCJwYXJhbGxheEVmZmVjdHMiLCJyZXNldCIsInNldCIsInZhbHVlIiwibGFzdCIsInRyYW5zZm9ybSIsInNob3ciLCJ1cmwiLCJpc1Zpc2libGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhpZGUiLCJ5Iiwic3R5bGUiLCJNYXRoIiwicm91bmQiLCJvblJlc2l6ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJhbmltYXRpb24iLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwic3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZCIsInNwZWVkIiwicGl4ZWxZIiwidXBkYXRlIiwiZmxvb3IiLCJzY3JvbGxQZXJjZW50YWdlIiwicGFyYWxsYXgiXSwic291cmNlUm9vdCI6IiJ9