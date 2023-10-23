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
    this.medias = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.mediasElements, (element, index) => {
      const media = new _Media__WEBPACK_IMPORTED_MODULE_2__["default"]({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
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
    if (!this.bounds) return;
    // const distance = (scroll.current - scroll.target) * 0.15

    const y = scroll.current / window.innerHeight;
    // const velocity = 0.7

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
/******/ 	__webpack_require__.h = () => ("e6735ad67c1c9ee98bc5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFFeEMsSUFBSVosQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDL0IsS0FBSyxDQUFDMkIsS0FBSyxHQUFHLENBQUMsRUFBRTtVQUM3QlAsS0FBSyxDQUFDMkIsS0FBSyxJQUFJLElBQUksQ0FBQ3BCLEtBQUs7UUFDM0I7TUFDRixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNZLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDckMsTUFBTVIsQ0FBQyxHQUFHWCxLQUFLLENBQUN3QixJQUFJLENBQUNFLFFBQVEsQ0FBQ2YsQ0FBQyxHQUFHWSxNQUFNO1FBRXhDLElBQUlaLENBQUMsR0FBRyxJQUFJLENBQUMvQixLQUFLLENBQUMyQixLQUFLLEdBQUcsQ0FBQyxFQUFFO1VBQzVCUCxLQUFLLENBQUMyQixLQUFLLElBQUksSUFBSSxDQUFDcEIsS0FBSztRQUMzQjtNQUNGO01BRUFQLEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQyxJQUFJLENBQUM1QixNQUFNLENBQUNDLE9BQU8sQ0FBQztNQUNqQztNQUNBO0lBQ0YsQ0FBQyxDQUFDOztJQUVGLElBQUksQ0FBQ0YsS0FBSyxDQUFDc0MsUUFBUSxDQUFDZCxDQUFDLEdBQUdBLENBQUMsR0FBRyxJQUFJLENBQUNoQyxLQUFLLENBQUNnRCxNQUFNLEVBQUM7SUFDOUM7RUFDRjs7RUFFQUMsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDbEQsS0FBSyxDQUFDbUQsV0FBVyxDQUFDLElBQUksQ0FBQzFDLEtBQUssQ0FBQztFQUNwQztBQUNGOzs7Ozs7OztVQ2hMQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9HYWxsZXJ5LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9NZWRpYVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudHNXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcblxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5jZW50ZXJlZE1lZGlhID0gbnVsbFxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgdmVsb2NpdHk6IDAuNyxcbiAgICAgIGxlcnA6IDAuMDRcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhXCIpXG5cbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG1lZGlhID0gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGluZGV4LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWVkaWFcbiAgICB9KVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50c1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgIHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuY3VycmVudCAtIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgLy8gZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKCkge1xuICAvLyAgIGxldCBjZW50ZXJlZE1lZGlhID0gbnVsbFxuICAvLyAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIFdlYkdMIG1lZGlhIChwbGFuZXMpXG4gIC8vICAgZWFjaCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAvLyAgICAgY29uc3QgcGxhbmVQb3NpdGlvbiA9IG1lZGlhLm1lc2gucG9zaXRpb24ueFxuXG4gIC8vICAgICBjb25zdCBtaW5CcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDQgOiAwLjRcbiAgLy8gICAgIGNvbnN0IG1heEJyZWFrUG9pbnQgPSBEZXRlY3Rpb24uaXNQaG9uZSgpID8gMC4wNiA6IDAuNlxuXG4gIC8vICAgICBpZiAoRGV0ZWN0aW9uLmlzVGFibGV0KCkpIHtcbiAgLy8gICAgICAgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gMC4xIDwgMC4zKSB7XG4gIC8vICAgICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgICAgcmV0dXJuIGZhbHNlIC8vIEJyZWFrIG91dCBvZiB0aGUgbG9kYXNoIGVhY2ggbG9vcFxuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gbWluQnJlYWtQb2ludCA8IG1heEJyZWFrUG9pbnQpIHtcbiAgLy8gICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuXG4gIC8vICAgaWYgKGNlbnRlcmVkTWVkaWEpIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgLy8gICAgICAgaWYgKGluZGV4ID09PSBjZW50ZXJlZE1lZGlhLmluZGV4KSB7XG4gIC8vICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCBlbGVtZW50ID0+IHtcbiAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICB9KVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICAvLyBjb25zdCBkaXN0YW5jZSA9IChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC50YXJnZXQpICogMC4xNVxuXG4gICAgY29uc3QgeSA9IHNjcm9sbC5jdXJyZW50IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgLy8gY29uc3QgdmVsb2NpdHkgPSAwLjdcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgLy8gdGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtdmVsb2NpdHkgLy8gZm9yIGF1dG8gc2Nyb2xsaW5nXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICAvLyB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IHZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH1cblxuICAgIC8vIEF1dG9tYXRpYyBzY3JvbGwgaGVyZVxuICAgIC8vISBkaXN0YW5jZSBwb3VyIHF1ZSDDp2Egcm90YXRlIHBsdXMgdml0ZSBxdWFuZCBsJ3VzZXIgc2Nyb2xsXG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0IC09IHRoaXMuc2Nyb2xsLnZlbG9jaXR5XG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRpc3RhbmNlICogMC40XG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICB0aGlzLnNjcm9sbC5sZXJwXG4gICAgKVxuXG4gICAgdGhpcy5nYWxsZXJ5LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgICB9cHgpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHBpeGVsIHBlcmZlY3QgcG91ciBsYSBkaXNwYXJpdGlvbiBkZXMgaW1hZ2VzIHN1ciBsZSBjYXJvdXNlbFxuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAgIC8vIG1lZGlhLm1lc2gucG9zaXRpb24ueSA9XG4gICAgICAvLyAgIE1hdGguY29zKChtZWRpYS5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLndpZHRoKSAqIE1hdGguUEkpICogNzUgLSA3NTtcbiAgICB9KVxuXG4gICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0IC8vIHBvdXIgcG91dm9pciBzY3JvbGwgc3VyIGwnZW50aWVyZXTDqSBkZSBsYSBwYWdlXG4gICAgLy8gdGhpcy5nZXRDZW50ZXJlZEltYWdlQ2l0eU5hbWUoKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU2NzM1YWQ2N2MxYzllZTk4YmM1XCIpIl0sIm5hbWVzIjpbImVhY2giLCJtYXAiLCJnc2FwIiwiVHJhbnNmb3JtIiwiUHJlZml4IiwiTWVkaWEiLCJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsImVsZW1lbnRzV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJjZW50ZXJlZE1lZGlhIiwiaXNBbmltYXRpbmciLCJ0cmFuc2Zvcm1QcmVmaXgiLCJncm91cCIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzdGFydCIsInZlbG9jaXR5IiwibGVycCIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsIm1lZGlhIiwic2hvdyIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJpbm5lckhlaWdodCIsImRpcmVjdGlvbiIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJoZWlnaHQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9