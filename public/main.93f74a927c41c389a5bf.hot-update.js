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
        element,
        scroll: this.scroll.current
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
/******/ 	__webpack_require__.h = () => ("ee15b40ea3d46ed08bfd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ0ssS0FBSztNQUMvRCxJQUFJLENBQUNYLFFBQVEsQ0FBQ00sTUFBTSxDQUFDd0MsS0FBSyxDQUFDLElBQUksQ0FBQ2xDLGVBQWUsQ0FBQyxHQUFJLFVBQVMsSUFBSSxDQUFDeUQsZ0JBQWlCLEdBQUU7SUFDdkY7SUFFQSxJQUFJLElBQUksQ0FBQ3JFLFFBQVEsQ0FBQzBCLE9BQU8sRUFBRTtNQUN6QixJQUFJLENBQUNZLFNBQVMsQ0FBQyxJQUFJLENBQUN0QyxRQUFRLENBQUMwQixPQUFPLEVBQUUsSUFBSSxDQUFDcEIsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFDNUQ7SUFFQSxJQUFJLENBQUNILE1BQU0sQ0FBQytCLElBQUksR0FBRyxJQUFJLENBQUMvQixNQUFNLENBQUNHLE9BQU87RUFDeEM7QUFDRjs7Ozs7Ozs7VUN2TkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvUGFnZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIlxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gXCJub3JtYWxpemUtd2hlZWxcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiYW5pbWF0aW9ucy9QYXJhZ3JhcGhcIlxuaW1wb3J0IFJldmVhbCBmcm9tIFwiYW5pbWF0aW9ucy9SZXZlYWxcIlxuaW1wb3J0IFNjYWxlIGZyb20gXCJhbmltYXRpb25zL1NjYWxlXCJcblxuaW1wb3J0IERldGVjdGlvbiBmcm9tIFwiY2xhc3Nlcy9EZXRlY3Rpb25cIlxuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgeyBtYXBFYWNoIH0gZnJvbSBcInV0aWxzL2RvbVwiXG5pbXBvcnQgeyBjbGFtcCwgbGVycCB9IGZyb20gXCJ1dGlscy9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3Rvcih7IGNsYXNzZXMsIGVsZW1lbnQsIGVsZW1lbnRzLCBpc1Njcm9sbGFibGUgPSB0cnVlIH0pIHtcbiAgICBzdXBlcigpXG5cbiAgICBBdXRvQmluZCh0aGlzKVxuXG4gICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgLi4uY2xhc3Nlc1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0b3JzID0ge1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGFuaW1hdGlvbnNQYXJhZ3JhcGhzOiAnW2RhdGEtYW5pbWF0aW9uPVwicGFyYWdyYXBoXCJdJyxcbiAgICAgICAgYW5pbWF0aW9uc1JldmVhbDogJ1tkYXRhLWFuaW1hdGlvbj1cInJldmVhbFwiXScsXG4gICAgICAgIGFuaW1hdGlvbnNTY2FsZTogJ1tkYXRhLWFuaW1hdGlvbj1cInNjYWxlXCJdJyxcblxuICAgICAgICAuLi5lbGVtZW50c1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuXG4gICAgdGhpcy5pc1Njcm9sbGFibGUgPSBpc1Njcm9sbGFibGVcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25zID0gW11cblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvcnMuZWxlbWVudHMsIChzZWxlY3Rvciwga2V5KSA9PiB7XG4gICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gc2VsZWN0b3JcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gc2VsZWN0b3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc1Njcm9sbGFibGUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgICBlYXNlOiAwLjA3LFxuICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICBsaW1pdDogdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5wYXJhZ3JhcGhzID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgUGFyYWdyYXBoKHsgZWxlbWVudCB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLnBhcmFncmFwaHMpXG5cbiAgICB0aGlzLnJldmVhbHNUZXh0ID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNSZXZlYWwsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBSZXZlYWwoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucmV2ZWFsc1RleHQpXG5cbiAgICB0aGlzLnNjYWxlSW1hZ2VzID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNTY2FsZSwgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFNjYWxlKHsgZWxlbWVudCwgc2Nyb2xsOiB0aGlzLnNjcm9sbC5jdXJyZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuc2NhbGVJbWFnZXMpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuICB9XG5cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSB2YWx1ZVxuXG4gICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICB9XG5cbiAgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIHRyYW5zZm9ybShlbGVtZW50LCB5KSB7XG4gICAgZWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlM2QoMCwgJHstTWF0aC5yb3VuZCh5KX1weCwgMClgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHJldHVyblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLm9uUmVzaXplICYmIGFuaW1hdGlvbi5vblJlc2l6ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnNjcm9sbC5wb3NpdGlvbiA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSB8fCAhdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gICAgY29uc3QgZGlzdGFuY2UgPSAodGhpcy5zdGFydCAtIHkpICogM1xuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwucG9zaXRpb24gKyBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuICAgIGNvbnN0IHNwZWVkID0gbm9ybWFsaXplZC5waXhlbFlcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBzcGVlZFxuXG4gICAgcmV0dXJuIHNwZWVkXG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycCh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmVhc2UpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGwuY3VycmVudClcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4xKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cy5zY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsUGVyY2VudGFnZSA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdFxuICAgICAgdGhpcy5lbGVtZW50cy5zY3JvbGwuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlWSgke3RoaXMuc2Nyb2xsUGVyY2VudGFnZX0pYFxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuZWxlbWVudHMud3JhcHBlciwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZTE1YjQwZWEzZDQ2ZWQwOGJmZFwiKSJdLCJuYW1lcyI6WyJBdXRvQmluZCIsIkV2ZW50RW1pdHRlciIsIk5vcm1hbGl6ZVdoZWVsIiwiUHJlZml4IiwiUGFyYWdyYXBoIiwiUmV2ZWFsIiwiU2NhbGUiLCJEZXRlY3Rpb24iLCJlYWNoIiwibWFwRWFjaCIsImNsYW1wIiwibGVycCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlzU2Nyb2xsYWJsZSIsInNlbGVjdG9ycyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc1JldmVhbCIsImFuaW1hdGlvbnNTY2FsZSIsInNjcm9sbCIsImVhc2UiLCJwb3NpdGlvbiIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsaW1pdCIsInRyYW5zZm9ybVByZWZpeCIsImNyZWF0ZSIsImFuaW1hdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY3JlYXRlQW5pbWF0aW9ucyIsInBhcmFncmFwaHMiLCJwdXNoIiwicmV2ZWFsc1RleHQiLCJzY2FsZUltYWdlcyIsInJlc2V0Iiwic2V0IiwidmFsdWUiLCJsYXN0IiwidHJhbnNmb3JtIiwic2hvdyIsInVybCIsImlzVmlzaWJsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaGlkZSIsInkiLCJzdHlsZSIsIk1hdGgiLCJyb3VuZCIsIm9uUmVzaXplIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiXyIsImFuaW1hdGlvbiIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc01vYmlsZSIsImlzRG93biIsInN0YXJ0IiwidG91Y2hlcyIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWQiLCJzcGVlZCIsInBpeGVsWSIsInVwZGF0ZSIsImZsb29yIiwic2Nyb2xsUGVyY2VudGFnZSJdLCJzb3VyY2VSb290IjoiIn0=