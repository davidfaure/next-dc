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
      velocity: 0.7,
      lerp: 0.04
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
/******/ 	__webpack_require__.h = () => ("490f86cfded357dbf8f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMzkyNWE5NzZlZjJjODEyMzE3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDUDtBQUNJO0FBQ0o7QUFDQTtBQUVZO0FBRXhCLE1BQU1PLE9BQU8sQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLFFBQVE7SUFBRUMsS0FBSztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUMsS0FBSztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNwRSxJQUFJLENBQUNOLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNPLGVBQWUsR0FBR1AsT0FBTyxDQUFDUSxhQUFhLENBQUMseUJBQXlCLENBQUM7SUFFdkUsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0YsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBRXZELElBQUksQ0FBQ1AsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFFeEIsSUFBSSxDQUFDSyxlQUFlLEdBQUdoQiw2Q0FBTSxDQUFDLFdBQVcsQ0FBQztJQUUxQyxJQUFJLENBQUNpQixLQUFLLEdBQUcsSUFBSWxCLDBDQUFTLENBQUMsQ0FBQztJQUU1QixJQUFJLENBQUNtQixNQUFNLEdBQUc7TUFDWkMsT0FBTyxFQUFFLENBQUM7TUFDVkMsTUFBTSxFQUFFLENBQUM7TUFDVEMsS0FBSyxFQUFFLENBQUM7TUFDUkMsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUNELElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDUCxLQUFLLENB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SyxDQUFDO0VBQ3BDO0FBQ0Y7Ozs7Ozs7O1VDdExBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCwgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudHNXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlfX3dyYXBwZXJcIilcblxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICB2ZWxvY2l0eTogMC43LFxuICAgICAgbGVycDogMC4wNFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZU1lZGlhcygpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhcygpIHtcbiAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeV9fbWVkaWFcIilcblxuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dCA9IGRhdGEuZ2FsbGVyeS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSkpXG5cbiAgICAgIGNvbnN0IG1lZGlhID0gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGluZGV4LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgICAgICB0aXRsZTogdGV4dCAmJiB0ZXh0LnRpdGxlLFxuICAgICAgICBzdWJUaXRsZTogdGV4dCAmJiB0ZXh0LnN1YlRpdGxlLFxuICAgICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlclxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG1lZGlhXG4gICAgfSlcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudHNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIC8vIGdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpIHtcbiAgLy8gICBsZXQgY2VudGVyZWRNZWRpYSA9IG51bGxcbiAgLy8gICAvLyBMb29wIHRocm91Z2ggZWFjaCBXZWJHTCBtZWRpYSAocGxhbmVzKVxuICAvLyAgIGVhY2godGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcbiAgLy8gICAgIGNvbnN0IHBsYW5lUG9zaXRpb24gPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnhcblxuICAvLyAgICAgY29uc3QgbWluQnJlYWtQb2ludCA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAwLjA0IDogMC40XG4gIC8vICAgICBjb25zdCBtYXhCcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDYgOiAwLjZcblxuICAvLyAgICAgaWYgKERldGVjdGlvbi5pc1RhYmxldCgpKSB7XG4gIC8vICAgICAgIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IDAuMSA8IDAuMykge1xuICAvLyAgICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IG1pbkJyZWFrUG9pbnQgPCBtYXhCcmVha1BvaW50KSB7XG4gIC8vICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICByZXR1cm4gZmFsc2UgLy8gQnJlYWsgb3V0IG9mIHRoZSBsb2Rhc2ggZWFjaCBsb29wXG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIGlmIChjZW50ZXJlZE1lZGlhKSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgIGlmIChpbmRleCA9PT0gY2VudGVyZWRNZWRpYS5pbmRleCkge1xuICAvLyAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgZWxlbWVudCA9PiB7XG4gIC8vICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgLy8gY29uc3QgZGlzdGFuY2UgPSAoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwudGFyZ2V0KSAqIDAuMTVcblxuICAgIGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuICAgIC8vIGNvbnN0IHZlbG9jaXR5ID0gMC43XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgIC8vIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gLXZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgLy8gdGhpcy5zY3JvbGwudmVsb2NpdHkgPSB2ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9XG5cbiAgICAvLyBBdXRvbWF0aWMgc2Nyb2xsIGhlcmVcbiAgICAvLyEgZGlzdGFuY2UgcG91ciBxdWUgw6dhIHJvdGF0ZSBwbHVzIHZpdGUgcXVhbmQgbCd1c2VyIHNjcm9sbFxuICAgIC8vIHRoaXMuc2Nyb2xsLnRhcmdldCAtPSB0aGlzLnNjcm9sbC52ZWxvY2l0eVxuICAgIC8vIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkaXN0YW5jZSAqIDAuNFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxuICAgICAgdGhpcy5zY3JvbGwubGVycFxuICAgIClcblxuICAgIHRoaXMuZ2FsbGVyeS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke1xuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID4gLTAuMDEgPyAwIDogdGhpcy5zY3JvbGwuY3VycmVudFxuICAgICAgfXB4KWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICAvLyBwaXhlbCBwZXJmZWN0IHBvdXIgbGEgZGlzcGFyaXRpb24gZGVzIGltYWdlcyBzdXIgbGUgY2Fyb3VzZWxcbiAgICAgIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG4gICAgICAgIGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgKz0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG4gICAgICAgIGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG4gICAgICAvLyBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgLy8gICBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy53aWR0aCkgKiBNYXRoLlBJKSAqIDc1IC0gNzU7XG4gICAgfSlcblxuICAgIHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IHkgKiB0aGlzLnNpemVzLmhlaWdodCAvLyBwb3VyIHBvdXZvaXIgc2Nyb2xsIHN1ciBsJ2VudGllcmV0w6kgZGUgbGEgcGFnZVxuICAgIC8vIHRoaXMuZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKClcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0OTBmODZjZmRlZDM1N2RiZjhmOFwiKSJdLCJuYW1lcyI6WyJlYWNoIiwibWFwIiwiZ3NhcCIsIlRyYW5zZm9ybSIsIlByZWZpeCIsIk1lZGlhIiwiZGF0YSIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJlbGVtZW50c1dyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsImRvY3VtZW50IiwidHJhbnNmb3JtUHJlZml4IiwiZ3JvdXAiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0Iiwic3RhcnQiLCJ2ZWxvY2l0eSIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJzZXRQYXJlbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJ0ZXh0IiwiZmluZCIsIml0ZW0iLCJpZCIsIk51bWJlciIsImdldEF0dHJpYnV0ZSIsIm1lZGlhIiwidGl0bGUiLCJzdWJUaXRsZSIsInNob3ciLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiaW5uZXJIZWlnaHQiLCJkaXJlY3Rpb24iLCJ1dGlscyIsImludGVycG9sYXRlIiwic3R5bGUiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiaGVpZ2h0IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==