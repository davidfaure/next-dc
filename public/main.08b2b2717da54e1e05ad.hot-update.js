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
      sizes: this.sizes,
      renderer: this.renderer
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
/******/ 	__webpack_require__.h = () => ("03925a976ef2c8123173")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRjs7Ozs7Ozs7VUM3TEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtLCBQbGFuZSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9NZWRpYVwiXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7IGxlcnAgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbWF0aFwiXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi9HYWxsZXJ5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICAvLyB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuICAgIC8vIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuICAgIC8vIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcbiAgICAvLyB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2VcIilcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG4gICAgICBoZWlnaHRTZWdtZW50czogMjAsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAyMFxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIC8vIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIC8vICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgLy8gICAgIGVsZW1lbnQsXG4gICAgLy8gICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgIC8vICAgICBnbDogdGhpcy5nbCxcbiAgICAvLyAgICAgaW5kZXgsXG4gICAgLy8gICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgIC8vICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAvLyAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgLy8gICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICAvLyAgIH0pXG4gICAgLy8gfSlcbiAgICB0aGlzLmdhbGxlcmllc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcblxuICAgIHRoaXMuZ2FsbGVyaWVzID0gbWFwKFxuICAgICAgdGhpcy5nYWxsZXJpZXNFbGVtZW50LFxuICAgICAgKGVsZW1lbnQsIGluZGV4KSA9PlxuICAgICAgICBuZXcgR2FsbGVyeSh7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlclxuICAgICAgICB9KVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgc2hvdygpIHtcbiAgICAvLyB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgLy8gdGhpcy5ncm91cC5zZXRQYXJlbnQobnVsbClcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5oaWRlKCkpXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uUmVzaXplKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaERvd24oZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoTW92ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoVXAoZXZlbnQpKVxuICB9XG5cbiAgLy8gb25SZXNpemUoZXZlbnQpIHtcbiAgLy8gICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAvLyAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gIC8vICAgdGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG4gIC8vICAgICBoZWlnaHQ6ICh0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG4gIC8vICAgICB3aWR0aDogKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuICAvLyAgIH1cblxuICAvLyAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjZW5lLnRhcmdldCA9IDBcbiAgLy8gICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cbiAgLy8gICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuICAvLyB9XG5cbiAgLy8gb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgLy8gICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICAvLyB9XG5cbiAgLy8gb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgLy8gICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gIC8vICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlIC8vICowLjggcG91ciByYWxlbnRpclxuICAvLyB9XG5cbiAgLy8gb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIC8vIG9uV2hlZWwoeyBwaXhlbFkgfSkge31cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkudXBkYXRlKHNjcm9sbCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmRlc3Ryb3koKSlcbiAgfVxuXG4gIC8vIHVwZGF0ZSgpIHtcbiAgLy8gICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAvLyAgIGNvbnNvbGUubG9nKFwiSUNJXCIpXG5cbiAgLy8gICB0aGlzLnNwZWVkLmN1cnJlbnQgPSBsZXJwKHRoaXMuc3BlZWQuY3VycmVudCwgdGhpcy5zcGVlZC50YXJnZXQsIHRoaXMuc3BlZWQubGVycClcbiAgLy8gICB0aGlzLnNjcm9sbC50YXJnZXQgPSBnc2FwLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuICAvLyAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAvLyAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gKHRoaXMuc2Nyb2xsLnRhcmdldCAtIHRoaXMuc2Nyb2xsLmN1cnJlbnQpICogMC4wMDE4IC8vIG91IDAuMDAxXG5cbiAgLy8gICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgLy8gICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIC8vICAgfXB4KWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gIC8vICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gIC8vICAgICB0aGlzLnguZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gIC8vICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAvLyAgICAgdGhpcy54LmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAvLyAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAvLyAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc3BlZWQuY3VycmVudClcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgLy8gLyoqXG4gIC8vICAqIERlc3Ryb3kuXG4gIC8vICAqL1xuICAvLyBkZXN0cm95KCkge1xuICAvLyAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgLy8gfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDM5MjVhOTc2ZWYyYzgxMjMxNzNcIikiXSwibmFtZXMiOlsiVHJhbnNmb3JtIiwiUGxhbmUiLCJQcmVmaXgiLCJNZWRpYSIsIm1hcCIsImxlcnAiLCJnc2FwIiwiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJncm91cCIsIngiLCJjdXJyZW50IiwidGFyZ2V0Iiwic2Nyb2xsIiwic3RhcnQiLCJ2ZWxvY2l0eSIsInNwZWVkIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwiZ2FsbGVyaWVzRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcmllcyIsImVsZW1lbnQiLCJpbmRleCIsImdhbGxlcnkiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkZXN0cm95Il0sInNvdXJjZVJvb3QiOiIifQ==