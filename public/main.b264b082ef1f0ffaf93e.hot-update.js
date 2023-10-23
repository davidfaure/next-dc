"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Cursor/index.js":
/*!***********************************************!*\
  !*** ./app/components/Canvas/Cursor/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Polyline.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
/* harmony import */ var _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/cursor-vertex.glsl */ "./app/shaders/cursor-vertex.glsl");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    gl,
    scene,
    sizes,
    renderer,
    camera
  }) {
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.renderer = renderer;
    this.camera = camera;
    this.spring = 0.06;
    this.friction = 0.85;
    this.count = 20;
    this.points = [];
    this.mouseVelocity = new ogl__WEBPACK_IMPORTED_MODULE_1__.Vec3();
    this.mouse = new ogl__WEBPACK_IMPORTED_MODULE_1__.Vec3();
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
    this.createPolyline();
  }
  createPolyline() {
    for (let i = 0; i < this.count; i++) this.points.push(new ogl__WEBPACK_IMPORTED_MODULE_1__.Vec3());
    this.polyline = new ogl__WEBPACK_IMPORTED_MODULE_3__.Polyline(this.gl, {
      points: this.points,
      vertex: _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
      uniforms: {
        uColor: {
          value: new ogl__WEBPACK_IMPORTED_MODULE_4__.Color("#1b1b1b")
        },
        uThickness: {
          value: 40
        }
      }
    });
    this.polyline.mesh.setParent(this.scene);
    this.polyline.resize();
  }
  onTouchMove(e) {
    console.log(e, "event");
  }
  onResize() {
    if (this.polyline) this.polyline.resize();
  }
  update() {}
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4265a3ddff5a81b15fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMjY0YjA4MmVmMWYwZmZhZjkzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUVFO0FBRXhELGlFQUFlLE1BQU07RUFDbkJLLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFPLENBQUMsRUFBRTtJQUNsRCxJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJYixxQ0FBSSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDYyxLQUFLLEdBQUcsSUFBSWQscUNBQUksQ0FBQyxDQUFDO0lBRXZCLElBQUksQ0FBQ2UsS0FBSyxHQUFHLElBQUloQiwwQ0FBUyxDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDaUIsY0FBYyxDQUFDLENBQUM7RUFDdkI7RUFFQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDTixLQUFLLEVBQUVNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQ0wsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSWxCLHFDQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLElBQUksQ0FBQ21CLFFBQVEsR0FBRyxJQUFJckIseUNBQVEsQ0FBQyxJQUFJLENBQUNNLEVBQUUsRUFBRTtNQUNwQ1EsTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTTtNQUNuQlYsTUFBTTtNQUNOa0IsUUFBUSxFQUFFO1FBQ1JDLE1BQU0sRUFBRTtVQUFFQyxLQUFLLEVBQUUsSUFBSXJCLHNDQUFLLENBQUMsU0FBUztRQUFFLENBQUM7UUFDdkNzQixVQUFVLEVBQUU7VUFBRUQsS0FBSyxFQUFFO1FBQUc7TUFDMUI7SUFDRixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNILFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDO0lBQ3hDLElBQUksQ0FBQ2MsUUFBUSxDQUFDTyxNQUFNLENBQUMsQ0FBQztFQUN4QjtFQUVBQyxXQUFXQSxDQUFDQyxDQUFDLEVBQUU7SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsRUFBRSxPQUFPLENBQUM7RUFDekI7RUFFQUcsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxJQUFJLENBQUNaLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVEsQ0FBQ08sTUFBTSxDQUFDLENBQUM7RUFDM0M7RUFFQU0sTUFBTUEsQ0FBQSxFQUFHLENBQUM7QUFDWjs7Ozs7Ozs7VUNoREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0N1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bGluZSwgVHJhbnNmb3JtLCBWZWMzLCBDb2xvciB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2N1cnNvci12ZXJ0ZXguZ2xzbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciwgY2FtZXJhIH0pIHtcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXG4gICAgdGhpcy5zcHJpbmcgPSAwLjA2XG4gICAgdGhpcy5mcmljdGlvbiA9IDAuODVcbiAgICB0aGlzLmNvdW50ID0gMjBcbiAgICB0aGlzLnBvaW50cyA9IFtdXG4gICAgdGhpcy5tb3VzZVZlbG9jaXR5ID0gbmV3IFZlYzMoKVxuICAgIHRoaXMubW91c2UgPSBuZXcgVmVjMygpXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLmNyZWF0ZVBvbHlsaW5lKClcbiAgfVxuXG4gIGNyZWF0ZVBvbHlsaW5lKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB0aGlzLnBvaW50cy5wdXNoKG5ldyBWZWMzKCkpXG4gICAgdGhpcy5wb2x5bGluZSA9IG5ldyBQb2x5bGluZSh0aGlzLmdsLCB7XG4gICAgICBwb2ludHM6IHRoaXMucG9pbnRzLFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoXCIjMWIxYjFiXCIpIH0sXG4gICAgICAgIHVUaGlja25lc3M6IHsgdmFsdWU6IDQwIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5wb2x5bGluZS5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICAgIHRoaXMucG9seWxpbmUucmVzaXplKClcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLCBcImV2ZW50XCIpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZSkgdGhpcy5wb2x5bGluZS5yZXNpemUoKVxuICB9XG5cbiAgdXBkYXRlKCkge31cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ0MjY1YTNkZGZmNWE4MWIxNWZhXCIpIl0sIm5hbWVzIjpbIlBvbHlsaW5lIiwiVHJhbnNmb3JtIiwiVmVjMyIsIkNvbG9yIiwidmVydGV4IiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJyZW5kZXJlciIsImNhbWVyYSIsInNwcmluZyIsImZyaWN0aW9uIiwiY291bnQiLCJwb2ludHMiLCJtb3VzZVZlbG9jaXR5IiwibW91c2UiLCJncm91cCIsImNyZWF0ZVBvbHlsaW5lIiwiaSIsInB1c2giLCJwb2x5bGluZSIsInVuaWZvcm1zIiwidUNvbG9yIiwidmFsdWUiLCJ1VGhpY2tuZXNzIiwibWVzaCIsInNldFBhcmVudCIsInJlc2l6ZSIsIm9uVG91Y2hNb3ZlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvblJlc2l6ZSIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=