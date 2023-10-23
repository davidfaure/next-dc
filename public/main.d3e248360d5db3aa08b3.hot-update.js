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
/******/ 	__webpack_require__.h = () => ("39403bd116cb22be1e9e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ2hELEtBQUssQ0FBQ3lCLE1BQU07RUFDOUU7RUFFQTJCLE1BQU1BLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUNwQixNQUFNLEVBQUU7SUFFbEIsSUFBSSxDQUFDbEIsT0FBTyxDQUFDRyxRQUFRLENBQUNPLEtBQUssQ0FBQ0wsS0FBSyxJQUFJLElBQUk7SUFFekMsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDZ0IsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVmLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQ0csUUFBUSxDQUFDRyxTQUFTLENBQUNELEtBQUssR0FBR2lDLEtBQUs7SUFFN0MsSUFBSSxDQUFDekIsU0FBUyxDQUFDdUIsTUFBTSxDQUFDRSxLQUFLLENBQUM7SUFDNUIsSUFBSSxDQUFDdEIsWUFBWSxDQUFDb0IsTUFBTSxDQUFDRSxLQUFLLENBQUM7RUFDakM7RUFFQUMsUUFBUUEsQ0FBQ3ZELEtBQUssRUFBRXFELE1BQU0sRUFBRTtJQUN0QixJQUFJLENBQUNoRCxLQUFLLEdBQUcsQ0FBQztJQUVkLElBQUksQ0FBQzRCLFlBQVksQ0FBQ2pDLEtBQUssQ0FBQztJQUN4QixJQUFJLENBQUNxQyxPQUFPLENBQUNnQixNQUFNLENBQUM7SUFDcEIsSUFBSSxDQUFDZixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2pCO0FBQ0Y7Ozs7Ozs7O1VDcEpBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0gfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9nYWxsZXJ5LXZlcnRleC5nbHNsXCJcbmltcG9ydCBmcmFnbWVudCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9nYWxsZXJ5LWZyYWdtZW50Lmdsc2xcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXG5pbXBvcnQgU3ViVGl0bGUgZnJvbSBcIi4vU3ViVGl0bGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2wsIGdlb21ldHJ5LCBzY2VuZSwgc2l6ZXMsIHRpdGxlLCBzdWJUaXRsZSwgcmVuZGVyZXIgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLnN1YlRpdGxlID0gc3ViVGl0bGVcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcblxuICAgIHRoaXMudGltZSA9IDBcblxuICAgIHRoaXMuZXh0cmEgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgICB0aGlzLmNyZWF0ZVRpdGxlKClcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZShcInNyY1wiKV1cbiAgfVxuXG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZGVwdGhUZXN0OiBmYWxzZSxcbiAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgICAgdVN0cmVuZ3RoOiB7IHZhbHVlOiAwIH0sXG4gICAgICAgIHVWaWV3cG9ydFNpemVzOiB7XG4gICAgICAgICAgdmFsdWU6IFt0aGlzLnNpemVzLndpZHRoLCB0aGlzLnNpemVzLmhlaWdodF1cbiAgICAgICAgfSxcbiAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgfSlcblxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZVRpdGxlKCkge1xuICAgIHRoaXMudGl0bGVUZXh0ID0gbmV3IFRpdGxlKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgcGxhbmU6IHRoaXMubWVzaCxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgdGV4dDogdGhpcy50aXRsZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcblxuICAgIHRoaXMuc3ViVGl0bGVUZXh0ID0gbmV3IFN1YlRpdGxlKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgcGxhbmU6IHRoaXMubWVzaCxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgdGV4dDogdGhpcy5zdWJUaXRsZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBnc2FwLmZyb21UbyhcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgZ3NhcC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVUaW1lLnZhbHVlICs9IDAuMDJcblxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG5cbiAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudVN0cmVuZ3RoLnZhbHVlID0gc3BlZWRcblxuICAgIHRoaXMudGl0bGVUZXh0LnVwZGF0ZShzcGVlZClcbiAgICB0aGlzLnN1YlRpdGxlVGV4dC51cGRhdGUoc3BlZWQpXG4gIH1cblxuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM5NDAzYmQxMTZjYjIyYmUxZTllXCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJnc2FwIiwiVGl0bGUiLCJTdWJUaXRsZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdsIiwiZ2VvbWV0cnkiLCJzY2VuZSIsInNpemVzIiwidGl0bGUiLCJzdWJUaXRsZSIsInJlbmRlcmVyIiwidGltZSIsImV4dHJhIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlVGl0bGUiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwidVN0cmVuZ3RoIiwidVZpZXdwb3J0U2l6ZXMiLCJ3aWR0aCIsImhlaWdodCIsInVUaW1lIiwibWVzaCIsInNldFBhcmVudCIsInRpdGxlVGV4dCIsInBsYW5lIiwidGV4dCIsInN1YlRpdGxlVGV4dCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiZnJvbVRvIiwidUFscGhhIiwiaGlkZSIsInRvIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJ4IiwieSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsInNjcm9sbCIsInNwZWVkIiwib25SZXNpemUiXSwic291cmNlUm9vdCI6IiJ9