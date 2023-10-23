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
/******/ 	__webpack_require__.h = () => ("59549a5c4798a75e85a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMzk3NThiZjdmNzFhOWUyYWY1NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ3BDO0FBRXpCLGlFQUFlLE1BQU07RUFDbkJNLFdBQVdBLENBQUM7SUFBRUM7RUFBSSxDQUFDLEVBQUU7SUFDbkIsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFFZCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJTCx5Q0FBUSxDQUFDO01BQzNCTSxLQUFLLEVBQUUsSUFBSTtNQUNYQyxTQUFTLEVBQUUsSUFBSTtNQUNmQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNDLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQyxFQUFFLEdBQUcsSUFBSSxDQUFDUixRQUFRLENBQUNRLEVBQUU7SUFDMUIsSUFBSSxDQUFDQSxFQUFFLENBQUNDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFOUJDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDSixFQUFFLENBQUNLLE1BQU0sQ0FBQztJQUV6QyxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUNqQjtFQUVBRixZQUFZQSxDQUFBLEVBQUc7SUFDYixJQUFJLENBQUNHLE1BQU0sR0FBRyxJQUFJeEIsdUNBQU0sQ0FBQyxJQUFJLENBQUNlLEVBQUUsQ0FBQztJQUNqQyxJQUFJLENBQUNTLE1BQU0sQ0FBQ0MsR0FBRyxHQUFHLEVBQUU7SUFDcEIsSUFBSSxDQUFDRCxNQUFNLENBQUNFLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7RUFDNUI7RUFFQUwsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDTSxLQUFLLEdB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LEdBQUdYLEtBQUssQ0FBQ1csY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDTixPQUFPLEdBQUdMLEtBQUssQ0FBQ0ssT0FBTztJQUNoRixNQUFNQyxDQUFDLEdBQUdOLEtBQUssQ0FBQ1csY0FBYyxHQUFHWCxLQUFLLENBQUNXLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osT0FBTyxHQUFHUCxLQUFLLENBQUNPLE9BQU87SUFFaEYsSUFBSSxDQUFDTCxDQUFDLENBQUNPLEdBQUcsR0FBR1AsQ0FBQztJQUNkLElBQUksQ0FBQ0ksQ0FBQyxDQUFDRyxHQUFHLEdBQUdILENBQUM7SUFFZCxNQUFNUixNQUFNLEdBQUc7TUFDYkksQ0FBQyxFQUFFLElBQUksQ0FBQ0EsQ0FBQztNQUNUSSxDQUFDLEVBQUUsSUFBSSxDQUFDQTtJQUNWLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQzVCLElBQUksRUFBRTtNQUNiLElBQUksQ0FBQ0EsSUFBSSxDQUFDZ0MsU0FBUyxDQUFDWixNQUFNLENBQUM7SUFDN0I7RUFDRjs7RUFFQTtBQUNGO0FBQ0E7RUFDRWMsTUFBTUEsQ0FBQ0MsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsV0FBVyxFQUFFO0lBRWxCLElBQUksSUFBSSxDQUFDbkMsSUFBSSxFQUFFO01BQ2IsSUFBSSxDQUFDQSxJQUFJLENBQUNrQyxNQUFNLENBQUMsQ0FBQztJQUNwQjtJQUVBLElBQUksQ0FBQ3pELFFBQVEsQ0FBQzJELE1BQU0sQ0FBQztNQUNuQnRDLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJKLE1BQU0sRUFBRSxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUNuS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FtZXJhLCBQbGFuZSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyB1cmwgfSkge1xuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcbiAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgZHByOiBNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMilcbiAgICB9KVxuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcbiAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMClcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICB0aGlzLmNhbWVyYS5mb3YgPSA0NVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICBjcmVhdGVIb21lKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHsgZ2w6IHRoaXMuZ2wsIHNjZW5lOiB0aGlzLnNjZW5lLCBzaXplczogdGhpcy52aWV3cG9ydCB9KVxuICB9XG5cbiAgZGVzdHJveUhvbWUoKSB7XG4gICAgaWYgKCF0aGlzLmhvbWUpIHJldHVyblxuICAgIHRoaXMuaG9tZS5kZXN0cm95KClcbiAgICB0aGlzLmhvbWUgPSBudWxsXG4gIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudXJsKVxuICB9XG5cbiAgb25DaGFuZ2VFbmQodXJsKSB7XG4gICAgY29uc29sZS5sb2codXJsLCBcInVybFwiKVxuICAgIGlmICh1cmwgPT09IFwiaG9tZVwiKSB7XG4gICAgICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3Ryb3lIb21lKClcbiAgICB9XG5cbiAgICB0aGlzLnVybCA9IHVybFxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZS5cbiAgICovXG4gIG9uQ2hhbmdlKHVybCkge31cblxuICAvKipcbiAgICogUmVzaXplLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zY3JlZW4gPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnNjcmVlbi53aWR0aCwgdGhpcy5zY3JlZW4uaGVpZ2h0KVxuXG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuICAgICAgYXNwZWN0OiB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2wuY2FudmFzLmhlaWdodFxuICAgIH0pXG5cbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuICAgIHRoaXMudmlld3BvcnQgPSB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLnguc3RhcnQsXG4gICAgICB5OiB0aGlzLnkuc3RhcnRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICB0aGlzLmhvbWUub25Ub3VjaERvd24odmFsdWVzKVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPSB4XG4gICAgdGhpcy55LmVuZCA9IHlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuXG4gICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZS5cbiAgICovXG4gIHVwZGF0ZShhcHBsaWNhdGlvbikge1xuICAgIGlmICghYXBwbGljYXRpb24pIHJldHVyblxuXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgdGhpcy5ob21lLnVwZGF0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTk1NDlhNWM0Nzk4YTc1ZTg1YTZcIikiXSwibmFtZXMiOlsiQm94IiwiQ2FtZXJhIiwiUGxhbmUiLCJSZW5kZXJlciIsIlRyYW5zZm9ybSIsIkhvbWUiLCJjb25zdHJ1Y3RvciIsInVybCIsInJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkcHIiLCJNYXRoIiwibWluIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImdsIiwiY2xlYXJDb2xvciIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsImNhbWVyYSIsImZvdiIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiY3JlYXRlSG9tZSIsImhvbWUiLCJzaXplcyIsInZpZXdwb3J0IiwiZGVzdHJveUhvbWUiLCJkZXN0cm95Iiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsInNjcmVlbiIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2V0U2l6ZSIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiUEkiLCJ0YW4iLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwieCIsInN0YXJ0IiwidG91Y2hlcyIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwiZW5kIiwib25Ub3VjaFVwIiwiY2hhbmdlZFRvdWNoZXMiLCJ1cGRhdGUiLCJhcHBsaWNhdGlvbiIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=