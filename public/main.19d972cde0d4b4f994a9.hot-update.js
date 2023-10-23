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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");




class Gallery {
  constructor({
    element,
    geometry,
    index,
    gl,
    scene,
    sizes
  }) {
    this.element = element;
    this.elementsWrapper = element.querySelector(".home__gallery__wrapper");
    this.geometry = geometry;
    this.index = index;
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.centeredMedia = null;
    this.isAnimating = false;
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      velocity: 0.7,
      lerp: 0.04
    };
    this.createMedias();
    this.group.setParent(this.scene);
  }
  createMedias() {
    this.mediasElements = this.element.querySelectorAll(".home__gallery__media");
    this.medias = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.mediasElements, (element, index) => new _Media__WEBPACK_IMPORTED_MODULE_1__["default"]({
      element,
      geometry: this.geometry,
      index,
      gl: this.gl,
      scene: this.group,
      sizes: this.sizes
    }));
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

  // getCenteredImageCityName() {
  //   let centeredMedia = null
  //   // Loop through each WebGL media (planes)
  //   each(this.medias, media => {
  //     const planePosition = media.mesh.position.x

  //     const minBreakPoint = Detection.isPhone() ? 0.04 : 0.4
  //     const maxBreakPoint = Detection.isPhone() ? 0.06 : 0.6

  //     if (Detection.isTablet()) {
  //       if (Math.abs(planePosition) > 0.1 < 0.3) {
  //         centeredMedia = media
  //         return false // Break out of the lodash each loop
  //       }
  //     } else if (Math.abs(planePosition) > minBreakPoint < maxBreakPoint) {
  //       centeredMedia = media
  //       return false // Break out of the lodash each loop
  //     }
  //   })

  //   if (centeredMedia) {
  //     map(this.cityElement, (element, index) => {
  //       if (index === centeredMedia.index) {
  //         element.classList.add(this.cityElementActive)
  //       }
  //     })
  //   } else {
  //     map(this.cityElement, element => {
  //       element.classList.remove(this.cityElementActive)
  //     })
  //   }
  // }

  update(scroll) {
    const distance = (scroll.current - scroll.target) * 0.15;
    const y = scroll.current / window.innerHeight;
    if (!this.bounds) return;
    const velocity = 0.7;
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
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, (media, index) => {
      // pixel perfect pour la disparition des images sur le carousel
      const scaleX = media.mesh.scale.x / 2 + 0.25;
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
      media.update(this.scroll.current);
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
/******/ 	__webpack_require__.h = () => ("689e7a1ed6f2daaba3a0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xOWQ5NzJjZGUwZDRiNGY5OTRhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNQO0FBQ0k7QUFDSjtBQUVaLE1BQU1LLE9BQU8sQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLFFBQVE7SUFBRUMsS0FBSztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUM7RUFBTSxDQUFDLEVBQUU7SUFDMUQsSUFBSSxDQUFDTCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDTSxlQUFlLEdBQUdOLE9BQU8sQ0FBQ08sYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBQ3ZFLElBQUksQ0FBQ04sUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDRyxhQUFhLEdBQUcsSUFBSTtJQUN6QixJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0lBRXhCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlkLDBDQUFTLENBQUMsQ0FBQztJQUU1QixJQUFJLENBQUNlLE1BQU0sR0FBRztNQUNaQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNQLEtBQUssQ0FBQ1EsU0FBUyxDQUFDLElBQUksQ0FBQ2QsS0FBSyxDQUFDO0VBQ2xDO0VBRUFhLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0UsY0FBYyxHQUFHLElBQUksQ0FBQ25CLE9BQU8sQ0FB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QUFLLENBQUN3QixLQUFLLEdBQUcsQ0FBQyxFQUFFO1VBQzdCTixLQUFLLENBQUN5QixLQUFLLElBQUksSUFBSSxDQUFDbkIsS0FBSztRQUMzQjtNQUNGLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1ksU0FBUyxLQUFLLE9BQU8sRUFBRTtRQUNyQyxNQUFNUixDQUFDLEdBQUdWLEtBQUssQ0FBQ3NCLElBQUksQ0FBQ0UsUUFBUSxDQUFDZCxDQUFDLEdBQUdXLE1BQU07UUFFeEMsSUFBSVgsQ0FBQyxHQUFHLElBQUksQ0FBQzVCLEtBQUssQ0FBQ3dCLEtBQUssR0FBRyxDQUFDLEVBQUU7VUFDNUJOLEtBQUssQ0FBQ3lCLEtBQUssSUFBSSxJQUFJLENBQUNuQixLQUFLO1FBQzNCO01BQ0Y7TUFFQU4sS0FBSyxDQUFDZ0IsTUFBTSxDQUFDLElBQUksQ0FBQzVCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO01BQ2pDO01BQ0E7SUFDRixDQUFDLENBQUM7O0lBRUYsSUFBSSxDQUFDRixLQUFLLENBQUNxQyxRQUFRLENBQUNiLENBQUMsR0FBR0EsQ0FBQyxHQUFHLElBQUksQ0FBQzdCLEtBQUssQ0FBQzRDLE1BQU0sRUFBQztJQUM5QztFQUNGOztFQUVBQyxPQUFPQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUM5QyxLQUFLLENBQUMrQyxXQUFXLENBQUMsSUFBSSxDQUFDekMsS0FBSyxDQUFDO0VBQ3BDO0FBQ0Y7Ozs7Ozs7O1VDcEtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCwgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnRzV3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5X193cmFwcGVyXCIpXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5jZW50ZXJlZE1lZGlhID0gbnVsbFxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICB2ZWxvY2l0eTogMC43LFxuICAgICAgbGVycDogMC4wNFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZU1lZGlhcygpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhcygpIHtcbiAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeV9fbWVkaWFcIilcblxuICAgIHRoaXMubWVkaWFzID0gbWFwKFxuICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyxcbiAgICAgIChlbGVtZW50LCBpbmRleCkgPT5cbiAgICAgICAgbmV3IE1lZGlhKHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50c1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgIHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuY3VycmVudCAtIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgLy8gZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKCkge1xuICAvLyAgIGxldCBjZW50ZXJlZE1lZGlhID0gbnVsbFxuICAvLyAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIFdlYkdMIG1lZGlhIChwbGFuZXMpXG4gIC8vICAgZWFjaCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAvLyAgICAgY29uc3QgcGxhbmVQb3NpdGlvbiA9IG1lZGlhLm1lc2gucG9zaXRpb24ueFxuXG4gIC8vICAgICBjb25zdCBtaW5CcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDQgOiAwLjRcbiAgLy8gICAgIGNvbnN0IG1heEJyZWFrUG9pbnQgPSBEZXRlY3Rpb24uaXNQaG9uZSgpID8gMC4wNiA6IDAuNlxuXG4gIC8vICAgICBpZiAoRGV0ZWN0aW9uLmlzVGFibGV0KCkpIHtcbiAgLy8gICAgICAgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gMC4xIDwgMC4zKSB7XG4gIC8vICAgICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgICAgcmV0dXJuIGZhbHNlIC8vIEJyZWFrIG91dCBvZiB0aGUgbG9kYXNoIGVhY2ggbG9vcFxuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gbWluQnJlYWtQb2ludCA8IG1heEJyZWFrUG9pbnQpIHtcbiAgLy8gICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuXG4gIC8vICAgaWYgKGNlbnRlcmVkTWVkaWEpIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgLy8gICAgICAgaWYgKGluZGV4ID09PSBjZW50ZXJlZE1lZGlhLmluZGV4KSB7XG4gIC8vICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCBlbGVtZW50ID0+IHtcbiAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICB9KVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC50YXJnZXQpICogMC4xNVxuICAgIGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIGNvbnN0IHZlbG9jaXR5ID0gMC43XG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IC12ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gdmVsb2NpdHkgLy8gZm9yIGF1dG8gc2Nyb2xsaW5nXG4gICAgfVxuXG4gICAgLy8gQXV0b21hdGljIHNjcm9sbCBoZXJlXG4gICAgLy8hIGRpc3RhbmNlIHBvdXIgcXVlIMOnYSByb3RhdGUgcGx1cyB2aXRlIHF1YW5kIGwndXNlciBzY3JvbGxcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGlzdGFuY2UgKiAwLjRcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxlcnBcbiAgICApXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHBpeGVsIHBlcmZlY3QgcG91ciBsYSBkaXNwYXJpdGlvbiBkZXMgaW1hZ2VzIHN1ciBsZSBjYXJvdXNlbFxuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMiArIDAuMjVcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG4gICAgICAgIGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgKz0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG4gICAgICAgIGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgICAvLyBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgLy8gICBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy53aWR0aCkgKiBNYXRoLlBJKSAqIDc1IC0gNzU7XG4gICAgfSlcblxuICAgIHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IHkgKiB0aGlzLnNpemVzLmhlaWdodCAvLyBwb3VyIHBvdXZvaXIgc2Nyb2xsIHN1ciBsJ2VudGllcmV0w6kgZGUgbGEgcGFnZVxuICAgIC8vIHRoaXMuZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKClcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ODllN2ExZWQ2ZjJkYWFiYTNhMFwiKSJdLCJuYW1lcyI6WyJlYWNoIiwibWFwIiwiZ3NhcCIsIlRyYW5zZm9ybSIsIk1lZGlhIiwiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJlbGVtZW50c1dyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2VudGVyZWRNZWRpYSIsImlzQW5pbWF0aW5nIiwiZ3JvdXAiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0Iiwic3RhcnQiLCJ2ZWxvY2l0eSIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJzZXRQYXJlbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJzaG93IiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiaW5uZXJIZWlnaHQiLCJkaXJlY3Rpb24iLCJ1dGlscyIsImludGVycG9sYXRlIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=