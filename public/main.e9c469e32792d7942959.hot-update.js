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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Vec3.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Polyline.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
/* harmony import */ var _shaders_cursor_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/cursor-vertex.glsl */ "./app/shaders/cursor-vertex.glsl");


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
    this.mouseVelocity = new ogl__WEBPACK_IMPORTED_MODULE_1__.Vec3();
    this.mouse = new ogl__WEBPACK_IMPORTED_MODULE_1__.Vec3();
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
    this.createPolyline();
  }
  createPolyline() {
    for (let i = 0; i < this.count; i++) this.points.push(new ogl__WEBPACK_IMPORTED_MODULE_1__.Vec3());
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
  onTouchMove(e) {
    // console.log(e, "event")
  }
  onResize() {
    if (this.polyline) this.polyline.resize();
  }
  update() {}
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4b2328cb127d921bc5e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lOWM0NjllMzI3OTJkNzk0Mjk1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUVFO0FBRXhELGlFQUFlLE1BQU07RUFDbkJLLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFPLENBQUMsRUFBRTtJQUNsRCxJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJYixxQ0FBSSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDYyxLQUFLLEdBQUcsSUFBSWQscUNBQUksQ0FBQyxDQUFDO0lBRXZCLElBQUksQ0FBQ2UsS0FBSyxHQUFHLElBQUloQiwwQ0FBUyxDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDaUIsY0FBYyxDQUFDLENBQUM7RUFDdkI7RUFFQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDTixLQUFLLEVBQUVNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQ0wsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSWxCLHFDQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLElBQUksQ0FBQ21CLFFBQVEsR0FBRyxJQUFJckIseUNBQVEsQ0FBQyxJQUFJLENBQUNNLEVBQUUsRUFBRTtNQUNwQ1EsTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTTtNQUNuQlYsTUFBTTtNQUNOa0IsUUFBUSxFQUFFO1FBQ1JDLE1BQU0sRUFBRTtVQUFFQyxLQUFLLEVBQUUsSUFBSXJCLHNDQUFLLENBQUMsU0FBUztRQUFFLENBQUM7UUFDdkNzQixVQUFVLEVBQUU7VUFBRUQsS0FBSyxFQUFFO1FBQUc7TUFDMUI7SUFDRixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNILFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDO0lBQ3hDLElBQUksQ0FBQ2MsUUFBUSxDQUFDTyxNQUFNLENBQUMsQ0FBQztFQUN4QjtFQUVBQyxXQUFXQSxDQUFDQyxDQUFDLEVBQUU7SUFDYjtFQUFBO0VBR0ZDLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksSUFBSSxDQUFDVixRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRLENBQUNPLE1BQU0sQ0FBQyxDQUFDO0VBQzNDO0VBRUFJLE1BQU1BLENBQUEsRUFBRyxDQUFDO0FBQ1o7Ozs7Ozs7O1VDaERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9DdXJzb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9seWxpbmUsIFRyYW5zZm9ybSwgVmVjMywgQ29sb3IgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9jdXJzb3ItdmVydGV4Lmdsc2xcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuc3ByaW5nID0gMC4wNlxuICAgIHRoaXMuZnJpY3Rpb24gPSAwLjg1XG4gICAgdGhpcy5jb3VudCA9IDIwXG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIHRoaXMubW91c2VWZWxvY2l0eSA9IG5ldyBWZWMzKClcbiAgICB0aGlzLm1vdXNlID0gbmV3IFZlYzMoKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5jcmVhdGVQb2x5bGluZSgpXG4gIH1cblxuICBjcmVhdGVQb2x5bGluZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykgdGhpcy5wb2ludHMucHVzaChuZXcgVmVjMygpKVxuICAgIHRoaXMucG9seWxpbmUgPSBuZXcgUG9seWxpbmUodGhpcy5nbCwge1xuICAgICAgcG9pbnRzOiB0aGlzLnBvaW50cyxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVDb2xvcjogeyB2YWx1ZTogbmV3IENvbG9yKFwiIzFiMWIxYlwiKSB9LFxuICAgICAgICB1VGhpY2tuZXNzOiB7IHZhbHVlOiA0MCB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMucG9seWxpbmUubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICB0aGlzLnBvbHlsaW5lLnJlc2l6ZSgpXG4gIH1cblxuICBvblRvdWNoTW92ZShlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSwgXCJldmVudFwiKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMucG9seWxpbmUpIHRoaXMucG9seWxpbmUucmVzaXplKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHt9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNGIyMzI4Y2IxMjdkOTIxYmM1ZVwiKSJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIlRyYW5zZm9ybSIsIlZlYzMiLCJDb2xvciIsInZlcnRleCIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJzcHJpbmciLCJmcmljdGlvbiIsImNvdW50IiwicG9pbnRzIiwibW91c2VWZWxvY2l0eSIsIm1vdXNlIiwiZ3JvdXAiLCJjcmVhdGVQb2x5bGluZSIsImkiLCJwdXNoIiwicG9seWxpbmUiLCJ1bmlmb3JtcyIsInVDb2xvciIsInZhbHVlIiwidVRoaWNrbmVzcyIsIm1lc2giLCJzZXRQYXJlbnQiLCJyZXNpemUiLCJvblRvdWNoTW92ZSIsImUiLCJvblJlc2l6ZSIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=