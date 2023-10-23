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
    this.extra = 0;
    this.createTexture();
    this.createProgram();
    this.createMesh();
    // this.createBounds({
    //   sizes: this.sizes
    // })
  }

  createTexture() {
    // this.texture = window.TEXTURES[this.element.getAttribute("src")]
    const image = this.element.querySelector("img");
    this.texture = window.TEXTURES[image.getAttribute("src")];
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
/******/ 	__webpack_require__.h = () => ("646d2ae971818247222f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDOEIsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNiLElBQUksQ0FBQ2lCLEtBQUssQ0FBQ0UsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNBLENBQUMsR0FBRyxJQUFJLENBQUNwQyxLQUFLLENBQUM4QixNQUFNO0VBQzlFO0VBRUFVLE1BQU1BLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUN0QixNQUFNLEVBQUU7SUFDbEIsSUFBSSxDQUFDRyxPQUFPLENBQUNrQixNQUFNLENBQUM7SUFDcEIsSUFBSSxDQUFDakIsT0FBTyxDQUFDLENBQUMsQ0FBQzs7SUFFZjtJQUNBO0lBQ0E7RUFDRjs7RUFFQW1CLFFBQVFBLENBQUMzQyxLQUFLLEVBQUV5QyxNQUFNLEVBQUU7SUFDdEIsSUFBSSxDQUFDdkMsS0FBSyxHQUFHLENBQUM7SUFFZCxJQUFJLENBQUNpQixZQUFZLENBQUNuQixLQUFLLENBQUM7SUFDeEIsSUFBSSxDQUFDdUIsT0FBTyxDQUFDa0IsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2pCLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakI7QUFDRjs7Ozs7Ozs7VUN4SEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2wsIGdlb21ldHJ5LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcblxuICAgIHRoaXMudGltZSA9IDBcblxuICAgIHRoaXMuZXh0cmEgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgICAvLyB0aGlzLmNyZWF0ZUJvdW5kcyh7XG4gICAgLy8gICBzaXplczogdGhpcy5zaXplc1xuICAgIC8vIH0pXG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIC8vIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1t0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcblxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIHVPZmZzZXQ6IHtcbiAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAxXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBnc2FwLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID1cbiAgICAgIC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG4gIH1cblxuICB1cGRhdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgdGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwsIHNwZWVkKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcblxuICAgIC8vIGNvbnN0IE9GRlNFVF9TQ0FMRSA9IDAuMVxuICAgIC8vIGNvbnN0IG9mZnNldCA9IFtzcGVlZCAqIE9GRlNFVF9TQ0FMRSwgc3BlZWQgKiBPRkZTRVRfU0NBTEVdXG4gICAgLy8gdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVPZmZzZXQudmFsdWUgPSBvZmZzZXRcbiAgfVxuXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0gMFxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjQ2ZDJhZTk3MTgxODI0NzIyMmZcIikiXSwibmFtZXMiOlsiTWVzaCIsIlByb2dyYW0iLCJUZXh0dXJlIiwidmVydGV4IiwiZnJhZ21lbnQiLCJnc2FwIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZXRyeSIsInNjZW5lIiwic2l6ZXMiLCJ0aW1lIiwiZXh0cmEiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1T2Zmc2V0IiwibWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiZnJvbVRvIiwidUFscGhhIiwiaGlkZSIsInRvIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsIngiLCJ5IiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic2Nyb2xsIiwic3BlZWQiLCJvblJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=