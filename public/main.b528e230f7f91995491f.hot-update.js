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
    this.texture = window.TEXTURES[this.element.getAttribute("src")];
    console.log(this.texture.image);
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
    console.log(this.mesh, "Mesh created");
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
/******/ 	__webpack_require__.h = () => ("1f20aa021f34b9f01423")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMUIsS0FBSyxDQUFDRSxDQUFDO0VBQzdGO0VBRUFnQyxNQUFNQSxDQUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRTtJQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDZixNQUFNLEVBQUU7SUFDbEIsSUFBSSxDQUFDRyxPQUFPLENBQUNXLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFZixNQUFNWSxZQUFZLEdBQUcsR0FBRztJQUN4QixNQUFNQyxNQUFNLEdBQUcsQ0FBQ0YsS0FBSyxHQUFHQyxZQUFZLEVBQUVELEtBQUssR0FBR0MsWUFBWSxDQUFDO0lBQzNELElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRyxPQUFPLENBQUNELEtBQUssR0FBR3FCLE1BQU07RUFDOUM7RUFFQUMsUUFBUUEsQ0FBQ3pDLEtBQUssRUFBRXFDLE1BQU0sRUFBRTtJQUN0QixJQUFJLENBQUNuQyxLQUFLLEdBQUc7TUFDWEMsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQ0ksWUFBWSxDQUFDUixLQUFLLENBQUM7SUFDeEIsSUFBSSxDQUFDMEIsT0FBTyxDQUFDVyxNQUFNLENBQUM7SUFDcEIsSUFBSSxDQUFDVixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2pCO0FBQ0Y7Ozs7Ozs7O1VDNUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9nYWxsZXJ5LXZlcnRleC5nbHNsXCJcbmltcG9ydCBmcmFnbWVudCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9nYWxsZXJ5LWZyYWdtZW50Lmdsc2xcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2wsIGdlb21ldHJ5LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcblxuICAgIHRoaXMudGltZSA9IDBcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHtcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3RoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnRleHR1cmUuaW1hZ2UpXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIHVPZmZzZXQ6IHtcbiAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5tZXNoLCBcIk1lc2ggY3JlYXRlZFwiKVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG4gIH1cblxuICB1cGRhdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgdGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQgKyB0aGlzLmV4dHJhLnlcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwsIHNwZWVkKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcblxuICAgIGNvbnN0IE9GRlNFVF9TQ0FMRSA9IDAuMVxuICAgIGNvbnN0IG9mZnNldCA9IFtzcGVlZCAqIE9GRlNFVF9TQ0FMRSwgc3BlZWQgKiBPRkZTRVRfU0NBTEVdXG4gICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVPZmZzZXQudmFsdWUgPSBvZmZzZXRcbiAgfVxuXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZjIwYWEwMjFmMzRiOWYwMTQyM1wiKSJdLCJuYW1lcyI6WyJNZXNoIiwiUHJvZ3JhbSIsIlRleHR1cmUiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdsIiwiZ2VvbWV0cnkiLCJzY2VuZSIsInNpemVzIiwidGltZSIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1T2Zmc2V0IiwibWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic2Nyb2xsIiwic3BlZWQiLCJPRkZTRVRfU0NBTEUiLCJvZmZzZXQiLCJvblJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=