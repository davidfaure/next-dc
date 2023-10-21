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
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.lines, line => {
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
/******/ 	__webpack_require__.h = () => ("bfd42b9ec34a5ed339d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hM2Y4YmQwOWZiYzk0OGNhNjJhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVXO0FBRUk7QUFDdEI7QUFFdkIsaUVBQWUsY0FBY0MseURBQVMsQ0FBQztFQUNyQ0ksV0FBV0EsQ0FBQztJQUFFQztFQUFRLENBQUMsRUFBRTtJQUN2QixNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNoQixNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUJILGlEQUFLLENBQUM7VUFBRUc7UUFBUSxDQUFDLENBQUM7UUFDbEJILGlEQUFLLENBQUM7VUFBRUc7UUFBUSxDQUFDLENBQUM7UUFFbEJDLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDdEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxNQUFNO01BQ0xOLGlEQUFLLENBQUM7UUFBRUc7TUFBUSxDQUFDLENBQUM7TUFDbEJILGlEQUFLLENBQUM7UUFBRUc7TUFBUSxDQUFDLENBQUM7TUFFbEJDLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQ7SUFFQSxLQUFLLENBQUM7TUFDSkgsT0FBTztNQUNQTSxRQUFRLEVBQUU7UUFDUkw7TUFDRjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ00sUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdiLDRDQUFJLENBQUNjLFFBQVEsQ0FBQztNQUFFQyxLQUFLLEVBQUU7SUFBSSxDQUFDLENBQUM7SUFFL0MsSUFBSSxDQUFDRixVQUFVLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNkLE9BQU8sRUFBRTtNQUFFZSxTQUFTLEVBQUU7SUFBRSxDQUFDLENBQUM7SUFFbkRyQixrREFBSSxDQUFDLElBQUksQ0FBQ08sS0FBSyxFQUFFZSxJQUFJLElBQUk7TUFDdkIsSUFBSSxDQUFDTCxVQUFVLENBQUNNLE1BQU0sQ0FDcEJELElBQUksRUFDSjtRQUNFRCxTQUFTLEVBQUUsQ0FBQztRQUNaRyxDQUFDLEVBQUU7TUFDTCxDQUFDLEVBQ0Q7UUFDRUgsU0FBUyxFQUFFLENBQUM7UUFDWkksUUFBUSxFQUFFLEdBQUc7UUFDYkMsT0FBTyxFQUFFLElBQUk7UUFDYkMsSUFBSSxFQUFFLFVBQVU7UUFDaEJILENBQUMsRUFBRTtNQUNMLENBQUMsRUFDRCxDQUNGLENBQUM7SUFDSCxDQUFDLENBQUM7O0lBRUY7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFULFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFFbEJYLDRDQUFJLENBQUNnQixHQUFHLENBQUMsSUFBSSxDQUFDYixLQUFLLEVBQUU7TUFBRWMsU0FBUyxFQUFFO0lBQUUsQ0FBQyxDQUFDOztJQUV0QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFSLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ04sS0FBSyxHQUFHTCxxREFBUyxDQUFDLElBQUksQ0FBQ1UsUUFBUSxDQUFDTCxLQUFLLENBQUM7RUFDN0M7QUFDRjs7Ozs7Ozs7VUN4RkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGNvbnN0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgICBzcGxpdCh7IGVsZW1lbnQgfSlcblxuICAgICAgICBsaW5lcy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW4gc3BhblwiKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNwbGl0KHsgZWxlbWVudCB9KVxuICAgICAgc3BsaXQoeyBlbGVtZW50IH0pXG5cbiAgICAgIGxpbmVzLnB1c2goLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpKVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgdGhpcy50aW1lbGluZUluID0gZ3NhcC50aW1lbGluZSh7IGRlbGF5OiAwLjUgfSlcblxuICAgIHRoaXMudGltZWxpbmVJbi5zZXQodGhpcy5lbGVtZW50LCB7IGF1dG9BbHBoYTogMSB9KVxuXG4gICAgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAgIHRoaXMudGltZWxpbmVJbi5mcm9tVG8oXG4gICAgICAgIGxpbmUsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgICAgeTogXCIxMDAlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMS40LFxuICAgICAgICAgIHN0YWdnZXI6IDAuMDYsXG4gICAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICAgIHk6IFwiMCVcIlxuICAgICAgICB9LFxuICAgICAgICAwXG4gICAgICApXG4gICAgfSlcblxuICAgIC8vIGVhY2godGhpcy5saW5lcywgKGxpbmUsIGxpbmVJbmRleCkgPT4ge1xuICAgIC8vICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAvLyAgICAgd29yZC5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAxLjVzICR7MC41ICsgbGluZUluZGV4ICogMC4xfXMgZWFzZWBcbiAgICAvLyAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSAndHJhbnNsYXRlWSgwKSdcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG5cbiAgICBnc2FwLnNldCh0aGlzLmxpbmVzLCB7IGF1dG9BbHBoYTogMCB9KVxuXG4gICAgLy8gZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAvLyAgIGVhY2gobGluZSwgd29yZCA9PiB7XG4gICAgLy8gICAgIHdvcmQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmxpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudHMubGluZXMpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJmZDQyYjllYzM0YTVlZDMzOWQ1XCIpIl0sIm5hbWVzIjpbImVhY2giLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsImdzYXAiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJsaW5lcyIsInBhcmFncmFwaHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwicHVzaCIsImVsZW1lbnRzIiwib25SZXNpemUiLCJ3aW5kb3ciLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwidGltZWxpbmVJbiIsInRpbWVsaW5lIiwiZGVsYXkiLCJzZXQiLCJhdXRvQWxwaGEiLCJsaW5lIiwiZnJvbVRvIiwieSIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2UiXSwic291cmNlUm9vdCI6IiJ9