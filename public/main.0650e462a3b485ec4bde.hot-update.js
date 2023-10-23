"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Home/index.js":
/*!*********************************************!*\
  !*** ./app/components/Canvas/Home/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Plane.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/math */ "./app/utils/math.js");
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gallery */ "./app/components/Canvas/Home/Gallery.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    gl,
    scene,
    sizes,
    renderer,
    camera
  }) {
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.renderer = renderer;
    this.camera = camera;
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_5__.Transform();

    // this.transformPrefix = Prefix("transform")
    // this.gallery = document.querySelector(".home__gallery")
    // this.galleryElement = document.querySelector(".home__gallery__wrapper")
    // this.mediasElements = document.querySelectorAll(".home__gallery__media__image")

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    };
    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,
      velocity: 1
    };
    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
    };
    this.createGeometry();
    this.createGallery();
    this.group.setParent(scene);
    this.show();
  }
  createGeometry() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_6__.Plane(this.gl, {
      heightSegments: 20,
      widthSegments: 20
    });
  }
  createGallery() {
    // this.medias = map(this.mediasElements, (element, index) => {
    //   return new Media({
    //     element,
    //     geometry: this.geometry,
    //     gl: this.gl,
    //     index,
    //     scene: this.group,
    //     sizes: this.sizes,
    //     renderer: this.renderer,
    //     camera: this.camera
    //   })
    // })
    this.galleriesElement = document.querySelectorAll(".home__gallery");
    this.galleries = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleriesElement, (element, index) => new _Gallery__WEBPACK_IMPORTED_MODULE_4__["default"]({
      element,
      geometry: this.geometry,
      index,
      gl: this.gl,
      scene: this.group,
      sizes: this.sizes
    }));
  }

  /**
   * Animations.
   */
  show() {
    // this.group.setParent(this.scene)
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.show());
  }
  hide() {
    // this.group.setParent(null)
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.hide());
  }
  onResize(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.onResize(event));
  }
  onTouchDown(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.onTouchDown(event));
  }
  onTouchMove(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.onTouchMove(event));
  }
  onTouchUp(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.onTouchUp(event));
  }

  // onResize(event) {
  //   this.bounds = this.galleryElement.getBoundingClientRect()

  //   this.sizes = event.sizes

  //   this.gallerySizes = {
  //     height: (this.bounds.height / window.innerHeight) * this.sizes.height,
  //     width: (this.bounds.width / window.innerWidth) * this.sizes.width
  //   }

  //   this.scroll.last = this.scene.target = 0
  //   map(this.medias, media => media.onResize(event, this.scroll))

  //   this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth
  // }

  // onTouchDown({ x, y }) {
  //   this.scroll.last = this.scroll.current
  // }

  // onTouchMove({ x, y }) {
  //   const distance = x.start - x.end

  //   this.scroll.target = this.scroll.last - distance // *0.8 pour ralentir
  // }

  // onTouchUp({ x, y }) {}

  // onWheel({ pixelY }) {}

  update(scroll) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.update(scroll));
  }
  destroy() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.destroy());
  }

  // update() {
  //   if (!this.bounds) return

  //   console.log("ICI")

  //   this.speed.current = lerp(this.speed.current, this.speed.target, this.speed.lerp)
  //   this.scroll.target = gsap.utils.clamp(-this.scroll.limit, 0, this.scroll.target)
  //   this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.lerp)

  //   this.speed.target = (this.scroll.target - this.scroll.current) * 0.0018 // ou 0.001

  //   this.gallery.style[this.transformPrefix] = `translateX(${
  //     this.scroll.current > -0.01 ? 0 : this.scroll.current
  //   }px)`; // prettier-ignore

  //   if (this.scroll.last < this.scroll.current) {
  //     this.x.direction = "right"
  //   } else if (this.scroll.last > this.scroll.current) {
  //     this.x.direction = "left"
  //   }

  //   this.scroll.last = this.scroll.current

  //   map(this.medias, media => {
  //     media.update(this.scroll.current, this.speed.current)
  //   })
  // }

  // /**
  //  * Destroy.
  //  */
  // destroy() {
  //   this.scene.removeChild(this.group)
  // }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c247ed0a5c9df3b9bc32")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGOzs7Ozs7OztVQzVMQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRoXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuL0dhbGxlcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIC8vIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG4gICAgLy8gdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgLy8gdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlclwiKVxuICAgIC8vIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZVwiKVxuXG4gICAgdGhpcy54ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgbGVycDogMC4xLFxuICAgICAgdmVsb2NpdHk6IDFcbiAgICB9XG5cbiAgICB0aGlzLnNwZWVkID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wsIHtcbiAgICAgIGhlaWdodFNlZ21lbnRzOiAyMCxcbiAgICAgIHdpZHRoU2VnbWVudHM6IDIwXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgLy8gdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgLy8gICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAvLyAgICAgZWxlbWVudCxcbiAgICAvLyAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgLy8gICAgIGdsOiB0aGlzLmdsLFxuICAgIC8vICAgICBpbmRleCxcbiAgICAvLyAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgLy8gICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgIC8vICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAvLyAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICAgIHRoaXMuZ2FsbGVyaWVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nYWxsZXJpZXMgPSBtYXAoXG4gICAgICB0aGlzLmdhbGxlcmllc0VsZW1lbnQsXG4gICAgICAoZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICAgIG5ldyBHYWxsZXJ5KHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBzaG93KCkge1xuICAgIC8vIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuc2hvdygpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICAvLyB0aGlzLmdyb3VwLnNldFBhcmVudChudWxsKVxuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmhpZGUoKSlcbiAgfVxuXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25SZXNpemUoZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoRG93bihldmVudCkpXG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hNb3ZlKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hVcChldmVudCkpXG4gIH1cblxuICAvLyBvblJlc2l6ZShldmVudCkge1xuICAvLyAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIC8vICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgLy8gICB0aGlzLmdhbGxlcnlTaXplcyA9IHtcbiAgLy8gICAgIGhlaWdodDogKHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiB0aGlzLnNpemVzLmhlaWdodCxcbiAgLy8gICAgIHdpZHRoOiAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2NlbmUudGFyZ2V0ID0gMFxuICAvLyAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuICAvLyAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG4gIC8vIH1cblxuICAvLyBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAvLyAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIC8vIH1cblxuICAvLyBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAvLyAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgLy8gICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2UgLy8gKjAuOCBwb3VyIHJhbGVudGlyXG4gIC8vIH1cblxuICAvLyBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgLy8gb25XaGVlbCh7IHBpeGVsWSB9KSB7fVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoc2Nyb2xsKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuZGVzdHJveSgpKVxuICB9XG5cbiAgLy8gdXBkYXRlKCkge1xuICAvLyAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gIC8vICAgY29uc29sZS5sb2coXCJJQ0lcIilcblxuICAvLyAgIHRoaXMuc3BlZWQuY3VycmVudCA9IGxlcnAodGhpcy5zcGVlZC5jdXJyZW50LCB0aGlzLnNwZWVkLnRhcmdldCwgdGhpcy5zcGVlZC5sZXJwKVxuICAvLyAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGdzYXAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG4gIC8vICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGxlcnAodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuXG4gIC8vICAgdGhpcy5zcGVlZC50YXJnZXQgPSAodGhpcy5zY3JvbGwudGFyZ2V0IC0gdGhpcy5zY3JvbGwuY3VycmVudCkgKiAwLjAwMTggLy8gb3UgMC4wMDFcblxuICAvLyAgIHRoaXMuZ2FsbGVyeS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke1xuICAvLyAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA+IC0wLjAxID8gMCA6IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgLy8gICB9cHgpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgLy8gICBpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgLy8gICAgIHRoaXMueC5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgLy8gICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gIC8vICAgICB0aGlzLnguZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgLy8gICB9XG5cbiAgLy8gICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG4gIC8vICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gIC8vICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zcGVlZC5jdXJyZW50KVxuICAvLyAgIH0pXG4gIC8vIH1cblxuICAvLyAvKipcbiAgLy8gICogRGVzdHJveS5cbiAgLy8gICovXG4gIC8vIGRlc3Ryb3koKSB7XG4gIC8vICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICAvLyB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMjQ3ZWQwYTVjOWRmM2I5YmMzMlwiKSJdLCJuYW1lcyI6WyJUcmFuc2Zvcm0iLCJQbGFuZSIsIlByZWZpeCIsIk1lZGlhIiwibWFwIiwibGVycCIsImdzYXAiLCJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJyZW5kZXJlciIsImNhbWVyYSIsImdyb3VwIiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzY3JvbGwiLCJzdGFydCIsInZlbG9jaXR5Iiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJoZWlnaHRTZWdtZW50cyIsIndpZHRoU2VnbWVudHMiLCJnYWxsZXJpZXNFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyaWVzIiwiZWxlbWVudCIsImluZGV4IiwiZ2FsbGVyeSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50Iiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImRlc3Ryb3kiXSwic291cmNlUm9vdCI6IiJ9