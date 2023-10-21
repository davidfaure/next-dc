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
    console.log("ANIMATE IN");

    // for (let i = 0; i < this.elements.lines.length; i++) {
    //   const rect = this.elements.lines[i].getBoundingClientRect()

    //   if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
    //     // Checking if the element is in the viewport
    //     console.log("Checking if the element is in the viewport")
    //     let { left, top } = rect
    //     top = top - window.innerHeight * 0.2
    //     let opacityValue =
    //       1 - (top * 0.01 + left * 0.001) < 0.1 ? 0.1 : 1 - (top * 0.01 + left * 0.001).toFixed(3)
    //     opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3)
    //     this.elements.lines[i].style.opacity = opacityValue
    //   }
    // }

    for (let i = 0; i < this.elements.lines.length; i++) {
      console.log(this.elements.lines[i].parentElement.getBoundingClientRect().top);
      console.log(window.innerHeight);
      if (this.elements.lines[i].parentElement.getBoundingClientRect().top < window.innerHeight) {
        let {
          left,
          top
        } = this.elements.lines[i].getBoundingClientRect();
        console.log(1 - (top * 0.01 + left * 0.001), "doit etre en dessous de 0.1");
        // top = top - this.wrapper.innerHeight * 0.2
        let opacityValue = 1 - (top * 0.01 + left * 0.001) < 0.1 ? 0.1 : 1 - (top * 0.01 + left * 0.001).toFixed(3);
        opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
        this.elements.lines[i].style.opacity = opacityValue;
      }
    }
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
/******/ 	__webpack_require__.h = () => ("99a77642bc11933e0304")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNzhmNDQxNTBmZjdmMzk5MDVlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUIsSUFBSUssVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtRQUMzQztRQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUNoQyxDQUFDLENBQUM7TUFDRkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUcsRUFBRTtNQUNuQixJQUFJQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDVixLQUFLLENBQUMsRUFBRSxDQUFDO01BQzFDLEtBQUssSUFBSVcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixNQUFNLENBQUNGLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7UUFDdENILFVBQVUsSUFB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b25zL1JldmVhbC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBzcGxpdEluZGl2aWR1YWwgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBsZXQgbGluZXMgPSBbXVxuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSwgaDIsIHBcIilcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZWFjaChwYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcbiAgICAgIH0pXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgfVxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG5cbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfVxuXG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmVzXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcblxuICAgIGNvbnNvbGUubG9nKFwiQU5JTUFURSBJTlwiKVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBjb25zdCByZWN0ID0gdGhpcy5lbGVtZW50cy5saW5lc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgLy8gICBpZiAocmVjdC50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID4gMCkge1xuICAgIC8vICAgICAvLyBDaGVja2luZyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJDaGVja2luZyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcIilcbiAgICAvLyAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSByZWN0XG4gICAgLy8gICAgIHRvcCA9IHRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMlxuICAgIC8vICAgICBsZXQgb3BhY2l0eVZhbHVlID1cbiAgICAvLyAgICAgICAxIC0gKHRvcCAqIDAuMDEgKyBsZWZ0ICogMC4wMDEpIDwgMC4xID8gMC4xIDogMSAtICh0b3AgKiAwLjAxICsgbGVmdCAqIDAuMDAxKS50b0ZpeGVkKDMpXG4gICAgLy8gICAgIG9wYWNpdHlWYWx1ZSA9IG9wYWNpdHlWYWx1ZSA+IDEgPyAxIDogb3BhY2l0eVZhbHVlLnRvRml4ZWQoMylcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50cy5saW5lc1tpXS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eVZhbHVlXG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKVxuICAgICAgY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgaWYgKHRoaXMuZWxlbWVudHMubGluZXNbaV0ucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSksIFwiZG9pdCBldHJlIGVuIGRlc3NvdXMgZGUgMC4xXCIpXG4gICAgICAgIC8vIHRvcCA9IHRvcCAtIHRoaXMud3JhcHBlci5pbm5lckhlaWdodCAqIDAuMlxuICAgICAgICBsZXQgb3BhY2l0eVZhbHVlID1cbiAgICAgICAgICAxIC0gKHRvcCAqIDAuMDEgKyBsZWZ0ICogMC4wMDEpIDwgMC4xID8gMC4xIDogMSAtICh0b3AgKiAwLjAxICsgbGVmdCAqIDAuMDAxKS50b0ZpeGVkKDMpXG4gICAgICAgIG9wYWNpdHlWYWx1ZSA9IG9wYWNpdHlWYWx1ZSA+IDEgPyAxIDogb3BhY2l0eVZhbHVlLnRvRml4ZWQoMylcbiAgICAgICAgdGhpcy5lbGVtZW50cy5saW5lc1tpXS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eVZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcblxuICAgIGNvbnNvbGUubG9nKFwiQU5JTUFURSBPVVRcIilcblxuICAgIC8vIGVhY2godGhpcy5saW5lcywgbGluZSA9PiB7XG4gICAgLy8gICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgIC8vICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmxpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudHMubGluZXMpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk5YTc3NjQyYmMxMTkzM2UwMzA0XCIpIl0sIm5hbWVzIjpbImVhY2giLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsInNwbGl0SW5kaXZpZHVhbCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJodG1sU3RyaW5nIiwicEFycmF5IiwidGV4dENvbnRlbnQiLCJpIiwiaW5uZXJIVE1MIiwiZWxlbWVudHMiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25SZXNpemUiLCJ3aW5kb3ciLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwiY29uc29sZSIsImxvZyIsInBhcmVudEVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbm5lckhlaWdodCIsImxlZnQiLCJvcGFjaXR5VmFsdWUiLCJ0b0ZpeGVkIiwic3R5bGUiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==