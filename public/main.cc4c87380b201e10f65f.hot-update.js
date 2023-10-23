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
    console.log("update", this.mouse);
    for (let i = this.points.length - 1; i >= 0; i--) {
      if (!i) {
        this.tmp.copy(this.mouse).sub(this.points[i]).multiply(this.spring);
        this.mouseVelocity.add(this.tmp).multiply(this.friction);
        this.points[i].add(this.mouseVelocity);
      } else {
        (0,utils_math__WEBPACK_IMPORTED_MODULE_1__.lerp)(this.points[i], this.points[i - 1], 0.9);
      }
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("00229142c7a504166113")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYzRjODczODBiMjAxZTEwZjY1Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFRTtBQUN2QjtBQUVqQyxpRUFBZSxNQUFNO0VBQ25CTSxXQUFXQSxDQUFDO0lBQUVDLEVBQUU7SUFBRUMsS0FBSztJQUFFQyxLQUFLO0lBQUVDLFFBQVE7SUFBRUM7RUFBTyxDQUFDLEVBQUU7SUFDbEQsSUFBSSxDQUFDSixFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUVwQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSWQscUNBQUksQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQ2UsS0FBSyxHQUFHLElBQUlmLHFDQUFJLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNnQixHQUFHLEdBQUcsSUFBSWhCLHFDQUFJLENBQUMsQ0FBQztJQUVyQixJQUFJLENBQUNpQixLQUFLLEdBQUcsSUFBSWxCLDBDQUFTLENBQUMsQ0FBQztJQUU1QixJQUFJLENBQUNtQixjQUFjLENBQUMsQ0FBQztFQUN2QjtFQUVBQSxjQUFjQSxDQUFBLEVBQUc7SUFDZixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNQLEtBQUssRUFBRU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDTixNQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJcEIscUNBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsSUFBSSxDQUFDcUIsUUFBUSxHQUFHLElBQUl2Qix5Q0FBUSxDQUFDLElBQUksQ0FBQ08sRUFBRSxFQUFFO01BQ3BDUSxNQUFNLEVBQUUsSUFBSSxDQUFDQSxNQUFNO01BQ25CWCxNQUFNO01BQ05vQixRQUFRLEVBQUU7UUFDUkMsTUFBTSxFQUFFO1VBQUVDLEtBQUssRUFBRSxJQUFJdkIsc0NBQUssQ0FBQyxTQUFTO1FBQUUsQ0FBQztRQUN2Q3dCLFVBQVUsRUFBRTtVQUFFRCxLQUFLLEVBQUU7UUFBRztNQUMxQjtJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0gsUUFBUSxDQUFDSyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNyQixLQUFLLENBQUM7SUFDeEMsSUFBSSxDQUFDZSxRQUFRLENBQUNPLE1BQU0sQ0FBQyxDQUFDO0VBQ3hCO0VBRUFDLFdBQVdBLENBQUNDLENBQUMsRUFBRTtJQUNiLElBQUksQ0FBQ2YsS0FBSyxDQUFDZ0IsR0FBRyxDQUNYRCxDQUFDLENBQUNFLENBQUMsQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQzBCLEtBQUssR0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUN0Q0osQ0FBQyxDQUFDSyxDQUFDLENBQUNGLEdBQUcsR0FBRyxJQUFJLENBQUN6QixRQUFRLENBQUM0QixNQUFNLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUN6QyxDQUNGLENBQUM7RUFDSDtFQUVBQyxRQUFRQSxDQUFBLEVBQUc7SUFDVCxJQUFJLElBQUksQ0FBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVEsQ0FBQ08sTUFBTSxDQUFDLENBQUM7RUFDM0M7RUFFQVUsTUFBTUEsQ0FBQSxFQUFHO0lBQ1BDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUN6QixLQUFLLENBQUM7SUFDakMsS0FBSyxJQUFJSSxDQUFDLEdBQUcsSUFBSSxDQUFDTixNQUFNLENBQUM0QixNQUFNLEdBQUcsQ0FBQyxFQUFFdEIsQ0FBQyxJQUFJLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDaEQsSUFBSSxDQUFDQSxDQUFDLEVBQUU7UUFDTixJQUFJLENBQUNILEdBQUcsQ0FBQzBCLElBQUksQ0FBQyxJQUFJLENBQUMzQixLQUFLLENBQUMsQ0FBQzRCLEdBQUcsQ0FBQyxJQUFJLENBQUM5QixNQUFNLENBQUNNLENBQUMsQ0FBQyxDQUFDLENBQUN5QixRQUFRLENBQUMsSUFBSSxDQUFDbEMsTUFBTSxDQUFDO1FBQ25FLElBQUksQ0FBQ0ksYUFBYSxDQUFDK0IsR0FBRyxDQUFDLElBQUksQ0FBQzdCLEdBQUcsQ0FBQyxDQUFDNEIsUUFBUSxDQUFDLElBQUksQ0FBQ2pDLFFBQVEsQ0FBQztRQUN4RCxJQUFJLENBQUNFLE1BQU0sQ0FBQ00sQ0FBQyxDQUFDLENBQUMwQixHQUFHLENBQUMsSUFBSSxDQUFDL0IsYUFBYSxDQUFDO01BQ3hDLENBQUMsTUFBTTtRQUNMWCxnREFBSSxDQUFDLElBQUksQ0FBQ1UsTUFBTSxDQUFDTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNOLE1BQU0sQ0FBQ00sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUMvQztJQUNGO0VBQ0Y7QUFDRjs7Ozs7Ozs7VUNqRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0N1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2x5bGluZSwgVHJhbnNmb3JtLCBWZWMzLCBDb2xvciB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2N1cnNvci12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcInV0aWxzL21hdGhcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuc3ByaW5nID0gMC4wNlxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjg1XG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIHRoaXMubW91c2VWZWxvY2l0eSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLm1vdXNlID0gbmV3IFZlYzMoKVxuICAgIHRoaXMudG1wID0gbmV3IFZlYzMoKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5jcmVhdGVQb2x5bGluZSgpXG4gIH1cblxuICBjcmVhdGVQb2x5bGluZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykgdGhpcy5wb2ludHMucHVzaChuZXcgVmVjMygpKVxuICAgIHRoaXMucG9seWxpbmUgPSBuZXcgUG9seWxpbmUodGhpcy5nbCwge1xuICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cyxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVDb2xvcjogeyB2YWx1ZTogbmV3IENvbG9yKFwiIzFiMWIxYlwiKSB9LFxuICAgICAgICB1VGhpY2tuZXNzOiB7IHZhbHVlOiA0MCB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMucG9seWxpbmUubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICB0aGlzLnBvbHlsaW5lLnJlc2l6ZSgpXG4gIH1cblxuICBvbk1vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5tb3VzZS5zZXQoXG4gICAgICAoZS54LmVuZCAvIHRoaXMucmVuZGVyZXIud2lkdGgpICogMiAtIDEsXG4gICAgICAoZS55LmVuZCAvIHRoaXMucmVuZGVyZXIuaGVpZ2h0KSAqIC0yICsgMSxcbiAgICAgIDBcbiAgICApXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZSkgdGhpcy5wb2x5bGluZS5yZXNpemUoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlXCIsIHRoaXMubW91c2UpXG4gICAgZm9yIChsZXQgaSA9IHRoaXMucG9pbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoIWkpIHtcbiAgICAgICAgdGhpcy50bXAuY29weSh0aGlzLm1vdXNlKS5zdWIodGhpcy5wb2ludHNbaV0pLm11bHRpcGx5KHRoaXMuc3ByaW5nKVxuICAgICAgICB0aGlzLm1vdXNlVmVsb2NpdHkuYWRkKHRoaXMudG1wKS5tdWx0aXBseSh0aGlzLmZyaWN0aW9uKVxuICAgICAgICB0aGlzLnBvaW50c1tpXS5hZGQodGhpcy5tb3VzZVZlbG9jaXR5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVycCh0aGlzLnBvaW50c1tpXSwgdGhpcy5wb2ludHNbaSAtIDFdLCAwLjkpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMDIyOTE0MmM3YTUwNDE2NjExM1wiKSJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIlRyYW5zZm9ybSIsIlZlYzMiLCJDb2xvciIsInZlcnRleCIsImxlcnAiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwic3ByaW5nIiwiZnJpY3Rpb24iLCJjb3VudCIsInBvaW50cyIsIm1vdXNlVmVsb2NpdHkiLCJtb3VzZSIsInRtcCIsImdyb3VwIiwiY3JlYXRlUG9seWxpbmUiLCJpIiwicHVzaCIsInBvbHlsaW5lIiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInVUaGlja25lc3MiLCJtZXNoIiwic2V0UGFyZW50IiwicmVzaXplIiwib25Nb3VzZU1vdmUiLCJlIiwic2V0IiwieCIsImVuZCIsIndpZHRoIiwieSIsImhlaWdodCIsIm9uUmVzaXplIiwidXBkYXRlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNvcHkiLCJzdWIiLCJtdWx0aXBseSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=