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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Texture.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/text */ "./app/utils/text.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");







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
        expression: ""
      });
    });
    this.createLoader();
  }
  createLoader() {
    this.animateIn = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline();
    this.animateIn.set(this.elements.title, {
      autoAlpha: 1
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(this.elements.spans, (line, index) => {
      const letters = document.querySelectorAll("span");
      const onStart = _ => {
        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(letters, {
          autoAlpha: 0,
          display: "inline-block",
          y: "100%"
        }, {
          autoAlpha: 1,
          delay: 0.2,
          display: "inline-block",
          duration: 1,
          ease: "back.inOut",
          stagger: 0.015,
          y: "0%"
        });
      };
      this.animateIn.fromTo(line, {
        autoAlpha: 0,
        y: "100%"
      }, {
        autoAlpha: 1,
        delay: 0.2 * index,
        duration: 1.5,
        onStart,
        ease: "expo.inOut",
        y: "0%"
      }, "start");
    });
    this.animateIn.call(_ => {
      (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(window.ASSETS, image => {
        const texture = new ogl__WEBPACK_IMPORTED_MODULE_6__.Texture(this.canvas.gl, {
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
    return new Promise(() => {
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.timeline({
        delay: 1
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(this.elements.spans, (line, index) => {
        const letters = line.querySelectorAll("span");
        const onStart = _ => {
          gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(letters, {
            autoAlpha: 0,
            delay: 0.2,
            display: "inline-block",
            duration: 1,
            ease: "back.inOut",
            stagger: 0.015,
            y: "-100%"
          });
        };
        this.animateOut.to(line, {
          autoAlpha: 0,
          delay: 0.2 * index,
          duration: 1.5,
          onStart,
          ease: "expo.inOut",
          y: "-100%"
        }, "start");
      });
      this.animateOut.to(this.elements.numberText, {
        autoAlpha: 0,
        duration: 1,
        ease: _utils_easings__WEBPACK_IMPORTED_MODULE_4__.SMOOTH
      }, "start");
      this.animateOut.to(this.element, {
        autoAlpha: 0,
        duration: 1
      });
      this.animateOut.call(() => {
        this.emit("complete");
      });
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
/******/ 	__webpack_require__.h = () => ("572a63abaace75bf5908")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNzQixVQUFVLENBQUNuQixJQUFJLENBQUMsTUFBTTtRQUN6QixJQUFJLENBQUNxQixJQUFJLENBQUMsVUFBVSxDQUFDO01BQ3ZCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFDLE9BQU9BLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ3JELE9BQU8sQ0FBQ3NELFVBQVUsQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3ZELE9BQU8sQ0FBQztFQUNuRDtBQUNGOzs7Ozs7OztVQzFMQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwib2dsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCJcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcIi4uL3V0aWxzL3RleHRcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgY2FudmFzIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBjbGFzc2VzOiB7fSxcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXG4gICAgICAgIG51bWJlclRleHQ6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXNcblxuICAgIHRoaXMuY291bnRlciA9IDBcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB3aW5kb3cuVEVYVFVSRVMgPSB7fVxuXG4gICAgdGhpcy5lbGVtZW50cy5zcGFucyA9IHNwbGl0KHtcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIlxuICAgIH0pXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuc3BhbnMsIGVsZW1lbnQgPT4ge1xuICAgICAgc3BsaXQoe1xuICAgICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBleHByZXNzaW9uOiBcIlwiXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKSB7XG4gICAgdGhpcy5hbmltYXRlSW4gPSBnc2FwLnRpbWVsaW5lKClcblxuICAgIHRoaXMuYW5pbWF0ZUluLnNldCh0aGlzLmVsZW1lbnRzLnRpdGxlLCB7XG4gICAgICBhdXRvQWxwaGE6IDFcbiAgICB9KVxuXG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLnNwYW5zLCAobGluZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGxldHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuXG4gICAgICBjb25zdCBvblN0YXJ0ID0gXyA9PiB7XG4gICAgICAgIGdzYXAuZnJvbVRvKFxuICAgICAgICAgIGxldHRlcnMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIHk6IFwiMTAwJVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgICBkZWxheTogMC4yLFxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgZWFzZTogXCJiYWNrLmluT3V0XCIsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLjAxNSxcbiAgICAgICAgICAgIHk6IFwiMCVcIlxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFuaW1hdGVJbi5mcm9tVG8oXG4gICAgICAgIGxpbmUsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgICAgeTogXCIxMDAlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICBkZWxheTogMC4yICogaW5kZXgsXG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICBvblN0YXJ0LFxuICAgICAgICAgIGVhc2U6IFwiZXhwby5pbk91dFwiLFxuICAgICAgICAgIHk6IFwiMCVcIlxuICAgICAgICB9LFxuICAgICAgICBcInN0YXJ0XCJcbiAgICAgIClcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRlSW4uY2FsbChfID0+IHtcbiAgICAgIGVhY2god2luZG93LkFTU0VUUywgaW1hZ2UgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5jYW52YXMuZ2wsIHtcbiAgICAgICAgICBnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbWVkaWEgPSBuZXcgSW1hZ2UoKVxuXG4gICAgICAgIG1lZGlhLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIlxuICAgICAgICBtZWRpYS5zcmMgPSBpbWFnZVxuICAgICAgICBtZWRpYS5vbmxvYWQgPSBfID0+IHtcbiAgICAgICAgICB0ZXh0dXJlLmltYWdlID0gbWVkaWFcblxuICAgICAgICAgIHRoaXMub25Bc3NldExvYWRlZCgpXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuVEVYVFVSRVNbaW1hZ2VdID0gdGV4dHVyZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25Bc3NldExvYWRlZCgpIHtcbiAgICB0aGlzLmNvdW50ZXIgKz0gMVxuXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMuY291bnRlciAvIHdpbmRvdy5BU1NFVFMubGVuZ3RoXG5cbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYFxuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlbGF5OiAxXG4gICAgICB9KVxuXG4gICAgICBlYWNoKHRoaXMuZWxlbWVudHMuc3BhbnMsIChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsZXR0ZXJzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuXG4gICAgICAgIGNvbnN0IG9uU3RhcnQgPSBfID0+IHtcbiAgICAgICAgICBnc2FwLnRvKGxldHRlcnMsIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICAgIGRlbGF5OiAwLjIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICBlYXNlOiBcImJhY2suaW5PdXRcIixcbiAgICAgICAgICAgIHN0YWdnZXI6IDAuMDE1LFxuICAgICAgICAgICAgeTogXCItMTAwJVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZU91dC50byhcbiAgICAgICAgICBsaW5lLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICAgIGRlbGF5OiAwLjIgKiBpbmRleCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgICBvblN0YXJ0LFxuICAgICAgICAgICAgZWFzZTogXCJleHBvLmluT3V0XCIsXG4gICAgICAgICAgICB5OiBcIi0xMDAlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RhcnRcIlxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8oXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICBlYXNlOiBTTU9PVEhcbiAgICAgICAgfSxcbiAgICAgICAgXCJzdGFydFwiXG4gICAgICApXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBkdXJhdGlvbjogMVxuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoKCkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZVwiKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU3MmE2M2FiYWFjZTc1YmY1OTA4XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJUZXh0dXJlIiwiUHJlZml4IiwiQ29tcG9uZW50Iiwic3BsaXQiLCJlYWNoIiwiU01PT1RIIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiY291bnRlciIsInRyYW5zZm9ybVByZWZpeCIsIndpbmRvdyIsIlRFWFRVUkVTIiwic3BhbnMiLCJhcHBlbmQiLCJleHByZXNzaW9uIiwiY3JlYXRlTG9hZGVyIiwiYW5pbWF0ZUluIiwidGltZWxpbmUiLCJzZXQiLCJhdXRvQWxwaGEiLCJsaW5lIiwiaW5kZXgiLCJsZXR0ZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib25TdGFydCIsIl8iLCJmcm9tVG8iLCJkaXNwbGF5IiwieSIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlciIsImNhbGwiLCJBU1NFVFMiLCJpbWFnZSIsInRleHR1cmUiLCJnbCIsImdlbmVyYXRlTWlwbWFwcyIsIm1lZGlhIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsIm9ubG9hZCIsIm9uQXNzZXRMb2FkZWQiLCJwZXJjZW50IiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Db21wbGV0ZSIsIlByb21pc2UiLCJhbmltYXRlT3V0IiwidG8iLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=