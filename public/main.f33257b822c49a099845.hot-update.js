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
    console.log(this.element);
    // const image = this.element.querySelector(".home__gallery__media__image")
    this.texture = window.TEXTURES[this.element.getAttribute("src")];
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
    const OFFSET_SCALE = 0.1;
    const offset = [speed * OFFSET_SCALE, speed * OFFSET_SCALE];
    this.program.uniforms.uOffset.value = offset;
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
/******/ 	__webpack_require__.h = () => ("ee3a319e96932b7f73c2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7SUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQ2YsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0csT0FBTyxDQUFDVyxNQUFNLENBQUM7SUFDcEIsSUFBSSxDQUFDVixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRWYsTUFBTVksWUFBWSxHQUFHLEdBQUc7SUFDeEIsTUFBTUMsTUFBTSxHQUFHLENBQUNGLEtBQUssR0FBR0MsWUFBWSxFQUFFRCxLQUFLLEdBQUdDLFlBQVksQ0FBQztJQUMzRCxJQUFJLENBQUN2QixPQUFPLENBQUNDLFFBQVEsQ0FBQ0csT0FBTyxDQUFDRCxLQUFLLEdBQUdxQixNQUFNO0VBQzlDO0VBRUFDLFFBQVFBLENBQUN4QyxLQUFLLEVBQUVvQyxNQUFNLEVBQUU7SUFDdEIsSUFBSSxDQUFDbEMsS0FBSyxHQUFHO01BQ1hDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFFRCxJQUFJLENBQUNJLFlBQVksQ0FBQ1IsS0FBSyxDQUFDO0lBQ3hCLElBQUksQ0FBQ3lCLE9BQU8sQ0FBQ1csTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqQjtBQUNGOzs7Ozs7OztVQzFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvZ2FsbGVyeS12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvZ2FsbGVyeS1mcmFnbWVudC5nbHNsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZXRyeSwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG5cbiAgICB0aGlzLnRpbWUgPSAwXG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyh7XG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcbiAgICAvLyBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZVwiKVxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1t0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICB9XG5cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgICB1T2Zmc2V0OiB7XG4gICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICB9XG5cbiAgdXBkYXRlWCh4ID0gMCkge1xuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuICAgICAgLXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmEueFxuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0ICsgdGhpcy5leHRyYS55XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG5cbiAgICBjb25zdCBPRkZTRVRfU0NBTEUgPSAwLjFcbiAgICBjb25zdCBvZmZzZXQgPSBbc3BlZWQgKiBPRkZTRVRfU0NBTEUsIHNwZWVkICogT0ZGU0VUX1NDQUxFXVxuICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51T2Zmc2V0LnZhbHVlID0gb2Zmc2V0XG4gIH1cblxuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWUzYTMxOWU5NjkzMmI3ZjczYzJcIikiXSwibmFtZXMiOlsiTWVzaCIsIlByb2dyYW0iLCJUZXh0dXJlIiwidmVydGV4IiwiZnJhZ21lbnQiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21ldHJ5Iiwic2NlbmUiLCJzaXplcyIsInRpbWUiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiY29uc29sZSIsImxvZyIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVPZmZzZXQiLCJtZXNoIiwic2V0UGFyZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJzcGVlZCIsIk9GRlNFVF9TQ0FMRSIsIm9mZnNldCIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==