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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _shaders_gallery_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/gallery-vertex.glsl */ "./app/shaders/gallery-vertex.glsl");
/* harmony import */ var _shaders_gallery_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shaders/gallery-fragment.glsl */ "./app/shaders/gallery-fragment.glsl");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./app/components/Canvas/Home/Title.js");





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
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_3__.Program(this.gl, {
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
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_4__.Mesh(this.gl, {
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
    gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(this.program.uniforms.uAlpha, {
      value: 0
    }, {
      value: 1
    });
  }
  hide() {
    gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(this.program.uniforms.uAlpha, {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7888c281a1bf0794c782")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ2pCLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakI7QUFDRjs7Ozs7Ozs7VUNySUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZXRyeSwgc2NlbmUsIHNpemVzLCB0aXRsZSwgc3ViVGl0bGUsIHJlbmRlcmVyIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5zdWJUaXRsZSA9IHN1YlRpdGxlXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG5cbiAgICB0aGlzLnRpbWUgPSAwXG5cbiAgICB0aGlzLmV4dHJhID0gMFxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKClcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gICAgdGhpcy5jcmVhdGVUaXRsZSgpXG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIC8vIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1t0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcblxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIHVPZmZzZXQ6IHtcbiAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlVGl0bGUoKSB7XG4gICAgdGhpcy50aXRsZVRleHQgPSBuZXcgVGl0bGUoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBwbGFuZTogdGhpcy5tZXNoLFxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgICB0ZXh0OiB0aGlzLnRpdGxlXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBnc2FwLmZyb21UbyhcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgZ3NhcC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG5cbiAgICAvLyBjb25zdCBPRkZTRVRfU0NBTEUgPSAwLjFcbiAgICAvLyBjb25zdCBvZmZzZXQgPSBbc3BlZWQgKiBPRkZTRVRfU0NBTEUsIHNwZWVkICogT0ZGU0VUX1NDQUxFXVxuICAgIC8vIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51T2Zmc2V0LnZhbHVlID0gb2Zmc2V0XG4gIH1cblxuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc4ODhjMjgxYTFiZjA3OTRjNzgyXCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwiVGV4dHVyZSIsInZlcnRleCIsImZyYWdtZW50IiwiZ3NhcCIsIlRpdGxlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZXRyeSIsInNjZW5lIiwic2l6ZXMiLCJ0aXRsZSIsInN1YlRpdGxlIiwicmVuZGVyZXIiLCJ0aW1lIiwiZXh0cmEiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVUaXRsZSIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJkZXB0aFRlc3QiLCJkZXB0aFdyaXRlIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1T2Zmc2V0IiwibWVzaCIsInNldFBhcmVudCIsInRpdGxlVGV4dCIsInBsYW5lIiwidGV4dCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiZnJvbVRvIiwidUFscGhhIiwiaGlkZSIsInRvIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsIngiLCJ5IiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic2Nyb2xsIiwic3BlZWQiLCJvblJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=