"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/components/Canvas/Home/index.js":
/*!*********************************************!*\
  !*** ./app/components/Canvas/Home/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Plane.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery */ "./app/components/Canvas/Home/Gallery.js");



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
    this.group = new ogl__WEBPACK_IMPORTED_MODULE_2__.Transform();
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
    this.group.setParent(scene);

    // this.show()
  }

  createGeometry() {
    this.geometry = new ogl__WEBPACK_IMPORTED_MODULE_3__.Plane(this.gl, {
      heightSegments: 20,
      widthSegments: 20
    });
  }
  createGallery() {
    this.galleriesElement = document.querySelectorAll(".home__gallery");
    this.galleries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleriesElement, (element, index) => new _Gallery__WEBPACK_IMPORTED_MODULE_1__["default"]({
      element,
      geometry: this.geometry,
      index,
      gl: this.gl,
      scene: this.group,
      sizes: this.sizes,
      renderer: this.renderer
    }));
  }

  /**
   * Animations.
   */
  show() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleries, gallery => gallery.show());
  }
  hide() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleries, gallery => gallery.hide());
  }
  onResize(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleries, gallery => gallery.onResize(event));
  }
  onTouchDown(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleries, gallery => gallery.onTouchDown(event));
  }
  onTouchMove(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleries, gallery => gallery.onTouchMove(event));
  }
  onTouchUp(event) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleries, gallery => gallery.onTouchUp(event));
  }
  update(scroll) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleries, gallery => gallery.update(scroll));
  }
  destroy() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.galleries, gallery => gallery.destroy());
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e366781af8adac7dce07")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zOTQwM2JkMTE2Y2IyMmJlMWU5ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNWO0FBQ0c7QUFFL0IsaUVBQWUsTUFBTTtFQUNuQkksV0FBV0EsQ0FBQztJQUFFQyxFQUFFO0lBQUVDLEtBQUs7SUFBRUMsS0FBSztJQUFFQyxRQUFRO0lBQUVDO0VBQU8sQ0FBQyxFQUFFO0lBQ2xELElBQUksQ0FBQ0osRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFFcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSVYsMENBQVMsQ0FBQyxDQUFDO0lBRTVCLElBQUksQ0FBQ1csQ0FBQyxHQUFHO01BQ1BDLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLE1BQU0sRUFBRSxDQUFDO01BQ1RDLElBQUksRUFBRTtJQUNSLENBQUM7SUFFRCxJQUFJLENBQUNDLE1BQU0sR0FBRztNQUNaSCxPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUUsQ0FBQztNQUNURyxLQUFLLEVBQUUsQ0FBQztNQUNSRixJQUFJLEVBQUUsR0FBRztNQUNURyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBRUQsSUFBSSxDQUFDQyxLQUFLLEdBQUc7TUFDWE4sT0FBTyxFQUFFLENBQUM7TUFDVkMsTUFBTSxFQUFFLENBQUM7TUFDVEMsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUVELElBQUksQ0FBQ0ssY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztJQUVwQixJQUFJLENBQUNWLEtBQUssQ0FBQ1csU0FBUyxDQUFDZixLQUFLLENBQUM7O0lBRTNCO0VBQ0Y7O0VBRUFhLGNBQWNBLENBQUEsRUFBRztJQUNmLElBQUksQ0FBQ0csUUFBUSxHQUFHLElBQUlyQixzQ0FBSyxDQUFDLElBQUksQ0FBQ0ksRUFBRSxFQUFFO01BQ2pDa0IsY0FBYyxFQUFFLEVBQUU7TUFDbEJDLGFBQWEsRUFBRTtJQUNqQixDQUFDLENBQUM7RUFDSjtFQUVBSixhQUFhQSxDQUFBLEVBQUc7SUFDZCxJQUFJLENBQUNLLGdCQUFnQixHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO0lBRW5FLElBQUksQ0FBQ0MsU0FBUyxHQUFHMUIsMkNBQUcsQ0FDbEIsSUFBSSxDQUFDdUIsZ0JBQWdCLEVBQ3JCLENBQUNJLE9BQU8sRUFBRUMsS0FBSyxLQUNiLElBQUkzQixnREFBTyxDQUFDO01BQ1YwQixPQUFPO01BQ1BQLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7TUFDdkJRLEtBQUs7TUFDTHpCLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7TUFDWEMsS0FBSyxFQUFFLElBQUksQ0FBQ0ksS0FBSztNQUNqQkgsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztNQUNqQkMsUUFBUSxFQUFFLElBQUksQ0FBQ0E7SUFDakIsQ0FBQyxDQUNMLENBQUM7RUFDSDs7RUFFQTtBQUNGO0FBQ0E7RUFDRXVCLElBQUlBLENBQUEsRUFBRztJQUNMN0IsMkNBQUcsQ0FBQyxJQUFJLENBQUMwQixTQUFTLEVBQUVJLE9BQU8sSUFBSUEsT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ2hEO0VBRUFFLElBQUlBLENBQUEsRUFBRztJQUNML0IsMkNBQUcsQ0FBQyxJQUFJLENBQUMwQixTQUFTLEVBQUVJLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ2hEO0VBRUFDLFFBQVFBLENBQUNDLEtBQUssRUFBRTtJQUNkakMsMkNBQUcsQ0FBQyxJQUFJLENBQUMwQixTQUFTLEVBQUVJLE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFDO0VBQ3pEO0VBRUFDLFdBQVdBLENBQUNELEtBQUssRUFBRTtJQUNqQmpDLDJDQUFHLENBQUMsSUFBSSxDQUFDMEIsU0FBUyxFQUFFSSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDRCxLQUFLLENBQUMsQ0FBQztFQUM1RDtFQUVBRSxXQUFXQSxDQUFDRixLQUFLLEVBQUU7SUFDakJqQywyQ0FBRyxDQUFDLElBQUksQ0FBQzBCLFNBQVMsRUFBRUksT0FBTyxJQUFJQSxPQUFPLENBQUNLLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7RUFDNUQ7RUFFQUcsU0FBU0EsQ0FBQ0gsS0FBSyxFQUFFO0lBQ2ZqQywyQ0FBRyxDQUFDLElBQUksQ0FBQzBCLFNBQVMsRUFBRUksT0FBTyxJQUFJQSxPQUFPLENBQUNNLFNBQVMsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7RUFDMUQ7RUFFQUksTUFBTUEsQ0FBQ3hCLE1BQU0sRUFBRTtJQUNiYiwyQ0FBRyxDQUFDLElBQUksQ0FBQzBCLFNBQVMsRUFBRUksT0FBTyxJQUFJQSxPQUFPLENBQUNPLE1BQU0sQ0FBQ3hCLE1BQU0sQ0FBQyxDQUFDO0VBQ3hEO0VBRUF5QixPQUFPQSxDQUFBLEVBQUc7SUFDUnRDLDJDQUFHLENBQUMsSUFBSSxDQUFDMEIsU0FBUyxFQUFFSSxPQUFPLElBQUlBLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNuRDtBQUNGOzs7Ozs7OztVQ3JHQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuL0dhbGxlcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cbiAgICAvLyB0aGlzLnNob3coKVxuICB9XG5cbiAgY3JlYXRlR2VvbWV0cnkoKSB7XG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG4gICAgICBoZWlnaHRTZWdtZW50czogMjAsXG4gICAgICB3aWR0aFNlZ21lbnRzOiAyMFxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5KCkge1xuICAgIHRoaXMuZ2FsbGVyaWVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuXG4gICAgdGhpcy5nYWxsZXJpZXMgPSBtYXAoXG4gICAgICB0aGlzLmdhbGxlcmllc0VsZW1lbnQsXG4gICAgICAoZWxlbWVudCwgaW5kZXgpID0+XG4gICAgICAgIG5ldyBHYWxsZXJ5KHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgICAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyXG4gICAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBzaG93KCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LnNob3coKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuaGlkZSgpKVxuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoc2Nyb2xsKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuZGVzdHJveSgpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMzY2NzgxYWY4YWRhYzdkY2UwN1wiKSJdLCJuYW1lcyI6WyJUcmFuc2Zvcm0iLCJQbGFuZSIsIm1hcCIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwiZ3JvdXAiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzY3JvbGwiLCJzdGFydCIsInZlbG9jaXR5Iiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJnZW9tZXRyeSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsImdhbGxlcmllc0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYWxsZXJpZXMiLCJlbGVtZW50IiwiaW5kZXgiLCJzaG93IiwiZ2FsbGVyeSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50Iiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImRlc3Ryb3kiXSwic291cmNlUm9vdCI6IiJ9