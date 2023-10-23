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
    console.log(this.element, "createTexture", image);
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
/******/ 	__webpack_require__.h = () => ("03162befba525f44c956")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMzA2Zjc0NjIyODcwYzFjYzNkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVhO0FBQ0k7QUFDbEM7QUFFM0IsaUVBQWUsTUFBTTtFQUNuQk0sV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLEVBQUU7SUFBRUMsUUFBUTtJQUFFQyxLQUFLO0lBQUVDO0VBQU0sQ0FBQyxFQUFFO0lBQ25ELElBQUksQ0FBQ0osT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFFbEIsSUFBSSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUViLElBQUksQ0FBQ0MsS0FBSyxHQUFHO01BQ1hDLENBQUMsRUFBRSxDQUFDO01BQ0pDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFFRCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNqQixJQUFJLENBQUNDLFlBQVksQ0FBQztNQUNoQlIsS0FBSyxFQUFFLElBQUksQ0FBQ0E7SUFDZCxDQUFDLENBQUM7RUFDSjtFQUVBSyxhQUFhQSxDQUFBLEVBQUc7SUFDZDtJQUNBLE1BQU1JLEtBQUssR0FBRyxJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUUvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDaEIsT0FBTyxFQUFFLGVBQWUsRUFBRWEsS0FBSyxDQUFDO0lBRWpELElBQUksQ0FBQ0ksT0FBTyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ04sS0FBSyxDQUFDTyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDaEU7RUFFQVYsYUFBYUEsQ0FBQSxFQUFHO0lBQ2QsSUFBSSxDQUFDVyxPQUFPLEdBQUcsSUFBSTNCLHdDQUFPLENBQUMsSUFBSSxDQUFDTyxFQUFFLEVBQUU7TUFDbENKLFFBQVE7TUFDUkQsTUFBTTtNQUNOMEIsUUFBUSxFQUFFO1FBQ1JDLElBQUksRUFBRTtVQUFFQyxLQUFLLEVBQUUsSUFBSSxDQUFDUDtRQUFRLENBQUM7UUFDN0JRLE9BQU8sRUFBRTtVQUNQRCxLQUFLLEVBQUU7UUFDVDtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQWIsVUFBVUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDZSxJQUFJLEdBQUcsSUFBSWpDLHFDQUFJLENBQUMsSUFBSSxDQUFDUSxFQUFFLEVBQUU7TUFDNUJDLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7TUFDdkJtQixPQUFPLEVBQUUsSUFBSSxDQUFDQTtJQUNoQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ3hCLEtBQUssQ0FBQztFQUNqQztFQUVBUyxZQUFZQSxDQUFDO0lBQUVSO0VBQU0sQ0FBQyxFQUFFO0lBQ3RCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ3dCLE1BQU0sR0FBRyxJQUFJLENBQUM1QixPQUFPLENBQUM2QixxQkFBcUIsQ0FBQyxDQUFDO0lBRWxELElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7RUFDaEI7RUFFQUMsSUFBSUEsQ0FBQSxFQUFHO0lBQ0xuQyxzQ0FBSSxDQUFDb0MsTUFBTSxDQUNULElBQUksQ0FBQ2IsT0FBTyxDQUFDQyxRQUFRLENBQUNhLE1BQU0sRUFDNUI7TUFDRVgsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxFQUNEO01BQ0VBLEtBQUssRUFBRTtJQUNULENBQ0YsQ0FBQztFQUNIO0VBRUFZLElBQUlBLENBQUEsRUFBRztJQUNMdEMsc0NBQUksQ0FBQ3VDLEVBQUUsQ0FBQyxJQUFJLENBQUNoQixPQUFPLENBQUNDLFFBQVEsQ0FBQ2EsTUFBTSxFQUFFO01BQ3BDWCxLQUFLLEVBQUU7SUFDVCxDQUFDLENBQUM7RUFDSjtFQUVBTSxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNRLE1BQU0sR0FBRyxJQUFJLENBQUNWLE1BQU0sQ0FBQ1UsTUFBTSxHQUFHcEIsTUFBTSxDQUFDcUIsV0FBVztJQUNyRCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNaLE1BQU0sQ0FBQ1ksS0FBSyxHQUFHdEIsTUFBTSxDQUFDdUIsVUFBVTtJQUVsRCxJQUFJLENBQUNmLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ25DLENBQUMsR0FBRyxJQUFJLENBQUNILEtBQUssQ0FBQ29DLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUs7SUFDakQsSUFBSSxDQUFDZCxJQUFJLENBQUNnQixLQUFLLENBQUNsQyxDQUFDLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNrQyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO0VBQ3JEO0VBRUFQLE9BQU9BLENBQUN4QixDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUNxQixNQUFNLENBQUNlLElBQUksR0FBR3BDLENBQUMsSUFBSVcsTUFBTSxDQUFDdUIsVUFBVTtJQUVuRCxJQUFJLENBQUNmLElBQUksQ0FBQ2tCLFFBQVEsQ0FBQ3JDLENBQUMsR0FDbEIsQ0FBQyxJQUFJLENBQUNILEtBQUssQ0FBQ29DLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDZCxJQUFJLENBQUNnQixLQUFLLENBQUNuQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0gsS0FBSyxDQUFDb0MsS0FBSyxHQUFHLElBQUksQ0FBQ2xDLEtBQUssQ0FBQ0MsQ0FBQztFQUM1RjtFQUVBeUIsT0FBT0EsQ0FBQ3hCLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDYixJQUFJLENBQUNBLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQ29CLE1BQU0sQ0FBQ2lCLEdBQUcsR0FBR3JDLENBQUMsSUFBSVUsTUFBTSxDQUFDcUIsV0FBVztJQUNuRCxJQUFJLENBQUNiLElBQUksQ0FBQ2tCLFFBQVEsQ0FBQ3BDLENBQUMsR0FDbEIsSUFBSSxDQUFDSixLQUFLLENBQUNrQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ1osSUFBSSxDQUFDZ0IsS0FBSyxDQUFDbEMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUNBLENBQUMsR0FBRyxJQUFJLENBQUNKLEtBQUssQ0FBQ2tDLE1BQU0sR0FBRyxJQUFJLENBQUNoQyxLQUFLLENBQUNFLENBQUM7RUFDN0Y7RUFFQXNDLE1BQU1BLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUNwQixNQUFNLEVBQUU7SUFDbEIsSUFBSSxDQUFDRyxPQUFPLENBQUNnQixNQUFNLENBQUM7SUFDcEIsSUFBSSxDQUFDZixPQUFPLENBQUMsQ0FBQyxDQUFDOztJQUVmO0lBQ0E7SUFDQTtFQUNGOztFQUVBaUIsUUFBUUEsQ0FBQzdDLEtBQUssRUFBRTJDLE1BQU0sRUFBRTtJQUN0QixJQUFJLENBQUN6QyxLQUFLLEdBQUc7TUFDWEMsQ0FBQyxFQUFFLENBQUM7TUFDSkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQ0ksWUFBWSxDQUFDUixLQUFLLENBQUM7SUFDeEIsSUFBSSxDQUFDMkIsT0FBTyxDQUFDZ0IsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNqQjtBQUNGOzs7Ozs7OztVQ2hJQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9NZWRpYS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSBcIm9nbFwiXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvZ2FsbGVyeS12ZXJ0ZXguZ2xzbFwiXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcIi4uLy4uLy4uL3NoYWRlcnMvZ2FsbGVyeS1mcmFnbWVudC5nbHNsXCJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnbCwgZ2VvbWV0cnksIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy50aW1lID0gMFxuXG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKClcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgIHRoaXMuY3JlYXRlTWVzaCgpXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoe1xuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlVGV4dHVyZSgpIHtcbiAgICAvLyB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShcInNyY1wiKV1cbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQsIFwiY3JlYXRlVGV4dHVyZVwiLCBpbWFnZSlcblxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKV1cbiAgfVxuXG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgICAgdU9mZnNldDoge1xuICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbVxuICAgIH0pXG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoKVxuICAgIHRoaXMudXBkYXRlWCgpXG4gICAgdGhpcy51cGRhdGVZKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgZ3NhcC5mcm9tVG8oXG4gICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IDFcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGdzYXAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDFcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuICB9XG5cbiAgdXBkYXRlWCh4ID0gMCkge1xuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuICAgICAgLXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmEueFxuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0ICsgdGhpcy5leHRyYS55XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXG4gICAgdGhpcy51cGRhdGVZKDApXG5cbiAgICAvLyBjb25zdCBPRkZTRVRfU0NBTEUgPSAwLjFcbiAgICAvLyBjb25zdCBvZmZzZXQgPSBbc3BlZWQgKiBPRkZTRVRfU0NBTEUsIHNwZWVkICogT0ZGU0VUX1NDQUxFXVxuICAgIC8vIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51T2Zmc2V0LnZhbHVlID0gb2Zmc2V0XG4gIH1cblxuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbClcbiAgICB0aGlzLnVwZGF0ZVkoMClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDMxNjJiZWZiYTUyNWY0NGM5NTZcIikiXSwibmFtZXMiOlsiTWVzaCIsIlByb2dyYW0iLCJUZXh0dXJlIiwidmVydGV4IiwiZnJhZ21lbnQiLCJnc2FwIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZXRyeSIsInNjZW5lIiwic2l6ZXMiLCJ0aW1lIiwiZXh0cmEiLCJ4IiwieSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImNyZWF0ZUJvdW5kcyIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJ1T2Zmc2V0IiwibWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiZnJvbVRvIiwidUFscGhhIiwiaGlkZSIsInRvIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsInNjcm9sbCIsInNwZWVkIiwib25SZXNpemUiXSwic291cmNlUm9vdCI6IiJ9