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
/******/ 	__webpack_require__.h = () => ("08d00b99776ba727cc3f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZTQ4NzViMTQ3ZDVkZjk3NzVlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFFc0I7QUFDSTtBQUNsQztBQUNNO0FBRWpDLGlFQUFlLE1BQU07RUFDbkJNLFdBQVdBLENBQUM7SUFBRUMsT0FBTztJQUFFQyxFQUFFO0lBQUVDLFFBQVE7SUFBRUMsS0FBSztJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFTLENBQUMsRUFBRTtJQUM5RSxJQUFJLENBQUNQLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNDLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBRXhCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFFYixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBRWQsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUNwQjtFQUVBSCxhQUFhQSxDQUFBLEVBQUc7SUFDZCxNQUFNSSxLQUFLLEdBQUcsSUFBSSxDQUFDZCxPQUFPLENBQUNlLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFFL0MsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSixLQUFLLENBQUNLLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUMzRDtFQUVBUixhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNTLE9BQU8sR0FBRyxJQUFJMUIsd0NBQU8sQ0FBQyxJQUFJLENBQUNPLEVBQUUsRUFBRTtNQUNsQ0wsUUFBUTtNQUNSRCxNQUFNO01BQ04wQixRQUFRLEVBQUU7UUFDUkMsSUFBSSxFQUFFO1VBQUVDLEtBQUssRUFBRSxJQUFJLENBQUNQO1FBQVEsQ0FBQztRQUM3QlEsU0FBUyxFQUFFO1VBQUVELEtBQUssRUFBRTtRQUFFLENBQUM7UUFDdkJFLGNBQWMsRUFBRTtVQUNkRixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUNuQixLQUFLLENBQUNzQixLQUFLLEVBQUUsSUFBSSxDQUFDdEIsS0FBSyxDQUFDdUIsTUFBTTtRQUM3QyxDQUFDO1FBQ0RDLEtBQUssRUFBRTtVQUFFTCxLQUFLLEVBQUU7UUFBRTtNQUNwQjtJQUNGLENBQUMsQ0FBQztFQUNKO0VBRUFYLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksQ0FBQ2lCLElBQUksR0FBRyxJQUFJcEMscUNBQUksQ0FBQyxJQUFJLENBQUNRLEVBQUUsRUFBRTtNQUM1QkMsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtNQUN2QmtCLE9BQU8sRUFBRSxJQUFJLENBQUNBO0lBQ2hCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ1MsSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDM0IsS0FBSyxDQUFDO0lBQy9CLElBQUksQ0FBQzBCLElBQUksQ0FBQ0UsUUFBUSxDQUFDQyxDQUFDLElBQUksSUFBSTtFQUM5QjtFQUVBbkIsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDb0IsU0FBUyxHQUFHLElBQUlwQyw4Q0FBSyxDQUFDO01BQ3pCSSxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO01BQ1hpQyxLQUFLLEVBQUUsSUFBSSxDQUFDTCxJQUFJO01BQ2hCdEIsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtNQUN2QjRCLElBQUksRUFBRSxJQUFJLENBQUM5QixLQUFLO01BQ2hCRCxLQUFLLEVBQUUsSUFBSSxDQUFDQTtJQUNkLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ2dDLFlBQVksR0FBRyxJQUFJdEMsaURBQVEsQ0FBQztNQUMvQkcsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtNQUNYaUMsS0FBSyxFQUFFLElBQUksQ0FBQ0wsSUFBSTtNQUNoQnRCLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7TUFDdkI0QixJQUFJLEVBQUUsSUFBSSxDQUFDN0IsUUFBUTtNQUNuQkYsS0FBSyxFQUFFLElBQUksQ0FBQ0E7SUFDZCxDQUFDLENBQUM7RUFDSjtFQUVBaUMsWUFBWUEsQ0FBQztJQUFFakM7RUFBTSxDQUFDLEVBQUU7SUFDdEIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDa0MsTUFBTSxHQUFHLElBQUksQ0FBQ3RDLE9BQU8sQ0FBQ3VDLHFCQUFxQixDQUFDLENBQUM7SUFFbEQsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztFQUNoQjtFQUVBRixXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNiLE1BQU0sR0FBRyxJQUFJLENBQUNXLE1BQU0sQ0FBQ1gsTUFBTSxHQUFHVixNQUFNLENBQUMwQixXQUFXO0lBQ3JELElBQUksQ0FBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUNZLE1BQU0sQ0FBQ1osS0FBSyxHQUFHVCxNQUFNLENBQUMyQixVQUFVO0lBRWxELElBQUksQ0FBQ2YsSUFBSSxDQUFDZ0IsS0FBSyxDQUFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDMUMsS0FBSyxDQUFDc0IsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztJQUNqRCxJQUFJLENBQUNHLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ0UsQ0FBQyxHQUFHLElBQUksQ0FBQzNDLEtBQUssQ0FBQ3VCLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU07RUFDckQ7RUFFQWMsT0FBT0EsQ0FBQ0ssQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNiLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDUixNQUFNLENBQUNVLElBQUksR0FBR0YsQ0FBQyxJQUFJN0IsTUFBTSxDQUFDMkIsVUFBVTtJQUVuRCxJQUFJLENBQUNmLElBQUksQ0FBQ0UsUUFBUSxDQUFDZSxDQUFDLEdBQ2xCLENBQUMsSUFBSSxDQUFDMUMsS0FBSyxDQUFDc0IsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNHLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNBLENBQUMsR0FBRyxJQUFJLENBQUMxQyxLQUFLLENBQUNzQixLQUFLLEdBQUcsSUFBSSxDQUFDakIsS0FBSztFQUMxRjtFQUVBaUMsT0FBT0EsQ0FBQ0ssQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNiLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDVCxNQUFNLENBQUNXLEdBQUcsR0FBR0YsQ0FBQyxJQUFJOUIsTUFBTSxDQUFDMEIsV0FBVztJQUNuRCxJQUFJLENBQUNkLElBQUksQ0FBQ0UsUUFBUSxDQUFDZ0IsQ0FBQyxHQUNsQixJQUFJLENBQUMzQyxLQUFLLENBQUN1QixNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsSUFBSSxDQUFDZ0IsS0FBSyxDQUFDRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQzNDLEtBQUssQ0FBQ3VCLE1BQU07RUFDOUU7RUFFQXVCLE1BQU1BLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUNkLE1BQU0sRUFBRTtJQUVsQixJQUFJLENBQUNsQixPQUFPLENBQUNDLFFBQVEsQ0FBQ08sS0FBSyxDQUFDTCxLQUFLLElBQUksSUFBSTtJQUV6QyxJQUFJLENBQUNrQixPQUFPLENBQUNVLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUNULE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFZixJQUFJLENBQUN0QixPQUFPLENBQUNDLFFBQVEsQ0FBQ0csU0FBUyxDQUFDRCxLQUFLLEdBQUc2QixLQUFLO0lBRTdDLElBQUksQ0FBQ25CLFNBQVMsQ0FBQ2lCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDO0lBQzVCLElBQUksQ0FBQ2hCLFlBQVksQ0FBQ2MsTUFBTSxDQUFDRSxLQUFLLENBQUM7RUFDakM7RUFFQUMsUUFBUUEsQ0FBQ2pELEtBQUssRUFBRStDLE1BQU0sRUFBRTtJQUN0QixJQUFJLENBQUMxQyxLQUFLLEdBQUcsQ0FBQztJQUVkLElBQUksQ0FBQzRCLFlBQVksQ0FBQ2pDLEtBQUssQ0FBQztJQUN4QixJQUFJLENBQUNxQyxPQUFPLENBQUNVLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUNULE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDakI7QUFDRjs7Ozs7Ozs7VUNoSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSB9IGZyb20gXCJvZ2xcIlxuXG5pbXBvcnQgdmVydGV4IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktdmVydGV4Lmdsc2xcIlxuaW1wb3J0IGZyYWdtZW50IGZyb20gXCIuLi8uLi8uLi9zaGFkZXJzL2dhbGxlcnktZnJhZ21lbnQuZ2xzbFwiXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIlxuaW1wb3J0IFN1YlRpdGxlIGZyb20gXCIuL1N1YlRpdGxlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZXRyeSwgc2NlbmUsIHNpemVzLCB0aXRsZSwgc3ViVGl0bGUsIHJlbmRlcmVyIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5zdWJUaXRsZSA9IHN1YlRpdGxlXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG5cbiAgICB0aGlzLnRpbWUgPSAwXG5cbiAgICB0aGlzLmV4dHJhID0gMFxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKClcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gICAgdGhpcy5jcmVhdGVUaXRsZSgpXG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIilcblxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoXCJzcmNcIildXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG4gICAgICAgIHVTdHJlbmd0aDogeyB2YWx1ZTogMCB9LFxuICAgICAgICB1Vmlld3BvcnRTaXplczoge1xuICAgICAgICAgIHZhbHVlOiBbdGhpcy5zaXplcy53aWR0aCwgdGhpcy5zaXplcy5oZWlnaHRdXG4gICAgICAgIH0sXG4gICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbVxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnogLT0gMC4wMVxuICB9XG5cbiAgY3JlYXRlVGl0bGUoKSB7XG4gICAgdGhpcy50aXRsZVRleHQgPSBuZXcgVGl0bGUoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBwbGFuZTogdGhpcy5tZXNoLFxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgICB0ZXh0OiB0aGlzLnRpdGxlLFxuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KVxuXG4gICAgdGhpcy5zdWJUaXRsZVRleHQgPSBuZXcgU3ViVGl0bGUoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBwbGFuZTogdGhpcy5tZXNoLFxuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgICB0ZXh0OiB0aGlzLnN1YlRpdGxlLFxuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKHggPSAwKSB7XG4gICAgdGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVUaW1lLnZhbHVlICs9IDAuMDJcblxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG5cbiAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudVN0cmVuZ3RoLnZhbHVlID0gc3BlZWRcblxuICAgIHRoaXMudGl0bGVUZXh0LnVwZGF0ZShzcGVlZClcbiAgICB0aGlzLnN1YlRpdGxlVGV4dC51cGRhdGUoc3BlZWQpXG4gIH1cblxuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IDBcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA4ZDAwYjk5Nzc2YmE3MjdjYzNmXCIpIl0sIm5hbWVzIjpbIk1lc2giLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJUaXRsZSIsIlN1YlRpdGxlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZXRyeSIsInNjZW5lIiwic2l6ZXMiLCJ0aXRsZSIsInN1YlRpdGxlIiwicmVuZGVyZXIiLCJ0aW1lIiwiZXh0cmEiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVUaXRsZSIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsInVTdHJlbmd0aCIsInVWaWV3cG9ydFNpemVzIiwid2lkdGgiLCJoZWlnaHQiLCJ1VGltZSIsIm1lc2giLCJzZXRQYXJlbnQiLCJwb3NpdGlvbiIsInoiLCJ0aXRsZVRleHQiLCJwbGFuZSIsInRleHQiLCJzdWJUaXRsZVRleHQiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJ4IiwieSIsImxlZnQiLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJzcGVlZCIsIm9uUmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==