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
        // uOffset: {
        //   value: 0
        // }
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91ef2d812eb0f69d8615")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRTtJQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDcEIsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0csT0FBTyxDQUFDZ0IsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQzs7SUFFZjtJQUNBO0lBQ0E7RUFDRjs7RUFFQWlCLFFBQVFBLENBQUN0RCxLQUFLLEVBQUVvRCxNQUFNLEVBQUU7SUFDdEIsSUFBSSxDQUFDL0MsS0FBSyxHQUFHLENBQUM7SUFFZCxJQUFJLENBQUMyQixZQUFZLENBQUNoQyxLQUFLLENBQUM7SUFDeEIsSUFBSSxDQUFDb0MsT0FBTyxDQUFDZ0IsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqQjtBQUNGOzs7Ozs7OztVQ2pKQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvZ2FsbGVyeS12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvZ2FsbGVyeS1mcmFnbWVudC5nbHNsXCJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIlxuaW1wb3J0IFN1YlRpdGxlIGZyb20gXCIuL1N1YlRpdGxlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZXRyeSwgc2NlbmUsIHNpemVzLCB0aXRsZSwgc3ViVGl0bGUsIHJlbmRlcmVyIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5zdWJUaXRsZSA9IHN1YlRpdGxlXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG5cbiAgICB0aGlzLnRpbWUgPSAwXG5cbiAgICB0aGlzLmV4dHJhID0gMFxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKClcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gICAgdGhpcy5jcmVhdGVUaXRsZSgpXG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIC8vIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1t0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcblxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIC8vIHVPZmZzZXQ6IHtcbiAgICAgICAgLy8gICB2YWx1ZTogMFxuICAgICAgICAvLyB9XG4gICAgICAgIHVTdHJlbmd0aDogeyB2YWx1ZTogMCB9LFxuICAgICAgICB1Vmlld3BvcnRTaXplczoge1xuICAgICAgICAgIHZhbHVlOiBbdGhpcy5zaXplcy53aWR0aCwgdGhpcy5zaXplcy5oZWlnaHRdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbVxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVUaXRsZSgpIHtcbiAgICB0aGlzLnRpdGxlVGV4dCA9IG5ldyBUaXRsZSh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHBsYW5lOiB0aGlzLm1lc2gsXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgIHRleHQ6IHRoaXMudGl0bGVcbiAgICB9KVxuXG4gICAgdGhpcy5zdWJUaXRsZVRleHQgPSBuZXcgU3ViVGl0bGUoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBwbGFuZTogdGhpcy5tZXNoLFxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgICB0ZXh0OiB0aGlzLnN1YlRpdGxlXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBnc2FwLmZyb21UbyhcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgZ3NhcC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG5cbiAgICAvLyBjb25zdCBPRkZTRVRfU0NBTEUgPSAwLjFcbiAgICAvLyBjb25zdCBvZmZzZXQgPSBbc3BlZWQgKiBPRkZTRVRfU0NBTEUsIHNwZWVkICogT0ZGU0VUX1NDQUxFXVxuICAgIC8vIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51T2Zmc2V0LnZhbHVlID0gb2Zmc2V0XG4gIH1cblxuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkxZWYyZDgxMmViMGY2OWQ4NjE1XCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwiVGV4dHVyZSIsInZlcnRleCIsImZyYWdtZW50IiwiZ3NhcCIsIlRpdGxlIiwiU3ViVGl0bGUiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21ldHJ5Iiwic2NlbmUiLCJzaXplcyIsInRpdGxlIiwic3ViVGl0bGUiLCJyZW5kZXJlciIsInRpbWUiLCJleHRyYSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImNyZWF0ZVRpdGxlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsImRlcHRoVGVzdCIsImRlcHRoV3JpdGUiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVTdHJlbmd0aCIsInVWaWV3cG9ydFNpemVzIiwid2lkdGgiLCJoZWlnaHQiLCJtZXNoIiwic2V0UGFyZW50IiwidGl0bGVUZXh0IiwicGxhbmUiLCJ0ZXh0Iiwic3ViVGl0bGVUZXh0IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJmcm9tVG8iLCJ1QWxwaGEiLCJoaWRlIiwidG8iLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzY2FsZSIsIngiLCJ5IiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic2Nyb2xsIiwic3BlZWQiLCJvblJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=