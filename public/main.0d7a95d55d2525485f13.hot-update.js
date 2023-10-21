"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Paragraph.js":
/*!*************************************!*\
  !*** ./app/animations/Paragraph.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




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
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
  }
  animateIn() {
    super.animateIn();
    this.timelineIn = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
      delay: 0.5
    });
    this.timelineIn.set(this.element, {
      autoAlpha: 1
    });
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(his.lines, line => {
      this.timelineIn.fromTo(line, {
        autoAlpha: 0,
        y: "100%"
      }, {
        autoAlpha: 1,
        duration: 1.4,
        stagger: 0.06,
        ease: "expo.out",
        y: "0%"
      }, 0);
    });

    // each(this.lines, (line, lineIndex) => {
    //   each(line, word => {
    //     word.style.transition = `transform 1.5s ${0.5 + lineIndex * 0.1}s ease`
    //     word.style[this.transformPrefix] = 'translateY(0)'
    //   })
    // })
  }

  animateOut() {
    super.animateOut();
    gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(this.lines, {
      autoAlpha: 0
    });

    // each(this.lines, line => {
    //   each(line, word => {
    //     word.style[this.transformPrefix] = 'translateY(100%)'
    //   })
    // })
  }

  onResize() {
    this.lines = (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.calculate)(this.elements.lines);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a3f8bd09fbc948ca62a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZDdhOTVkNTVkMjUyNTQ4NWYxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVXO0FBRUk7QUFDdEI7QUFFdkIsaUVBQWUsY0FBY0MseURBQVMsQ0FBQztFQUNyQ0ksV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNoQixNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUJILGlEQUFLLENBQUM7VUFBRUc7UUFBUSxDQUFDLENBQUM7UUFDbEJILGlEQUFLLENBQUM7VUFBRUc7UUFBUSxDQUFDLENBQUM7UUFFbEJDLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDdEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNO01BQ0xOLGlEQUFLLENBQUM7UUFBRUc7TUFBUSxDQUFDLENBQUM7TUFDbEJILGlEQUFLLENBQUM7UUFBRUc7TUFBUSxDQUFDLENBQUM7TUFFbEJDLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQ7SUFFQSxLQUFLLENBQUM7TUFDSkgsT0FBTztNQUNQTSxRQUFRLEVBQUU7UUFDUkw7TUFDRjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ00sUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdiLDRDQUFJLENBQUNjLFFBQVEsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFFL0MsSUFBSSxDQUFDRixVQUFVLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNkLE9BQU8sRUFBRTtNQUFFZSxTQUFTLEVBQUU7SUFBRSxDQUFDLENBQUM7SUFFbkRyQixrREFBSSxDQUFDc0IsR0FBRyxDQUFDZixLQUFLLEVBQUVnQixJQUFJLElBQUk7TUFDdEIsSUFBSSxDQUFDTixVQUFVLENBQUNPLE1BQU0sQ0FDcEJELElBQUksRUFDSjtRQUNFRixTQUFTLEVBQUUsQ0FBQztRQUNaSSxDQUFDLEVBQUU7TUFDTCxDQUFDLEVBQ0Q7UUFDRUosU0FBUyxFQUFFLENBQUM7UUFDWkssUUFBUSxFQUFFLEdBQUc7UUFDYkMsT0FBTyxFQUFFLElBQUk7UUFDYkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJILENBQUMsRUFBRTtNQUNMLENBQUMsRUFDRCxDQUNGLENBQUM7SUFDSCxDQUFDLENBQUM7O0lBRUY7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFWLFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFFbEJYLDRDQUFJLENBQUNnQixHQUFHLENBQUMsSUFBSSxDQUFDYixLQUFLLEVBQUU7TUFBRWMsU0FBUyxFQUFFO0lBQUUsQ0FBQyxDQUFDOztJQUV0QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFSLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ04sS0FBSyxHQUFHTCxxREFBUyxDQUFDLElBQUksQ0FBQ1UsUUFBUSxDQUFDTCxLQUFLLENBQUM7RUFDN0M7QUFDRjs7Ozs7Ozs7VUN4RkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGNvbnN0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcblxuICAgICAgICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG5cbiAgICAgIGxpbmVzLnB1c2goLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpKVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgdGhpcy50aW1lbGluZUluID0gZ3NhcC50aW1lbGluZSh7IGRlbGF5OiAwLjUgfSlcblxuICAgIHRoaXMudGltZWxpbmVJbi5zZXQodGhpcy5lbGVtZW50LCB7IGF1dG9BbHBoYTogMSB9KVxuXG4gICAgZWFjaChoaXMubGluZXMsIGxpbmUgPT4ge1xuICAgICAgdGhpcy50aW1lbGluZUluLmZyb21UbyhcbiAgICAgICAgbGluZSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICB5OiBcIjEwMCVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICAgIGR1cmF0aW9uOiAxLjQsXG4gICAgICAgICAgc3RhZ2dlcjogMC4wNixcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgICAgeTogXCIwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIDBcbiAgICAgIClcbiAgICB9KVxuXG4gICAgLy8gZWFjaCh0aGlzLmxpbmVzLCAobGluZSwgbGluZUluZGV4KSA9PiB7XG4gICAgLy8gICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgIC8vICAgICB3b3JkLnN0eWxlLnRyYW5zaXRpb24gPSBgdHJhbnNmb3JtIDEuNXMgJHswLjUgKyBsaW5lSW5kZXggKiAwLjF9cyBlYXNlYFxuICAgIC8vICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9ICd0cmFuc2xhdGVZKDApJ1xuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcblxuICAgIGdzYXAuc2V0KHRoaXMubGluZXMsIHsgYXV0b0FscGhhOiAwIH0pXG5cbiAgICAvLyBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4ge1xuICAgIC8vICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAvLyAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTNmOGJkMDlmYmM5NDhjYTYyYTFcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0IiwiZ3NhcCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJwdXNoIiwiZWxlbWVudHMiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJ0aW1lbGluZUluIiwidGltZWxpbmUiLCJkZWxheSIsInNldCIsImF1dG9BbHBoYSIsImhpcyIsImxpbmUiLCJmcm9tVG8iLCJ5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=