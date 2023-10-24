"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Parallax.js":
/*!************************************!*\
  !*** ./app/animations/Parallax.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom */ "./app/utils/dom.js");



class Parallax {
  constructor({
    element
  }) {
    this.element = element;
    this.transform = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
    this.media = element.querySelector("img");
    this.media.onload = _ => {
      this.onResize();
    };
    this.parallax = {
      current: -this.amount,
      target: -this.amount
    };
    this.scale = {
      current: 1.15,
      target: 1.15
    };
    this.onResize();
  }
  onResize() {
    this.amount = 150;
    this.offset = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getOffset)(this.element);
  }
  update(scroll) {
    if (!this.offset) return;
    const {
      innerHeight
    } = window;
    const offsetBottom = scroll.current + innerHeight;
    if (offsetBottom >= this.offset.top) {
      this.parallax = (0,_utils_math__WEBPACK_IMPORTED_MODULE_1__.clamp)(-this.amount, this.amount, (0,_utils_math__WEBPACK_IMPORTED_MODULE_1__.map)(this.offset.top - scroll.current, -this.offset.height, innerHeight, this.amount, -this.amount));
      this.scale = (0,_utils_math__WEBPACK_IMPORTED_MODULE_1__.clamp)(1, 1.3, (0,_utils_math__WEBPACK_IMPORTED_MODULE_1__.map)(this.offset.top - scroll.current, -this.offset.height, innerHeight, 1, 1.3));
      this.media.style[this.transform] = `translate3d(0, ${this.parallax}px, 0) scale(${this.scale})`;
    } else {
      this.media.style[this.transform] = `translate3d(0, -${this.amount}px, 0) scale(1.15)`;
    }
  }
}

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
/* harmony import */ var _animations_Parallax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../animations/Parallax */ "./app/animations/Parallax.js");











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
    this.parallaxEffect = (0,utils_dom__WEBPACK_IMPORTED_MODULE_8__.mapEach)(this.elements.animationsParallax, element => {
      return new _animations_Parallax__WEBPACK_IMPORTED_MODULE_10__["default"]({
        element
      });
    });
    this.animations.push(...this.parallaxEffect);
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
/******/ 	__webpack_require__.h = () => ("34021c122b3625b80a7e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxTQUFTLENBQUMsSUFBSSxDQUFDOEIsUUFBUSxDQUFDdUIsT0FBTyxFQUFFLElBQUksQ0FBQ3hDLE1BQU0sQ0FBQ04sT0FBTyxDQUFDO0lBQzVEO0lBRUEsSUFBSSxDQUFDTSxNQUFNLENBQUNrRCxJQUFJLEdBQUcsSUFBSSxDQUFDbEQsTUFBTSxDQUFDTixPQUFPO0VBQ3hDO0FBQ0Y7Ozs7Ozs7O1VDeE5BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1BhcmFsbGF4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgeyBjbGFtcCwgbWFwIH0gZnJvbSBcIi4uL3V0aWxzL21hdGhcIlxuaW1wb3J0IHsgZ2V0T2Zmc2V0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5tZWRpYSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuICAgIHRoaXMubWVkaWEub25sb2FkID0gXyA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKClcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFsbGF4ID0ge1xuICAgICAgY3VycmVudDogLXRoaXMuYW1vdW50LFxuICAgICAgdGFyZ2V0OiAtdGhpcy5hbW91bnRcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlID0ge1xuICAgICAgY3VycmVudDogMS4xNSxcbiAgICAgIHRhcmdldDogMS4xNVxuICAgIH1cblxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5hbW91bnQgPSAxNTBcbiAgICB0aGlzLm9mZnNldCA9IGdldE9mZnNldCh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3dcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBzY3JvbGwuY3VycmVudCArIGlubmVySGVpZ2h0XG5cbiAgICBpZiAob2Zmc2V0Qm90dG9tID49IHRoaXMub2Zmc2V0LnRvcCkge1xuICAgICAgdGhpcy5wYXJhbGxheCA9IGNsYW1wKFxuICAgICAgICAtdGhpcy5hbW91bnQsXG4gICAgICAgIHRoaXMuYW1vdW50LFxuICAgICAgICBtYXAoXG4gICAgICAgICAgdGhpcy5vZmZzZXQudG9wIC0gc2Nyb2xsLmN1cnJlbnQsXG4gICAgICAgICAgLXRoaXMub2Zmc2V0LmhlaWdodCxcbiAgICAgICAgICBpbm5lckhlaWdodCxcbiAgICAgICAgICB0aGlzLmFtb3VudCxcbiAgICAgICAgICAtdGhpcy5hbW91bnRcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgdGhpcy5zY2FsZSA9IGNsYW1wKFxuICAgICAgICAxLFxuICAgICAgICAxLjMsXG4gICAgICAgIG1hcCh0aGlzLm9mZnNldC50b3AgLSBzY3JvbGwuY3VycmVudCwgLXRoaXMub2Zmc2V0LmhlaWdodCwgaW5uZXJIZWlnaHQsIDEsIDEuMylcbiAgICAgIClcblxuICAgICAgdGhpcy5tZWRpYS5zdHlsZVtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1cbiAgICAgIF0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLnBhcmFsbGF4fXB4LCAwKSBzY2FsZSgke3RoaXMuc2NhbGV9KWBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZWRpYS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSBgdHJhbnNsYXRlM2QoMCwgLSR7dGhpcy5hbW91bnR9cHgsIDApIHNjYWxlKDEuMTUpYFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEF1dG9CaW5kIGZyb20gXCJhdXRvLWJpbmRcIlxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tIFwibm9ybWFsaXplLXdoZWVsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcImFuaW1hdGlvbnMvUGFyYWdyYXBoXCJcbmltcG9ydCBSZXZlYWwgZnJvbSBcImFuaW1hdGlvbnMvUmV2ZWFsXCJcblxuaW1wb3J0IERldGVjdGlvbiBmcm9tIFwiY2xhc3Nlcy9EZXRlY3Rpb25cIlxuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgeyBtYXBFYWNoIH0gZnJvbSBcInV0aWxzL2RvbVwiXG5pbXBvcnQgeyBjbGFtcCwgbGVycCB9IGZyb20gXCJ1dGlscy9tYXRoXCJcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiLi4vYW5pbWF0aW9ucy9QYXJhbGxheFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc2VzLCBlbGVtZW50LCBlbGVtZW50cywgaXNTY3JvbGxhYmxlID0gdHJ1ZSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC4uLmNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICAgIGFuaW1hdGlvbnNSZXZlYWw6ICdbZGF0YS1hbmltYXRpb249XCJyZXZlYWxcIl0nLFxuICAgICAgICBhbmltYXRpb25zUGFyYWxsYXg6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhbGxheFwiXScsXG5cbiAgICAgICAgLi4uZWxlbWVudHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGVhc2U6IDAuMDcsXG4gICAgICBwb3NpdGlvbjogMCxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIHRoaXMuaXNTY3JvbGxhYmxlID0gaXNTY3JvbGxhYmxlXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKClcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9ycy5lbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cywgKHNlbGVjdG9yLCBrZXkpID0+IHtcbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBzZWxlY3RvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsYWJsZSkge1xuICAgICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICAgIGVhc2U6IDAuMDcsXG4gICAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB0YXJnZXQ6IDAsXG4gICAgICAgIGxpbWl0OiB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnBhcmFncmFwaHMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucGFyYWdyYXBocylcblxuICAgIHRoaXMucmV2ZWFsc1RleHQgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1JldmVhbCwgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFJldmVhbCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5yZXZlYWxzVGV4dClcblxuICAgIHRoaXMucGFyYWxsYXhFZmZlY3QgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFsbGF4LCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgUGFyYWxsYXgoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucGFyYWxsYXhFZmZlY3QpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuICB9XG5cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSB2YWx1ZVxuXG4gICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICB9XG5cbiAgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIHRyYW5zZm9ybShlbGVtZW50LCB5KSB7XG4gICAgZWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlM2QoMCwgJHstTWF0aC5yb3VuZCh5KX1weCwgMClgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHJldHVyblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLm9uUmVzaXplICYmIGFuaW1hdGlvbi5vblJlc2l6ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnNjcm9sbC5wb3NpdGlvbiA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSB8fCAhdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gICAgY29uc3QgZGlzdGFuY2UgPSAodGhpcy5zdGFydCAtIHkpICogM1xuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwucG9zaXRpb24gKyBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuICAgIGNvbnN0IHNwZWVkID0gbm9ybWFsaXplZC5waXhlbFlcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBzcGVlZFxuXG4gICAgcmV0dXJuIHNwZWVkXG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycCh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmVhc2UpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGwuY3VycmVudClcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4xKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cy5zY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsUGVyY2VudGFnZSA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdFxuICAgICAgdGhpcy5lbGVtZW50cy5zY3JvbGwuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlWSgke3RoaXMuc2Nyb2xsUGVyY2VudGFnZX0pYFxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuZWxlbWVudHMud3JhcHBlciwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNDAyMWMxMjJiMzYyNWI4MGE3ZVwiKSJdLCJuYW1lcyI6WyJQcmVmaXgiLCJjbGFtcCIsIm1hcCIsImdldE9mZnNldCIsIlBhcmFsbGF4IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwibWVkaWEiLCJxdWVyeVNlbGVjdG9yIiwib25sb2FkIiwiXyIsIm9uUmVzaXplIiwicGFyYWxsYXgiLCJjdXJyZW50IiwiYW1vdW50IiwidGFyZ2V0Iiwic2NhbGUiLCJvZmZzZXQiLCJ1cGRhdGUiLCJzY3JvbGwiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsIm9mZnNldEJvdHRvbSIsInRvcCIsImhlaWdodCIsInN0eWxlIiwiQXV0b0JpbmQiLCJFdmVudEVtaXR0ZXIiLCJOb3JtYWxpemVXaGVlbCIsIlBhcmFncmFwaCIsIlJldmVhbCIsIkRldGVjdGlvbiIsImVhY2giLCJtYXBFYWNoIiwibGVycCIsImNsYXNzZXMiLCJlbGVtZW50cyIsImlzU2Nyb2xsYWJsZSIsInNlbGVjdG9ycyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc1JldmVhbCIsImFuaW1hdGlvbnNQYXJhbGxheCIsImVhc2UiLCJwb3NpdGlvbiIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImFuaW1hdGlvbnMiLCJkb2N1bWVudCIsInNlbGVjdG9yIiwia2V5IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiY3JlYXRlQW5pbWF0aW9ucyIsInBhcmFncmFwaHMiLCJwdXNoIiwicmV2ZWFsc1RleHQiLCJwYXJhbGxheEVmZmVjdCIsInJlc2V0Iiwic2V0IiwidmFsdWUiLCJsYXN0Iiwic2hvdyIsInVybCIsImlzVmlzaWJsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaGlkZSIsInkiLCJNYXRoIiwicm91bmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb24iLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNNb2JpbGUiLCJpc0Rvd24iLCJzdGFydCIsInRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJub3JtYWxpemVkIiwic3BlZWQiLCJwaXhlbFkiLCJmbG9vciIsInNjcm9sbFBlcmNlbnRhZ2UiXSwic291cmNlUm9vdCI6IiJ9