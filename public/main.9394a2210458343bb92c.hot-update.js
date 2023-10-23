"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Home/Gallery.js":
/*!***********************************************!*\
  !*** ./app/components/Canvas/Home/Gallery.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gallery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_3__);






class Gallery {
  constructor({
    element,
    geometry,
    index,
    gl,
    scene,
    sizes,
    renderer
  }) {
    this.element = element;
    this.elementsWrapper = element.querySelector(".home__gallery__wrapper");
    this.geometry = geometry;
    this.index = index;
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.renderer = renderer;
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_4__.Transform();
    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      velocity: 0.5,
      lerp: 0.04
    };
    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
    };
    this.createMedias();
    this.group.setParent(this.scene);
  }
  createMedias() {
    this.mediasElements = this.element.querySelectorAll(".home__gallery__media");
    this.medias = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.mediasElements, (element, index) => {
      const text = _data__WEBPACK_IMPORTED_MODULE_3__.data.gallery.find(item => item.id === Number(element.getAttribute("data-index")));
      const media = new _Media__WEBPACK_IMPORTED_MODULE_2__["default"]({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes,
        title: text && text.title,
        subTitle: text && text.subTitle,
        renderer: this.renderer
      });
      return media;
    });
  }
  onResize(event) {
    this.bounds = this.elementsWrapper.getBoundingClientRect();
    this.sizes = event.sizes;
    this.width = this.bounds.width / window.innerWidth * this.sizes.width;
    this.scroll.current = this.scroll.target = 0;
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, media => media.onResize(event, this.scroll.current));
  }
  onTouchDown({
    x,
    y
  }) {
    this.scroll.start = this.scroll.current;
  }
  onTouchMove({
    x,
    y
  }) {
    const distance = x.start - x.end;
    this.scroll.target = this.scroll.current - distance;
  }
  onTouchUp({
    x,
    y
  }) {}
  update(scroll) {
    const distance = (scroll.current - scroll.target) * 0.15;
    const y = scroll.current / window.innerHeight;
    if (!this.bounds) return;
    this.speed.current = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp);
    const velocity = 0.5;
    if (this.scroll.current < this.scroll.target) {
      this.direction = "right";
      this.scroll.velocity = -velocity;
    } else if (this.scroll.current > this.scroll.target) {
      console.log("left");
      this.direction = "left";
      this.scroll.velocity = velocity;
    }
    this.scroll.target -= this.scroll.velocity;
    this.scroll.target += distance * 0.4;
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
    this.speed.target = (this.scroll.target - this.scroll.current) * 0.0012;
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, media => {
      const scaleX = media.mesh.scale.x / 2;
      if (this.direction === "left") {
        const x = media.mesh.position.x + scaleX;
        if (x < -this.sizes.width / 2) {
          media.extra += this.width;
        }
      } else if (this.direction === "right") {
        const x = media.mesh.position.x - scaleX;
        if (x > this.sizes.width / 2) {
          media.extra -= this.width;
        }
      }
      media.update(this.scroll.current, this.speed.current);
    });
    this.group.position.y = y * this.sizes.height;
  }
  destroy() {
    this.scene.removeChild(this.group);
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a4e7c2de77c3e49e4a0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLENBQUMsSUFBSSxDQUFDbkQsS0FBSyxDQUFDO0VBQ3BDO0FBQ0Y7Ozs7Ozs7O1VDaEpBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudHNXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICB2ZWxvY2l0eTogMC41LFxuICAgICAgbGVycDogMC4wNFxuICAgIH1cblxuICAgIHRoaXMuc3BlZWQgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhXCIpXG5cbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBkYXRhLmdhbGxlcnkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpKVxuXG4gICAgICBjb25zdCBtZWRpYSA9IG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgdGl0bGU6IHRleHQgJiYgdGV4dC50aXRsZSxcbiAgICAgICAgc3ViVGl0bGU6IHRleHQgJiYgdGV4dC5zdWJUaXRsZSxcbiAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXJcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtZWRpYVxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50c1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgIHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuY3VycmVudCAtIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gKHNjcm9sbC5jdXJyZW50IC0gc2Nyb2xsLnRhcmdldCkgKiAwLjE1XG4gICAgY29uc3QgeSA9IHNjcm9sbC5jdXJyZW50IC8gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAgIHRoaXMuc3BlZWQuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNwZWVkLmN1cnJlbnQsXG4gICAgICB0aGlzLnNwZWVkLnRhcmdldCxcbiAgICAgIHRoaXMuc3BlZWQubGVycFxuICAgIClcblxuICAgIGNvbnN0IHZlbG9jaXR5ID0gMC41XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gLXZlbG9jaXR5XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxlZnRcIilcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gdmVsb2NpdHlcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGlzdGFuY2UgKiAwLjRcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxlcnBcbiAgICApXG5cbiAgICB0aGlzLnNwZWVkLnRhcmdldCA9ICh0aGlzLnNjcm9sbC50YXJnZXQgLSB0aGlzLnNjcm9sbC5jdXJyZW50KSAqIDAuMDAxMlxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuICAgICAgICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNwZWVkLmN1cnJlbnQpXG4gICAgfSlcblxuICAgIHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IHkgKiB0aGlzLnNpemVzLmhlaWdodFxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJhNGU3YzJkZTc3YzNlNDllNGEwXCIpIl0sIm5hbWVzIjpbIm1hcCIsImdzYXAiLCJUcmFuc2Zvcm0iLCJQcmVmaXgiLCJNZWRpYSIsImRhdGEiLCJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiZWxlbWVudHNXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwic3BlZWQiLCJjcmVhdGVNZWRpYXMiLCJzZXRQYXJlbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJ0ZXh0IiwiZ2FsbGVyeSIsImZpbmQiLCJpdGVtIiwiaWQiLCJOdW1iZXIiLCJnZXRBdHRyaWJ1dGUiLCJtZWRpYSIsInRpdGxlIiwic3ViVGl0bGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJpbm5lckhlaWdodCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJkaXJlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=