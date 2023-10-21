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
        console.log("JE SUIS LA");
        let {
          left,
          top
        } = this.elements.lines[i].getBoundingClientRect();
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
/******/ 	__webpack_require__.h = () => ("3b173ef48331f1c1d4cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iOTU5ZmU4MzBlYzkwZWYyYTU3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUIsSUFBSUssVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtRQUMzQztRQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUNoQyxDQUFDLENBQUM7TUFDRkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUcsRUFBRTtNQUNuQixJQUFJQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDVixLQUFLLENBQUMsRUFBRSxDQUFDO01BQzFDLEtBQUssSUFBSVcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixNQUFNLENBQUNGLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7UUFDdENILFVBQVUsSUFBSyxTQUFRQyxNQUFNLENBQUNFLENBQUMsQ0FBRSxTQUFRO01BQzNDO01BQ0FSLE9BQU8sQ0FBQ1MsU0FBUyxHQUFHSixVQUFVO01BRTlCSixLQUFLLEdBQUcsQ0FBQyxHQUFHRCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUFUsUUFBUSxFQUFFO1FBQ1JUO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNVLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3JELElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQzs7SUFFekI7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLEtBQUssSUFBSVgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsUUFBUSxDQUFDVCxLQUFLLENBQUNHLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7TUFDbkRVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1QsUUFBUSxDQUFDVCxLQUFLLENBQUNPLENBQUMsQ0FBQyxDQUFDWSxhQUFhLENBQUNDLHFCQUFxQixDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDO01BQzdFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDUSxXQUFXLENBQUM7TUFDL0IsSUFBSSxJQUFJLENBQUNiLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDTyxDQUFDLENBQUMsQ0FBQ1ksYUFBYSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBR1AsTUFBTSxDQUFDUSxXQUFXLEVBQUU7UUFDekZMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUN6QixJQUFJO1VBQUVLLElBQUk7VUFBRUY7UUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDWixRQUFRLENBQUNULEtBQUssQ0FBQ08sQ0FBQyxDQUFDLENBQUNhLHFCQUFxQixDQUFDLENBQUM7UUFDbEU7UUFDQSxJQUFJSSxZQUFZLEdBQ2QsQ0FBQyxJQUFJSCxHQUFHLEdBQUcsSUFBSSxHQUFHRSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQ0YsR0FBRyxHQUFHLElBQUksR0FBR0UsSUFBSSxHQUFHLEtBQUssRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRkQsWUFBWSxHQUFHQSxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR0EsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDTyxDQUFDLENBQUMsQ0FBQ21CLEtBQUssQ0FBQ0MsT0FBTyxHQUFHSCxZQUFZO01BQ3JEO0lBQ0Y7RUFDRjtFQUVBVCxVQUFVQSxDQUFBLEVBQUc7SUFDWCxLQUFLLENBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBRWxCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7O0lBRTFCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDRjs7RUFFQUwsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDYixLQUFLLEdBQUdMLHFEQUFTLENBQUMsSUFBSSxDQUFDYyxRQUFRLENBQUNULEtBQUssQ0FBQztFQUM3QztBQUNGOzs7Ozs7OztVQ2pHQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9SZXZlYWwuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIlxuaW1wb3J0IHsgc3BsaXRJbmRpdmlkdWFsIH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgbGV0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBodG1sU3RyaW5nID0gXCJcIlxuICAgICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGh0bWxTdHJpbmcgKz0gYDxzcGFuPiR7cEFycmF5W2ldfTwvc3Bhbj5gXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG4gICAgICB9KVxuICAgICAgbGluZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZ1xuXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19xdW90ZVwiKVxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG5cbiAgICBjb25zb2xlLmxvZyhcIkFOSU1BVEUgSU5cIilcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgY29uc3QgcmVjdCA9IHRoaXMuZWxlbWVudHMubGluZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIC8vICAgaWYgKHJlY3QudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC8gMiAmJiByZWN0LmJvdHRvbSA+IDApIHtcbiAgICAvLyAgICAgLy8gQ2hlY2tpbmcgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XCIpXG4gICAgLy8gICAgIGxldCB7IGxlZnQsIHRvcCB9ID0gcmVjdFxuICAgIC8vICAgICB0b3AgPSB0b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjJcbiAgICAvLyAgICAgbGV0IG9wYWNpdHlWYWx1ZSA9XG4gICAgLy8gICAgICAgMSAtICh0b3AgKiAwLjAxICsgbGVmdCAqIDAuMDAxKSA8IDAuMSA/IDAuMSA6IDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSkudG9GaXhlZCgzKVxuICAgIC8vICAgICBvcGFjaXR5VmFsdWUgPSBvcGFjaXR5VmFsdWUgPiAxID8gMSA6IG9wYWNpdHlWYWx1ZS50b0ZpeGVkKDMpXG4gICAgLy8gICAgIHRoaXMuZWxlbWVudHMubGluZXNbaV0uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHlWYWx1ZVxuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cy5saW5lc1tpXS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcClcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lckhlaWdodClcbiAgICAgIGlmICh0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSkUgU1VJUyBMQVwiKVxuICAgICAgICBsZXQgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuZWxlbWVudHMubGluZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLy8gdG9wID0gdG9wIC0gdGhpcy53cmFwcGVyLmlubmVySGVpZ2h0ICogMC4yXG4gICAgICAgIGxldCBvcGFjaXR5VmFsdWUgPVxuICAgICAgICAgIDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSkgPCAwLjEgPyAwLjEgOiAxIC0gKHRvcCAqIDAuMDEgKyBsZWZ0ICogMC4wMDEpLnRvRml4ZWQoMylcbiAgICAgICAgb3BhY2l0eVZhbHVlID0gb3BhY2l0eVZhbHVlID4gMSA/IDEgOiBvcGFjaXR5VmFsdWUudG9GaXhlZCgzKVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5VmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgY29uc29sZS5sb2coXCJBTklNQVRFIE9VVFwiKVxuXG4gICAgLy8gZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAvLyAgIGVhY2gobGluZSwgd29yZCA9PiB7XG4gICAgLy8gICAgIHdvcmQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCJcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50cy5saW5lcylcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2IxNzNlZjQ4MzMxZjFjMWQ0Y2ZcIikiXSwibmFtZXMiOlsiZWFjaCIsIkFuaW1hdGlvbiIsImNhbGN1bGF0ZSIsInNwbGl0Iiwic3BsaXRJbmRpdmlkdWFsIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImh0bWxTdHJpbmciLCJwQXJyYXkiLCJ0ZXh0Q29udGVudCIsImkiLCJpbm5lckhUTUwiLCJlbGVtZW50cyIsIndyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJjb25zb2xlIiwibG9nIiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0IiwibGVmdCIsIm9wYWNpdHlWYWx1ZSIsInRvRml4ZWQiLCJzdHlsZSIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9