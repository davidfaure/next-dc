"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Magnetic.js":
/*!************************************!*\
  !*** ./app/animations/Magnetic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements: {
        text: element.querySelector("span")
      }
    });
    this.x = {
      current: 0,
      target: 0
    };
    this.y = {
      current: 0,
      target: 0
    };
    this.addEventListener();
  }
  animateIn() {}
  animateOut() {}
  onResize() {
    this.height = this.element.clientHeight;
  }
  onMouseEnter() {
    this.updatePosition();
  }
  onMouseMove({
    clientX,
    clientY,
    target
  }) {
    const {
      clientHeight,
      clientWidth
    } = this.elements.text;
    const {
      left,
      top
    } = target.getBoundingClientRect();
    const dx = (clientX - left) / clientWidth - 0.5;
    const dy = (clientY - top) / clientHeight - 0.5;
    this.x.target = dx * clientWidth * 0.2;
    this.y.target = dy * clientHeight * 0.2;
  }
  onMouseLeave() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to([this.x, this.y], {
      current: 0,
      duration: 0.2,
      onComplete: _ => window.cancelAnimationFrame(this.frame),
      target: 0
    });
  }
  updatePosition() {
    this.x.current = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].utils.interpolate(this.x.current, this.x.target, 0.1);
    this.y.current = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].utils.interpolate(this.y.current, this.y.target, 0.1);
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.elements.text, {
      x: this.x.current,
      y: this.y.current
    });
    this.frame = window.requestAnimationFrame(this.updatePosition.bind(this));
  }
  addEventListener() {
    this.element.addEventListener("mouseenter", this.onMouseEnter);
    this.element.addEventListener("mousemove", this.onMouseMove);
    this.element.addEventListener("mouseleave", this.onMouseLeave);
  }
  removeEventListener() {
    this.element.removeEventListener("mouseenter", this.onMouseEnter);
    this.element.removeEventListener("mousemove", this.onMouseMove);
    this.element.removeEventListener("mouseleave", this.onMouseLeave);
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
/* harmony import */ var animations_Parallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animations/Parallax */ "./app/animations/Parallax.js");
/* harmony import */ var animations_Magnetic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! animations/Magnetic */ "./app/animations/Magnetic.js");
/* harmony import */ var classes_Detection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classes/Detection */ "./app/classes/Detection.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/dom */ "./app/utils/dom.js");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");












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
        animationsMagnetic: '[data-animation="magnetic"]',
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
    lodash_each__WEBPACK_IMPORTED_MODULE_9___default()(this.selectors.elements, (selector, key) => {
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
    this.paragraphs = (0,utils_dom__WEBPACK_IMPORTED_MODULE_10__.mapEach)(this.elements.animationsParagraphs, element => {
      return new animations_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"]({
        element
      });
    });
    this.animations.push(...this.paragraphs);
    this.revealsText = (0,utils_dom__WEBPACK_IMPORTED_MODULE_10__.mapEach)(this.elements.animationsReveal, element => {
      return new animations_Reveal__WEBPACK_IMPORTED_MODULE_5__["default"]({
        element
      });
    });
    this.animations.push(...this.revealsText);
    this.magneticEffects = (0,utils_dom__WEBPACK_IMPORTED_MODULE_10__.mapEach)(this.elements.animationsMagnetic, element => {
      return new animations_Magnetic__WEBPACK_IMPORTED_MODULE_7__["default"]({
        element
      });
    });
    this.animations.push(...this.magneticEffects);
    this.parallax = new animations_Parallax__WEBPACK_IMPORTED_MODULE_6__["default"]({
      element: this.elements.animationsParallax
    });
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
      lodash_each__WEBPACK_IMPORTED_MODULE_9___default()(this.animations, animation => {
        animation.onResize && animation.onResize();
      });
    });
  }
  onTouchDown(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_8__["default"].isMobile()) return;
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientY : event.clientY;
  }
  onTouchMove(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_8__["default"].isMobile() || !this.isDown) return;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = (this.start - y) * 3;
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp(event) {
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_8__["default"].isMobile()) return;
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
    this.scroll.target = (0,utils_math__WEBPACK_IMPORTED_MODULE_11__.clamp)(0, this.scroll.limit, this.scroll.target);
    this.scroll.current = (0,utils_math__WEBPACK_IMPORTED_MODULE_11__.lerp)(this.scroll.current, this.scroll.target, this.scroll.ease);
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
/******/ 	__webpack_require__.h = () => ("b114515ae34adef499ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNoQyxlQUFlLENBQUMsR0FBSSxVQUFTLElBQUksQ0FBQ21ELGdCQUFpQixHQUFFO0lBQ3ZGO0lBRUEsSUFBSSxJQUFJLENBQUNqSCxRQUFRLENBQUM0RSxPQUFPLEVBQUU7TUFDekIsSUFBSSxDQUFDVyxTQUFTLENBQUMsSUFBSSxDQUFDdkYsUUFBUSxDQUFDNEUsT0FBTyxFQUFFLElBQUksQ0FBQ2xCLE1BQU0sQ0FBQ3RELE9BQU8sQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ3NELE1BQU0sQ0FBQzRCLElBQUksR0FBRyxJQUFJLENBQUM1QixNQUFNLENBQUN0RCxPQUFPO0lBQ3RDLElBQUksSUFBSSxDQUFDK0UsUUFBUSxFQUFFO01BQ2pCLElBQUksQ0FBQ0EsUUFBUSxDQUFDNEIsTUFBTSxDQUFDLElBQUksQ0FBQ3JELE1BQU0sQ0FBQ3RELE9BQU8sQ0FBQztJQUMzQztFQUNGO0FBQ0Y7Ozs7Ozs7O1VDL05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL01hZ25ldGljLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGV4dDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnggPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwXG4gICAgfVxuXG4gICAgdGhpcy55ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMFxuICAgIH1cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICBhbmltYXRlSW4oKSB7fVxuXG4gIGFuaW1hdGVPdXQoKSB7fVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodFxuICB9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoeyBjbGllbnRYLCBjbGllbnRZLCB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgY2xpZW50SGVpZ2h0LCBjbGllbnRXaWR0aCB9ID0gdGhpcy5lbGVtZW50cy50ZXh0XG5cbiAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBjb25zdCBkeCA9IChjbGllbnRYIC0gbGVmdCkgLyBjbGllbnRXaWR0aCAtIDAuNVxuICAgIGNvbnN0IGR5ID0gKGNsaWVudFkgLSB0b3ApIC8gY2xpZW50SGVpZ2h0IC0gMC41XG5cbiAgICB0aGlzLngudGFyZ2V0ID0gZHggKiBjbGllbnRXaWR0aCAqIDAuMlxuICAgIHRoaXMueS50YXJnZXQgPSBkeSAqIGNsaWVudEhlaWdodCAqIDAuMlxuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIGdzYXAudG8oW3RoaXMueCwgdGhpcy55XSwge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICBvbkNvbXBsZXRlOiBfID0+IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKSxcbiAgICAgIHRhcmdldDogMFxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICB0aGlzLnguY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIDAuMSlcbiAgICB0aGlzLnkuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIDAuMSlcblxuICAgIGdzYXAuc2V0KHRoaXMuZWxlbWVudHMudGV4dCwge1xuICAgICAgeDogdGhpcy54LmN1cnJlbnQsXG4gICAgICB5OiB0aGlzLnkuY3VycmVudFxuICAgIH0pXG5cbiAgICB0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcykpXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uTW91c2VFbnRlcilcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uTW91c2VMZWF2ZSlcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25Nb3VzZUVudGVyKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlKVxuICB9XG59XG4iLCJpbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIlxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gXCJub3JtYWxpemUtd2hlZWxcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiYW5pbWF0aW9ucy9QYXJhZ3JhcGhcIlxuaW1wb3J0IFJldmVhbCBmcm9tIFwiYW5pbWF0aW9ucy9SZXZlYWxcIlxuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCJhbmltYXRpb25zL1BhcmFsbGF4XCJcbmltcG9ydCBNYWduZXRpYyBmcm9tIFwiYW5pbWF0aW9ucy9NYWduZXRpY1wiXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSBcImNsYXNzZXMvRGV0ZWN0aW9uXCJcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IHsgbWFwRWFjaCB9IGZyb20gXCJ1dGlscy9kb21cIlxuaW1wb3J0IHsgY2xhbXAsIGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc2VzLCBlbGVtZW50LCBlbGVtZW50cywgaXNTY3JvbGxhYmxlID0gdHJ1ZSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC4uLmNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG4gICAgICAgIGFuaW1hdGlvbnNSZXZlYWw6ICdbZGF0YS1hbmltYXRpb249XCJyZXZlYWxcIl0nLFxuICAgICAgICBhbmltYXRpb25zUGFyYWxsYXg6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhbGxheFwiXScsXG4gICAgICAgIGFuaW1hdGlvbnNNYWduZXRpYzogJ1tkYXRhLWFuaW1hdGlvbj1cIm1hZ25ldGljXCJdJyxcblxuICAgICAgICAuLi5lbGVtZW50c1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuXG4gICAgdGhpcy5pc1Njcm9sbGFibGUgPSBpc1Njcm9sbGFibGVcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG4gICAgY29uc29sZS5sb2coKVxuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnRzLCAoc2VsZWN0b3IsIGtleSkgPT4ge1xuICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHNlbGVjdG9yXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHNlbGVjdG9yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaXNTY3JvbGxhYmxlKSB7XG4gICAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgICAgZWFzZTogMC4wNyxcbiAgICAgICAgcG9zaXRpb246IDAsXG4gICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgIHRhcmdldDogMCxcbiAgICAgICAgbGltaXQ6IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBjcmVhdGVBbmltYXRpb25zKCkge1xuICAgIHRoaXMucGFyYWdyYXBocyA9IG1hcEVhY2godGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gbmV3IFBhcmFncmFwaCh7IGVsZW1lbnQgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5wYXJhZ3JhcGhzKVxuXG4gICAgdGhpcy5yZXZlYWxzVGV4dCA9IG1hcEVhY2godGhpcy5lbGVtZW50cy5hbmltYXRpb25zUmV2ZWFsLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgUmV2ZWFsKHsgZWxlbWVudCB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLnJldmVhbHNUZXh0KVxuXG4gICAgdGhpcy5tYWduZXRpY0VmZmVjdHMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc01hZ25ldGljLCBlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBuZXcgTWFnbmV0aWMoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMubWFnbmV0aWNFZmZlY3RzKVxuXG4gICAgdGhpcy5wYXJhbGxheCA9IG5ldyBQYXJhbGxheCh7IGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFsbGF4IH0pXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgZWFzZTogMC4wNyxcbiAgICAgIHBvc2l0aW9uOiAwLFxuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiAwXG4gICAgfVxuICB9XG5cbiAgc2V0KHZhbHVlKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSB2YWx1ZVxuXG4gICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICB9XG5cbiAgc2hvdyh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWVcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgaGlkZSh1cmwpIHtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfVxuXG4gIHRyYW5zZm9ybShlbGVtZW50LCB5KSB7XG4gICAgZWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlM2QoMCwgJHstTWF0aC5yb3VuZCh5KX1weCwgMClgXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHJldHVyblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLm9uUmVzaXplICYmIGFuaW1hdGlvbi5vblJlc2l6ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHJldHVyblxuXG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnNjcm9sbC5wb3NpdGlvbiA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSB8fCAhdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG4gICAgY29uc3QgZGlzdGFuY2UgPSAodGhpcy5zdGFydCAtIHkpICogM1xuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwucG9zaXRpb24gKyBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuICAgIGNvbnN0IHNwZWVkID0gbm9ybWFsaXplZC5waXhlbFlcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBzcGVlZFxuXG4gICAgcmV0dXJuIHNwZWVkXG4gIH1cblxuICAvKipcbiAgICogRnJhbWVzLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycCh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmVhc2UpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGwuY3VycmVudClcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4xKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdG9ycy5lbGVtZW50cy5zY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsUGVyY2VudGFnZSA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdFxuICAgICAgdGhpcy5lbGVtZW50cy5zY3JvbGwuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHNjYWxlWSgke3RoaXMuc2Nyb2xsUGVyY2VudGFnZX0pYFxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuZWxlbWVudHMud3JhcHBlciwgdGhpcy5zY3JvbGwuY3VycmVudClcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAgIGlmICh0aGlzLnBhcmFsbGF4KSB7XG4gICAgICB0aGlzLnBhcmFsbGF4LnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgIH1cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjExNDUxNWFlMzRhZGVmNDk5Y2FcIikiXSwibmFtZXMiOlsiZ3NhcCIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsInkiLCJhZGRFdmVudExpc3RlbmVyIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsIm9uUmVzaXplIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib25Nb3VzZUVudGVyIiwidXBkYXRlUG9zaXRpb24iLCJvbk1vdXNlTW92ZSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xpZW50V2lkdGgiLCJsZWZ0IiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZHgiLCJkeSIsIm9uTW91c2VMZWF2ZSIsInRvIiwiZHVyYXRpb24iLCJvbkNvbXBsZXRlIiwiXyIsIndpbmRvdyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJ1dGlscyIsImludGVycG9sYXRlIiwic2V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJBdXRvQmluZCIsIkV2ZW50RW1pdHRlciIsIk5vcm1hbGl6ZVdoZWVsIiwiUHJlZml4IiwiUGFyYWdyYXBoIiwiUmV2ZWFsIiwiUGFyYWxsYXgiLCJNYWduZXRpYyIsIkRldGVjdGlvbiIsImVhY2giLCJtYXBFYWNoIiwiY2xhbXAiLCJsZXJwIiwiY2xhc3NlcyIsImlzU2Nyb2xsYWJsZSIsInNlbGVjdG9ycyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc1JldmVhbCIsImFuaW1hdGlvbnNQYXJhbGxheCIsImFuaW1hdGlvbnNNYWduZXRpYyIsInNjcm9sbCIsImVhc2UiLCJwb3NpdGlvbiIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImFuaW1hdGlvbnMiLCJkb2N1bWVudCIsInNlbGVjdG9yIiwia2V5IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJ3cmFwcGVyIiwiaW5uZXJIZWlnaHQiLCJjcmVhdGVBbmltYXRpb25zIiwicGFyYWdyYXBocyIsInB1c2giLCJyZXZlYWxzVGV4dCIsIm1hZ25ldGljRWZmZWN0cyIsInBhcmFsbGF4IiwicmVzZXQiLCJ2YWx1ZSIsImxhc3QiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidXJsIiwiaXNWaXNpYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaWRlIiwic3R5bGUiLCJNYXRoIiwicm91bmQiLCJhbmltYXRpb24iLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNNb2JpbGUiLCJpc0Rvd24iLCJzdGFydCIsInRvdWNoZXMiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWQiLCJzcGVlZCIsInBpeGVsWSIsInVwZGF0ZSIsImZsb29yIiwic2Nyb2xsUGVyY2VudGFnZSJdLCJzb3VyY2VSb290IjoiIn0=