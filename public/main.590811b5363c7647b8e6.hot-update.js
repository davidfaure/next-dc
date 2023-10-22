"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Texture.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor({
    canvas
  }) {
    super({
      classes: {},
      element: ".preloader",
      elements: {
        title: ".preloader__text",
        number: ".preloader__number",
        numberText: ".preloader__number__text"
      }
    });
    this.canvas = canvas;
    this.counter = 0;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
    window.TEXTURES = {};
    this.elements.spans = (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      append: true,
      element: this.elements.title,
      expression: "<br>"
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(this.elements.spans, element => {
      (0,_utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
        append: false,
        element,
        expression: "<br>"
      });
    });
    this.createLoader();
  }
  createLoader() {
    this.animateIn = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline();
    this.animateIn.set(this.elements.title, {
      autoAlpha: 1
    });
    this.animateIn.call(_ => {
      (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(window.ASSETS, image => {
        const texture = new ogl__WEBPACK_IMPORTED_MODULE_5__.Texture(this.canvas.gl, {
          generateMipmaps: false
        });
        const media = new Image();
        media.crossOrigin = "anonymous";
        media.src = image;
        media.onload = _ => {
          texture.image = media;
          this.onAssetLoaded();
        };
        window.TEXTURES[image] = texture;
      });
    });
  }
  onAssetLoaded() {
    this.counter += 1;
    const percent = this.counter / window.ASSETS.length;
    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`;
    if (percent === 1) {
      this.onComplete();
    }
  }
  onComplete() {
    this.timeline = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.timeline();
    this.timeline.to(this.element, {
      autoAlpha: 0,
      duration: 1
    });
    this.timeline.call(_ => {
      this.emit("complete");
    });
  }
  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f888cc4e3267a18c29b7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41OTA4MTFiNTM2M2M3NjQ3YjhlNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNFO0FBQ0Y7QUFFYztBQUNKO0FBQ1I7QUFFN0IsaUVBQWUsY0FBY0cseURBQVMsQ0FBQztFQUNyQ0csV0FBV0EsQ0FBQztJQUFFQztFQUFPLENBQUMsRUFBRTtJQUN0QixLQUFLLENBQUM7TUFDSkMsT0FBTyxFQUFFLENBQUMsQ0FBQztNQUNYQyxPQUFPLEVBQUUsWUFBWTtNQUNyQkMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUJDLFVBQVUsRUFBRTtNQUNkO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTixNQUFNLEdBQUdBLE1BQU07SUFFcEIsSUFBSSxDQUFDTyxPQUFPLEdBQUcsQ0FBQztJQUVoQixJQUFJLENBQUNDLGVBQWUsR0FBR2IsNkNBQU0sQ0FBQyxXQUFXLENBQUM7SUFFMUNjLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsS0FBSyxHQUFHZCxrREFBSyxDQUFDO01BQzFCZSxNQUFNLEVBQUUsSUFBSTtNQUNaVixPQUFPLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEtBQUs7TUFDNUJTLFVBQVUsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUVGZiw0Q0FBSSxDQUFDLElBQUksQ0FBQ0ssUUFBUSxDQUFDUSxLQUFLLEVBQUVULE9BQU8sSUFBSTtNQUNuQ0wsa0RBQUssQ0FBQztRQUNKZSxNQUFNLEVBQUUsS0FBSztRQUNiVixPQUFPO1FBQ1BXLFVBQVUsRUFBRTtNQUNkLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDckI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUd0QixzQ0FBSSxDQUFDdUIsUUFBUSxDQUFDLENBQUM7SUFFaEMsSUFBSSxDQUFDRCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNkLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO01BQ3RDYyxTQUFTLEVBQUU7SUFDYixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNILFNBQVMsQ0FBQ0ksSUFBSSxDQUFDQyxDQUFDLElBQUk7TUFDdkJ0Qiw0Q0FBSSxDQUFDVyxNQUFNLENBQUNZLE1BQU0sRUFBRUMsS0FBSyxJQUFJO1FBQzNCLE1BQU1DLE9BQU8sR0FBRyxJQUFJN0Isd0NBQU8sQ0FBQyxJQUFJLENBQUNNLE1BQU0sQ0FBQ3dCLEVBQUUsRUFBRTtVQUMxQ0MsZUFBZSxFQUFFO1FBQ25CLENBQUMsQ0FBQztRQUVGLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztRQUV6QkQsS0FBSyxDQUFDRSxXQUFXLEdBQUcsV0FBVztRQUMvQkYsS0FBSyxDQUFDRyxHQUFHLEdBQUdQLEtBQUs7UUFDakJJLEtBQUssQ0FBQ0ksTUFBTSxHQUFHVixDQUFDLElBQUk7VUFDbEJHLE9BQU8sQ0FBQ0QsS0FBSyxHQUFHSSxLQUFLO1VBRXJCLElBQUksQ0FBQ0ssYUFBYSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUVEdEIsTUFBTSxDQUFDQyxRQUFRLENBQUNZLEtBQUssQ0FBQyxHQUFHQyxPQUFPO01BQ2xDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFRLGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBRWpCLE1BQU15QixPQUFPLEdBQUcsSUFBSSxDQUFDekIsT0FBTyxHQUFHRSxNQUFNLENBQUNZLE1BQU0sQ0FBQ1ksTUFBTTtJQUVuRCxJQUFJLENBQUM5QixRQUFRLENBQUNHLFVBQVUsQ0FBQzRCLFNBQVMsR0FBSSxHQUFFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxHQUFHLEdBQUcsQ0FBRSxHQUFFO0lBRXBFLElBQUlBLE9BQU8sS0FBSyxDQUFDLEVBQUU7TUFDakIsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFBLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ3JCLFFBQVEsR0FBR3ZCLHNDQUFJLENBQUN1QixRQUFRLENBQUMsQ0FBQztJQUUvQixJQUFJLENBQUNBLFFBQVEsQ0FBQ3NCLEVBQUUsQ0FBQyxJQUFJLENBQUNwQyxPQUFPLEVBQUU7TUFDN0JnQixTQUFTLEVBQUUsQ0FBQztNQUNacUIsUUFBUSxFQUFFO0lBQ1osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDdkIsUUFBUSxDQUFDRyxJQUFJLENBQUNDLENBQUMsSUFBSTtNQUN0QixJQUFJLENBQUNvQixJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKO0VBRUFDLE9BQU9BLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ3ZDLE9BQU8sQ0FBQ3dDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3pDLE9BQU8sQ0FBQztFQUNuRDtBQUNGOzs7Ozs7OztVQ3JHQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwib2dsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCJcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgY2FudmFzIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXG4gICAgICAgIG51bWJlclRleHQ6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcblxuICAgIHRoaXMuY291bnRlciA9IDBcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB3aW5kb3cuVEVYVFVSRVMgPSB7fVxuXG4gICAgdGhpcy5lbGVtZW50cy5zcGFucyA9IHNwbGl0KHtcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgIH0pXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuc3BhbnMsIGVsZW1lbnQgPT4ge1xuICAgICAgc3BsaXQoe1xuICAgICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICB0aGlzLmFuaW1hdGVJbi5zZXQodGhpcy5lbGVtZW50cy50aXRsZSwge1xuICAgICAgYXV0b0FscGhhOiAxXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0ZUluLmNhbGwoXyA9PiB7XG4gICAgICBlYWNoKHdpbmRvdy5BU1NFVFMsIGltYWdlID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuY2FudmFzLmdsLCB7XG4gICAgICAgICAgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG1lZGlhID0gbmV3IEltYWdlKClcblxuICAgICAgICBtZWRpYS5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCJcbiAgICAgICAgbWVkaWEuc3JjID0gaW1hZ2VcbiAgICAgICAgbWVkaWEub25sb2FkID0gXyA9PiB7XG4gICAgICAgICAgdGV4dHVyZS5pbWFnZSA9IG1lZGlhXG5cbiAgICAgICAgICB0aGlzLm9uQXNzZXRMb2FkZWQoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LlRFWFRVUkVTW2ltYWdlXSA9IHRleHR1cmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoKSB7XG4gICAgdGhpcy5jb3VudGVyICs9IDFcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmNvdW50ZXIgLyB3aW5kb3cuQVNTRVRTLmxlbmd0aFxuXG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWBcblxuICAgIGlmIChwZXJjZW50ID09PSAxKSB7XG4gICAgICB0aGlzLm9uQ29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgdGhpcy50aW1lbGluZSA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgdGhpcy50aW1lbGluZS50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIGR1cmF0aW9uOiAxXG4gICAgfSlcblxuICAgIHRoaXMudGltZWxpbmUuY2FsbChfID0+IHtcbiAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlXCIpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmODg4Y2M0ZTMyNjdhMThjMjliN1wiKSJdLCJuYW1lcyI6WyJnc2FwIiwiVGV4dHVyZSIsIlByZWZpeCIsIkNvbXBvbmVudCIsInNwbGl0IiwiZWFjaCIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY2xhc3NlcyIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsImNvdW50ZXIiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJ3aW5kb3ciLCJURVhUVVJFUyIsInNwYW5zIiwiYXBwZW5kIiwiZXhwcmVzc2lvbiIsImNyZWF0ZUxvYWRlciIsImFuaW1hdGVJbiIsInRpbWVsaW5lIiwic2V0IiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJBU1NFVFMiLCJpbWFnZSIsInRleHR1cmUiLCJnbCIsImdlbmVyYXRlTWlwbWFwcyIsIm1lZGlhIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsIm9ubG9hZCIsIm9uQXNzZXRMb2FkZWQiLCJwZXJjZW50IiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Db21wbGV0ZSIsInRvIiwiZHVyYXRpb24iLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=