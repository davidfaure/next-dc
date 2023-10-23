self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Home/Gallery.js":
/*!***********************************************!*\
  !*** ./app/components/Canvas/Home/Gallery.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
      const text = _data__WEBPACK_IMPORTED_MODULE_3__.data.gallery.find(element => element.id === element.getAttribute("data-index"));
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

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((module) => {

const data = {
  hero: {
    title: "From the ground to your plate",
    image: "/img/hero.jpg"
  },
  description: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: "/img/quote.jpg"
  },
  gallery: [{
    id: 1,
    image: "/img/gallery-1.jpg",
    title: "Pesto verde basilic roquette",
    subTitle: "200ml"
  }, {
    id: 2,
    image: "/img/gallery-2.jpg",
    title: "Coffee bean",
    subTitle: "250ml"
  }, {
    id: 3,
    image: "/img/gallery-3.jpg",
    title: "Sunny vegetables",
    subTitle: "400ml"
  }, {
    id: 4,
    image: "/img/gallery-4.jpg",
    title: "Tomatos",
    subTitle: "350ml"
  }],
  quote: "We true believe in the future food habits",
  footer: {
    text: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    link: [{
      id: 1,
      href: "/about",
      text: "About us"
    }, {
      id: 2,
      href: "/products",
      text: "Products"
    }, {
      id: 3,
      href: "/approach",
      text: "Approach"
    }, {
      id: 4,
      href: "/contact",
      text: "Contacts"
    }],
    socials: [{
      id: 1,
      href: "https://www.facebook.com/?locale=fr_FR",
      text: "Facebook"
    }, {
      id: 2,
      href: "https://www.instagram.com/",
      text: "Instagram"
    }]
  }
};
module.exports = {
  data
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("600829e97753b6fc4e37")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYTVhMGY2YjVhYjEzZGQwMDJiOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDUDtBQUNJO0FBQ0o7QUFDQTtBQUVZO0FBRXhCLE1BQU1PLE9BQU8sQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLFFBQVE7SUFBRUMsS0FBSztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUM7RUFBTSxDQUFDLEVBQUU7SUFDMUQsSUFBSSxDQUFDTCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDTSxlQUFlLEdBQUdOLE9BQU8sQ0FBQ08sYUFBYSxDQUFDLHlCQUF5QixDQUFDO0lBRXZFLElBQUksQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUV2RCxJQUFJLENBQUNOLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0ssYUFBYSxHQUFHLElBQUk7SUFDekIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsS0FBSztJQUV4QixJQUFJLENBQUNDLGVBQWUsR0FBR2pCLDZDQUFNLENBQUMsV0FBVyxDQUFDO0lBRTFDLElBQUksQ0FBQ2tCLEtBQUssR0FBRyxJQUFJbkIsMENBQVMsQ0FBQyxDQUFDO0lBRTVCLElBQUksQ0FBQ29CLE1BQU0sR0FBRztNQUNaQyxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNUQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxRQUFRLEVBQUUsR0FBRztNQUNiQyxJQUFJLEVBQUU7SUFDUixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUNu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QyxFQUNEO01BQ0VFLEVBQUUsRUFBRSxDQUFDO01BQ0x5QyxJQUFJLEVBQUUsVUFBVTtNQUNoQjNDLElBQUksRUFBRTtJQUNSLENBQUMsQ0FDRjtJQUNENEMsT0FBTyxFQUFFLENBQ1A7TUFDRTFDLEVBQUUsRUFBRSxDQUFDO01BQ0x5QyxJQUFJLEVBQUUsd0NBQXdDO01BQzlDM0MsSUFBSSxFQUFFO0lBQ1IsQ0FBQyxFQUNEO01BQ0VFLEVBQUUsRUFBRSxDQUFDO01BQ0x5QyxJQUFJLEVBQUUsNEJBQTRCO01BQ2xDM0MsSUFBSSxFQUFFO0lBQ1IsQ0FBQztFQUVMO0FBQ0YsQ0FBQztBQUVENkMsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFBRTVFO0FBQUssQ0FBQzs7Ozs7Ozs7VUMzRXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2RhdGEuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCwgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCJcblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50c1dyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9fZ2FsbGVyeV9fd3JhcHBlclwiKVxuXG4gICAgdGhpcy5nYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5XCIpXG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLmNlbnRlcmVkTWVkaWEgPSBudWxsXG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICB2ZWxvY2l0eTogMC43LFxuICAgICAgbGVycDogMC4wNFxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZU1lZGlhcygpXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhcygpIHtcbiAgICB0aGlzLm1lZGlhc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeV9fbWVkaWFcIilcblxuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudCwgXCJFTEVNRU5UXCIpXG5cbiAgICAgIGNvbnN0IHRleHQgPSBkYXRhLmdhbGxlcnkuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSlcblxuICAgICAgY29uc29sZS5sb2codGV4dCwgXCJURVhUXCIpXG5cbiAgICAgIGNvbnN0IG1lZGlhID0gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGluZGV4LFxuICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWVkaWFcbiAgICB9KVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50c1dyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuICAgIHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuY3VycmVudCAtIGRpc3RhbmNlXG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgLy8gZ2V0Q2VudGVyZWRJbWFnZUNpdHlOYW1lKCkge1xuICAvLyAgIGxldCBjZW50ZXJlZE1lZGlhID0gbnVsbFxuICAvLyAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIFdlYkdMIG1lZGlhIChwbGFuZXMpXG4gIC8vICAgZWFjaCh0aGlzLm1lZGlhcywgbWVkaWEgPT4ge1xuICAvLyAgICAgY29uc3QgcGxhbmVQb3NpdGlvbiA9IG1lZGlhLm1lc2gucG9zaXRpb24ueFxuXG4gIC8vICAgICBjb25zdCBtaW5CcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDQgOiAwLjRcbiAgLy8gICAgIGNvbnN0IG1heEJyZWFrUG9pbnQgPSBEZXRlY3Rpb24uaXNQaG9uZSgpID8gMC4wNiA6IDAuNlxuXG4gIC8vICAgICBpZiAoRGV0ZWN0aW9uLmlzVGFibGV0KCkpIHtcbiAgLy8gICAgICAgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gMC4xIDwgMC4zKSB7XG4gIC8vICAgICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgICAgcmV0dXJuIGZhbHNlIC8vIEJyZWFrIG91dCBvZiB0aGUgbG9kYXNoIGVhY2ggbG9vcFxuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKHBsYW5lUG9zaXRpb24pID4gbWluQnJlYWtQb2ludCA8IG1heEJyZWFrUG9pbnQpIHtcbiAgLy8gICAgICAgY2VudGVyZWRNZWRpYSA9IG1lZGlhXG4gIC8vICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuXG4gIC8vICAgaWYgKGNlbnRlcmVkTWVkaWEpIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgLy8gICAgICAgaWYgKGluZGV4ID09PSBjZW50ZXJlZE1lZGlhLmluZGV4KSB7XG4gIC8vICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIG1hcCh0aGlzLmNpdHlFbGVtZW50LCBlbGVtZW50ID0+IHtcbiAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2l0eUVsZW1lbnRBY3RpdmUpXG4gIC8vICAgICB9KVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICAvLyBjb25zdCBkaXN0YW5jZSA9IChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC50YXJnZXQpICogMC4xNVxuXG4gICAgY29uc3QgeSA9IHNjcm9sbC5jdXJyZW50IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgLy8gY29uc3QgdmVsb2NpdHkgPSAwLjdcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgLy8gdGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtdmVsb2NpdHkgLy8gZm9yIGF1dG8gc2Nyb2xsaW5nXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwibGVmdFwiXG4gICAgICAvLyB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IHZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH1cblxuICAgIC8vIEF1dG9tYXRpYyBzY3JvbGwgaGVyZVxuICAgIC8vISBkaXN0YW5jZSBwb3VyIHF1ZSDDp2Egcm90YXRlIHBsdXMgdml0ZSBxdWFuZCBsJ3VzZXIgc2Nyb2xsXG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0IC09IHRoaXMuc2Nyb2xsLnZlbG9jaXR5XG4gICAgLy8gdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRpc3RhbmNlICogMC40XG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICB0aGlzLnNjcm9sbC5sZXJwXG4gICAgKVxuXG4gICAgdGhpcy5nYWxsZXJ5LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgICB9cHgpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIHBpeGVsIHBlcmZlY3QgcG91ciBsYSBkaXNwYXJpdGlvbiBkZXMgaW1hZ2VzIHN1ciBsZSBjYXJvdXNlbFxuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAgIC8vIG1lZGlhLm1lc2gucG9zaXRpb24ueSA9XG4gICAgICAvLyAgIE1hdGguY29zKChtZWRpYS5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLndpZHRoKSAqIE1hdGguUEkpICogNzUgLSA3NTtcbiAgICB9KVxuXG4gICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0IC8vIHBvdXIgcG91dm9pciBzY3JvbGwgc3VyIGwnZW50aWVyZXTDqSBkZSBsYSBwYWdlXG4gICAgLy8gdGhpcy5nZXRDZW50ZXJlZEltYWdlQ2l0eU5hbWUoKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cbn1cbiIsImNvbnN0IGRhdGEgPSB7XG4gIGhlcm86IHtcbiAgICB0aXRsZTogXCJGcm9tIHRoZSBncm91bmQgdG8geW91ciBwbGF0ZVwiLFxuICAgIGltYWdlOiBcIi9pbWcvaGVyby5qcGdcIlxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIHRleHQ6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVuYyB2dWxwdXRhdGUgbGliZXJvIGV0IHZlbGl0IGludGVyZHVtLCBhYyBhbGlxdWV0IG9kaW8gbWF0dGlzLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuXCIsXG4gICAgaW1hZ2U6IFwiL2ltZy9xdW90ZS5qcGdcIlxuICB9LFxuICBnYWxsZXJ5OiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBpbWFnZTogXCIvaW1nL2dhbGxlcnktMS5qcGdcIixcbiAgICAgIHRpdGxlOiBcIlBlc3RvIHZlcmRlIGJhc2lsaWMgcm9xdWV0dGVcIixcbiAgICAgIHN1YlRpdGxlOiBcIjIwMG1sXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgaW1hZ2U6IFwiL2ltZy9nYWxsZXJ5LTIuanBnXCIsXG4gICAgICB0aXRsZTogXCJDb2ZmZWUgYmVhblwiLFxuICAgICAgc3ViVGl0bGU6IFwiMjUwbWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICBpbWFnZTogXCIvaW1nL2dhbGxlcnktMy5qcGdcIixcbiAgICAgIHRpdGxlOiBcIlN1bm55IHZlZ2V0YWJsZXNcIixcbiAgICAgIHN1YlRpdGxlOiBcIjQwMG1sXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgaW1hZ2U6IFwiL2ltZy9nYWxsZXJ5LTQuanBnXCIsXG4gICAgICB0aXRsZTogXCJUb21hdG9zXCIsXG4gICAgICBzdWJUaXRsZTogXCIzNTBtbFwiXG4gICAgfVxuICBdLFxuICBxdW90ZTogXCJXZSB0cnVlIGJlbGlldmUgaW4gdGhlIGZ1dHVyZSBmb29kIGhhYml0c1wiLFxuICBmb290ZXI6IHtcbiAgICB0ZXh0OiBcIlNvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bmMgdnVscHV0YXRlIGxpYmVybyBldCB2ZWxpdCBpbnRlcmR1bSwgYWMgYWxpcXVldCBvZGlvIG1hdHRpcy5cIixcbiAgICBsaW5rOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBocmVmOiBcIi9hYm91dFwiLFxuICAgICAgICB0ZXh0OiBcIkFib3V0IHVzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBocmVmOiBcIi9wcm9kdWN0c1wiLFxuICAgICAgICB0ZXh0OiBcIlByb2R1Y3RzXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBocmVmOiBcIi9hcHByb2FjaFwiLFxuICAgICAgICB0ZXh0OiBcIkFwcHJvYWNoXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBocmVmOiBcIi9jb250YWN0XCIsXG4gICAgICAgIHRleHQ6IFwiQ29udGFjdHNcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc29jaWFsczogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vP2xvY2FsZT1mcl9GUlwiLFxuICAgICAgICB0ZXh0OiBcIkZhY2Vib29rXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIsXG4gICAgICAgIHRleHQ6IFwiSW5zdGFncmFtXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGRhdGEgfVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjAwODI5ZTk3NzUzYjZmYzRlMzdcIikiXSwibmFtZXMiOlsiZWFjaCIsIm1hcCIsImdzYXAiLCJUcmFuc2Zvcm0iLCJQcmVmaXgiLCJNZWRpYSIsImRhdGEiLCJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsImVsZW1lbnRzV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJjZW50ZXJlZE1lZGlhIiwiaXNBbmltYXRpbmciLCJ0cmFuc2Zvcm1QcmVmaXgiLCJncm91cCIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzdGFydCIsInZlbG9jaXR5IiwibGVycCIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZmluZCIsImlkIiwiZ2V0QXR0cmlidXRlIiwibWVkaWEiLCJzaG93IiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInN0eWxlIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsImhlcm8iLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJzdWJUaXRsZSIsInF1b3RlIiwiZm9vdGVyIiwibGluayIsImhyZWYiLCJzb2NpYWxzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=