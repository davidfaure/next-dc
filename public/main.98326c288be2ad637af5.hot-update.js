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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Polyline.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
/* harmony import */ var _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/cursor-vertex.glsl */ "./app/shaders/cursor-vertex.glsl");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/math */ "./app/utils/math.js");





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
    this.count = 20;
    this.lines = [];
    this.mouseVelocity = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.mouse = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.tmp = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.createPolyline();
    this.onResize();
  }
  createPolyline() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(_data__WEBPACK_IMPORTED_MODULE_1__.cursorColor, (color, i) => {
      const line = {
        spring: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.randomize)(0.02, 0.06),
        friction: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.randomize)(0.7, 0.95),
        mouseVelocity: new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3(),
        mouseOffset: new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3((0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.randomize)(-1, 1) * 0.005)
      };
      this.points = line.points = [];
      for (let i = 0; i < this.count; i++) this.points.push(new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3());
      line.polyline = new ogl__WEBPACK_IMPORTED_MODULE_5__.Polyline(this.gl, {
        points: this.points,
        vertex: _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
        uniforms: {
          uColor: {
            value: new ogl__WEBPACK_IMPORTED_MODULE_6__.Color(color)
          },
          uThickness: {
            value: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.randomize)(10, 20)
          }
        }
      });
      line.polyline.mesh.position.z += 0.1;
      line.polyline.mesh.setParent(this.scene);
      (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(this.lines, l => l.polyline.resize());
      this.lines.push(line);
    });
  }
  onMouseMove(e) {
    this.mouse.set(e.x.end / this.renderer.width * 2 - 1, e.y.end / this.renderer.height * -2 + 1, 0);
  }
  onResize() {
    if (this.lines) (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(this.lines, line => line.polyline.resize());
  }
  update() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(this.lines, line => {
      for (let i = line.points.length - 1; i >= 0; i--) {
        if (!i) {
          this.tmp.copy(this.mouse).add(line.mouseOffset).sub(line.points[i]).multiply(line.spring);
          line.mouseVelocity.add(this.tmp).multiply(line.friction);
          line.points[i].add(line.mouseVelocity);
        } else {
          line.points[i].lerp(line.points[i - 1], 0.9);
        }
      }
      line.polyline.updateGeometry();
    });
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a87599177077f6da6234")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUM7VUFDeERGLElBQUksQ0FBQ0ksTUFBTSxDQUFDTCxDQUFDLENBQUMsQ0FBQzZCLEdBQUcsQ0FBQzVCLElBQUksQ0FBQ1AsYUFBYSxDQUFDO1FBQ3hDLENBQUMsTUFBTTtVQUNMTyxJQUFJLENBQUNJLE1BQU0sQ0FBQ0wsQ0FBQyxDQUFDLENBQUNnQyxJQUFJLENBQUMvQixJQUFJLENBQUNJLE1BQU0sQ0FBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUM5QztNQUNGO01BQ0FDLElBQUksQ0FBQ00sUUFBUSxDQUFDMEIsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUM5RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0N1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bGluZSwgVHJhbnNmb3JtLCBWZWMzLCBDb2xvciB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2N1cnNvci12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgeyBjdXJzb3JDb2xvciB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhXCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7IHJhbmRvbWl6ZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLmNvdW50ID0gMjBcbiAgICB0aGlzLmxpbmVzID0gW11cbiAgICB0aGlzLm1vdXNlVmVsb2NpdHkgPSBuZXcgVmVjMygpXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLnRtcCA9IG5ldyBWZWMzKClcblxuICAgIHRoaXMuY3JlYXRlUG9seWxpbmUoKVxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgY3JlYXRlUG9seWxpbmUoKSB7XG4gICAgZWFjaChjdXJzb3JDb2xvciwgKGNvbG9yLCBpKSA9PiB7XG4gICAgICBjb25zdCBsaW5lID0ge1xuICAgICAgICBzcHJpbmc6IHJhbmRvbWl6ZSgwLjAyLCAwLjA2KSxcbiAgICAgICAgZnJpY3Rpb246IHJhbmRvbWl6ZSgwLjcsIDAuOTUpLFxuICAgICAgICBtb3VzZVZlbG9jaXR5OiBuZXcgVmVjMygpLFxuICAgICAgICBtb3VzZU9mZnNldDogbmV3IFZlYzMocmFuZG9taXplKC0xLCAxKSAqIDAuMDA1KVxuICAgICAgfVxuICAgICAgdGhpcy5wb2ludHMgPSBsaW5lLnBvaW50cyA9IFtdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB0aGlzLnBvaW50cy5wdXNoKG5ldyBWZWMzKCkpXG4gICAgICBsaW5lLnBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKHRoaXMuZ2wsIHtcbiAgICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cyxcbiAgICAgICAgdmVydGV4LFxuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgIHVDb2xvcjogeyB2YWx1ZTogbmV3IENvbG9yKGNvbG9yKSB9LFxuICAgICAgICAgIHVUaGlja25lc3M6IHsgdmFsdWU6IHJhbmRvbWl6ZSgxMCwgMjApIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgbGluZS5wb2x5bGluZS5tZXNoLnBvc2l0aW9uLnogKz0gMC4xXG4gICAgICBsaW5lLnBvbHlsaW5lLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgICBlYWNoKHRoaXMubGluZXMsIGwgPT4gbC5wb2x5bGluZS5yZXNpemUoKSlcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKVxuICAgIH0pXG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5tb3VzZS5zZXQoXG4gICAgICAoZS54LmVuZCAvIHRoaXMucmVuZGVyZXIud2lkdGgpICogMiAtIDEsXG4gICAgICAoZS55LmVuZCAvIHRoaXMucmVuZGVyZXIuaGVpZ2h0KSAqIC0yICsgMSxcbiAgICAgIDBcbiAgICApXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5saW5lcykgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IGxpbmUucG9seWxpbmUucmVzaXplKCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSBsaW5lLnBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICB0aGlzLnRtcC5jb3B5KHRoaXMubW91c2UpLmFkZChsaW5lLm1vdXNlT2Zmc2V0KS5zdWIobGluZS5wb2ludHNbaV0pLm11bHRpcGx5KGxpbmUuc3ByaW5nKVxuICAgICAgICAgIGxpbmUubW91c2VWZWxvY2l0eS5hZGQodGhpcy50bXApLm11bHRpcGx5KGxpbmUuZnJpY3Rpb24pXG4gICAgICAgICAgbGluZS5wb2ludHNbaV0uYWRkKGxpbmUubW91c2VWZWxvY2l0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5lLnBvaW50c1tpXS5sZXJwKGxpbmUucG9pbnRzW2kgLSAxXSwgMC45KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaW5lLnBvbHlsaW5lLnVwZGF0ZUdlb21ldHJ5KClcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhODc1OTkxNzcwNzdmNmRhNjIzNFwiKSJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIlRyYW5zZm9ybSIsIlZlYzMiLCJDb2xvciIsInZlcnRleCIsImN1cnNvckNvbG9yIiwiZWFjaCIsInJhbmRvbWl6ZSIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJjb3VudCIsImxpbmVzIiwibW91c2VWZWxvY2l0eSIsIm1vdXNlIiwidG1wIiwiY3JlYXRlUG9seWxpbmUiLCJvblJlc2l6ZSIsImNvbG9yIiwiaSIsImxpbmUiLCJzcHJpbmciLCJmcmljdGlvbiIsIm1vdXNlT2Zmc2V0IiwicG9pbnRzIiwicHVzaCIsInBvbHlsaW5lIiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInVUaGlja25lc3MiLCJtZXNoIiwicG9zaXRpb24iLCJ6Iiwic2V0UGFyZW50IiwibCIsInJlc2l6ZSIsIm9uTW91c2VNb3ZlIiwiZSIsInNldCIsIngiLCJlbmQiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJ1cGRhdGUiLCJsZW5ndGgiLCJjb3B5IiwiYWRkIiwic3ViIiwibXVsdGlwbHkiLCJsZXJwIiwidXBkYXRlR2VvbWV0cnkiXSwic291cmNlUm9vdCI6IiJ9