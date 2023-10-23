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
    // this.points = []
    this.mouseVelocity = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.mouse = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.tmp = new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3();
    this.createPolyline();
    this.onResize();
  }
  createPolyline() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(_data__WEBPACK_IMPORTED_MODULE_1__.cursorColor, (color, i) => {
      const line = {
        spring: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.random)(0.02, 0.1),
        friction: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.random)(0.7, 0.95),
        mouseVelocity: new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3(),
        mouseOffset: new ogl__WEBPACK_IMPORTED_MODULE_4__.Vec3((0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.random)(-1, 1) * 0.02)
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
            value: (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.random)(20, 50)
          }
        }
      });
      line.polyline.mesh.setParent(this.scene);
      lines.forEach(line => line.polyline.resize());
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
/******/ 	__webpack_require__.h = () => ("20cef4d199defb2104e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYzQzMzhmZDViZWQ3YWJmYWY4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFRTtBQUNWO0FBQ2pCO0FBQ2U7QUFFNUMsaUVBQWUsTUFBTTtFQUNuQlEsV0FBV0EsQ0FBQztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUMsS0FBSztJQUFFQyxRQUFRO0lBQUVDO0VBQU8sQ0FBQyxFQUFFO0lBQ2xELElBQUksQ0FBQ0osRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFFcEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZjtJQUNBLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUlmLHFDQUFJLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUNnQixLQUFLLEdBQUcsSUFBSWhCLHFDQUFJLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNpQixHQUFHLEdBQUcsSUFBSWpCLHFDQUFJLENBQUMsQ0FBQztJQUVyQixJQUFJLENBQUNrQixjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0VBQ2pCO0VBRUFELGNBQWNBLENBQUEsRUFBRztJQUNmZCw0Q0FBSSxDQUFDRCw4Q0FBVyxFQUFFLENBQUNpQixLQUFLLEVBQUVDLENBQUMsS0FBSztNQUM5QixNQUFNQyxJQUFJLEdBQUc7UUFDWFYsTUFBTSxFQUFFUCxtREFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7UUFDekJRLFFBQVEsRUFBRVIsbURBQU0sQ0FBQyxHQUFHLEVBQUUsSUFB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QUFDSCxDQUFDLENBQUMsQ0FBQzBCLEdBQUcsQ0FBQ3pCLElBQUksQ0FBQ1AsYUFBYSxDQUFDO1FBQ3hDLENBQUMsTUFBTTtVQUNMTyxJQUFJLENBQUNFLE1BQU0sQ0FBQ0gsQ0FBQyxDQUFDLENBQUM2QixJQUFJLENBQUM1QixJQUFJLENBQUNFLE1BQU0sQ0FBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUM5QztNQUNGO01BQ0FDLElBQUksQ0FBQ0ksUUFBUSxDQUFDeUIsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0VBQ0o7QUFDRjs7Ozs7Ozs7VUNqRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0N1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bGluZSwgVHJhbnNmb3JtLCBWZWMzLCBDb2xvciB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2N1cnNvci12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgeyBjdXJzb3JDb2xvciB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhXCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLnNwcmluZyA9IDAuMDZcbiAgICB0aGlzLmZyaWN0aW9uID0gMC44NVxuICAgIHRoaXMuY291bnQgPSAyMFxuICAgIC8vIHRoaXMucG9pbnRzID0gW11cbiAgICB0aGlzLm1vdXNlVmVsb2NpdHkgPSBuZXcgVmVjMygpXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLnRtcCA9IG5ldyBWZWMzKClcblxuICAgIHRoaXMuY3JlYXRlUG9seWxpbmUoKVxuICAgIHRoaXMub25SZXNpemUoKVxuICB9XG5cbiAgY3JlYXRlUG9seWxpbmUoKSB7XG4gICAgZWFjaChjdXJzb3JDb2xvciwgKGNvbG9yLCBpKSA9PiB7XG4gICAgICBjb25zdCBsaW5lID0ge1xuICAgICAgICBzcHJpbmc6IHJhbmRvbSgwLjAyLCAwLjEpLFxuICAgICAgICBmcmljdGlvbjogcmFuZG9tKDAuNywgMC45NSksXG4gICAgICAgIG1vdXNlVmVsb2NpdHk6IG5ldyBWZWMzKCksXG4gICAgICAgIG1vdXNlT2Zmc2V0OiBuZXcgVmVjMyhyYW5kb20oLTEsIDEpICogMC4wMilcbiAgICAgIH1cbiAgICAgIHRoaXMucG9pbnRzID0gbGluZS5wb2ludHMgPSBbXVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykgdGhpcy5wb2ludHMucHVzaChuZXcgVmVjMygpKVxuICAgICAgbGluZS5wb2x5bGluZSA9IG5ldyBQb2x5bGluZSh0aGlzLmdsLCB7XG4gICAgICAgIHBvaW50czogdGhpcy5wb2ludHMsXG4gICAgICAgIHZlcnRleCxcbiAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICB1Q29sb3I6IHsgdmFsdWU6IG5ldyBDb2xvcihjb2xvcikgfSxcbiAgICAgICAgICB1VGhpY2tuZXNzOiB7IHZhbHVlOiByYW5kb20oMjAsIDUwKSB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGxpbmUucG9seWxpbmUubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICAgIGxpbmVzLmZvckVhY2gobGluZSA9PiBsaW5lLnBvbHlsaW5lLnJlc2l6ZSgpKVxuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpXG4gICAgfSlcblxuICAgIC8vIHRoaXMucG9seWxpbmUucmVzaXplKClcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdXNlLnNldChcbiAgICAgIChlLnguZW5kIC8gdGhpcy5yZW5kZXJlci53aWR0aCkgKiAyIC0gMSxcbiAgICAgIChlLnkuZW5kIC8gdGhpcy5yZW5kZXJlci5oZWlnaHQpICogLTIgKyAxLFxuICAgICAgMFxuICAgIClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLmxpbmVzKSBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4gbGluZS5wb2x5bGluZS5yZXNpemUoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBlYWNoKHRoaXMubGluZXMsIGxpbmUgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IGxpbmUucG9pbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmICghaSkge1xuICAgICAgICAgIHRoaXMudG1wLmNvcHkodGhpcy5tb3VzZSkuYWRkKGxpbmUubW91c2VPZmZzZXQpLnN1YihsaW5lLnBvaW50c1tpXSkubXVsdGlwbHkobGluZS5zcHJpbmcpXG4gICAgICAgICAgbGluZS5tb3VzZVZlbG9jaXR5LmFkZCh0aGlzLnRtcCkubXVsdGlwbHkobGluZS5mcmljdGlvbilcbiAgICAgICAgICBsaW5lLnBvaW50c1tpXS5hZGQobGluZS5tb3VzZVZlbG9jaXR5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmUucG9pbnRzW2ldLmxlcnAobGluZS5wb2ludHNbaSAtIDFdLCAwLjkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpbmUucG9seWxpbmUudXBkYXRlR2VvbWV0cnkoKVxuICAgIH0pXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIwY2VmNGQxOTlkZWZiMjEwNGU0XCIpIl0sIm5hbWVzIjpbIlBvbHlsaW5lIiwiVHJhbnNmb3JtIiwiVmVjMyIsIkNvbG9yIiwidmVydGV4IiwiY3Vyc29yQ29sb3IiLCJlYWNoIiwicmFuZG9tIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJyZW5kZXJlciIsImNhbWVyYSIsInNwcmluZyIsImZyaWN0aW9uIiwiY291bnQiLCJtb3VzZVZlbG9jaXR5IiwibW91c2UiLCJ0bXAiLCJjcmVhdGVQb2x5bGluZSIsIm9uUmVzaXplIiwiY29sb3IiLCJpIiwibGluZSIsIm1vdXNlT2Zmc2V0IiwicG9pbnRzIiwicHVzaCIsInBvbHlsaW5lIiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInVUaGlja25lc3MiLCJtZXNoIiwic2V0UGFyZW50IiwibGluZXMiLCJmb3JFYWNoIiwicmVzaXplIiwib25Nb3VzZU1vdmUiLCJlIiwic2V0IiwieCIsImVuZCIsIndpZHRoIiwieSIsImhlaWdodCIsInVwZGF0ZSIsImxlbmd0aCIsImNvcHkiLCJhZGQiLCJzdWIiLCJtdWx0aXBseSIsImxlcnAiLCJ1cGRhdGVHZW9tZXRyeSJdLCJzb3VyY2VSb290IjoiIn0=