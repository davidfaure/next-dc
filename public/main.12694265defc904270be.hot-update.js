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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
/* harmony import */ var _shaders_gallery_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shaders/gallery-vertex.glsl */ "./app/shaders/gallery-vertex.glsl");
/* harmony import */ var _shaders_gallery_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shaders/gallery-fragment.glsl */ "./app/shaders/gallery-fragment.glsl");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    element,
    gl,
    geometry,
    scene,
    sizes
  }) {
    this.element = element;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.sizes = sizes;
    this.time = 0;
    this.extra = {
      x: 0,
      y: 0
    };
    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createBounds({
      sizes: this.sizes
    });
  }
  createTexture() {
    // this.texture = window.TEXTURES[this.element.getAttribute("src")]
    const image = this.element.querySelector("img");
    this.texture = window.TEXTURES[image.getAttribute("data-src")];
  }
  createProgram() {
    this.program = new ogl__WEBPACK_IMPORTED_MODULE_2__.Program(this.gl, {
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
    this.mesh = new ogl__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.mesh.setParent(this.scene);
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
    gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.fromTo(this.program.uniforms.uAlpha, {
      value: 0
    }, {
      value: 1
    });
  }
  hide() {
    gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(this.program.uniforms.uAlpha, {
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
    this.mesh.position.x = -this.sizes.width / 2 + this.mesh.scale.x / 2 + this.x * this.sizes.width + this.extra.x;
  }
  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight;
    this.mesh.position.y = this.sizes.height / 2 - this.mesh.scale.y / 2 - this.y * this.sizes.height + this.extra.y;
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
    this.extra = {
      x: 0,
      y: 0
    };
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
/******/ 	__webpack_require__.h = () => ("113566217edebe513ed2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEdBQUduQyxDQUFDLElBQUlRLE1BQU0sQ0FBQ3FCLFdBQVc7SUFDbkQsSUFBSSxDQUFDYixJQUFJLENBQUNrQixRQUFRLENBQUNsQyxDQUFDLEdBQ2xCLElBQUksQ0FBQ0osS0FBSyxDQUFDZ0MsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNaLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ2hDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNnQyxNQUFNLEdBQUcsSUFBSSxDQUFDOUIsS0FBSyxDQUFDRSxDQUFDO0VBQzdGO0VBRUFvQyxNQUFNQSxDQUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRTtJQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDcEIsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0csT0FBTyxDQUFDZ0IsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQzs7SUFFZjtJQUNBO0lBQ0E7RUFDRjs7RUFFQWlCLFFBQVFBLENBQUMzQyxLQUFLLEVBQUV5QyxNQUFNLEVBQUU7SUFDdEIsSUFBSSxDQUFDdkMsS0FBSyxHQUFHO01BQ1hDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFFRCxJQUFJLENBQUNJLFlBQVksQ0FBQ1IsS0FBSyxDQUFDO0lBQ3hCLElBQUksQ0FBQ3lCLE9BQU8sQ0FBQ2dCLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakI7QUFDRjs7Ozs7Ozs7VUM5SEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2wsIGdlb21ldHJ5LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcblxuICAgIHRoaXMudGltZSA9IDBcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHtcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgLy8gdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpXVxuICB9XG5cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgICB1T2Zmc2V0OiB7XG4gICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBnc2FwLmZyb21UbyhcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgZ3NhcC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG4gIH1cblxuICB1cGRhdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgdGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQgKyB0aGlzLmV4dHJhLnlcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwsIHNwZWVkKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcblxuICAgIC8vIGNvbnN0IE9GRlNFVF9TQ0FMRSA9IDAuMVxuICAgIC8vIGNvbnN0IG9mZnNldCA9IFtzcGVlZCAqIE9GRlNFVF9TQ0FMRSwgc3BlZWQgKiBPRkZTRVRfU0NBTEVdXG4gICAgLy8gdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVPZmZzZXQudmFsdWUgPSBvZmZzZXRcbiAgfVxuXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMTM1NjYyMTdlZGViZTUxM2VkMlwiKSJdLCJuYW1lcyI6WyJNZXNoIiwiUHJvZ3JhbSIsIlRleHR1cmUiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsImdzYXAiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21ldHJ5Iiwic2NlbmUiLCJzaXplcyIsInRpbWUiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwidU9mZnNldCIsIm1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsImZyb21UbyIsInVBbHBoYSIsImhpZGUiLCJ0byIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJzcGVlZCIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==