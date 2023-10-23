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
    this.mesh.position.x = -this.plane.scale.x * 0.5;
    this.mesh.setParent(this.plane);
  }
  update() {
    console.log("update TITLE");
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d48f4a91d3d3af90d16d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NjNmNDZhNjg1OTNlOWMxYWMzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUVtQztBQUVKO0FBQ0Y7QUFFSDtBQUNKO0FBRXRELGlFQUFlLE1BQU07RUFDbkJXLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLFFBQVE7SUFBRUM7RUFBSyxDQUFDLEVBQUU7SUFDekNmLHFEQUFRLENBQUMsSUFBSSxDQUFDO0lBRWQsSUFBSSxDQUFDWSxFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUVoQixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFFakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQztFQUNoQztFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDYixNQUFNSSxPQUFPLEdBQUcsSUFBSWQsd0NBQU8sQ0FBQyxJQUFJLENBQUNNLEVBQUUsRUFBRTtNQUFFUyxlQUFlLEVBQUU7SUFBTSxDQUFDLENBQUM7SUFDaEUsTUFBTUMsWUFBWSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0lBRWhDRCxZQUFZLENBQUNkLEdBQUcsR0FBR0Esd0VBQUc7SUFDdEJjLFlBQVksQ0FBQ0UsTUFBTSxHQUFHQyxDQUFDLElBQUtMLE9BQU8sQ0FBQ00sS0FBSyxHQUFHSixZQUFhO0lBRXpELE1BQU1LLFNBQVMsR0FBSSxHQUFFakIsaUVBQU8sRUFBQztJQUU3QixNQUFNa0IsV0FBVyxHQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUW5CLG1FQUFTO0FBQ2pCLEtBQUs7SUFFRCxNQUFNb0IsU0FBUyxHQUFJO0FB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ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL1RpdGxlLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcblxuaW1wb3J0IHsgQ29sb3IsIEdlb21ldHJ5LCBNZXNoLCBQcm9ncmFtLCBUZXh0LCBUZXh0dXJlIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCBmb250IGZyb20gXCIuLi8uLi8uLi8uLi9mb250cy9wcG5ldWVNb250cmVhbC1tZWRpdW0uanNvblwiXG5pbXBvcnQgc3JjIGZyb20gXCIuLi8uLi8uLi8uLi9mb250cy9wcG5ldWVNb250cmVhbC1tZWRpdW0ucG5nXCJcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL3RleHQtZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL3RleHQtdmVydGV4Lmdsc2xcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHBsYW5lLCByZW5kZXJlciwgdGV4dCB9KSB7XG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMucGxhbmUgPSBwbGFuZVxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMudGV4dCA9IHRleHRcblxuICAgIHRoaXMuY3JlYXRlU2hhZGVyKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuXG4gICAgY29uc29sZS5sb2codGhpcy50ZXh0LCBcInRleHRcIilcbiAgfVxuXG4gIGNyZWF0ZVNoYWRlcigpIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbCwgeyBnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlIH0pXG4gICAgY29uc3QgdGV4dHVyZUltYWdlID0gbmV3IEltYWdlKClcblxuICAgIHRleHR1cmVJbWFnZS5zcmMgPSBzcmNcbiAgICB0ZXh0dXJlSW1hZ2Uub25sb2FkID0gXyA9PiAodGV4dHVyZS5pbWFnZSA9IHRleHR1cmVJbWFnZSlcblxuICAgIGNvbnN0IHZlcnRleDEwMCA9IGAke3ZlcnRleH1gXG5cbiAgICBjb25zdCBmcmFnbWVudDEwMCA9IGBcbiAgICAgICNleHRlbnNpb24gR0xfT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzIDogZW5hYmxlXG5cbiAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcblxuICAgICAgJHtmcmFnbWVudH1cbiAgICBgXG5cbiAgICBjb25zdCB2ZXJ0ZXgzMDAgPSBgI3ZlcnNpb24gMzAwIGVzXG5cbiAgICAgICNkZWZpbmUgYXR0cmlidXRlIGluXG4gICAgICAjZGVmaW5lIHZhcnlpbmcgb3V0XG5cbiAgICAgICR7dmVydGV4fVxuICAgIGBcblxuICAgIGNvbnN0IGZyYWdtZW50MzAwID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICNkZWZpbmUgdmFyeWluZyBpblxuICAgICAgI2RlZmluZSB0ZXh0dXJlMkQgdGV4dHVyZVxuICAgICAgI2RlZmluZSBnbF9GcmFnQ29sb3IgRnJhZ0NvbG9yXG5cbiAgICAgIG91dCB2ZWM0IEZyYWdDb2xvcjtcblxuICAgICAgJHtmcmFnbWVudH1cbiAgICBgXG5cbiAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudDEwMFxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXgxMDBcblxuICAgIGlmICh0aGlzLnJlbmRlcmVyLmlzV2ViZ2wyKSB7XG4gICAgICBmcmFnbWVudFNoYWRlciA9IGZyYWdtZW50MzAwXG4gICAgICB2ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXgzMDBcbiAgICB9XG5cbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBjdWxsRmFjZTogbnVsbCxcbiAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgZnJhZ21lbnQ6IGZyYWdtZW50U2hhZGVyLFxuICAgICAgdmVydGV4OiB2ZXJ0ZXhTaGFkZXIsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1Q29sb3I6IHsgdmFsdWU6IG5ldyBDb2xvcihcIiMwMDBcIikgfSxcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGV4dHVyZSB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KHtcbiAgICAgIGZvbnQsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAtMC4wNSxcbiAgICAgIHNpemU6IDAuMDgsXG4gICAgICB0ZXh0OiB0aGlzLnRleHQsXG4gICAgICB3b3JkU3BhY2luZzogMFxuICAgIH0pXG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSh0aGlzLmdsLCB7XG4gICAgICBwb3NpdGlvbjogeyBzaXplOiAzLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMucG9zaXRpb24gfSxcbiAgICAgIHV2OiB7IHNpemU6IDIsIGRhdGE6IHRleHQuYnVmZmVycy51diB9LFxuICAgICAgaWQ6IHsgc2l6ZTogMSwgZGF0YTogdGV4dC5idWZmZXJzLmlkIH0sXG4gICAgICBpbmRleDogeyBkYXRhOiB0ZXh0LmJ1ZmZlcnMuaW5kZXggfVxuICAgIH0pXG5cbiAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKVxuXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwgeyBnZW9tZXRyeSwgcHJvZ3JhbTogdGhpcy5wcm9ncmFtIH0pXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAtdGhpcy5wbGFuZS5zY2FsZS55ICogMC41IC0gMC4wODVcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9IC10aGlzLnBsYW5lLnNjYWxlLnggKiAwLjVcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMucGxhbmUpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGUgVElUTEVcIilcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDQ4ZjRhOTFkM2QzYWY5MGQxNmRcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJDb2xvciIsIkdlb21ldHJ5IiwiTWVzaCIsIlByb2dyYW0iLCJUZXh0IiwiVGV4dHVyZSIsImZvbnQiLCJzcmMiLCJmcmFnbWVudCIsInZlcnRleCIsImNvbnN0cnVjdG9yIiwiZ2wiLCJwbGFuZSIsInJlbmRlcmVyIiwidGV4dCIsImNyZWF0ZVNoYWRlciIsImNyZWF0ZU1lc2giLCJjb25zb2xlIiwibG9nIiwidGV4dHVyZSIsImdlbmVyYXRlTWlwbWFwcyIsInRleHR1cmVJbWFnZSIsIkltYWdlIiwib25sb2FkIiwiXyIsImltYWdlIiwidmVydGV4MTAwIiwiZnJhZ21lbnQxMDAiLCJ2ZXJ0ZXgzMDAiLCJmcmFnbWVudDMwMCIsImZyYWdtZW50U2hhZGVyIiwidmVydGV4U2hhZGVyIiwiaXNXZWJnbDIiLCJwcm9ncmFtIiwiY3VsbEZhY2UiLCJkZXB0aFRlc3QiLCJkZXB0aFdyaXRlIiwidHJhbnNwYXJlbnQiLCJ1bmlmb3JtcyIsInVDb2xvciIsInZhbHVlIiwidE1hcCIsImxldHRlclNwYWNpbmciLCJzaXplIiwid29yZFNwYWNpbmciLCJnZW9tZXRyeSIsInBvc2l0aW9uIiwiZGF0YSIsImJ1ZmZlcnMiLCJ1diIsImlkIiwiaW5kZXgiLCJjb21wdXRlQm91bmRpbmdCb3giLCJtZXNoIiwieSIsInNjYWxlIiwieCIsInNldFBhcmVudCIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=