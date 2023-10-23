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
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/math */ "./app/utils/math.js");





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
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()("transform");
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_4__.Transform();
    this.gallery = document.querySelector(".home__gallery");
    this.galleryElement = document.querySelector(".home__gallery__wrapper");
    this.mediasElements = document.querySelectorAll(".home__gallery__media__image");
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
    this.medias = (0,lodash_map__WEBPACK_IMPORTED_MODULE_2__.map)(this.mediasElements, (element, index) => {
      return new _Media__WEBPACK_IMPORTED_MODULE_1__["default"]({
        element,
        geometry: this.geometry,
        gl: this.gl,
        index,
        scene: this.group,
        sizes: this.sizes,
        renderer: this.renderer,
        camera: this.camera
      });
    });
  }

  /**
   * Animations.
   */
  show() {
    this.group.setParent(this.scene);
  }
  hide() {
    this.group.setParent(null);
  }
  onResize(event) {
    this.bounds = this.galleryElement.getBoundingClientRect();
    this.sizes = event.sizes;
    this.gallerySizes = {
      height: this.bounds.height / window.innerHeight * this.sizes.height,
      width: this.bounds.width / window.innerWidth * this.sizes.width
    };
    this.scroll.last = this.scene.target = 0;
    (0,lodash_map__WEBPACK_IMPORTED_MODULE_2__.map)(this.medias, media => media.onResize(event, this.scroll));
    this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth;
  }
  onTouchDown({
    x,
    y
  }) {
    this.scroll.last = this.scroll.current;
  }
  onTouchMove({
    x,
    y
  }) {
    const distance = x.start - x.end;
    this.scroll.target = this.scroll.last - distance; // *0.8 pour ralentir
  }

  onTouchUp({
    x,
    y
  }) {}
  onWheel({
    pixelY
  }) {}
  update() {
    if (!this.bounds) return;
    this.speed.current = (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.lerp)(this.speed.current, this.speed.target, this.speed.lerp);
    this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target);
    this.scroll.current = (0,_utils_math__WEBPACK_IMPORTED_MODULE_3__.lerp)(this.scroll.current, this.scroll.target, this.scroll.lerp);
    this.speed.target = (this.scroll.target - this.scroll.current) * 0.0018; // ou 0.001

    this.gallery.style[this.transformPrefix] = `translateX(${this.scroll.current > -0.01 ? 0 : this.scroll.current}px)`; // prettier-ignore

    if (this.scroll.last < this.scroll.current) {
      this.x.direction = "right";
    } else if (this.scroll.last > this.scroll.current) {
      this.x.direction = "left";
    }
    this.scroll.last = this.scroll.current;
    (0,lodash_map__WEBPACK_IMPORTED_MODULE_2__.map)(this.medias, media => {
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
/******/ 	__webpack_require__.h = () => ("2c7496842c2f985c7e7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YmIwNzM4YzY2N2I0Mjc4ZDc0MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNYO0FBQ0E7QUFDSztBQUNVO0FBRTFDLGlFQUFlLE1BQU07RUFDbkJNLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFPLENBQUMsRUFBRTtJQUNsRCxJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsZUFBZSxHQUFHViw2Q0FBTSxDQUFDLFdBQVcsQ0FBQztJQUUxQyxJQUFJLENBQUNXLEtBQUssR0FBRyxJQUFJYiwwQ0FBUyxDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDYyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0MsY0FBYyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztJQUN2RSxJQUFJLENBQUNFLGNBQWMsR0FBR0gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQztJQUUvRSxJQUFJLENBQUNDLENBQUMsR0FBRztNQUNQQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUakIsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQ2tCLE1BQU0sR0FBRztNQUNaRixPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNURSxLQUFLLEVBQUUsQ0FBQztNQUNSbkIsSUFBSSxFQUFFLEdBQUc7TUFDVG9CLFFBQVEsRUFBRTtJQUNaLENB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SG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJsb2Rhc2gvbWFwXCJcbmltcG9ydCB7IGxlcnAgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbWF0aFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciwgY2FtZXJhIH0pIHtcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcbiAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2VcIilcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuICAgIHRoaXMuc2hvdygpXG5cbiAgICB0aGlzLm9uUmVzaXplKHtcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbCwge1xuICAgICAgaGVpZ2h0U2VnbWVudHM6IDIwLFxuICAgICAgd2lkdGhTZWdtZW50czogMjBcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHNob3coKSB7XG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQobnVsbClcbiAgfVxuXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgIHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuICAgICAgaGVpZ2h0OiAodGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY2VuZS50YXJnZXQgPSAwXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXG4gICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZSAvLyAqMC44IHBvdXIgcmFsZW50aXJcbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuICBvbldoZWVsKHsgcGl4ZWxZIH0pIHt9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy5zcGVlZC5jdXJyZW50ID0gbGVycCh0aGlzLnNwZWVkLmN1cnJlbnQsIHRoaXMuc3BlZWQudGFyZ2V0LCB0aGlzLnNwZWVkLmxlcnApXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycCh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIHRoaXMuc2Nyb2xsLmxlcnApXG5cbiAgICB0aGlzLnNwZWVkLnRhcmdldCA9ICh0aGlzLnNjcm9sbC50YXJnZXQgLSB0aGlzLnNjcm9sbC5jdXJyZW50KSAqIDAuMDAxOCAvLyBvdSAwLjAwMVxuXG4gICAgdGhpcy5nYWxsZXJ5LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID4gLTAuMDEgPyAwIDogdGhpcy5zY3JvbGwuY3VycmVudFxuICAgIH1weClgOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgIGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgdGhpcy54LmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMueC5kaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNwZWVkLmN1cnJlbnQpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95LlxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJjNzQ5Njg0MmMyZjk4NWM3ZTdiXCIpIl0sIm5hbWVzIjpbIlRyYW5zZm9ybSIsIlBsYW5lIiwiUHJlZml4IiwiTWVkaWEiLCJtYXAiLCJsZXJwIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJyZW5kZXJlciIsImNhbWVyYSIsInRyYW5zZm9ybVByZWZpeCIsImdyb3VwIiwiZ2FsbGVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnlFbGVtZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzY3JvbGwiLCJzdGFydCIsInZlbG9jaXR5Iiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzaG93Iiwib25SZXNpemUiLCJnZW9tZXRyeSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsIm1lZGlhcyIsImVsZW1lbnQiLCJpbmRleCIsInNldFBhcmVudCIsImhpZGUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibGFzdCIsIm1lZGlhIiwibGltaXQiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwidXBkYXRlIiwiR1NBUCIsInV0aWxzIiwiY2xhbXAiLCJzdHlsZSIsImRpcmVjdGlvbiIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=