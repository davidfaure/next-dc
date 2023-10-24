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
    this.parallaxEffects = (0,utils_dom__WEBPACK_IMPORTED_MODULE_8__.mapEach)(this.elements.animationsParallax, element => {
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
      lodash_each__WEBPACK_IMPORTED_MODULE_7___default()(this.animations, animation => {
        animation.onResize && animation.onResize();
      });
    });
  }
  onTouchDown(event) {
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
    if (this.elements.wrapper) {
      this.transform(this.elements.wrapper, this.scroll.current);
    }
    this.scroll.last = this.scroll.current;
    if (this.parallaxEffects) {
      lodash_each__WEBPACK_IMPORTED_MODULE_7___default()(this.parallaxEffects, effect => {
        effect.update(this.scroll.current);
      });
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("df344f941c8b6322cbb9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDNEIsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ1ksU0FBUyxDQUFDLElBQUksQ0FBQ3hDLFFBQVEsQ0FBQzRCLE9BQU8sRUFBRSxJQUFJLENBQUN0QixNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ0gsTUFBTSxDQUFDaUMsSUFBSSxHQUFHLElBQUksQ0FBQ2pDLE1BQU0sQ0FBQ0csT0FBTztJQUN0QyxJQUFJLElBQUksQ0FBQzBCLGVBQWUsRUFBRTtNQUN4QjFDLGtEQUFJLENBQUMsSUFBSSxDQUFDMEMsZUFBZSxFQUFFb0MsTUFBTSxJQUFJO1FBQ25DQSxNQUFNLENBQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM5RCxNQUFNLENBQUNHLE9BQU8sQ0FBQztNQUNwQyxDQUFDLENBQUM7SUFDSjtFQUNGO0FBQ0Y7Ozs7Ozs7O1VDdk5BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dG9CaW5kIGZyb20gXCJhdXRvLWJpbmRcIlxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tIFwibm9ybWFsaXplLXdoZWVsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcImFuaW1hdGlvbnMvUGFyYWdyYXBoXCJcbmltcG9ydCBSZXZlYWwgZnJvbSBcImFuaW1hdGlvbnMvUmV2ZWFsXCJcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiYW5pbWF0aW9ucy9QYXJhbGxheFwiXG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCB7IG1hcEVhY2ggfSBmcm9tIFwidXRpbHMvZG9tXCJcbmltcG9ydCB7IGNsYW1wLCBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHsgY2xhc3NlcywgZWxlbWVudCwgZWxlbWVudHMsIGlzU2Nyb2xsYWJsZSA9IHRydWUgfSkge1xuICAgIHN1cGVyKClcblxuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAuLi5jbGFzc2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RvcnMgPSB7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgYW5pbWF0aW9uc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxuICAgICAgICBhbmltYXRpb25zUmV2ZWFsOiAnW2RhdGEtYW5pbWF0aW9uPVwicmV2ZWFsXCJdJyxcbiAgICAgICAgYW5pbWF0aW9uc1BhcmFsbGF4OiAnW2RhdGEtYW5pbWF0aW9uPVwicGFyYWxsYXhcIl0nLFxuXG4gICAgICAgIC4uLmVsZW1lbnRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IGlzU2Nyb2xsYWJsZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgICBjb25zb2xlLmxvZygpXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25zID0gW11cblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvcnMuZWxlbWVudHMsIChzZWxlY3Rvciwga2V5KSA9PiB7XG4gICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gc2VsZWN0b3JcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gc2VsZWN0b3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc1Njcm9sbGFibGUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgICBlYXNlOiAwLjA3LFxuICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICBsaW1pdDogdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5wYXJhZ3JhcGhzID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgUGFyYWdyYXBoKHsgZWxlbWVudCB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLnBhcmFncmFwaHMpXG5cbiAgICB0aGlzLnJldmVhbHNUZXh0ID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNSZXZlYWwsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBSZXZlYWwoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucmV2ZWFsc1RleHQpXG5cbiAgICB0aGlzLnBhcmFsbGF4RWZmZWN0cyA9IG1hcEVhY2godGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWxsYXgsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhbGxheCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5wYXJhbGxheEVmZmVjdHMpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuICB9XG5cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSB2YWx1ZVxuXG4gICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICB9XG5cbiAgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIHRyYW5zZm9ybShlbGVtZW50LCB5KSB7XG4gICAgZWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlM2QoMCwgJHstTWF0aC5yb3VuZCh5KX1weCwgMClgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHJldHVyblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLm9uUmVzaXplICYmIGFuaW1hdGlvbi5vblJlc2l6ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgdGhpcy5zY3JvbGwucG9zaXRpb24gPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgdGhpcy5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gICAgY29uc3QgZGlzdGFuY2UgPSAodGhpcy5zdGFydCAtIHkpICogM1xuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwucG9zaXRpb24gKyBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuICB9XG5cbiAgb25XaGVlbChldmVudCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBOb3JtYWxpemVXaGVlbChldmVudClcbiAgICBjb25zdCBzcGVlZCA9IG5vcm1hbGl6ZWQucGl4ZWxZXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gc3BlZWRcblxuICAgIHJldHVybiBzcGVlZFxuICB9XG5cbiAgLyoqXG4gICAqIEZyYW1lcy5cbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBjbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGxlcnAodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5lYXNlKVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RvcnMuZWxlbWVudHMuc2Nyb2xsKSB7XG4gICAgICB0aGlzLnNjcm9sbFBlcmNlbnRhZ2UgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC8gdGhpcy5zY3JvbGwubGltaXRcbiAgICAgIHRoaXMuZWxlbWVudHMuc2Nyb2xsLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGBzY2FsZVkoJHt0aGlzLnNjcm9sbFBlcmNlbnRhZ2V9KWBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICBpZiAodGhpcy5wYXJhbGxheEVmZmVjdHMpIHtcbiAgICAgIGVhY2godGhpcy5wYXJhbGxheEVmZmVjdHMsIGVmZmVjdCA9PiB7XG4gICAgICAgIGVmZmVjdC51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZjM0NGY5NDFjOGI2MzIyY2JiOVwiKSJdLCJuYW1lcyI6WyJBdXRvQmluZCIsIkV2ZW50RW1pdHRlciIsIk5vcm1hbGl6ZVdoZWVsIiwiUHJlZml4IiwiUGFyYWdyYXBoIiwiUmV2ZWFsIiwiUGFyYWxsYXgiLCJlYWNoIiwibWFwRWFjaCIsImNsYW1wIiwibGVycCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlzU2Nyb2xsYWJsZSIsInNlbGVjdG9ycyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc1JldmVhbCIsImFuaW1hdGlvbnNQYXJhbGxheCIsInNjcm9sbCIsImVhc2UiLCJwb3NpdGlvbiIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsaW1pdCIsInRyYW5zZm9ybVByZWZpeCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJhbmltYXRpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJwYXJhZ3JhcGhzIiwicHVzaCIsInJldmVhbHNUZXh0IiwicGFyYWxsYXhFZmZlY3RzIiwicmVzZXQiLCJzZXQiLCJ2YWx1ZSIsImxhc3QiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidXJsIiwiaXNWaXNpYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaWRlIiwieSIsInN0eWxlIiwiTWF0aCIsInJvdW5kIiwib25SZXNpemUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwiYW5pbWF0aW9uIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInN0YXJ0IiwidG91Y2hlcyIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWQiLCJzcGVlZCIsInBpeGVsWSIsInVwZGF0ZSIsImZsb29yIiwic2Nyb2xsUGVyY2VudGFnZSIsImVmZmVjdCJdLCJzb3VyY2VSb290IjoiIn0=