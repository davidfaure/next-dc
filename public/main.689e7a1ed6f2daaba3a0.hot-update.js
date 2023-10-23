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
    // this.scroll.target -= this.scroll.velocity
    // this.scroll.target += distance * 0.4

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
/******/ 	__webpack_require__.h = () => ("2fd4bf222b7d7a0acd21")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ODllN2ExZWQ2ZjJkYWFiYTNhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNQO0FBQ0k7QUFDSjtBQUVaLE1BQU1LLE9BQU8sQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLFFBQVE7SUFBRUMsS0FBSztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUM7RUFBTSxDQUFDLEVBQUU7SUFDMUQsSUFBSSxDQUFDTCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDTSxlQUFlLEdBQUdOLE9BQU8sQ0FBQ08sYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBQ3ZFLElBQUksQ0FBQ04sUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDRyxhQUFhLEdBQUcsSUFBSTtJQUN6QixJQUFJLENBQUNDLFdBQVcsR0FBRyxLQUFLO0lBRXhCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlkLDBDQUFTLENBQUMsQ0FBQztJQUU1QixJQUFJLENBQUNlLE1BQU0sR0FBRztNQUNaQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNQLEtBQUssQ0FBQ1EsU0FBUyxDQUFDLElBQUksQ0FBQ2QsS0FBSyxDQUFDO0VBQ2xDO0VBRUFhLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0UsY0FBYyxHQUFHLElBQUksQ0FBQ25CLE9BQU8sQ0FB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QUNZLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDckMsTUFBTVIsQ0FBQyxHQUFHVixLQUFLLENBQUNzQixJQUFJLENBQUNFLFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHVyxNQUFNO1FBRXhDLElBQUlYLENBQUMsR0FBRyxJQUFJLENBQUM1QixLQUFLLENBQUN3QixLQUFLLEdBQUcsQ0FBQyxFQUFFO1VBQzVCTixLQUFLLENBQUN5QixLQUFLLElBQUksSUFBSSxDQUFDbkIsS0FBSztRQUMzQjtNQUNGO01BRUFOLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQyxJQUFJLENBQUM1QixNQUFNLENBQUNDLE9BQU8sQ0FBQztNQUNqQztNQUNBO0lBQ0YsQ0FBQyxDQUFDOztJQUVGLElBQUksQ0FBQ0YsS0FBSyxDQUFDcUMsUUFBUSxDQUFDYixDQUFDLEdBQUdBLENBQUMsR0FBRyxJQUFJLENBQUM3QixLQUFLLENBQUM0QyxNQUFNLEVBQUM7SUFDOUM7RUFDRjs7RUFFQUMsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDOUMsS0FBSyxDQUFDK0MsV0FBVyxDQUFDLElBQUksQ0FBQ3pDLEtBQUssQ0FBQztFQUNwQztBQUNGOzs7Ozs7OztVQ3BLQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9HYWxsZXJ5LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50c1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlclwiKVxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuY2VudGVyZWRNZWRpYSA9IG51bGxcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgdmVsb2NpdHk6IDAuNyxcbiAgICAgIGxlcnA6IDAuMDRcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhXCIpXG5cbiAgICB0aGlzLm1lZGlhcyA9IG1hcChcbiAgICAgIHRoaXMubWVkaWFzRWxlbWVudHMsXG4gICAgICAoZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICAgIG5ldyBNZWRpYSh7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudHNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIC8vIGdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpIHtcbiAgLy8gICBsZXQgY2VudGVyZWRNZWRpYSA9IG51bGxcbiAgLy8gICAvLyBMb29wIHRocm91Z2ggZWFjaCBXZWJHTCBtZWRpYSAocGxhbmVzKVxuICAvLyAgIGVhY2godGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcbiAgLy8gICAgIGNvbnN0IHBsYW5lUG9zaXRpb24gPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnhcblxuICAvLyAgICAgY29uc3QgbWluQnJlYWtQb2ludCA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAwLjA0IDogMC40XG4gIC8vICAgICBjb25zdCBtYXhCcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDYgOiAwLjZcblxuICAvLyAgICAgaWYgKERldGVjdGlvbi5pc1RhYmxldCgpKSB7XG4gIC8vICAgICAgIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IDAuMSA8IDAuMykge1xuICAvLyAgICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IG1pbkJyZWFrUG9pbnQgPCBtYXhCcmVha1BvaW50KSB7XG4gIC8vICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICByZXR1cm4gZmFsc2UgLy8gQnJlYWsgb3V0IG9mIHRoZSBsb2Rhc2ggZWFjaCBsb29wXG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIGlmIChjZW50ZXJlZE1lZGlhKSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgIGlmIChpbmRleCA9PT0gY2VudGVyZWRNZWRpYS5pbmRleCkge1xuICAvLyAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgZWxlbWVudCA9PiB7XG4gIC8vICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSAoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwudGFyZ2V0KSAqIDAuMTVcbiAgICBjb25zdCB5ID0gc2Nyb2xsLmN1cnJlbnQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICBjb25zdCB2ZWxvY2l0eSA9IDAuN1xuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgdGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtdmVsb2NpdHkgLy8gZm9yIGF1dG8gc2Nyb2xsaW5nXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IHZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH1cblxuICAgIC8vIEF1dG9tYXRpYyBzY3JvbGwgaGVyZVxuICAgIC8vISBkaXN0YW5jZSBwb3VyIHF1ZSDDp2Egcm90YXRlIHBsdXMgdml0ZSBxdWFuZCBsJ3VzZXIgc2Nyb2xsXG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0IC09IHRoaXMuc2Nyb2xsLnZlbG9jaXR5XG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRpc3RhbmNlICogMC40XG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICB0aGlzLnNjcm9sbC5sZXJwXG4gICAgKVxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICAvLyBwaXhlbCBwZXJmZWN0IHBvdXIgbGEgZGlzcGFyaXRpb24gZGVzIGltYWdlcyBzdXIgbGUgY2Fyb3VzZWxcbiAgICAgIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDIgKyAwLjI1XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuICAgICAgICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgICAgLy8gbWVkaWEubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIC8vICAgTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMud2lkdGgpICogTWF0aC5QSSkgKiA3NSAtIDc1O1xuICAgIH0pXG5cbiAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLnkgPSB5ICogdGhpcy5zaXplcy5oZWlnaHQgLy8gcG91ciBwb3V2b2lyIHNjcm9sbCBzdXIgbCdlbnRpZXJldMOpIGRlIGxhIHBhZ2VcbiAgICAvLyB0aGlzLmdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmZkNGJmMjIyYjdkN2EwYWNkMjFcIikiXSwibmFtZXMiOlsiZWFjaCIsIm1hcCIsImdzYXAiLCJUcmFuc2Zvcm0iLCJNZWRpYSIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwiZWxlbWVudHNXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImNlbnRlcmVkTWVkaWEiLCJpc0FuaW1hdGluZyIsImdyb3VwIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwic2hvdyIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJoZWlnaHQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9