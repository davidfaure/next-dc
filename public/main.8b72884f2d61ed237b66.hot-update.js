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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Plane.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/math */ "./app/utils/math.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");






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
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_4__.Transform();
    this.group.setParent(scene);

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
    this.show();
    this.onResize({
      sizes: this.sizes
    });
  }
  createGeometry() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_5__.Plane(this.gl, {
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
    this.galleries = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleriesElement, (element, index) => new Gallery({
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

  update() {
    if (!this.bounds) return;
    console.log("ICI");
    this.speed.current = (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.lerp)(this.speed.current, this.speed.target, this.speed.lerp);
    this.scroll.target = gsap__WEBPACK_IMPORTED_MODULE_6__["default"].utils.clamp(-this.scroll.limit, 0, this.scroll.target);
    this.scroll.current = (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.lerp)(this.scroll.current, this.scroll.target, this.scroll.lerp);
    this.speed.target = (this.scroll.target - this.scroll.current) * 0.0018; // ou 0.001

    this.gallery.style[this.transformPrefix] = `translateX(${this.scroll.current > -0.01 ? 0 : this.scroll.current}px)`; // prettier-ignore

    if (this.scroll.last < this.scroll.current) {
      this.x.direction = "right";
    } else if (this.scroll.last > this.scroll.current) {
      this.x.direction = "left";
    }
    this.scroll.last = this.scroll.current;
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.medias, media => {
      media.update(this.scroll.current, this.speed.current);
    });
  }

  /**
   * Destroy.
   */
  destroy() {
    this.scene.removeChild(this.group);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f6a1797757c3fad71228")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXRDWiwyQ0FBRyxDQUFDLElBQUksQ0FBQ2lELE1BQU0sRUFBRUMsS0FBSyxJQUFJO01BQ3hCQSxLQUFLLENBQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUN4QixNQUFNLENBQUNGLE9BQU8sRUFBRSxJQUFJLENBQUNLLEtBQUssQ0FBQ0wsT0FBTyxDQUFDO0lBQ3ZELENBQUMsQ0FBQztFQUNKOztFQUVBO0FBQ0Y7QUFDQTtFQUNFdUMsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDOUMsS0FBSyxDQUFDK0MsV0FBVyxDQUFDLElBQUksQ0FBQzNDLEtBQUssQ0FBQztFQUNwQztBQUNGOzs7Ozs7OztVQ3JMQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRoXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cbiAgICAvLyB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuICAgIC8vIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuICAgIC8vIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcbiAgICAvLyB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2VcIilcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuICAgIHRoaXMuc2hvdygpXG5cbiAgICB0aGlzLm9uUmVzaXplKHtcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbCwge1xuICAgICAgaGVpZ2h0U2VnbWVudHM6IDIwLFxuICAgICAgd2lkdGhTZWdtZW50czogMjBcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAvLyB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAvLyAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgIC8vICAgICBlbGVtZW50LFxuICAgIC8vICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAvLyAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgLy8gICAgIGluZGV4LFxuICAgIC8vICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAvLyAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgLy8gICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgIC8vICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gICAgdGhpcy5nYWxsZXJpZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpXG5cbiAgICB0aGlzLmdhbGxlcmllcyA9IG1hcChcbiAgICAgIHRoaXMuZ2FsbGVyaWVzRWxlbWVudCxcbiAgICAgIChlbGVtZW50LCBpbmRleCkgPT5cbiAgICAgICAgbmV3IEdhbGxlcnkoe1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgfSlcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHNob3coKSB7XG4gICAgLy8gdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5zaG93KCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIC8vIHRoaXMuZ3JvdXAuc2V0UGFyZW50KG51bGwpXG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuaGlkZSgpKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcbiAgfVxuXG4gIC8vIG9uUmVzaXplKGV2ZW50KSB7XG4gIC8vICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgLy8gICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAvLyAgIHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuICAvLyAgICAgaGVpZ2h0OiAodGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuICAvLyAgICAgd2lkdGg6ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcbiAgLy8gICB9XG5cbiAgLy8gICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY2VuZS50YXJnZXQgPSAwXG4gIC8vICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXG4gIC8vICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgLy8gfVxuXG4gIC8vIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gIC8vICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgLy8gfVxuXG4gIC8vIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gIC8vICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAvLyAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZSAvLyAqMC44IHBvdXIgcmFsZW50aXJcbiAgLy8gfVxuXG4gIC8vIG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuICAvLyBvbldoZWVsKHsgcGl4ZWxZIH0pIHt9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgY29uc29sZS5sb2coXCJJQ0lcIilcblxuICAgIHRoaXMuc3BlZWQuY3VycmVudCA9IGxlcnAodGhpcy5zcGVlZC5jdXJyZW50LCB0aGlzLnNwZWVkLnRhcmdldCwgdGhpcy5zcGVlZC5sZXJwKVxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGdzYXAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGxlcnAodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuXG4gICAgdGhpcy5zcGVlZC50YXJnZXQgPSAodGhpcy5zY3JvbGwudGFyZ2V0IC0gdGhpcy5zY3JvbGwuY3VycmVudCkgKiAwLjAwMTggLy8gb3UgMC4wMDFcblxuICAgIHRoaXMuZ2FsbGVyeS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA+IC0wLjAxID8gMCA6IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICB9cHgpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICBpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueC5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zcGVlZC5jdXJyZW50KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveS5cbiAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNmExNzk3NzU3YzNmYWQ3MTIyOFwiKSJdLCJuYW1lcyI6WyJUcmFuc2Zvcm0iLCJQbGFuZSIsIlByZWZpeCIsIk1lZGlhIiwibWFwIiwibGVycCIsImdzYXAiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwiZ3JvdXAiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsInNjcm9sbCIsInN0YXJ0IiwidmVsb2NpdHkiLCJzcGVlZCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNob3ciLCJvblJlc2l6ZSIsImdlb21ldHJ5IiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwiZ2FsbGVyaWVzRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcmllcyIsImVsZW1lbnQiLCJpbmRleCIsIkdhbGxlcnkiLCJnYWxsZXJ5IiwiaGlkZSIsImV2ZW50Iiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImJvdW5kcyIsImNvbnNvbGUiLCJsb2ciLCJ1dGlscyIsImNsYW1wIiwibGltaXQiLCJzdHlsZSIsInRyYW5zZm9ybVByZWZpeCIsImxhc3QiLCJkaXJlY3Rpb24iLCJtZWRpYXMiLCJtZWRpYSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=