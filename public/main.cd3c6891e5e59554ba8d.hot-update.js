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
      // alpha: true,
      // antialias: true,
      // dpr: Math.min(window.devicePixelRatio, 2)
    });
    this.gl = this.renderer.gl;
    // this.gl.clearColor(0, 0, 0, 0)

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
/******/ 	__webpack_require__.h = () => ("b9d805be01a1cc5f781f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNBLENBQUM7TUFDVEksQ0FBQyxFQUFFLElBQUksQ0FBQ0E7SUFDVixDQUFDOztJQUVEO0lBQ0E7SUFDQTtFQUNGOztFQUVBO0FBQ0Y7QUFDQTtFQUNFOEMsTUFBTUEsQ0FBQ0MsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsV0FBVyxFQUFFOztJQUVsQjtJQUNBO0lBQ0E7O0lBRUEsSUFBSSxDQUFDOUMsUUFBUSxDQUFDK0MsTUFBTSxDQUFDO01BQ25CakMsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztNQUNqQkosTUFBTSxFQUFFLElBQUksQ0FBQ0E7SUFDZixDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQzlNQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYW1lcmEsIFBsYW5lLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IHVybCB9KSB7XG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnkgPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG4gICAgICAvLyBhbHBoYTogdHJ1ZSxcbiAgICAgIC8vIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgIC8vIGRwcjogTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIpXG4gICAgfSlcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG4gICAgLy8gdGhpcy5nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIHRoaXMuY3JlYXRlQ3ViZSgpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICB0aGlzLmNhbWVyYS5mb3YgPSA0NVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICAvLyBjcmVhdGVIb21lKCkge1xuICAvLyAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgLy8gICAgIGdsOiB0aGlzLmdsLFxuICAvLyAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gIC8vICAgICBzaXplczogdGhpcy52aWV3cG9ydCxcbiAgLy8gICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAvLyAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYVxuICAvLyAgIH0pXG4gIC8vIH1cblxuICBjcmVhdGVDdWJlKCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgdmVydGV4OiAvKiBnbHNsICovIGBcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuXG4gICAgICAgICAgICB1bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuICAgICAgICAgICAgdW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XG5cbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xuICAgICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgZnJhZ21lbnQ6IC8qIGdsc2wgKi8gYFxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB0aGlzLmdlb21ldHJ5LCB0aGlzLnByb2dyYW0pXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgLy8gZGVzdHJveUhvbWUoKSB7XG4gIC8vICAgaWYgKCF0aGlzLmhvbWUpIHJldHVyblxuICAvLyAgIHRoaXMuaG9tZS5kZXN0cm95KClcbiAgLy8gICB0aGlzLmhvbWUgPSBudWxsXG4gIC8vIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudXJsKVxuICB9XG5cbiAgb25DaGFuZ2VFbmQodXJsKSB7XG4gICAgY29uc29sZS5sb2codXJsLCBcInVybFwiKVxuICAgIC8vIGlmICh1cmwgPT09IFwiaG9tZVwiKSB7XG4gICAgLy8gICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLmRlc3Ryb3lIb21lKClcbiAgICAvLyB9XG5cbiAgICB0aGlzLnVybCA9IHVybFxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZS5cbiAgICovXG4gIG9uQ2hhbmdlKHVybCkge31cblxuICAvKipcbiAgICogUmVzaXplLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zY3JlZW4gPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnNjcmVlbi53aWR0aCwgdGhpcy5zY3JlZW4uaGVpZ2h0KVxuXG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuICAgICAgYXNwZWN0OiB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2wuY2FudmFzLmhlaWdodFxuICAgIH0pXG5cbiAgICAvLyBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcbiAgICAvLyBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgLy8gY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuICAgIC8vIHRoaXMudmlld3BvcnQgPSB7XG4gICAgLy8gICBoZWlnaHQsXG4gICAgLy8gICB3aWR0aFxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAvLyAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgLy8gICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgIC8vIH1cbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLnguc3RhcnQsXG4gICAgICB5OiB0aGlzLnkuc3RhcnRcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICB0aGlzLmhvbWUub25Ub3VjaERvd24odmFsdWVzKVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPSB4XG4gICAgdGhpcy55LmVuZCA9IHlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueVxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmhvbWUpIHtcbiAgICAvLyAgIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgLy8gfVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuXG4gICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgLy8gfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZS5cbiAgICovXG4gIHVwZGF0ZShhcHBsaWNhdGlvbikge1xuICAgIGlmICghYXBwbGljYXRpb24pIHJldHVyblxuXG4gICAgLy8gaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgdGhpcy5ob21lLnVwZGF0ZSgpXG4gICAgLy8gfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjlkODA1YmUwMWExY2M1Zjc4MWZcIikiXSwibmFtZXMiOlsiQm94IiwiQ2FtZXJhIiwiUGxhbmUiLCJSZW5kZXJlciIsIlRyYW5zZm9ybSIsIlByb2dyYW0iLCJNZXNoIiwiSG9tZSIsImNvbnN0cnVjdG9yIiwidXJsIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwicmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVDdWJlIiwib25SZXNpemUiLCJjYW1lcmEiLCJmb3YiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsImdlb21ldHJ5IiwicHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwibWVzaCIsInNldFBhcmVudCIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJzY3JlZW4iLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNldFNpemUiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJ2YWx1ZXMiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsImNoYW5nZWRUb3VjaGVzIiwidXBkYXRlIiwiYXBwbGljYXRpb24iLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9