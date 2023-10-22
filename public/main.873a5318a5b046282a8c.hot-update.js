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

    // this.createLoader()
    this.onComplete();
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
          whiteSpace: "pre-line",
          y: "100%"
        }, {
          autoAlpha: 1,
          delay: 0.2,
          display: "inline-block",
          whiteSpace: "pre-line",
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
        this.texture = new ogl__WEBPACK_IMPORTED_MODULE_6__.Texture(this.canvas.gl, {
          generateMipmaps: false
        });
        const media = new Image();
        media.crossOrigin = "anonymous";
        media.src = image;
        media.onload = _ => {
          this.texture.image = media;
          this.onAssetLoaded();
        };
        window.TEXTURES[image] = this.texture;
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
    // return new Promise(() => {
    //   this.animateOut = gsap.timeline({
    //     delay: 1
    //   })

    //   each(this.elements.spans, (line, index) => {
    //     const letters = line.querySelectorAll("span")

    //     const onStart = _ => {
    //       gsap.to(letters, {
    //         autoAlpha: 0,
    //         delay: 0.2,
    //         display: "inline-block",
    //         whiteSpace: "pre-line",
    //         duration: 1,
    //         ease: "back.inOut",
    //         stagger: 0.015,
    //         y: "-100%"
    //       })
    //     }

    //     this.animateOut.to(
    //       line,
    //       {
    //         autoAlpha: 0,
    //         delay: 0.2 * index,
    //         duration: 1.5,
    //         onStart,
    //         ease: "expo.inOut",
    //         y: "-100%"
    //       },
    //       "start"
    //     )
    //   })

    //   this.animateOut.to(
    //     this.elements.numberText,
    //     {
    //       autoAlpha: 0,
    //       duration: 1,
    //       ease: SMOOTH
    //     },
    //     "start"
    //   )

    //   this.animateOut.to(this.element, {
    //     autoAlpha: 0,
    //     duration: 1
    //   })

    //   this.animateOut.call(() => {
    //     this.emit("completed")
    //   })
    // })

    this.animateOut.to(this.element, {
      autoAlpha: 0,
      duration: 1
    });
    this.animateOut.call(() => {
      this.emit("completed");
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
/******/ 	__webpack_require__.h = () => ("d266a2a2155761bfabe3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRUE7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLElBQUksQ0FBQ3NDLFVBQVUsQ0FBQ0MsRUFBRSxDQUFDLElBQUksQ0FBQ25ELE9BQU8sRUFBRTtNQUMvQmlCLFNBQVMsRUFBRSxDQUFDO01BQ1phLFFBQVEsRUFBRTtJQUNaLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ29CLFVBQVUsQ0FBQ2pCLElBQUksQ0FBQyxNQUFNO01BQ3pCLElBQUksQ0FBQ21CLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDckQsT0FBTyxDQUFDc0QsVUFBVSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDdkQsT0FBTyxDQUFDO0VBQ25EO0FBQ0Y7Ozs7Ozs7O1VDdk1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIlxuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoeyBjYW52YXMgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJcIixcbiAgICAgICAgbnVtYmVyVGV4dDogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIlxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuXG4gICAgdGhpcy5jb3VudGVyID0gMFxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHdpbmRvdy5URVhUVVJFUyA9IHt9XG5cbiAgICB0aGlzLmVsZW1lbnRzLnNwYW5zID0gc3BsaXQoe1xuICAgICAgYXBwZW5kOiB0cnVlLFxuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246IFwiPGJyPlwiXG4gICAgfSlcblxuICAgIGVhY2godGhpcy5lbGVtZW50cy5zcGFucywgZWxlbWVudCA9PiB7XG4gICAgICBzcGxpdCh7XG4gICAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGV4cHJlc3Npb246IFwiXCJcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIHRoaXMuY3JlYXRlTG9hZGVyKClcbiAgICB0aGlzLm9uQ29tcGxldGUoKVxuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICB0aGlzLmFuaW1hdGVJbi5zZXQodGhpcy5lbGVtZW50cy50aXRsZSwge1xuICAgICAgYXV0b0FscGhhOiAxXG4gICAgfSlcblxuICAgIGVhY2godGhpcy5lbGVtZW50cy5zcGFucywgKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBsZXR0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcblxuICAgICAgY29uc3Qgb25TdGFydCA9IF8gPT4ge1xuICAgICAgICBnc2FwLmZyb21UbyhcbiAgICAgICAgICBsZXR0ZXJzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiBcInByZS1saW5lXCIsXG4gICAgICAgICAgICB5OiBcIjEwMCVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICAgICAgZGVsYXk6IDAuMixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiBcInByZS1saW5lXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIGVhc2U6IFwiYmFjay5pbk91dFwiLFxuICAgICAgICAgICAgc3RhZ2dlcjogMC4wMTUsXG4gICAgICAgICAgICB5OiBcIjAlXCJcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmltYXRlSW4uZnJvbVRvKFxuICAgICAgICBsaW5lLFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICAgIHk6IFwiMTAwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgZGVsYXk6IDAuMiAqIGluZGV4LFxuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgb25TdGFydCxcbiAgICAgICAgICBlYXNlOiBcImV4cG8uaW5PdXRcIixcbiAgICAgICAgICB5OiBcIjAlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzdGFydFwiXG4gICAgICApXG4gICAgfSlcblxuICAgIHRoaXMuYW5pbWF0ZUluLmNhbGwoXyA9PiB7XG4gICAgICBlYWNoKHdpbmRvdy5BU1NFVFMsIGltYWdlID0+IHtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5jYW52YXMuZ2wsIHtcbiAgICAgICAgICBnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbWVkaWEgPSBuZXcgSW1hZ2UoKVxuXG4gICAgICAgIG1lZGlhLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIlxuICAgICAgICBtZWRpYS5zcmMgPSBpbWFnZVxuICAgICAgICBtZWRpYS5vbmxvYWQgPSBfID0+IHtcbiAgICAgICAgICB0aGlzLnRleHR1cmUuaW1hZ2UgPSBtZWRpYVxuXG4gICAgICAgICAgdGhpcy5vbkFzc2V0TG9hZGVkKClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5URVhUVVJFU1tpbWFnZV0gPSB0aGlzLnRleHR1cmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoKSB7XG4gICAgdGhpcy5jb3VudGVyICs9IDFcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmNvdW50ZXIgLyB3aW5kb3cuQVNTRVRTLmxlbmd0aFxuXG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWBcblxuICAgIGlmIChwZXJjZW50ID09PSAxKSB7XG4gICAgICB0aGlzLm9uQ29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0ZU91dCA9IGdzYXAudGltZWxpbmUoe1xuICAgIC8vICAgICBkZWxheTogMVxuICAgIC8vICAgfSlcblxuICAgIC8vICAgZWFjaCh0aGlzLmVsZW1lbnRzLnNwYW5zLCAobGluZSwgaW5kZXgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgbGV0dGVycyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcblxuICAgIC8vICAgICBjb25zdCBvblN0YXJ0ID0gXyA9PiB7XG4gICAgLy8gICAgICAgZ3NhcC50byhsZXR0ZXJzLCB7XG4gICAgLy8gICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgLy8gICAgICAgICBkZWxheTogMC4yLFxuICAgIC8vICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAvLyAgICAgICAgIHdoaXRlU3BhY2U6IFwicHJlLWxpbmVcIixcbiAgICAvLyAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgIC8vICAgICAgICAgZWFzZTogXCJiYWNrLmluT3V0XCIsXG4gICAgLy8gICAgICAgICBzdGFnZ2VyOiAwLjAxNSxcbiAgICAvLyAgICAgICAgIHk6IFwiLTEwMCVcIlxuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLmFuaW1hdGVPdXQudG8oXG4gICAgLy8gICAgICAgbGluZSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgLy8gICAgICAgICBkZWxheTogMC4yICogaW5kZXgsXG4gICAgLy8gICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgIC8vICAgICAgICAgb25TdGFydCxcbiAgICAvLyAgICAgICAgIGVhc2U6IFwiZXhwby5pbk91dFwiLFxuICAgIC8vICAgICAgICAgeTogXCItMTAwJVwiXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICBcInN0YXJ0XCJcbiAgICAvLyAgICAgKVxuICAgIC8vICAgfSlcblxuICAgIC8vICAgdGhpcy5hbmltYXRlT3V0LnRvKFxuICAgIC8vICAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQsXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgLy8gICAgICAgZHVyYXRpb246IDEsXG4gICAgLy8gICAgICAgZWFzZTogU01PT1RIXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIFwic3RhcnRcIlxuICAgIC8vICAgKVxuXG4gICAgLy8gICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgLy8gICAgIGF1dG9BbHBoYTogMCxcbiAgICAvLyAgICAgZHVyYXRpb246IDFcbiAgICAvLyAgIH0pXG5cbiAgICAvLyAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKCgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVkXCIpXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG5cbiAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICBkdXJhdGlvbjogMVxuICAgIH0pXG5cbiAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbCgoKSA9PiB7XG4gICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZWRcIilcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQyNjZhMmEyMTU1NzYxYmZhYmUzXCIpIl0sIm5hbWVzIjpbImdzYXAiLCJUZXh0dXJlIiwiUHJlZml4IiwiQ29tcG9uZW50Iiwic3BsaXQiLCJlYWNoIiwiU01PT1RIIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjbGFzc2VzIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiY291bnRlciIsInRyYW5zZm9ybVByZWZpeCIsIndpbmRvdyIsIlRFWFRVUkVTIiwic3BhbnMiLCJhcHBlbmQiLCJleHByZXNzaW9uIiwib25Db21wbGV0ZSIsImNyZWF0ZUxvYWRlciIsImFuaW1hdGVJbiIsInRpbWVsaW5lIiwic2V0IiwiYXV0b0FscGhhIiwibGluZSIsImluZGV4IiwibGV0dGVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9uU3RhcnQiLCJfIiwiZnJvbVRvIiwiZGlzcGxheSIsIndoaXRlU3BhY2UiLCJ5IiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwiY2FsbCIsIkFTU0VUUyIsImltYWdlIiwidGV4dHVyZSIsImdsIiwiZ2VuZXJhdGVNaXBtYXBzIiwibWVkaWEiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwib25sb2FkIiwib25Bc3NldExvYWRlZCIsInBlcmNlbnQiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJhbmltYXRlT3V0IiwidG8iLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=