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
    console.log(e, "event");
  }
  onResize() {
    if (this.polyline) this.polyline.resize();
  }
});

/***/ }),

/***/ "./app/shaders/cursor-vertex.glsl":
/*!****************************************!*\
  !*** ./app/shaders/cursor-vertex.glsl ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute vec2 uv;\nattribute float side;\n\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\n\nvec4 getPosition() {\n    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);\n    vec2 nextScreen = next.xy * aspect;\n    vec2 prevScreen = prev.xy * aspect;\n\n    vec2 tangent = normalize(nextScreen - prevScreen);\n    vec2 normal = vec2(-tangent.y, tangent.x);\n    normal /= aspect;\n    normal *= 1.0 - pow(abs(uv.y - 0.5) * 2.0, 2.0);\n\n    float pixelWidth = 1.0 / (uResolution.y / uDPR);\n    normal *= pixelWidth * uThickness;\n\n    // When the points are on top of each other, shrink the line to avoid artifacts.\n    float dist = length(nextScreen - prevScreen);\n    normal *= smoothstep(0.0, 0.02, dist);\n\n    vec4 current = vec4(position, 1);\n    current.xy -= normal * side;\n    return current;\n}\n\nvoid main() {\n    gl_Position = getPosition();\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b264b082ef1f0ffaf93e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MDdlN2U3ODQyZjI5YTA4ZmU5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUVFO0FBRXhELGlFQUFlLE1BQU07RUFDbkJLLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFPLENBQUMsRUFBRTtJQUNsRCxJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJYixxQ0FBSSxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDYyxLQUFLLEdBQUcsSUFBSWQscUNBQUksQ0FBQyxDQUFDO0lBRXZCLElBQUksQ0FBQ2UsS0FBSyxHQUFHLElBQUloQiwwQ0FBUyxDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDaUIsY0FBYyxDQUFDLENBQUM7RUFDdkI7RUFFQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDTixLQUFLLEVBQUVNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQ0wsTUFBTSxDQUFDTSxJQUFJLENBQUMsSUFBSWxCLHFDQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLElBQUksQ0FBQ21CLFFBQVEsR0FBRyxJQUFJckIseUNBQVEsQ0FBQyxJQUFJLENBQUNNLEVBQUUsRUFBRTtNQUNwQ1EsTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTTtNQUNuQlYsTUFBTTtNQUNOa0IsUUFBUSxFQUFFO1FBQ1JDLE1BQU0sRUFBRTtVQUFFQyxLQUFLLEVBQUUsSUFBSXJCLHNDQUFLLENBQUMsU0FBUztRQUFFLENBQUM7UUFDdkNzQixVQUFVLEVBQUU7VUFBRUQsS0FBSyxFQUFFO1FBQUc7TUFDMUI7SUFDRixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNILFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDO0lBQ3hDLElBQUksQ0FBQ2MsUUFBUSxDQUFDTyxNQUFNLENBQUMsQ0FBQztFQUN4QjtFQUVBQyxXQUFXQSxDQUFDQyxDQUFDLEVBQUU7SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsRUFBRSxPQUFPLENBQUM7RUFDekI7RUFFQUcsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxJQUFJLENBQUNaLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVEsQ0FBQ08sTUFBTSxDQUFDLENBQUM7RUFDM0M7QUFDRjs7Ozs7Ozs7Ozs7Ozs7QUM5Q0EsaUVBQWUsNENBQTRDLHNCQUFzQixzQkFBc0Isb0JBQW9CLHVCQUF1Qiw2QkFBNkIscUJBQXFCLDJCQUEyQix3QkFBd0IsMkRBQTJELHlDQUF5Qyx5Q0FBeUMsMERBQTBELGdEQUFnRCx1QkFBdUIsc0RBQXNELHdEQUF3RCx3Q0FBd0MsMklBQTJJLDRDQUE0Qyx5Q0FBeUMsa0NBQWtDLHFCQUFxQixHQUFHLGlCQUFpQixrQ0FBa0MsR0FBRyxHQUFHOzs7Ozs7OztVQ0E5K0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0N1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL3NoYWRlcnMvY3Vyc29yLXZlcnRleC5nbHNsIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbHlsaW5lLCBUcmFuc2Zvcm0sIFZlYzMsIENvbG9yIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvY3Vyc29yLXZlcnRleC5nbHNsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLnNwcmluZyA9IDAuMDZcbiAgICB0aGlzLmZyaWN0aW9uID0gMC44NVxuICAgIHRoaXMuY291bnQgPSAyMFxuICAgIHRoaXMucG9pbnRzID0gW11cbiAgICB0aGlzLm1vdXNlVmVsb2NpdHkgPSBuZXcgVmVjMygpXG4gICAgdGhpcy5tb3VzZSA9IG5ldyBWZWMzKClcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuY3JlYXRlUG9seWxpbmUoKVxuICB9XG5cbiAgY3JlYXRlUG9seWxpbmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHRoaXMucG9pbnRzLnB1c2gobmV3IFZlYzMoKSlcbiAgICB0aGlzLnBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKHRoaXMuZ2wsIHtcbiAgICAgIHBvaW50czogdGhpcy5wb2ludHMsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1Q29sb3I6IHsgdmFsdWU6IG5ldyBDb2xvcihcIiMxYjFiMWJcIikgfSxcbiAgICAgICAgdVRoaWNrbmVzczogeyB2YWx1ZTogNDAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnBvbHlsaW5lLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgdGhpcy5wb2x5bGluZS5yZXNpemUoKVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZSkge1xuICAgIGNvbnNvbGUubG9nKGUsIFwiZXZlbnRcIilcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLnBvbHlsaW5lKSB0aGlzLnBvbHlsaW5lLnJlc2l6ZSgpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMyBuZXh0O1xcbmF0dHJpYnV0ZSB2ZWMzIHByZXY7XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuYXR0cmlidXRlIGZsb2F0IHNpZGU7XFxuXFxudW5pZm9ybSB2ZWMyIHVSZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdURQUjtcXG51bmlmb3JtIGZsb2F0IHVUaGlja25lc3M7XFxuXFxudmVjNCBnZXRQb3NpdGlvbigpIHtcXG4gICAgdmVjMiBhc3BlY3QgPSB2ZWMyKHVSZXNvbHV0aW9uLnggLyB1UmVzb2x1dGlvbi55LCAxKTtcXG4gICAgdmVjMiBuZXh0U2NyZWVuID0gbmV4dC54eSAqIGFzcGVjdDtcXG4gICAgdmVjMiBwcmV2U2NyZWVuID0gcHJldi54eSAqIGFzcGVjdDtcXG5cXG4gICAgdmVjMiB0YW5nZW50ID0gbm9ybWFsaXplKG5leHRTY3JlZW4gLSBwcmV2U2NyZWVuKTtcXG4gICAgdmVjMiBub3JtYWwgPSB2ZWMyKC10YW5nZW50LnksIHRhbmdlbnQueCk7XFxuICAgIG5vcm1hbCAvPSBhc3BlY3Q7XFxuICAgIG5vcm1hbCAqPSAxLjAgLSBwb3coYWJzKHV2LnkgLSAwLjUpICogMi4wLCAyLjApO1xcblxcbiAgICBmbG9hdCBwaXhlbFdpZHRoID0gMS4wIC8gKHVSZXNvbHV0aW9uLnkgLyB1RFBSKTtcXG4gICAgbm9ybWFsICo9IHBpeGVsV2lkdGggKiB1VGhpY2tuZXNzO1xcblxcbiAgICAvLyBXaGVuIHRoZSBwb2ludHMgYXJlIG9uIHRvcCBvZiBlYWNoIG90aGVyLCBzaHJpbmsgdGhlIGxpbmUgdG8gYXZvaWQgYXJ0aWZhY3RzLlxcbiAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKG5leHRTY3JlZW4gLSBwcmV2U2NyZWVuKTtcXG4gICAgbm9ybWFsICo9IHNtb290aHN0ZXAoMC4wLCAwLjAyLCBkaXN0KTtcXG5cXG4gICAgdmVjNCBjdXJyZW50ID0gdmVjNChwb3NpdGlvbiwgMSk7XFxuICAgIGN1cnJlbnQueHkgLT0gbm9ybWFsICogc2lkZTtcXG4gICAgcmV0dXJuIGN1cnJlbnQ7XFxufVxcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xcbn1cXG5cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMjY0YjA4MmVmMWYwZmZhZjkzZVwiKSJdLCJuYW1lcyI6WyJQb2x5bGluZSIsIlRyYW5zZm9ybSIsIlZlYzMiLCJDb2xvciIsInZlcnRleCIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJzcHJpbmciLCJmcmljdGlvbiIsImNvdW50IiwicG9pbnRzIiwibW91c2VWZWxvY2l0eSIsIm1vdXNlIiwiZ3JvdXAiLCJjcmVhdGVQb2x5bGluZSIsImkiLCJwdXNoIiwicG9seWxpbmUiLCJ1bmlmb3JtcyIsInVDb2xvciIsInZhbHVlIiwidVRoaWNrbmVzcyIsIm1lc2giLCJzZXRQYXJlbnQiLCJyZXNpemUiLCJvblRvdWNoTW92ZSIsImUiLCJjb25zb2xlIiwibG9nIiwib25SZXNpemUiXSwic291cmNlUm9vdCI6IiJ9