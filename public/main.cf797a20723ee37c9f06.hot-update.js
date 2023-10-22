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
    console.log("PAGE ???");
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
/******/ 	__webpack_require__.h = () => ("e2c2a038376f1dc07fe1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNXLFNBQVMsQ0FBQyxJQUFJLENBQUN0QyxRQUFRLENBQUMyQixPQUFPLEVBQUUsSUFBSSxDQUFDdEIsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFDNUQ7SUFFQSxJQUFJLENBQUNILE1BQU0sQ0FBQ2dDLElBQUksR0FBRyxJQUFJLENBQUNoQyxNQUFNLENBQUNHLE9BQU87RUFDeEM7QUFDRjs7Ozs7Ozs7VUNuTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIlxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gXCJub3JtYWxpemUtd2hlZWxcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiYW5pbWF0aW9ucy9QYXJhZ3JhcGhcIlxuaW1wb3J0IFJldmVhbCBmcm9tIFwiYW5pbWF0aW9ucy9SZXZlYWxcIlxuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCJjbGFzc2VzL0RldGVjdGlvblwiXG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCB7IG1hcEVhY2ggfSBmcm9tIFwidXRpbHMvZG9tXCJcbmltcG9ydCB7IGNsYW1wLCBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHsgY2xhc3NlcywgZWxlbWVudCwgZWxlbWVudHMsIGlzU2Nyb2xsYWJsZSA9IHRydWUgfSkge1xuICAgIHN1cGVyKClcblxuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAuLi5jbGFzc2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RvcnMgPSB7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgYW5pbWF0aW9uc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxuICAgICAgICBhbmltYXRpb25zUmV2ZWFsOiAnW2RhdGEtYW5pbWF0aW9uPVwicmV2ZWFsXCJdJyxcblxuICAgICAgICAuLi5lbGVtZW50c1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuXG4gICAgdGhpcy5pc1Njcm9sbGFibGUgPSBpc1Njcm9sbGFibGVcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICBjb25zb2xlLmxvZyhcIlBBR0UgPz8/XCIpXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25zID0gW11cblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvcnMuZWxlbWVudHMsIChzZWxlY3Rvciwga2V5KSA9PiB7XG4gICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gc2VsZWN0b3JcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gc2VsZWN0b3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc1Njcm9sbGFibGUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgICBlYXNlOiAwLjA3LFxuICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICBsaW1pdDogdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5wYXJhZ3JhcGhzID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgUGFyYWdyYXBoKHsgZWxlbWVudCB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLnBhcmFncmFwaHMpXG5cbiAgICB0aGlzLnJldmVhbHNUZXh0ID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNSZXZlYWwsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBSZXZlYWwoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucmV2ZWFsc1RleHQpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuICB9XG5cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSB2YWx1ZVxuXG4gICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICB9XG5cbiAgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIHRyYW5zZm9ybShlbGVtZW50LCB5KSB7XG4gICAgZWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlM2QoMCwgJHstTWF0aC5yb3VuZCh5KX1weCwgMClgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHJldHVyblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLm9uUmVzaXplICYmIGFuaW1hdGlvbi5vblJlc2l6ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnNjcm9sbC5wb3NpdGlvbiA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSB8fCAhdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gICAgY29uc3QgZGlzdGFuY2UgPSAodGhpcy5zdGFydCAtIHkpICogM1xuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwucG9zaXRpb24gKyBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuICAgIGNvbnN0IHNwZWVkID0gbm9ybWFsaXplZC5waXhlbFlcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBzcGVlZFxuXG4gICAgcmV0dXJuIHNwZWVkXG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycCh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmVhc2UpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGwuY3VycmVudClcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4xKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cy5zY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsUGVyY2VudGFnZSA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdFxuICAgICAgdGhpcy5lbGVtZW50cy5zY3JvbGwuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlWSgke3RoaXMuc2Nyb2xsUGVyY2VudGFnZX0pYFxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMud3JhcHBlciwgdGhpcy5zY3JvbGwpXG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTJjMmEwMzgzNzZmMWRjMDdmZTFcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJFdmVudEVtaXR0ZXIiLCJOb3JtYWxpemVXaGVlbCIsIlByZWZpeCIsIlBhcmFncmFwaCIsIlJldmVhbCIsIkRldGVjdGlvbiIsImVhY2giLCJtYXBFYWNoIiwiY2xhbXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaXNTY3JvbGxhYmxlIiwic2VsZWN0b3JzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJhbmltYXRpb25zUmV2ZWFsIiwic2Nyb2xsIiwiZWFzZSIsInBvc2l0aW9uIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImFuaW1hdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY3JlYXRlQW5pbWF0aW9ucyIsInBhcmFncmFwaHMiLCJwdXNoIiwicmV2ZWFsc1RleHQiLCJyZXNldCIsInNldCIsInZhbHVlIiwibGFzdCIsInRyYW5zZm9ybSIsInNob3ciLCJ1cmwiLCJpc1Zpc2libGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhpZGUiLCJ5Iiwic3R5bGUiLCJNYXRoIiwicm91bmQiLCJvblJlc2l6ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJhbmltYXRpb24iLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNNb2JpbGUiLCJpc0Rvd24iLCJzdGFydCIsInRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJub3JtYWxpemVkIiwic3BlZWQiLCJwaXhlbFkiLCJ1cGRhdGUiLCJmbG9vciIsInNjcm9sbFBlcmNlbnRhZ2UiXSwic291cmNlUm9vdCI6IiJ9