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
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_6__.Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
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
/******/ 	__webpack_require__.h = () => ("bf4144c021586cb5120e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ZjFkNzA5YzNiNDZkYjBjNDdkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRFO0FBQ25EO0FBRXpCLGlFQUFlLE1BQU07RUFDbkJRLFdBQVdBLENBQUM7SUFBRUM7RUFBSSxDQUFDLEVBQUU7SUFDbkIsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFFZCxJQUFJLENBQUNDLENBQUMsR0FBRztNQUNQQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxRQUFRLEVBQUUsQ0FBQztNQUNYQyxHQUFHLEVBQUU7SUFDUCxDQUFDO0lBRUQsSUFBSSxDQUFDQyxDQUFDLEdBQUc7TUFDUEgsS0FBSyxFQUFFLENBQUM7TUFDUkMsUUFBUSxFQUFFLENBQUM7TUFDWEMsR0FBRyxFQUFFO0lBQ1AsQ0FBQztJQUVELElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUlaLHlDQUFRLENBQUMsQ0FBQztJQUU5QixJQUFJLENBQUNhLEVBQUUsR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0MsRUFBRTtJQUMxQixJQUFJLENBQUNBLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU5QkMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNKLEVBQUUsQ0FBQ0ssTUFBTSxDQUFDO0lBRXpDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBRWpCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7RUFDakI7RUFFQUgsWUFBWUEsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDSSxNQUFNLEdBQUcsSUFBSXpCLHVDQUFNLENBQUMsSUFBSSxDQUFDZSxFQUFFLENBQUM7SUFDakMsSUFBSSxDQUFDVSxNQUFNLENBQUNDLEdBQUcsR0FBRyxFQUFFO0lB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Q0FBQzs7SUFFRDtJQUNBO0lBQ0E7RUFDRjs7RUFFQWlELFNBQVNBLENBQUNOLEtBQUssRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7SUFFbkIsTUFBTWhELENBQUMsR0FBRytDLEtBQUssQ0FBQ08sY0FBYyxHQUFHUCxLQUFLLENBQUNPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU87SUFDaEYsTUFBTTlDLENBQUMsR0FBRzJDLEtBQUssQ0FBQ08sY0FBYyxHQUFHUCxLQUFLLENBQUNPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0gsT0FBTyxHQUFHSixLQUFLLENBQUNJLE9BQU87SUFFaEYsSUFBSSxDQUFDbkQsQ0FBQyxDQUFDRyxHQUFHLEdBQUdILENBQUM7SUFDZCxJQUFJLENBQUNJLENBQUMsQ0FBQ0QsR0FBRyxHQUFHQyxDQUFDO0lBRWQsTUFBTXlDLE1BQU0sR0FBRztNQUNiN0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsQ0FBQztNQUNUSSxDQUFDLEVBQUUsSUFBSSxDQUFDQTtJQUNWLENBQUM7O0lBRUQ7SUFDQTtJQUNBO0VBQ0Y7O0VBRUE7QUFDRjtBQUNBO0VBQ0VtRCxNQUFNQSxDQUFDQyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQSxXQUFXLEVBQUU7O0lBRWxCO0lBQ0E7SUFDQTs7SUFFQSxJQUFJLENBQUNuRCxRQUFRLENBQUNvRCxNQUFNLENBQUM7TUFDbkJyQyxLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO01BQ2pCSixNQUFNLEVBQUUsSUFBSSxDQUFDQTtJQUNmLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDMU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhbWVyYSwgUGxhbmUsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIFByb2dyYW0sIE1lc2ggfSBmcm9tIFwib2dsXCJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgdXJsIH0pIHtcbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy54ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuICAgIHRoaXMueSA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKClcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG4gICAgdGhpcy5nbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApXG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKVxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKVxuICAgIHRoaXMuY3JlYXRlQ3ViZSgpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcbiAgICB0aGlzLmNhbWVyYS5mb3YgPSA0NVxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuICAvLyBjcmVhdGVIb21lKCkge1xuICAvLyAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcbiAgLy8gICAgIGdsOiB0aGlzLmdsLFxuICAvLyAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gIC8vICAgICBzaXplczogdGhpcy52aWV3cG9ydCxcbiAgLy8gICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAvLyAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYVxuICAvLyAgIH0pXG4gIC8vIH1cblxuICBjcmVhdGVDdWJlKCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgdmVydGV4OiAvKiBnbHNsICovIGBcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xuXG4gICAgICAgICAgICB1bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuICAgICAgICAgICAgdW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XG5cbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xuICAgICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgZnJhZ21lbnQ6IC8qIGdsc2wgKi8gYFxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7IGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LCBwcm9ncmFtOiB0aGlzLnByb2dyYW0gfSlcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICAvLyBkZXN0cm95SG9tZSgpIHtcbiAgLy8gICBpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG4gIC8vICAgdGhpcy5ob21lLmRlc3Ryb3koKVxuICAvLyAgIHRoaXMuaG9tZSA9IG51bGxcbiAgLy8gfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMub25DaGFuZ2VFbmQodGhpcy51cmwpXG4gIH1cblxuICBvbkNoYW5nZUVuZCh1cmwpIHtcbiAgICBjb25zb2xlLmxvZyh1cmwsIFwidXJsXCIpXG4gICAgLy8gaWYgKHVybCA9PT0gXCJob21lXCIpIHtcbiAgICAvLyAgIHRoaXMuY3JlYXRlSG9tZSgpXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuZGVzdHJveUhvbWUoKVxuICAgIC8vIH1cblxuICAgIHRoaXMudXJsID0gdXJsXG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlLlxuICAgKi9cbiAgb25DaGFuZ2UodXJsKSB7fVxuXG4gIC8qKlxuICAgKiBSZXNpemUuXG4gICAqL1xuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnNjcmVlbiA9IHtcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMuc2NyZWVuLndpZHRoLCB0aGlzLnNjcmVlbi5oZWlnaHQpXG5cbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG4gICAgICBhc3BlY3Q6IHRoaXMuZ2wuY2FudmFzLndpZHRoIC8gdGhpcy5nbC5jYW52YXMuaGVpZ2h0XG4gICAgfSlcblxuICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuICAgIGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcbiAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG4gICAgdGhpcy52aWV3cG9ydCA9IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlbixcbiAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgdGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueC5zdGFydCxcbiAgICAgIHk6IHRoaXMueS5zdGFydFxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmhvbWUpIHtcbiAgICAvLyAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgLy8gfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgIGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICAvLyB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG5cbiAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID0geFxuICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnlcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcbiAgICAvLyB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlLlxuICAgKi9cbiAgdXBkYXRlKGFwcGxpY2F0aW9uKSB7XG4gICAgaWYgKCFhcHBsaWNhdGlvbikgcmV0dXJuXG5cbiAgICAvLyBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICB0aGlzLmhvbWUudXBkYXRlKClcbiAgICAvLyB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiZjQxNDRjMDIxNTg2Y2I1MTIwZVwiKSJdLCJuYW1lcyI6WyJCb3giLCJDYW1lcmEiLCJQbGFuZSIsIlJlbmRlcmVyIiwiVHJhbnNmb3JtIiwiUHJvZ3JhbSIsIk1lc2giLCJIb21lIiwiY29uc3RydWN0b3IiLCJ1cmwiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJyZW5kZXJlciIsImdsIiwiY2xlYXJDb2xvciIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVDdWJlIiwib25SZXNpemUiLCJjYW1lcmEiLCJmb3YiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsImdlb21ldHJ5IiwicHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwibWVzaCIsInNldFBhcmVudCIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJzY3JlZW4iLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNldFNpemUiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIk1hdGgiLCJQSSIsInRhbiIsInZpZXdwb3J0IiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiY2hhbmdlZFRvdWNoZXMiLCJ1cGRhdGUiLCJhcHBsaWNhdGlvbiIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=