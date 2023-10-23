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
/* harmony import */ var animations_Scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animations/Scale */ "./app/animations/Scale.js");
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
        animationsScale: '[data-animation="scale"]',
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
    this.scaleImages = (0,utils_dom__WEBPACK_IMPORTED_MODULE_9__.mapEach)(this.elements.animationsScale, element => {
      return new animations_Scale__WEBPACK_IMPORTED_MODULE_6__["default"]({
        element
      });
    });
    this.animations.push(...this.scaleImages);
    console.log(this.animations, "THIS ANIMATION");
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
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_7__["default"].isMobile()) return;
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientY : event.clientY;
  }
  onTouchMove(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_7__["default"].isMobile() || !this.isDown) return;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = (this.start - y) * 3;
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_7__["default"].isMobile()) return;
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
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3135965b98d7bce6e037")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxHQUFHLElBQUksQ0FBQ0gsTUFBTSxDQUFDSyxLQUFLO01BQy9ELElBQUksQ0FBQ1gsUUFBUSxDQUFDTSxNQUFNLENBQUMwQyxLQUFLLENBQUMsSUFBSSxDQUFDcEMsZUFBZSxDQUFDLEdBQUksVUFBUyxJQUFJLENBQUMyRCxnQkFBaUIsR0FBRTtJQUN2RjtJQUVBLElBQUksSUFBSSxDQUFDdkUsUUFBUSxDQUFDMEIsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ2MsU0FBUyxDQUFDLElBQUksQ0FBQ3hDLFFBQVEsQ0FBQzBCLE9BQU8sRUFBRSxJQUFJLENBQUNwQixNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ0gsTUFBTSxDQUFDaUMsSUFBSSxHQUFHLElBQUksQ0FBQ2pDLE1BQU0sQ0FBQ0csT0FBTztFQUN4QztBQUNGOzs7Ozs7OztVQ3pOQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiXG5pbXBvcnQgUmV2ZWFsIGZyb20gXCJhbmltYXRpb25zL1JldmVhbFwiXG5pbXBvcnQgU2NhbGUgZnJvbSBcImFuaW1hdGlvbnMvU2NhbGVcIlxuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCJjbGFzc2VzL0RldGVjdGlvblwiXG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCB7IG1hcEVhY2ggfSBmcm9tIFwidXRpbHMvZG9tXCJcbmltcG9ydCB7IGNsYW1wLCBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHsgY2xhc3NlcywgZWxlbWVudCwgZWxlbWVudHMsIGlzU2Nyb2xsYWJsZSA9IHRydWUgfSkge1xuICAgIHN1cGVyKClcblxuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAuLi5jbGFzc2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RvcnMgPSB7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgYW5pbWF0aW9uc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxuICAgICAgICBhbmltYXRpb25zUmV2ZWFsOiAnW2RhdGEtYW5pbWF0aW9uPVwicmV2ZWFsXCJdJyxcbiAgICAgICAgYW5pbWF0aW9uc1NjYWxlOiAnW2RhdGEtYW5pbWF0aW9uPVwic2NhbGVcIl0nLFxuXG4gICAgICAgIC4uLmVsZW1lbnRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IGlzU2Nyb2xsYWJsZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5lbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cywgKHNlbGVjdG9yLCBrZXkpID0+IHtcbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgIGVhc2U6IDAuMDcsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgIGxpbWl0OiB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnBhcmFncmFwaHMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucGFyYWdyYXBocylcblxuICAgIHRoaXMucmV2ZWFsc1RleHQgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1JldmVhbCwgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFJldmVhbCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5yZXZlYWxzVGV4dClcblxuICAgIHRoaXMuc2NhbGVJbWFnZXMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1NjYWxlLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgU2NhbGUoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuc2NhbGVJbWFnZXMpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbnMsIFwiVEhJUyBBTklNQVRJT05cIilcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG4gIH1cblxuICBzZXQodmFsdWUpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCA9IHZhbHVlXG5cbiAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gIH1cblxuICBzaG93KHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICBoaWRlKHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgdHJhbnNmb3JtKGVsZW1lbnQsIHkpIHtcbiAgICBlbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGUzZCgwLCAkey1NYXRoLnJvdW5kKHkpfXB4LCAwKWBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHMud3JhcHBlcikgcmV0dXJuXG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAgIGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4ge1xuICAgICAgICBhbmltYXRpb24ub25SZXNpemUgJiYgYW5pbWF0aW9uLm9uUmVzaXplKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMuc2Nyb2xsLnBvc2l0aW9uID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAgIHRoaXMuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpIHx8ICF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgICBjb25zdCBkaXN0YW5jZSA9ICh0aGlzLnN0YXJ0IC0geSkgKiAzXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5wb3NpdGlvbiArIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG4gICAgY29uc3Qgc3BlZWQgPSBub3JtYWxpemVkLnBpeGVsWVxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHNwZWVkXG5cbiAgICByZXR1cm4gc3BlZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBGcmFtZXMuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwuZWFzZSlcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbC5jdXJyZW50KVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnRzLnNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxQZXJjZW50YWdlID0gdGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0XG4gICAgICB0aGlzLmVsZW1lbnRzLnNjcm9sbC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgc2NhbGVZKCR7dGhpcy5zY3JvbGxQZXJjZW50YWdlfSlgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMxMzU5NjViOThkN2JjZTZlMDM3XCIpIl0sIm5hbWVzIjpbIkF1dG9CaW5kIiwiRXZlbnRFbWl0dGVyIiwiTm9ybWFsaXplV2hlZWwiLCJQcmVmaXgiLCJQYXJhZ3JhcGgiLCJSZXZlYWwiLCJTY2FsZSIsIkRldGVjdGlvbiIsImVhY2giLCJtYXBFYWNoIiwiY2xhbXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaXNTY3JvbGxhYmxlIiwic2VsZWN0b3JzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJhbmltYXRpb25zUmV2ZWFsIiwiYW5pbWF0aW9uc1NjYWxlIiwic2Nyb2xsIiwiZWFzZSIsInBvc2l0aW9uIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiY3JlYXRlIiwiYW5pbWF0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjcmVhdGVBbmltYXRpb25zIiwicGFyYWdyYXBocyIsInB1c2giLCJyZXZlYWxzVGV4dCIsInNjYWxlSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsInJlc2V0Iiwic2V0IiwidmFsdWUiLCJsYXN0IiwidHJhbnNmb3JtIiwic2hvdyIsInVybCIsImlzVmlzaWJsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaGlkZSIsInkiLCJzdHlsZSIsIk1hdGgiLCJyb3VuZCIsIm9uUmVzaXplIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiXyIsImFuaW1hdGlvbiIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc01vYmlsZSIsImlzRG93biIsInN0YXJ0IiwidG91Y2hlcyIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWQiLCJzcGVlZCIsInBpeGVsWSIsInVwZGF0ZSIsImZsb29yIiwic2Nyb2xsUGVyY2VudGFnZSJdLCJzb3VyY2VSb290IjoiIn0=