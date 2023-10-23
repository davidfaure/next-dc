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
      size: 0.03,
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
  update(speed) {
    this.program.uniforms.uStrength.value = speed;
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2fda050476f22021a5c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXMvSG9tZS9TdWJUaXRsZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5cbmltcG9ydCB7IENvbG9yLCBHZW9tZXRyeSwgTWVzaCwgUHJvZ3JhbSwgVGV4dCwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgZm9udCBmcm9tIFwiLi4vLi4vLi4vLi4vZm9udHMvcHBuZXVlTW9udHJlYWwtbWVkaXVtLmpzb25cIlxuaW1wb3J0IHNyYyBmcm9tIFwiLi4vLi4vLi4vLi4vZm9udHMvcHBuZXVlTW9udHJlYWwtbWVkaXVtLnBuZ1wiXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy90ZXh0LWZyYWdtZW50Lmdsc2xcIlxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy90ZXh0LXZlcnRleC5nbHNsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBwbGFuZSwgcmVuZGVyZXIsIHRleHQgfSkge1xuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnBsYW5lID0gcGxhbmVcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB0aGlzLnRleHQgPSB0ZXh0XG5cbiAgICB0aGlzLmNyZWF0ZVNoYWRlcigpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgfVxuXG4gIGNyZWF0ZVNoYWRlcigpIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbCwgeyBnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlIH0pXG4gICAgY29uc3QgdGV4dHVyZUltYWdlID0gbmV3IEltYWdlKClcblxuICAgIHRleHR1cmVJbWFnZS5zcmMgPSBzcmNcbiAgICB0ZXh0dXJlSW1hZ2Uub25sb2FkID0gXyA9PiAodGV4dHVyZS5pbWFnZSA9IHRleHR1cmVJbWFnZSlcblxuICAgIGNvbnN0IHZlcnRleDEwMCA9IGAke3ZlcnRleH1gXG5cbiAgICBjb25zdCBmcmFnbWVudDEwMCA9IGBcbiAgICAgICNleHRlbnNpb24gR0xfT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzIDogZW5hYmxlXG5cbiAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcblxuICAgICAgJHtmcmFnbWVudH1cbiAgICBgXG5cbiAgICBjb25zdCB2ZXJ0ZXgzMDAgPSBgI3ZlcnNpb24gMzAwIGVzXG5cbiAgICAgICNkZWZpbmUgYXR0cmlidXRlIGluXG4gICAgICAjZGVmaW5lIHZhcnlpbmcgb3V0XG5cbiAgICAgICR7dmVydGV4fVxuICAgIGBcblxuICAgIGNvbnN0IGZyYWdtZW50MzAwID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICNkZWZpbmUgdmFyeWluZyBpblxuICAgICAgI2RlZmluZSB0ZXh0dXJlMkQgdGV4dHVyZVxuICAgICAgI2RlZmluZSBnbF9GcmFnQ29sb3IgRnJhZ0NvbG9yXG5cbiAgICAgIG91dCB2ZWM0IEZyYWdDb2xvcjtcblxuICAgICAgJHtmcmFnbWVudH1cbiAgICBgXG5cbiAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudDEwMFxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXgxMDBcblxuICAgIGlmICh0aGlzLnJlbmRlcmVyLmlzV2ViZ2wyKSB7XG4gICAgICBmcmFnbWVudFNoYWRlciA9IGZyYWdtZW50MzAwXG4gICAgICB2ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXgzMDBcbiAgICB9XG5cbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBjdWxsRmFjZTogbnVsbCxcbiAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgZnJhZ21lbnQ6IGZyYWdtZW50U2hhZGVyLFxuICAgICAgdmVydGV4OiB2ZXJ0ZXhTaGFkZXIsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1Q29sb3I6IHsgdmFsdWU6IG5ldyBDb2xvcihcIiMwMDBcIikgfSxcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KHtcbiAgICAgIGZvbnQsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAtMC4wNSxcbiAgICAgIHNpemU6IDAuMDMsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB3b3JkU3BhY2luZzogMFxuICAgIH0pXG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSh0aGlzLmdsLCB7XG4gICAgICBwb3NpdGlvbjogeyBzaXplOiAzLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMucG9zaXRpb24gfSxcbiAgICAgIHV2OiB7IHNpemU6IDIsIGRhdGE6IHRleHQuYnVmZmVycy51diB9LFxuICAgICAgaWQ6IHsgc2l6ZTogMSwgZGF0YTogdGV4dC5idWZmZXJzLmlkIH0sXG4gICAgICBpbmRleDogeyBkYXRhOiB0ZXh0LmJ1ZmZlcnMuaW5kZXggfVxuICAgIH0pXG5cbiAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwgeyBnZW9tZXRyeSwgcHJvZ3JhbTogdGhpcy5wcm9ncmFtIH0pXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAtdGhpcy5wbGFuZS5zY2FsZS55ICogMC41IC0gMC4wM1xuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gLXRoaXMucGxhbmUuc2NhbGUueCAqIDAuNVxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5wbGFuZSlcbiAgfVxuXG4gIHVwZGF0ZShzcGVlZCkge1xuICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51U3RyZW5ndGgudmFsdWUgPSBzcGVlZFxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMmZkYTA1MDQ3NmYyMjAyMWE1Y1wiKSJdLCJuYW1lcyI6WyJBdXRvQmluZCIsIkNvbG9yIiwiR2VvbWV0cnkiLCJNZXNoIiwiUHJvZ3JhbSIsIlRleHQiLCJUZXh0dXJlIiwiZm9udCIsInNyYyIsImZyYWdtZW50IiwidmVydGV4IiwiY29uc3RydWN0b3IiLCJnbCIsInBsYW5lIiwicmVuZGVyZXIiLCJ0ZXh0IiwiY3JlYXRlU2hhZGVyIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJnZW5lcmF0ZU1pcG1hcHMiLCJ0ZXh0dXJlSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJpbWFnZSIsInZlcnRleDEwMCIsImZyYWdtZW50MTAwIiwidmVydGV4MzAwIiwiZnJhZ21lbnQzMDAiLCJmcmFnbWVudFNoYWRlciIsInZlcnRleFNoYWRlciIsImlzV2ViZ2wyIiwicHJvZ3JhbSIsImN1bGxGYWNlIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsInRyYW5zcGFyZW50IiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInRNYXAiLCJsZXR0ZXJTcGFjaW5nIiwic2l6ZSIsIndvcmRTcGFjaW5nIiwiZ2VvbWV0cnkiLCJwb3NpdGlvbiIsImRhdGEiLCJidWZmZXJzIiwidXYiLCJpZCIsImluZGV4IiwiY29tcHV0ZUJvdW5kaW5nQm94IiwibWVzaCIsInkiLCJzY2FsZSIsIngiLCJzZXRQYXJlbnQiLCJ1cGRhdGUiLCJzcGVlZCIsInVTdHJlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=