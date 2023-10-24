"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Magnetic.js":
/*!************************************!*\
  !*** ./app/animations/Magnetic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements: {
        text: element.querySelector("span")
      }
    });
    this.x = {
      current: 0,
      target: 0
    };
    this.y = {
      current: 0,
      target: 0
    };
    this.addEventListener();
  }
  animateIn() {}
  animateOut() {}
  onResize() {
    this.height = this.element.clientHeight;
  }
  onMouseEnter() {
    this.updatePosition();
  }
  onMouseMove({
    clientX,
    clientY,
    target
  }) {
    const {
      clientHeight,
      clientWidth
    } = this.elements.text;
    const {
      left,
      top
    } = target.getBoundingClientRect();
    const dx = (clientX - left) / clientWidth - 0.5;
    const dy = (clientY - top) / clientHeight - 0.5;
    this.x.target = dx * clientWidth * 0.2;
    this.y.target = dy * clientHeight * 0.2;
  }
  onMouseLeave() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to([this.x, this.y], {
      current: 0,
      duration: 0.2,
      onComplete: _ => window.cancelAnimationFrame(this.frame),
      target: 0
    });
  }
  updatePosition() {
    this.x.current = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].utils.interpolate(this.x.current, this.x.target, 0.1);
    this.y.current = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].utils.interpolate(this.y.current, this.y.target, 0.1);
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.elements.text, {
      x: this.x.current,
      y: this.y.current
    });
    this.frame = window.requestAnimationFrame(this.updatePosition.bind(this));
  }
  addEventListener() {
    this.element.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.element.addEventListener("mouseleave", this.onMouseLeave.bind(this));
  }
  removeEventListener() {
    this.element.removeEventListener("mouseenter", this.onMouseEnter.bind(this));
    this.element.removeEventListener("mousemove", this.onMouseMove.bind(this));
    this.element.removeEventListener("mouseleave", this.onMouseLeave.bind(this));
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b4b9e7edfe68e178225")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMTE0NTE1YWUzNGFkZWY0OTljYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNrQjtBQUV6QyxpRUFBZSxjQUFjQyx5REFBUyxDQUFDO0VBQ3JDQyxXQUFXQSxDQUFDO0lBQUVDLE9BQU87SUFBRUM7RUFBUyxDQUFDLEVBQUU7SUFDakMsS0FBSyxDQUFDO01BQ0pELE9BQU87TUFDUEMsUUFBUSxFQUFFO1FBQ1JDLElBQUksRUFBRUYsT0FBTyxDQUFDRyxhQUFhLENBQUMsTUFBTTtNQUNwQztJQUNGLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0MsQ0FBQyxHQUFHO01BQ1BDLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLE1BQU0sRUFBRTtJQUNWLENBQUM7SUFFRCxJQUFJLENBQUNDLENBQUMsR0FBRztNQUNQRixPQUFPLEVBQUUsQ0FBQztNQUNWQyxNQUFNLEVBQUU7SUFDVixDQUFDO0lBRUQsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3pCO0VBRUFDLFNBQVNBLENBQUEsRUFBRyxDQUFDO0VBRWJDLFVBQVVBLENBQUEsRUFBRyxDQUFDO0VBRWRDLFFBQVFBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ1osT0FBTyxDQUFDYSxZQUFZO0VBQ3pDO0VBRUFDLFlBQVlBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDdkI7RUFFQUMsV0FBV0EsQ0FBQztJQUFFQyxPQUFPO0lBQUVDLE9BQU87SUFBRVo7RUFBTyxDQUFDLEVBQUU7SUFDeEMsTUFBTTtNQUFFTyxZQUFZO01BQUVNO0lBQVksQ0FBQyxHQUFHLElBQUksQ0FBQ2xCLFFBQVEsQ0FBQ0MsSUFBSTtJQUV4RCxNQUFNO01BQUVrQixJQUFJO01BQUVDO0lBQUksQ0FBQyxHQUFHZixNQUFNLENBQUNnQixxQkFBcUIsQ0FBQyxDQUFDO0lBRXBELE1BQU1DLEVBQUUsR0FBRyxDQUFDTixPQUFPLEdBQUdHLElBQUksSUFBSUQsV0FBVyxHQUFHLEdBQUc7SUFDL0MsTUFBTUssRUFBRSxHQUFHLENBQUNOLE9BQU8sR0FBR0csR0FBRyxJQUFJUixZQUFZLEdBQUcsR0FBRztJQUUvQyxJQUFJLENBQUNULENBQUMsQ0FBQ0UsTUFBTSxHQUFHaUIsRUFBRSxHQUFHSixXQUFXLEdBQUcsR0FBRztJQUN0QyxJQUFJLENBQUNaLENBQUMsQ0FBQ0QsTUFBTSxHQUFHa0IsRUFBRSxHQUFHWCxZQUFZLEdBQUcsR0FBRztFQUN6QztFQUVBWSxZQUFZQSxDQUFBLEVBQUc7SUFDYjVCLDRDQUFJLENBQUM2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDRyxDQUFDLENBQUMsRUFBRTtNQUN4QkYsT0FBTyxFQUFFLENBQUM7TUFDVnNCLFFBQVEsRUFBRSxHQUFHO01BQ2JDLFVBQVUsRUFBRUMsQ0FBQyxJQUFJQyxNQUFNLENBQUNDLG9CQUFvQixDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO01BQ3hEMUIsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0VBQ0o7RUFFQVMsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsSUFBSSxDQUFDWCxDQUFDLENBQUNDLE9BQU8sR0FBR1IsNENBQUksQ0FBQ29DLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQzlCLENBQUMsQ0FBQ0MsT0FBTyxFQUFFLElBQUksQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzNFLElBQUksQ0FBQ0MsQ0FBQyxDQUFDRixPQUFPLEdBQUdSLDRDQUFJLENBQUNvQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUMzQixDQUFDLENBQUNGLE9BQU8sRUFBRSxJQUFJLENBQUNFLENBQUMsQ0FBQ0QsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUUzRVQsNENBQUksQ0FBQ3NDLEdBQUcsQ0FBQyxJQUFJLENBQUNsQyxRQUFRLENBQUNDLElBQUksRUFBRTtNQUMzQkUsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxPQUFPO01BQ2pCRSxDQUFDLEVBQUUsSUFBSSxDQUFDQSxDQUFDLENBQUNGO0lBQ1osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDMkIsS0FBSyxHQUFHRixNQUFNLENBQUNNLHFCQUFxQixDQUFDLElBQUksQ0FBQ3JCLGNBQWMsQ0FBQ3NCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMzRTtFQUVBN0IsZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxDQUFDUixPQUFPLENBQUNRLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNNLFlBQVksQ0FBQ3VCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RSxJQUFJLENBQUNyQyxPQUFPLENBQUNRLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNRLFdBQVcsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RSxJQUFJLENBQUNyQyxPQUFPLENBQUNRLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUNpQixZQUFZLENBQUNZLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMzRTtFQUVBQyxtQkFBbUJBLENBQUEsRUFBRztJQUNwQixJQUFJLENBQUN0QyxPQUFPLENBQUNzQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDeEIsWUFBWSxDQUFDdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLElBQUksQ0FBQ3JDLE9BQU8sQ0FBQ3NDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUN0QixXQUFXLENBQUNxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsSUFBSSxDQUFDckMsT0FBTyxDQUFDc0MsbUJBQW1CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQ2IsWUFBWSxDQUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDOUU7QUFDRjs7Ozs7Ozs7VUNqRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2FuaW1hdGlvbnMvTWFnbmV0aWMuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiY2xhc3Nlcy9BbmltYXRpb25cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0ZXh0OiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMueCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnkgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwXG4gICAgfVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKClcbiAgfVxuXG4gIGFuaW1hdGVJbigpIHt9XG5cbiAgYW5pbWF0ZU91dCgpIHt9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpXG4gIH1cblxuICBvbk1vdXNlTW92ZSh7IGNsaWVudFgsIGNsaWVudFksIHRhcmdldCB9KSB7XG4gICAgY29uc3QgeyBjbGllbnRIZWlnaHQsIGNsaWVudFdpZHRoIH0gPSB0aGlzLmVsZW1lbnRzLnRleHRcblxuICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGNvbnN0IGR4ID0gKGNsaWVudFggLSBsZWZ0KSAvIGNsaWVudFdpZHRoIC0gMC41XG4gICAgY29uc3QgZHkgPSAoY2xpZW50WSAtIHRvcCkgLyBjbGllbnRIZWlnaHQgLSAwLjVcblxuICAgIHRoaXMueC50YXJnZXQgPSBkeCAqIGNsaWVudFdpZHRoICogMC4yXG4gICAgdGhpcy55LnRhcmdldCA9IGR5ICogY2xpZW50SGVpZ2h0ICogMC4yXG4gIH1cblxuICBvbk1vdXNlTGVhdmUoKSB7XG4gICAgZ3NhcC50byhbdGhpcy54LCB0aGlzLnldLCB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgIG9uQ29tcGxldGU6IF8gPT4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpLFxuICAgICAgdGFyZ2V0OiAwXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIHRoaXMueC5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgMC4xKVxuICAgIHRoaXMueS5jdXJyZW50ID0gZ3NhcC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgMC4xKVxuXG4gICAgZ3NhcC5zZXQodGhpcy5lbGVtZW50cy50ZXh0LCB7XG4gICAgICB4OiB0aGlzLnguY3VycmVudCxcbiAgICAgIHk6IHRoaXMueS5jdXJyZW50XG4gICAgfSlcblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcykpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKSlcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcykpXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZiNGI5ZTdlZGZlNjhlMTc4MjI1XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRleHQiLCJxdWVyeVNlbGVjdG9yIiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJ5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIm9uTW91c2VFbnRlciIsInVwZGF0ZVBvc2l0aW9uIiwib25Nb3VzZU1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsImNsaWVudFdpZHRoIiwibGVmdCIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImR4IiwiZHkiLCJvbk1vdXNlTGVhdmUiLCJ0byIsImR1cmF0aW9uIiwib25Db21wbGV0ZSIsIl8iLCJ3aW5kb3ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImZyYW1lIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsInNldCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==