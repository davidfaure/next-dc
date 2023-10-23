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
    console.log(this.element, "createTexture");
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
/******/ 	__webpack_require__.h = () => ("d306f74622870c1cc3df")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtJQUNiLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDb0IsTUFBTSxDQUFDaUIsR0FBRyxHQUFHckMsQ0FBQyxJQUFJVSxNQUFNLENBQUNxQixXQUFXO0lBQ25ELElBQUksQ0FBQ2IsSUFBSSxDQUFDa0IsUUFBUSxDQUFDcEMsQ0FBQyxHQUNsQixJQUFJLENBQUNKLEtBQUssQ0FBQ2tDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDWixJQUFJLENBQUNnQixLQUFLLENBQUNsQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0osS0FBSyxDQUFDa0MsTUFBTSxHQUFHLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ0UsQ0FBQztFQUM3RjtFQUVBc0MsTUFBTUEsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQUU7SUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQ3BCLE1BQU0sRUFBRTtJQUNsQixJQUFJLENBQUNHLE9BQU8sQ0FBQ2dCLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUNmLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0lBRWY7SUFDQTtJQUNBO0VBQ0Y7O0VBRUFpQixRQUFRQSxDQUFDN0MsS0FBSyxFQUFFMkMsTUFBTSxFQUFFO0lBQ3RCLElBQUksQ0FBQ3pDLEtBQUssR0FBRztNQUNYQyxDQUFDLEVBQUUsQ0FBQztNQUNKQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFDSSxZQUFZLENBQUNSLEtBQUssQ0FBQztJQUN4QixJQUFJLENBQUMyQixPQUFPLENBQUNnQixNQUFNLENBQUM7SUFDcEIsSUFBSSxDQUFDZixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2pCO0FBQ0Y7Ozs7Ozs7O1VDaElBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tIFwib2dsXCJcblxuaW1wb3J0IHZlcnRleCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9nYWxsZXJ5LXZlcnRleC5nbHNsXCJcbmltcG9ydCBmcmFnbWVudCBmcm9tIFwiLi4vLi4vLi4vc2hhZGVycy9nYWxsZXJ5LWZyYWdtZW50Lmdsc2xcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZXRyeSwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG5cbiAgICB0aGlzLnRpbWUgPSAwXG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyh7XG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIC8vIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1t0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpXVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCwgXCJjcmVhdGVUZXh0dXJlXCIpXG5cbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIildXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIHVPZmZzZXQ6IHtcbiAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICB9KVxuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGdzYXAuZnJvbVRvKFxuICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAxXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBnc2FwLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAxXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID1cbiAgICAgIC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhLnhcbiAgfVxuXG4gIHVwZGF0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9XG4gICAgICB0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCArIHRoaXMuZXh0cmEueVxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCwgc3BlZWQpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuICAgIHRoaXMudXBkYXRlWSgwKVxuXG4gICAgLy8gY29uc3QgT0ZGU0VUX1NDQUxFID0gMC4xXG4gICAgLy8gY29uc3Qgb2Zmc2V0ID0gW3NwZWVkICogT0ZGU0VUX1NDQUxFLCBzcGVlZCAqIE9GRlNFVF9TQ0FMRV1cbiAgICAvLyB0aGlzLnByb2dyYW0udW5pZm9ybXMudU9mZnNldC52YWx1ZSA9IG9mZnNldFxuICB9XG5cbiAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQzMDZmNzQ2MjI4NzBjMWNjM2RmXCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwiVGV4dHVyZSIsInZlcnRleCIsImZyYWdtZW50IiwiZ3NhcCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdsIiwiZ2VvbWV0cnkiLCJzY2VuZSIsInNpemVzIiwidGltZSIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwidU9mZnNldCIsIm1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsImZyb21UbyIsInVBbHBoYSIsImhpZGUiLCJ0byIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJzcGVlZCIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==