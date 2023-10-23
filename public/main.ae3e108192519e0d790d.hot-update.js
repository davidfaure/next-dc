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
/******/ 	__webpack_require__.h = () => ("9b17155ac6e90ed736f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZTNlMTA4MTkyNTE5ZTBkNzkwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFRTtBQUNWO0FBQ2pCO0FBQ2tCO0FBRS9DLGlFQUFlLE1BQU07RUFDbkJRLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFPLENBQUMsRUFBRTtJQUNsRCxJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUloQixxQ0FBSSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDaUIsS0FBSyxHQUFHLElBQUlqQixxQ0FBSSxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDa0IsR0FBRyxHQUFHLElBQUlsQixxQ0FBSSxDQUFDLENBQUM7SUFFckIsSUFBSSxDQUFDbUIsY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUNqQjtFQUVBRCxjQUFjQSxDQUFBLEVBQUc7SUFDZmYsNENBQUksQ0FBQ0QsOENBQVcsRUFBRSxDQUFDa0IsS0FBSyxFQUFFQyxDQUFDLEtBQUs7TUFDOUIsTUFBTUMsSUFBSSxHQUFHO1FBQ1hYLE1BQU0sRUFBRVAsc0RBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQzVCUSxRQUFRLEVB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QUNWLFFBQVEsQ0FBQztVQUN4RFUsSUFBSSxDQUFDRSxNQUFNLENBQUNILENBQUMsQ0FBQyxDQUFDeUIsR0FBRyxDQUFDeEIsSUFBSSxDQUFDUCxhQUFhLENBQUM7UUFDeEMsQ0FBQyxNQUFNO1VBQ0xPLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLENBQUMsQ0FBQzRCLElBQUksQ0FBQzNCLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQzlDO01BQ0Y7TUFDQUMsSUFBSSxDQUFDSSxRQUFRLENBQUN3QixjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQ2pGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHlsaW5lLCBUcmFuc2Zvcm0sIFZlYzMsIENvbG9yIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvY3Vyc29yLXZlcnRleC5nbHNsXCJcbmltcG9ydCB7IGN1cnNvckNvbG9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgcmFuZG9taXplIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuc3ByaW5nID0gMC4wNlxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjg1XG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgdGhpcy5saW5lcyA9IFtdXG4gICAgdGhpcy5tb3VzZVZlbG9jaXR5ID0gbmV3IFZlYzMoKVxuICAgIHRoaXMubW91c2UgPSBuZXcgVmVjMygpXG4gICAgdGhpcy50bXAgPSBuZXcgVmVjMygpXG5cbiAgICB0aGlzLmNyZWF0ZVBvbHlsaW5lKClcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZVBvbHlsaW5lKCkge1xuICAgIGVhY2goY3Vyc29yQ29sb3IsIChjb2xvciwgaSkgPT4ge1xuICAgICAgY29uc3QgbGluZSA9IHtcbiAgICAgICAgc3ByaW5nOiByYW5kb21pemUoMC4wMiwgMC4xKSxcbiAgICAgICAgZnJpY3Rpb246IHJhbmRvbWl6ZSgwLjcsIDAuOTUpLFxuICAgICAgICBtb3VzZVZlbG9jaXR5OiBuZXcgVmVjMygpLFxuICAgICAgICBtb3VzZU9mZnNldDogbmV3IFZlYzMocmFuZG9taXplKC0xLCAxKSAqIDAuMDIpXG4gICAgICB9XG4gICAgICB0aGlzLnBvaW50cyA9IGxpbmUucG9pbnRzID0gW11cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHRoaXMucG9pbnRzLnB1c2gobmV3IFZlYzMoKSlcbiAgICAgIGxpbmUucG9seWxpbmUgPSBuZXcgUG9seWxpbmUodGhpcy5nbCwge1xuICAgICAgICBwb2ludHM6IHRoaXMucG9pbnRzLFxuICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoY29sb3IpIH0sXG4gICAgICAgICAgdVRoaWNrbmVzczogeyB2YWx1ZTogcmFuZG9taXplKDIwLCA1MCkgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBsaW5lLnBvbHlsaW5lLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgICBlYWNoKHRoaXMubGluZXMsIGwgPT4gbC5wb2x5bGluZS5yZXNpemUoKSlcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKVxuICAgIH0pXG5cbiAgICAvLyB0aGlzLnBvbHlsaW5lLnJlc2l6ZSgpXG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5tb3VzZS5zZXQoXG4gICAgICAoZS54LmVuZCAvIHRoaXMucmVuZGVyZXIud2lkdGgpICogMiAtIDEsXG4gICAgICAoZS55LmVuZCAvIHRoaXMucmVuZGVyZXIuaGVpZ2h0KSAqIC0yICsgMSxcbiAgICAgIDBcbiAgICApXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5saW5lcykgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IGxpbmUucG9seWxpbmUucmVzaXplKCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgZWFjaCh0aGlzLmxpbmVzLCBsaW5lID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSBsaW5lLnBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICB0aGlzLnRtcC5jb3B5KHRoaXMubW91c2UpLmFkZChsaW5lLm1vdXNlT2Zmc2V0KS5zdWIobGluZS5wb2ludHNbaV0pLm11bHRpcGx5KGxpbmUuc3ByaW5nKVxuICAgICAgICAgIGxpbmUubW91c2VWZWxvY2l0eS5hZGQodGhpcy50bXApLm11bHRpcGx5KGxpbmUuZnJpY3Rpb24pXG4gICAgICAgICAgbGluZS5wb2ludHNbaV0uYWRkKGxpbmUubW91c2VWZWxvY2l0eSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5lLnBvaW50c1tpXS5sZXJwKGxpbmUucG9pbnRzW2kgLSAxXSwgMC45KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaW5lLnBvbHlsaW5lLnVwZGF0ZUdlb21ldHJ5KClcbiAgICB9KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YjE3MTU1YWM2ZTkwZWQ3MzZmMlwiKSJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIlRyYW5zZm9ybSIsIlZlYzMiLCJDb2xvciIsInZlcnRleCIsImN1cnNvckNvbG9yIiwiZWFjaCIsInJhbmRvbWl6ZSIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJzcHJpbmciLCJmcmljdGlvbiIsImNvdW50IiwibGluZXMiLCJtb3VzZVZlbG9jaXR5IiwibW91c2UiLCJ0bXAiLCJjcmVhdGVQb2x5bGluZSIsIm9uUmVzaXplIiwiY29sb3IiLCJpIiwibGluZSIsIm1vdXNlT2Zmc2V0IiwicG9pbnRzIiwicHVzaCIsInBvbHlsaW5lIiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInVUaGlja25lc3MiLCJtZXNoIiwic2V0UGFyZW50IiwibCIsInJlc2l6ZSIsIm9uTW91c2VNb3ZlIiwiZSIsInNldCIsIngiLCJlbmQiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJ1cGRhdGUiLCJsZW5ndGgiLCJjb3B5IiwiYWRkIiwic3ViIiwibXVsdGlwbHkiLCJsZXJwIiwidXBkYXRlR2VvbWV0cnkiXSwic291cmNlUm9vdCI6IiJ9