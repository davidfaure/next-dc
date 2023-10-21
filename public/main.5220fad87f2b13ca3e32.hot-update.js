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
    console.log(this.element, this.elements, "TEST");
    this.onResize();
    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
  }
  animateIn() {
    super.animateIn();
    console.log("ANIMATE IN");
    for (let i = 0; i < this.elements.lines.length; i++) {
      if (this.elements.lines[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
        let {
          left,
          top
        } = this.elements.lines[i].getBoundingClientRect();
        top = top - window.innerHeight * 0.5;
        let opacityValue = 1 - (top * 0.01 + left * 0.001) < 0.1 ? 0.1 : 1 - (top * 0.01 + left * 0.001).toFixed(3);
        opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
        this.elements.lines[i].style.opacity = opacityValue;
      }
    }

    // each(this.lines, (line, lineIndex) => {
    //   each(line, word => {
    //     word.style.transition = `transform 1.5s ${0.5 + lineIndex * 0.1}s ease`
    //     word.style[this.transformPrefix] = "translateY(0)"
    //   })
    // })
  }

  animateOut() {
    super.animateOut();
    console.log("ANIMATE OUT");
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.lines, line => {
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(line, word => {
        word.style[this.transformPrefix] = "translateY(100%)";
      });
    });
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
/******/ 	__webpack_require__.h = () => ("1c01789983fdd2be66ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MjIwZmFkODdmMmIxM2NhM2UzMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBRS9DLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNJLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlYsa0RBQUksQ0FBQ1EsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUIsSUFBSUssVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1YsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUlXLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtRQUMzQztRQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUNoQyxDQUFDLENBQUM7TUFDRkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUcsRUFBRTtNQUNuQixJQUFJQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDVixLQUFLLENBQUMsRUFBRSxDQUFDO01BQzFDLEtBQUssSUFBSVcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixNQUFNLENBQUNGLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7UUFDdENILFVBQVUsSUFBSyxTQUFRQyxNQUFNLENBQUNFLENBQUMsQ0FBRSxTQUFRO01BQzNDO01BQ0FSLE9BQU8sQ0FBQ1MsU0FBUyxHQUFHSixVQUFVO01BRTlCSixLQUFLLEdBQUcsQ0FBQyxHQUFHRCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUFUsUUFBUSxFQUFFO1FBQ1JUO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRlUsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDVSxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBRWhELElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUV6QixLQUFLLElBQUlKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNFLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDRyxNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO01BQ25ELElBQ0UsSUFBSSxDQUFDRSxRQUFRLENBQUNULEtBQUssQ0FBQ08sQ0FBQyxDQUFDLENBQUNTLGFBQWEsQ0FBQ0MscUJBQXFCLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQ2hFTCxNQUFNLENBQUNNLFdBQVcsR0FBRyxDQUFDLEVBQ3RCO1FBQ0EsSUFBSTtVQUFFQyxJQUFJO1VBQUVGO1FBQUksQ0FBQyxHQUFHLElBQUksQ0FBQ1QsUUFBUSxDQUFDVCxLQUFLLENBQUNPLENBQUMsQ0FBQyxDQUFDVSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2xFQyxHQUFHLEdBQUdBLEdBQUcsR0FBR0wsTUFBTSxDQUFDTSxXQUFXLEdBQUcsR0FBRztRQUNwQyxJQUFJRSxZQUFZLEdBQ2QsQ0FBQyxJQUFJSCxHQUFHLEdBQUcsSUFBSSxHQUFHRSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQ0YsR0FBRyxHQUFHLElBQUksR0FBR0UsSUFBSSxHQUFHLEtBQUssRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRkQsWUFBWSxHQUFHQSxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR0EsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQ2IsUUFBUSxDQUFDVCxLQUFLLENBQUNPLENBQUMsQ0FBQyxDQUFDZ0IsS0FBSyxDQUFDQyxPQUFPLEdBQUdILFlBQVk7TUFDckQ7SUFDRjs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDRjs7RUFFQVAsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsS0FBSyxDQUFDQSxVQUFVLENBQUMsQ0FBQztJQUVsQkosT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBRTFCbEIsa0RBQUksQ0FBQyxJQUFJLENBQUNPLEtBQUssRUFBRXlCLElBQUksSUFBSTtNQUN2QmhDLGtEQUFJLENBQUNnQyxJQUFJLEVBQUVDLElBQUksSUFBSTtRQUNqQkEsSUFBSSxDQUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDSSxlQUFlLENBQUMsR0FBRyxrQkFBa0I7TUFDdkQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQWYsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDWixLQUFLLEdBQUdMLHFEQUFTLENBQUMsSUFBSSxDQUFDYyxRQUFRLENBQUNULEtBQUssQ0FBQztFQUM3QztBQUNGOzs7Ozs7OztVQzFGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvYW5pbWF0aW9ucy9SZXZlYWwuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIlxuaW1wb3J0IHsgc3BsaXRJbmRpdmlkdWFsIH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG4gICAgbGV0IGxpbmVzID0gW11cbiAgICBjb25zdCBwYXJhZ3JhcGhzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDEsIGgyLCBwXCIpXG5cbiAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggIT09IDApIHtcbiAgICAgIGVhY2gocGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBodG1sU3RyaW5nID0gXCJcIlxuICAgICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGh0bWxTdHJpbmcgKz0gYDxzcGFuPiR7cEFycmF5W2ldfTwvc3Bhbj5gXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG4gICAgICB9KVxuICAgICAgbGluZXMgPSBbLi4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKV1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICBsZXQgcEFycmF5ID0gZWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIlwiKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZ1xuXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH1cblxuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lc1xuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50LCB0aGlzLmVsZW1lbnRzLCBcIlRFU1RcIilcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpXG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIHN1cGVyLmFuaW1hdGVJbigpXG5cbiAgICBjb25zb2xlLmxvZyhcIkFOSU1BVEUgSU5cIilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmVsZW1lbnRzLmxpbmVzW2ldLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDxcbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgICAgKSB7XG4gICAgICAgIGxldCB7IGxlZnQsIHRvcCB9ID0gdGhpcy5lbGVtZW50cy5saW5lc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICB0b3AgPSB0b3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjVcbiAgICAgICAgbGV0IG9wYWNpdHlWYWx1ZSA9XG4gICAgICAgICAgMSAtICh0b3AgKiAwLjAxICsgbGVmdCAqIDAuMDAxKSA8IDAuMSA/IDAuMSA6IDEgLSAodG9wICogMC4wMSArIGxlZnQgKiAwLjAwMSkudG9GaXhlZCgzKVxuICAgICAgICBvcGFjaXR5VmFsdWUgPSBvcGFjaXR5VmFsdWUgPiAxID8gMSA6IG9wYWNpdHlWYWx1ZS50b0ZpeGVkKDMpXG4gICAgICAgIHRoaXMuZWxlbWVudHMubGluZXNbaV0uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHlWYWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVhY2godGhpcy5saW5lcywgKGxpbmUsIGxpbmVJbmRleCkgPT4ge1xuICAgIC8vICAgZWFjaChsaW5lLCB3b3JkID0+IHtcbiAgICAvLyAgICAgd29yZC5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAxLjVzICR7MC41ICsgbGluZUluZGV4ICogMC4xfXMgZWFzZWBcbiAgICAvLyAgICAgd29yZC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBcInRyYW5zbGF0ZVkoMClcIlxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICB9XG5cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBzdXBlci5hbmltYXRlT3V0KClcblxuICAgIGNvbnNvbGUubG9nKFwiQU5JTUFURSBPVVRcIilcblxuICAgIGVhY2godGhpcy5saW5lcywgbGluZSA9PiB7XG4gICAgICBlYWNoKGxpbmUsIHdvcmQgPT4ge1xuICAgICAgICB3b3JkLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmxpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudHMubGluZXMpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFjMDE3ODk5ODNmZGQyYmU2NmVlXCIpIl0sIm5hbWVzIjpbImVhY2giLCJBbmltYXRpb24iLCJjYWxjdWxhdGUiLCJzcGxpdCIsInNwbGl0SW5kaXZpZHVhbCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImxpbmVzIiwicGFyYWdyYXBocyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJodG1sU3RyaW5nIiwicEFycmF5IiwidGV4dENvbnRlbnQiLCJpIiwiaW5uZXJIVE1MIiwiZWxlbWVudHMiLCJjb25zb2xlIiwibG9nIiwib25SZXNpemUiLCJ3aW5kb3ciLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0IiwibGVmdCIsIm9wYWNpdHlWYWx1ZSIsInRvRml4ZWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJsaW5lIiwid29yZCIsInRyYW5zZm9ybVByZWZpeCJdLCJzb3VyY2VSb290IjoiIn0=