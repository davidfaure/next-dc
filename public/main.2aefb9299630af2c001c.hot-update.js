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
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_4__.Transform();
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
      const figure = element.querySelector(".gallery__media");
      const text = _data__WEBPACK_IMPORTED_MODULE_3__.data.gallery.find(item => item.id == element.getAttribute("data-index"));
      console.log(text, "TEXT");
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

    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
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
/******/ 	__webpack_require__.h = () => ("5d5c2a8d4d47984d0417")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYWVmYjkyOTk2MzBhZjJjMDAxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDUDtBQUNJO0FBQ0o7QUFDQTtBQUVZO0FBRXhCLE1BQU1PLE9BQU8sQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLFFBQVE7SUFBRUMsS0FBSztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUM7RUFBTSxDQUFDLEVBQUU7SUFDMUQsSUFBSSxDQUFDTCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDTSxlQUFlLEdBQUdOLE9BQU8sQ0FBQ08sYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBRXZFLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUV2RCxJQUFJLENBQUNOLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0ssYUFBYSxHQUFHLElBQUk7SUFDekIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsS0FBSztJQUV4QixJQUFJLENBQUNDLGVBQWUsR0FBR2pCLDZDQUFNLENBQUMsV0FBVyxDQUFDO0lBRTFDLElBQUksQ0FBQ2tCLEtBQUssR0FBRyxJQUFJbkIsMENBQVMsQ0FBQyxDQUFDO0lBRTVCLElBQUksQ0FBQ29CLE1BQU0sR0FBRztNQUNaQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUNu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S0FBSyxDQUFDMkQsV0FBVyxDQUFDLElBQUksQ0FBQ2xELEtBQUssQ0FBQztFQUNwQztBQUNGOzs7Ozs7OztVQzFMQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9HYWxsZXJ5LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9NZWRpYVwiXG5cbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudHNXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcblxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5jZW50ZXJlZE1lZGlhID0gbnVsbFxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgdmVsb2NpdHk6IDAuNyxcbiAgICAgIGxlcnA6IDAuMDRcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhXCIpXG5cbiAgICB0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQsIFwiRUxFTUVOVFwiKVxuXG4gICAgICBjb25zdCBmaWd1cmUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9fbWVkaWFcIilcblxuICAgICAgY29uc3QgdGV4dCA9IGRhdGEuZ2FsbGVyeS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpXG5cbiAgICAgIGNvbnNvbGUubG9nKHRleHQsIFwiVEVYVFwiKVxuXG4gICAgICBjb25zdCBtZWRpYSA9IG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1lZGlhXG4gICAgfSlcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudHNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIC8vIGdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpIHtcbiAgLy8gICBsZXQgY2VudGVyZWRNZWRpYSA9IG51bGxcbiAgLy8gICAvLyBMb29wIHRocm91Z2ggZWFjaCBXZWJHTCBtZWRpYSAocGxhbmVzKVxuICAvLyAgIGVhY2godGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcbiAgLy8gICAgIGNvbnN0IHBsYW5lUG9zaXRpb24gPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnhcblxuICAvLyAgICAgY29uc3QgbWluQnJlYWtQb2ludCA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAwLjA0IDogMC40XG4gIC8vICAgICBjb25zdCBtYXhCcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDYgOiAwLjZcblxuICAvLyAgICAgaWYgKERldGVjdGlvbi5pc1RhYmxldCgpKSB7XG4gIC8vICAgICAgIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IDAuMSA8IDAuMykge1xuICAvLyAgICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IG1pbkJyZWFrUG9pbnQgPCBtYXhCcmVha1BvaW50KSB7XG4gIC8vICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICByZXR1cm4gZmFsc2UgLy8gQnJlYWsgb3V0IG9mIHRoZSBsb2Rhc2ggZWFjaCBsb29wXG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIGlmIChjZW50ZXJlZE1lZGlhKSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgIGlmIChpbmRleCA9PT0gY2VudGVyZWRNZWRpYS5pbmRleCkge1xuICAvLyAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgZWxlbWVudCA9PiB7XG4gIC8vICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgLy8gY29uc3QgZGlzdGFuY2UgPSAoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwudGFyZ2V0KSAqIDAuMTVcblxuICAgIGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIC8vIGNvbnN0IHZlbG9jaXR5ID0gMC43XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgIC8vIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gLXZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgLy8gdGhpcy5zY3JvbGwudmVsb2NpdHkgPSB2ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9XG5cbiAgICAvLyBBdXRvbWF0aWMgc2Nyb2xsIGhlcmVcbiAgICAvLyEgZGlzdGFuY2UgcG91ciBxdWUgw6dhIHJvdGF0ZSBwbHVzIHZpdGUgcXVhbmQgbCd1c2VyIHNjcm9sbFxuICAgIC8vIHRoaXMuc2Nyb2xsLnRhcmdldCAtPSB0aGlzLnNjcm9sbC52ZWxvY2l0eVxuICAgIC8vIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkaXN0YW5jZSAqIDAuNFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxuICAgICAgdGhpcy5zY3JvbGwubGVycFxuICAgIClcblxuICAgIHRoaXMuZ2FsbGVyeS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke1xuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID4gLTAuMDEgPyAwIDogdGhpcy5zY3JvbGwuY3VycmVudFxuICAgICAgfXB4KWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICAvLyBwaXhlbCBwZXJmZWN0IHBvdXIgbGEgZGlzcGFyaXRpb24gZGVzIGltYWdlcyBzdXIgbGUgY2Fyb3VzZWxcbiAgICAgIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG4gICAgICAgIGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgKz0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG4gICAgICAgIGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgICAvLyBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgLy8gICBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy53aWR0aCkgKiBNYXRoLlBJKSAqIDc1IC0gNzU7XG4gICAgfSlcblxuICAgIHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IHkgKiB0aGlzLnNpemVzLmhlaWdodCAvLyBwb3VyIHBvdXZvaXIgc2Nyb2xsIHN1ciBsJ2VudGllcmV0w6kgZGUgbGEgcGFnZVxuICAgIC8vIHRoaXMuZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKClcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZDVjMmE4ZDRkNDc5ODRkMDQxN1wiKSJdLCJuYW1lcyI6WyJlYWNoIiwibWFwIiwiZ3NhcCIsIlRyYW5zZm9ybSIsIlByZWZpeCIsIk1lZGlhIiwiZGF0YSIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwiZWxlbWVudHNXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJkb2N1bWVudCIsImNlbnRlcmVkTWVkaWEiLCJpc0FuaW1hdGluZyIsInRyYW5zZm9ybVByZWZpeCIsImdyb3VwIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwiY29uc29sZSIsImxvZyIsImZpZ3VyZSIsInRleHQiLCJmaW5kIiwiaXRlbSIsImlkIiwiZ2V0QXR0cmlidXRlIiwibWVkaWEiLCJzaG93IiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInN0eWxlIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=