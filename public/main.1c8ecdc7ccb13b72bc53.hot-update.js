"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/index.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./app/components/Canvas/Home/index.js");
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cursor */ "./app/components/Canvas/Cursor/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    url
  }) {
    this.url = url;
    this.x = {
      start: 0,
      distance: 0,
      end: 0
    };
    this.y = {
      start: 0,
      distance: 0,
      end: 0
    };
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_2__.Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    document.body.appendChild(this.gl.canvas);
    this.createCamera();
    this.createScene();
    this.createCursor();
    this.onResize();
  }
  createCamera() {
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_3__.Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 5;
  }
  createScene() {
    this.scene = new ogl__WEBPACK_IMPORTED_MODULE_4__.Transform();
  }
  createCursor() {
    this.webglCursor = new _Cursor__WEBPACK_IMPORTED_MODULE_1__["default"]({
      gl: this.gl,
      scene: this.scene,
      sizes: this.viewport,
      renderer: this.renderer,
      camera: this.camera
    });
  }
  createHome() {
    this.home = new _Home__WEBPACK_IMPORTED_MODULE_0__["default"]({
      gl: this.gl,
      scene: this.scene,
      sizes: this.viewport,
      renderer: this.renderer,
      camera: this.camera
    });
  }
  destroyHome() {
    if (!this.home) return;
    this.home.destroy();
    this.home = null;
  }
  onPreloaded() {
    this.onChangeEnd(this.url);
  }
  onChangeEnd(url) {
    console.log(url, "url");
    if (url === "home") {
      this.createHome();
    } else {
      this.destroyHome();
    }
    this.url = url;
  }

  /**
   * Change.
   */
  onChange(url) {}

  /**
   * Resize.
   */
  onResize() {
    this.screen = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height
    });
    const fov = this.camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = {
      height,
      width
    };
    const values = {
      screen: this.screen,
      viewport: this.viewport
    };
    if (this.home) {
      this.home.onResize({
        sizes: this.viewport
      });
    }
    if (this.webglCursor) {
      this.webglCursor.onResize({
        sizes: this.viewport
      });
    }
  }
  onTouchDown(event) {
    this.isDown = true;
    this.x.start = event.touches ? event.touches[0].clientX : event.clientX;
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY;
    const values = {
      x: this.x.start,
      y: this.y.start
    };
    if (this.home) {
      this.home.onTouchDown(values);
    }
  }
  onTouchMove(event) {
    if (!this.isDown) return;
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    this.x.end = x;
    this.y.end = y;
    const values = {
      x: this.x,
      y: this.y
    };
    if (this.home) {
      this.home.onTouchMove(values);
    }
    if (this.webglCursor) {
      this.webglCursor.onTouchMove(values);
    }
  }
  onTouchUp(event) {
    this.isDown = false;
    const x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
    const y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    this.x.end = x;
    this.y.end = y;
    const values = {
      x: this.x,
      y: this.y
    };
    if (this.home) {
      this.home.onTouchUp(values);
    }
  }

  /**
   * Update.
   */
  update(application, scroll) {
    if (!application) return;
    if (this.home) {
      this.home.update(scroll);
    }
    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    });
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("86b5c325f03280733602")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYzhlY2RjN2NjYjEzYjcyYmM1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUM1QztBQUNJO0FBRTdCLGlFQUFlLE1BQU07RUFDbkJRLFdBQVdBLENBQUM7SUFBRUM7RUFBSSxDQUFDLEVBQUU7SUFDbkIsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFFZCxJQUFJLENBQUNDLENBQUMsR0FBRztNQUNQQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxRQUFRLEVBQUUsQ0FBQztNQUNYQyxHQUFHLEVBQUU7SUFDUCxDQUFDO0lBRUQsSUFBSSxDQUFDQyxDQUFDLEdBQUc7TUFDUEgsS0FBSyxFQUFFLENBQUM7TUFDUkMsUUFBUSxFQUFFLENBQUM7TUFDWEMsR0FBRyxFQUFFO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUliLHlDQUFRLENBQUM7TUFDM0JjLEtBQUssRUFBRSxJQUFJO01BQ1hDLFNBQVMsRUFBRSxJQUFJO01BQ2ZDLEdBQUcsRUFBRUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLEVBQUUsR0FBRyxJQUFJLENBQUNSLFFBQVEsQ0FBQ1EsRUFBRTtJQUMxQixJQUFJLENBQUNBLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU5QkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNKLEVBQUUsQ0FBQ0ssTUFBTSxDQUFDO0lBRXpDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBRW5CLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7RUFDakI7RUFFQUgsWUFBWUEsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDSSxNQUFNLEdBQUcsSUFBSWhDLHVDQUFNLENBQUMsSUFBSSxDQUFDc0IsRUFBRSxDQUFDO0lBQ2pDLElBQUksQ0FBQ1UsTUFBTSxDQUFDQyxHQUFHLEdBQUcsRUFBRTtJQUNwQixJQUFJLENBQUNELE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztFQUM1QjtFQUVBTixXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNPLEtBQUssR0FBRyxJQUFJbEMsMENBQVMsQ0FBQyxDQUFDO0VBQzlCO0VBRUE0QixZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNPLFdBQVcsR0FBRyxJQUFJL0IsK0NBQU0sQ0FBQztNQUM1QmdCLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7TUFDWGMsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztNQUNqQkUsS0FBSyxFQUFFLElBQUksQ0FBQ0MsUUFBUTtNQUNwQnpCLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7TUFDdkJrQixNQUFNLEVBQUUsSUFBSSxDQUFDQTtJQUNmLENBQUMsQ0FBQztFQUNKO0VBRUFRLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlwQyw2Q0FBSSxDQUFDO01BQ25CaUIsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtNQUNYYyxLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO01BQ2pCRSxLQUFLLEVBQUUsSUFBSSxDQUFDQyxRQUFRO01BQ3BCekIsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtNQUN2QmtCLE1BQU0sRUFBRSxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0VBQ0o7RUFFQVUsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQ0QsSUFBSSxFQUFFO0lBQ2hCLElBQUksQ0FBQ0EsSUFBSSxDQUFDRSxPQUFPLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNGLElBQUksR0FBRyxJQUFJO0VBQ2xCO0VBRUFHLFdBQVdBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3JDLEdBQUcsQ0FBQztFQUM1QjtFQUVBcUMsV0FBV0EsQ0FBQ3JDLEdBQUcsRUFBRTtJQUNmc0MsT0FBTyxDQUFDQyxHQUFHLENBQUN2QyxHQUFHLEVBQUUsS0FBSyxDQUFDO0lBQ3ZCLElBQUlBLEdBQUcsS0FBSyxNQUFNLEVBQUU7TUFDbEIsSUFBSSxDQUFDZ0MsVUFBVSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDRSxXQUFXLENBQUMsQ0FBQztJQUNwQjtJQUVBLElBQUksQ0FBQ2xDLEdBQUcsR0FBR0EsR0FBRztFQUNoQjs7RUFFQTtBQUNGO0FBQ0E7RUFDRXdDLFFBQVFBLENBQUN4QyxHQUFHLEVBQUUsQ0FBQzs7RUFFZjtBQUNGO0FBQ0E7RUFDRXVCLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ2tCLE1BQU0sR0FBRztNQUNaQyxNQUFNLEVBQUU5QixNQUFNLENBQUMrQixXQUFXO01BQzFCQyxLQUFLLEVBQUVoQyxNQUFNLENBQUNpQztJQUNoQixDQUFDO0lBRUQsSUFBSSxDQUFDdkMsUUFBUSxDQUFDd0MsT0FBTyxDQUFDLElBQUksQ0FBQ0wsTUFBTSxDQUFDRyxLQUFLLEVBQUUsSUFBSSxDQUFDSCxNQUFNLENBQUNDLE1BQU0sQ0FBQztJQUU1RCxJQUFJLENBQUNsQixNQUFNLENBQUN1QixXQUFXLENBQUM7TUFDdEJDLE1BQU0sRUFBRSxJQUFJLENBQUNsQyxFQUFFLENBQUNLLE1BQU0sQ0FBQ3lCLEtBQUssR0FBRyxJQUFJLENBQUM5QixFQUFFLENBQUNLLE1BQU0sQ0FBQ3VCO0lBQ2hELENBQUMsQ0FBQztJQUVGLE1BQU1qQixHQUFHLEdBQUcsSUFBSSxDQUFDRCxNQUFNLENBQUNDLEdBQUcsSUFBSWYsSUFBSSxDQUFDdUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUM3QyxNQUFNUCxNQUFNLEdBQUcsQ0FBQyxHQUFHaEMsSUFBSSxDQUFDd0MsR0FBRyxDQUFDekIsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsTUFBTSxDQUFDRSxRQUFRLENBQUNDLENBQUM7SUFDN0QsTUFBTWlCLEtBQUssR0FBR0YsTUFBTSxHQUFHLElBQUksQ0FBQ2xCLE1BQU0sQ0FBQ3dCLE1BQU07SUFFekMsSUFBSSxDQUFDakIsUUFBUSxHQUFHO01BQ2RXLE1BQU07TUFDTkU7SUFDRixDQUFDO0lBRUQsTUFBTU8sTUFBTSxHQUFHO01BQ2JWLE1BQU0sRUFBRSxJQUFJLENBQUNBLE1BQU07TUFDbkJWLFFBQVEsRUFBRSxJQUFJLENBQUNBO0lBQ2pCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQ0UsSUFBSSxFQUFFO01BQ2IsSUFBSSxDQUFDQSxJQUFJLENBQUNWLFFBQVEsQ0FBQztRQUNqQk8sS0FBSyxFQUFFLElBQUksQ0FBQ0M7TUFDZCxDQUFDLENBQUM7SUFDSjtJQUVBLElBQUksSUFBSSxDQUFDRixXQUFXLEVBQUU7TUFDcEIsSUFBSSxDQUFDQSxXQUFXLENBQUNOLFFBQVEsQ0FBQztRQUN4Qk8sS0FBSyxFQUFFLElBQUksQ0FBQ0M7TUFDZCxDQUFDLENBQUM7SUFDSjtFQUNGO0VBRUFxQixXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDakIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUVsQixJQUFJLENBQUNyRCxDQUFDLENBQUNDLEtBQUssR0FBR21ELEtBQUssQ0FBQ0UsT0FBTyxHQUFHRixLQUFLLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU87SUFDdkUsSUFBSSxDQUFDbkQsQ0FBQyxDQUFDSCxLQUFLLEdBQUdtRCxLQUFLLENBQUNFLE9BQU8sR0FBR0YsS0FBSyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFLE9BQU8sR0FBR0osS0FBSyxDQUFDSSxPQUFPO0lBRXZFLE1BQU1OLE1BQU0sR0FBRztNQUNibEQsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxLQUFLO01BQ2ZHLENBQUMsRUFBRSxJQUFJLENBQUNBLENBQUMsQ0FBQ0g7SUFDWixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMrQixJQUFJLEVBQUU7TUFDYixJQUFJLENBQUNBLElBQUksQ0FBQ21CLFdBQVcsQ0FBQ0QsTUFBTSxDQUFDO0lBQy9CO0VBQ0Y7RUFFQU8sV0FBV0EsQ0FBQ0wsS0FBSyxFQUFFO0lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUNDLE1BQU0sRUFBRTtJQUVsQixNQUFNckQsQ0FBQyxHQUFHb0QsS0FBSyxDQUFDRSxPQUFPLEdBQUdGLEtBQUssQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0csT0FBTztJQUNsRSxNQUFNbkQsQ0FBQyxHQUFHZ0QsS0FBSyxDQUFDRSxPQUFPLEdBQUdGLEtBQUssQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ksT0FBTztJQUVsRSxJQUFJLENBQUN4RCxDQUFDLENBQUNHLEdBQUcsR0FBR0gsQ0FBQztJQUNkLElBQUksQ0FBQ0ksQ0FBQyxDQUFDRCxHQUFHLEdBQUdDLENBQUM7SUFFZCxNQUFNOEMsTUFBTSxHQUFHO01BQ2JsRCxDQUFDLEVBQUUsSUFBSSxDQUFDQSxDQUFDO01BQ1RJLENBQUMsRUFBRSxJQUFJLENBQUNBO0lBQ1YsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDNEIsSUFBSSxFQUFFO01BQ2IsSUFBSSxDQUFDQSxJQUFJLENBQUN5QixXQUFXLENBQUNQLE1BQU0sQ0FBQztJQUMvQjtJQUVBLElBQUksSUFBSSxDQUFDdEIsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxDQUFDNkIsV0FBVyxDQUFDUCxNQUFNLENBQUM7SUFDdEM7RUFDRjtFQUVBUSxTQUFTQSxDQUFDTixLQUFLLEVBQUU7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxLQUFLO0lBRW5CLE1BQU1yRCxDQUFDLEdBQUdvRCxLQUFLLENBQUNPLGNBQWMsR0FBR1AsS0FBSyxDQUFDTyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUNKLE9BQU8sR0FBR0gsS0FBSyxDQUFDRyxPQUFPO0lBQ2hGLE1BQU1uRCxDQUFDLEdBQUdnRCxLQUFLLENBQUNPLGNBQWMsR0FBR1AsS0FBSyxDQUFDTyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUNILE9BQU8sR0FBR0osS0FBSyxDQUFDSSxPQUFPO0lBRWhGLElBQUksQ0FBQ3hELENBQUMsQ0FBQ0csR0FBRyxHQUFHSCxDQUFDO0lBQ2QsSUFBSSxDQUFDSSxDQUFDLENBQUNELEdBQUcsR0FBR0MsQ0FBQztJQUVkLE1BQU04QyxNQUFNLEdBQUc7TUFDYmxELENBQUMsRUFBRSxJQUFJLENBQUNBLENBQUM7TUFDVEksQ0FBQyxFQUFFLElBQUksQ0FBQ0E7SUFDVixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUM0QixJQUFJLEVBQUU7TUFDYixJQUFJLENBQUNBLElBQUksQ0FBQzBCLFNBQVMsQ0FBQ1IsTUFBTSxDQUFDO0lBQzdCO0VBQ0Y7O0VBRUE7QUFDRjtBQUNBO0VBQ0VVLE1BQU1BLENBQUNDLFdBQVcsRUFBRUMsTUFBTSxFQUFFO0lBQzFCLElBQUksQ0FBQ0QsV0FBVyxFQUFFO0lBRWxCLElBQUksSUFBSSxDQUFDN0IsSUFBSSxFQUFFO01BQ2IsSUFBSSxDQUFDQSxJQUFJLENBQUM0QixNQUFNLENBQUNFLE1BQU0sQ0FBQztJQUMxQjtJQUVBLElBQUksQ0FBQ3pELFFBQVEsQ0FBQzBELE1BQU0sQ0FBQztNQUNuQnBDLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJKLE1BQU0sRUFBRSxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUNqTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCJcbmltcG9ydCBDdXJzb3IgZnJvbSBcIi4vQ3Vyc29yXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IHVybCB9KSB7XG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnkgPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgIGRwcjogTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIpXG4gICAgfSlcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG4gICAgdGhpcy5nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIHRoaXMuY3JlYXRlQ3Vyc29yKClcblxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLmZvdiA9IDQ1XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIGNyZWF0ZUN1cnNvcigpIHtcbiAgICB0aGlzLndlYmdsQ3Vyc29yID0gbmV3IEN1cnNvcih7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgc2l6ZXM6IHRoaXMudmlld3BvcnQsXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlSG9tZSgpIHtcbiAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgc2l6ZXM6IHRoaXMudmlld3BvcnQsXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveUhvbWUoKSB7XG4gICAgaWYgKCF0aGlzLmhvbWUpIHJldHVyblxuICAgIHRoaXMuaG9tZS5kZXN0cm95KClcbiAgICB0aGlzLmhvbWUgPSBudWxsXG4gIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudXJsKVxuICB9XG5cbiAgb25DaGFuZ2VFbmQodXJsKSB7XG4gICAgY29uc29sZS5sb2codXJsLCBcInVybFwiKVxuICAgIGlmICh1cmwgPT09IFwiaG9tZVwiKSB7XG4gICAgICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3Ryb3lIb21lKClcbiAgICB9XG5cbiAgICB0aGlzLnVybCA9IHVybFxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZS5cbiAgICovXG4gIG9uQ2hhbmdlKHVybCkge31cblxuICAvKipcbiAgICogUmVzaXplLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zY3JlZW4gPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnNjcmVlbi53aWR0aCwgdGhpcy5zY3JlZW4uaGVpZ2h0KVxuXG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuICAgICAgYXNwZWN0OiB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2wuY2FudmFzLmhlaWdodFxuICAgIH0pXG5cbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuICAgIHRoaXMudmlld3BvcnQgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblJlc2l6ZSh7XG4gICAgICAgIHNpemVzOiB0aGlzLnZpZXdwb3J0XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLndlYmdsQ3Vyc29yKSB7XG4gICAgICB0aGlzLndlYmdsQ3Vyc29yLm9uUmVzaXplKHtcbiAgICAgICAgc2l6ZXM6IHRoaXMudmlld3BvcnRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgdGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueC5zdGFydCxcbiAgICAgIHk6IHRoaXMueS5zdGFydFxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgIGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy53ZWJnbEN1cnNvcikge1xuICAgICAgdGhpcy53ZWJnbEN1cnNvci5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuXG4gICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZS5cbiAgICovXG4gIHVwZGF0ZShhcHBsaWNhdGlvbiwgc2Nyb2xsKSB7XG4gICAgaWYgKCFhcHBsaWNhdGlvbikgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUudXBkYXRlKHNjcm9sbClcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NmI1YzMyNWYwMzI4MDczMzYwMlwiKSJdLCJuYW1lcyI6WyJCb3giLCJDYW1lcmEiLCJSZW5kZXJlciIsIlRyYW5zZm9ybSIsIlByb2dyYW0iLCJNZXNoIiwiSG9tZSIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwidXJsIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwicmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImRwciIsIk1hdGgiLCJtaW4iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ2wiLCJjbGVhckNvbG9yIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUN1cnNvciIsIm9uUmVzaXplIiwiY2FtZXJhIiwiZm92IiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJ3ZWJnbEN1cnNvciIsInNpemVzIiwidmlld3BvcnQiLCJjcmVhdGVIb21lIiwiaG9tZSIsImRlc3Ryb3lIb21lIiwiZGVzdHJveSIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJzY3JlZW4iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNldFNpemUiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIlBJIiwidGFuIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiY2hhbmdlZFRvdWNoZXMiLCJ1cGRhdGUiLCJhcHBsaWNhdGlvbiIsInNjcm9sbCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=