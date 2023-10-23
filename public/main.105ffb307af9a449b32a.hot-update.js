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
    this.galleriesElement = document.querySelectorAll(".about__gallery");
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
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.medias, media => media.onResize(event, this.scroll));
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
/******/ 	__webpack_require__.h = () => ("8b72884f2d61ed237b66")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsZUFBZSxDQUFDLEdBQUksY0FDMUMsSUFBSSxDQUFDakQsTUFBTSxDQUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsTUFBTSxDQUFDRixPQUMvQyxLQUFJLENBQUMsQ0FBQzs7SUFFUCxJQUFJLElBQUksQ0FBQ0UsTUFBTSxDQUFDNkIsSUFBSSxHQUFHLElBQUksQ0FBQzdCLE1BQU0sQ0FBQ0YsT0FBTyxFQUFFO01BQzFDLElBQUksQ0FBQ0QsQ0FBQyxDQUFDcUQsU0FBUyxHQUFHLE9BQU87SUFDNUIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDbEQsTUFBTSxDQUFDNkIsSUFBSSxHQUFHLElBQUksQ0FBQzdCLE1BQU0sQ0FBQ0YsT0FBTyxFQUFFO01BQ2pELElBQUksQ0FBQ0QsQ0FBQyxDQUFDcUQsU0FBUyxHQUFHLE1BQU07SUFDM0I7SUFFQSxJQUFJLENBQUNsRCxNQUFNLENBQUM2QixJQUFJLEdBQUcsSUFBSSxDQUFDN0IsTUFBTSxDQUFDRixPQUFPO0lBRXRDWiwyQ0FBRyxDQUFDLElBQUksQ0FBQzRDLE1BQU0sRUFBRUMsS0FBSyxJQUFJO01BQ3hCQSxLQUFLLENBQUNXLE1BQU0sQ0FBQyxJQUFJLENBQUMxQyxNQUFNLENBQUNGLE9BQU8sRUFBRSxJQUFJLENBQUNLLEtBQUssQ0FBQ0wsT0FBTyxDQUFDO0lBQ3ZELENBQUMsQ0FBQztFQUNKOztFQUVBO0FBQ0Y7QUFDQTtFQUNFcUQsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDNUQsS0FBSyxDQUFDNkQsV0FBVyxDQUFDLElBQUksQ0FBQ3pELEtBQUssQ0FBQztFQUNwQztBQUNGOzs7Ozs7OztVQ25LQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRoXCJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cbiAgICAvLyB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuICAgIC8vIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuICAgIC8vIHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcbiAgICAvLyB0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2VcIilcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuICAgIHRoaXMuc2hvdygpXG5cbiAgICB0aGlzLm9uUmVzaXplKHtcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbCwge1xuICAgICAgaGVpZ2h0U2VnbWVudHM6IDIwLFxuICAgICAgd2lkdGhTZWdtZW50czogMjBcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2FsbGVyeSgpIHtcbiAgICAvLyB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAvLyAgIHJldHVybiBuZXcgTWVkaWEoe1xuICAgIC8vICAgICBlbGVtZW50LFxuICAgIC8vICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAvLyAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgLy8gICAgIGluZGV4LFxuICAgIC8vICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAvLyAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgLy8gICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgIC8vICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gICAgdGhpcy5nYWxsZXJpZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hYm91dF9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nYWxsZXJpZXMgPSBtYXAoXG4gICAgICB0aGlzLmdhbGxlcmllc0VsZW1lbnQsXG4gICAgICAoZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICAgIG5ldyBHYWxsZXJ5KHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBzaG93KCkge1xuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KG51bGwpXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgICB0aGlzLmdhbGxlcnlTaXplcyA9IHtcbiAgICAgIGhlaWdodDogKHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiB0aGlzLnNpemVzLmhlaWdodCxcbiAgICAgIHdpZHRoOiAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2NlbmUudGFyZ2V0ID0gMFxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2UgLy8gKjAuOCBwb3VyIHJhbGVudGlyXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgb25XaGVlbCh7IHBpeGVsWSB9KSB7fVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAgIGNvbnNvbGUubG9nKFwiSUNJXCIpXG5cbiAgICB0aGlzLnNwZWVkLmN1cnJlbnQgPSBsZXJwKHRoaXMuc3BlZWQuY3VycmVudCwgdGhpcy5zcGVlZC50YXJnZXQsIHRoaXMuc3BlZWQubGVycClcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBnc2FwLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gKHRoaXMuc2Nyb2xsLnRhcmdldCAtIHRoaXMuc2Nyb2xsLmN1cnJlbnQpICogMC4wMDE4IC8vIG91IDAuMDAxXG5cbiAgICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgfXB4KWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgdGhpcy54LmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc3BlZWQuY3VycmVudClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kuXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGI3Mjg4NGYyZDYxZWQyMzdiNjZcIikiXSwibmFtZXMiOlsiVHJhbnNmb3JtIiwiUGxhbmUiLCJQcmVmaXgiLCJNZWRpYSIsIm1hcCIsImxlcnAiLCJnc2FwIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJyZW5kZXJlciIsImNhbWVyYSIsImdyb3VwIiwic2V0UGFyZW50IiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzY3JvbGwiLCJzdGFydCIsInZlbG9jaXR5Iiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzaG93Iiwib25SZXNpemUiLCJnZW9tZXRyeSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsImdhbGxlcmllc0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYWxsZXJpZXMiLCJlbGVtZW50IiwiaW5kZXgiLCJHYWxsZXJ5IiwiaGlkZSIsImV2ZW50IiwiYm91bmRzIiwiZ2FsbGVyeUVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImxhc3QiLCJtZWRpYXMiLCJtZWRpYSIsImxpbWl0IiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsInVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1dGlscyIsImNsYW1wIiwiZ2FsbGVyeSIsInN0eWxlIiwidHJhbnNmb3JtUHJlZml4IiwiZGlyZWN0aW9uIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==