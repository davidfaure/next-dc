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
    this.renderer = new ogl__WEBPACK_IMPORTED_MODULE_1__.Renderer();
    this.gl = this.renderer.gl;
    // this.gl.clearColor(0, 0, 0, 0)

    document.body.appendChild(this.gl.canvas);
    this.createCamera();
    this.createScene();
    // this.createCube()

    this.onResize();
  }
  createCamera() {
    this.camera = new ogl__WEBPACK_IMPORTED_MODULE_2__.Camera(this.gl);
    // this.camera.fov = 45
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
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_6__.Mesh(this.gl, this.geometry, this.program);
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

    // const fov = this.camera.fov * (Math.PI / 180)
    // const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    // const width = height * this.camera.aspect

    // this.viewport = {
    //   height,
    //   width
    // }

    // const values = {
    //   screen: this.screen,
    //   viewport: this.viewport
    // }
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
/******/ 	__webpack_require__.h = () => ("05bc4cb11de9d49e36b0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFNkMsTUFBTUEsQ0FBQ0MsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsV0FBVyxFQUFFOztJQUVsQjtJQUNBO0lBQ0E7O0lBRUEsSUFBSSxDQUFDN0MsUUFBUSxDQUFDOEMsTUFBTSxDQUFDO01BQ25CbEMsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztNQUNqQkgsTUFBTSxFQUFFLElBQUksQ0FBQ0E7SUFDZixDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQzFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYW1lcmEsIFBsYW5lLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IHVybCB9KSB7XG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnkgPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpXG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuICAgIC8vIHRoaXMuZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICAvLyB0aGlzLmNyZWF0ZUN1YmUoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG4gICAgLy8gdGhpcy5jYW1lcmEuZm92ID0gNDVcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuICB9XG5cbiAgY3JlYXRlU2NlbmUoKSB7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuICB9XG5cbiAgLy8gY3JlYXRlSG9tZSgpIHtcbiAgLy8gICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG4gIC8vICAgICBnbDogdGhpcy5nbCxcbiAgLy8gICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAvLyAgICAgc2l6ZXM6IHRoaXMudmlld3BvcnQsXG4gIC8vICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgLy8gICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgY3JlYXRlQ3ViZSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJveCh0aGlzLmdsKVxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIHZlcnRleDogLyogZ2xzbCAqLyBgXG4gICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcblxuICAgICAgICAgICAgdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcbiAgICAgICAgICAgIHVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xuXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgIGZyYWdtZW50OiAvKiBnbHNsICovIGBcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwgdGhpcy5nZW9tZXRyeSwgdGhpcy5wcm9ncmFtKVxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIC8vIGRlc3Ryb3lIb21lKCkge1xuICAvLyAgIGlmICghdGhpcy5ob21lKSByZXR1cm5cbiAgLy8gICB0aGlzLmhvbWUuZGVzdHJveSgpXG4gIC8vICAgdGhpcy5ob21lID0gbnVsbFxuICAvLyB9XG5cbiAgb25QcmVsb2FkZWQoKSB7XG4gICAgdGhpcy5vbkNoYW5nZUVuZCh0aGlzLnVybClcbiAgfVxuXG4gIG9uQ2hhbmdlRW5kKHVybCkge1xuICAgIGNvbnNvbGUubG9nKHVybCwgXCJ1cmxcIilcbiAgICAvLyBpZiAodXJsID09PSBcImhvbWVcIikge1xuICAgIC8vICAgdGhpcy5jcmVhdGVIb21lKClcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5kZXN0cm95SG9tZSgpXG4gICAgLy8gfVxuXG4gICAgdGhpcy51cmwgPSB1cmxcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UuXG4gICAqL1xuICBvbkNoYW5nZSh1cmwpIHt9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZS5cbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuc2NyZWVuID0ge1xuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5zY3JlZW4ud2lkdGgsIHRoaXMuc2NyZWVuLmhlaWdodClcblxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcbiAgICAgIGFzcGVjdDogdGhpcy5nbC5jYW52YXMud2lkdGggLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHRcbiAgICB9KVxuXG4gICAgLy8gY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG4gICAgLy8gY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuICAgIC8vIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cbiAgICAvLyB0aGlzLnZpZXdwb3J0ID0ge1xuICAgIC8vICAgaGVpZ2h0LFxuICAgIC8vICAgd2lkdGhcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCB2YWx1ZXMgPSB7XG4gICAgLy8gICBzY3JlZW46IHRoaXMuc2NyZWVuLFxuICAgIC8vICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICAvLyB9XG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxuXG4gICAgdGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICB0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LnN0YXJ0LFxuICAgICAgeTogdGhpcy55LnN0YXJ0XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcbiAgICAvLyB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG4gICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID0geFxuICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnlcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcblxuICAgIGNvbnN0IHggPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgY29uc3QgeSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPSB4XG4gICAgdGhpcy55LmVuZCA9IHlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueVxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmhvbWUpIHtcbiAgICAvLyAgIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuICAgIC8vIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUuXG4gICAqL1xuICB1cGRhdGUoYXBwbGljYXRpb24pIHtcbiAgICBpZiAoIWFwcGxpY2F0aW9uKSByZXR1cm5cblxuICAgIC8vIGlmICh0aGlzLmhvbWUpIHtcbiAgICAvLyAgIHRoaXMuaG9tZS51cGRhdGUoKVxuICAgIC8vIH1cblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYVxuICAgIH0pXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA1YmM0Y2IxMWRlOWQ0OWUzNmIwXCIpIl0sIm5hbWVzIjpbIkJveCIsIkNhbWVyYSIsIlBsYW5lIiwiUmVuZGVyZXIiLCJUcmFuc2Zvcm0iLCJQcm9ncmFtIiwiTWVzaCIsIkhvbWUiLCJjb25zdHJ1Y3RvciIsInVybCIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsInJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJjYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsImNyZWF0ZUN1YmUiLCJnZW9tZXRyeSIsInByb2dyYW0iLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIm1lc2giLCJzZXRQYXJlbnQiLCJvblByZWxvYWRlZCIsIm9uQ2hhbmdlRW5kIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwic2NyZWVuIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzZXRTaXplIiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwidmFsdWVzIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsInVwZGF0ZSIsImFwcGxpY2F0aW9uIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==