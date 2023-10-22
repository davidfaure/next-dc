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
/* harmony import */ var classes_Detection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classes/Detection */ "./app/classes/Detection.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/dom */ "./app/utils/dom.js");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");










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
    lodash_each__WEBPACK_IMPORTED_MODULE_7___default()(this.selectors.elements, (selector, key) => {
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
    this.paragraphs = (0,utils_dom__WEBPACK_IMPORTED_MODULE_8__.mapEach)(this.elements.animationsParagraphs, element => {
      return new animations_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"]({
        element
      });
    });
    this.animations.push(...this.paragraphs);
    this.revealsText = (0,utils_dom__WEBPACK_IMPORTED_MODULE_8__.mapEach)(this.elements.animationsReveal, element => {
      return new animations_Reveal__WEBPACK_IMPORTED_MODULE_5__["default"]({
        element
      });
    });
    this.animations.push(...this.revealsText);
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
      lodash_each__WEBPACK_IMPORTED_MODULE_7___default()(this.animations, animation => {
        animation.onResize && animation.onResize();
      });
    });
  }
  onTouchDown(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_6__["default"].isMobile()) return;
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientY : event.clientY;
  }
  onTouchMove(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_6__["default"].isMobile() || !this.isDown) return;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = (this.start - y) * 3;
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_6__["default"].isMobile()) return;
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
    this.scroll.target = (0,utils_math__WEBPACK_IMPORTED_MODULE_9__.clamp)(0, this.scroll.limit, this.scroll.target);
    this.scroll.current = (0,utils_math__WEBPACK_IMPORTED_MODULE_9__.lerp)(this.scroll.current, this.scroll.target, this.scroll.ease);
    this.scroll.current = Math.floor(this.scroll.current);
    if (this.scroll.current < 0.1) {
      this.scroll.current = 0;
    }
    if (this.selectors.elements.scroll) {
      this.scrollPercentage = this.scroll.current / this.scroll.limit;
      this.elements.scroll.style[this.transformPrefix] = `scaleY(${this.scrollPercentage})`;
    }
    console.log(this.elements.wrapper, this.scroll);
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
/******/ 	__webpack_require__.h = () => ("cf797a20723ee37c9f06")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ3BDLFFBQVEsQ0FBQ3lCLE9BQU8sRUFBRSxJQUFJLENBQUNwQixNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ0gsTUFBTSxDQUFDOEIsSUFBSSxHQUFHLElBQUksQ0FBQzlCLE1BQU0sQ0FBQ0csT0FBTztFQUN4QztBQUNGOzs7Ozs7OztVQ2pOQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiXG5pbXBvcnQgUmV2ZWFsIGZyb20gXCJhbmltYXRpb25zL1JldmVhbFwiXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSBcImNsYXNzZXMvRGV0ZWN0aW9uXCJcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IHsgbWFwRWFjaCB9IGZyb20gXCJ1dGlscy9kb21cIlxuaW1wb3J0IHsgY2xhbXAsIGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc2VzLCBlbGVtZW50LCBlbGVtZW50cywgaXNTY3JvbGxhYmxlID0gdHJ1ZSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC4uLmNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICAgIGFuaW1hdGlvbnNSZXZlYWw6ICdbZGF0YS1hbmltYXRpb249XCJyZXZlYWxcIl0nLFxuXG4gICAgICAgIC4uLmVsZW1lbnRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IGlzU2Nyb2xsYWJsZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5lbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cywgKHNlbGVjdG9yLCBrZXkpID0+IHtcbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgIGVhc2U6IDAuMDcsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgIGxpbWl0OiB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnBhcmFncmFwaHMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucGFyYWdyYXBocylcblxuICAgIHRoaXMucmV2ZWFsc1RleHQgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1JldmVhbCwgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFJldmVhbCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5yZXZlYWxzVGV4dClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG4gIH1cblxuICBzZXQodmFsdWUpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCA9IHZhbHVlXG5cbiAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gIH1cblxuICBzaG93KHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICBoaWRlKHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgdHJhbnNmb3JtKGVsZW1lbnQsIHkpIHtcbiAgICBlbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGUzZCgwLCAkey1NYXRoLnJvdW5kKHkpfXB4LCAwKWBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHMud3JhcHBlcikgcmV0dXJuXG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAgIGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4ge1xuICAgICAgICBhbmltYXRpb24ub25SZXNpemUgJiYgYW5pbWF0aW9uLm9uUmVzaXplKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMuc2Nyb2xsLnBvc2l0aW9uID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAgIHRoaXMuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpIHx8ICF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgICBjb25zdCBkaXN0YW5jZSA9ICh0aGlzLnN0YXJ0IC0geSkgKiAzXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5wb3NpdGlvbiArIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG4gICAgY29uc3Qgc3BlZWQgPSBub3JtYWxpemVkLnBpeGVsWVxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHNwZWVkXG5cbiAgICByZXR1cm4gc3BlZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBGcmFtZXMuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwuZWFzZSlcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbC5jdXJyZW50KVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnRzLnNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxQZXJjZW50YWdlID0gdGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0XG4gICAgICB0aGlzLmVsZW1lbnRzLnNjcm9sbC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgc2NhbGVZKCR7dGhpcy5zY3JvbGxQZXJjZW50YWdlfSlgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbClcblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuZWxlbWVudHMud3JhcHBlciwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZjc5N2EyMDcyM2VlMzdjOWYwNlwiKSJdLCJuYW1lcyI6WyJBdXRvQmluZCIsIkV2ZW50RW1pdHRlciIsIk5vcm1hbGl6ZVdoZWVsIiwiUHJlZml4IiwiUGFyYWdyYXBoIiwiUmV2ZWFsIiwiRGV0ZWN0aW9uIiwiZWFjaCIsIm1hcEVhY2giLCJjbGFtcCIsImxlcnAiLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpc1Njcm9sbGFibGUiLCJzZWxlY3RvcnMiLCJhbmltYXRpb25zUGFyYWdyYXBocyIsImFuaW1hdGlvbnNSZXZlYWwiLCJzY3JvbGwiLCJlYXNlIiwicG9zaXRpb24iLCJjdXJyZW50IiwidGFyZ2V0IiwibGltaXQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJjcmVhdGUiLCJhbmltYXRpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJwYXJhZ3JhcGhzIiwicHVzaCIsInJldmVhbHNUZXh0IiwicmVzZXQiLCJzZXQiLCJ2YWx1ZSIsImxhc3QiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidXJsIiwiaXNWaXNpYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaWRlIiwieSIsInN0eWxlIiwiTWF0aCIsInJvdW5kIiwib25SZXNpemUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwiYW5pbWF0aW9uIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzTW9iaWxlIiwiaXNEb3duIiwic3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZCIsInNwZWVkIiwicGl4ZWxZIiwidXBkYXRlIiwiZmxvb3IiLCJzY3JvbGxQZXJjZW50YWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=