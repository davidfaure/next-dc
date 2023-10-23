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
    this.transformPrefix = Prefix("transform");
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
/******/ 	__webpack_require__.h = () => ("220951de2e182262531d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ0YsS0FBSyxDQUFDbUMsUUFBUSxDQUFDWCxDQUFDLEdBQUdBLENBQUMsR0FBRyxJQUFJLENBQUNqQyxLQUFLLENBQUM2QyxNQUFNLEVBQUM7SUFDOUM7RUFDRjs7RUFFQUMsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDL0MsS0FBSyxDQUFDZ0QsV0FBVyxDQUFDLElBQUksQ0FBQ3RDLEtBQUssQ0FBQztFQUNwQztBQUNGOzs7Ozs7OztVQzNLQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9HYWxsZXJ5LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50c1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlclwiKVxuICAgIHRoaXMuZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMuY2VudGVyZWRNZWRpYSA9IG51bGxcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIHZlbG9jaXR5OiAwLjcsXG4gICAgICBsZXJwOiAwLjA0XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlTWVkaWFzKClcbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlTWVkaWFzKCkge1xuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5X19tZWRpYVwiKVxuXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAoXG4gICAgICB0aGlzLm1lZGlhc0VsZW1lbnRzLFxuICAgICAgKGVsZW1lbnQsIGluZGV4KSA9PlxuICAgICAgICBuZXcgTWVkaWEoe1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcbiAgICAgICAgfSlcbiAgICApXG4gIH1cblxuICBzaG93KCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcbiAgfVxuXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRzV3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIH1cblxuICBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC0gZGlzdGFuY2VcbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuICAvLyBnZXRDZW50ZXJlZEltYWdlQ2l0eU5hbWUoKSB7XG4gIC8vICAgbGV0IGNlbnRlcmVkTWVkaWEgPSBudWxsXG4gIC8vICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggV2ViR0wgbWVkaWEgKHBsYW5lcylcbiAgLy8gICBlYWNoKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gIC8vICAgICBjb25zdCBwbGFuZVBvc2l0aW9uID0gbWVkaWEubWVzaC5wb3NpdGlvbi54XG5cbiAgLy8gICAgIGNvbnN0IG1pbkJyZWFrUG9pbnQgPSBEZXRlY3Rpb24uaXNQaG9uZSgpID8gMC4wNCA6IDAuNFxuICAvLyAgICAgY29uc3QgbWF4QnJlYWtQb2ludCA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAwLjA2IDogMC42XG5cbiAgLy8gICAgIGlmIChEZXRlY3Rpb24uaXNUYWJsZXQoKSkge1xuICAvLyAgICAgICBpZiAoTWF0aC5hYnMocGxhbmVQb3NpdGlvbikgPiAwLjEgPCAwLjMpIHtcbiAgLy8gICAgICAgICBjZW50ZXJlZE1lZGlhID0gbWVkaWFcbiAgLy8gICAgICAgICByZXR1cm4gZmFsc2UgLy8gQnJlYWsgb3V0IG9mIHRoZSBsb2Rhc2ggZWFjaCBsb29wXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMocGxhbmVQb3NpdGlvbikgPiBtaW5CcmVha1BvaW50IDwgbWF4QnJlYWtQb2ludCkge1xuICAvLyAgICAgICBjZW50ZXJlZE1lZGlhID0gbWVkaWFcbiAgLy8gICAgICAgcmV0dXJuIGZhbHNlIC8vIEJyZWFrIG91dCBvZiB0aGUgbG9kYXNoIGVhY2ggbG9vcFxuICAvLyAgICAgfVxuICAvLyAgIH0pXG5cbiAgLy8gICBpZiAoY2VudGVyZWRNZWRpYSkge1xuICAvLyAgICAgbWFwKHRoaXMuY2l0eUVsZW1lbnQsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAvLyAgICAgICBpZiAoaW5kZXggPT09IGNlbnRlcmVkTWVkaWEuaW5kZXgpIHtcbiAgLy8gICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jaXR5RWxlbWVudEFjdGl2ZSlcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgbWFwKHRoaXMuY2l0eUVsZW1lbnQsIGVsZW1lbnQgPT4ge1xuICAvLyAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jaXR5RWxlbWVudEFjdGl2ZSlcbiAgLy8gICAgIH0pXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gKHNjcm9sbC5jdXJyZW50IC0gc2Nyb2xsLnRhcmdldCkgKiAwLjE1XG4gICAgY29uc3QgeSA9IHNjcm9sbC5jdXJyZW50IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG4gICAgY29uc3QgdmVsb2NpdHkgPSAwLjdcbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgIC8vIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gLXZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgLy8gdGhpcy5zY3JvbGwudmVsb2NpdHkgPSB2ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9XG5cbiAgICAvLyBBdXRvbWF0aWMgc2Nyb2xsIGhlcmVcbiAgICAvLyEgZGlzdGFuY2UgcG91ciBxdWUgw6dhIHJvdGF0ZSBwbHVzIHZpdGUgcXVhbmQgbCd1c2VyIHNjcm9sbFxuICAgIC8vIHRoaXMuc2Nyb2xsLnRhcmdldCAtPSB0aGlzLnNjcm9sbC52ZWxvY2l0eVxuICAgIC8vIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkaXN0YW5jZSAqIDAuNFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxuICAgICAgdGhpcy5zY3JvbGwubGVycFxuICAgIClcblxuICAgIHRoaXMuZ2FsbGVyeS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke1xuICAgICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID4gLTAuMDEgPyAwIDogdGhpcy5zY3JvbGwuY3VycmVudFxuICAgICAgfXB4KWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICAvLyBwaXhlbCBwZXJmZWN0IHBvdXIgbGEgZGlzcGFyaXRpb24gZGVzIGltYWdlcyBzdXIgbGUgY2Fyb3VzZWxcbiAgICAgIC8vIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDIgKyAwLjI1XG4gICAgICAvLyBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAvLyAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuICAgICAgLy8gICBpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgLy8gICAgIG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAvLyAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuICAgICAgLy8gICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAvLyAgICAgbWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG5cbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuICAgICAgLy8gbWVkaWEubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIC8vICAgTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMud2lkdGgpICogTWF0aC5QSSkgKiA3NSAtIDc1O1xuICAgIH0pXG5cbiAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLnkgPSB5ICogdGhpcy5zaXplcy5oZWlnaHQgLy8gcG91ciBwb3V2b2lyIHNjcm9sbCBzdXIgbCdlbnRpZXJldMOpIGRlIGxhIHBhZ2VcbiAgICAvLyB0aGlzLmdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjIwOTUxZGUyZTE4MjI2MjUzMWRcIikiXSwibmFtZXMiOlsiZWFjaCIsIm1hcCIsImdzYXAiLCJUcmFuc2Zvcm0iLCJNZWRpYSIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwiZWxlbWVudHNXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJkb2N1bWVudCIsImNlbnRlcmVkTWVkaWEiLCJpc0FuaW1hdGluZyIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsInN0YXJ0IiwidmVsb2NpdHkiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwic2hvdyIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInN0eWxlIiwicG9zaXRpb24iLCJoZWlnaHQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9