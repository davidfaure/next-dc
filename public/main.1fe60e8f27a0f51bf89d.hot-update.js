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
    // this.gl.disable(this.gl.DEPT_TEST)
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
/******/ 	__webpack_require__.h = () => ("6b363b0f11adc823865a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZmU2MGU4ZjI3YTBmNTFiZjg5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFRTtBQUNWO0FBQ2pCO0FBQ2tCO0FBRS9DLGlFQUFlLE1BQU07RUFDbkJRLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFPLENBQUMsRUFBRTtJQUNsRCxJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUloQixxQ0FBSSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDaUIsS0FBSyxHQUFHLElBQUlqQixxQ0FBSSxDQUFDLENBQUM7SUFDdkIsSUFBSSxDQUFDa0IsR0FBRyxHQUFHLElBQUlsQixxQ0FBSSxDQUFDLENBQUM7SUFFckIsSUFBSSxDQUFDbUIsY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUNqQjtFQUVBRCxjQUFjQSxDQUFBLEVBQUc7SUFDZjtJQUNBZiw0Q0FBSSxDQUFDRCw4Q0FBVyxFQUFFLENBQUNrQixLQUFLLEVBQUVDLENBQUMsS0FBSztNQUM5QixNQUFNQyxJQUFJLEdBQUc7UUFDWFgsTUFBTSxFQUFFUCxzREFBUyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7UUFDNUJRLFFB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LENBQUNQLGFBQWEsQ0FBQ2lDLEdBQUcsQ0FBQyxJQUFJLENBQUMvQixHQUFHLENBQUMsQ0FBQ2lDLFFBQVEsQ0FBQzVCLElBQUksQ0FBQ1YsUUFBUSxDQUFDO1VBQ3hEVSxJQUFJLENBQUNFLE1BQU0sQ0FBQ0gsQ0FBQyxDQUFDLENBQUMyQixHQUFHLENBQUMxQixJQUFJLENBQUNQLGFBQWEsQ0FBQztRQUN4QyxDQUFDLE1BQU07VUFDTE8sSUFBSSxDQUFDRSxNQUFNLENBQUNILENBQUMsQ0FBQyxDQUFDOEIsSUFBSSxDQUFDN0IsSUFBSSxDQUFDRSxNQUFNLENBQUNILENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDOUM7TUFDRjtNQUNBQyxJQUFJLENBQUNJLFFBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztFQUNKO0FBQ0Y7Ozs7Ozs7O1VDbkZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9DdXJzb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seWxpbmUsIFRyYW5zZm9ybSwgVmVjMywgQ29sb3IgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9jdXJzb3ItdmVydGV4Lmdsc2xcIlxuaW1wb3J0IHsgY3Vyc29yQ29sb3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YVwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyByYW5kb21pemUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciwgY2FtZXJhIH0pIHtcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXG4gICAgdGhpcy5zcHJpbmcgPSAwLjA2XG4gICAgdGhpcy5mcmljdGlvbiA9IDAuODVcbiAgICB0aGlzLmNvdW50ID0gMjBcbiAgICB0aGlzLmxpbmVzID0gW11cbiAgICB0aGlzLm1vdXNlVmVsb2NpdHkgPSBuZXcgVmVjMygpXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLnRtcCA9IG5ldyBWZWMzKClcblxuICAgIHRoaXMuY3JlYXRlUG9seWxpbmUoKVxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgY3JlYXRlUG9seWxpbmUoKSB7XG4gICAgLy8gdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuREVQVF9URVNUKVxuICAgIGVhY2goY3Vyc29yQ29sb3IsIChjb2xvciwgaSkgPT4ge1xuICAgICAgY29uc3QgbGluZSA9IHtcbiAgICAgICAgc3ByaW5nOiByYW5kb21pemUoMC4wMiwgMC4xKSxcbiAgICAgICAgZnJpY3Rpb246IHJhbmRvbWl6ZSgwLjcsIDAuOTUpLFxuICAgICAgICBtb3VzZVZlbG9jaXR5OiBuZXcgVmVjMygpLFxuICAgICAgICBtb3VzZU9mZnNldDogbmV3IFZlYzMocmFuZG9taXplKC0xLCAxKSAqIDAuMDIpXG4gICAgICB9XG4gICAgICB0aGlzLnBvaW50cyA9IGxpbmUucG9pbnRzID0gW11cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHRoaXMucG9pbnRzLnB1c2gobmV3IFZlYzMoKSlcbiAgICAgIGxpbmUucG9seWxpbmUgPSBuZXcgUG9seWxpbmUodGhpcy5nbCwge1xuICAgICAgICBwb2ludHM6IHRoaXMucG9pbnRzLFxuICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoY29sb3IpIH0sXG4gICAgICAgICAgdVRoaWNrbmVzczogeyB2YWx1ZTogcmFuZG9taXplKDIwLCA1MCkgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBsaW5lLnBvbHlsaW5lLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgICBsaW5lLnBvbHlsaW5lLm1lc2gucG9zaXRpb24ueiA9IC0wLjFcbiAgICAgIGVhY2godGhpcy5saW5lcywgbCA9PiBsLnBvbHlsaW5lLnJlc2l6ZSgpKVxuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpXG4gICAgfSlcblxuICAgIC8vIHRoaXMucG9seWxpbmUucmVzaXplKClcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdXNlLnNldChcbiAgICAgIChlLnguZW5kIC8gdGhpcy5yZW5kZXJlci53aWR0aCkgKiAyIC0gMSxcbiAgICAgIChlLnkuZW5kIC8gdGhpcy5yZW5kZXJlci5oZWlnaHQpICogLTIgKyAxLFxuICAgICAgMFxuICAgIClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLmxpbmVzKSBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4gbGluZS5wb2x5bGluZS5yZXNpemUoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IGxpbmUucG9pbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmICghaSkge1xuICAgICAgICAgIHRoaXMudG1wLmNvcHkodGhpcy5tb3VzZSkuYWRkKGxpbmUubW91c2VPZmZzZXQpLnN1YihsaW5lLnBvaW50c1tpXSkubXVsdGlwbHkobGluZS5zcHJpbmcpXG4gICAgICAgICAgbGluZS5tb3VzZVZlbG9jaXR5LmFkZCh0aGlzLnRtcCkubXVsdGlwbHkobGluZS5mcmljdGlvbilcbiAgICAgICAgICBsaW5lLnBvaW50c1tpXS5hZGQobGluZS5tb3VzZVZlbG9jaXR5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmUucG9pbnRzW2ldLmxlcnAobGluZS5wb2ludHNbaSAtIDFdLCAwLjkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpbmUucG9seWxpbmUudXBkYXRlR2VvbWV0cnkoKVxuICAgIH0pXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZiMzYzYjBmMTFhZGM4MjM4NjVhXCIpIl0sIm5hbWVzIjpbIlBvbHlsaW5lIiwiVHJhbnNmb3JtIiwiVmVjMyIsIkNvbG9yIiwidmVydGV4IiwiY3Vyc29yQ29sb3IiLCJlYWNoIiwicmFuZG9taXplIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJyZW5kZXJlciIsImNhbWVyYSIsInNwcmluZyIsImZyaWN0aW9uIiwiY291bnQiLCJsaW5lcyIsIm1vdXNlVmVsb2NpdHkiLCJtb3VzZSIsInRtcCIsImNyZWF0ZVBvbHlsaW5lIiwib25SZXNpemUiLCJjb2xvciIsImkiLCJsaW5lIiwibW91c2VPZmZzZXQiLCJwb2ludHMiLCJwdXNoIiwicG9seWxpbmUiLCJ1bmlmb3JtcyIsInVDb2xvciIsInZhbHVlIiwidVRoaWNrbmVzcyIsIm1lc2giLCJzZXRQYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJsIiwicmVzaXplIiwib25Nb3VzZU1vdmUiLCJlIiwic2V0IiwieCIsImVuZCIsIndpZHRoIiwieSIsImhlaWdodCIsInVwZGF0ZSIsImxlbmd0aCIsImNvcHkiLCJhZGQiLCJzdWIiLCJtdWx0aXBseSIsImxlcnAiLCJ1cGRhdGVHZW9tZXRyeSJdLCJzb3VyY2VSb290IjoiIn0=