"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Home/Title.js":
/*!*********************************************!*\
  !*** ./app/components/Canvas/Home/Title.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Texture.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/math/Color.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Text.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Geometry.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _fonts_ppneueMontreal_medium_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../fonts/ppneueMontreal-medium.json */ "./fonts/ppneueMontreal-medium.json");
/* harmony import */ var _fonts_ppneueMontreal_medium_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../fonts/ppneueMontreal-medium.png */ "./fonts/ppneueMontreal-medium.png");
/* harmony import */ var _shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shaders/text-fragment.glsl */ "./app/shaders/text-fragment.glsl");
/* harmony import */ var _shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shaders/text-vertex.glsl */ "./app/shaders/text-vertex.glsl");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    gl,
    plane,
    renderer,
    text
  }) {
    (0,auto_bind__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.createShader();
    this.createMesh();
    console.log(this.text, "text");
  }
  createShader() {
    const texture = new ogl__WEBPACK_IMPORTED_MODULE_5__.Texture(this.gl, {
      generateMipmaps: false
    });
    const textureImage = new Image();
    textureImage.src = _fonts_ppneueMontreal_medium_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    textureImage.onload = _ => texture.image = textureImage;
    const vertex100 = `${_shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]}`;
    const fragment100 = `
      #extension GL_OES_standard_derivatives : enable

      precision highp float;

      ${_shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]}
    `;
    const vertex300 = `#version 300 es

      #define attribute in
      #define varying out

      ${_shaders_text_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__["default"]}
    `;
    const fragment300 = `#version 300 es

      precision highp float;

      #define varying in
      #define texture2D texture
      #define gl_FragColor FragColor

      out vec4 FragColor;

      ${_shaders_text_fragment_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]}
    `;
    let fragmentShader = fragment100;
    let vertexShader = vertex100;
    if (this.renderer.isWebgl2) {
      fragmentShader = fragment300;
      vertexShader = vertex300;
    }
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_6__.Program(this.gl, {
      cullFace: null,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      fragment: fragmentShader,
      vertex: vertexShader,
      uniforms: {
        uColor: {
          value: new ogl__WEBPACK_IMPORTED_MODULE_7__.Color("#000")
        },
        tMap: {
          value: texture
        }
      }
    });
  }
  createMesh() {
    const text = new ogl__WEBPACK_IMPORTED_MODULE_8__.Text({
      align: "right",
      font: _fonts_ppneueMontreal_medium_json__WEBPACK_IMPORTED_MODULE_1__,
      letterSpacing: -0.05,
      size: 0.08,
      text: this.text,
      wordSpacing: 0
    });
    const geometry = new ogl__WEBPACK_IMPORTED_MODULE_9__.Geometry(this.gl, {
      position: {
        size: 3,
        data: text.buffers.position
      },
      uv: {
        size: 2,
        data: text.buffers.uv
      },
      id: {
        size: 1,
        data: text.buffers.id
      },
      index: {
        data: text.buffers.index
      }
    });
    geometry.computeBoundingBox();
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_10__.Mesh(this.gl, {
      geometry,
      program: this.program
    });
    this.mesh.position.y = -this.plane.scale.y * 0.5 - 0.085;
    this.mesh.setParent(this.plane);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78f510e9f906218e419d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMTlmYzc1MWM3YTU0N2I3YWUxMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUVtQztBQUVKO0FBQ0Y7QUFFSDtBQUNKO0FBRXRELGlFQUFlLE1BQU07RUFDbkJXLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLFFBQVE7SUFBRUM7RUFBSyxDQUFDLEVBQUU7SUFDekNmLHFEQUFRLENBQUMsSUFBSSxDQUFDO0lBRWQsSUFBSSxDQUFDWSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUVoQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFFakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQztFQUNoQztFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYixNQUFNSSxPQUFPLEdBQUcsSUFBSWQsd0NBQU8sQ0FBQyxJQUFJLENBQUNNLEVBQUUsRUFBRTtNQUFFUyxlQUFlLEVBQUU7SUFBTSxDQUFDLENBQUM7SUFDaEUsTUFBTUMsWUFBWSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0lBRWhDRCxZQUFZLENBQUNkLEdBQUcsR0FBR0Esd0VBQUc7SUFDdEJjLFlBQVksQ0FBQ0UsTUFBTSxHQUFHQyxDQUFDLElBQUtMLE9BQU8sQ0FBQ00sS0FBSyxHQUFHSixZQUFhO0lBRXpELE1BQU1LLFNBQVMsR0FBSSxHQUFFakIsaUVBQU8sRUFBQztJQUU3QixNQUFNa0IsV0FBVyxHQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUW5CLG1FQUFTO0FBQ2pCLEtBQUs7SUFFRCxNQUFNb0IsU0FBUyxHQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUW5CLGlFQUFPO0FBQ2YsS0FBSztJQUVELE1BQU1vQixXQUFXLEdBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUXJCLG1FQUFTO0FBQ2pCLEtBQUs7SUFFRCxJQUFJc0IsY0FBYyxHQUFHSCxXQUFXO0lBQ2hDLElBQUlJLFlBQVksR0FBR0wsU0FBUztJQUU1QixJQUFJLElBQUksQ0FBQ2IsUUFBUSxDQUFDbUIsUUFBUSxFQUFFO01BQzFCRixjQUFjLEdBQUdELFdBQVc7TUFDNUJFLFlBQVksR0FBR0gsU0FBUztJQUMxQjtJQUVBLElBQUksQ0FBQ0ssT0FBTyxHQUFHLElBQUk5Qix3Q0FBTyxDQUFDLElBQUksQ0FBQ1EsRUFBRSxFQUFFO01BQ2xDdUIsUUFBUSxFQUFFLElBQUk7TUFDZEMsU0FBUyxFQUFFLEtBQUs7TUFDaEJDLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxXQUFXLEVBQUUsSUFBSTtNQUNqQjdCLFFBQVEsRUFBRXNCLGNBQWM7TUFDeEJyQixNQUFNLEVBQUVzQixZQUFZO01BQ3BCTyxRQUFRLEVBQUU7UUFDUkMsTUFBTSxFQUFFO1VBQUVDLEtBQUssRUFBRSxJQUFJeEMsc0NBQUssQ0FBQyxNQUFNO1FBQUUsQ0FBQztRQUNwQ3lDLElBQUksRUFBRTtVQUFFRCxLQUFLLEVBQUVyQjtRQUFRO01BQ3pCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQUgsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsTUFBTUYsSUFBSSxHQUFHLElBQUlWLHFDQUFJLENBQUM7TUFDcEJzQyxLQUFLLEVBQUUsT0FBTztNQUNkcEMsSUFBSTtNQUNKcUMsYUFBYSxFQUFFLENBQUMsSUFBSTtNQUNwQkMsSUFBSSxFQUFFLElBQUk7TUFDVjlCLElBQUksRUFBRSxJQUFJLENBQUNBLElBQUk7TUFDZitCLFdBQVcsRUFBRTtJQUNmLENBQUMsQ0FBQztJQUVGLE1BQU1DLFFBQVEsR0FBRyxJQUFJN0MseUNBQVEsQ0FBQyxJQUFJLENBQUNVLEVBQUUsRUFBRTtNQUNyQ29DLFFBQVEsRUFBRTtRQUFFSCxJQUFJLEVBQUUsQ0FBQztRQUFFSSxJQUFJLEVBQUVsQyxJQUFJLENBQUNtQyxPQUFPLENBQUNGO01BQVMsQ0FBQztNQUNsREcsRUFBRSxFQUFFO1FBQUVOLElBQUksRUFBRSxDQUFDO1FBQUVJLElBQUksRUFBRWxDLElBQUksQ0FBQ21DLE9BQU8sQ0FBQ0M7TUFBRyxDQUFDO01BQ3RDQyxFQUFFLEVBQUU7UUFBRVAsSUFBSSxFQUFFLENBQUM7UUFBRUksSUFBSSxFQUFFbEMsSUFBSSxDQUFDbUMsT0FBTyxDQUFDRTtNQUFHLENBQUM7TUFDdENDLEtBQUssRUFBRTtRQUFFSixJQUFJLEVBQUVsQyxJQUFJLENBQUNtQyxPQUFPLENBQUNHO01BQU07SUFDcEMsQ0FBQyxDQUFDO0lBRUZOLFFBQVEsQ0FBQ08sa0JBQWtCLENBQUMsQ0FBQztJQUU3QixJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJcEQsc0NBQUksQ0FBQyxJQUFJLENBQUNTLEVBQUUsRUFBRTtNQUFFbUMsUUFBUTtNQUFFYixPQUFPLEVBQUUsSUFBSSxDQUFDQTtJQUFRLENBQUMsQ0FBQztJQUNsRSxJQUFJLENBQUNxQixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDM0MsS0FBSyxDQUFDNEMsS0FBSyxDQUFDRCxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUs7SUFDeEQsSUFBSSxDQUFDRCxJQUFJLENBQUNHLFNBQVMsQ0FBQyxJQUFJLENBQUM3QyxLQUFLLENBQUM7RUFDakM7QUFDRjs7Ozs7Ozs7VUM1R0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dG9CaW5kIGZyb20gXCJhdXRvLWJpbmRcIlxuXG5pbXBvcnQgeyBDb2xvciwgR2VvbWV0cnksIE1lc2gsIFByb2dyYW0sIFRleHQsIFRleHR1cmUgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IGZvbnQgZnJvbSBcIi4uLy4uLy4uLy4uL2ZvbnRzL3BwbmV1ZU1vbnRyZWFsLW1lZGl1bS5qc29uXCJcbmltcG9ydCBzcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ZvbnRzL3BwbmV1ZU1vbnRyZWFsLW1lZGl1bS5wbmdcIlxuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvdGV4dC1mcmFnbWVudC5nbHNsXCJcbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvdGV4dC12ZXJ0ZXguZ2xzbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgcGxhbmUsIHJlbmRlcmVyLCB0ZXh0IH0pIHtcbiAgICBBdXRvQmluZCh0aGlzKVxuXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5wbGFuZSA9IHBsYW5lXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy50ZXh0ID0gdGV4dFxuXG4gICAgdGhpcy5jcmVhdGVTaGFkZXIoKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnRleHQsIFwidGV4dFwiKVxuICB9XG5cbiAgY3JlYXRlU2hhZGVyKCkge1xuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsLCB7IGdlbmVyYXRlTWlwbWFwczogZmFsc2UgfSlcbiAgICBjb25zdCB0ZXh0dXJlSW1hZ2UgPSBuZXcgSW1hZ2UoKVxuXG4gICAgdGV4dHVyZUltYWdlLnNyYyA9IHNyY1xuICAgIHRleHR1cmVJbWFnZS5vbmxvYWQgPSBfID0+ICh0ZXh0dXJlLmltYWdlID0gdGV4dHVyZUltYWdlKVxuXG4gICAgY29uc3QgdmVydGV4MTAwID0gYCR7dmVydGV4fWBcblxuICAgIGNvbnN0IGZyYWdtZW50MTAwID0gYFxuICAgICAgI2V4dGVuc2lvbiBHTF9PRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXMgOiBlbmFibGVcblxuICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4gICAgICAke2ZyYWdtZW50fVxuICAgIGBcblxuICAgIGNvbnN0IHZlcnRleDMwMCA9IGAjdmVyc2lvbiAzMDAgZXNcblxuICAgICAgI2RlZmluZSBhdHRyaWJ1dGUgaW5cbiAgICAgICNkZWZpbmUgdmFyeWluZyBvdXRcblxuICAgICAgJHt2ZXJ0ZXh9XG4gICAgYFxuXG4gICAgY29uc3QgZnJhZ21lbnQzMDAgPSBgI3ZlcnNpb24gMzAwIGVzXG5cbiAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcblxuICAgICAgI2RlZmluZSB2YXJ5aW5nIGluXG4gICAgICAjZGVmaW5lIHRleHR1cmUyRCB0ZXh0dXJlXG4gICAgICAjZGVmaW5lIGdsX0ZyYWdDb2xvciBGcmFnQ29sb3JcblxuICAgICAgb3V0IHZlYzQgRnJhZ0NvbG9yO1xuXG4gICAgICAke2ZyYWdtZW50fVxuICAgIGBcblxuICAgIGxldCBmcmFnbWVudFNoYWRlciA9IGZyYWdtZW50MTAwXG4gICAgbGV0IHZlcnRleFNoYWRlciA9IHZlcnRleDEwMFxuXG4gICAgaWYgKHRoaXMucmVuZGVyZXIuaXNXZWJnbDIpIHtcbiAgICAgIGZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnQzMDBcbiAgICAgIHZlcnRleFNoYWRlciA9IHZlcnRleDMwMFxuICAgIH1cblxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGN1bGxGYWNlOiBudWxsLFxuICAgICAgZGVwdGhUZXN0OiBmYWxzZSxcbiAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICBmcmFnbWVudDogZnJhZ21lbnRTaGFkZXIsXG4gICAgICB2ZXJ0ZXg6IHZlcnRleFNoYWRlcixcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVDb2xvcjogeyB2YWx1ZTogbmV3IENvbG9yKFwiIzAwMFwiKSB9LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0ZXh0dXJlIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICBjb25zdCB0ZXh0ID0gbmV3IFRleHQoe1xuICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgIGZvbnQsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAtMC4wNSxcbiAgICAgIHNpemU6IDAuMDgsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB3b3JkU3BhY2luZzogMFxuICAgIH0pXG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSh0aGlzLmdsLCB7XG4gICAgICBwb3NpdGlvbjogeyBzaXplOiAzLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMucG9zaXRpb24gfSxcbiAgICAgIHV2OiB7IHNpemU6IDIsIGRhdGE6IHRleHQuYnVmZmVycy51diB9LFxuICAgICAgaWQ6IHsgc2l6ZTogMSwgZGF0YTogdGV4dC5idWZmZXJzLmlkIH0sXG4gICAgICBpbmRleDogeyBkYXRhOiB0ZXh0LmJ1ZmZlcnMuaW5kZXggfVxuICAgIH0pXG5cbiAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwgeyBnZW9tZXRyeSwgcHJvZ3JhbTogdGhpcy5wcm9ncmFtIH0pXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAtdGhpcy5wbGFuZS5zY2FsZS55ICogMC41IC0gMC4wODVcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMucGxhbmUpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc4ZjUxMGU5ZjkwNjIxOGU0MTlkXCIpIl0sIm5hbWVzIjpbIkF1dG9CaW5kIiwiQ29sb3IiLCJHZW9tZXRyeSIsIk1lc2giLCJQcm9ncmFtIiwiVGV4dCIsIlRleHR1cmUiLCJmb250Iiwic3JjIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJjb25zdHJ1Y3RvciIsImdsIiwicGxhbmUiLCJyZW5kZXJlciIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJjcmVhdGVNZXNoIiwiY29uc29sZSIsImxvZyIsInRleHR1cmUiLCJnZW5lcmF0ZU1pcG1hcHMiLCJ0ZXh0dXJlSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJpbWFnZSIsInZlcnRleDEwMCIsImZyYWdtZW50MTAwIiwidmVydGV4MzAwIiwiZnJhZ21lbnQzMDAiLCJmcmFnbWVudFNoYWRlciIsInZlcnRleFNoYWRlciIsImlzV2ViZ2wyIiwicHJvZ3JhbSIsImN1bGxGYWNlIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsInRyYW5zcGFyZW50IiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInRNYXAiLCJhbGlnbiIsImxldHRlclNwYWNpbmciLCJzaXplIiwid29yZFNwYWNpbmciLCJnZW9tZXRyeSIsInBvc2l0aW9uIiwiZGF0YSIsImJ1ZmZlcnMiLCJ1diIsImlkIiwiaW5kZXgiLCJjb21wdXRlQm91bmRpbmdCb3giLCJtZXNoIiwieSIsInNjYWxlIiwic2V0UGFyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==