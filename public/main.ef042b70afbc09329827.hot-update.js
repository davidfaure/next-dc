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
/******/ 	__webpack_require__.h = () => ("ceadb67c3352047c9b25")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJLENBQUN2RCxRQUFRLENBQUN3RCxNQUFNLENBQUM7TUFDbkJuQyxLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO01BQ2pCSixNQUFNLEVBQUUsSUFBSSxDQUFDQTtJQUNmLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDckxBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyB1cmwgfSkge1xuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLnggPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuXG4gICAgdGhpcy55ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICBkcHI6IE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAyKVxuICAgIH0pXG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcblxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLmZvdiA9IDQ1XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIGNyZWF0ZUhvbWUoKSB7XG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHNpemVzOiB0aGlzLnZpZXdwb3J0LFxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3lIb21lKCkge1xuICAgIGlmICghdGhpcy5ob21lKSByZXR1cm5cbiAgICB0aGlzLmhvbWUuZGVzdHJveSgpXG4gICAgdGhpcy5ob21lID0gbnVsbFxuICB9XG5cbiAgb25QcmVsb2FkZWQoKSB7XG4gICAgdGhpcy5vbkNoYW5nZUVuZCh0aGlzLnVybClcbiAgfVxuXG4gIG9uQ2hhbmdlRW5kKHVybCkge1xuICAgIGNvbnNvbGUubG9nKHVybCwgXCJ1cmxcIilcbiAgICBpZiAodXJsID09PSBcImhvbWVcIikge1xuICAgICAgdGhpcy5jcmVhdGVIb21lKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXN0cm95SG9tZSgpXG4gICAgfVxuXG4gICAgdGhpcy51cmwgPSB1cmxcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UuXG4gICAqL1xuICBvbkNoYW5nZSh1cmwpIHt9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZS5cbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuc2NyZWVuID0ge1xuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5zY3JlZW4ud2lkdGgsIHRoaXMuc2NyZWVuLmhlaWdodClcblxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcbiAgICAgIGFzcGVjdDogdGhpcy5nbC5jYW52YXMud2lkdGggLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHRcbiAgICB9KVxuXG4gICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG4gICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cbiAgICB0aGlzLnZpZXdwb3J0ID0ge1xuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGhcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLFxuICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICB9XG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgdGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICB0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LnN0YXJ0LFxuICAgICAgeTogdGhpcy55LnN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID0geFxuICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcblxuICAgIGNvbnN0IHggPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPSB4XG4gICAgdGhpcy55LmVuZCA9IHlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUuXG4gICAqL1xuICB1cGRhdGUoYXBwbGljYXRpb24sIHNjcm9sbCkge1xuICAgIGlmICghYXBwbGljYXRpb24pIHJldHVyblxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLnVwZGF0ZShzY3JvbGwpXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2VhZGI2N2MzMzUyMDQ3YzliMjVcIikiXSwibmFtZXMiOlsiQm94IiwiQ2FtZXJhIiwiUmVuZGVyZXIiLCJUcmFuc2Zvcm0iLCJQcm9ncmFtIiwiTWVzaCIsIkhvbWUiLCJjb25zdHJ1Y3RvciIsInVybCIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsInJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkcHIiLCJNYXRoIiwibWluIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImdsIiwiY2xlYXJDb2xvciIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsImNhbWVyYSIsImZvdiIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiY3JlYXRlSG9tZSIsImhvbWUiLCJzaXplcyIsInZpZXdwb3J0IiwiZGVzdHJveUhvbWUiLCJkZXN0cm95Iiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsInNjcmVlbiIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2V0U2l6ZSIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiUEkiLCJ0YW4iLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsInVwZGF0ZSIsImFwcGxpY2F0aW9uIiwic2Nyb2xsIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==