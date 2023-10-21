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
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text */ "./app/utils/text.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({
    element
  }) {
    let lines = [];
    const paragraphs = element.querySelectorAll("h1, h2, p");
    if (paragraphs.length !== 0) {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(paragraphs, element => {
        let htmlString = "";
        let pArray = element.textContent.split("");
        for (let i = 0; i < pArray.length; i++) {
          htmlString += `<span>${pArray[i]}</span>`;
        }
        element.innerHTML = htmlString;
      });
      lines = [...element.querySelectorAll("span")];
    } else {
      let htmlString = "";
      let pArray = element.textContent.split("");
      for (let i = 0; i < pArray.length; i++) {
        htmlString += `<span>${pArray[i]}</span>`;
      }
      element.innerHTML = htmlString;
      lines = [...element.querySelectorAll("span")];
    }
    super({
      element,
      elements: {
        lines
      }
    });
    this.wrapper = document.querySelector(".home__quote");
    this.onResize();
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
  }
  animateIn() {
    super.animateIn();
    for (let i = 0; i < this.elements.lines.length; i++) {
      const rect = this.elements.lines[i].getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
        // Checking if the element is in the viewport
        console.log("Checking if the element is in the viewport");
        let {
          left,
          top
        } = rect;
        top = top - window.innerHeight * 0.2;
        let opacityValue = 1 - (top * 0.01 + left * 0.001) < 0.1 ? 0.1 : 1 - (top * 0.01 + left * 0.001).toFixed(3);
        opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
        this.elements.lines[i].style.opacity = opacityValue;
      }
    }

    // for (let i = 0; i < this.elements.lines.length; i++) {
    //   if (
    //     this.elements.lines[i].parentElement.getBoundingClientRect().top <
    //     this.wrapper.innerHeight / 2
    //   ) {
    //     let { left, top } = this.elements.lines[i].getBoundingClientRect()
    //     top = top - this.wrapper.innerHeight * 0.2
    //     let opacityValue =
    //       1 - (top * 0.01 + left * 0.001) < 0.1 ? 0.1 : 1 - (top * 0.01 + left * 0.001).toFixed(3)
    //     opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3)
    //     this.elements.lines[i].style.opacity = opacityValue
    //   }
    // }
  }

  animateOut() {
    super.animateOut();
    console.log("ANIMATE OUT");

    // each(this.lines, line => {
    //   each(line, word => {
    //     word.style[this.transformPrefix] = "translateY(100%)"
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
/******/ 	__webpack_require__.h = () => ("49bbe4f6079d6240a3bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYWUyYzc3Y2UyMWE1MDM3NGM2MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUIsSUFBSUssVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtRQUMzQztRQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUNoQyxDQUFDLENBQUM7TUFDRkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUcsRUFBRTtNQUNuQixJQUFJQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDVixLQUFLLENBQUMsRUFBRSxDQUFDO01BQzFDLEtBQUssSUFBSVcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixNQUFNLENBQUNGLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7UUFDdENILFVBQVUsSUFBSyxTQUFRQyxNQUFNLENBQUNFLENBQUMsQ0FBRSxTQUFRO01BQzNDO01BQ0FSLE9BQU8sQ0FBQ1MsU0FBUyxHQUFHSixVQUFVO01BRTlCSixLQUFLLEdBQUcsQ0FBQyxHQUFHRCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUFUsUUFBUSxFQUFFO1FBQ1JUO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNVLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3JELElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakIsS0FBSyxJQUFJVCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDRSxRQUFRLENBQUNULEtBQUssQ0FBQ0csTUFBTSxFQUFFSSxDQUFDLEVBQUUsRUFBRTtNQUNuRCxNQUFNVSxJQUFJLEdBQUcsSUFBSSxDQUFDUixRQUFRLENBQUNULEtBQUssQ0FBQ08sQ0FBQyxDQUFDLENBQUNXLHFCQUFxQixDQUFDLENBQUM7TUFFM0QsSUFBSUQsSUFBSSxDQUFDRSxHQUFHLEdBQUdMLE1BQU0sQ0FBQ00sV0FBVyxHQUFHLENBQUMsSUFBSUgsSUFBSSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3hEO1FBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO1FBQ3pELElBQUk7VUFBRUMsSUFBSTtVQUFFTDtRQUFJLENBQUMsR0FBR0YsSUFBSTtRQUN4QkUsR0FBRyxHQUFHQSxHQUFHLEdBQUdMLE1BQU0sQ0FBQ00sV0FBVyxHQUFHLEdBQUc7UUFDcEMsSUFBSUssWUFBWSxHQUNkLENBQUMsSUFBSU4sR0FBRyxHQUFHLElBQUksR0FBR0ssSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUNMLEdBQUcsR0FBRyxJQUFJLEdBQUdLLElBQUksR0FBRyxLQUFLLEVBQUVFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUZELFlBQVksR0FBR0EsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdBLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUNqQixRQUFRLENBQUNULEtBQUssQ0FBQ08sQ0FBQyxDQUFDLENBQUNvQixLQUFLLENBQUNDLE9BQU8sR0FBR0gsWUFBWTtNQUNyRDtJQUNGOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFWLFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFFbEJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQzs7SUFFMUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNGOztFQUVBVixRQUFRQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNiLEtBQUssR0FBR0wscURBQVMsQ0FBQyxJQUFJLENBQUNjLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDO0VBQzdDO0FBQ0Y7Ozs7Ozs7O1VDL0ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1JldmVhbC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBzcGxpdEluZGl2aWR1YWwgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBsZXQgbGluZXMgPSBbXVxuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSwgaDIsIHBcIilcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZWFjaChwYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcbiAgICAgIH0pXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgfVxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG5cbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfVxuXG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmVzXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWxlbWVudHMubGluZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgaWYgKHJlY3QudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC8gMiAmJiByZWN0LmJvdHRvbSA+IDApIHtcbiAgICAgICAgLy8gQ2hlY2tpbmcgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XCIpXG4gICAgICAgIGxldCB7IGxlZnQsIHRvcCB9ID0gcmVjdFxuICAgICAgICB0b3AgPSB0b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjJcbiAgICAgICAgbGV0IG9wYWNpdHlWYWx1ZSA9XG4gICAgICAgICAgMSAtICh0b3AgKiAwLjAxICsgbGVmdCAqIDAuMDAxKSA8IDAuMSA/IDAuMSA6IDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSkudG9GaXhlZCgzKVxuICAgICAgICBvcGFjaXR5VmFsdWUgPSBvcGFjaXR5VmFsdWUgPiAxID8gMSA6IG9wYWNpdHlWYWx1ZS50b0ZpeGVkKDMpXG4gICAgICAgIHRoaXMuZWxlbWVudHMubGluZXNbaV0uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHlWYWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgaWYgKFxuICAgIC8vICAgICB0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDxcbiAgICAvLyAgICAgdGhpcy53cmFwcGVyLmlubmVySGVpZ2h0IC8gMlxuICAgIC8vICAgKSB7XG4gICAgLy8gICAgIGxldCB7IGxlZnQsIHRvcCB9ID0gdGhpcy5lbGVtZW50cy5saW5lc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIC8vICAgICB0b3AgPSB0b3AgLSB0aGlzLndyYXBwZXIuaW5uZXJIZWlnaHQgKiAwLjJcbiAgICAvLyAgICAgbGV0IG9wYWNpdHlWYWx1ZSA9XG4gICAgLy8gICAgICAgMSAtICh0b3AgKiAwLjAxICsgbGVmdCAqIDAuMDAxKSA8IDAuMSA/IDAuMSA6IDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSkudG9GaXhlZCgzKVxuICAgIC8vICAgICBvcGFjaXR5VmFsdWUgPSBvcGFjaXR5VmFsdWUgPiAxID8gMSA6IG9wYWNpdHlWYWx1ZS50b0ZpeGVkKDMpXG4gICAgLy8gICAgIHRoaXMuZWxlbWVudHMubGluZXNbaV0uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHlWYWx1ZVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgc3VwZXIuYW5pbWF0ZU91dCgpXG5cbiAgICBjb25zb2xlLmxvZyhcIkFOSU1BVEUgT1VUXCIpXG5cbiAgICAvLyBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4ge1xuICAgIC8vICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAvLyAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBcInRyYW5zbGF0ZVkoMTAwJSlcIlxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5saW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRzLmxpbmVzKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0OWJiZTRmNjA3OWQ2MjQwYTNiYlwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiQW5pbWF0aW9uIiwiY2FsY3VsYXRlIiwic3BsaXQiLCJzcGxpdEluZGl2aWR1YWwiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJsaW5lcyIsInBhcmFncmFwaHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaHRtbFN0cmluZyIsInBBcnJheSIsInRleHRDb250ZW50IiwiaSIsImlubmVySFRNTCIsImVsZW1lbnRzIiwid3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uUmVzaXplIiwid2luZG93IiwiYW5pbWF0ZU91dCIsImFuaW1hdGVJbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0Iiwib3BhY2l0eVZhbHVlIiwidG9GaXhlZCIsInN0eWxlIiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=