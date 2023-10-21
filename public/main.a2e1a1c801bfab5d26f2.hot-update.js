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
    console.log("ANIMATE IN", this.elements.lines);
    this.elements.lines.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      }, index * 30); // This will delay the animation of each letter, creating a cascading effect
    });

    // gsap.to(this.elements.lines, {
    //   opacity: 1,
    //   y: 0,
    //   stagger: 0.03, // This will delay the animation of each letter, creating a cascading effect
    //   duration: 0.5,
    //   ease: "power2.out"
    // })
  }

  animateOut() {
    super.animateOut();
    console.log("ANIMATE OUT", this.elements.lines);

    // gsap.to(this.elements.lines, {
    //   opacity: 0.1,
    //   y: 10,
    //   duration: 0.5,
    //   ease: "power2.in"
    // })

    this.elements.lines.forEach(span => {
      span.style.opacity = "0.1";
      span.style.transform = "translateY(10px)";
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
/******/ 	__webpack_require__.h = () => ("1fe70a203c39d2ab2598")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMmUxYTFjODAxYmZhYjVkMjZmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFSTtBQUNFO0FBQ3hCO0FBRXZCLGlFQUFlLGNBQWNDLHlEQUFTLENBQUM7RUFDckNLLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsSUFBSUMsS0FBSyxHQUFHLEVBQUU7SUFDZCxNQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBRXhELElBQUlELFVBQVUsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUMzQlgsa0RBQUksQ0FBQ1MsVUFBVSxFQUFFRixPQUFPLElBQUk7UUFDMUIsSUFBSUssVUFBVSxHQUFHLEVBQUU7UUFDbkIsSUFBSUMsTUFBTSxHQUFHTixPQUFPLENBQUNPLFdBQVcsQ0FBQ1gsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxLQUFLLElBQUlZLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxDQUFDRixNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ3RDSCxVQUFVLElBQUssU0FBUUMsTUFBTSxDQUFDRSxDQUFDLENBQUUsU0FBUTtRQUMzQztRQUNBUixPQUFPLENBQUNTLFNBQVMsR0FBR0osVUFBVTtNQUNoQyxDQUFDLENBQUM7TUFDRkosS0FBSyxHQUFHLENBQUMsR0FBR0QsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUcsRUFBRTtNQUNuQixJQUFJQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDWCxLQUFLLENBQUMsRUFBRSxDQUFDO01BQzFDLEtBQUssSUFBSVksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixNQUFNLENBQUNGLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUU7UUFDdENILFVBQVUsSUFBSyxTQUFRQyxNQUFNLENBQUNFLENBQUMsQ0FBRSxTQUFRO01BQzNDO01BQ0FSLE9BQU8sQ0FBQ1MsU0FBUyxHQUFHSixVQUFVO01BRTlCSixLQUFLLEdBQUcsQ0FBQyxHQUFHRCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DO0lBRUEsS0FBSyxDQUFDO01BQ0pILE9BQU87TUFDUFUsUUFBUSxFQUFFO1FBQ1JUO01BQ0Y7SUFDRixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNVLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0lBQ3JELElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7SUFFZixJQUFJLHNCQUFzQixJQUFJQyxNQUFNLEVBQUU7TUFDcEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFNBQVNBLENBQUEsRUFBRztJQUNWLEtBQUssQ0FBQ0EsU0FBUyxDQUFDLENBQUM7SUFFakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNULFFBQVEsQ0FBQ1QsS0FBSyxDQUFDO0lBRTlDLElBQUksQ0FBQ1MsUUFBUSxDQUFDVCxLQUFLLENBQUNtQixPQUFPLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEtBQUs7TUFDM0NDLFVBQVUsQ0FBQyxNQUFNO1FBQ2ZGLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLEdBQUcsR0FBRztRQUN4QkosSUFBSSxDQUFDRyxLQUFLLENBQUNFLFNBQVMsR0FBRyxlQUFlO01BQ3hDLENBQUMsRUFBRUosS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFDO0lBQ2pCLENBQUMsQ0FBQzs7SUFFRjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNGOztFQUVBTixVQUFVQSxDQUFBLEVBQUc7SUFDWCxLQUFLLENBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBRWxCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDVCxRQUFRLENBQUNULEtBQUssQ0FBQzs7SUFFL0M7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLElBQUksQ0FBQ1MsUUFBUSxDQUFDVCxLQUFLLENBQUNtQixPQUFPLENBQUNDLElBQUksSUFBSTtNQUNsQ0EsSUFBSSxDQUFDRyxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLO01BQzFCSixJQUFJLENBQUNHLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLGtCQUFrQjtJQUMzQyxDQUFDLENBQUM7RUFDSjtFQUVBWixRQUFRQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNiLEtBQUssR0FBR04scURBQVMsQ0FBQyxJQUFJLENBQUNlLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDO0VBQzdDO0FBQ0Y7Ozs7Ozs7O1VDMUZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1JldmVhbC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiXG5cbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBzcGxpdEluZGl2aWR1YWwgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcbiAgICBsZXQgbGluZXMgPSBbXVxuICAgIGNvbnN0IHBhcmFncmFwaHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSwgaDIsIHBcIilcblxuICAgIGlmIChwYXJhZ3JhcGhzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZWFjaChwYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGh0bWxTdHJpbmcgPSBcIlwiXG4gICAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaHRtbFN0cmluZyArPSBgPHNwYW4+JHtwQXJyYXlbaV19PC9zcGFuPmBcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxTdHJpbmdcbiAgICAgIH0pXG4gICAgICBsaW5lcyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaHRtbFN0cmluZyA9IFwiXCJcbiAgICAgIGxldCBwQXJyYXkgPSBlbGVtZW50LnRleHRDb250ZW50LnNwbGl0KFwiXCIpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBodG1sU3RyaW5nICs9IGA8c3Bhbj4ke3BBcnJheVtpXX08L3NwYW4+YFxuICAgICAgfVxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sU3RyaW5nXG5cbiAgICAgIGxpbmVzID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIildXG4gICAgfVxuXG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudCxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmVzXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX3F1b3RlXCIpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdGhpcy5hbmltYXRlT3V0KClcbiAgICB9XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgc3VwZXIuYW5pbWF0ZUluKClcblxuICAgIGNvbnNvbGUubG9nKFwiQU5JTUFURSBJTlwiLCB0aGlzLmVsZW1lbnRzLmxpbmVzKVxuXG4gICAgdGhpcy5lbGVtZW50cy5saW5lcy5mb3JFYWNoKChzcGFuLCBpbmRleCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNwYW4uc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDApXCJcbiAgICAgIH0sIGluZGV4ICogMzApIC8vIFRoaXMgd2lsbCBkZWxheSB0aGUgYW5pbWF0aW9uIG9mIGVhY2ggbGV0dGVyLCBjcmVhdGluZyBhIGNhc2NhZGluZyBlZmZlY3RcbiAgICB9KVxuXG4gICAgLy8gZ3NhcC50byh0aGlzLmVsZW1lbnRzLmxpbmVzLCB7XG4gICAgLy8gICBvcGFjaXR5OiAxLFxuICAgIC8vICAgeTogMCxcbiAgICAvLyAgIHN0YWdnZXI6IDAuMDMsIC8vIFRoaXMgd2lsbCBkZWxheSB0aGUgYW5pbWF0aW9uIG9mIGVhY2ggbGV0dGVyLCBjcmVhdGluZyBhIGNhc2NhZGluZyBlZmZlY3RcbiAgICAvLyAgIGR1cmF0aW9uOiAwLjUsXG4gICAgLy8gICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIC8vIH0pXG4gIH1cblxuICBhbmltYXRlT3V0KCkge1xuICAgIHN1cGVyLmFuaW1hdGVPdXQoKVxuXG4gICAgY29uc29sZS5sb2coXCJBTklNQVRFIE9VVFwiLCB0aGlzLmVsZW1lbnRzLmxpbmVzKVxuXG4gICAgLy8gZ3NhcC50byh0aGlzLmVsZW1lbnRzLmxpbmVzLCB7XG4gICAgLy8gICBvcGFjaXR5OiAwLjEsXG4gICAgLy8gICB5OiAxMCxcbiAgICAvLyAgIGR1cmF0aW9uOiAwLjUsXG4gICAgLy8gICBlYXNlOiBcInBvd2VyMi5pblwiXG4gICAgLy8gfSlcblxuICAgIHRoaXMuZWxlbWVudHMubGluZXMuZm9yRWFjaChzcGFuID0+IHtcbiAgICAgIHNwYW4uc3R5bGUub3BhY2l0eSA9IFwiMC4xXCJcbiAgICAgIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwcHgpXCJcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5saW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRzLmxpbmVzKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZmU3MGEyMDNjMzlkMmFiMjU5OFwiKSJdLCJuYW1lcyI6WyJlYWNoIiwiQW5pbWF0aW9uIiwiY2FsY3VsYXRlIiwic3BsaXQiLCJzcGxpdEluZGl2aWR1YWwiLCJnc2FwIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwibGluZXMiLCJwYXJhZ3JhcGhzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImh0bWxTdHJpbmciLCJwQXJyYXkiLCJ0ZXh0Q29udGVudCIsImkiLCJpbm5lckhUTUwiLCJlbGVtZW50cyIsIndyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvblJlc2l6ZSIsIndpbmRvdyIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsInNwYW4iLCJpbmRleCIsInNldFRpbWVvdXQiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9