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
/******/ 	__webpack_require__.h = () => ("d879d80e7c781783c92e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3VCLElBQUksQ0FBQ0UsUUFBUSxDQUFDZixDQUFDLEdBQUdZLE1BQU07UUFFeEMsSUFBSVosQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDL0IsS0FBSyxDQUFDMkIsS0FBSyxHQUFHLENBQUMsRUFBRTtVQUM3Qk4sS0FBSyxDQUFDMEIsS0FBSyxJQUFJLElBQUksQ0FBQ3BCLEtBQUs7UUFDM0I7TUFDRixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNZLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDckMsTUFBTVIsQ0FBQyxHQUFHVixLQUFLLENBQUN1QixJQUFJLENBQUNFLFFBQVEsQ0FBQ2YsQ0FBQyxHQUFHWSxNQUFNO1FBRXhDLElBQUlaLENBQUMsR0FBRyxJQUFJLENBQUMvQixLQUFLLENBQUMyQixLQUFLLEdBQUcsQ0FBQyxFQUFFO1VBQzVCTixLQUFLLENBQUMwQixLQUFLLElBQUksSUFBSSxDQUFDcEIsS0FBSztRQUMzQjtNQUNGO01BRUFOLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQyxJQUFJLENBQUM1QixNQUFNLENBQUNDLE9BQU8sQ0FBQztNQUNqQztNQUNBO0lBQ0YsQ0FBQyxDQUFDOztJQUVGLElBQUksQ0FBQ0YsS0FBSyxDQUFDc0MsUUFBUSxDQUFDZCxDQUFDLEdBQUdBLENBQUMsR0FBRyxJQUFJLENBQUNoQyxLQUFLLENBQUNnRCxNQUFNLEVBQUM7SUFDOUM7RUFDRjs7RUFFQUMsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDbEQsS0FBSyxDQUFDbUQsV0FBVyxDQUFDLElBQUksQ0FBQzFDLEtBQUssQ0FBQztFQUNwQztBQUNGOzs7Ozs7OztVQzVLQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9HYWxsZXJ5LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9NZWRpYVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudHNXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcbiAgICB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlcIilcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmNlbnRlcmVkTWVkaWEgPSBudWxsXG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICB2ZWxvY2l0eTogMC43LFxuICAgICAgbGVycDogMC4wNFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZU1lZGlhcygpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhcygpIHtcbiAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeV9fbWVkaWFcIilcblxuICAgIHRoaXMubWVkaWFzID0gbWFwKFxuICAgICAgdGhpcy5tZWRpYXNFbGVtZW50cyxcbiAgICAgIChlbGVtZW50LCBpbmRleCkgPT5cbiAgICAgICAgbmV3IE1lZGlhKHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50c1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgIHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuY3VycmVudCAtIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgLy8gZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKCkge1xuICAvLyAgIGxldCBjZW50ZXJlZE1lZGlhID0gbnVsbFxuICAvLyAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIFdlYkdMIG1lZGlhIChwbGFuZXMpXG4gIC8vICAgZWFjaCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAvLyAgICAgY29uc3QgcGxhbmVQb3NpdGlvbiA9IG1lZGlhLm1lc2gucG9zaXRpb24ueFxuXG4gIC8vICAgICBjb25zdCBtaW5CcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDQgOiAwLjRcbiAgLy8gICAgIGNvbnN0IG1heEJyZWFrUG9pbnQgPSBEZXRlY3Rpb24uaXNQaG9uZSgpID8gMC4wNiA6IDAuNlxuXG4gIC8vICAgICBpZiAoRGV0ZWN0aW9uLmlzVGFibGV0KCkpIHtcbiAgLy8gICAgICAgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gMC4xIDwgMC4zKSB7XG4gIC8vICAgICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgICAgcmV0dXJuIGZhbHNlIC8vIEJyZWFrIG91dCBvZiB0aGUgbG9kYXNoIGVhY2ggbG9vcFxuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gbWluQnJlYWtQb2ludCA8IG1heEJyZWFrUG9pbnQpIHtcbiAgLy8gICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuXG4gIC8vICAgaWYgKGNlbnRlcmVkTWVkaWEpIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgLy8gICAgICAgaWYgKGluZGV4ID09PSBjZW50ZXJlZE1lZGlhLmluZGV4KSB7XG4gIC8vICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCBlbGVtZW50ID0+IHtcbiAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICB9KVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC50YXJnZXQpICogMC4xNVxuICAgIGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIGNvbnN0IHZlbG9jaXR5ID0gMC43XG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAvLyB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IC12ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgIC8vIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gdmVsb2NpdHkgLy8gZm9yIGF1dG8gc2Nyb2xsaW5nXG4gICAgfVxuXG4gICAgLy8gQXV0b21hdGljIHNjcm9sbCBoZXJlXG4gICAgLy8hIGRpc3RhbmNlIHBvdXIgcXVlIMOnYSByb3RhdGUgcGx1cyB2aXRlIHF1YW5kIGwndXNlciBzY3JvbGxcbiAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcbiAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGlzdGFuY2UgKiAwLjRcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxlcnBcbiAgICApXG5cbiAgICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA+IC0wLjAxID8gMCA6IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICAgIH1weClgOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcGl4ZWwgcGVyZmVjdCBwb3VyIGxhIGRpc3Bhcml0aW9uIGRlcyBpbWFnZXMgc3VyIGxlIGNhcm91c2VsXG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuICAgICAgICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgICAgLy8gbWVkaWEubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIC8vICAgTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMud2lkdGgpICogTWF0aC5QSSkgKiA3NSAtIDc1O1xuICAgIH0pXG5cbiAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLnkgPSB5ICogdGhpcy5zaXplcy5oZWlnaHQgLy8gcG91ciBwb3V2b2lyIHNjcm9sbCBzdXIgbCdlbnRpZXJldMOpIGRlIGxhIHBhZ2VcbiAgICAvLyB0aGlzLmdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDg3OWQ4MGU3Yzc4MTc4M2M5MmVcIikiXSwibmFtZXMiOlsiZWFjaCIsIm1hcCIsImdzYXAiLCJUcmFuc2Zvcm0iLCJQcmVmaXgiLCJNZWRpYSIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwiZWxlbWVudHNXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJkb2N1bWVudCIsImNlbnRlcmVkTWVkaWEiLCJpc0FuaW1hdGluZyIsInRyYW5zZm9ybVByZWZpeCIsImdyb3VwIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwic2hvdyIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInN0eWxlIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=