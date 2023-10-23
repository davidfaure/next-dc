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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Box.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
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
    this.createCube();
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

  // createHome() {
  //   this.home = new Home({
  //     gl: this.gl,
  //     scene: this.scene,
  //     sizes: this.viewport,
  //     renderer: this.renderer,
  //     camera: this.camera
  //   })
  // }

  createCube() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_4__.Box(this.gl);
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_5__.Program(this.gl, {
      vertex: /* glsl */`
            attribute vec3 position;

            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;

            void main() {
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
      fragment: /* glsl */`
            void main() {
                gl_FragColor = vec4(1.0);
            }
        `
    });
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_6__.Mesh(this.gl, this.program);
    this.mesh.setParent(this.scene);
  }

  // destroyHome() {
  //   if (!this.home) return
  //   this.home.destroy()
  //   this.home = null
  // }

  onPreloaded() {
    this.onChangeEnd(this.url);
  }
  onChangeEnd(url) {
    console.log(url, "url");
    // if (url === "home") {
    //   this.createHome()
    // } else {
    //   this.destroyHome()
    // }

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

    // if (this.home) {
    //   this.home.onTouchDown(values)
    // }
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

    // if (this.home) {
    //   this.home.onTouchMove(values)
    // }
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

    // if (this.home) {
    //   this.home.onTouchUp(values)
    // }
  }

  /**
   * Update.
   */
  update(application) {
    if (!application) return;

    // if (this.home) {
    //   this.home.update()
    // }

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
/******/ 	__webpack_require__.h = () => ("ba003475bfb50b0ab7ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLEdBQUc7TUFDYmxELENBQUMsRUFBRSxJQUFJLENBQUNBLENBQUM7TUFDVEksQ0FBQyxFQUFFLElBQUksQ0FBQ0E7SUFDVixDQUFDOztJQUVEO0lBQ0E7SUFDQTtFQUNGOztFQUVBc0QsU0FBU0EsQ0FBQ04sS0FBSyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUVuQixNQUFNckQsQ0FBQyxHQUFHb0QsS0FBSyxDQUFDTyxjQUFjLEdBQUdQLEtBQUssQ0FBQ08sY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDSixPQUFPLEdBQUdILEtBQUssQ0FBQ0csT0FBTztJQUNoRixNQUFNbkQsQ0FBQyxHQUFHZ0QsS0FBSyxDQUFDTyxjQUFjLEdBQUdQLEtBQUssQ0FBQ08sY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDSCxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ksT0FBTztJQUVoRixJQUFJLENBQUN4RCxDQUFDLENBQUNHLEdBQUcsR0FBR0gsQ0FBQztJQUNkLElBQUksQ0FBQ0ksQ0FBQyxDQUFDRCxHQUFHLEdBQUdDLENBQUM7SUFFZCxNQUFNOEMsTUFBTSxHQUFHO01BQ2JsRCxDQUFDLEVBQUUsSUFBSSxDQUFDQSxDQUFDO01BQ1RJLENBQUMsRUFBRSxJQUFJLENBQUNBO0lBQ1YsQ0FBQzs7SUFFRDtJQUNBO0lBQ0E7RUFDRjs7RUFFQTtBQUNGO0FBQ0E7RUFDRXdELE1BQU1BLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNBLFdBQVcsRUFBRTs7SUFFbEI7SUFDQTtJQUNBOztJQUVBLElBQUksQ0FBQ3hELFFBQVEsQ0FBQ3lELE1BQU0sQ0FBQztNQUNuQm5DLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJKLE1BQU0sRUFBRSxJQUFJLENBQUNBO0lBQ2YsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUM5TUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FtZXJhLCBQbGFuZSwgUmVuZGVyZXIsIFRyYW5zZm9ybSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyB1cmwgfSkge1xuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLnggPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuXG4gICAgdGhpcy55ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICBkcHI6IE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAyKVxuICAgIH0pXG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICB0aGlzLmNyZWF0ZUN1YmUoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgdGhpcy5jYW1lcmEuZm92ID0gNDVcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgLy8gY3JlYXRlSG9tZSgpIHtcbiAgLy8gICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG4gIC8vICAgICBnbDogdGhpcy5nbCxcbiAgLy8gICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAvLyAgICAgc2l6ZXM6IHRoaXMudmlld3BvcnQsXG4gIC8vICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgLy8gICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgY3JlYXRlQ3ViZSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveCh0aGlzLmdsKVxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIHZlcnRleDogLyogZ2xzbCAqLyBgXG4gICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcblxuICAgICAgICAgICAgdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcbiAgICAgICAgICAgIHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xuXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIGZyYWdtZW50OiAvKiBnbHNsICovIGBcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwgdGhpcy5wcm9ncmFtKVxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIC8vIGRlc3Ryb3lIb21lKCkge1xuICAvLyAgIGlmICghdGhpcy5ob21lKSByZXR1cm5cbiAgLy8gICB0aGlzLmhvbWUuZGVzdHJveSgpXG4gIC8vICAgdGhpcy5ob21lID0gbnVsbFxuICAvLyB9XG5cbiAgb25QcmVsb2FkZWQoKSB7XG4gICAgdGhpcy5vbkNoYW5nZUVuZCh0aGlzLnVybClcbiAgfVxuXG4gIG9uQ2hhbmdlRW5kKHVybCkge1xuICAgIGNvbnNvbGUubG9nKHVybCwgXCJ1cmxcIilcbiAgICAvLyBpZiAodXJsID09PSBcImhvbWVcIikge1xuICAgIC8vICAgdGhpcy5jcmVhdGVIb21lKClcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5kZXN0cm95SG9tZSgpXG4gICAgLy8gfVxuXG4gICAgdGhpcy51cmwgPSB1cmxcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UuXG4gICAqL1xuICBvbkNoYW5nZSh1cmwpIHt9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZS5cbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuc2NyZWVuID0ge1xuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5zY3JlZW4ud2lkdGgsIHRoaXMuc2NyZWVuLmhlaWdodClcblxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcbiAgICAgIGFzcGVjdDogdGhpcy5nbC5jYW52YXMud2lkdGggLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHRcbiAgICB9KVxuXG4gICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG4gICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cbiAgICB0aGlzLnZpZXdwb3J0ID0ge1xuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGhcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICBzY3JlZW46IHRoaXMuc2NyZWVuLFxuICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICB9XG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgdGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICB0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LnN0YXJ0LFxuICAgICAgeTogdGhpcy55LnN0YXJ0XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICAvLyB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID0geFxuICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnlcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcblxuICAgIGNvbnN0IHggPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPSB4XG4gICAgdGhpcy55LmVuZCA9IHlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueVxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmhvbWUpIHtcbiAgICAvLyAgIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuICAgIC8vIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUuXG4gICAqL1xuICB1cGRhdGUoYXBwbGljYXRpb24pIHtcbiAgICBpZiAoIWFwcGxpY2F0aW9uKSByZXR1cm5cblxuICAgIC8vIGlmICh0aGlzLmhvbWUpIHtcbiAgICAvLyAgIHRoaXMuaG9tZS51cGRhdGUoKVxuICAgIC8vIH1cblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYVxuICAgIH0pXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJhMDAzNDc1YmZiNTBiMGFiN2ZmXCIpIl0sIm5hbWVzIjpbIkJveCIsIkNhbWVyYSIsIlBsYW5lIiwiUmVuZGVyZXIiLCJUcmFuc2Zvcm0iLCJQcm9ncmFtIiwiTWVzaCIsIkhvbWUiLCJjb25zdHJ1Y3RvciIsInVybCIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsInJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkcHIiLCJNYXRoIiwibWluIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImdsIiwiY2xlYXJDb2xvciIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVDdWJlIiwib25SZXNpemUiLCJjYW1lcmEiLCJmb3YiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsImdlb21ldHJ5IiwicHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwibWVzaCIsInNldFBhcmVudCIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJzY3JlZW4iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNldFNpemUiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIlBJIiwidGFuIiwidmlld3BvcnQiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsInVwZGF0ZSIsImFwcGxpY2F0aW9uIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==