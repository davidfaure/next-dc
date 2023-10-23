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
    this.onResize({
      sizes: this.sizes
    });
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
/******/ 	__webpack_require__.h = () => ("7e02aa661a4bd6cda796")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0Y7Ozs7Ozs7O1VDaE1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybSwgUGxhbmUgfSBmcm9tIFwib2dsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21hdGhcIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4vR2FsbGVyeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciwgY2FtZXJhIH0pIHtcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgLy8gdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgICAvLyB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlcIilcbiAgICAvLyB0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5X193cmFwcGVyXCIpXG4gICAgLy8gdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlXCIpXG5cbiAgICB0aGlzLnggPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICBsZXJwOiAwLjEsXG4gICAgICB2ZWxvY2l0eTogMVxuICAgIH1cblxuICAgIHRoaXMuc3BlZWQgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpXG4gICAgdGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG4gICAgdGhpcy5zaG93KClcblxuICAgIHRoaXMub25SZXNpemUoe1xuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG4gICAgICBoZWlnaHRTZWdtZW50czogMjAsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAyMFxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIC8vIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIC8vICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgLy8gICAgIGVsZW1lbnQsXG4gICAgLy8gICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgIC8vICAgICBnbDogdGhpcy5nbCxcbiAgICAvLyAgICAgaW5kZXgsXG4gICAgLy8gICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgIC8vICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAvLyAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgLy8gICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgICB0aGlzLmdhbGxlcmllc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcblxuICAgIHRoaXMuZ2FsbGVyaWVzID0gbWFwKFxuICAgICAgdGhpcy5nYWxsZXJpZXNFbGVtZW50LFxuICAgICAgKGVsZW1lbnQsIGluZGV4KSA9PlxuICAgICAgICBuZXcgR2FsbGVyeSh7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9KVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgc2hvdygpIHtcbiAgICAvLyB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgLy8gdGhpcy5ncm91cC5zZXRQYXJlbnQobnVsbClcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5oaWRlKCkpXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uUmVzaXplKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaERvd24oZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoTW92ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoVXAoZXZlbnQpKVxuICB9XG5cbiAgLy8gb25SZXNpemUoZXZlbnQpIHtcbiAgLy8gICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAvLyAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gIC8vICAgdGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG4gIC8vICAgICBoZWlnaHQ6ICh0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG4gIC8vICAgICB3aWR0aDogKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuICAvLyAgIH1cblxuICAvLyAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjZW5lLnRhcmdldCA9IDBcbiAgLy8gICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cbiAgLy8gICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuICAvLyB9XG5cbiAgLy8gb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgLy8gICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAvLyB9XG5cbiAgLy8gb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgLy8gICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gIC8vICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlIC8vICowLjggcG91ciByYWxlbnRpclxuICAvLyB9XG5cbiAgLy8gb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIC8vIG9uV2hlZWwoeyBwaXhlbFkgfSkge31cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkudXBkYXRlKHNjcm9sbCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmRlc3Ryb3koKSlcbiAgfVxuXG4gIC8vIHVwZGF0ZSgpIHtcbiAgLy8gICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAvLyAgIGNvbnNvbGUubG9nKFwiSUNJXCIpXG5cbiAgLy8gICB0aGlzLnNwZWVkLmN1cnJlbnQgPSBsZXJwKHRoaXMuc3BlZWQuY3VycmVudCwgdGhpcy5zcGVlZC50YXJnZXQsIHRoaXMuc3BlZWQubGVycClcbiAgLy8gICB0aGlzLnNjcm9sbC50YXJnZXQgPSBnc2FwLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuICAvLyAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAvLyAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gKHRoaXMuc2Nyb2xsLnRhcmdldCAtIHRoaXMuc2Nyb2xsLmN1cnJlbnQpICogMC4wMDE4IC8vIG91IDAuMDAxXG5cbiAgLy8gICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgLy8gICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIC8vICAgfXB4KWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gIC8vICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gIC8vICAgICB0aGlzLnguZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gIC8vICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAvLyAgICAgdGhpcy54LmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAvLyAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAvLyAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc3BlZWQuY3VycmVudClcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgLy8gLyoqXG4gIC8vICAqIERlc3Ryb3kuXG4gIC8vICAqL1xuICAvLyBkZXN0cm95KCkge1xuICAvLyAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgLy8gfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2UwMmFhNjYxYTRiZDZjZGE3OTZcIikiXSwibmFtZXMiOlsiVHJhbnNmb3JtIiwiUGxhbmUiLCJQcmVmaXgiLCJNZWRpYSIsIm1hcCIsImxlcnAiLCJnc2FwIiwiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJncm91cCIsIngiLCJjdXJyZW50IiwidGFyZ2V0Iiwic2Nyb2xsIiwic3RhcnQiLCJ2ZWxvY2l0eSIsInNwZWVkIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsIm9uUmVzaXplIiwiZ2VvbWV0cnkiLCJoZWlnaHRTZWdtZW50cyIsIndpZHRoU2VnbWVudHMiLCJnYWxsZXJpZXNFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyaWVzIiwiZWxlbWVudCIsImluZGV4IiwiZ2FsbGVyeSIsImhpZGUiLCJldmVudCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkZXN0cm95Il0sInNvdXJjZVJvb3QiOiIifQ==