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
/******/ 	__webpack_require__.h = () => ("13b4a3576dba29be9bdc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZTQ0YzhlNjViYjE3Y2JiMWRiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFRTtBQUNWO0FBQ2pCO0FBQ2tCO0FBRS9DLGlFQUFlLE1BQU07RUFDbkJRLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFPLENBQUMsRUFBRTtJQUNsRCxJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUloQixxQ0FBSSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDaUIsS0FBSyxHQUFHLElBQUlqQixxQ0FBSSxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDa0IsR0FBRyxHQUFHLElBQUlsQixxQ0FBSSxDQUFDLENBQUM7SUFFckIsSUFBSSxDQUFDbUIsY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUNqQjtFQUVBRCxjQUFjQSxDQUFBLEVBQUc7SUFDZmYsNENBQUksQ0FBQ0QsOENBQVcsRUFBRSxDQUFDa0IsS0FBSyxFQUFFQyxDQUFDLEtBQUs7TUFDOUIsTUFBTUMsSUFBSSxHQUFHO1FBQ1hYLE1BQU0sRUFBRVAsc0RBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO1FBQzVCUSxRQUFRLEVB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UCxhQUFhLENBQUNpQyxHQUFHLENBQUMsSUFBSSxDQUFDL0IsR0FBRyxDQUFDLENBQUNpQyxRQUFRLENBQUM1QixJQUFJLENBQUNWLFFBQVEsQ0FBQztVQUN4RFUsSUFBSSxDQUFDRSxNQUFNLENBQUNILENBQUMsQ0FBQyxDQUFDMkIsR0FBRyxDQUFDMUIsSUFBSSxDQUFDUCxhQUFhLENBQUM7UUFDeEMsQ0FBQyxNQUFNO1VBQ0xPLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLENBQUMsQ0FBQzhCLElBQUksQ0FBQzdCLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQzlDO01BQ0Y7TUFDQUMsSUFBSSxDQUFDSSxRQUFRLENBQUMwQixjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQ2xGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHlsaW5lLCBUcmFuc2Zvcm0sIFZlYzMsIENvbG9yIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvY3Vyc29yLXZlcnRleC5nbHNsXCJcbmltcG9ydCB7IGN1cnNvckNvbG9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgcmFuZG9taXplIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuc3ByaW5nID0gMC4wNlxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjg1XG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgdGhpcy5saW5lcyA9IFtdXG4gICAgdGhpcy5tb3VzZVZlbG9jaXR5ID0gbmV3IFZlYzMoKVxuICAgIHRoaXMubW91c2UgPSBuZXcgVmVjMygpXG4gICAgdGhpcy50bXAgPSBuZXcgVmVjMygpXG5cbiAgICB0aGlzLmNyZWF0ZVBvbHlsaW5lKClcbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZVBvbHlsaW5lKCkge1xuICAgIGVhY2goY3Vyc29yQ29sb3IsIChjb2xvciwgaSkgPT4ge1xuICAgICAgY29uc3QgbGluZSA9IHtcbiAgICAgICAgc3ByaW5nOiByYW5kb21pemUoMC4wMiwgMC4xKSxcbiAgICAgICAgZnJpY3Rpb246IHJhbmRvbWl6ZSgwLjcsIDAuOTUpLFxuICAgICAgICBtb3VzZVZlbG9jaXR5OiBuZXcgVmVjMygpLFxuICAgICAgICBtb3VzZU9mZnNldDogbmV3IFZlYzMocmFuZG9taXplKC0xLCAxKSAqIDAuMDIpXG4gICAgICB9XG4gICAgICB0aGlzLnBvaW50cyA9IGxpbmUucG9pbnRzID0gW11cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHRoaXMucG9pbnRzLnB1c2gobmV3IFZlYzMoKSlcbiAgICAgIGxpbmUucG9seWxpbmUgPSBuZXcgUG9seWxpbmUodGhpcy5nbCwge1xuICAgICAgICBwb2ludHM6IHRoaXMucG9pbnRzLFxuICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoY29sb3IpIH0sXG4gICAgICAgICAgdVRoaWNrbmVzczogeyB2YWx1ZTogcmFuZG9taXplKDIwLCA1MCkgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBsaW5lLnBvbHlsaW5lLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgICBsaW5lLnBvbHlsaW5lLm1lc2gucG9zaXRpb24ueiA9IC0wLjFcbiAgICAgIGVhY2godGhpcy5saW5lcywgbCA9PiBsLnBvbHlsaW5lLnJlc2l6ZSgpKVxuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpXG4gICAgfSlcblxuICAgIC8vIHRoaXMucG9seWxpbmUucmVzaXplKClcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdXNlLnNldChcbiAgICAgIChlLnguZW5kIC8gdGhpcy5yZW5kZXJlci53aWR0aCkgKiAyIC0gMSxcbiAgICAgIChlLnkuZW5kIC8gdGhpcy5yZW5kZXJlci5oZWlnaHQpICogLTIgKyAxLFxuICAgICAgMFxuICAgIClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLmxpbmVzKSBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4gbGluZS5wb2x5bGluZS5yZXNpemUoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IGxpbmUucG9pbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmICghaSkge1xuICAgICAgICAgIHRoaXMudG1wLmNvcHkodGhpcy5tb3VzZSkuYWRkKGxpbmUubW91c2VPZmZzZXQpLnN1YihsaW5lLnBvaW50c1tpXSkubXVsdGlwbHkobGluZS5zcHJpbmcpXG4gICAgICAgICAgbGluZS5tb3VzZVZlbG9jaXR5LmFkZCh0aGlzLnRtcCkubXVsdGlwbHkobGluZS5mcmljdGlvbilcbiAgICAgICAgICBsaW5lLnBvaW50c1tpXS5hZGQobGluZS5tb3VzZVZlbG9jaXR5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmUucG9pbnRzW2ldLmxlcnAobGluZS5wb2ludHNbaSAtIDFdLCAwLjkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpbmUucG9seWxpbmUudXBkYXRlR2VvbWV0cnkoKVxuICAgIH0pXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzYjRhMzU3NmRiYTI5YmU5YmRjXCIpIl0sIm5hbWVzIjpbIlBvbHlsaW5lIiwiVHJhbnNmb3JtIiwiVmVjMyIsIkNvbG9yIiwidmVydGV4IiwiY3Vyc29yQ29sb3IiLCJlYWNoIiwicmFuZG9taXplIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJyZW5kZXJlciIsImNhbWVyYSIsInNwcmluZyIsImZyaWN0aW9uIiwiY291bnQiLCJsaW5lcyIsIm1vdXNlVmVsb2NpdHkiLCJtb3VzZSIsInRtcCIsImNyZWF0ZVBvbHlsaW5lIiwib25SZXNpemUiLCJjb2xvciIsImkiLCJsaW5lIiwibW91c2VPZmZzZXQiLCJwb2ludHMiLCJwdXNoIiwicG9seWxpbmUiLCJ1bmlmb3JtcyIsInVDb2xvciIsInZhbHVlIiwidVRoaWNrbmVzcyIsIm1lc2giLCJzZXRQYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJsIiwicmVzaXplIiwib25Nb3VzZU1vdmUiLCJlIiwic2V0IiwieCIsImVuZCIsIndpZHRoIiwieSIsImhlaWdodCIsInVwZGF0ZSIsImxlbmd0aCIsImNvcHkiLCJhZGQiLCJzdWIiLCJtdWx0aXBseSIsImxlcnAiLCJ1cGRhdGVHZW9tZXRyeSJdLCJzb3VyY2VSb290IjoiIn0=