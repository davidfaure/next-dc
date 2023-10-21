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
      console.log(this.wrapper);
      if (this.elements.lines[i].parentElement.getBoundingClientRect().top < this.wrapper.innerHeight) {
        let {
          left,
          top
        } = this.elements.lines[i].getBoundingClientRect();
        top = top - this.wrapper.innerHeight * 0.2;
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
/******/ 	__webpack_require__.h = () => ("e5a34d4bd6d3871d31e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hOTNiN2NlNmQxZWYwYzlhZmI0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUIsSUFBSUssVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtRQUMzQztRQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUNoQyxDQUFDLENBQUM7TUFDRkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUcsRUFBRTtNQUNuQixJQUFJQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDVixLQUFLLENBQUMsRUFBRSxDQUFDO01BQzFDLEtBQUssSUFBSVcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixNQUFNLENBQUNGLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7UUFDdENILFVBQVUsSUFBSyxTQUFRQyxNQUFNLENBQUNFLENBQUMsQ0FBRSxTQUFRO01BQzNDO01BQ0FSLE9BQU8sQ0FBQ1MsU0FBUyxHQUFHSixVQUFVO01BRTlCSixLQUFLLEdBQUcsQ0FBQyxHQUFHRCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUFUsUUFBUSxFQUFFO1FBQ1JUO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNVLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3JELElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQzs7SUFFekI7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLEtBQUssSUFBSVgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsUUFBUSxDQUFDVCxLQUFLLENBQUNHLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7TUFDbkRVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1QsUUFBUSxDQUFDVCxLQUFLLENBQUNPLENBQUMsQ0FBQyxDQUFDWSxhQUFhLENBQUNDLHFCQUFxQixDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDO01BQzdFSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNSLE9BQU8sQ0FBQztNQUN6QixJQUNFLElBQUksQ0FBQ0QsUUFBUSxDQUFDVCxLQUFLLENBQUNPLENBQUMsQ0FBQyxDQUFDWSxhQUFhLENBQUNDLHFCQUFxQixDQUFDLENBQUMsQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ1gsT0FBTyxDQUFDWSxXQUFXLEVBQzNGO1FBQ0EsSUFBSTtVQUFFQyxJQUFJO1VBQUVGO1FBQUksQ0FBQyxHQUFHLElBQUksQ0FBQ1osUUFBUSxDQUFDVCxLQUFLLENBQUNPLENBQUMsQ0FBQyxDQUFDYSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2xFQyxHQUFHLEdBQUdBLEdBQUcsR0FBRyxJQUFJLENBQUNYLE9BQU8sQ0FBQ1ksV0FBVyxHQUFHLEdBQUc7UUFDMUMsSUFBSUUsWUFBWSxHQUNkLENBQUMsSUFBSUgsR0FBRyxHQUFHLElBQUksR0FBR0UsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUNGLEdBQUcsR0FBRyxJQUFJLEdBQUdFLElBQUksR0FBRyxLQUFLLEVBQUVFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUZELFlBQVksR0FBR0EsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdBLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUNoQixRQUFRLENBQUNULEtBQUssQ0FBQ08sQ0FBQyxDQUFDLENBQUNtQixLQUFLLENBQUNDLE9BQU8sR0FBR0gsWUFBWTtNQUNyRDtJQUNGO0VBQ0Y7RUFFQVQsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUVsQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDOztJQUUxQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFMLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ2IsS0FBSyxHQUFHTCxxREFBUyxDQUFDLElBQUksQ0FBQ2MsUUFBUSxDQUFDVCxLQUFLLENBQUM7RUFDN0M7QUFDRjs7Ozs7Ozs7VUNsR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvUmV2ZWFsLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCJcbmltcG9ydCB7IHNwbGl0SW5kaXZpZHVhbCB9IGZyb20gXCIuLi91dGlscy90ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIGxldCBsaW5lcyA9IFtdXG4gICAgY29uc3QgcGFyYWdyYXBocyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgxLCBoMiwgcFwiKVxuXG4gICAgaWYgKHBhcmFncmFwaHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBlYWNoKHBhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgICAgbGV0IHBBcnJheSA9IGVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZ1xuICAgICAgfSlcbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBodG1sU3RyaW5nID0gXCJcIlxuICAgICAgbGV0IHBBcnJheSA9IGVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoXCJcIilcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGh0bWxTdHJpbmcgKz0gYDxzcGFuPiR7cEFycmF5W2ldfTwvc3Bhbj5gXG4gICAgICB9XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcblxuICAgICAgbGluZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKV1cbiAgICB9XG5cbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZXNcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fcXVvdGVcIilcbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQoKVxuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBzdXBlci5hbmltYXRlSW4oKVxuXG4gICAgY29uc29sZS5sb2coXCJBTklNQVRFIElOXCIpXG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudHMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAvLyAgIGlmIChyZWN0LnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgJiYgcmVjdC5ib3R0b20gPiAwKSB7XG4gICAgLy8gICAgIC8vIENoZWNraW5nIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIGlmIHRoZSBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFwiKVxuICAgIC8vICAgICBsZXQgeyBsZWZ0LCB0b3AgfSA9IHJlY3RcbiAgICAvLyAgICAgdG9wID0gdG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICogMC4yXG4gICAgLy8gICAgIGxldCBvcGFjaXR5VmFsdWUgPVxuICAgIC8vICAgICAgIDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSkgPCAwLjEgPyAwLjEgOiAxIC0gKHRvcCAqIDAuMDEgKyBsZWZ0ICogMC4wMDEpLnRvRml4ZWQoMylcbiAgICAvLyAgICAgb3BhY2l0eVZhbHVlID0gb3BhY2l0eVZhbHVlID4gMSA/IDEgOiBvcGFjaXR5VmFsdWUudG9GaXhlZCgzKVxuICAgIC8vICAgICB0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5VmFsdWVcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudHMubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMubGluZXNbaV0ucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLndyYXBwZXIpXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZWxlbWVudHMubGluZXNbaV0ucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCB0aGlzLndyYXBwZXIuaW5uZXJIZWlnaHRcbiAgICAgICkge1xuICAgICAgICBsZXQgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuZWxlbWVudHMubGluZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgdG9wID0gdG9wIC0gdGhpcy53cmFwcGVyLmlubmVySGVpZ2h0ICogMC4yXG4gICAgICAgIGxldCBvcGFjaXR5VmFsdWUgPVxuICAgICAgICAgIDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSkgPCAwLjEgPyAwLjEgOiAxIC0gKHRvcCAqIDAuMDEgKyBsZWZ0ICogMC4wMDEpLnRvRml4ZWQoMylcbiAgICAgICAgb3BhY2l0eVZhbHVlID0gb3BhY2l0eVZhbHVlID4gMSA/IDEgOiBvcGFjaXR5VmFsdWUudG9GaXhlZCgzKVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5VmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgY29uc29sZS5sb2coXCJBTklNQVRFIE9VVFwiKVxuXG4gICAgLy8gZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAvLyAgIGVhY2gobGluZSwgd29yZCA9PiB7XG4gICAgLy8gICAgIHdvcmQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTVhMzRkNGJkNmQzODcxZDMxZTVcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0Iiwic3BsaXRJbmRpdmlkdWFsIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImh0bWxTdHJpbmciLCJwQXJyYXkiLCJ0ZXh0Q29udGVudCIsImkiLCJpbm5lckhUTUwiLCJlbGVtZW50cyIsIndyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJjb25zb2xlIiwibG9nIiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0IiwibGVmdCIsIm9wYWNpdHlWYWx1ZSIsInRvRml4ZWQiLCJzdHlsZSIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9