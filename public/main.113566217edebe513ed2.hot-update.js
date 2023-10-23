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
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");
/* harmony import */ var _classes_Detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/Detection */ "./app/classes/Detection.js");





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
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_3__.Transform();
    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      velocity: _classes_Detection__WEBPACK_IMPORTED_MODULE_2__["default"].isPhone() ? 0.2 : 0.7,
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
    const velocity = _classes_Detection__WEBPACK_IMPORTED_MODULE_2__["default"].isPhone() ? 0.2 : 0.7;
    if (this.scroll.current < this.scroll.target) {
      this.direction = "right";
      this.scroll.velocity = -velocity; // for auto scrolling
    } else if (this.scroll.current > this.scroll.target) {
      this.direction = "left";
      this.scroll.velocity = velocity; // for auto scrolling
    }

    // Automatic scroll here
    //! distance pour que ça rotate plus vite quand l'user scroll
    this.scroll.target -= this.scroll.velocity;
    this.scroll.target += distance * 0.4;
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
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

/***/ }),

/***/ "./app/components/Canvas/Home/index.js":
/*!*********************************************!*\
  !*** ./app/components/Canvas/Home/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Plane.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Home/Media.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/math */ "./app/utils/math.js");
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gallery */ "./app/components/Canvas/Home/Gallery.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor({
    gl,
    scene,
    sizes,
    renderer,
    camera
  }) {
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.renderer = renderer;
    this.camera = camera;
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_5__.Transform();
    this.group.setParent(scene);

    // this.transformPrefix = Prefix("transform")
    // this.gallery = document.querySelector(".home__gallery")
    // this.galleryElement = document.querySelector(".home__gallery__wrapper")
    // this.mediasElements = document.querySelectorAll(".home__gallery__media__image")

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    };
    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,
      velocity: 1
    };
    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
    };
    this.createGeometry();
    this.createGallery();
    this.show();
    this.onResize({
      sizes: this.sizes
    });
  }
  createGeometry() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_6__.Plane(this.gl, {
      heightSegments: 20,
      widthSegments: 20
    });
  }
  createGallery() {
    // this.medias = map(this.mediasElements, (element, index) => {
    //   return new Media({
    //     element,
    //     geometry: this.geometry,
    //     gl: this.gl,
    //     index,
    //     scene: this.group,
    //     sizes: this.sizes,
    //     renderer: this.renderer,
    //     camera: this.camera
    //   })
    // })
    this.galleriesElement = document.querySelectorAll(".home__gallery");
    this.galleries = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleriesElement, (element, index) => new _Gallery__WEBPACK_IMPORTED_MODULE_4__["default"]({
      element,
      geometry: this.geometry,
      index,
      gl: this.gl,
      scene: this.group,
      sizes: this.sizes
    }));
  }

  /**
   * Animations.
   */
  show() {
    // this.group.setParent(this.scene)
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.show());
  }
  hide() {
    // this.group.setParent(null)
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.hide());
  }
  onResize(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.onResize(event));
  }
  onTouchDown(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.onTouchDown(event));
  }
  onTouchMove(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.onTouchMove(event));
  }
  onTouchUp(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.onTouchUp(event));
  }

  // onResize(event) {
  //   this.bounds = this.galleryElement.getBoundingClientRect()

  //   this.sizes = event.sizes

  //   this.gallerySizes = {
  //     height: (this.bounds.height / window.innerHeight) * this.sizes.height,
  //     width: (this.bounds.width / window.innerWidth) * this.sizes.width
  //   }

  //   this.scroll.last = this.scene.target = 0
  //   map(this.medias, media => media.onResize(event, this.scroll))

  //   this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth
  // }

  // onTouchDown({ x, y }) {
  //   this.scroll.last = this.scroll.current
  // }

  // onTouchMove({ x, y }) {
  //   const distance = x.start - x.end

  //   this.scroll.target = this.scroll.last - distance // *0.8 pour ralentir
  // }

  // onTouchUp({ x, y }) {}

  // onWheel({ pixelY }) {}

  update(scroll) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.update(scroll));
  }
  destroy() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.map)(this.galleries, gallery => gallery.destroy());
  }

  // update() {
  //   if (!this.bounds) return

  //   console.log("ICI")

  //   this.speed.current = lerp(this.speed.current, this.speed.target, this.speed.lerp)
  //   this.scroll.target = gsap.utils.clamp(-this.scroll.limit, 0, this.scroll.target)
  //   this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.lerp)

  //   this.speed.target = (this.scroll.target - this.scroll.current) * 0.0018 // ou 0.001

  //   this.gallery.style[this.transformPrefix] = `translateX(${
  //     this.scroll.current > -0.01 ? 0 : this.scroll.current
  //   }px)`; // prettier-ignore

  //   if (this.scroll.last < this.scroll.current) {
  //     this.x.direction = "right"
  //   } else if (this.scroll.last > this.scroll.current) {
  //     this.x.direction = "left"
  //   }

  //   this.scroll.last = this.scroll.current

  //   map(this.medias, media => {
  //     media.update(this.scroll.current, this.speed.current)
  //   })
  // }

  // /**
  //  * Destroy.
  //  */
  // destroy() {
  //   this.scene.removeChild(this.group)
  // }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f30f721f927335e57a13")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQSxPQUFPLENBQUNoQyxXQUFXLENBQUNOLEtBQUssQ0FBQyxDQUFDO0VBQzVEO0VBRUFTLFdBQVdBLENBQUNULEtBQUssRUFBRTtJQUNqQmxDLDJDQUFHLENBQUMsSUFBSSxDQUFDdUUsU0FBUyxFQUFFQyxPQUFPLElBQUlBLE9BQU8sQ0FBQzdCLFdBQVcsQ0FBQ1QsS0FBSyxDQUFDLENBQUM7RUFDNUQ7RUFFQVksU0FBU0EsQ0FBQ1osS0FBSyxFQUFFO0lBQ2ZsQywyQ0FBRyxDQUFDLElBQUksQ0FBQ3VFLFNBQVMsRUFBRUMsT0FBTyxJQUFJQSxPQUFPLENBQUMxQixTQUFTLENBQUNaLEtBQUssQ0FBQyxDQUFDO0VBQzFEOztFQUVBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7O0VBRUE7O0VBRUFhLE1BQU1BLENBQUM3QixNQUFNLEVBQUU7SUFDYmxCLDJDQUFHLENBQUMsSUFBSSxDQUFDdUUsU0FBUyxFQUFFQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ3pCLE1BQU0sQ0FBQzdCLE1BQU0sQ0FBQyxDQUFDO0VBQ3hEO0VBRUF3QyxPQUFPQSxDQUFBLEVBQUc7SUFDUjFELDJDQUFHLENBQUMsSUFBSSxDQUFDdUUsU0FBUyxFQUFFQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNuRDs7RUFFQTtFQUNBOztFQUVBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRjs7Ozs7Ozs7VUM5TEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCwgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuaW1wb3J0IERldGVjdGlvbiBmcm9tIFwiLi4vLi4vLi4vY2xhc3Nlcy9EZXRlY3Rpb25cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnRzV3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5X193cmFwcGVyXCIpXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5jZW50ZXJlZE1lZGlhID0gbnVsbFxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICB2ZWxvY2l0eTogRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMiA6IDAuNyxcbiAgICAgIGxlcnA6IDAuMDRcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVNZWRpYXMoKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gIH1cblxuICBjcmVhdGVNZWRpYXMoKSB7XG4gICAgdGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlfX21lZGlhXCIpXG5cbiAgICB0aGlzLm1lZGlhcyA9IG1hcChcbiAgICAgIHRoaXMubWVkaWFzRWxlbWVudHMsXG4gICAgICAoZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICAgIG5ldyBNZWRpYSh7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBnbDogdGhpcy5nbCxcbiAgICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgICBzaXplczogdGhpcy5zaXplc1xuICAgICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudHNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIC8vIGdldENlbnRlcmVkSW1hZ2VDaXR5TmFtZSgpIHtcbiAgLy8gICBsZXQgY2VudGVyZWRNZWRpYSA9IG51bGxcbiAgLy8gICAvLyBMb29wIHRocm91Z2ggZWFjaCBXZWJHTCBtZWRpYSAocGxhbmVzKVxuICAvLyAgIGVhY2godGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcbiAgLy8gICAgIGNvbnN0IHBsYW5lUG9zaXRpb24gPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnhcblxuICAvLyAgICAgY29uc3QgbWluQnJlYWtQb2ludCA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAwLjA0IDogMC40XG4gIC8vICAgICBjb25zdCBtYXhCcmVha1BvaW50ID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDAuMDYgOiAwLjZcblxuICAvLyAgICAgaWYgKERldGVjdGlvbi5pc1RhYmxldCgpKSB7XG4gIC8vICAgICAgIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IDAuMSA8IDAuMykge1xuICAvLyAgICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICAgIHJldHVybiBmYWxzZSAvLyBCcmVhayBvdXQgb2YgdGhlIGxvZGFzaCBlYWNoIGxvb3BcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhwbGFuZVBvc2l0aW9uKSA+IG1pbkJyZWFrUG9pbnQgPCBtYXhCcmVha1BvaW50KSB7XG4gIC8vICAgICAgIGNlbnRlcmVkTWVkaWEgPSBtZWRpYVxuICAvLyAgICAgICByZXR1cm4gZmFsc2UgLy8gQnJlYWsgb3V0IG9mIHRoZSBsb2Rhc2ggZWFjaCBsb29wXG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyAgIGlmIChjZW50ZXJlZE1lZGlhKSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgIGlmIChpbmRleCA9PT0gY2VudGVyZWRNZWRpYS5pbmRleCkge1xuICAvLyAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBtYXAodGhpcy5jaXR5RWxlbWVudCwgZWxlbWVudCA9PiB7XG4gIC8vICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNpdHlFbGVtZW50QWN0aXZlKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSAoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwudGFyZ2V0KSAqIDAuMTVcbiAgICBjb25zdCB5ID0gc2Nyb2xsLmN1cnJlbnQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICBjb25zdCB2ZWxvY2l0eSA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAwLjIgOiAwLjdcbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gLXZlbG9jaXR5IC8vIGZvciBhdXRvIHNjcm9sbGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIlxuICAgICAgdGhpcy5zY3JvbGwudmVsb2NpdHkgPSB2ZWxvY2l0eSAvLyBmb3IgYXV0byBzY3JvbGxpbmdcbiAgICB9XG5cbiAgICAvLyBBdXRvbWF0aWMgc2Nyb2xsIGhlcmVcbiAgICAvLyEgZGlzdGFuY2UgcG91ciBxdWUgw6dhIHJvdGF0ZSBwbHVzIHZpdGUgcXVhbmQgbCd1c2VyIHNjcm9sbFxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCAtPSB0aGlzLnNjcm9sbC52ZWxvY2l0eVxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkaXN0YW5jZSAqIDAuNFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxuICAgICAgdGhpcy5zY3JvbGwubGVycFxuICAgIClcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgLy8gcGl4ZWwgcGVyZmVjdCBwb3VyIGxhIGRpc3Bhcml0aW9uIGRlcyBpbWFnZXMgc3VyIGxlIGNhcm91c2VsXG4gICAgICBjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyICsgMC4yNVxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cbiAgICAgICAgaWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuICAgICAgICAgIG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICAgIC8vIG1lZGlhLm1lc2gucG9zaXRpb24ueSA9XG4gICAgICAvLyAgIE1hdGguY29zKChtZWRpYS5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLndpZHRoKSAqIE1hdGguUEkpICogNzUgLSA3NTtcbiAgICB9KVxuXG4gICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0IC8vIHBvdXIgcG91dm9pciBzY3JvbGwgc3VyIGwnZW50aWVyZXTDqSBkZSBsYSBwYWdlXG4gICAgLy8gdGhpcy5nZXRDZW50ZXJlZEltYWdlQ2l0eU5hbWUoKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG4gIH1cbn1cbiIsImltcG9ydCB7IFRyYW5zZm9ybSwgUGxhbmUgfSBmcm9tIFwib2dsXCJcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIlxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21hdGhcIlxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4vR2FsbGVyeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCByZW5kZXJlciwgY2FtZXJhIH0pIHtcbiAgICB0aGlzLmdsID0gZ2xcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYVxuXG4gICAgdGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG4gICAgLy8gdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcbiAgICAvLyB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlcIilcbiAgICAvLyB0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5X193cmFwcGVyXCIpXG4gICAgLy8gdGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlXCIpXG5cbiAgICB0aGlzLnggPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICBsZXJwOiAwLjEsXG4gICAgICB2ZWxvY2l0eTogMVxuICAgIH1cblxuICAgIHRoaXMuc3BlZWQgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGVycDogMC4xXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVHZW9tZXRyeSgpXG4gICAgdGhpcy5jcmVhdGVHYWxsZXJ5KClcbiAgICB0aGlzLnNob3coKVxuXG4gICAgdGhpcy5vblJlc2l6ZSh7XG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wsIHtcbiAgICAgIGhlaWdodFNlZ21lbnRzOiAyMCxcbiAgICAgIHdpZHRoU2VnbWVudHM6IDIwXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgLy8gdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgLy8gICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAvLyAgICAgZWxlbWVudCxcbiAgICAvLyAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgLy8gICAgIGdsOiB0aGlzLmdsLFxuICAgIC8vICAgICBpbmRleCxcbiAgICAvLyAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgLy8gICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgIC8vICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICAvLyAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYVxuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICAgIHRoaXMuZ2FsbGVyaWVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nYWxsZXJpZXMgPSBtYXAoXG4gICAgICB0aGlzLmdhbGxlcmllc0VsZW1lbnQsXG4gICAgICAoZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICAgIG5ldyBHYWxsZXJ5KHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBzaG93KCkge1xuICAgIC8vIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuc2hvdygpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICAvLyB0aGlzLmdyb3VwLnNldFBhcmVudChudWxsKVxuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmhpZGUoKSlcbiAgfVxuXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25SZXNpemUoZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoRG93bihldmVudCkpXG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hNb3ZlKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hVcChldmVudCkpXG4gIH1cblxuICAvLyBvblJlc2l6ZShldmVudCkge1xuICAvLyAgIHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIC8vICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgLy8gICB0aGlzLmdhbGxlcnlTaXplcyA9IHtcbiAgLy8gICAgIGhlaWdodDogKHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiB0aGlzLnNpemVzLmhlaWdodCxcbiAgLy8gICAgIHdpZHRoOiAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG4gIC8vICAgfVxuXG4gIC8vICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2NlbmUudGFyZ2V0ID0gMFxuICAvLyAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuICAvLyAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG4gIC8vIH1cblxuICAvLyBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAvLyAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG4gIC8vIH1cblxuICAvLyBvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuICAvLyAgIGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cbiAgLy8gICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2UgLy8gKjAuOCBwb3VyIHJhbGVudGlyXG4gIC8vIH1cblxuICAvLyBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgLy8gb25XaGVlbCh7IHBpeGVsWSB9KSB7fVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoc2Nyb2xsKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuZGVzdHJveSgpKVxuICB9XG5cbiAgLy8gdXBkYXRlKCkge1xuICAvLyAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG4gIC8vICAgY29uc29sZS5sb2coXCJJQ0lcIilcblxuICAvLyAgIHRoaXMuc3BlZWQuY3VycmVudCA9IGxlcnAodGhpcy5zcGVlZC5jdXJyZW50LCB0aGlzLnNwZWVkLnRhcmdldCwgdGhpcy5zcGVlZC5sZXJwKVxuICAvLyAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGdzYXAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG4gIC8vICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGxlcnAodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuXG4gIC8vICAgdGhpcy5zcGVlZC50YXJnZXQgPSAodGhpcy5zY3JvbGwudGFyZ2V0IC0gdGhpcy5zY3JvbGwuY3VycmVudCkgKiAwLjAwMTggLy8gb3UgMC4wMDFcblxuICAvLyAgIHRoaXMuZ2FsbGVyeS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke1xuICAvLyAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA+IC0wLjAxID8gMCA6IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgLy8gICB9cHgpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgLy8gICBpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcbiAgLy8gICAgIHRoaXMueC5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgLy8gICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG4gIC8vICAgICB0aGlzLnguZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgLy8gICB9XG5cbiAgLy8gICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG4gIC8vICAgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiB7XG4gIC8vICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zcGVlZC5jdXJyZW50KVxuICAvLyAgIH0pXG4gIC8vIH1cblxuICAvLyAvKipcbiAgLy8gICogRGVzdHJveS5cbiAgLy8gICovXG4gIC8vIGRlc3Ryb3koKSB7XG4gIC8vICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuICAvLyB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMzBmNzIxZjkyNzMzNWU1N2ExM1wiKSJdLCJuYW1lcyI6WyJlYWNoIiwibWFwIiwiZ3NhcCIsIlRyYW5zZm9ybSIsIk1lZGlhIiwiRGV0ZWN0aW9uIiwiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJlbGVtZW50c1dyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2VudGVyZWRNZWRpYSIsImlzQW5pbWF0aW5nIiwiZ3JvdXAiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0Iiwic3RhcnQiLCJ2ZWxvY2l0eSIsImlzUGhvbmUiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwic2hvdyIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJoZWlnaHQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJQbGFuZSIsIlByZWZpeCIsInJlbmRlcmVyIiwiY2FtZXJhIiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJoZWlnaHRTZWdtZW50cyIsIndpZHRoU2VnbWVudHMiLCJnYWxsZXJpZXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnYWxsZXJpZXMiLCJnYWxsZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==