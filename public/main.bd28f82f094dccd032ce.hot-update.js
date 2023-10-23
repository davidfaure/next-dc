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
    this.gallery = document.querySelector(".home__gallery");
    this.geometry = geometry;
    this.index = index;
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.renderer = renderer;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_1___default()("transform");
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
  show() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, media => media.show());
  }
  hide() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, media => media.hide());
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
    if (!this.bounds) return;
    const distance = (scroll.current - scroll.target) * 0.15;
    this.speed.current = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp);
    const y = scroll.current / window.innerHeight;
    const velocity = 0.5;
    if (this.scroll.current < this.scroll.target) {
      this.direction = "right";
      this.scroll.velocity = -velocity; // for auto scrolling
    } else if (this.scroll.current > this.scroll.target) {
      this.direction = "left";
      this.scroll.velocity = velocity; // for auto scrolling
    }

    // Automatic scroll here
    //! distance pour que ça rotate plus vite quand l'user scroll
    this.scroll.target -= this.scroll.velocity;
    this.scroll.target += distance * 0.4;
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
    this.speed.target = (this.scroll.target - this.scroll.current) * 0.0012;
    this.gallery.style[this.transformPrefix] = `translateX(${this.scroll.current > -0.01 ? 0 : this.scroll.current}px)`; // prettier-ignore

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, (media, index) => {
      // pixel perfect pour la disparition des images sur le carousel
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
      // media.mesh.position.y =
      //   Math.cos((media.mesh.position.x / this.width) * Math.PI) * 75 - 75;
    });

    this.group.position.y = y * this.sizes.height; // pour pouvoir scroll sur l'entiereté de la page
    // this.getCenteredImageCityName()
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
/******/ 	__webpack_require__.h = () => ("6321d8a9252aa1740287")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZDI4ZjgyZjA5NGRjY2QwMzJjZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDUDtBQUNJO0FBQ0o7QUFDQTtBQUVZO0FBRXhCLE1BQU1PLE9BQU8sQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLFFBQVE7SUFBRUMsS0FBSztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUMsS0FBSztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNwRSxJQUFJLENBQUNOLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNPLGVBQWUsR0FBR1AsT0FBTyxDQUFDUSxhQUFhLENBQUMseUJBQXlCLENBQUM7SUFFdkUsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0YsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBRXZELElBQUksQ0FBQ1AsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFFeEIsSUFBSSxDQUFDSyxlQUFlLEdBQUdoQiw2Q0FBTSxDQUFDLFdBQVcsQ0FBQztJQUUxQyxJQUFJLENBQUNpQixLQUFLLEdBQUcsSUFBSWxCLDBDQUFTLENBQUMsQ0FBQztJQUU1QixJQUFJLENBQUNtQixNQUFNLEdBQUc7TUFDWkMsT0FBTyxFQUFFLENBQUM7TUFDVkMsTUFBTSxFQUFFLENBQUM7TUFDVEMsS0FBSyxFQUFFLENBQUM7TUFDUkMsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQ0MsS0FBSyxHQUFHO01BQ1hMLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLE1B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QUs7UUFDM0I7TUFDRixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNjLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDckMsTUFBTVYsQ0FBQyxHQUFHYixLQUFLLENBQUMwQixJQUFJLENBQUNFLFFBQVEsQ0FBQ2YsQ0FBQyxHQUFHWSxNQUFNO1FBRXhDLElBQUlaLENBQUMsR0FBRyxJQUFJLENBQUN2QyxLQUFLLENBQUNtQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1VBQzVCVCxLQUFLLENBQUM2QixLQUFLLElBQUksSUFBSSxDQUFDcEIsS0FBSztRQUMzQjtNQUNGO01BRUFULEtBQUssQ0FBQ21CLE1BQU0sQ0FBQyxJQUFJLENBQUNyQyxNQUFNLENBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUNLLEtBQUssQ0FBQ0wsT0FBTyxDQUFDO01BQ3JEO01BQ0E7SUFDRixDQUFDLENBQUM7O0lBRUYsSUFBSSxDQUFDRixLQUFLLENBQUMrQyxRQUFRLENBQUNkLENBQUMsR0FBR0EsQ0FBQyxHQUFHLElBQUksQ0FBQ3hDLEtBQUssQ0FBQ3dELE1BQU0sRUFBQztJQUM5QztFQUNGOztFQUVBQyxPQUFPQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUMxRCxLQUFLLENBQUMyRCxXQUFXLENBQUMsSUFBSSxDQUFDbkQsS0FBSyxDQUFDO0VBQ3BDO0FBQ0Y7Ozs7Ozs7O1VDcEtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCwgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudHNXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcblxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICB2ZWxvY2l0eTogMC41LFxuICAgICAgbGVycDogMC4wNFxuICAgIH1cblxuICAgIHRoaXMuc3BlZWQgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhXCIpXG5cbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBkYXRhLmdhbGxlcnkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IE51bWJlcihlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpKVxuXG4gICAgICBjb25zdCBtZWRpYSA9IG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgICAgdGl0bGU6IHRleHQgJiYgdGV4dC50aXRsZSxcbiAgICAgICAgc3ViVGl0bGU6IHRleHQgJiYgdGV4dC5zdWJUaXRsZSxcbiAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXJcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtZWRpYVxuICAgIH0pXG4gIH1cblxuICBzaG93KCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcbiAgfVxuXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRzV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC0gZGlzdGFuY2VcbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgY29uc3QgZGlzdGFuY2UgPSAoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwudGFyZ2V0KSAqIDAuMTVcblxuICAgIHRoaXMuc3BlZWQuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNwZWVkLmN1cnJlbnQsXG4gICAgICB0aGlzLnNwZWVkLnRhcmdldCxcbiAgICAgIHRoaXMuc3BlZWQubGVycFxuICAgIClcblxuICAgIGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIGNvbnN0IHZlbG9jaXR5ID0gMC41XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gLXZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgdGhpcy5zY3JvbGwudmVsb2NpdHkgPSB2ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9XG5cbiAgICAvLyBBdXRvbWF0aWMgc2Nyb2xsIGhlcmVcbiAgICAvLyEgZGlzdGFuY2UgcG91ciBxdWUgw6dhIHJvdGF0ZSBwbHVzIHZpdGUgcXVhbmQgbCd1c2VyIHNjcm9sbFxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCAtPSB0aGlzLnNjcm9sbC52ZWxvY2l0eVxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkaXN0YW5jZSAqIDAuNFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxuICAgICAgdGhpcy5zY3JvbGwubGVycFxuICAgIClcblxuICAgIHRoaXMuc3BlZWQudGFyZ2V0ID0gKHRoaXMuc2Nyb2xsLnRhcmdldCAtIHRoaXMuc2Nyb2xsLmN1cnJlbnQpICogMC4wMDEyXG5cbiAgICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA+IC0wLjAxID8gMCA6IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICAgIH1weClgOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcGl4ZWwgcGVyZmVjdCBwb3VyIGxhIGRpc3Bhcml0aW9uIGRlcyBpbWFnZXMgc3VyIGxlIGNhcm91c2VsXG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuICAgICAgICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNwZWVkLmN1cnJlbnQpXG4gICAgICAvLyBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgLy8gICBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy53aWR0aCkgKiBNYXRoLlBJKSAqIDc1IC0gNzU7XG4gICAgfSlcblxuICAgIHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IHkgKiB0aGlzLnNpemVzLmhlaWdodCAvLyBwb3VyIHBvdXZvaXIgc2Nyb2xsIHN1ciBsJ2VudGllcmV0w6kgZGUgbGEgcGFnZVxuICAgIC8vIHRoaXMuZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKClcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MzIxZDhhOTI1MmFhMTc0MDI4N1wiKSJdLCJuYW1lcyI6WyJlYWNoIiwibWFwIiwiZ3NhcCIsIlRyYW5zZm9ybSIsIlByZWZpeCIsIk1lZGlhIiwiZGF0YSIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJlbGVtZW50c1dyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsImRvY3VtZW50IiwidHJhbnNmb3JtUHJlZml4IiwiZ3JvdXAiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0Iiwic3RhcnQiLCJ2ZWxvY2l0eSIsImxlcnAiLCJzcGVlZCIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsInRleHQiLCJmaW5kIiwiaXRlbSIsImlkIiwiTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwibWVkaWEiLCJ0aXRsZSIsInN1YlRpdGxlIiwic2hvdyIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJ1dGlscyIsImludGVycG9sYXRlIiwiaW5uZXJIZWlnaHQiLCJkaXJlY3Rpb24iLCJzdHlsZSIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJoZWlnaHQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9