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
    this.gallery = document.querySelector(".home__gallery");
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
      // this.scroll.velocity = -velocity // for auto scrolling
    } else if (this.scroll.current > this.scroll.target) {
      this.direction = "left";
      // this.scroll.velocity = velocity // for auto scrolling
    }

    // Automatic scroll here
    //! distance pour que ça rotate plus vite quand l'user scroll
    // this.scroll.target -= this.scroll.velocity
    // this.scroll.target += distance * 0.4

    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
    this.gallery.style[this.transformPrefix] = `translateX(${this.scroll.current > -0.01 ? 0 : this.scroll.current}px)`; // prettier-ignore

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, (media, index) => {
      // pixel perfect pour la disparition des images sur le carousel
      // const scaleX = media.mesh.scale.x / 2 + 0.25
      // if (this.direction === "left") {
      //   const x = media.mesh.position.x + scaleX

      //   if (x < -this.sizes.width / 2) {
      //     media.extra += this.width
      //   }
      // } else if (this.direction === "right") {
      //   const x = media.mesh.position.x - scaleX

      //   if (x > this.sizes.width / 2) {
      //     media.extra -= this.width
      //   }
      // }

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
/******/ 	__webpack_require__.h = () => ("c231b33381a9f5f84e12")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLElBQUksQ0FBQy9CLEtBQUssQ0FBQzRDLE1BQU0sRUFBQztJQUM5QztFQUNGOztFQUVBQyxPQUFPQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUM5QyxLQUFLLENBQUMrQyxXQUFXLENBQUMsSUFBSSxDQUFDdkMsS0FBSyxDQUFDO0VBQ3BDO0FBQ0Y7Ozs7Ozs7O1VDektBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCwgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnRzV3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5X193cmFwcGVyXCIpXG4gICAgdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5jZW50ZXJlZE1lZGlhID0gbnVsbFxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICB2ZWxvY2l0eTogMC43LFxuICAgICAgbGVycDogMC4wNFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZU1lZGlhcygpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhcygpIHtcbiAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeV9fbWVkaWFcIilcblxuICAgIHRoaXMubWVkaWFzID0gbWFwKFxuICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyxcbiAgICAgIChlbGVtZW50LCBpbmRleCkgPT5cbiAgICAgICAgbmV3IE1lZGlhKHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50c1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgIHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuY3VycmVudCAtIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgLy8gZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKCkge1xuICAvLyAgIGxldCBjZW50ZXJlZE1lZGlhID0gbnVsbFxuICAvLyAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIFdlYkdMIG1lZGlhIChwbGFuZXMpXG4gIC8vICAgZWFjaCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAvLyAgICAgY29uc3QgcGxhbmVQb3NpdGlvbiA9IG1lZGlhLm1lc2gucG9zaXRpb24ueFxuXG4gIC8vICAgICBjb25zdCBtaW5CcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDQgOiAwLjRcbiAgLy8gICAgIGNvbnN0IG1heEJyZWFrUG9pbnQgPSBEZXRlY3Rpb24uaXNQaG9uZSgpID8gMC4wNiA6IDAuNlxuXG4gIC8vICAgICBpZiAoRGV0ZWN0aW9uLmlzVGFibGV0KCkpIHtcbiAgLy8gICAgICAgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gMC4xIDwgMC4zKSB7XG4gIC8vICAgICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgICAgcmV0dXJuIGZhbHNlIC8vIEJyZWFrIG91dCBvZiB0aGUgbG9kYXNoIGVhY2ggbG9vcFxuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gbWluQnJlYWtQb2ludCA8IG1heEJyZWFrUG9pbnQpIHtcbiAgLy8gICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuXG4gIC8vICAgaWYgKGNlbnRlcmVkTWVkaWEpIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgLy8gICAgICAgaWYgKGluZGV4ID09PSBjZW50ZXJlZE1lZGlhLmluZGV4KSB7XG4gIC8vICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCBlbGVtZW50ID0+IHtcbiAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICB9KVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC50YXJnZXQpICogMC4xNVxuICAgIGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIGNvbnN0IHZlbG9jaXR5ID0gMC43XG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAvLyB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IC12ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgIC8vIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gdmVsb2NpdHkgLy8gZm9yIGF1dG8gc2Nyb2xsaW5nXG4gICAgfVxuXG4gICAgLy8gQXV0b21hdGljIHNjcm9sbCBoZXJlXG4gICAgLy8hIGRpc3RhbmNlIHBvdXIgcXVlIMOnYSByb3RhdGUgcGx1cyB2aXRlIHF1YW5kIGwndXNlciBzY3JvbGxcbiAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcbiAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGlzdGFuY2UgKiAwLjRcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxlcnBcbiAgICApXG5cbiAgICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA+IC0wLjAxID8gMCA6IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICAgIH1weClgOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcGl4ZWwgcGVyZmVjdCBwb3VyIGxhIGRpc3Bhcml0aW9uIGRlcyBpbWFnZXMgc3VyIGxlIGNhcm91c2VsXG4gICAgICAvLyBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyICsgMC4yNVxuICAgICAgLy8gaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgLy8gICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cbiAgICAgIC8vICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgIC8vICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgLy8gICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgIC8vICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgLy8gICAgIG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAgIC8vIG1lZGlhLm1lc2gucG9zaXRpb24ueSA9XG4gICAgICAvLyAgIE1hdGguY29zKChtZWRpYS5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLndpZHRoKSAqIE1hdGguUEkpICogNzUgLSA3NTtcbiAgICB9KVxuXG4gICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0IC8vIHBvdXIgcG91dm9pciBzY3JvbGwgc3VyIGwnZW50aWVyZXTDqSBkZSBsYSBwYWdlXG4gICAgLy8gdGhpcy5nZXRDZW50ZXJlZEltYWdlQ2l0eU5hbWUoKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyMzFiMzMzODFhOWY1Zjg0ZTEyXCIpIl0sIm5hbWVzIjpbImVhY2giLCJtYXAiLCJnc2FwIiwiVHJhbnNmb3JtIiwiTWVkaWEiLCJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsImVsZW1lbnRzV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJjZW50ZXJlZE1lZGlhIiwiaXNBbmltYXRpbmciLCJncm91cCIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzdGFydCIsInZlbG9jaXR5IiwibGVycCIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsInNob3ciLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJpbm5lckhlaWdodCIsImRpcmVjdGlvbiIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsInRyYW5zZm9ybVByZWZpeCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==