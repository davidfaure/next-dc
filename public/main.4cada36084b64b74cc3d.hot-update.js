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
      // const scrollPercentage = Math.floor((this.scroll.current / this.scroll.limit) * 100)
      const scrollPercentage = this.scroll.current / this.scroll.limit;
      // console.log(scrollPercentage, "SCROLL %", this.elements)
      this.elements.scroll.style[this.transformPrefix] = `scaleY(${scrollPercentage})`;
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
/******/ 	__webpack_require__.h = () => ("0f8c9ad23055e8dc6583")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNRLE1BQU0sQ0FBQ0csT0FBTyxFQUFFLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxNQUFNLEVBQUUsSUFBSSxDQUFDSixNQUFNLENBQUNDLElBQUksQ0FBQztJQUNyRixJQUFJLENBQUNELE1BQU0sQ0FBQ0csT0FBTyxHQUFHc0MsSUFBSSxDQUFDcUIsS0FBSyxDQUFDLElBQUksQ0FBQzlELE1BQU0sQ0FBQ0csT0FBTyxDQUFDO0lBRXJELElBQUksSUFBSSxDQUFDSCxNQUFNLENBQUNHLE9BQU8sR0FBRyxHQUFHLEVBQUU7TUFDN0IsSUFBSSxDQUFDSCxNQUFNLENBQUNHLE9BQU8sR0FBRyxDQUFDO0lBQ3pCO0lBRUEsSUFBSSxJQUFJLENBQUNMLFNBQVMsQ0FBQ0YsUUFBUSxDQUFDSSxNQUFNLEVBQUU7TUFDbEM7TUFDQSxNQUFNK0QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDL0QsTUFBTSxDQUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDSCxNQUFNLENBQUNLLEtBQUs7TUFDaEU7TUFDQSxJQUFJLENBQUNULFFBQVEsQ0FBQ0ksTUFBTSxDQUFDd0MsS0FBSyxDQUFDLElBQUksQ0FBQ2xDLGVBQWUsQ0FBQyxHQUFJLFVBQVN5RCxnQkFBaUIsR0FBRTtJQUNsRjtJQUVBLElBQUksSUFBSSxDQUFDbkUsUUFBUSxDQUFDd0IsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ1ksU0FBUyxDQUFDLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQ3dCLE9BQU8sRUFBRSxJQUFJLENBQUNwQixNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ0gsTUFBTSxDQUFDK0IsSUFBSSxHQUFHLElBQUksQ0FBQy9CLE1BQU0sQ0FBQ0csT0FBTztFQUN4QztBQUNGOzs7Ozs7OztVQzFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSBcImNsYXNzZXMvRGV0ZWN0aW9uXCJcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IHsgbWFwRWFjaCB9IGZyb20gXCJ1dGlscy9kb21cIlxuaW1wb3J0IHsgY2xhbXAsIGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc2VzLCBlbGVtZW50LCBlbGVtZW50cywgaXNTY3JvbGxhYmxlID0gdHJ1ZSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC4uLmNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG5cbiAgICAgICAgLi4uZWxlbWVudHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGVhc2U6IDAuMDcsXG4gICAgICBwb3NpdGlvbjogMCxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIHRoaXMuaXNTY3JvbGxhYmxlID0gaXNTY3JvbGxhYmxlXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnRzLCAoc2VsZWN0b3IsIGtleSkgPT4ge1xuICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHNlbGVjdG9yXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHNlbGVjdG9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaXNTY3JvbGxhYmxlKSB7XG4gICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgZWFzZTogMC4wNyxcbiAgICAgICAgcG9zaXRpb246IDAsXG4gICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgIHRhcmdldDogMCxcbiAgICAgICAgbGltaXQ6IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5wYXJhZ3JhcGhzID0gbWFwRWFjaCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgUGFyYWdyYXBoKHsgZWxlbWVudCB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLnBhcmFncmFwaHMpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuICB9XG5cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSB2YWx1ZVxuXG4gICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICB9XG5cbiAgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIHRyYW5zZm9ybShlbGVtZW50LCB5KSB7XG4gICAgZWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlM2QoMCwgJHstTWF0aC5yb3VuZCh5KX1weCwgMClgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHJldHVyblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLm9uUmVzaXplICYmIGFuaW1hdGlvbi5vblJlc2l6ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnNjcm9sbC5wb3NpdGlvbiA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSB8fCAhdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gICAgY29uc3QgZGlzdGFuY2UgPSAodGhpcy5zdGFydCAtIHkpICogM1xuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwucG9zaXRpb24gKyBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuICAgIGNvbnN0IHNwZWVkID0gbm9ybWFsaXplZC5waXhlbFlcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBzcGVlZFxuXG4gICAgcmV0dXJuIHNwZWVkXG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycCh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmVhc2UpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGwuY3VycmVudClcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4xKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cy5zY3JvbGwpIHtcbiAgICAgIC8vIGNvbnN0IHNjcm9sbFBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKCh0aGlzLnNjcm9sbC5jdXJyZW50IC8gdGhpcy5zY3JvbGwubGltaXQpICogMTAwKVxuICAgICAgY29uc3Qgc2Nyb2xsUGVyY2VudGFnZSA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdFxuICAgICAgLy8gY29uc29sZS5sb2coc2Nyb2xsUGVyY2VudGFnZSwgXCJTQ1JPTEwgJVwiLCB0aGlzLmVsZW1lbnRzKVxuICAgICAgdGhpcy5lbGVtZW50cy5zY3JvbGwuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlWSgke3Njcm9sbFBlcmNlbnRhZ2V9KWBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGY4YzlhZDIzMDU1ZThkYzY1ODNcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJFdmVudEVtaXR0ZXIiLCJOb3JtYWxpemVXaGVlbCIsIlByZWZpeCIsIlBhcmFncmFwaCIsIkRldGVjdGlvbiIsImVhY2giLCJtYXBFYWNoIiwiY2xhbXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaXNTY3JvbGxhYmxlIiwic2VsZWN0b3JzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJzY3JvbGwiLCJlYXNlIiwicG9zaXRpb24iLCJjdXJyZW50IiwidGFyZ2V0IiwibGltaXQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJjcmVhdGUiLCJhbmltYXRpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJjb25zb2xlIiwibG9nIiwicGFyYWdyYXBocyIsInB1c2giLCJyZXNldCIsInNldCIsInZhbHVlIiwibGFzdCIsInRyYW5zZm9ybSIsInNob3ciLCJ1cmwiLCJpc1Zpc2libGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhpZGUiLCJ5Iiwic3R5bGUiLCJNYXRoIiwicm91bmQiLCJvblJlc2l6ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJhbmltYXRpb24iLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNNb2JpbGUiLCJpc0Rvd24iLCJzdGFydCIsInRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJub3JtYWxpemVkIiwic3BlZWQiLCJwaXhlbFkiLCJ1cGRhdGUiLCJmbG9vciIsInNjcm9sbFBlcmNlbnRhZ2UiXSwic291cmNlUm9vdCI6IiJ9