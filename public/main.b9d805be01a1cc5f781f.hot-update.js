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
    this.createCube();
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
/******/ 	__webpack_require__.h = () => ("0563534eb327071456b2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0VBQ0Y7O0VBRUE7QUFDRjtBQUNBO0VBQ0U2QyxNQUFNQSxDQUFDQyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQSxXQUFXLEVBQUU7O0lBRWxCO0lBQ0E7SUFDQTs7SUFFQSxJQUFJLENBQUM3QyxRQUFRLENBQUM4QyxNQUFNLENBQUM7TUFDbkJqQyxLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO01BQ2pCSCxNQUFNLEVBQUUsSUFBSSxDQUFDQTtJQUNmLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDMU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhbWVyYSwgUGxhbmUsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIFByb2dyYW0sIE1lc2ggfSBmcm9tIFwib2dsXCJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgdXJsIH0pIHtcbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy54ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuICAgIHRoaXMueSA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKClcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG4gICAgLy8gdGhpcy5nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIHRoaXMuY3JlYXRlQ3ViZSgpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICAvLyB0aGlzLmNhbWVyYS5mb3YgPSA0NVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICAvLyBjcmVhdGVIb21lKCkge1xuICAvLyAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgLy8gICAgIGdsOiB0aGlzLmdsLFxuICAvLyAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gIC8vICAgICBzaXplczogdGhpcy52aWV3cG9ydCxcbiAgLy8gICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAvLyAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYVxuICAvLyAgIH0pXG4gIC8vIH1cblxuICBjcmVhdGVDdWJlKCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgdmVydGV4OiAvKiBnbHNsICovIGBcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuXG4gICAgICAgICAgICB1bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuICAgICAgICAgICAgdW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XG5cbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xuICAgICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgZnJhZ21lbnQ6IC8qIGdsc2wgKi8gYFxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB0aGlzLmdlb21ldHJ5LCB0aGlzLnByb2dyYW0pXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgLy8gZGVzdHJveUhvbWUoKSB7XG4gIC8vICAgaWYgKCF0aGlzLmhvbWUpIHJldHVyblxuICAvLyAgIHRoaXMuaG9tZS5kZXN0cm95KClcbiAgLy8gICB0aGlzLmhvbWUgPSBudWxsXG4gIC8vIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudXJsKVxuICB9XG5cbiAgb25DaGFuZ2VFbmQodXJsKSB7XG4gICAgY29uc29sZS5sb2codXJsLCBcInVybFwiKVxuICAgIC8vIGlmICh1cmwgPT09IFwiaG9tZVwiKSB7XG4gICAgLy8gICB0aGlzLmNyZWF0ZUhvbWUoKVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLmRlc3Ryb3lIb21lKClcbiAgICAvLyB9XG5cbiAgICB0aGlzLnVybCA9IHVybFxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZS5cbiAgICovXG4gIG9uQ2hhbmdlKHVybCkge31cblxuICAvKipcbiAgICogUmVzaXplLlxuICAgKi9cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zY3JlZW4gPSB7XG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnNjcmVlbi53aWR0aCwgdGhpcy5zY3JlZW4uaGVpZ2h0KVxuXG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuICAgICAgYXNwZWN0OiB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2wuY2FudmFzLmhlaWdodFxuICAgIH0pXG5cbiAgICAvLyBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcbiAgICAvLyBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG4gICAgLy8gY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuICAgIC8vIHRoaXMudmlld3BvcnQgPSB7XG4gICAgLy8gICBoZWlnaHQsXG4gICAgLy8gICB3aWR0aFxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAvLyAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXG4gICAgLy8gICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydFxuICAgIC8vIH1cbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLnguc3RhcnQsXG4gICAgICB5OiB0aGlzLnkuc3RhcnRcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICB0aGlzLmhvbWUub25Ub3VjaERvd24odmFsdWVzKVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIHRoaXMueC5lbmQgPSB4XG4gICAgdGhpcy55LmVuZCA9IHlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueVxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmhvbWUpIHtcbiAgICAvLyAgIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh2YWx1ZXMpXG4gICAgLy8gfVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxuXG4gICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcbiAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXG4gICAgLy8gfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZS5cbiAgICovXG4gIHVwZGF0ZShhcHBsaWNhdGlvbikge1xuICAgIGlmICghYXBwbGljYXRpb24pIHJldHVyblxuXG4gICAgLy8gaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgdGhpcy5ob21lLnVwZGF0ZSgpXG4gICAgLy8gfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDU2MzUzNGViMzI3MDcxNDU2YjJcIikiXSwibmFtZXMiOlsiQm94IiwiQ2FtZXJhIiwiUGxhbmUiLCJSZW5kZXJlciIsIlRyYW5zZm9ybSIsIlByb2dyYW0iLCJNZXNoIiwiSG9tZSIsImNvbnN0cnVjdG9yIiwidXJsIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwicmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVDdWJlIiwib25SZXNpemUiLCJjYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsImdlb21ldHJ5IiwicHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwibWVzaCIsInNldFBhcmVudCIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJzY3JlZW4iLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNldFNpemUiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJ2YWx1ZXMiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsImNoYW5nZWRUb3VjaGVzIiwidXBkYXRlIiwiYXBwbGljYXRpb24iLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9