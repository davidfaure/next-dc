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
    this.galleries = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleriesElement, (element, index) => {
      const media = new _Gallery__WEBPACK_IMPORTED_MODULE_4__["default"]({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
      });
      return media;
    });
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
/******/ 	__webpack_require__.h = () => ("3794235274cd522d6daf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGOzs7Ozs7OztVQzVMQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRoXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuL0dhbGxlcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIC8vIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG4gICAgLy8gdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgLy8gdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlclwiKVxuICAgIC8vIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZVwiKVxuXG4gICAgdGhpcy54ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgbGVycDogMC4xLFxuICAgICAgdmVsb2NpdHk6IDFcbiAgICB9XG5cbiAgICB0aGlzLnNwZWVkID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wsIHtcbiAgICAgIGhlaWdodFNlZ21lbnRzOiAyMCxcbiAgICAgIHdpZHRoU2VnbWVudHM6IDIwXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgLy8gdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgLy8gICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAvLyAgICAgZWxlbWVudCxcbiAgICAvLyAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgLy8gICAgIGdsOiB0aGlzLmdsLFxuICAgIC8vICAgICBpbmRleCxcbiAgICAvLyAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgLy8gICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgIC8vICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAvLyAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICAgIHRoaXMuZ2FsbGVyaWVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nYWxsZXJpZXMgPSBtYXAodGhpcy5nYWxsZXJpZXNFbGVtZW50LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG1lZGlhID0gbmV3IEdhbGxlcnkoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtZWRpYVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHNob3coKSB7XG4gICAgLy8gdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5zaG93KCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIC8vIHRoaXMuZ3JvdXAuc2V0UGFyZW50KG51bGwpXG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuaGlkZSgpKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcbiAgfVxuXG4gIC8vIG9uUmVzaXplKGV2ZW50KSB7XG4gIC8vICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgLy8gICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAvLyAgIHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuICAvLyAgICAgaGVpZ2h0OiAodGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuICAvLyAgICAgd2lkdGg6ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcbiAgLy8gICB9XG5cbiAgLy8gICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY2VuZS50YXJnZXQgPSAwXG4gIC8vICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXG4gIC8vICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgLy8gfVxuXG4gIC8vIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gIC8vICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgLy8gfVxuXG4gIC8vIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gIC8vICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAvLyAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZSAvLyAqMC44IHBvdXIgcmFsZW50aXJcbiAgLy8gfVxuXG4gIC8vIG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuICAvLyBvbldoZWVsKHsgcGl4ZWxZIH0pIHt9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LnVwZGF0ZShzY3JvbGwpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5kZXN0cm95KCkpXG4gIH1cblxuICAvLyB1cGRhdGUoKSB7XG4gIC8vICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgLy8gICBjb25zb2xlLmxvZyhcIklDSVwiKVxuXG4gIC8vICAgdGhpcy5zcGVlZC5jdXJyZW50ID0gbGVycCh0aGlzLnNwZWVkLmN1cnJlbnQsIHRoaXMuc3BlZWQudGFyZ2V0LCB0aGlzLnNwZWVkLmxlcnApXG4gIC8vICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gZ3NhcC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcbiAgLy8gICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycCh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG5cbiAgLy8gICB0aGlzLnNwZWVkLnRhcmdldCA9ICh0aGlzLnNjcm9sbC50YXJnZXQgLSB0aGlzLnNjcm9sbC5jdXJyZW50KSAqIDAuMDAxOCAvLyBvdSAwLjAwMVxuXG4gIC8vICAgdGhpcy5nYWxsZXJ5LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7XG4gIC8vICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID4gLTAuMDEgPyAwIDogdGhpcy5zY3JvbGwuY3VycmVudFxuICAvLyAgIH1weClgOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAvLyAgIGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAvLyAgICAgdGhpcy54LmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAvLyAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgLy8gICAgIHRoaXMueC5kaXJlY3Rpb24gPSBcImxlZnRcIlxuICAvLyAgIH1cblxuICAvLyAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cbiAgLy8gICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcbiAgLy8gICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNwZWVkLmN1cnJlbnQpXG4gIC8vICAgfSlcbiAgLy8gfVxuXG4gIC8vIC8qKlxuICAvLyAgKiBEZXN0cm95LlxuICAvLyAgKi9cbiAgLy8gZGVzdHJveSgpIHtcbiAgLy8gICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIC8vIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM3OTQyMzUyNzRjZDUyMmQ2ZGFmXCIpIl0sIm5hbWVzIjpbIlRyYW5zZm9ybSIsIlBsYW5lIiwiUHJlZml4IiwiTWVkaWEiLCJtYXAiLCJsZXJwIiwiZ3NhcCIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwiZ3JvdXAiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsInNjcm9sbCIsInN0YXJ0IiwidmVsb2NpdHkiLCJzcGVlZCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsImdhbGxlcmllc0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYWxsZXJpZXMiLCJlbGVtZW50IiwiaW5kZXgiLCJtZWRpYSIsImdhbGxlcnkiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkZXN0cm95Il0sInNvdXJjZVJvb3QiOiIifQ==