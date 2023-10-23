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
/******/ 	__webpack_require__.h = () => ("57c1450a84c39de30db3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDNUQ7RUFFQUksU0FBU0EsQ0FBQ0osS0FBSyxFQUFFO0lBQ2Y5QiwyQ0FBRyxDQUFDLElBQUksQ0FBQzBCLFNBQVMsRUFBRUssT0FBTyxJQUFJQSxPQUFPLENBQUNHLFNBQVMsQ0FBQ0osS0FBSyxDQUFDLENBQUM7RUFDMUQ7RUFFQUssTUFBTUEsQ0FBQ3RCLE1BQU0sRUFBRTtJQUNiYiwyQ0FBRyxDQUFDLElBQUksQ0FBQzBCLFNBQVMsRUFBRUssT0FBTyxJQUFJQSxPQUFPLENBQUNJLE1BQU0sQ0FBQ3RCLE1BQU0sQ0FBQyxDQUFDO0VBQ3hEO0VBRUF1QixPQUFPQSxDQUFBLEVBQUc7SUFDUnBDLDJDQUFHLENBQUMsSUFBSSxDQUFDMEIsU0FBUyxFQUFFSyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNuRDtBQUNGOzs7Ozs7OztVQzVGQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0sIFBsYW5lIH0gZnJvbSBcIm9nbFwiXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuL0dhbGxlcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgcmVuZGVyZXIsIGNhbWVyYSB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIGxlcnA6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxXG4gICAgfVxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsZXJwOiAwLjFcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUdlb21ldHJ5KClcbiAgICB0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG4gIH1cblxuICBjcmVhdGVHZW9tZXRyeSgpIHtcbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wsIHtcbiAgICAgIGhlaWdodFNlZ21lbnRzOiAyMCxcbiAgICAgIHdpZHRoU2VnbWVudHM6IDIwXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnkoKSB7XG4gICAgdGhpcy5nYWxsZXJpZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpXG5cbiAgICB0aGlzLmdhbGxlcmllcyA9IG1hcChcbiAgICAgIHRoaXMuZ2FsbGVyaWVzRWxlbWVudCxcbiAgICAgIChlbGVtZW50LCBpbmRleCkgPT5cbiAgICAgICAgbmV3IEdhbGxlcnkoe1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXJcbiAgICAgICAgfSlcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoc2Nyb2xsKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgbWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuZGVzdHJveSgpKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1N2MxNDUwYTg0YzM5ZGUzMGRiM1wiKSJdLCJuYW1lcyI6WyJUcmFuc2Zvcm0iLCJQbGFuZSIsIm1hcCIsIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInJlbmRlcmVyIiwiY2FtZXJhIiwiZ3JvdXAiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzY3JvbGwiLCJzdGFydCIsInZlbG9jaXR5Iiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJnZW9tZXRyeSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsImdhbGxlcmllc0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYWxsZXJpZXMiLCJlbGVtZW50IiwiaW5kZXgiLCJvblJlc2l6ZSIsImV2ZW50IiwiZ2FsbGVyeSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkZXN0cm95Il0sInNvdXJjZVJvb3QiOiIifQ==