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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Polyline.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
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
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
    this.createPolyline();
  }
  createPolyline() {
    for (let i = 0; i < this.count; i++) this.points.push(new ogl__WEBPACK_IMPORTED_MODULE_2__.Vec3());
    this.polyline = new ogl__WEBPACK_IMPORTED_MODULE_4__.Polyline(this.gl, {
      points: this.points,
      vertex: _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
      uniforms: {
        uColor: {
          value: new ogl__WEBPACK_IMPORTED_MODULE_5__.Color("#1b1b1b")
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
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eafb8787c84843af5363")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDSCxHQUFHLENBQUN3QixJQUFJLENBQUMsSUFBSSxDQUFDekIsS0FBSyxDQUFDLENBQUMwQixHQUFHLENBQUMsSUFBSSxDQUFDNUIsTUFBTSxDQUFDTSxDQUFDLENBQUMsQ0FBQyxDQUFDdUIsUUFBUSxDQUFDLElBQUksQ0FBQ2hDLE1BQU0sQ0FBQztRQUNuRSxJQUFJLENBQUNJLGFBQWEsQ0FBQzZCLEdBQUcsQ0FBQyxJQUFJLENBQUMzQixHQUFHLENBQUMsQ0FBQzBCLFFBQVEsQ0FBQyxJQUFJLENBQUMvQixRQUFRLENBQUM7UUFDeEQsSUFBSSxDQUFDRSxNQUFNLENBQUNNLENBQUMsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDLElBQUksQ0FBQzdCLGFBQWEsQ0FBQztNQUN4QyxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNELE1BQU0sQ0FBQ00sQ0FBQyxDQUFDLENBQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDVSxNQUFNLENBQUNNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDOUM7SUFDRjtFQUNGO0FBQ0Y7Ozs7Ozs7O1VDaEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9DdXJzb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seWxpbmUsIFRyYW5zZm9ybSwgVmVjMywgQ29sb3IgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9jdXJzb3ItdmVydGV4Lmdsc2xcIlxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCJ1dGlscy9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLnNwcmluZyA9IDAuMDZcbiAgICB0aGlzLmZyaWN0aW9uID0gMC44NVxuICAgIHRoaXMuY291bnQgPSAyMFxuICAgIHRoaXMucG9pbnRzID0gW11cbiAgICB0aGlzLm1vdXNlVmVsb2NpdHkgPSBuZXcgVmVjMygpXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLnRtcCA9IG5ldyBWZWMzKClcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuY3JlYXRlUG9seWxpbmUoKVxuICB9XG5cbiAgY3JlYXRlUG9seWxpbmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHRoaXMucG9pbnRzLnB1c2gobmV3IFZlYzMoKSlcbiAgICB0aGlzLnBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKHRoaXMuZ2wsIHtcbiAgICAgIHBvaW50czogdGhpcy5wb2ludHMsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1Q29sb3I6IHsgdmFsdWU6IG5ldyBDb2xvcihcIiMxYjFiMWJcIikgfSxcbiAgICAgICAgdVRoaWNrbmVzczogeyB2YWx1ZTogNDAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnBvbHlsaW5lLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgdGhpcy5wb2x5bGluZS5yZXNpemUoKVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW91c2Uuc2V0KFxuICAgICAgKGUueC5lbmQgLyB0aGlzLnJlbmRlcmVyLndpZHRoKSAqIDIgLSAxLFxuICAgICAgKGUueS5lbmQgLyB0aGlzLnJlbmRlcmVyLmhlaWdodCkgKiAtMiArIDEsXG4gICAgICAwXG4gICAgKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMucG9seWxpbmUpIHRoaXMucG9seWxpbmUucmVzaXplKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5wb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICghaSkge1xuICAgICAgICB0aGlzLnRtcC5jb3B5KHRoaXMubW91c2UpLnN1Yih0aGlzLnBvaW50c1tpXSkubXVsdGlwbHkodGhpcy5zcHJpbmcpXG4gICAgICAgIHRoaXMubW91c2VWZWxvY2l0eS5hZGQodGhpcy50bXApLm11bHRpcGx5KHRoaXMuZnJpY3Rpb24pXG4gICAgICAgIHRoaXMucG9pbnRzW2ldLmFkZCh0aGlzLm1vdXNlVmVsb2NpdHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50c1tpXS5sZXJwKHRoaXMucG9pbnRzW2kgLSAxXSwgMC45KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWFmYjg3ODdjODQ4NDNhZjUzNjNcIikiXSwibmFtZXMiOlsiUG9seWxpbmUiLCJUcmFuc2Zvcm0iLCJWZWMzIiwiQ29sb3IiLCJ2ZXJ0ZXgiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJyZW5kZXJlciIsImNhbWVyYSIsInNwcmluZyIsImZyaWN0aW9uIiwiY291bnQiLCJwb2ludHMiLCJtb3VzZVZlbG9jaXR5IiwibW91c2UiLCJ0bXAiLCJncm91cCIsImNyZWF0ZVBvbHlsaW5lIiwiaSIsInB1c2giLCJwb2x5bGluZSIsInVuaWZvcm1zIiwidUNvbG9yIiwidmFsdWUiLCJ1VGhpY2tuZXNzIiwibWVzaCIsInNldFBhcmVudCIsInJlc2l6ZSIsIm9uTW91c2VNb3ZlIiwiZSIsInNldCIsIngiLCJlbmQiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJvblJlc2l6ZSIsInVwZGF0ZSIsImxlbmd0aCIsImNvcHkiLCJzdWIiLCJtdWx0aXBseSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=