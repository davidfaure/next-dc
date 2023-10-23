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
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");





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
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_1___default()("transform");
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
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
    this.medias = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.mediasElements, (element, index) => new _Media__WEBPACK_IMPORTED_MODULE_2__["default"]({
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

    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
    this.gallery.style[this.transformPrefix] = `translateX(${this.scroll.current > -0.01 ? 0 : this.scroll.current}px)`; // prettier-ignore

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, (media, index) => {
      console.log(media.mesh.scale.x);
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
/******/ 	__webpack_require__.h = () => ("b9c0aaa1bf51eea5ee55")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztNQUNyQyxJQUFJLElBQUksQ0FBQ1EsU0FBUyxLQUFLLE1BQU0sRUFBRTtRQUM3QixNQUFNUixDQUFDLEdBQUdWLEtBQUssQ0FBQ3dCLElBQUksQ0FBQ0csUUFBUSxDQUFDakIsQ0FBQyxHQUFHZ0IsTUFBTTtRQUV4QyxJQUFJaEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDL0IsS0FBSyxDQUFDMkIsS0FBSyxHQUFHLENBQUMsRUFBRTtVQUM3Qk4sS0FBSyxDQUFDNEIsS0FBSyxJQUFJLElBQUksQ0FBQ3RCLEtBQUs7UUFDM0I7TUFDRixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNZLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDckMsTUFBTVIsQ0FBQyxHQUFHVixLQUFLLENBQUN3QixJQUFJLENBQUNHLFFBQVEsQ0FBQ2pCLENBQUMsR0FBR2dCLE1BQU07UUFFeEMsSUFBSWhCLENBQUMsR0FBRyxJQUFJLENBQUMvQixLQUFLLENBQUMyQixLQUFLLEdBQUcsQ0FBQyxFQUFFO1VBQzVCTixLQUFLLENBQUM0QixLQUFLLElBQUksSUFBSSxDQUFDdEIsS0FBSztRQUMzQjtNQUNGO01BRUFOLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQyxJQUFJLENBQUM1QixNQUFNLENBQUNDLE9BQU8sQ0FBQztNQUNqQztNQUNBO0lBQ0YsQ0FBQyxDQUFDOztJQUVGLElBQUksQ0FBQ0YsS0FBSyxDQUFDd0MsUUFBUSxDQUFDaEIsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsSUFBSSxDQUFDaEMsS0FBSyxDQUFDa0QsTUFBTSxFQUFDO0lBQzlDO0VBQ0Y7O0VBRUFDLE9BQU9BLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ3BELEtBQUssQ0FBQ3FELFdBQVcsQ0FBQyxJQUFJLENBQUM1QyxLQUFLLENBQUM7RUFDcEM7QUFDRjs7Ozs7Ozs7VUM3S0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYWNoLCBtYXAgfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2dsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnRzV3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5X193cmFwcGVyXCIpXG4gICAgdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5jZW50ZXJlZE1lZGlhID0gbnVsbFxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgdmVsb2NpdHk6IDAuNyxcbiAgICAgIGxlcnA6IDAuMDRcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhXCIpXG5cbiAgICB0aGlzLm1lZGlhcyA9IG1hcChcbiAgICAgIHRoaXMubWVkaWFzRWxlbWVudHMsXG4gICAgICAoZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICAgIG5ldyBNZWRpYSh7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudHNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIC8vIGdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpIHtcbiAgLy8gICBsZXQgY2VudGVyZWRNZWRpYSA9IG51bGxcbiAgLy8gICAvLyBMb29wIHRocm91Z2ggZWFjaCBXZWJHTCBtZWRpYSAocGxhbmVzKVxuICAvLyAgIGVhY2godGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcbiAgLy8gICAgIGNvbnN0IHBsYW5lUG9zaXRpb24gPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnhcblxuICAvLyAgICAgY29uc3QgbWluQnJlYWtQb2ludCA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAwLjA0IDogMC40XG4gIC8vICAgICBjb25zdCBtYXhCcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDYgOiAwLjZcblxuICAvLyAgICAgaWYgKERldGVjdGlvbi5pc1RhYmxldCgpKSB7XG4gIC8vICAgICAgIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IDAuMSA8IDAuMykge1xuICAvLyAgICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IG1pbkJyZWFrUG9pbnQgPCBtYXhCcmVha1BvaW50KSB7XG4gIC8vICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICByZXR1cm4gZmFsc2UgLy8gQnJlYWsgb3V0IG9mIHRoZSBsb2Rhc2ggZWFjaCBsb29wXG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIGlmIChjZW50ZXJlZE1lZGlhKSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgIGlmIChpbmRleCA9PT0gY2VudGVyZWRNZWRpYS5pbmRleCkge1xuICAvLyAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgZWxlbWVudCA9PiB7XG4gIC8vICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSAoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwudGFyZ2V0KSAqIDAuMTVcbiAgICBjb25zdCB5ID0gc2Nyb2xsLmN1cnJlbnQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICBjb25zdCB2ZWxvY2l0eSA9IDAuN1xuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgLy8gdGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtdmVsb2NpdHkgLy8gZm9yIGF1dG8gc2Nyb2xsaW5nXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICAvLyB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IHZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH1cblxuICAgIC8vIEF1dG9tYXRpYyBzY3JvbGwgaGVyZVxuICAgIC8vISBkaXN0YW5jZSBwb3VyIHF1ZSDDp2Egcm90YXRlIHBsdXMgdml0ZSBxdWFuZCBsJ3VzZXIgc2Nyb2xsXG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0IC09IHRoaXMuc2Nyb2xsLnZlbG9jaXR5XG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRpc3RhbmNlICogMC40XG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICB0aGlzLnNjcm9sbC5sZXJwXG4gICAgKVxuXG4gICAgdGhpcy5nYWxsZXJ5LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgICB9cHgpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1lZGlhLm1lc2guc2NhbGUueClcbiAgICAgIC8vIHBpeGVsIHBlcmZlY3QgcG91ciBsYSBkaXNwYXJpdGlvbiBkZXMgaW1hZ2VzIHN1ciBsZSBjYXJvdXNlbFxuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAgIC8vIG1lZGlhLm1lc2gucG9zaXRpb24ueSA9XG4gICAgICAvLyAgIE1hdGguY29zKChtZWRpYS5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLndpZHRoKSAqIE1hdGguUEkpICogNzUgLSA3NTtcbiAgICB9KVxuXG4gICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0IC8vIHBvdXIgcG91dm9pciBzY3JvbGwgc3VyIGwnZW50aWVyZXTDqSBkZSBsYSBwYWdlXG4gICAgLy8gdGhpcy5nZXRDZW50ZXJlZEltYWdlQ2l0eU5hbWUoKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI5YzBhYWExYmY1MWVlYTVlZTU1XCIpIl0sIm5hbWVzIjpbImVhY2giLCJtYXAiLCJnc2FwIiwiVHJhbnNmb3JtIiwiUHJlZml4IiwiTWVkaWEiLCJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsImVsZW1lbnRzV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJjZW50ZXJlZE1lZGlhIiwiaXNBbmltYXRpbmciLCJ0cmFuc2Zvcm1QcmVmaXgiLCJncm91cCIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzdGFydCIsInZlbG9jaXR5IiwibGVycCIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsInNob3ciLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJpbm5lckhlaWdodCIsImRpcmVjdGlvbiIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNoIiwic2NhbGUiLCJzY2FsZVgiLCJwb3NpdGlvbiIsImV4dHJhIiwiaGVpZ2h0IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==