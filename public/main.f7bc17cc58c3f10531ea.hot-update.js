"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Home/SubTitle.js":
/*!************************************************!*\
  !*** ./app/components/Canvas/Home/SubTitle.js ***!
  \************************************************/
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
      font: _fonts_ppneueMontreal_medium_json__WEBPACK_IMPORTED_MODULE_1__,
      letterSpacing: -0.05,
      size: 0.025,
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
    this.mesh.position.y = -this.plane.scale.y * 0.5 - 0.03;
    this.mesh.position.x = -this.plane.scale.x * 0.5;
    this.mesh.setParent(this.plane);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("96b860bfb5201283148c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0MsT0FBTyxDQUFDRjtNQUFTLENBQUM7TUFDbERHLEVBQUUsRUFBRTtRQUFFTixJQUFJLEVBQUUsQ0FBQztRQUFFSSxJQUFJLEVBQUUvQixJQUFJLENBQUNnQyxPQUFPLENBQUNDO01BQUcsQ0FBQztNQUN0Q0MsRUFBRSxFQUFFO1FBQUVQLElBQUksRUFBRSxDQUFDO1FBQUVJLElBQUksRUFBRS9CLElBQUksQ0FBQ2dDLE9BQU8sQ0FBQ0U7TUFBRyxDQUFDO01BQ3RDQyxLQUFLLEVBQUU7UUFBRUosSUFBSSxFQUFFL0IsSUFBSSxDQUFDZ0MsT0FBTyxDQUFDRztNQUFNO0lBQ3BDLENBQUMsQ0FBQztJQUVGTixRQUFRLENBQUNPLGtCQUFrQixDQUFDLENBQUM7SUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSWpELHNDQUFJLENBQUMsSUFBSSxDQUFDUyxFQUFFLEVBQUU7TUFBRWdDLFFBQVE7TUFBRVosT0FBTyxFQUFFLElBQUksQ0FBQ0E7SUFBUSxDQUFDLENBQUM7SUFDbEUsSUFBSSxDQUFDb0IsSUFBSSxDQUFDUCxRQUFRLENBQUNRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQ3hDLEtBQUssQ0FBQ3lDLEtBQUssQ0FBQ0QsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJO0lBQ3ZELElBQUksQ0FBQ0QsSUFBSSxDQUFDUCxRQUFRLENBQUNVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzFDLEtBQUssQ0FBQ3lDLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHLEdBQUc7SUFDaEQsSUFBSSxDQUFDSCxJQUFJLENBQUNJLFNBQVMsQ0FBQyxJQUFJLENBQUMzQyxLQUFLLENBQUM7RUFDakM7QUFDRjs7Ozs7Ozs7VUMxR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvU3ViVGl0bGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dG9CaW5kIGZyb20gXCJhdXRvLWJpbmRcIlxuXG5pbXBvcnQgeyBDb2xvciwgR2VvbWV0cnksIE1lc2gsIFByb2dyYW0sIFRleHQsIFRleHR1cmUgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IGZvbnQgZnJvbSBcIi4uLy4uLy4uLy4uL2ZvbnRzL3BwbmV1ZU1vbnRyZWFsLW1lZGl1bS5qc29uXCJcbmltcG9ydCBzcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ZvbnRzL3BwbmV1ZU1vbnRyZWFsLW1lZGl1bS5wbmdcIlxuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvdGV4dC1mcmFnbWVudC5nbHNsXCJcbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvdGV4dC12ZXJ0ZXguZ2xzbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgcGxhbmUsIHJlbmRlcmVyLCB0ZXh0IH0pIHtcbiAgICBBdXRvQmluZCh0aGlzKVxuXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5wbGFuZSA9IHBsYW5lXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy50ZXh0ID0gdGV4dFxuXG4gICAgdGhpcy5jcmVhdGVTaGFkZXIoKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gIH1cblxuICBjcmVhdGVTaGFkZXIoKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHsgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZSB9KVxuICAgIGNvbnN0IHRleHR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpXG5cbiAgICB0ZXh0dXJlSW1hZ2Uuc3JjID0gc3JjXG4gICAgdGV4dHVyZUltYWdlLm9ubG9hZCA9IF8gPT4gKHRleHR1cmUuaW1hZ2UgPSB0ZXh0dXJlSW1hZ2UpXG5cbiAgICBjb25zdCB2ZXJ0ZXgxMDAgPSBgJHt2ZXJ0ZXh9YFxuXG4gICAgY29uc3QgZnJhZ21lbnQxMDAgPSBgXG4gICAgICAjZXh0ZW5zaW9uIEdMX09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcyA6IGVuYWJsZVxuXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgY29uc3QgdmVydGV4MzAwID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgICAjZGVmaW5lIGF0dHJpYnV0ZSBpblxuICAgICAgI2RlZmluZSB2YXJ5aW5nIG91dFxuXG4gICAgICAke3ZlcnRleH1cbiAgICBgXG5cbiAgICBjb25zdCBmcmFnbWVudDMwMCA9IGAjdmVyc2lvbiAzMDAgZXNcblxuICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4gICAgICAjZGVmaW5lIHZhcnlpbmcgaW5cbiAgICAgICNkZWZpbmUgdGV4dHVyZTJEIHRleHR1cmVcbiAgICAgICNkZWZpbmUgZ2xfRnJhZ0NvbG9yIEZyYWdDb2xvclxuXG4gICAgICBvdXQgdmVjNCBGcmFnQ29sb3I7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnQxMDBcbiAgICBsZXQgdmVydGV4U2hhZGVyID0gdmVydGV4MTAwXG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci5pc1dlYmdsMikge1xuICAgICAgZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudDMwMFxuICAgICAgdmVydGV4U2hhZGVyID0gdmVydGV4MzAwXG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgY3VsbEZhY2U6IG51bGwsXG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIGZyYWdtZW50OiBmcmFnbWVudFNoYWRlcixcbiAgICAgIHZlcnRleDogdmVydGV4U2hhZGVyLFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoXCIjMDAwXCIpIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCh7XG4gICAgICBmb250LFxuICAgICAgbGV0dGVyU3BhY2luZzogLTAuMDUsXG4gICAgICBzaXplOiAwLjAyNSxcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIHdvcmRTcGFjaW5nOiAwXG4gICAgfSlcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEdlb21ldHJ5KHRoaXMuZ2wsIHtcbiAgICAgIHBvc2l0aW9uOiB7IHNpemU6IDMsIGRhdGE6IHRleHQuYnVmZmVycy5wb3NpdGlvbiB9LFxuICAgICAgdXY6IHsgc2l6ZTogMiwgZGF0YTogdGV4dC5idWZmZXJzLnV2IH0sXG4gICAgICBpZDogeyBzaXplOiAxLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMuaWQgfSxcbiAgICAgIGluZGV4OiB7IGRhdGE6IHRleHQuYnVmZmVycy5pbmRleCB9XG4gICAgfSlcblxuICAgIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpXG5cbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7IGdlb21ldHJ5LCBwcm9ncmFtOiB0aGlzLnByb2dyYW0gfSlcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9IC10aGlzLnBsYW5lLnNjYWxlLnkgKiAwLjUgLSAwLjAzXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAtdGhpcy5wbGFuZS5zY2FsZS54ICogMC41XG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnBsYW5lKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NmI4NjBiZmI1MjAxMjgzMTQ4Y1wiKSJdLCJuYW1lcyI6WyJBdXRvQmluZCIsIkNvbG9yIiwiR2VvbWV0cnkiLCJNZXNoIiwiUHJvZ3JhbSIsIlRleHQiLCJUZXh0dXJlIiwiZm9udCIsInNyYyIsImZyYWdtZW50IiwidmVydGV4IiwiY29uc3RydWN0b3IiLCJnbCIsInBsYW5lIiwicmVuZGVyZXIiLCJ0ZXh0IiwiY3JlYXRlU2hhZGVyIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJnZW5lcmF0ZU1pcG1hcHMiLCJ0ZXh0dXJlSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJpbWFnZSIsInZlcnRleDEwMCIsImZyYWdtZW50MTAwIiwidmVydGV4MzAwIiwiZnJhZ21lbnQzMDAiLCJmcmFnbWVudFNoYWRlciIsInZlcnRleFNoYWRlciIsImlzV2ViZ2wyIiwicHJvZ3JhbSIsImN1bGxGYWNlIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsInRyYW5zcGFyZW50IiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInRNYXAiLCJsZXR0ZXJTcGFjaW5nIiwic2l6ZSIsIndvcmRTcGFjaW5nIiwiZ2VvbWV0cnkiLCJwb3NpdGlvbiIsImRhdGEiLCJidWZmZXJzIiwidXYiLCJpZCIsImluZGV4IiwiY29tcHV0ZUJvdW5kaW5nQm94IiwibWVzaCIsInkiLCJzY2FsZSIsIngiLCJzZXRQYXJlbnQiXSwic291cmNlUm9vdCI6IiJ9