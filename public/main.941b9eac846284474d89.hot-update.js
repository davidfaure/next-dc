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
/******/ 	__webpack_require__.h = () => ("16e5a8235d681b82e870")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxNQUFNLENBQUN3QyxLQUFLLENBQUMsSUFBSSxDQUFDbEMsZUFBZSxDQUFDLEdBQUksVUFBUyxJQUFJLENBQUN5RCxnQkFBaUIsR0FBRTtJQUN2RjtJQUVBLElBQUksSUFBSSxDQUFDckUsUUFBUSxDQUFDMEIsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ1ksU0FBUyxDQUFDLElBQUksQ0FBQ3RDLFFBQVEsQ0FBQzBCLE9BQU8sRUFBRSxJQUFJLENBQUNwQixNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ0gsTUFBTSxDQUFDK0IsSUFBSSxHQUFHLElBQUksQ0FBQy9CLE1BQU0sQ0FBQ0csT0FBTztFQUN4QztBQUNGOzs7Ozs7OztVQ3ZOQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiXG5pbXBvcnQgUmV2ZWFsIGZyb20gXCJhbmltYXRpb25zL1JldmVhbFwiXG5pbXBvcnQgU2NhbGUgZnJvbSBcImFuaW1hdGlvbnMvU2NhbGVcIlxuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCJjbGFzc2VzL0RldGVjdGlvblwiXG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCB7IG1hcEVhY2ggfSBmcm9tIFwidXRpbHMvZG9tXCJcbmltcG9ydCB7IGNsYW1wLCBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHsgY2xhc3NlcywgZWxlbWVudCwgZWxlbWVudHMsIGlzU2Nyb2xsYWJsZSA9IHRydWUgfSkge1xuICAgIHN1cGVyKClcblxuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAuLi5jbGFzc2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RvcnMgPSB7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgYW5pbWF0aW9uc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxuICAgICAgICBhbmltYXRpb25zUmV2ZWFsOiAnW2RhdGEtYW5pbWF0aW9uPVwicmV2ZWFsXCJdJyxcbiAgICAgICAgYW5pbWF0aW9uc1NjYWxlOiAnW2RhdGEtYW5pbWF0aW9uPVwic2NhbGVcIl0nLFxuXG4gICAgICAgIC4uLmVsZW1lbnRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IGlzU2Nyb2xsYWJsZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5lbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cywgKHNlbGVjdG9yLCBrZXkpID0+IHtcbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgIGVhc2U6IDAuMDcsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgIGxpbWl0OiB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnBhcmFncmFwaHMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucGFyYWdyYXBocylcblxuICAgIHRoaXMucmV2ZWFsc1RleHQgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1JldmVhbCwgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFJldmVhbCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5yZXZlYWxzVGV4dClcblxuICAgIHRoaXMuc2NhbGVJbWFnZXMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1NjYWxlLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgU2NhbGUoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuc2NhbGVJbWFnZXMpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuICB9XG5cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSB2YWx1ZVxuXG4gICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICB9XG5cbiAgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIHRyYW5zZm9ybShlbGVtZW50LCB5KSB7XG4gICAgZWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlM2QoMCwgJHstTWF0aC5yb3VuZCh5KX1weCwgMClgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHJldHVyblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLm9uUmVzaXplICYmIGFuaW1hdGlvbi5vblJlc2l6ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnNjcm9sbC5wb3NpdGlvbiA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSB8fCAhdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gICAgY29uc3QgZGlzdGFuY2UgPSAodGhpcy5zdGFydCAtIHkpICogM1xuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwucG9zaXRpb24gKyBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuICAgIGNvbnN0IHNwZWVkID0gbm9ybWFsaXplZC5waXhlbFlcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBzcGVlZFxuXG4gICAgcmV0dXJuIHNwZWVkXG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycCh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmVhc2UpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGwuY3VycmVudClcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4xKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cy5zY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsUGVyY2VudGFnZSA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdFxuICAgICAgdGhpcy5lbGVtZW50cy5zY3JvbGwuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlWSgke3RoaXMuc2Nyb2xsUGVyY2VudGFnZX0pYFxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuZWxlbWVudHMud3JhcHBlciwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNmU1YTgyMzVkNjgxYjgyZTg3MFwiKSJdLCJuYW1lcyI6WyJBdXRvQmluZCIsIkV2ZW50RW1pdHRlciIsIk5vcm1hbGl6ZVdoZWVsIiwiUHJlZml4IiwiUGFyYWdyYXBoIiwiUmV2ZWFsIiwiU2NhbGUiLCJEZXRlY3Rpb24iLCJlYWNoIiwibWFwRWFjaCIsImNsYW1wIiwibGVycCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlzU2Nyb2xsYWJsZSIsInNlbGVjdG9ycyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc1JldmVhbCIsImFuaW1hdGlvbnNTY2FsZSIsInNjcm9sbCIsImVhc2UiLCJwb3NpdGlvbiIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsaW1pdCIsInRyYW5zZm9ybVByZWZpeCIsImNyZWF0ZSIsImFuaW1hdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY3JlYXRlQW5pbWF0aW9ucyIsInBhcmFncmFwaHMiLCJwdXNoIiwicmV2ZWFsc1RleHQiLCJzY2FsZUltYWdlcyIsInJlc2V0Iiwic2V0IiwidmFsdWUiLCJsYXN0IiwidHJhbnNmb3JtIiwic2hvdyIsInVybCIsImlzVmlzaWJsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaGlkZSIsInkiLCJzdHlsZSIsIk1hdGgiLCJyb3VuZCIsIm9uUmVzaXplIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiXyIsImFuaW1hdGlvbiIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc01vYmlsZSIsImlzRG93biIsInN0YXJ0IiwidG91Y2hlcyIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWQiLCJzcGVlZCIsInBpeGVsWSIsInVwZGF0ZSIsImZsb29yIiwic2Nyb2xsUGVyY2VudGFnZSJdLCJzb3VyY2VSb290IjoiIn0=