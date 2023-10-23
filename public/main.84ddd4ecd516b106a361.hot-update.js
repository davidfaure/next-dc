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
    text,
    sizes
  }) {
    (0,auto_bind__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    this.gl = gl;
    this.plane = plane;
    this.renderer = renderer;
    this.text = text;
    this.sizes = sizes;
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
        },
        uStrength: {
          value: 0
        },
        uViewportSizes: {
          value: [this.sizes.width, this.sizes.height]
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
/******/ 	__webpack_require__.h = () => ("b4d1c6f0a5579aab2876")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2hELEtBQUssQ0FBQztFQUNqQztFQUVBaUQsTUFBTUEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ1osSUFBSSxDQUFDOUIsT0FBTyxDQUFDSyxRQUFRLENBQUNJLFNBQVMsQ0FBQ0YsS0FBSyxHQUFHdUIsS0FBSztFQUMvQztBQUNGOzs7Ozs7OztVQ25IQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9TdWJUaXRsZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5cbmltcG9ydCB7IENvbG9yLCBHZW9tZXRyeSwgTWVzaCwgUHJvZ3JhbSwgVGV4dCwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgZm9udCBmcm9tIFwiLi4vLi4vLi4vLi4vZm9udHMvcHBuZXVlTW9udHJlYWwtbWVkaXVtLmpzb25cIlxuaW1wb3J0IHNyYyBmcm9tIFwiLi4vLi4vLi4vLi4vZm9udHMvcHBuZXVlTW9udHJlYWwtbWVkaXVtLnBuZ1wiXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy90ZXh0LWZyYWdtZW50Lmdsc2xcIlxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy90ZXh0LXZlcnRleC5nbHNsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBwbGFuZSwgcmVuZGVyZXIsIHRleHQsIHNpemVzIH0pIHtcbiAgICBBdXRvQmluZCh0aGlzKVxuXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5wbGFuZSA9IHBsYW5lXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy50ZXh0ID0gdGV4dFxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy5jcmVhdGVTaGFkZXIoKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gIH1cblxuICBjcmVhdGVTaGFkZXIoKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHsgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZSB9KVxuICAgIGNvbnN0IHRleHR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpXG5cbiAgICB0ZXh0dXJlSW1hZ2Uuc3JjID0gc3JjXG4gICAgdGV4dHVyZUltYWdlLm9ubG9hZCA9IF8gPT4gKHRleHR1cmUuaW1hZ2UgPSB0ZXh0dXJlSW1hZ2UpXG5cbiAgICBjb25zdCB2ZXJ0ZXgxMDAgPSBgJHt2ZXJ0ZXh9YFxuXG4gICAgY29uc3QgZnJhZ21lbnQxMDAgPSBgXG4gICAgICAjZXh0ZW5zaW9uIEdMX09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcyA6IGVuYWJsZVxuXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgY29uc3QgdmVydGV4MzAwID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgICAjZGVmaW5lIGF0dHJpYnV0ZSBpblxuICAgICAgI2RlZmluZSB2YXJ5aW5nIG91dFxuXG4gICAgICAke3ZlcnRleH1cbiAgICBgXG5cbiAgICBjb25zdCBmcmFnbWVudDMwMCA9IGAjdmVyc2lvbiAzMDAgZXNcblxuICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4gICAgICAjZGVmaW5lIHZhcnlpbmcgaW5cbiAgICAgICNkZWZpbmUgdGV4dHVyZTJEIHRleHR1cmVcbiAgICAgICNkZWZpbmUgZ2xfRnJhZ0NvbG9yIEZyYWdDb2xvclxuXG4gICAgICBvdXQgdmVjNCBGcmFnQ29sb3I7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnQxMDBcbiAgICBsZXQgdmVydGV4U2hhZGVyID0gdmVydGV4MTAwXG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci5pc1dlYmdsMikge1xuICAgICAgZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudDMwMFxuICAgICAgdmVydGV4U2hhZGVyID0gdmVydGV4MzAwXG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgY3VsbEZhY2U6IG51bGwsXG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIGZyYWdtZW50OiBmcmFnbWVudFNoYWRlcixcbiAgICAgIHZlcnRleDogdmVydGV4U2hhZGVyLFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoXCIjMDAwXCIpIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRleHR1cmUgfSxcbiAgICAgICAgdVN0cmVuZ3RoOiB7IHZhbHVlOiAwIH0sXG4gICAgICAgIHVWaWV3cG9ydFNpemVzOiB7XG4gICAgICAgICAgdmFsdWU6IFt0aGlzLnNpemVzLndpZHRoLCB0aGlzLnNpemVzLmhlaWdodF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCh7XG4gICAgICBmb250LFxuICAgICAgbGV0dGVyU3BhY2luZzogLTAuMDUsXG4gICAgICBzaXplOiAwLjAzLFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgd29yZFNwYWNpbmc6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkodGhpcy5nbCwge1xuICAgICAgcG9zaXRpb246IHsgc2l6ZTogMywgZGF0YTogdGV4dC5idWZmZXJzLnBvc2l0aW9uIH0sXG4gICAgICB1djogeyBzaXplOiAyLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMudXYgfSxcbiAgICAgIGlkOiB7IHNpemU6IDEsIGRhdGE6IHRleHQuYnVmZmVycy5pZCB9LFxuICAgICAgaW5kZXg6IHsgZGF0YTogdGV4dC5idWZmZXJzLmluZGV4IH1cbiAgICB9KVxuXG4gICAgZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KClcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHsgZ2VvbWV0cnksIHByb2dyYW06IHRoaXMucHJvZ3JhbSB9KVxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gLXRoaXMucGxhbmUuc2NhbGUueSAqIDAuNSAtIDAuMDNcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9IC10aGlzLnBsYW5lLnNjYWxlLnggKiAwLjVcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMucGxhbmUpXG4gIH1cblxuICB1cGRhdGUoc3BlZWQpIHtcbiAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudVN0cmVuZ3RoLnZhbHVlID0gc3BlZWRcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjRkMWM2ZjBhNTU3OWFhYjI4NzZcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJDb2xvciIsIkdlb21ldHJ5IiwiTWVzaCIsIlByb2dyYW0iLCJUZXh0IiwiVGV4dHVyZSIsImZvbnQiLCJzcmMiLCJmcmFnbWVudCIsInZlcnRleCIsImNvbnN0cnVjdG9yIiwiZ2wiLCJwbGFuZSIsInJlbmRlcmVyIiwidGV4dCIsInNpemVzIiwiY3JlYXRlU2hhZGVyIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJnZW5lcmF0ZU1pcG1hcHMiLCJ0ZXh0dXJlSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJpbWFnZSIsInZlcnRleDEwMCIsImZyYWdtZW50MTAwIiwidmVydGV4MzAwIiwiZnJhZ21lbnQzMDAiLCJmcmFnbWVudFNoYWRlciIsInZlcnRleFNoYWRlciIsImlzV2ViZ2wyIiwicHJvZ3JhbSIsImN1bGxGYWNlIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsInRyYW5zcGFyZW50IiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInRNYXAiLCJ1U3RyZW5ndGgiLCJ1Vmlld3BvcnRTaXplcyIsIndpZHRoIiwiaGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsInNpemUiLCJ3b3JkU3BhY2luZyIsImdlb21ldHJ5IiwicG9zaXRpb24iLCJkYXRhIiwiYnVmZmVycyIsInV2IiwiaWQiLCJpbmRleCIsImNvbXB1dGVCb3VuZGluZ0JveCIsIm1lc2giLCJ5Iiwic2NhbGUiLCJ4Iiwic2V0UGFyZW50IiwidXBkYXRlIiwic3BlZWQiXSwic291cmNlUm9vdCI6IiJ9