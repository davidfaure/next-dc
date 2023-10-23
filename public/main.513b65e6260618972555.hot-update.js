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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./app/components/Canvas/Home/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    url
  }) {
    this.url = url;
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_1__.Renderer({
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
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_2__.Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 5;
  }
  createScene() {
    this.scene = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
  }
  createHome() {
    this.home = new _Home__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
  update(application) {
    if (!application) return;
    if (this.home) {
      this.home.update();
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
/******/ 	__webpack_require__.h = () => ("ed5ce36a2c073c3b7cf7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixNQUFNLENBQUM7SUFDN0I7RUFDRjs7RUFFQTtBQUNGO0FBQ0E7RUFDRWMsTUFBTUEsQ0FBQ0MsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsV0FBVyxFQUFFO0lBRWxCLElBQUksSUFBSSxDQUFDN0IsSUFBSSxFQUFFO01BQ2IsSUFBSSxDQUFDQSxJQUFJLENBQUM0QixNQUFNLENBQUMsQ0FBQztJQUNwQjtJQUVBLElBQUksQ0FBQ3BELFFBQVEsQ0FBQ3NELE1BQU0sQ0FBQztNQUNuQmhDLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJKLE1BQU0sRUFBRSxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUMvSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FtZXJhLCBQbGFuZSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyB1cmwgfSkge1xuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcbiAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgZHByOiBNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMilcbiAgICB9KVxuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcbiAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMClcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyaWVzKClcblxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLmZvdiA9IDQ1XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIGNyZWF0ZUhvbWUoKSB7XG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoeyBnbDogdGhpcy5nbCwgc2NlbmU6IHRoaXMuc2NlbmUsIHNpemVzOiB0aGlzLnZpZXdwb3J0IH0pXG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlLlxuICAgKi9cbiAgb25DaGFuZ2UodXJsKSB7fVxuXG4gIC8qKlxuICAgKiBSZXNpemUuXG4gICAqL1xuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnNjcmVlbiA9IHtcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMuc2NyZWVuLndpZHRoLCB0aGlzLnNjcmVlbi5oZWlnaHQpXG5cbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG4gICAgICBhc3BlY3Q6IHRoaXMuZ2wuY2FudmFzLndpZHRoIC8gdGhpcy5nbC5jYW52YXMuaGVpZ2h0XG4gICAgfSlcblxuICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuICAgIGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcbiAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG4gICAgdGhpcy52aWV3cG9ydCA9IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlbixcbiAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgdGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueC5zdGFydCxcbiAgICAgIHk6IHRoaXMueS5zdGFydFxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgIGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG5cbiAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID0geFxuICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlLlxuICAgKi9cbiAgdXBkYXRlKGFwcGxpY2F0aW9uKSB7XG4gICAgaWYgKCFhcHBsaWNhdGlvbikgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUudXBkYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZDVjZTM2YTJjMDczYzNiN2NmN1wiKSJdLCJuYW1lcyI6WyJCb3giLCJDYW1lcmEiLCJQbGFuZSIsIlJlbmRlcmVyIiwiVHJhbnNmb3JtIiwiSG9tZSIsImNvbnN0cnVjdG9yIiwidXJsIiwicmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImRwciIsIk1hdGgiLCJtaW4iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ2wiLCJjbGVhckNvbG9yIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUdlb21ldHJpZXMiLCJvblJlc2l6ZSIsImNhbWVyYSIsImZvdiIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiY3JlYXRlSG9tZSIsImhvbWUiLCJzaXplcyIsInZpZXdwb3J0Iiwib25DaGFuZ2UiLCJzY3JlZW4iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNldFNpemUiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIlBJIiwidGFuIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsIngiLCJzdGFydCIsInRvdWNoZXMiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsImVuZCIsIm9uVG91Y2hVcCIsImNoYW5nZWRUb3VjaGVzIiwidXBkYXRlIiwiYXBwbGljYXRpb24iLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9