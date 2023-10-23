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
      title: this.title
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
/******/ 	__webpack_require__.h = () => ("beaf3e45e8258ca55c11")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDakIsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqQjtBQUNGOzs7Ozs7OztVQ3JJQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvZ2FsbGVyeS12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvZ2FsbGVyeS1mcmFnbWVudC5nbHNsXCJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2wsIGdlb21ldHJ5LCBzY2VuZSwgc2l6ZXMsIHRpdGxlLCBzdWJUaXRsZSwgcmVuZGVyZXIgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLnN1YlRpdGxlID0gc3ViVGl0bGVcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcblxuICAgIHRoaXMudGltZSA9IDBcblxuICAgIHRoaXMuZXh0cmEgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgICB0aGlzLmNyZWF0ZVRpdGxlKClcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgLy8gdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZShcInNyY1wiKV1cbiAgfVxuXG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZGVwdGhUZXN0OiBmYWxzZSxcbiAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgICAgdU9mZnNldDoge1xuICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbVxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVUaXRsZSgpIHtcbiAgICB0aGlzLnRpdGxlVGV4dCA9IG5ldyBUaXRsZSh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHBsYW5lOiB0aGlzLm1lc2gsXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBnc2FwLmZyb21UbyhcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgZ3NhcC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG5cbiAgICAvLyBjb25zdCBPRkZTRVRfU0NBTEUgPSAwLjFcbiAgICAvLyBjb25zdCBvZmZzZXQgPSBbc3BlZWQgKiBPRkZTRVRfU0NBTEUsIHNwZWVkICogT0ZGU0VUX1NDQUxFXVxuICAgIC8vIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51T2Zmc2V0LnZhbHVlID0gb2Zmc2V0XG4gIH1cblxuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJlYWYzZTQ1ZTgyNThjYTU1YzExXCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwiVGV4dHVyZSIsInZlcnRleCIsImZyYWdtZW50IiwiZ3NhcCIsIlRpdGxlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZXRyeSIsInNjZW5lIiwic2l6ZXMiLCJ0aXRsZSIsInN1YlRpdGxlIiwicmVuZGVyZXIiLCJ0aW1lIiwiZXh0cmEiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVUaXRsZSIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJkZXB0aFRlc3QiLCJkZXB0aFdyaXRlIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1T2Zmc2V0IiwibWVzaCIsInNldFBhcmVudCIsInRpdGxlVGV4dCIsInBsYW5lIiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJmcm9tVG8iLCJ1QWxwaGEiLCJoaWRlIiwidG8iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwieCIsInkiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJzcGVlZCIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==