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
          value: new ogl__WEBPACK_IMPORTED_MODULE_7__.Color("#545050")
        },
        tMap: {
          value: texture
        }
      }
    });
  }
  createMesh() {
    const text = new ogl__WEBPACK_IMPORTED_MODULE_8__.Text({
      align: "center",
      font: _fonts_ppneueMontreal_medium_json__WEBPACK_IMPORTED_MODULE_1__,
      // letterSpacing: -0.05,
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
/******/ 	__webpack_require__.h = () => ("f25ce78e6ff1cc6c7c85")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ODg4YzI4MWExYmYwNzk0Yzc4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUVtQztBQUVKO0FBQ0Y7QUFFSDtBQUNKO0FBRXRELGlFQUFlLE1BQU07RUFDbkJXLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLFFBQVE7SUFBRUM7RUFBSyxDQUFDLEVBQUU7SUFDekNmLHFEQUFRLENBQUMsSUFBSSxDQUFDO0lBRWQsSUFBSSxDQUFDWSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUVoQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFFakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQztFQUNoQztFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYixNQUFNSSxPQUFPLEdBQUcsSUFBSWQsd0NBQU8sQ0FBQyxJQUFJLENBQUNNLEVBQUUsRUFBRTtNQUFFUyxlQUFlLEVBQUU7SUFBTSxDQUFDLENBQUM7SUFDaEUsTUFBTUMsWUFBWSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0lBRWhDRCxZQUFZLENBQUNkLEdBQUcsR0FBR0Esd0VBQUc7SUFDdEJjLFlBQVksQ0FBQ0UsTUFBTSxHQUFHQyxDQUFDLElBQUtMLE9BQU8sQ0FBQ00sS0FBSyxHQUFHSixZQUFhO0lBRXpELE1BQU1LLFNBQVMsR0FBSSxHQUFFakIsaUVBQU8sRUFBQztJQUU3QixNQUFNa0IsV0FBVyxHQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUW5CLG1FQUFTO0FBQ2pCLEtBQUs7SUFFRCxNQUFNb0IsU0FBUyxHQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUW5CLGlFQUFPO0FBQ2YsS0FBSztJQUVELE1BQU1vQixXQUFXLEdBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUXJCLG1FQUFTO0FBQ2pCLEtBQUs7SUFFRCxJQUFJc0IsY0FBYyxHQUFHSCxXQUFXO0lBQ2hDLElBQUlJLFlBQVksR0FBR0wsU0FBUztJQUU1QixJQUFJLElBQUksQ0FBQ2IsUUFBUSxDQUFDbUIsUUFBUSxFQUFFO01BQzFCRixjQUFjLEdBQUdELFdBQVc7TUFDNUJFLFlBQVksR0FBR0gsU0FBUztJQUMxQjtJQUVBLElBQUksQ0FBQ0ssT0FBTyxHQUFHLElBQUk5Qix3Q0FBTyxDQUFDLElBQUksQ0FBQ1EsRUFBRSxFQUFFO01BQ2xDdUIsUUFBUSxFQUFFLElBQUk7TUFDZEMsU0FBUyxFQUFFLEtBQUs7TUFDaEJDLFVBQVUsRUFBRSxLQUFLO01BQ2pCQyxXQUFXLEVBQUUsSUFBSTtNQUNqQjdCLFFBQVEsRUFBRXNCLGNBQWM7TUFDeEJyQixNQUFNLEVBQUVzQixZQUFZO01BQ3BCTyxRQUFRLEVBQUU7UUFDUkMsTUFBTSxFQUFFO1VBQUVDLEtBQUssRUFBRSxJQUFJeEMsc0NBQUssQ0FBQyxTQUFTO1FBQUUsQ0FBQztRQUN2Q3lDLElBQUksRUFBRTtVQUFFRCxLQUFLLEVBQUVyQjtRQUFRO01BQ3pCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQUgsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsTUFBTUYsSUFBSSxHQUFHLElBQUlWLHFDQUFJLENBQUM7TUFDcEJzQyxLQUFLLEVBQUUsUUFBUTtNQUNmcEMsSUFBSTtNQUNKO01BQ0FxQyxJQUFJLEVBQUUsSUFBSTtNQUNWN0IsSUFBSSxFQUFFLElBQUksQ0FBQ0EsSUFBSTtNQUNmOEIsV0FBVyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsTUFBTUMsUUFBUSxHQUFHLElBQUk1Qyx5Q0FBUSxDQUFDLElBQUksQ0FBQ1UsRUFBRSxFQUFFO01BQ3JDbUMsUUFBUSxFQUFFO1FBQUVILElBQUksRUFBRSxDQUFDO1FBQUVJLElBQUksRUFBRWpDLElBQUksQ0FBQ2tDLE9BQU8sQ0FBQ0Y7TUFBUyxDQUFDO01BQ2xERyxFQUFFLEVBQUU7UUFBRU4sSUFBSSxFQUFFLENBQUM7UUFBRUksSUFBSSxFQUFFakMsSUFBSSxDQUFDa0MsT0FBTyxDQUFDQztNQUFHLENBQUM7TUFDdENDLEVBQUUsRUFBRTtRQUFFUCxJQUFJLEVBQUUsQ0FBQztRQUFFSSxJQUFJLEVBQUVqQyxJQUFJLENBQUNrQyxPQUFPLENBQUNFO01BQUcsQ0FBQztNQUN0Q0MsS0FBSyxFQUFFO1FBQUVKLElBQUksRUFBRWpDLElBQUksQ0FBQ2tDLE9BQU8sQ0FBQ0c7TUFBTTtJQUNwQyxDQUFDLENBQUM7SUFFRk4sUUFBUSxDQUFDTyxrQkFBa0IsQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUluRCxzQ0FBSSxDQUFDLElBQUksQ0FBQ1MsRUFBRSxFQUFFO01BQUVrQyxRQUFRO01BQUVaLE9BQU8sRUFBRSxJQUFJLENBQUNBO0lBQVEsQ0FBQyxDQUFDO0lBQ2xFLElBQUksQ0FBQ29CLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMxQyxLQUFLLENBQUMyQyxLQUFLLENBQUNELENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSztJQUN4RCxJQUFJLENBQUNELElBQUksQ0FBQ0csU0FBUyxDQUFDLElBQUksQ0FBQzVDLEtBQUssQ0FBQztFQUNqQztBQUNGOzs7Ozs7OztVQzVHQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9UaXRsZS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5cbmltcG9ydCB7IENvbG9yLCBHZW9tZXRyeSwgTWVzaCwgUHJvZ3JhbSwgVGV4dCwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgZm9udCBmcm9tIFwiLi4vLi4vLi4vLi4vZm9udHMvcHBuZXVlTW9udHJlYWwtbWVkaXVtLmpzb25cIlxuaW1wb3J0IHNyYyBmcm9tIFwiLi4vLi4vLi4vLi4vZm9udHMvcHBuZXVlTW9udHJlYWwtbWVkaXVtLnBuZ1wiXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy90ZXh0LWZyYWdtZW50Lmdsc2xcIlxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy90ZXh0LXZlcnRleC5nbHNsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBwbGFuZSwgcmVuZGVyZXIsIHRleHQgfSkge1xuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnBsYW5lID0gcGxhbmVcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB0aGlzLnRleHQgPSB0ZXh0XG5cbiAgICB0aGlzLmNyZWF0ZVNoYWRlcigpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcblxuICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dCwgXCJ0ZXh0XCIpXG4gIH1cblxuICBjcmVhdGVTaGFkZXIoKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHsgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZSB9KVxuICAgIGNvbnN0IHRleHR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpXG5cbiAgICB0ZXh0dXJlSW1hZ2Uuc3JjID0gc3JjXG4gICAgdGV4dHVyZUltYWdlLm9ubG9hZCA9IF8gPT4gKHRleHR1cmUuaW1hZ2UgPSB0ZXh0dXJlSW1hZ2UpXG5cbiAgICBjb25zdCB2ZXJ0ZXgxMDAgPSBgJHt2ZXJ0ZXh9YFxuXG4gICAgY29uc3QgZnJhZ21lbnQxMDAgPSBgXG4gICAgICAjZXh0ZW5zaW9uIEdMX09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcyA6IGVuYWJsZVxuXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgY29uc3QgdmVydGV4MzAwID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgICAjZGVmaW5lIGF0dHJpYnV0ZSBpblxuICAgICAgI2RlZmluZSB2YXJ5aW5nIG91dFxuXG4gICAgICAke3ZlcnRleH1cbiAgICBgXG5cbiAgICBjb25zdCBmcmFnbWVudDMwMCA9IGAjdmVyc2lvbiAzMDAgZXNcblxuICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4gICAgICAjZGVmaW5lIHZhcnlpbmcgaW5cbiAgICAgICNkZWZpbmUgdGV4dHVyZTJEIHRleHR1cmVcbiAgICAgICNkZWZpbmUgZ2xfRnJhZ0NvbG9yIEZyYWdDb2xvclxuXG4gICAgICBvdXQgdmVjNCBGcmFnQ29sb3I7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnQxMDBcbiAgICBsZXQgdmVydGV4U2hhZGVyID0gdmVydGV4MTAwXG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci5pc1dlYmdsMikge1xuICAgICAgZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudDMwMFxuICAgICAgdmVydGV4U2hhZGVyID0gdmVydGV4MzAwXG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgY3VsbEZhY2U6IG51bGwsXG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIGZyYWdtZW50OiBmcmFnbWVudFNoYWRlcixcbiAgICAgIHZlcnRleDogdmVydGV4U2hhZGVyLFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoXCIjNTQ1MDUwXCIpIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCh7XG4gICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGZvbnQsXG4gICAgICAvLyBsZXR0ZXJTcGFjaW5nOiAtMC4wNSxcbiAgICAgIHNpemU6IDAuMDgsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB3b3JkU3BhY2luZzogMFxuICAgIH0pXG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSh0aGlzLmdsLCB7XG4gICAgICBwb3NpdGlvbjogeyBzaXplOiAzLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMucG9zaXRpb24gfSxcbiAgICAgIHV2OiB7IHNpemU6IDIsIGRhdGE6IHRleHQuYnVmZmVycy51diB9LFxuICAgICAgaWQ6IHsgc2l6ZTogMSwgZGF0YTogdGV4dC5idWZmZXJzLmlkIH0sXG4gICAgICBpbmRleDogeyBkYXRhOiB0ZXh0LmJ1ZmZlcnMuaW5kZXggfVxuICAgIH0pXG5cbiAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwgeyBnZW9tZXRyeSwgcHJvZ3JhbTogdGhpcy5wcm9ncmFtIH0pXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAtdGhpcy5wbGFuZS5zY2FsZS55ICogMC41IC0gMC4wODVcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMucGxhbmUpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImYyNWNlNzhlNmZmMWNjNmM3Yzg1XCIpIl0sIm5hbWVzIjpbIkF1dG9CaW5kIiwiQ29sb3IiLCJHZW9tZXRyeSIsIk1lc2giLCJQcm9ncmFtIiwiVGV4dCIsIlRleHR1cmUiLCJmb250Iiwic3JjIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJjb25zdHJ1Y3RvciIsImdsIiwicGxhbmUiLCJyZW5kZXJlciIsInRleHQiLCJjcmVhdGVTaGFkZXIiLCJjcmVhdGVNZXNoIiwiY29uc29sZSIsImxvZyIsInRleHR1cmUiLCJnZW5lcmF0ZU1pcG1hcHMiLCJ0ZXh0dXJlSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJpbWFnZSIsInZlcnRleDEwMCIsImZyYWdtZW50MTAwIiwidmVydGV4MzAwIiwiZnJhZ21lbnQzMDAiLCJmcmFnbWVudFNoYWRlciIsInZlcnRleFNoYWRlciIsImlzV2ViZ2wyIiwicHJvZ3JhbSIsImN1bGxGYWNlIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsInRyYW5zcGFyZW50IiwidW5pZm9ybXMiLCJ1Q29sb3IiLCJ2YWx1ZSIsInRNYXAiLCJhbGlnbiIsInNpemUiLCJ3b3JkU3BhY2luZyIsImdlb21ldHJ5IiwicG9zaXRpb24iLCJkYXRhIiwiYnVmZmVycyIsInV2IiwiaWQiLCJpbmRleCIsImNvbXB1dGVCb3VuZGluZ0JveCIsIm1lc2giLCJ5Iiwic2NhbGUiLCJzZXRQYXJlbnQiXSwic291cmNlUm9vdCI6IiJ9