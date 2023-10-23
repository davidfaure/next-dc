"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Home/Media.js":
/*!*********************************************!*\
  !*** ./app/components/Canvas/Home/Media.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _shaders_gallery_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/gallery-vertex.glsl */ "./app/shaders/gallery-vertex.glsl");
/* harmony import */ var _shaders_gallery_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shaders/gallery-fragment.glsl */ "./app/shaders/gallery-fragment.glsl");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./app/components/Canvas/Home/Title.js");
/* harmony import */ var _SubTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubTitle */ "./app/components/Canvas/Home/SubTitle.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    element,
    gl,
    geometry,
    scene,
    sizes,
    title,
    subTitle,
    renderer
  }) {
    this.element = element;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.sizes = sizes;
    this.title = title;
    this.subTitle = subTitle;
    this.renderer = renderer;
    this.time = 0;
    this.extra = 0;
    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createTitle();
  }
  createTexture() {
    // this.texture = window.TEXTURES[this.element.getAttribute("src")]
    const image = this.element.querySelector("img");
    this.texture = window.TEXTURES[image.getAttribute("src")];
  }
  createProgram() {
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_4__.Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      fragment: _shaders_gallery_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
      vertex: _shaders_gallery_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
      uniforms: {
        tMap: {
          value: this.texture
        },
        uOffset: {
          value: 0
        }
      }
    });
  }
  createMesh() {
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_5__.Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.mesh.setParent(this.scene);
  }
  createTitle() {
    this.titleText = new _Title__WEBPACK_IMPORTED_MODULE_2__["default"]({
      gl: this.gl,
      plane: this.mesh,
      renderer: this.renderer,
      text: this.title
    });
    this.subTitleText = new _SubTitle__WEBPACK_IMPORTED_MODULE_3__["default"]({
      gl: this.gl,
      plane: this.mesh,
      renderer: this.renderer,
      text: this.subTitle
    });
  }
  createBounds({
    sizes
  }) {
    this.sizes = sizes;
    this.bounds = this.element.getBoundingClientRect();
    this.updateScale();
    this.updateX();
    this.updateY();
  }
  show() {
    gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.fromTo(this.program.uniforms.uAlpha, {
      value: 0
    }, {
      value: 1
    });
  }
  hide() {
    gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(this.program.uniforms.uAlpha, {
      value: 1
    });
  }
  updateScale() {
    this.height = this.bounds.height / window.innerHeight;
    this.width = this.bounds.width / window.innerWidth;
    this.mesh.scale.x = this.sizes.width * this.width;
    this.mesh.scale.y = this.sizes.height * this.height;
  }
  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth;
    this.mesh.position.x = -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width + this.extra;
  }
  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight;
    this.mesh.position.y = this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height;
  }
  update(scroll, speed) {
    if (!this.bounds) return;
    this.updateX(scroll);
    this.updateY(0);

    // const OFFSET_SCALE = 0.1
    // const offset = [speed * OFFSET_SCALE, speed * OFFSET_SCALE]
    // this.program.uniforms.uOffset.value = offset
  }

  onResize(sizes, scroll) {
    this.extra = 0;
    this.createBounds(sizes);
    this.updateX(scroll);
    this.updateY(0);
  }
});

/***/ }),

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
      align: "center",
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
    this.mesh.setParent(this.plane);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fcc361cb599538211525")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvU3ViVGl0bGUuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcbmltcG9ydCBTdWJUaXRsZSBmcm9tIFwiLi9TdWJUaXRsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnbCwgZ2VvbWV0cnksIHNjZW5lLCBzaXplcywgdGl0bGUsIHN1YlRpdGxlLCByZW5kZXJlciB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuc3ViVGl0bGUgPSBzdWJUaXRsZVxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuXG4gICAgdGhpcy50aW1lID0gMFxuXG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuICAgIHRoaXMuY3JlYXRlVGl0bGUoKVxuICB9XG5cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICAvLyB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcInNyY1wiKV1cbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG5cbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICB9XG5cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgICB1T2Zmc2V0OiB7XG4gICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZVRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVUZXh0ID0gbmV3IFRpdGxlKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgcGxhbmU6IHRoaXMubWVzaCxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgdGV4dDogdGhpcy50aXRsZVxuICAgIH0pXG5cbiAgICB0aGlzLnN1YlRpdGxlVGV4dCA9IG5ldyBTdWJUaXRsZSh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHBsYW5lOiB0aGlzLm1lc2gsXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgIHRleHQ6IHRoaXMuc3ViVGl0bGVcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAxXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBnc2FwLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID1cbiAgICAgIC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG4gIH1cblxuICB1cGRhdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgdGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwsIHNwZWVkKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcblxuICAgIC8vIGNvbnN0IE9GRlNFVF9TQ0FMRSA9IDAuMVxuICAgIC8vIGNvbnN0IG9mZnNldCA9IFtzcGVlZCAqIE9GRlNFVF9TQ0FMRSwgc3BlZWQgKiBPRkZTRVRfU0NBTEVdXG4gICAgLy8gdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVPZmZzZXQudmFsdWUgPSBvZmZzZXRcbiAgfVxuXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0gMFxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcbiAgfVxufVxuIiwiaW1wb3J0IEF1dG9CaW5kIGZyb20gXCJhdXRvLWJpbmRcIlxuXG5pbXBvcnQgeyBDb2xvciwgR2VvbWV0cnksIE1lc2gsIFByb2dyYW0sIFRleHQsIFRleHR1cmUgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IGZvbnQgZnJvbSBcIi4uLy4uLy4uLy4uL2ZvbnRzL3BwbmV1ZU1vbnRyZWFsLW1lZGl1bS5qc29uXCJcbmltcG9ydCBzcmMgZnJvbSBcIi4uLy4uLy4uLy4uL2ZvbnRzL3BwbmV1ZU1vbnRyZWFsLW1lZGl1bS5wbmdcIlxuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvdGV4dC1mcmFnbWVudC5nbHNsXCJcbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvdGV4dC12ZXJ0ZXguZ2xzbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgcGxhbmUsIHJlbmRlcmVyLCB0ZXh0IH0pIHtcbiAgICBBdXRvQmluZCh0aGlzKVxuXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5wbGFuZSA9IHBsYW5lXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy50ZXh0ID0gdGV4dFxuXG4gICAgdGhpcy5jcmVhdGVTaGFkZXIoKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gIH1cblxuICBjcmVhdGVTaGFkZXIoKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHsgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZSB9KVxuICAgIGNvbnN0IHRleHR1cmVJbWFnZSA9IG5ldyBJbWFnZSgpXG5cbiAgICB0ZXh0dXJlSW1hZ2Uuc3JjID0gc3JjXG4gICAgdGV4dHVyZUltYWdlLm9ubG9hZCA9IF8gPT4gKHRleHR1cmUuaW1hZ2UgPSB0ZXh0dXJlSW1hZ2UpXG5cbiAgICBjb25zdCB2ZXJ0ZXgxMDAgPSBgJHt2ZXJ0ZXh9YFxuXG4gICAgY29uc3QgZnJhZ21lbnQxMDAgPSBgXG4gICAgICAjZXh0ZW5zaW9uIEdMX09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcyA6IGVuYWJsZVxuXG4gICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgY29uc3QgdmVydGV4MzAwID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG4gICAgICAjZGVmaW5lIGF0dHJpYnV0ZSBpblxuICAgICAgI2RlZmluZSB2YXJ5aW5nIG91dFxuXG4gICAgICAke3ZlcnRleH1cbiAgICBgXG5cbiAgICBjb25zdCBmcmFnbWVudDMwMCA9IGAjdmVyc2lvbiAzMDAgZXNcblxuICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4gICAgICAjZGVmaW5lIHZhcnlpbmcgaW5cbiAgICAgICNkZWZpbmUgdGV4dHVyZTJEIHRleHR1cmVcbiAgICAgICNkZWZpbmUgZ2xfRnJhZ0NvbG9yIEZyYWdDb2xvclxuXG4gICAgICBvdXQgdmVjNCBGcmFnQ29sb3I7XG5cbiAgICAgICR7ZnJhZ21lbnR9XG4gICAgYFxuXG4gICAgbGV0IGZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnQxMDBcbiAgICBsZXQgdmVydGV4U2hhZGVyID0gdmVydGV4MTAwXG5cbiAgICBpZiAodGhpcy5yZW5kZXJlci5pc1dlYmdsMikge1xuICAgICAgZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudDMwMFxuICAgICAgdmVydGV4U2hhZGVyID0gdmVydGV4MzAwXG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgY3VsbEZhY2U6IG51bGwsXG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgIGZyYWdtZW50OiBmcmFnbWVudFNoYWRlcixcbiAgICAgIHZlcnRleDogdmVydGV4U2hhZGVyLFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgQ29sb3IoXCIjMDAwXCIpIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRleHR1cmUgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dCh7XG4gICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGZvbnQsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAtMC4wNSxcbiAgICAgIHNpemU6IDAuMDI1LFxuICAgICAgdGV4dDogdGhpcy50ZXh0LFxuICAgICAgd29yZFNwYWNpbmc6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgR2VvbWV0cnkodGhpcy5nbCwge1xuICAgICAgcG9zaXRpb246IHsgc2l6ZTogMywgZGF0YTogdGV4dC5idWZmZXJzLnBvc2l0aW9uIH0sXG4gICAgICB1djogeyBzaXplOiAyLCBkYXRhOiB0ZXh0LmJ1ZmZlcnMudXYgfSxcbiAgICAgIGlkOiB7IHNpemU6IDEsIGRhdGE6IHRleHQuYnVmZmVycy5pZCB9LFxuICAgICAgaW5kZXg6IHsgZGF0YTogdGV4dC5idWZmZXJzLmluZGV4IH1cbiAgICB9KVxuXG4gICAgZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KClcblxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHsgZ2VvbWV0cnksIHByb2dyYW06IHRoaXMucHJvZ3JhbSB9KVxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID0gLXRoaXMucGxhbmUuc2NhbGUueSAqIDAuNSAtIDAuMDNcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMucGxhbmUpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZjYzM2MWNiNTk5NTM4MjExNTI1XCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwiVGV4dHVyZSIsInZlcnRleCIsImZyYWdtZW50IiwiZ3NhcCIsIlRpdGxlIiwiU3ViVGl0bGUiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21ldHJ5Iiwic2NlbmUiLCJzaXplcyIsInRpdGxlIiwic3ViVGl0bGUiLCJyZW5kZXJlciIsInRpbWUiLCJleHRyYSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImNyZWF0ZVRpdGxlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsImRlcHRoVGVzdCIsImRlcHRoV3JpdGUiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVPZmZzZXQiLCJtZXNoIiwic2V0UGFyZW50IiwidGl0bGVUZXh0IiwicGxhbmUiLCJ0ZXh0Iiwic3ViVGl0bGVUZXh0IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJmcm9tVG8iLCJ1QWxwaGEiLCJoaWRlIiwidG8iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwieCIsInkiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJzcGVlZCIsIm9uUmVzaXplIiwiQXV0b0JpbmQiLCJDb2xvciIsIkdlb21ldHJ5IiwiVGV4dCIsImZvbnQiLCJzcmMiLCJjcmVhdGVTaGFkZXIiLCJnZW5lcmF0ZU1pcG1hcHMiLCJ0ZXh0dXJlSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJ2ZXJ0ZXgxMDAiLCJmcmFnbWVudDEwMCIsInZlcnRleDMwMCIsImZyYWdtZW50MzAwIiwiZnJhZ21lbnRTaGFkZXIiLCJ2ZXJ0ZXhTaGFkZXIiLCJpc1dlYmdsMiIsImN1bGxGYWNlIiwidHJhbnNwYXJlbnQiLCJ1Q29sb3IiLCJhbGlnbiIsImxldHRlclNwYWNpbmciLCJzaXplIiwid29yZFNwYWNpbmciLCJkYXRhIiwiYnVmZmVycyIsInV2IiwiaWQiLCJpbmRleCIsImNvbXB1dGVCb3VuZGluZ0JveCJdLCJzb3VyY2VSb290IjoiIn0=