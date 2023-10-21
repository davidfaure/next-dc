"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Reveal.js":
/*!**********************************!*\
  !*** ./app/animations/Reveal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({
    element
  }) {
    const lines = [];
    const paragraphs = element.querySelectorAll("h1, h2, p");
    if (paragraphs.length !== 0) {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(paragraphs, element => {
        (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
          element
        });
        (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
          element
        });
        lines.push(...element.querySelectorAll("span span"));
      });
    } else {
      (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
        element
      });
      (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
        element
      });
      lines.push(...element.querySelectorAll("span span"));
    }
    super({
      element,
      elements: {
        lines
      }
    });
    this.onResize();

    // if ("IntersectionObserver" in window) {
    //   this.animateOut()
    // }
  }

  animateIn() {
    super.animateIn();
    console.log(this.lines);
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.lines, (line, lineIndex) => {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(line, word => {
        word.style.transition = `transform 1.5s ${0.5 + lineIndex * 0.1}s ease`;
        word.style[this.transformPrefix] = "translateY(0)";
      });
    });
  }
  animateOut() {
    super.animateOut();
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.lines, line => {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(line, word => {
        word.style[this.transformPrefix] = "translateY(100%)";
      });
    });
  }
  onResize() {
    this.lines = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.calculate)(this.elements.lines);
  }
});

/***/ }),

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
/******/ 	__webpack_require__.h = () => ("3647a546c28a7616e0ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxPQUFPLEdBQUcrQixJQUFJLENBQUNvQixLQUFLLENBQUMsSUFBSSxDQUFDdEQsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFFckQsSUFBSSxJQUFJLENBQUNILE1BQU0sQ0FBQ0csT0FBTyxHQUFHLEdBQUcsRUFBRTtNQUM3QixJQUFJLENBQUNILE1BQU0sQ0FBQ0csT0FBTyxHQUFHLENBQUM7SUFDekI7SUFFQSxJQUFJLElBQUksQ0FBQ04sU0FBUyxDQUFDeEIsUUFBUSxDQUFDMkIsTUFBTSxFQUFFO01BQ2xDLElBQUksQ0FBQ3VELGdCQUFnQixHQUFHLElBQUksQ0FBQ3ZELE1BQU0sQ0FBQ0csT0FBTyxHQUFHLElBQUksQ0FBQ0gsTUFBTSxDQUFDSyxLQUFLO01BQy9ELElBQUksQ0FBQ2hDLFFBQVEsQ0FBQzJCLE1BQU0sQ0FBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUNFLGVBQWUsQ0FBQyxHQUFJLFVBQVMsSUFBSSxDQUFDd0UsZ0JBQWlCLEdBQUU7SUFDdkY7SUFFQSxJQUFJLElBQUksQ0FBQ2xGLFFBQVEsQ0FBQzRDLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNTLFNBQVMsQ0FBQyxJQUFJLENBQUNyRCxRQUFRLENBQUM0QyxPQUFPLEVBQUUsSUFBSSxDQUFDakIsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFDNUQ7SUFFQSxJQUFJLENBQUNILE1BQU0sQ0FBQ3lCLElBQUksR0FBRyxJQUFJLENBQUN6QixNQUFNLENBQUNHLE9BQU87RUFDeEM7QUFDRjs7Ozs7Ozs7VUMvTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUmV2ZWFsLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGNvbnN0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcblxuICAgICAgICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG5cbiAgICAgIGxpbmVzLnB1c2goLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpKVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIC8vIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIC8vIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5saW5lcylcblxuICAgIGVhY2godGhpcy5saW5lcywgKGxpbmUsIGxpbmVJbmRleCkgPT4ge1xuICAgICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAgICAgd29yZC5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAxLjVzICR7MC41ICsgbGluZUluZGV4ICogMC4xfXMgZWFzZWBcbiAgICAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBcInRyYW5zbGF0ZVkoMClcIlxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcblxuICAgIGVhY2godGhpcy5saW5lcywgbGluZSA9PiB7XG4gICAgICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmxpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudHMubGluZXMpXG4gIH1cbn1cbiIsImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiXG5pbXBvcnQgUmV2ZWFsIGZyb20gXCJhbmltYXRpb25zL1JldmVhbFwiXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSBcImNsYXNzZXMvRGV0ZWN0aW9uXCJcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IHsgbWFwRWFjaCB9IGZyb20gXCJ1dGlscy9kb21cIlxuaW1wb3J0IHsgY2xhbXAsIGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc2VzLCBlbGVtZW50LCBlbGVtZW50cywgaXNTY3JvbGxhYmxlID0gdHJ1ZSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC4uLmNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICAgIGFuaW1hdGlvbnNSZXZlYWw6ICdbZGF0YS1hbmltYXRpb249XCJyZXZlYWxcIl0nLFxuXG4gICAgICAgIC4uLmVsZW1lbnRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IGlzU2Nyb2xsYWJsZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5lbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cywgKHNlbGVjdG9yLCBrZXkpID0+IHtcbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgIGVhc2U6IDAuMDcsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgIGxpbWl0OiB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnBhcmFncmFwaHMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucGFyYWdyYXBocylcblxuICAgIHRoaXMucmV2ZWFsc1RleHQgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1JldmVhbCwgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFJldmVhbCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5yZXZlYWxzVGV4dClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG4gIH1cblxuICBzZXQodmFsdWUpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCA9IHZhbHVlXG5cbiAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gIH1cblxuICBzaG93KHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICBoaWRlKHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgdHJhbnNmb3JtKGVsZW1lbnQsIHkpIHtcbiAgICBlbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGUzZCgwLCAkey1NYXRoLnJvdW5kKHkpfXB4LCAwKWBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHMud3JhcHBlcikgcmV0dXJuXG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAgIGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4ge1xuICAgICAgICBhbmltYXRpb24ub25SZXNpemUgJiYgYW5pbWF0aW9uLm9uUmVzaXplKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMuc2Nyb2xsLnBvc2l0aW9uID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAgIHRoaXMuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpIHx8ICF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgICBjb25zdCBkaXN0YW5jZSA9ICh0aGlzLnN0YXJ0IC0geSkgKiAzXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5wb3NpdGlvbiArIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG4gICAgY29uc3Qgc3BlZWQgPSBub3JtYWxpemVkLnBpeGVsWVxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHNwZWVkXG5cbiAgICByZXR1cm4gc3BlZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBGcmFtZXMuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwuZWFzZSlcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbC5jdXJyZW50KVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnRzLnNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxQZXJjZW50YWdlID0gdGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0XG4gICAgICB0aGlzLmVsZW1lbnRzLnNjcm9sbC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgc2NhbGVZKCR7dGhpcy5zY3JvbGxQZXJjZW50YWdlfSlgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM2NDdhNTQ2YzI4YTc2MTZlMGFjXCIpIl0sIm5hbWVzIjpbImVhY2giLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJwdXNoIiwiZWxlbWVudHMiLCJvblJlc2l6ZSIsImFuaW1hdGVJbiIsImNvbnNvbGUiLCJsb2ciLCJsaW5lIiwibGluZUluZGV4Iiwid29yZCIsInN0eWxlIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybVByZWZpeCIsImFuaW1hdGVPdXQiLCJBdXRvQmluZCIsIkV2ZW50RW1pdHRlciIsIk5vcm1hbGl6ZVdoZWVsIiwiUHJlZml4IiwiUGFyYWdyYXBoIiwiUmV2ZWFsIiwiRGV0ZWN0aW9uIiwibWFwRWFjaCIsImNsYW1wIiwibGVycCIsImNsYXNzZXMiLCJpc1Njcm9sbGFibGUiLCJzZWxlY3RvcnMiLCJhbmltYXRpb25zUGFyYWdyYXBocyIsImFuaW1hdGlvbnNSZXZlYWwiLCJzY3JvbGwiLCJlYXNlIiwicG9zaXRpb24iLCJjdXJyZW50IiwidGFyZ2V0IiwibGltaXQiLCJjcmVhdGUiLCJhbmltYXRpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5Iiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY3JlYXRlQW5pbWF0aW9ucyIsInJldmVhbHNUZXh0IiwicmVzZXQiLCJzZXQiLCJ2YWx1ZSIsImxhc3QiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidXJsIiwiaXNWaXNpYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaWRlIiwieSIsIk1hdGgiLCJyb3VuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJhbmltYXRpb24iLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNNb2JpbGUiLCJpc0Rvd24iLCJzdGFydCIsInRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJub3JtYWxpemVkIiwic3BlZWQiLCJwaXhlbFkiLCJ1cGRhdGUiLCJmbG9vciIsInNjcm9sbFBlcmNlbnRhZ2UiXSwic291cmNlUm9vdCI6IiJ9