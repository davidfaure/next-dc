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
    sizes,
    title,
    subTitle
  }) {
    this.element = element;
    this.gl = gl;
    this.geometry = geometry;
    this.scene = scene;
    this.sizes = sizes;
    this.title = title;
    this.subTitle = subTitle;
    this.time = 0;
    this.extra = 0;
    this.createTexture();
    this.createProgram();
    this.createMesh();
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
/******/ 	__webpack_require__.h = () => ("0e81a7698b9ed570b987")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFXO0lBQ25ELElBQUksQ0FBQ2QsSUFBSSxDQUFDcUIsUUFBUSxDQUFDRixDQUFDLEdBQ2xCLElBQUksQ0FBQ3RDLEtBQUssQ0FBQ2dDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDYixJQUFJLENBQUNpQixLQUFLLENBQUNFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLEdBQUcsSUFBSSxDQUFDdEMsS0FBSyxDQUFDZ0MsTUFBTTtFQUM5RTtFQUVBVSxNQUFNQSxDQUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRTtJQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDdEIsTUFBTSxFQUFFO0lBQ2xCLElBQUksQ0FBQ0csT0FBTyxDQUFDa0IsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2pCLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0lBRWY7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFtQixRQUFRQSxDQUFDN0MsS0FBSyxFQUFFMkMsTUFBTSxFQUFFO0lBQ3RCLElBQUksQ0FBQ3ZDLEtBQUssR0FBRyxDQUFDO0lBRWQsSUFBSSxDQUFDaUIsWUFBWSxDQUFDckIsS0FBSyxDQUFDO0lBQ3hCLElBQUksQ0FBQ3lCLE9BQU8sQ0FBQ2tCLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2pCO0FBQ0Y7Ozs7Ozs7O1VDdkhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9nYWxsZXJ5LXZlcnRleC5nbHNsXCJcbmltcG9ydCBmcmFnbWVudCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9nYWxsZXJ5LWZyYWdtZW50Lmdsc2xcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZXRyeSwgc2NlbmUsIHNpemVzLCB0aXRsZSwgc3ViVGl0bGUgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB0aGlzLnN1YlRpdGxlID0gc3ViVGl0bGVcblxuICAgIHRoaXMudGltZSA9IDBcblxuICAgIHRoaXMuZXh0cmEgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgLy8gdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKVxuXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZShcInNyY1wiKV1cbiAgfVxuXG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgICAgdU9mZnNldDoge1xuICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbVxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgIHRoaXMudXBkYXRlWCgpXG4gICAgdGhpcy51cGRhdGVZKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgZ3NhcC5mcm9tVG8oXG4gICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDFcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGdzYXAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDFcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICB9XG5cbiAgdXBkYXRlWCh4ID0gMCkge1xuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuICAgICAgLXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmFcbiAgfVxuXG4gIHVwZGF0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9XG4gICAgICB0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCwgc3BlZWQpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuXG4gICAgLy8gY29uc3QgT0ZGU0VUX1NDQUxFID0gMC4xXG4gICAgLy8gY29uc3Qgb2Zmc2V0ID0gW3NwZWVkICogT0ZGU0VUX1NDQUxFLCBzcGVlZCAqIE9GRlNFVF9TQ0FMRV1cbiAgICAvLyB0aGlzLnByb2dyYW0udW5pZm9ybXMudU9mZnNldC52YWx1ZSA9IG9mZnNldFxuICB9XG5cbiAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuICAgIHRoaXMuZXh0cmEgPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZTgxYTc2OThiOWVkNTcwYjk4N1wiKSJdLCJuYW1lcyI6WyJNZXNoIiwiUHJvZ3JhbSIsIlRleHR1cmUiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsImdzYXAiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21ldHJ5Iiwic2NlbmUiLCJzaXplcyIsInRpdGxlIiwic3ViVGl0bGUiLCJ0aW1lIiwiZXh0cmEiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1T2Zmc2V0IiwibWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiZnJvbVRvIiwidUFscGhhIiwiaGlkZSIsInRvIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsIngiLCJ5IiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic2Nyb2xsIiwic3BlZWQiLCJvblJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=