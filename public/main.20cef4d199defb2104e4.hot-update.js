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
/******/ 	__webpack_require__.h = () => ("c0ddfe93d089bc54ccd6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMGNlZjRkMTk5ZGVmYjIxMDRlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFRTtBQUNWO0FBQ2pCO0FBQ2U7QUFFNUMsaUVBQWUsTUFBTTtFQUNuQlEsV0FBV0EsQ0FBQztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUMsS0FBSztJQUFFQyxRQUFRO0lBQUVDO0VBQU8sQ0FBQyxFQUFFO0lBQ2xELElBQUksQ0FBQ0osRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFFcEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDZjtJQUNBLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUlmLHFDQUFJLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUNnQixLQUFLLEdBQUcsSUFBSWhCLHFDQUFJLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNpQixHQUFHLEdBQUcsSUFBSWpCLHFDQUFJLENBQUMsQ0FBQztJQUVyQixJQUFJLENBQUNrQixjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0VBQ2pCO0VBRUFELGNBQWNBLENBQUEsRUFBRztJQUNmZCw0Q0FBSSxDQUFDRCw4Q0FBVyxFQUFFLENBQUNpQixLQUFLLEVBQUVDLENBQUMsS0FBSztNQUM5QixNQUFNQyxJQUFJLEdBQUc7UUFDWFYsTUFBTSxFQUFFUCxtREFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7UUFDekJRLFFBQVEsRUFBRVIsbURBQU0sQ0FBQyxHQUFHLEVBQUUsSUFB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QUFDRSxNQUFNLENBQUNILENBQUMsQ0FBQyxDQUFDMEIsR0FBRyxDQUFDekIsSUFBSSxDQUFDUCxhQUFhLENBQUM7UUFDeEMsQ0FBQyxNQUFNO1VBQ0xPLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLENBQUMsQ0FBQzZCLElBQUksQ0FBQzVCLElBQUksQ0FBQ0UsTUFBTSxDQUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQzlDO01BQ0Y7TUFDQUMsSUFBSSxDQUFDSSxRQUFRLENBQUN5QixjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7RUFDSjtBQUNGOzs7Ozs7OztVQ2pGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ3Vyc29yL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHlsaW5lLCBUcmFuc2Zvcm0sIFZlYzMsIENvbG9yIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvY3Vyc29yLXZlcnRleC5nbHNsXCJcbmltcG9ydCB7IGN1cnNvckNvbG9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGFcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuc3ByaW5nID0gMC4wNlxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjg1XG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgLy8gdGhpcy5wb2ludHMgPSBbXVxuICAgIHRoaXMubW91c2VWZWxvY2l0eSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLm1vdXNlID0gbmV3IFZlYzMoKVxuICAgIHRoaXMudG1wID0gbmV3IFZlYzMoKVxuXG4gICAgdGhpcy5jcmVhdGVQb2x5bGluZSgpXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBjcmVhdGVQb2x5bGluZSgpIHtcbiAgICBlYWNoKGN1cnNvckNvbG9yLCAoY29sb3IsIGkpID0+IHtcbiAgICAgIGNvbnN0IGxpbmUgPSB7XG4gICAgICAgIHNwcmluZzogcmFuZG9tKDAuMDIsIDAuMSksXG4gICAgICAgIGZyaWN0aW9uOiByYW5kb20oMC43LCAwLjk1KSxcbiAgICAgICAgbW91c2VWZWxvY2l0eTogbmV3IFZlYzMoKSxcbiAgICAgICAgbW91c2VPZmZzZXQ6IG5ldyBWZWMzKHJhbmRvbSgtMSwgMSkgKiAwLjAyKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2ludHMgPSBsaW5lLnBvaW50cyA9IFtdXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB0aGlzLnBvaW50cy5wdXNoKG5ldyBWZWMzKCkpXG4gICAgICBsaW5lLnBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKHRoaXMuZ2wsIHtcbiAgICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cyxcbiAgICAgICAgdmVydGV4LFxuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgIHVDb2xvcjogeyB2YWx1ZTogbmV3IENvbG9yKGNvbG9yKSB9LFxuICAgICAgICAgIHVUaGlja25lc3M6IHsgdmFsdWU6IHJhbmRvbSgyMCwgNTApIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgbGluZS5wb2x5bGluZS5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICAgICAgZWFjaCh0aGlzLmxpbmVzLCBsID0+IGwucG9seWxpbmUucmVzaXplKCkpXG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSlcbiAgICB9KVxuXG4gICAgLy8gdGhpcy5wb2x5bGluZS5yZXNpemUoKVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW91c2Uuc2V0KFxuICAgICAgKGUueC5lbmQgLyB0aGlzLnJlbmRlcmVyLndpZHRoKSAqIDIgLSAxLFxuICAgICAgKGUueS5lbmQgLyB0aGlzLnJlbmRlcmVyLmhlaWdodCkgKiAtMiArIDEsXG4gICAgICAwXG4gICAgKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMubGluZXMpIGVhY2godGhpcy5saW5lcywgbGluZSA9PiBsaW5lLnBvbHlsaW5lLnJlc2l6ZSgpKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGVhY2godGhpcy5saW5lcywgbGluZSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gbGluZS5wb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKCFpKSB7XG4gICAgICAgICAgdGhpcy50bXAuY29weSh0aGlzLm1vdXNlKS5hZGQobGluZS5tb3VzZU9mZnNldCkuc3ViKGxpbmUucG9pbnRzW2ldKS5tdWx0aXBseShsaW5lLnNwcmluZylcbiAgICAgICAgICBsaW5lLm1vdXNlVmVsb2NpdHkuYWRkKHRoaXMudG1wKS5tdWx0aXBseShsaW5lLmZyaWN0aW9uKVxuICAgICAgICAgIGxpbmUucG9pbnRzW2ldLmFkZChsaW5lLm1vdXNlVmVsb2NpdHkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGluZS5wb2ludHNbaV0ubGVycChsaW5lLnBvaW50c1tpIC0gMV0sIDAuOSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGluZS5wb2x5bGluZS51cGRhdGVHZW9tZXRyeSgpXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzBkZGZlOTNkMDg5YmM1NGNjZDZcIikiXSwibmFtZXMiOlsiUG9seWxpbmUiLCJUcmFuc2Zvcm0iLCJWZWMzIiwiQ29sb3IiLCJ2ZXJ0ZXgiLCJjdXJzb3JDb2xvciIsImVhY2giLCJyYW5kb20iLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwic3ByaW5nIiwiZnJpY3Rpb24iLCJjb3VudCIsIm1vdXNlVmVsb2NpdHkiLCJtb3VzZSIsInRtcCIsImNyZWF0ZVBvbHlsaW5lIiwib25SZXNpemUiLCJjb2xvciIsImkiLCJsaW5lIiwibW91c2VPZmZzZXQiLCJwb2ludHMiLCJwdXNoIiwicG9seWxpbmUiLCJ1bmlmb3JtcyIsInVDb2xvciIsInZhbHVlIiwidVRoaWNrbmVzcyIsIm1lc2giLCJzZXRQYXJlbnQiLCJsaW5lcyIsImwiLCJyZXNpemUiLCJvbk1vdXNlTW92ZSIsImUiLCJzZXQiLCJ4IiwiZW5kIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwidXBkYXRlIiwibGVuZ3RoIiwiY29weSIsImFkZCIsInN1YiIsIm11bHRpcGx5IiwibGVycCIsInVwZGF0ZUdlb21ldHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==