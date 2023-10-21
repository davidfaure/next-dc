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
    console.log(this.selectors);
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
      const scrollPercentage = Math.floor(this.scroll.current / this.scroll.limit * 100);
      // console.log(scrollPercentage, "SCROLL %", this.elements)
      // this.selectors.elements.scroll.style[
      //   this.transformPrefix
      // ] = `translate3d(0%, ${-scrollPercentage}%, 0px)`
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
/******/ 	__webpack_require__.h = () => ("ac5ce9165a0dcce35ead")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVwRSxJQUFJLENBQUNKLE1BQU0sQ0FBQ0csT0FBTyxHQUFHWCxnREFBSSxDQUFDLElBQUksQ0FBQ1EsTUFBTSxDQUFDRyxPQUFPLEVBQUUsSUFBSSxDQUFDSCxNQUFNLENBQUNJLE1BQU0sRUFBRSxJQUFJLENBQUNKLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQ3JGLElBQUksQ0FBQ0QsTUFBTSxDQUFDRyxPQUFPLEdBQUdzQyxJQUFJLENBQUNxQixLQUFLLENBQUMsSUFBSSxDQUFDOUQsTUFBTSxDQUFDRyxPQUFPLENBQUM7SUFFckQsSUFBSSxJQUFJLENBQUNILE1BQU0sQ0FBQ0csT0FBTyxHQUFHLEdBQUcsRUFBRTtNQUM3QixJQUFJLENBQUNILE1BQU0sQ0FBQ0csT0FBTyxHQUFHLENBQUM7SUFDekI7SUFFQSxJQUFJLElBQUksQ0FBQ0wsU0FBUyxDQUFDRixRQUFRLENBQUNJLE1BQU0sRUFBRTtNQUNsQyxNQUFNK0QsZ0JBQWdCLEdBQUd0QixJQUFJLENBQUNxQixLQUFLLENBQUUsSUFBSSxDQUFDOUQsTUFBTSxDQUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDSCxNQUFNLENBQUNLLEtBQUssR0FBSSxHQUFHLENBQUM7TUFDcEY7TUFDQTtNQUNBO01BQ0E7SUFDRjs7SUFFQSxJQUFJLElBQUksQ0FBQ1QsUUFBUSxDQUFDMEIsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ1UsU0FBUyxDQUFDLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQzBCLE9BQU8sRUFBRSxJQUFJLENBQUN0QixNQUFNLENBQUNHLE9BQU8sQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ0gsTUFBTSxDQUFDK0IsSUFBSSxHQUFHLElBQUksQ0FBQy9CLE1BQU0sQ0FBQ0csT0FBTztFQUN4QztBQUNGOzs7Ozs7OztVQzdNQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSBcImNsYXNzZXMvRGV0ZWN0aW9uXCJcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IHsgbWFwRWFjaCB9IGZyb20gXCJ1dGlscy9kb21cIlxuaW1wb3J0IHsgY2xhbXAsIGxlcnAgfSBmcm9tIFwidXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBjbGFzc2VzLCBlbGVtZW50LCBlbGVtZW50cywgaXNTY3JvbGxhYmxlID0gdHJ1ZSB9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC4uLmNsYXNzZXNcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdG9ycyA9IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG5cbiAgICAgICAgLi4uZWxlbWVudHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGVhc2U6IDAuMDcsXG4gICAgICBwb3NpdGlvbjogMCxcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIHRoaXMuaXNTY3JvbGxhYmxlID0gaXNTY3JvbGxhYmxlXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RvcnMpXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25zID0gW11cblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcnMuZWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvcnMuZWxlbWVudHMsIChzZWxlY3Rvciwga2V5KSA9PiB7XG4gICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gc2VsZWN0b3JcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gc2VsZWN0b3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pc1Njcm9sbGFibGUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgICBlYXNlOiAwLjA3LFxuICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgdGFyZ2V0OiAwLFxuICAgICAgICBsaW1pdDogdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnBhcmFncmFwaHMgPSBtYXBFYWNoKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoeyBlbGVtZW50IH0pXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMucGFyYWdyYXBocylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBlYXNlOiAwLjA3LFxuICAgICAgcG9zaXRpb246IDAsXG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG4gIH1cblxuICBzZXQodmFsdWUpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCA9IHZhbHVlXG5cbiAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsZW1lbnRzLndyYXBwZXIsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gIH1cblxuICBzaG93KHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gIH1cblxuICBoaWRlKHVybCkge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2VcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG5cbiAgdHJhbnNmb3JtKGVsZW1lbnQsIHkpIHtcbiAgICBlbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGUzZCgwLCAkey1NYXRoLnJvdW5kKHkpfXB4LCAwKWBcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHMud3JhcHBlcikgcmV0dXJuXG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAgIGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4ge1xuICAgICAgICBhbmltYXRpb24ub25SZXNpemUgJiYgYW5pbWF0aW9uLm9uUmVzaXplKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMuc2Nyb2xsLnBvc2l0aW9uID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAgIHRoaXMuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpIHx8ICF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcbiAgICBjb25zdCBkaXN0YW5jZSA9ICh0aGlzLnN0YXJ0IC0geSkgKiAzXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5wb3NpdGlvbiArIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG4gICAgY29uc3Qgc3BlZWQgPSBub3JtYWxpemVkLnBpeGVsWVxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHNwZWVkXG5cbiAgICByZXR1cm4gc3BlZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBGcmFtZXMuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwuZWFzZSlcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbC5jdXJyZW50KVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0b3JzLmVsZW1lbnRzLnNjcm9sbCkge1xuICAgICAgY29uc3Qgc2Nyb2xsUGVyY2VudGFnZSA9IE1hdGguZmxvb3IoKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdCkgKiAxMDApXG4gICAgICAvLyBjb25zb2xlLmxvZyhzY3JvbGxQZXJjZW50YWdlLCBcIlNDUk9MTCAlXCIsIHRoaXMuZWxlbWVudHMpXG4gICAgICAvLyB0aGlzLnNlbGVjdG9ycy5lbGVtZW50cy5zY3JvbGwuc3R5bGVbXG4gICAgICAvLyAgIHRoaXMudHJhbnNmb3JtUHJlZml4XG4gICAgICAvLyBdID0gYHRyYW5zbGF0ZTNkKDAlLCAkey1zY3JvbGxQZXJjZW50YWdlfSUsIDBweClgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5lbGVtZW50cy53cmFwcGVyLCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFjNWNlOTE2NWEwZGNjZTM1ZWFkXCIpIl0sIm5hbWVzIjpbIkF1dG9CaW5kIiwiRXZlbnRFbWl0dGVyIiwiTm9ybWFsaXplV2hlZWwiLCJQcmVmaXgiLCJQYXJhZ3JhcGgiLCJEZXRlY3Rpb24iLCJlYWNoIiwibWFwRWFjaCIsImNsYW1wIiwibGVycCIsImNvbnN0cnVjdG9yIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlzU2Nyb2xsYWJsZSIsInNlbGVjdG9ycyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwic2Nyb2xsIiwiZWFzZSIsInBvc2l0aW9uIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImFuaW1hdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY3JlYXRlQW5pbWF0aW9ucyIsInBhcmFncmFwaHMiLCJwdXNoIiwicmVzZXQiLCJzZXQiLCJ2YWx1ZSIsImxhc3QiLCJ0cmFuc2Zvcm0iLCJzaG93IiwidXJsIiwiaXNWaXNpYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaWRlIiwieSIsInN0eWxlIiwiTWF0aCIsInJvdW5kIiwib25SZXNpemUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwiYW5pbWF0aW9uIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzTW9iaWxlIiwiaXNEb3duIiwic3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZCIsInNwZWVkIiwicGl4ZWxZIiwidXBkYXRlIiwiZmxvb3IiLCJzY3JvbGxQZXJjZW50YWdlIl0sInNvdXJjZVJvb3QiOiIifQ==