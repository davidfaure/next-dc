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
    this.medias = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.mediasElements, (element, index) => {
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
/******/ 	__webpack_require__.h = () => ("66181315e0386b883bf3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYzc0OTY4NDJjMmY5ODVjN2U3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNYO0FBQ0E7QUFDQztBQUNjO0FBRTFDLGlFQUFlLE1BQU07RUFDbkJNLFdBQVdBLENBQUM7SUFBRUMsRUFBRTtJQUFFQyxLQUFLO0lBQUVDLEtBQUs7SUFBRUMsUUFBUTtJQUFFQztFQUFPLENBQUMsRUFBRTtJQUNsRCxJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBRXBCLElBQUksQ0FBQ0MsZUFBZSxHQUFHViw2Q0FBTSxDQUFDLFdBQVcsQ0FBQztJQUUxQyxJQUFJLENBQUNXLEtBQUssR0FBRyxJQUFJYiwwQ0FBUyxDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDYyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ3ZELElBQUksQ0FBQ0MsY0FBYyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztJQUN2RSxJQUFJLENBQUNFLGNBQWMsR0FBR0gsUUFBUSxDQUFDSSxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQztJQUUvRSxJQUFJLENBQUNDLENBQUMsR0FBRztNQUNQQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUakIsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQ2tCLE1BQU0sR0FBRztNQUNaRixPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNURSxLQUFLLEVBQUUsQ0FBQztNQUNSbkIsSUFBSSxFQUFFLEdBQUc7TUFDVG9CLFFBQVEsRUFBRTtJQUNaLENB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SG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyLCBjYW1lcmEgfSkge1xuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgdGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlclwiKVxuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZVwiKVxuXG4gICAgdGhpcy54ID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgbGVycDogMC4xLFxuICAgICAgdmVsb2NpdHk6IDFcbiAgICB9XG5cbiAgICB0aGlzLnNwZWVkID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuICAgIHRoaXMuY3JlYXRlR2FsbGVyeSgpXG4gICAgdGhpcy5zaG93KClcblxuICAgIHRoaXMub25SZXNpemUoe1xuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG4gICAgICBoZWlnaHRTZWdtZW50czogMjAsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAyMFxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmFcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgc2hvdygpIHtcbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudChudWxsKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gICAgdGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG4gICAgICBoZWlnaHQ6ICh0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG4gICAgICB3aWR0aDogKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjZW5lLnRhcmdldCA9IDBcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cbiAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlIC8vICowLjggcG91ciByYWxlbnRpclxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIG9uV2hlZWwoeyBwaXhlbFkgfSkge31cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cbiAgICB0aGlzLnNwZWVkLmN1cnJlbnQgPSBsZXJwKHRoaXMuc3BlZWQuY3VycmVudCwgdGhpcy5zcGVlZC50YXJnZXQsIHRoaXMuc3BlZWQubGVycClcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBsZXJwKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgdGhpcy5zY3JvbGwubGVycClcblxuICAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gKHRoaXMuc2Nyb2xsLnRhcmdldCAtIHRoaXMuc2Nyb2xsLmN1cnJlbnQpICogMC4wMDE4IC8vIG91IDAuMDAxXG5cbiAgICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgfXB4KWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuICAgICAgdGhpcy54LmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc3BlZWQuY3VycmVudClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kuXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjYxODEzMTVlMDM4NmI4ODNiZjNcIikiXSwibmFtZXMiOlsiVHJhbnNmb3JtIiwiUGxhbmUiLCJQcmVmaXgiLCJNZWRpYSIsIm1hcCIsImxlcnAiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwidHJhbnNmb3JtUHJlZml4IiwiZ3JvdXAiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeUVsZW1lbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsInNjcm9sbCIsInN0YXJ0IiwidmVsb2NpdHkiLCJzcGVlZCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNob3ciLCJvblJlc2l6ZSIsImdlb21ldHJ5IiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwibWVkaWFzIiwiZWxlbWVudCIsImluZGV4Iiwic2V0UGFyZW50IiwiaGlkZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2FsbGVyeVNpemVzIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJsYXN0IiwibWVkaWEiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJ1cGRhdGUiLCJHU0FQIiwidXRpbHMiLCJjbGFtcCIsInN0eWxlIiwiZGlyZWN0aW9uIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==