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
    this.spring = 0.06;
    this.friction = 0.85;
    this.count = 20;
    this.lines = [];
    this.mouseVelocity = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.mouse = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.tmp = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.createPolyline();
    this.onResize();
  }
  createPolyline() {
    this.gl.disable(this.gl.DEPT_TEST);
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(_data__WEBPACK_IMPORTED_MODULE_1__.cursorColor, (color, i) => {
      const line = {
        spring: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.randomize)(0.02, 0.1),
        friction: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.randomize)(0.7, 0.95),
        mouseVelocity: new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3(),
        mouseOffset: new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3((0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.randomize)(-1, 1) * 0.02)
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
            value: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.randomize)(20, 50)
          }
        }
      });
      line.polyline.mesh.setParent(this.scene);
      line.polyline.mesh.position.z = -0.1;
      (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(this.lines, l => l.polyline.resize());
      this.lines.push(line);
    });

    // this.polyline.resize()
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
/******/ 	__webpack_require__.h = () => ("1fe60e8f27a0f51bf89d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQyxDQUFDLENBQUM2QixRQUFRLENBQUM1QixJQUFJLENBQUNiLE1BQU0sQ0FBQztVQUN6RmEsSUFBSSxDQUFDVCxhQUFhLENBQUNtQyxHQUFHLENBQUMsSUFBSSxDQUFDakMsR0FBRyxDQUFDLENBQUNtQyxRQUFRLENBQUM1QixJQUFJLENBQUNaLFFBQVEsQ0FBQztVQUN4RFksSUFBSSxDQUFDRSxNQUFNLENBQUNILENBQUMsQ0FBQyxDQUFDMkIsR0FBRyxDQUFDMUIsSUFBSSxDQUFDVCxhQUFhLENBQUM7UUFDeEMsQ0FBQyxNQUFNO1VBQ0xTLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLENBQUMsQ0FBQzhCLElBQUksQ0FBQzdCLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQzlDO01BQ0Y7TUFDQUMsSUFBSSxDQUFDSSxRQUFRLENBQUMwQixjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQ25GQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHlsaW5lLCBUcmFuc2Zvcm0sIFZlYzMsIENvbG9yIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvY3Vyc29yLXZlcnRleC5nbHNsXCJcbmltcG9ydCB7IGN1cnNvckNvbG9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgcmFuZG9taXplIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuc3ByaW5nID0gMC4wNlxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjg1XG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgdGhpcy5saW5lcyA9IFtdXG4gICAgdGhpcy5tb3VzZVZlbG9jaXR5ID0gbmV3IFZlYzMoKVxuICAgIHRoaXMubW91c2UgPSBuZXcgVmVjMygpXG4gICAgdGhpcy50bXAgPSBuZXcgVmVjMygpXG5cbiAgICB0aGlzLmNyZWF0ZVBvbHlsaW5lKClcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZVBvbHlsaW5lKCkge1xuICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLkRFUFRfVEVTVClcbiAgICBlYWNoKGN1cnNvckNvbG9yLCAoY29sb3IsIGkpID0+IHtcbiAgICAgIGNvbnN0IGxpbmUgPSB7XG4gICAgICAgIHNwcmluZzogcmFuZG9taXplKDAuMDIsIDAuMSksXG4gICAgICAgIGZyaWN0aW9uOiByYW5kb21pemUoMC43LCAwLjk1KSxcbiAgICAgICAgbW91c2VWZWxvY2l0eTogbmV3IFZlYzMoKSxcbiAgICAgICAgbW91c2VPZmZzZXQ6IG5ldyBWZWMzKHJhbmRvbWl6ZSgtMSwgMSkgKiAwLjAyKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2ludHMgPSBsaW5lLnBvaW50cyA9IFtdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB0aGlzLnBvaW50cy5wdXNoKG5ldyBWZWMzKCkpXG4gICAgICBsaW5lLnBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKHRoaXMuZ2wsIHtcbiAgICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cyxcbiAgICAgICAgdmVydGV4LFxuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgIHVDb2xvcjogeyB2YWx1ZTogbmV3IENvbG9yKGNvbG9yKSB9LFxuICAgICAgICAgIHVUaGlja25lc3M6IHsgdmFsdWU6IHJhbmRvbWl6ZSgyMCwgNTApIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgbGluZS5wb2x5bGluZS5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICAgICAgbGluZS5wb2x5bGluZS5tZXNoLnBvc2l0aW9uLnogPSAtMC4xXG4gICAgICBlYWNoKHRoaXMubGluZXMsIGwgPT4gbC5wb2x5bGluZS5yZXNpemUoKSlcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKVxuICAgIH0pXG5cbiAgICAvLyB0aGlzLnBvbHlsaW5lLnJlc2l6ZSgpXG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5tb3VzZS5zZXQoXG4gICAgICAoZS54LmVuZCAvIHRoaXMucmVuZGVyZXIud2lkdGgpICogMiAtIDEsXG4gICAgICAoZS55LmVuZCAvIHRoaXMucmVuZGVyZXIuaGVpZ2h0KSAqIC0yICsgMSxcbiAgICAgIDBcbiAgICApXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5saW5lcykgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IGxpbmUucG9seWxpbmUucmVzaXplKCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSBsaW5lLnBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICB0aGlzLnRtcC5jb3B5KHRoaXMubW91c2UpLmFkZChsaW5lLm1vdXNlT2Zmc2V0KS5zdWIobGluZS5wb2ludHNbaV0pLm11bHRpcGx5KGxpbmUuc3ByaW5nKVxuICAgICAgICAgIGxpbmUubW91c2VWZWxvY2l0eS5hZGQodGhpcy50bXApLm11bHRpcGx5KGxpbmUuZnJpY3Rpb24pXG4gICAgICAgICAgbGluZS5wb2ludHNbaV0uYWRkKGxpbmUubW91c2VWZWxvY2l0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5lLnBvaW50c1tpXS5sZXJwKGxpbmUucG9pbnRzW2kgLSAxXSwgMC45KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaW5lLnBvbHlsaW5lLnVwZGF0ZUdlb21ldHJ5KClcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZmU2MGU4ZjI3YTBmNTFiZjg5ZFwiKSJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIlRyYW5zZm9ybSIsIlZlYzMiLCJDb2xvciIsInZlcnRleCIsImN1cnNvckNvbG9yIiwiZWFjaCIsInJhbmRvbWl6ZSIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJzcHJpbmciLCJmcmljdGlvbiIsImNvdW50IiwibGluZXMiLCJtb3VzZVZlbG9jaXR5IiwibW91c2UiLCJ0bXAiLCJjcmVhdGVQb2x5bGluZSIsIm9uUmVzaXplIiwiZGlzYWJsZSIsIkRFUFRfVEVTVCIsImNvbG9yIiwiaSIsImxpbmUiLCJtb3VzZU9mZnNldCIsInBvaW50cyIsInB1c2giLCJwb2x5bGluZSIsInVuaWZvcm1zIiwidUNvbG9yIiwidmFsdWUiLCJ1VGhpY2tuZXNzIiwibWVzaCIsInNldFBhcmVudCIsInBvc2l0aW9uIiwieiIsImwiLCJyZXNpemUiLCJvbk1vdXNlTW92ZSIsImUiLCJzZXQiLCJ4IiwiZW5kIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidXBkYXRlIiwibGVuZ3RoIiwiY29weSIsImFkZCIsInN1YiIsIm11bHRpcGx5IiwibGVycCIsInVwZGF0ZUdlb21ldHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==