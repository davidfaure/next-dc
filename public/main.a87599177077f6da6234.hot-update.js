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
/******/ 	__webpack_require__.h = () => ("62561327248e6ba5ab48")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUM7VUFDeERGLElBQUksQ0FBQ0ksTUFBTSxDQUFDTCxDQUFDLENBQUMsQ0FBQzZCLEdBQUcsQ0FBQzVCLElBQUksQ0FBQ1AsYUFBYSxDQUFDO1FBQ3hDLENBQUMsTUFBTTtVQUNMTyxJQUFJLENBQUNJLE1BQU0sQ0FBQ0wsQ0FBQyxDQUFDLENBQUNnQyxJQUFJLENBQUMvQixJQUFJLENBQUNJLE1BQU0sQ0FBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUM5QztNQUNGO01BQ0FDLElBQUksQ0FBQ00sUUFBUSxDQUFDMEIsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUM5RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0N1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bGluZSwgVmVjMywgQ29sb3IgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9jdXJzb3ItdmVydGV4Lmdsc2xcIlxuaW1wb3J0IHsgY3Vyc29yQ29sb3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YVwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyByYW5kb21pemUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciwgY2FtZXJhIH0pIHtcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgdGhpcy5saW5lcyA9IFtdXG4gICAgdGhpcy5tb3VzZVZlbG9jaXR5ID0gbmV3IFZlYzMoKVxuICAgIHRoaXMubW91c2UgPSBuZXcgVmVjMygpXG4gICAgdGhpcy50bXAgPSBuZXcgVmVjMygpXG5cbiAgICB0aGlzLmNyZWF0ZVBvbHlsaW5lKClcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZVBvbHlsaW5lKCkge1xuICAgIGVhY2goY3Vyc29yQ29sb3IsIChjb2xvciwgaSkgPT4ge1xuICAgICAgY29uc3QgbGluZSA9IHtcbiAgICAgICAgc3ByaW5nOiByYW5kb21pemUoMC4wMiwgMC4wNiksXG4gICAgICAgIGZyaWN0aW9uOiByYW5kb21pemUoMC43LCAwLjk1KSxcbiAgICAgICAgbW91c2VWZWxvY2l0eTogbmV3IFZlYzMoKSxcbiAgICAgICAgbW91c2VPZmZzZXQ6IG5ldyBWZWMzKHJhbmRvbWl6ZSgtMSwgMSkgKiAwLjAwNSlcbiAgICAgIH1cbiAgICAgIHRoaXMucG9pbnRzID0gbGluZS5wb2ludHMgPSBbXVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykgdGhpcy5wb2ludHMucHVzaChuZXcgVmVjMygpKVxuICAgICAgbGluZS5wb2x5bGluZSA9IG5ldyBQb2x5bGluZSh0aGlzLmdsLCB7XG4gICAgICAgIHBvaW50czogdGhpcy5wb2ludHMsXG4gICAgICAgIHZlcnRleCxcbiAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICB1Q29sb3I6IHsgdmFsdWU6IG5ldyBDb2xvcihjb2xvcikgfSxcbiAgICAgICAgICB1VGhpY2tuZXNzOiB7IHZhbHVlOiByYW5kb21pemUoMTAsIDIwKSB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGxpbmUucG9seWxpbmUubWVzaC5wb3NpdGlvbi56ICs9IDAuMVxuICAgICAgbGluZS5wb2x5bGluZS5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICAgICAgZWFjaCh0aGlzLmxpbmVzLCBsID0+IGwucG9seWxpbmUucmVzaXplKCkpXG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSlcbiAgICB9KVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW91c2Uuc2V0KFxuICAgICAgKGUueC5lbmQgLyB0aGlzLnJlbmRlcmVyLndpZHRoKSAqIDIgLSAxLFxuICAgICAgKGUueS5lbmQgLyB0aGlzLnJlbmRlcmVyLmhlaWdodCkgKiAtMiArIDEsXG4gICAgICAwXG4gICAgKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMubGluZXMpIGVhY2godGhpcy5saW5lcywgbGluZSA9PiBsaW5lLnBvbHlsaW5lLnJlc2l6ZSgpKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGVhY2godGhpcy5saW5lcywgbGluZSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gbGluZS5wb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgdGhpcy50bXAuY29weSh0aGlzLm1vdXNlKS5hZGQobGluZS5tb3VzZU9mZnNldCkuc3ViKGxpbmUucG9pbnRzW2ldKS5tdWx0aXBseShsaW5lLnNwcmluZylcbiAgICAgICAgICBsaW5lLm1vdXNlVmVsb2NpdHkuYWRkKHRoaXMudG1wKS5tdWx0aXBseShsaW5lLmZyaWN0aW9uKVxuICAgICAgICAgIGxpbmUucG9pbnRzW2ldLmFkZChsaW5lLm1vdXNlVmVsb2NpdHkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZS5wb2ludHNbaV0ubGVycChsaW5lLnBvaW50c1tpIC0gMV0sIDAuOSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGluZS5wb2x5bGluZS51cGRhdGVHZW9tZXRyeSgpXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjI1NjEzMjcyNDhlNmJhNWFiNDhcIikiXSwibmFtZXMiOlsiUG9seWxpbmUiLCJWZWMzIiwiQ29sb3IiLCJ2ZXJ0ZXgiLCJjdXJzb3JDb2xvciIsImVhY2giLCJyYW5kb21pemUiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwiY291bnQiLCJsaW5lcyIsIm1vdXNlVmVsb2NpdHkiLCJtb3VzZSIsInRtcCIsImNyZWF0ZVBvbHlsaW5lIiwib25SZXNpemUiLCJjb2xvciIsImkiLCJsaW5lIiwic3ByaW5nIiwiZnJpY3Rpb24iLCJtb3VzZU9mZnNldCIsInBvaW50cyIsInB1c2giLCJwb2x5bGluZSIsInVuaWZvcm1zIiwidUNvbG9yIiwidmFsdWUiLCJ1VGhpY2tuZXNzIiwibWVzaCIsInBvc2l0aW9uIiwieiIsInNldFBhcmVudCIsImwiLCJyZXNpemUiLCJvbk1vdXNlTW92ZSIsImUiLCJzZXQiLCJ4IiwiZW5kIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidXBkYXRlIiwibGVuZ3RoIiwiY29weSIsImFkZCIsInN1YiIsIm11bHRpcGx5IiwibGVycCIsInVwZGF0ZUdlb21ldHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==