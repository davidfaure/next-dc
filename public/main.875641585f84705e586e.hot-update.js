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
        },
        uSpeed: {
          value: 0
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
    this.program.uniforms.uTime.value += 0.02;
    this.updateX(scroll);
    this.updateY(0);
    this.program.uniforms.uStrength.value = speed;
    this.titleText.update(speed);

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
/******/ 	__webpack_require__.h = () => ("7de3741f0d2e2fdbca4a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ2pELEtBQUssQ0FBQ3lCLE1BQU07RUFDOUU7RUFFQTRCLE1BQU1BLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUNwQixNQUFNLEVBQUU7SUFFbEIsSUFBSSxDQUFDbkIsT0FBTyxDQUFDRyxRQUFRLENBQUNRLEtBQUssQ0FBQ04sS0FBSyxJQUFJLElBQUk7SUFFekMsSUFBSSxDQUFDaUIsT0FBTyxDQUFDZ0IsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVmLElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQ0csUUFBUSxDQUFDRyxTQUFTLENBQUNELEtBQUssR0FBR2tDLEtBQUs7SUFFN0MsSUFBSSxDQUFDekIsU0FBUyxDQUFDdUIsTUFBTSxDQUFDRSxLQUFLLENBQUM7O0lBRTVCO0lBQ0E7SUFDQTtFQUNGOztFQUVBQyxRQUFRQSxDQUFDeEQsS0FBSyxFQUFFc0QsTUFBTSxFQUFFO0lBQ3RCLElBQUksQ0FBQ2pELEtBQUssR0FBRyxDQUFDO0lBRWQsSUFBSSxDQUFDNkIsWUFBWSxDQUFDbEMsS0FBSyxDQUFDO0lBQ3hCLElBQUksQ0FBQ3NDLE9BQU8sQ0FBQ2dCLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakI7QUFDRjs7Ozs7Ozs7VUMxSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCJcbmltcG9ydCBTdWJUaXRsZSBmcm9tIFwiLi9TdWJUaXRsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnbCwgZ2VvbWV0cnksIHNjZW5lLCBzaXplcywgdGl0bGUsIHN1YlRpdGxlLCByZW5kZXJlciB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuc3ViVGl0bGUgPSBzdWJUaXRsZVxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuXG4gICAgdGhpcy50aW1lID0gMFxuXG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuICAgIHRoaXMuY3JlYXRlVGl0bGUoKVxuICB9XG5cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICAvLyB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcInNyY1wiKV1cbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG5cbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICB9XG5cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgICAvLyB1T2Zmc2V0OiB7XG4gICAgICAgIC8vICAgdmFsdWU6IDBcbiAgICAgICAgLy8gfVxuICAgICAgICB1U3RyZW5ndGg6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdVZpZXdwb3J0U2l6ZXM6IHtcbiAgICAgICAgICB2YWx1ZTogW3RoaXMuc2l6ZXMud2lkdGgsIHRoaXMuc2l6ZXMuaGVpZ2h0XVxuICAgICAgICB9LFxuICAgICAgICB1U3BlZWQ6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZVRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVUZXh0ID0gbmV3IFRpdGxlKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgcGxhbmU6IHRoaXMubWVzaCxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgdGV4dDogdGhpcy50aXRsZVxuICAgIH0pXG5cbiAgICB0aGlzLnN1YlRpdGxlVGV4dCA9IG5ldyBTdWJUaXRsZSh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHBsYW5lOiB0aGlzLm1lc2gsXG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAgIHRleHQ6IHRoaXMuc3ViVGl0bGVcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAxXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBnc2FwLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID1cbiAgICAgIC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG4gIH1cblxuICB1cGRhdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgdGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwsIHNwZWVkKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudVRpbWUudmFsdWUgKz0gMC4wMlxuXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcblxuICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51U3RyZW5ndGgudmFsdWUgPSBzcGVlZFxuXG4gICAgdGhpcy50aXRsZVRleHQudXBkYXRlKHNwZWVkKVxuXG4gICAgLy8gY29uc3QgT0ZGU0VUX1NDQUxFID0gMC4xXG4gICAgLy8gY29uc3Qgb2Zmc2V0ID0gW3NwZWVkICogT0ZGU0VUX1NDQUxFLCBzcGVlZCAqIE9GRlNFVF9TQ0FMRV1cbiAgICAvLyB0aGlzLnByb2dyYW0udW5pZm9ybXMudU9mZnNldC52YWx1ZSA9IG9mZnNldFxuICB9XG5cbiAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuICAgIHRoaXMuZXh0cmEgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZGUzNzQxZjBkMmUyZmRiY2E0YVwiKSJdLCJuYW1lcyI6WyJNZXNoIiwiUHJvZ3JhbSIsIlRleHR1cmUiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsImdzYXAiLCJUaXRsZSIsIlN1YlRpdGxlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZXRyeSIsInNjZW5lIiwic2l6ZXMiLCJ0aXRsZSIsInN1YlRpdGxlIiwicmVuZGVyZXIiLCJ0aW1lIiwiZXh0cmEiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVUaXRsZSIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJkZXB0aFRlc3QiLCJkZXB0aFdyaXRlIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1U3RyZW5ndGgiLCJ1Vmlld3BvcnRTaXplcyIsIndpZHRoIiwiaGVpZ2h0IiwidVNwZWVkIiwidVRpbWUiLCJtZXNoIiwic2V0UGFyZW50IiwidGl0bGVUZXh0IiwicGxhbmUiLCJ0ZXh0Iiwic3ViVGl0bGVUZXh0IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJmcm9tVG8iLCJ1QWxwaGEiLCJoaWRlIiwidG8iLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzY2FsZSIsIngiLCJ5IiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic2Nyb2xsIiwic3BlZWQiLCJvblJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=