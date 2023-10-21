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
  constructor() {
    super({
      classes: {},
      element: ".preloader",
      elements: {
        title: ".preloader__text",
        number: ".preloader__number",
        numberText: ".preloader__number__text"
      }
    });
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
/******/ 	__webpack_require__.h = () => ("6d22fc1d433e34802996")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtFQUVBQSxVQUFVQSxDQUFBLEVBQUc7SUFDWCxJQUFJLENBQUN0QixRQUFRLEdBQUd1QixJQUFJLENBQUN2QixRQUFRLENBQUMsQ0FBQztJQUUvQixJQUFJLENBQUNBLFFBQVEsQ0FBQ3dCLEVBQUUsQ0FBQyxJQUFJLENBQUN0QyxPQUFPLEVBQUU7TUFDN0JnQixTQUFTLEVBQUUsQ0FBQztNQUNadUIsUUFBUSxFQUFFO0lBQ1osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDekIsUUFBUSxDQUFDRyxJQUFJLENBQUNDLENBQUMsSUFBSTtNQUN0QixJQUFJLENBQUNzQixJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztFQUNKO0VBRUFDLE9BQU9BLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ3pDLE9BQU8sQ0FBQzBDLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQzNDLE9BQU8sQ0FBQztFQUNuRDtBQUNGOzs7Ozs7OztVQ25HQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwib2dsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCJcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJcIixcbiAgICAgICAgbnVtYmVyVGV4dDogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIlxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmNvdW50ZXIgPSAwXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgd2luZG93LlRFWFRVUkVTID0ge31cblxuICAgIHRoaXMuZWxlbWVudHMuc3BhbnMgPSBzcGxpdCh7XG4gICAgICBhcHBlbmQ6IHRydWUsXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogXCI8YnI+XCJcbiAgICB9KVxuXG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLnNwYW5zLCBlbGVtZW50ID0+IHtcbiAgICAgIHNwbGl0KHtcbiAgICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZXhwcmVzc2lvbjogXCI8YnI+XCJcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcbiAgfVxuXG4gIGNyZWF0ZUxvYWRlcigpIHtcbiAgICB0aGlzLmFuaW1hdGVJbiA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgdGhpcy5hbmltYXRlSW4uc2V0KHRoaXMuZWxlbWVudHMudGl0bGUsIHtcbiAgICAgIGF1dG9BbHBoYTogMVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGVJbi5jYWxsKF8gPT4ge1xuICAgICAgZWFjaCh3aW5kb3cuQVNTRVRTLCBpbWFnZSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmNhbnZhcy5nbCwge1xuICAgICAgICAgIGdlbmVyYXRlTWlwbWFwczogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtZWRpYSA9IG5ldyBJbWFnZSgpXG5cbiAgICAgICAgbWVkaWEuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiXG4gICAgICAgIG1lZGlhLnNyYyA9IGltYWdlXG4gICAgICAgIG1lZGlhLm9ubG9hZCA9IF8gPT4ge1xuICAgICAgICAgIHRleHR1cmUuaW1hZ2UgPSBtZWRpYVxuXG4gICAgICAgICAgdGhpcy5vbkFzc2V0TG9hZGVkKClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5URVhUVVJFU1tpbWFnZV0gPSB0ZXh0dXJlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKCkge1xuICAgIHRoaXMuY291bnRlciArPSAxXG5cbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5jb3VudGVyIC8gd2luZG93LkFTU0VUUy5sZW5ndGhcblxuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgXG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbkNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBvbkNvbXBsZXRlKCkge1xuICAgIHRoaXMudGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKClcblxuICAgIHRoaXMudGltZWxpbmUudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICBkdXJhdGlvbjogMVxuICAgIH0pXG5cbiAgICB0aGlzLnRpbWVsaW5lLmNhbGwoXyA9PiB7XG4gICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZVwiKVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmQyMmZjMWQ0MzNlMzQ4MDI5OTZcIikiXSwibmFtZXMiOlsiZ3NhcCIsIlRleHR1cmUiLCJQcmVmaXgiLCJDb21wb25lbnQiLCJzcGxpdCIsImVhY2giLCJjb25zdHJ1Y3RvciIsImNsYXNzZXMiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJjb3VudGVyIiwidHJhbnNmb3JtUHJlZml4Iiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGFucyIsImFwcGVuZCIsImV4cHJlc3Npb24iLCJjcmVhdGVMb2FkZXIiLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsInNldCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiQVNTRVRTIiwiaW1hZ2UiLCJ0ZXh0dXJlIiwiY2FudmFzIiwiZ2wiLCJnZW5lcmF0ZU1pcG1hcHMiLCJtZWRpYSIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJvbmxvYWQiLCJvbkFzc2V0TG9hZGVkIiwicGVyY2VudCIsImxlbmd0aCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uQ29tcGxldGUiLCJHU0FQIiwidG8iLCJkdXJhdGlvbiIsImVtaXQiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==