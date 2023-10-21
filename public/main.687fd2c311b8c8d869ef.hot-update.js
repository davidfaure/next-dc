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
/******/ 	__webpack_require__.h = () => ("13b34891074e83fd7174")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ODdmZDJjMzExYjhjOGQ4NjllZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUIsSUFBSUssVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtRQUMzQztRQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUNoQyxDQUFDLENBQUM7TUFDRkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUcsRUFBRTtNQUNuQixJQUFJQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDVixLQUFLLENBQUMsRUFBRSxDQUFDO01BQzFDLEtBQUssSUFBSVcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixNQUFNLENBQUNGLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7UUFDdENILFVBQVUsSUFBSyxTQUFRQyxNQUFNLENBQUNFLENBQUMsQ0FBRSxTQUFRO01BQzNDO01BQ0FSLE9BQU8sQ0FBQ1MsU0FBUyxHQUFHSixVQUFVO01BRTlCSixLQUFLLEdBQUcsQ0FBQyxHQUFHRCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUFUsUUFBUSxFQUFFO1FBQ1JUO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNVLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3JELElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQzs7SUFFekI7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLEtBQUssSUFBSVgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsUUFBUSxDQUFDVCxLQUFLLENBQUNHLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7TUFDbkQsSUFDRSxJQUFJLENBQUNFLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDTyxDQUFDLENBQUMsQ0FBQ1ksYUFBYSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUNYLE9BQU8sQ0FBQ1ksV0FBVyxFQUMzRjtRQUNBLElBQUk7VUFBRUMsSUFBSTtVQUFFRjtRQUFJLENBQUMsR0FBRyxJQUFJLENBQUNaLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDTyxDQUFDLENBQUMsQ0FBQ2EscUJBQXFCLENBQUMsQ0FBQztRQUNsRUMsR0FBRyxHQUFHQSxHQUFHLEdBQUcsSUFBSSxDQUFDWCxPQUFPLENBQUNZLFdBQVcsR0FBRyxHQUFHO1FBQzFDLElBQUlFLFlBQVksR0FDZCxDQUFDLElBQUlILEdBQUcsR0FBRyxJQUFJLEdBQUdFLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDRixHQUFHLEdBQUcsSUFBSSxHQUFHRSxJQUFJLEdBQUcsS0FBSyxFQUFFRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFGRCxZQUFZLEdBQUdBLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDaEIsUUFBUSxDQUFDVCxLQUFLLENBQUNPLENBQUMsQ0FBQyxDQUFDbUIsS0FBSyxDQUFDQyxPQUFPLEdBQUdILFlBQVk7TUFDckQ7SUFDRjtFQUNGO0VBRUFULFVBQVVBLENBQUEsRUFBRztJQUNYLEtBQUssQ0FBQ0EsVUFBVSxDQUFDLENBQUM7SUFFbEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQzs7SUFFMUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNGOztFQUVBTCxRQUFRQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNiLEtBQUssR0FBR0wscURBQVMsQ0FBQyxJQUFJLENBQUNjLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDO0VBQzdDO0FBQ0Y7Ozs7Ozs7O1VDaEdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1JldmVhbC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBzcGxpdEluZGl2aWR1YWwgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBsZXQgbGluZXMgPSBbXVxuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSwgaDIsIHBcIilcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZWFjaChwYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcbiAgICAgIH0pXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgfVxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG5cbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfVxuXG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmVzXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcblxuICAgIGNvbnNvbGUubG9nKFwiQU5JTUFURSBJTlwiKVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBjb25zdCByZWN0ID0gdGhpcy5lbGVtZW50cy5saW5lc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgLy8gICBpZiAocmVjdC50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID4gMCkge1xuICAgIC8vICAgICAvLyBDaGVja2luZyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJDaGVja2luZyBpZiB0aGUgZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcIilcbiAgICAvLyAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSByZWN0XG4gICAgLy8gICAgIHRvcCA9IHRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMlxuICAgIC8vICAgICBsZXQgb3BhY2l0eVZhbHVlID1cbiAgICAvLyAgICAgICAxIC0gKHRvcCAqIDAuMDEgKyBsZWZ0ICogMC4wMDEpIDwgMC4xID8gMC4xIDogMSAtICh0b3AgKiAwLjAxICsgbGVmdCAqIDAuMDAxKS50b0ZpeGVkKDMpXG4gICAgLy8gICAgIG9wYWNpdHlWYWx1ZSA9IG9wYWNpdHlWYWx1ZSA+IDEgPyAxIDogb3BhY2l0eVZhbHVlLnRvRml4ZWQoMylcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50cy5saW5lc1tpXS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eVZhbHVlXG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZWxlbWVudHMubGluZXNbaV0ucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCB0aGlzLndyYXBwZXIuaW5uZXJIZWlnaHRcbiAgICAgICkge1xuICAgICAgICBsZXQgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuZWxlbWVudHMubGluZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgdG9wID0gdG9wIC0gdGhpcy53cmFwcGVyLmlubmVySGVpZ2h0ICogMC4yXG4gICAgICAgIGxldCBvcGFjaXR5VmFsdWUgPVxuICAgICAgICAgIDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSkgPCAwLjEgPyAwLjEgOiAxIC0gKHRvcCAqIDAuMDEgKyBsZWZ0ICogMC4wMDEpLnRvRml4ZWQoMylcbiAgICAgICAgb3BhY2l0eVZhbHVlID0gb3BhY2l0eVZhbHVlID4gMSA/IDEgOiBvcGFjaXR5VmFsdWUudG9GaXhlZCgzKVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5VmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgY29uc29sZS5sb2coXCJBTklNQVRFIE9VVFwiKVxuXG4gICAgLy8gZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAvLyAgIGVhY2gobGluZSwgd29yZCA9PiB7XG4gICAgLy8gICAgIHdvcmQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTNiMzQ4OTEwNzRlODNmZDcxNzRcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0Iiwic3BsaXRJbmRpdmlkdWFsIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImh0bWxTdHJpbmciLCJwQXJyYXkiLCJ0ZXh0Q29udGVudCIsImkiLCJpbm5lckhUTUwiLCJlbGVtZW50cyIsIndyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJjb25zb2xlIiwibG9nIiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0IiwibGVmdCIsIm9wYWNpdHlWYWx1ZSIsInRvRml4ZWQiLCJzdHlsZSIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9