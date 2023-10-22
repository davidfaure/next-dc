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
    this.timeline = GSAP.timeline();
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
/******/ 	__webpack_require__.h = () => ("ac1e78feebdea68dc982")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZDIyZmMxZDQzM2UzNDgwMjk5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNFO0FBQ0Y7QUFFYztBQUNKO0FBQ1I7QUFFN0IsaUVBQWUsY0FBY0cseURBQVMsQ0FBQztFQUNyQ0csV0FBV0EsQ0FBQztJQUFFQztFQUFPLENBQUMsRUFBRTtJQUN0QixLQUFLLENBQUM7TUFDSkMsT0FBTyxFQUFFLENBQUMsQ0FBQztNQUNYQyxPQUFPLEVBQUUsWUFBWTtNQUNyQkMsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUJDLFVBQVUsRUFBRTtNQUNkO0lBQ0YsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDTixNQUFNLEdBQUdBLE1BQU07SUFFcEIsSUFBSSxDQUFDTyxPQUFPLEdBQUcsQ0FBQztJQUVoQixJQUFJLENBQUNDLGVBQWUsR0FBR2IsNkNBQU0sQ0FBQyxXQUFXLENBQUM7SUFFMUNjLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsS0FBSyxHQUFHZCxrREFBSyxDQUFDO01BQzFCZSxNQUFNLEVBQUUsSUFBSTtNQUNaVixPQUFPLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEtBQUs7TUFDNUJTLFVBQVUsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUVGZiw0Q0FBSSxDQUFDLElBQUksQ0FBQ0ssUUFBUSxDQUFDUSxLQUFLLEVBQUVULE9BQU8sSUFBSTtNQUNuQ0wsa0RBQUssQ0FBQztRQUNKZSxNQUFNLEVBQUUsS0FBSztRQUNiVixPQUFPO1FBQ1BXLFVBQVUsRUFBRTtNQUNkLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDckI7RUFFQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUd0QixzQ0FBSSxDQUFDdUIsUUFBUSxDQUFDLENBQUM7SUFFaEMsSUFBSSxDQUFDRCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNkLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO01BQ3RDYyxTQUFTLEVBQUU7SUFDYixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNILFNBQVMsQ0FBQ0ksSUFBSSxDQUFDQyxDQUFDLElBQUk7TUFDdkJ0Qiw0Q0FBSSxDQUFDVyxNQUFNLENBQUNZLE1BQU0sRUFBRUMsS0FBSyxJQUFJO1FBQzNCLE1BQU1DLE9BQU8sR0FBRyxJQUFJN0Isd0NBQU8sQ0FBQyxJQUFJLENBQUNNLE1BQU0sQ0FBQ3dCLEVBQUUsRUFBRTtVQUMxQ0MsZUFBZSxFQUFFO1FBQ25CLENBQUMsQ0FBQztRQUVGLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztRQUV6QkQsS0FBSyxDQUFDRSxXQUFXLEdBQUcsV0FBVztRQUMvQkYsS0FBSyxDQUFDRyxHQUFHLEdBQUdQLEtBQUs7UUFDakJJLEtBQUssQ0FBQ0ksTUFBTSxHQUFHVixDQUFDLElBQUk7VUFDbEJHLE9BQU8sQ0FBQ0QsS0FBSyxHQUFHSSxLQUFLO1VBRXJCLElBQUksQ0FBQ0ssYUFBYSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUVEdEIsTUFBTSxDQUFDQyxRQUFRLENBQUNZLEtBQUssQ0FBQyxHQUFHQyxPQUFPO01BQ2xDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFRLGFBQWFBLENBQUEsRUFBRztJQUNkLElBQUksQ0FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBRWpCLE1BQU15QixPQUFPLEdBQUcsSUFBSSxDQUFDekIsT0FBTyxHQUFHRSxNQUFNLENBQUNZLE1BQU0sQ0FBQ1ksTUFBTTtJQUVuRCxJQUFJLENBQUM5QixRQUFRLENBQUNHLFVBQVUsQ0FBQzRCLFNBQVMsR0FBSSxHQUFFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxHQUFHLEdBQUcsQ0FBRSxHQUFFO0lBRXBFLElBQUlBLE9BQU8sS0FBSyxDQUFDLEVBQUU7TUFDakIsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQztJQUNuQjtFQUNGO0VBRUFBLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ3JCLFFBQVEsR0FBR3NCLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQyxDQUFDO0lBRS9CLElBQUksQ0FBQ0EsUUFBUSxDQUFDdUIsRUFBRSxDQUFDLElBQUksQ0FBQ3JDLE9BQU8sRUFBRTtNQUM3QmdCLFNBQVMsRUFBRSxDQUFDO01BQ1pzQixRQUFRLEVBQUU7SUFDWixDQUFDLENBQUM7SUFFRixJQUFJLENBQUN4QixRQUFRLENBQUNHLElBQUksQ0FBQ0MsQ0FBQyxJQUFJO01BQ3RCLElBQUksQ0FBQ3FCLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDdkIsQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDeEMsT0FBTyxDQUFDeUMsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDMUMsT0FBTyxDQUFDO0VBQ25EO0FBQ0Y7Ozs7Ozs7O1VDckdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIlxuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBjYW52YXMgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJcIixcbiAgICAgICAgbnVtYmVyVGV4dDogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIlxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuXG4gICAgdGhpcy5jb3VudGVyID0gMFxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHdpbmRvdy5URVhUVVJFUyA9IHt9XG5cbiAgICB0aGlzLmVsZW1lbnRzLnNwYW5zID0gc3BsaXQoe1xuICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246IFwiPGJyPlwiXG4gICAgfSlcblxuICAgIGVhY2godGhpcy5lbGVtZW50cy5zcGFucywgZWxlbWVudCA9PiB7XG4gICAgICBzcGxpdCh7XG4gICAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGV4cHJlc3Npb246IFwiPGJyPlwiXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKSB7XG4gICAgdGhpcy5hbmltYXRlSW4gPSBnc2FwLnRpbWVsaW5lKClcblxuICAgIHRoaXMuYW5pbWF0ZUluLnNldCh0aGlzLmVsZW1lbnRzLnRpdGxlLCB7XG4gICAgICBhdXRvQWxwaGE6IDFcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRlSW4uY2FsbChfID0+IHtcbiAgICAgIGVhY2god2luZG93LkFTU0VUUywgaW1hZ2UgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5jYW52YXMuZ2wsIHtcbiAgICAgICAgICBnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbWVkaWEgPSBuZXcgSW1hZ2UoKVxuXG4gICAgICAgIG1lZGlhLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIlxuICAgICAgICBtZWRpYS5zcmMgPSBpbWFnZVxuICAgICAgICBtZWRpYS5vbmxvYWQgPSBfID0+IHtcbiAgICAgICAgICB0ZXh0dXJlLmltYWdlID0gbWVkaWFcblxuICAgICAgICAgIHRoaXMub25Bc3NldExvYWRlZCgpXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuVEVYVFVSRVNbaW1hZ2VdID0gdGV4dHVyZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Bc3NldExvYWRlZCgpIHtcbiAgICB0aGlzLmNvdW50ZXIgKz0gMVxuXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMuY291bnRlciAvIHdpbmRvdy5BU1NFVFMubGVuZ3RoXG5cbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYFxuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgb25Db21wbGV0ZSgpIHtcbiAgICB0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICB0aGlzLnRpbWVsaW5lLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgZHVyYXRpb246IDFcbiAgICB9KVxuXG4gICAgdGhpcy50aW1lbGluZS5jYWxsKF8gPT4ge1xuICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIilcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFjMWU3OGZlZWJkZWE2OGRjOTgyXCIpIl0sIm5hbWVzIjpbImdzYXAiLCJUZXh0dXJlIiwiUHJlZml4IiwiQ29tcG9uZW50Iiwic3BsaXQiLCJlYWNoIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiY291bnRlciIsInRyYW5zZm9ybVByZWZpeCIsIndpbmRvdyIsIlRFWFRVUkVTIiwic3BhbnMiLCJhcHBlbmQiLCJleHByZXNzaW9uIiwiY3JlYXRlTG9hZGVyIiwiYW5pbWF0ZUluIiwidGltZWxpbmUiLCJzZXQiLCJhdXRvQWxwaGEiLCJjYWxsIiwiXyIsIkFTU0VUUyIsImltYWdlIiwidGV4dHVyZSIsImdsIiwiZ2VuZXJhdGVNaXBtYXBzIiwibWVkaWEiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwib25sb2FkIiwib25Bc3NldExvYWRlZCIsInBlcmNlbnQiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkNvbXBsZXRlIiwiR1NBUCIsInRvIiwiZHVyYXRpb24iLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=