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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    url
  }) {
    this.url = url;
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_0__.Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2)
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    document.body.appendChild(this.gl.canvas);
    this.createCamera();
    this.createScene();
    this.createGeometries();
    this.onResize();
  }
  createCamera() {
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_1__.Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 5;
  }
  createScene() {
    this.scene = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
  }
  createHome() {
    this.home = new Home({
      gl: this.gl,
      scene: this.scene,
      sizes: this.viewport
    });
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
  }
  onTouchDown(event) {}
  onTouchMove(event) {}
  onTouchUp(event) {}

  /**
   * Update.
   */
  update(application) {
    if (!application) return;
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
/******/ 	__webpack_require__.h = () => ("52a8e305c76f3ca33ccd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNWEyMjQyNmQ0ODZmZTE1NDlhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7QUFFN0QsaUVBQWUsTUFBTTtFQUNuQkssV0FBV0EsQ0FBQztJQUFFQztFQUFJLENBQUMsRUFBRTtJQUNuQixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUVkLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlKLHlDQUFRLENBQUM7TUFDM0JLLEtBQUssRUFBRSxJQUFJO01BQ1hDLFNBQVMsRUFBRSxJQUFJO01BQ2ZDLEdBQUcsRUFBRUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLEVBQUUsR0FBRyxJQUFJLENBQUNSLFFBQVEsQ0FBQ1EsRUFBRTtJQUMxQixJQUFJLENBQUNBLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU5QkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNKLEVBQUUsQ0FBQ0ssTUFBTSxDQUFDO0lBRXpDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7SUFFdkIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUNqQjtFQUVBSCxZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNJLE1BQU0sR0FBRyxJQUFJeEIsdUNBQU0sQ0FBQyxJQUFJLENBQUNjLEVBQUUsQ0FBQztJQUNqQyxJQUFJLENBQUNVLE1BQU0sQ0FBQ0MsR0FBRyxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDRCxNQUFNLENBQUNFLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7RUFDNUI7RUFFQU4sV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDTyxLQUFLLEdBQUcsSUFBSXpCLDBDQUFTLENBQUMsQ0FBQztFQUM5QjtFQUVBMEIsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDO01BQUVqQixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO01BQUVjLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFBRUksS0FBSyxFQUFFLElBQUksQ0FBQ0M7SUFBUyxDQUFDLENBQUM7RUFDaEY7O0VBRUE7QUFDRjtBQUNBO0VBQ0VDLFFBQVFBLENBQUM3QixHQUFHLEVBQUUsQ0FBQzs7RUFFZjtBQUNGO0FBQ0E7RUFDRWtCLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ1ksTUFBTSxHQUFHO01BQ1pDLE1BQU0sRUFBRXhCLE1BQU0sQ0FBQ3lCLFdBQVc7TUFDMUJDLEtBQUssRUFBRTFCLE1BQU0sQ0FBQzJCO0lBQ2hCLENBQUM7SUFFRCxJQUFJLENBQUNqQyxRQUFRLENBQUNrQyxPQUFPLENBQUMsSUFBSSxDQUFDTCxNQUFNLENBQUNHLEtBQUssRUFBRSxJQUFJLENBQUNILE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO0lBRTVELElBQUksQ0FBQ1osTUFBTSxDQUFDaUIsV0FBVyxDQUFDO01BQ3RCQyxNQUFNLEVBQUUsSUFBSSxDQUFDNUIsRUFBRSxDQUFDSyxNQUFNLENBQUNtQixLQUFLLEdBQUcsSUFBSSxDQUFDeEIsRUFBRSxDQUFDSyxNQUFNLENBQUNpQjtJQUNoRCxDQUFDLENBQUM7SUFFRixNQUFNWCxHQUFHLEdBQUcsSUFBSSxDQUFDRCxNQUFNLENBQUNDLEdBQUcsSUFBSWYsSUFBSSxDQUFDaUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUM3QyxNQUFNUCxNQUFNLEdBQUcsQ0FBQyxHQUFHMUIsSUFBSSxDQUFDa0MsR0FBRyxDQUFDbkIsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsTUFBTSxDQUFDRSxRQUFRLENBQUNDLENBQUM7SUFDN0QsTUFBTVcsS0FBSyxHQUFHRixNQUFNLEdBQUcsSUFBSSxDQUFDWixNQUFNLENBQUNrQixNQUFNO0lBRXpDLElBQUksQ0FBQ1QsUUFBUSxHQUFHO01BQ2RHLE1BQU07TUFDTkU7SUFDRixDQUFDO0lBRUQsTUFBTU8sTUFBTSxHQUFHO01BQ2JWLE1BQU0sRUFBRSxJQUFJLENBQUNBLE1BQU07TUFDbkJGLFFBQVEsRUFBRSxJQUFJLENBQUNBO0lBQ2pCLENBQUM7RUFDSDtFQUVBYSxXQUFXQSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztFQUVwQkMsV0FBV0EsQ0FBQ0QsS0FBSyxFQUFFLENBQUM7RUFFcEJFLFNBQVNBLENBQUNGLEtBQUssRUFBRSxDQUFDOztFQUVsQjtBQUNGO0FBQ0E7RUFDRUcsTUFBTUEsQ0FBQ0MsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsV0FBVyxFQUFFO0lBRWxCLElBQUksQ0FBQzdDLFFBQVEsQ0FBQzhDLE1BQU0sQ0FBQztNQUNuQnhCLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJKLE1BQU0sRUFBRSxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUMxRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FtZXJhLCBQbGFuZSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgdXJsIH0pIHtcbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgIGRwcjogTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIpXG4gICAgfSlcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG4gICAgdGhpcy5nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cmllcygpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICB0aGlzLmNhbWVyYS5mb3YgPSA0NVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICBjcmVhdGVIb21lKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHsgZ2w6IHRoaXMuZ2wsIHNjZW5lOiB0aGlzLnNjZW5lLCBzaXplczogdGhpcy52aWV3cG9ydCB9KVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZS5cbiAgICovXG4gIG9uQ2hhbmdlKHVybCkge31cblxuICAvKipcbiAgICogUmVzaXplLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zY3JlZW4gPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnNjcmVlbi53aWR0aCwgdGhpcy5zY3JlZW4uaGVpZ2h0KVxuXG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuICAgICAgYXNwZWN0OiB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2wuY2FudmFzLmhlaWdodFxuICAgIH0pXG5cbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuICAgIHRoaXMudmlld3BvcnQgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7fVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7fVxuXG4gIG9uVG91Y2hVcChldmVudCkge31cblxuICAvKipcbiAgICogVXBkYXRlLlxuICAgKi9cbiAgdXBkYXRlKGFwcGxpY2F0aW9uKSB7XG4gICAgaWYgKCFhcHBsaWNhdGlvbikgcmV0dXJuXG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MmE4ZTMwNWM3NmYzY2EzM2NjZFwiKSJdLCJuYW1lcyI6WyJCb3giLCJDYW1lcmEiLCJQbGFuZSIsIlJlbmRlcmVyIiwiVHJhbnNmb3JtIiwiY29uc3RydWN0b3IiLCJ1cmwiLCJyZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZHByIiwiTWF0aCIsIm1pbiIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJnbCIsImNsZWFyQ29sb3IiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlR2VvbWV0cmllcyIsIm9uUmVzaXplIiwiY2FtZXJhIiwiZm92IiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJjcmVhdGVIb21lIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsInZpZXdwb3J0Iiwib25DaGFuZ2UiLCJzY3JlZW4iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNldFNpemUiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIlBJIiwidGFuIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiYXBwbGljYXRpb24iLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9