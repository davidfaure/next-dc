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
/******/ 	__webpack_require__.h = () => ("5f2676ad364c92dc3501")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7SUFFbkIsTUFBTS9DLENBQUMsR0FBRzhDLEtBQUssQ0FBQ08sY0FBYyxHQUFHUCxLQUFLLENBQUNPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU87SUFDaEYsTUFBTTdDLENBQUMsR0FBRzBDLEtBQUssQ0FBQ08sY0FBYyxHQUFHUCxLQUFLLENBQUNPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0gsT0FBTyxHQUFHSixLQUFLLENBQUNJLE9BQU87SUFFaEYsSUFBSSxDQUFDbEQsQ0FBQyxDQUFDRyxHQUFHLEdBQUdILENBQUM7SUFDZCxJQUFJLENBQUNJLENBQUMsQ0FBQ0QsR0FBRyxHQUFHQyxDQUFDO0lBRWQsTUFBTXdDLE1BQU0sR0FBRztNQUNiNUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsQ0FBQztNQUNUSSxDQUFDLEVBQUUsSUFBSSxDQUFDQTtJQUNWLENBQUM7O0lBRUQ7SUFDQTtJQUNBO0VBQ0Y7O0VBRUE7QUFDRjtBQUNBO0VBQ0VrRCxNQUFNQSxDQUFDQyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQSxXQUFXLEVBQUU7O0lBRWxCO0lBQ0E7SUFDQTs7SUFFQSxJQUFJLENBQUNsRCxRQUFRLENBQUNtRCxNQUFNLENBQUM7TUFDbkJyQyxLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO01BQ2pCSixNQUFNLEVBQUUsSUFBSSxDQUFDQTtJQUNmLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDOU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhbWVyYSwgUGxhbmUsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIFByb2dyYW0sIE1lc2ggfSBmcm9tIFwib2dsXCJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgdXJsIH0pIHtcbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy54ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBkaXN0YW5jZTogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuICAgIHRoaXMueSA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcbiAgICAgIC8vIGFscGhhOiB0cnVlLFxuICAgICAgLy8gYW50aWFsaWFzOiB0cnVlLFxuICAgICAgLy8gZHByOiBNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMilcbiAgICB9KVxuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcbiAgICAvLyB0aGlzLmdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMClcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpXG4gICAgdGhpcy5jcmVhdGVDdWJlKClcblxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuICAgIHRoaXMuY2FtZXJhLmZvdiA9IDQ1XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcbiAgfVxuXG4gIC8vIGNyZWF0ZUhvbWUoKSB7XG4gIC8vICAgdGhpcy5ob21lID0gbmV3IEhvbWUoe1xuICAvLyAgICAgZ2w6IHRoaXMuZ2wsXG4gIC8vICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgLy8gICAgIHNpemVzOiB0aGlzLnZpZXdwb3J0LFxuICAvLyAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gIC8vICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gIC8vICAgfSlcbiAgLy8gfVxuXG4gIGNyZWF0ZUN1YmUoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICB2ZXJ0ZXg6IC8qIGdsc2wgKi8gYFxuICAgICAgICAgICAgYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XG5cbiAgICAgICAgICAgIHVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XG4gICAgICAgICAgICB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcblxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgICBmcmFnbWVudDogLyogZ2xzbCAqLyBgXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjApO1xuICAgICAgICAgICAgfVxuICAgICAgICBgXG4gICAgfSlcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHRoaXMuZ2VvbWV0cnksIHRoaXMucHJvZ3JhbSlcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICAvLyBkZXN0cm95SG9tZSgpIHtcbiAgLy8gICBpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG4gIC8vICAgdGhpcy5ob21lLmRlc3Ryb3koKVxuICAvLyAgIHRoaXMuaG9tZSA9IG51bGxcbiAgLy8gfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMub25DaGFuZ2VFbmQodGhpcy51cmwpXG4gIH1cblxuICBvbkNoYW5nZUVuZCh1cmwpIHtcbiAgICBjb25zb2xlLmxvZyh1cmwsIFwidXJsXCIpXG4gICAgLy8gaWYgKHVybCA9PT0gXCJob21lXCIpIHtcbiAgICAvLyAgIHRoaXMuY3JlYXRlSG9tZSgpXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuZGVzdHJveUhvbWUoKVxuICAgIC8vIH1cblxuICAgIHRoaXMudXJsID0gdXJsXG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlLlxuICAgKi9cbiAgb25DaGFuZ2UodXJsKSB7fVxuXG4gIC8qKlxuICAgKiBSZXNpemUuXG4gICAqL1xuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnNjcmVlbiA9IHtcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMuc2NyZWVuLndpZHRoLCB0aGlzLnNjcmVlbi5oZWlnaHQpXG5cbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG4gICAgICBhc3BlY3Q6IHRoaXMuZ2wuY2FudmFzLndpZHRoIC8gdGhpcy5nbC5jYW52YXMuaGVpZ2h0XG4gICAgfSlcblxuICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuICAgIGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcbiAgICBjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG4gICAgdGhpcy52aWV3cG9ydCA9IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlbixcbiAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcblxuICAgIHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG4gICAgdGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgIHg6IHRoaXMueC5zdGFydCxcbiAgICAgIHk6IHRoaXMueS5zdGFydFxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmhvbWUpIHtcbiAgICAvLyAgIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG4gICAgLy8gfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuICAgIGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG4gICAgdGhpcy54LmVuZCA9IHhcbiAgICB0aGlzLnkuZW5kID0geVxuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuaG9tZSkge1xuICAgIC8vICAgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcbiAgICAvLyB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlXG5cbiAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuICAgIGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cbiAgICB0aGlzLnguZW5kID0geFxuICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnlcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcbiAgICAvLyB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlLlxuICAgKi9cbiAgdXBkYXRlKGFwcGxpY2F0aW9uKSB7XG4gICAgaWYgKCFhcHBsaWNhdGlvbikgcmV0dXJuXG5cbiAgICAvLyBpZiAodGhpcy5ob21lKSB7XG4gICAgLy8gICB0aGlzLmhvbWUudXBkYXRlKClcbiAgICAvLyB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZjI2NzZhZDM2NGM5MmRjMzUwMVwiKSJdLCJuYW1lcyI6WyJCb3giLCJDYW1lcmEiLCJQbGFuZSIsIlJlbmRlcmVyIiwiVHJhbnNmb3JtIiwiUHJvZ3JhbSIsIk1lc2giLCJIb21lIiwiY29uc3RydWN0b3IiLCJ1cmwiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJyZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUN1YmUiLCJvblJlc2l6ZSIsImNhbWVyYSIsImZvdiIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiZ2VvbWV0cnkiLCJwcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJtZXNoIiwic2V0UGFyZW50Iiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsInNjcmVlbiIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2V0U2l6ZSIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiTWF0aCIsIlBJIiwidGFuIiwidmlld3BvcnQiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJjaGFuZ2VkVG91Y2hlcyIsInVwZGF0ZSIsImFwcGxpY2F0aW9uIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==