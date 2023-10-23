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
      velocity: 0.5,
      lerp: 0.04
    };
    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
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
  update(scroll) {
    if (!this.bounds) return;
    const distance = (scroll.current - scroll.target) * 0.15;
    this.speed.current = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp);
    const y = scroll.current / window.innerHeight;
    const velocity = 0.5;
    if (this.scroll.current < this.scroll.target) {
      this.direction = "right";
      this.scroll.velocity = -velocity;
    } else if (this.scroll.current > this.scroll.target) {
      this.direction = "left";
      this.scroll.velocity = velocity;
    }
    this.scroll.target -= this.scroll.velocity;
    this.scroll.target += distance * 0.4;
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
    this.speed.target = (this.scroll.target - this.scroll.current) * 0.0012;
    this.gallery.style[this.transformPrefix] = `translateX(${this.scroll.current > -0.01 ? 0 : this.scroll.current}px)`; // prettier-ignore

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.medias, media => {
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
      media.update(this.scroll.current, this.speed.current);
    });
    this.group.position.y = y * this.sizes.height;
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
/******/ 	__webpack_require__.h = () => ("736af25838f69f29feed")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43Nzk3NGY5NzU1OTAxMTMxODY4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRDtBQUNJO0FBQ0o7QUFDQTtBQUVZO0FBRXhCLE1BQU1NLE9BQU8sQ0FBQztFQUMzQkMsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLFFBQVE7SUFBRUMsS0FBSztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUMsS0FBSztJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNwRSxJQUFJLENBQUNOLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNPLGVBQWUsR0FBR1AsT0FBTyxDQUFDUSxhQUFhLENBQUMseUJBQXlCLENBQUM7SUFFdkUsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0YsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBRXZELElBQUksQ0FBQ1AsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFFeEIsSUFBSSxDQUFDSyxlQUFlLEdBQUdoQiw2Q0FBTSxDQUFDLFdBQVcsQ0FBQztJQUUxQyxJQUFJLENBQUNpQixLQUFLLEdBQUcsSUFBSWxCLDBDQUFTLENBQUMsQ0FBQztJQUU1QixJQUFJLENBQUNtQixNQUFNLEdBQUc7TUFDWkMsT0FBTyxFQUFFLENBQUM7TUFDVkMsTUFBTSxFQUFFLENBQUM7TUFDVEMsS0FBSyxFQUFFLENBQUM7TUFDUkMsUUFBUSxFQUFFLEdBQUc7TUFDYkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQ0MsS0FBSyxHQUFHO01BQ1hMLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLE1B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SyxDQUFDaUIsTUFBTSxDQUFDLElBQUksQ0FBQ25DLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFLElBQUksQ0FBQ0ssS0FBSyxDQUFDTCxPQUFPLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDRixLQUFLLENBQUM2QyxRQUFRLENBQUNkLENBQUMsR0FBR0EsQ0FBQyxHQUFHLElBQUksQ0FBQ3RDLEtBQUssQ0FBQ3NELE1BQU07RUFDL0M7RUFFQUMsT0FBT0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDeEQsS0FBSyxDQUFDeUQsV0FBVyxDQUFDLElBQUksQ0FBQ2pELEtBQUssQ0FBQztFQUNwQztBQUNGOzs7Ozs7OztVQ3RKQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9HYWxsZXJ5LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJvZ2xcIlxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9NZWRpYVwiXG5cbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnRzV3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19nYWxsZXJ5X193cmFwcGVyXCIpXG5cbiAgICB0aGlzLmdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2dhbGxlcnlcIilcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIilcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgdmVsb2NpdHk6IDAuNSxcbiAgICAgIGxlcnA6IDAuMDRcbiAgICB9XG5cbiAgICB0aGlzLnNwZWVkID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlTWVkaWFzKClcbiAgICB0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlTWVkaWFzKCkge1xuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5X19tZWRpYVwiKVxuXG4gICAgdGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gZGF0YS5nYWxsZXJ5LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKSlcblxuICAgICAgY29uc3QgbWVkaWEgPSBuZXcgTWVkaWEoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBzY2VuZTogdGhpcy5ncm91cCxcbiAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgICAgIHRpdGxlOiB0ZXh0ICYmIHRleHQudGl0bGUsXG4gICAgICAgIHN1YlRpdGxlOiB0ZXh0ICYmIHRleHQuc3ViVGl0bGUsXG4gICAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWVkaWFcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudHNXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cbiAgICBjb25zdCBkaXN0YW5jZSA9IChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC50YXJnZXQpICogMC4xNVxuXG4gICAgdGhpcy5zcGVlZC5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc3BlZWQuY3VycmVudCxcbiAgICAgIHRoaXMuc3BlZWQudGFyZ2V0LFxuICAgICAgdGhpcy5zcGVlZC5sZXJwXG4gICAgKVxuXG4gICAgY29uc3QgeSA9IHNjcm9sbC5jdXJyZW50IC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgY29uc3QgdmVsb2NpdHkgPSAwLjVcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgdGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtdmVsb2NpdHlcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCJcbiAgICAgIHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gdmVsb2NpdHlcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGlzdGFuY2UgKiAwLjRcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxlcnBcbiAgICApXG5cbiAgICB0aGlzLnNwZWVkLnRhcmdldCA9ICh0aGlzLnNjcm9sbC50YXJnZXQgLSB0aGlzLnNjcm9sbC5jdXJyZW50KSAqIDAuMDAxMlxuXG4gICAgdGhpcy5nYWxsZXJ5LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiAtMC4wMSA/IDAgOiB0aGlzLnNjcm9sbC5jdXJyZW50XG4gICAgICB9cHgpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IHtcbiAgICAgIGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG4gICAgICAgIGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgKz0gdGhpcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG4gICAgICAgIGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc3BlZWQuY3VycmVudClcbiAgICB9KVxuXG4gICAgdGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzM2YWYyNTgzOGY2OWYyOWZlZWRcIikiXSwibmFtZXMiOlsibWFwIiwiZ3NhcCIsIlRyYW5zZm9ybSIsIlByZWZpeCIsIk1lZGlhIiwiZGF0YSIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwicmVuZGVyZXIiLCJlbGVtZW50c1dyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsImRvY3VtZW50IiwidHJhbnNmb3JtUHJlZml4IiwiZ3JvdXAiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0Iiwic3RhcnQiLCJ2ZWxvY2l0eSIsImxlcnAiLCJzcGVlZCIsImNyZWF0ZU1lZGlhcyIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsInRleHQiLCJmaW5kIiwiaXRlbSIsImlkIiwiTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwibWVkaWEiLCJ0aXRsZSIsInN1YlRpdGxlIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwic3R5bGUiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiaGVpZ2h0IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==