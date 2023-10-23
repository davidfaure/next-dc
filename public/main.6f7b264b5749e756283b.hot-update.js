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
        uStrength: {
          value: 0
        },
        uViewportSizes: {
          value: [this.sizes.width, this.sizes.height]
        },
        uTime: {
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
    this.mesh.position.z -= 0.01;
  }
  createTitle() {
    this.titleText = new _Title__WEBPACK_IMPORTED_MODULE_2__["default"]({
      gl: this.gl,
      plane: this.mesh,
      renderer: this.renderer,
      text: this.title,
      sizes: this.sizes
    });
    this.subTitleText = new _SubTitle__WEBPACK_IMPORTED_MODULE_3__["default"]({
      gl: this.gl,
      plane: this.mesh,
      renderer: this.renderer,
      text: this.subTitle,
      sizes: this.sizes
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
    this.program.uniforms.uTime.value += 0.02;
    this.updateX(scroll);
    this.updateY(0);
    this.program.uniforms.uStrength.value = speed;
    this.titleText.update(speed);
    this.subTitleText.update(speed);
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
/******/ 	__webpack_require__.h = () => ("74a27ef9c047cf7a7f5e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUNwQixJQUFJLENBQUNULE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFZixJQUFJLENBQUN4QixPQUFPLENBQUNHLFFBQVEsQ0FBQ0csU0FBUyxDQUFDRCxLQUFLLEdBQUc2QixLQUFLO0lBRTdDLElBQUksQ0FBQ25CLFNBQVMsQ0FBQ2lCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDO0lBQzVCLElBQUksQ0FBQ2hCLFlBQVksQ0FBQ2MsTUFBTSxDQUFDRSxLQUFLLENBQUM7RUFDakM7RUFFQUMsUUFBUUEsQ0FBQ25ELEtBQUssRUFBRWlELE1BQU0sRUFBRTtJQUN0QixJQUFJLENBQUM1QyxLQUFLLEdBQUcsQ0FBQztJQUVkLElBQUksQ0FBQzhCLFlBQVksQ0FBQ25DLEtBQUssQ0FBQztJQUN4QixJQUFJLENBQUN1QyxPQUFPLENBQUNVLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUNULE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakI7QUFDRjs7Ozs7Ozs7VUNuSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcbmltcG9ydCBTdWJUaXRsZSBmcm9tIFwiLi9TdWJUaXRsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnbCwgZ2VvbWV0cnksIHNjZW5lLCBzaXplcywgdGl0bGUsIHN1YlRpdGxlLCByZW5kZXJlciB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuc3ViVGl0bGUgPSBzdWJUaXRsZVxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuXG4gICAgdGhpcy50aW1lID0gMFxuXG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuICAgIHRoaXMuY3JlYXRlVGl0bGUoKVxuICB9XG5cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG5cbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICB9XG5cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgICB1U3RyZW5ndGg6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdVZpZXdwb3J0U2l6ZXM6IHtcbiAgICAgICAgICB2YWx1ZTogW3RoaXMuc2l6ZXMud2lkdGgsIHRoaXMuc2l6ZXMuaGVpZ2h0XVxuICAgICAgICB9LFxuICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi56IC09IDAuMDFcbiAgfVxuXG4gIGNyZWF0ZVRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVUZXh0ID0gbmV3IFRpdGxlKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgcGxhbmU6IHRoaXMubWVzaCxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgdGV4dDogdGhpcy50aXRsZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcblxuICAgIHRoaXMuc3ViVGl0bGVUZXh0ID0gbmV3IFN1YlRpdGxlKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgcGxhbmU6IHRoaXMubWVzaCxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgdGV4dDogdGhpcy5zdWJUaXRsZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICB9XG5cbiAgdXBkYXRlWCh4ID0gMCkge1xuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuICAgICAgLXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmFcbiAgfVxuXG4gIHVwZGF0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9XG4gICAgICB0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCwgc3BlZWQpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51VGltZS52YWx1ZSArPSAwLjAyXG5cbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuXG4gICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVTdHJlbmd0aC52YWx1ZSA9IHNwZWVkXG5cbiAgICB0aGlzLnRpdGxlVGV4dC51cGRhdGUoc3BlZWQpXG4gICAgdGhpcy5zdWJUaXRsZVRleHQudXBkYXRlKHNwZWVkKVxuICB9XG5cbiAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuICAgIHRoaXMuZXh0cmEgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NGEyN2VmOWMwNDdjZjdhN2Y1ZVwiKSJdLCJuYW1lcyI6WyJNZXNoIiwiUHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwiZ3NhcCIsIlRpdGxlIiwiU3ViVGl0bGUiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21ldHJ5Iiwic2NlbmUiLCJzaXplcyIsInRpdGxlIiwic3ViVGl0bGUiLCJyZW5kZXJlciIsInRpbWUiLCJleHRyYSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImNyZWF0ZVRpdGxlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsImRlcHRoVGVzdCIsImRlcHRoV3JpdGUiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVTdHJlbmd0aCIsInVWaWV3cG9ydFNpemVzIiwid2lkdGgiLCJoZWlnaHQiLCJ1VGltZSIsIm1lc2giLCJzZXRQYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJ0aXRsZVRleHQiLCJwbGFuZSIsInRleHQiLCJzdWJUaXRsZVRleHQiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJ4IiwieSIsImxlZnQiLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJzcGVlZCIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==