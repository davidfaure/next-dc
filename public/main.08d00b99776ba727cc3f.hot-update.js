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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data */ "./data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_2__);





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
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
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
      const text = _data__WEBPACK_IMPORTED_MODULE_2__.data.gallery.find(item => item.id === Number(element.getAttribute("data-index")));
      const media = new _Media__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
    this.speed.current = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp);
    const velocity = 0.5;
    if (this.scroll.current < this.scroll.target) {
      this.direction = "right";
      this.scroll.velocity = -velocity;
    } else if (this.scroll.current > this.scroll.target) {
      this.direction = "left";
      this.scroll.velocity = velocity;
    }
    this.scroll.target -= this.scroll.velocity;
    this.scroll.target += distance * 0.4;
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
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
/******/ 	__webpack_require__.h = () => ("98326c288be2ad637af5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wOGQwMGI5OTc3NmJhNzI3Y2MzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0Q7QUFDSTtBQUNKO0FBRVk7QUFFeEIsTUFBTUssT0FBTyxDQUFDO0VBQzNCQyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUMsUUFBUTtJQUFFQyxLQUFLO0lBQUVDLEVBQUU7SUFBRUMsS0FBSztJQUFFQyxLQUFLO0lBQUVDO0VBQVMsQ0FBQyxFQUFFO0lBQ3BFLElBQUksQ0FBQ04sT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ08sZUFBZSxHQUFHUCxPQUFPLENBQUNRLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztJQUV2RSxJQUFJLENBQUNQLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBRXhCLElBQUksQ0FBQ0csS0FBSyxHQUFHLElBQUlkLDBDQUFTLENBQUMsQ0FBQztJQUU1QixJQUFJLENBQUNlLE1BQU0sR0FBRztNQUNaQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBRUQsSUFBSSxDQUFDQyxLQUFLLEdBQUc7TUFDWEwsT0FBTyxFQUFFLENBQUM7TUFDVkMsTUFBTSxFQUFFLENBQUM7TUFDVEcsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQ0UsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDUixLQUFLLENBQUNTLFNBQVMsQ0FBQyxJQUFJLENBQUNkLEtB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O1VDOUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGFcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMsIHJlbmRlcmVyIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50c1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlclwiKVxuXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIHZlbG9jaXR5OiAwLjUsXG4gICAgICBsZXJwOiAwLjA0XG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZU1lZGlhcygpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhcygpIHtcbiAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeV9fbWVkaWFcIilcblxuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dCA9IGRhdGEuZ2FsbGVyeS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSkpXG5cbiAgICAgIGNvbnN0IG1lZGlhID0gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGluZGV4LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgICAgICB0aXRsZTogdGV4dCAmJiB0ZXh0LnRpdGxlLFxuICAgICAgICBzdWJUaXRsZTogdGV4dCAmJiB0ZXh0LnN1YlRpdGxlLFxuICAgICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlclxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1lZGlhXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRzV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC0gZGlzdGFuY2VcbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSAoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwudGFyZ2V0KSAqIDAuMTVcbiAgICBjb25zdCB5ID0gc2Nyb2xsLmN1cnJlbnQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gICAgdGhpcy5zcGVlZC5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc3BlZWQuY3VycmVudCxcbiAgICAgIHRoaXMuc3BlZWQudGFyZ2V0LFxuICAgICAgdGhpcy5zcGVlZC5sZXJwXG4gICAgKVxuXG4gICAgY29uc3QgdmVsb2NpdHkgPSAwLjVcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgdGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtdmVsb2NpdHlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gdmVsb2NpdHlcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGlzdGFuY2UgKiAwLjRcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxlcnBcbiAgICApXG5cbiAgICB0aGlzLnNwZWVkLnRhcmdldCA9ICh0aGlzLnNjcm9sbC50YXJnZXQgLSB0aGlzLnNjcm9sbC5jdXJyZW50KSAqIDAuMDAxMlxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuICAgICAgICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNwZWVkLmN1cnJlbnQpXG4gICAgfSlcblxuICAgIHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IHkgKiB0aGlzLnNpemVzLmhlaWdodFxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk4MzI2YzI4OGJlMmFkNjM3YWY1XCIpIl0sIm5hbWVzIjpbIm1hcCIsImdzYXAiLCJUcmFuc2Zvcm0iLCJNZWRpYSIsImRhdGEiLCJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiZWxlbWVudHNXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwic3BlZWQiLCJjcmVhdGVNZWRpYXMiLCJzZXRQYXJlbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJ0ZXh0IiwiZ2FsbGVyeSIsImZpbmQiLCJpdGVtIiwiaWQiLCJOdW1iZXIiLCJnZXRBdHRyaWJ1dGUiLCJtZWRpYSIsInRpdGxlIiwic3ViVGl0bGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJpbm5lckhlaWdodCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiaGVpZ2h0IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==