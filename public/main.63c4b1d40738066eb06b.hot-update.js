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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Polyline.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
/* harmony import */ var _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/cursor-vertex.glsl */ "./app/shaders/cursor-vertex.glsl");
/* harmony import */ var utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/math */ "./app/utils/math.js");



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
    this.mouseVelocity = new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3();
    this.mouse = new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3();
    this.tmp = new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3();
    this.createPolyline();
  }
  createPolyline() {
    for (let i = 0; i < this.count; i++) this.points.push(new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3());
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
  onMouseMove(e) {
    this.mouse.set(e.x.end / this.renderer.width * 2 - 1, e.y.end / this.renderer.height * -2 + 1, 0);
  }
  onResize() {
    if (this.polyline) this.polyline.resize();
  }
  update() {
    for (let i = this.points.length - 1; i >= 0; i--) {
      if (!i) {
        this.tmp.copy(this.mouse).sub(this.points[i]).multiply(this.spring);
        this.mouseVelocity.add(this.tmp).multiply(this.friction);
        this.points[i].add(this.mouseVelocity);
      } else {
        this.points[i].lerp(this.points[i - 1], 0.9);
      }
    }
    this.polyline.updateGeometry();
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7222ba319305308a7d8d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDeUIsR0FBRyxDQUFDLElBQUksQ0FBQzNCLE1BQU0sQ0FBQ0ssQ0FBQyxDQUFDLENBQUMsQ0FBQ3VCLFFBQVEsQ0FBQyxJQUFJLENBQUMvQixNQUFNLENBQUM7UUFDbkUsSUFBSSxDQUFDSSxhQUFhLENBQUM0QixHQUFHLENBQUMsSUFBSSxDQUFDMUIsR0FBRyxDQUFDLENBQUN5QixRQUFRLENBQUMsSUFBSSxDQUFDOUIsUUFBUSxDQUFDO1FBQ3hELElBQUksQ0FBQ0UsTUFBTSxDQUFDSyxDQUFDLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxJQUFJLENBQUM1QixhQUFhLENBQUM7TUFDeEMsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDRCxNQUFNLENBQUNLLENBQUMsQ0FBQyxDQUFDZixJQUFJLENBQUMsSUFBSSxDQUFDVSxNQUFNLENBQUNLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDOUM7SUFDRjtJQUNBLElBQUksQ0FBQ0UsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLENBQUM7RUFDaEM7QUFDRjs7Ozs7Ozs7VUMvREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0N1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bGluZSwgVHJhbnNmb3JtLCBWZWMzLCBDb2xvciB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2N1cnNvci12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuc3ByaW5nID0gMC4wNlxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjg1XG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIHRoaXMubW91c2VWZWxvY2l0eSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLm1vdXNlID0gbmV3IFZlYzMoKVxuICAgIHRoaXMudG1wID0gbmV3IFZlYzMoKVxuXG4gICAgdGhpcy5jcmVhdGVQb2x5bGluZSgpXG4gIH1cblxuICBjcmVhdGVQb2x5bGluZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykgdGhpcy5wb2ludHMucHVzaChuZXcgVmVjMygpKVxuICAgIHRoaXMucG9seWxpbmUgPSBuZXcgUG9seWxpbmUodGhpcy5nbCwge1xuICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cyxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVDb2xvcjogeyB2YWx1ZTogbmV3IENvbG9yKFwiIzFiMWIxYlwiKSB9LFxuICAgICAgICB1VGhpY2tuZXNzOiB7IHZhbHVlOiA0MCB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMucG9seWxpbmUubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICB0aGlzLnBvbHlsaW5lLnJlc2l6ZSgpXG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5tb3VzZS5zZXQoXG4gICAgICAoZS54LmVuZCAvIHRoaXMucmVuZGVyZXIud2lkdGgpICogMiAtIDEsXG4gICAgICAoZS55LmVuZCAvIHRoaXMucmVuZGVyZXIuaGVpZ2h0KSAqIC0yICsgMSxcbiAgICAgIDBcbiAgICApXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZSkgdGhpcy5wb2x5bGluZS5yZXNpemUoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCFpKSB7XG4gICAgICAgIHRoaXMudG1wLmNvcHkodGhpcy5tb3VzZSkuc3ViKHRoaXMucG9pbnRzW2ldKS5tdWx0aXBseSh0aGlzLnNwcmluZylcbiAgICAgICAgdGhpcy5tb3VzZVZlbG9jaXR5LmFkZCh0aGlzLnRtcCkubXVsdGlwbHkodGhpcy5mcmljdGlvbilcbiAgICAgICAgdGhpcy5wb2ludHNbaV0uYWRkKHRoaXMubW91c2VWZWxvY2l0eSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9pbnRzW2ldLmxlcnAodGhpcy5wb2ludHNbaSAtIDFdLCAwLjkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucG9seWxpbmUudXBkYXRlR2VvbWV0cnkoKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MjIyYmEzMTkzMDUzMDhhN2Q4ZFwiKSJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIlRyYW5zZm9ybSIsIlZlYzMiLCJDb2xvciIsInZlcnRleCIsImxlcnAiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwic3ByaW5nIiwiZnJpY3Rpb24iLCJjb3VudCIsInBvaW50cyIsIm1vdXNlVmVsb2NpdHkiLCJtb3VzZSIsInRtcCIsImNyZWF0ZVBvbHlsaW5lIiwiaSIsInB1c2giLCJwb2x5bGluZSIsInVuaWZvcm1zIiwidUNvbG9yIiwidmFsdWUiLCJ1VGhpY2tuZXNzIiwibWVzaCIsInNldFBhcmVudCIsInJlc2l6ZSIsIm9uTW91c2VNb3ZlIiwiZSIsInNldCIsIngiLCJlbmQiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJvblJlc2l6ZSIsInVwZGF0ZSIsImxlbmd0aCIsImNvcHkiLCJzdWIiLCJtdWx0aXBseSIsImFkZCIsInVwZGF0ZUdlb21ldHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==