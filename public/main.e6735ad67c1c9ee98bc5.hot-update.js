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
      console.log(element, "ELEMENT");
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
/******/ 	__webpack_require__.h = () => ("28b389240f3138ea5922")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxLQUFLLENBQUN3QixJQUFJLENBQUNFLFFBQVEsQ0FBQ2YsQ0FBQyxHQUFHWSxNQUFNO1FBRXhDLElBQUlaLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQ2pDLEtBQUssQ0FBQzZCLEtBQUssR0FBRyxDQUFDLEVBQUU7VUFDN0JQLEtBQUssQ0FBQzJCLEtBQUssSUFBSSxJQUFJLENBQUNwQixLQUFLO1FBQzNCO01BQ0YsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDWSxTQUFTLEtBQUssT0FBTyxFQUFFO1FBQ3JDLE1BQU1SLENBQUMsR0FBR1gsS0FBSyxDQUFDd0IsSUFBSSxDQUFDRSxRQUFRLENBQUNmLENBQUMsR0FBR1ksTUFBTTtRQUV4QyxJQUFJWixDQUFDLEdBQUcsSUFBSSxDQUFDakMsS0FBSyxDQUFDNkIsS0FBSyxHQUFHLENBQUMsRUFBRTtVQUM1QlAsS0FBSyxDQUFDMkIsS0FBSyxJQUFJLElBQUksQ0FBQ3BCLEtBQUs7UUFDM0I7TUFDRjtNQUVBUCxLQUFLLENBQUNpQixNQUFNLENBQUMsSUFBSSxDQUFDOUIsTUFBTSxDQUFDQyxPQUFPLENBQUM7TUFDakM7TUFDQTtJQUNGLENBQUMsQ0FBQzs7SUFFRixJQUFJLENBQUNGLEtBQUssQ0FBQ3dDLFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHQSxDQUFDLEdBQUcsSUFBSSxDQUFDbEMsS0FBSyxDQUFDa0QsTUFBTSxFQUFDO0lBQzlDO0VBQ0Y7O0VBRUFDLE9BQU9BLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ3BELEtBQUssQ0FBQ3FELFdBQVcsQ0FBQyxJQUFJLENBQUM1QyxLQUFLLENBQUM7RUFDcEM7QUFDRjs7Ozs7Ozs7VUNsTEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYWNoLCBtYXAgfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2dsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnRzV3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5X193cmFwcGVyXCIpXG5cbiAgICB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlcIilcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuY2VudGVyZWRNZWRpYSA9IG51bGxcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIHZlbG9jaXR5OiAwLjcsXG4gICAgICBsZXJwOiAwLjA0XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlTWVkaWFzKClcbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlTWVkaWFzKCkge1xuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5X19tZWRpYVwiKVxuXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50LCBcIkVMRU1FTlRcIilcblxuICAgICAgY29uc3QgbWVkaWEgPSBuZXcgTWVkaWEoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtZWRpYVxuICAgIH0pXG4gIH1cblxuICBzaG93KCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcbiAgfVxuXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRzV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC0gZGlzdGFuY2VcbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuICAvLyBnZXRDZW50ZXJlZEltYWdlQ2l0eU5hbWUoKSB7XG4gIC8vICAgbGV0IGNlbnRlcmVkTWVkaWEgPSBudWxsXG4gIC8vICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggV2ViR0wgbWVkaWEgKHBsYW5lcylcbiAgLy8gICBlYWNoKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gIC8vICAgICBjb25zdCBwbGFuZVBvc2l0aW9uID0gbWVkaWEubWVzaC5wb3NpdGlvbi54XG5cbiAgLy8gICAgIGNvbnN0IG1pbkJyZWFrUG9pbnQgPSBEZXRlY3Rpb24uaXNQaG9uZSgpID8gMC4wNCA6IDAuNFxuICAvLyAgICAgY29uc3QgbWF4QnJlYWtQb2ludCA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAwLjA2IDogMC42XG5cbiAgLy8gICAgIGlmIChEZXRlY3Rpb24uaXNUYWJsZXQoKSkge1xuICAvLyAgICAgICBpZiAoTWF0aC5hYnMocGxhbmVQb3NpdGlvbikgPiAwLjEgPCAwLjMpIHtcbiAgLy8gICAgICAgICBjZW50ZXJlZE1lZGlhID0gbWVkaWFcbiAgLy8gICAgICAgICByZXR1cm4gZmFsc2UgLy8gQnJlYWsgb3V0IG9mIHRoZSBsb2Rhc2ggZWFjaCBsb29wXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMocGxhbmVQb3NpdGlvbikgPiBtaW5CcmVha1BvaW50IDwgbWF4QnJlYWtQb2ludCkge1xuICAvLyAgICAgICBjZW50ZXJlZE1lZGlhID0gbWVkaWFcbiAgLy8gICAgICAgcmV0dXJuIGZhbHNlIC8vIEJyZWFrIG91dCBvZiB0aGUgbG9kYXNoIGVhY2ggbG9vcFxuICAvLyAgICAgfVxuICAvLyAgIH0pXG5cbiAgLy8gICBpZiAoY2VudGVyZWRNZWRpYSkge1xuICAvLyAgICAgbWFwKHRoaXMuY2l0eUVsZW1lbnQsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAvLyAgICAgICBpZiAoaW5kZXggPT09IGNlbnRlcmVkTWVkaWEuaW5kZXgpIHtcbiAgLy8gICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jaXR5RWxlbWVudEFjdGl2ZSlcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgbWFwKHRoaXMuY2l0eUVsZW1lbnQsIGVsZW1lbnQgPT4ge1xuICAvLyAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jaXR5RWxlbWVudEFjdGl2ZSlcbiAgLy8gICAgIH0pXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIC8vIGNvbnN0IGRpc3RhbmNlID0gKHNjcm9sbC5jdXJyZW50IC0gc2Nyb2xsLnRhcmdldCkgKiAwLjE1XG5cbiAgICBjb25zdCB5ID0gc2Nyb2xsLmN1cnJlbnQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAvLyBjb25zdCB2ZWxvY2l0eSA9IDAuN1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAvLyB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IC12ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgIC8vIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gdmVsb2NpdHkgLy8gZm9yIGF1dG8gc2Nyb2xsaW5nXG4gICAgfVxuXG4gICAgLy8gQXV0b21hdGljIHNjcm9sbCBoZXJlXG4gICAgLy8hIGRpc3RhbmNlIHBvdXIgcXVlIMOnYSByb3RhdGUgcGx1cyB2aXRlIHF1YW5kIGwndXNlciBzY3JvbGxcbiAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcbiAgICAvLyB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGlzdGFuY2UgKiAwLjRcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxlcnBcbiAgICApXG5cbiAgICB0aGlzLmdhbGxlcnkuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHtcbiAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA+IC0wLjAxID8gMCA6IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgICAgIH1weClgOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcGl4ZWwgcGVyZmVjdCBwb3VyIGxhIGRpc3Bhcml0aW9uIGRlcyBpbWFnZXMgc3VyIGxlIGNhcm91c2VsXG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuICAgICAgICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgICAgLy8gbWVkaWEubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIC8vICAgTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMud2lkdGgpICogTWF0aC5QSSkgKiA3NSAtIDc1O1xuICAgIH0pXG5cbiAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLnkgPSB5ICogdGhpcy5zaXplcy5oZWlnaHQgLy8gcG91ciBwb3V2b2lyIHNjcm9sbCBzdXIgbCdlbnRpZXJldMOpIGRlIGxhIHBhZ2VcbiAgICAvLyB0aGlzLmdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjhiMzg5MjQwZjMxMzhlYTU5MjJcIikiXSwibmFtZXMiOlsiZWFjaCIsIm1hcCIsImdzYXAiLCJUcmFuc2Zvcm0iLCJQcmVmaXgiLCJNZWRpYSIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwiZWxlbWVudHNXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJkb2N1bWVudCIsImNlbnRlcmVkTWVkaWEiLCJpc0FuaW1hdGluZyIsInRyYW5zZm9ybVByZWZpeCIsImdyb3VwIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwiY29uc29sZSIsImxvZyIsIm1lZGlhIiwic2hvdyIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJpbm5lckhlaWdodCIsImRpcmVjdGlvbiIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJzdHlsZSIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJoZWlnaHQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9