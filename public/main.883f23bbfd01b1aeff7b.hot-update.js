"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/animations/Parallax.js":
/*!************************************!*\
  !*** ./app/animations/Parallax.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math */ "./app/utils/math.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom */ "./app/utils/dom.js");




class Parallax extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.element = element;
    this.transform = prefix__WEBPACK_IMPORTED_MODULE_1___default()("transform");
    this.media = element.querySelector("img");
    this.media.onload = _ => {
      this.onResize();
    };
    this.parallax = {
      current: -this.amount,
      target: -this.amount
    };
    this.scale = {
      current: 1.15,
      target: 1.15
    };
    this.onResize();
  }
  onResize() {
    this.amount = 150;
    this.offset = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getOffset)(this.element);
  }
  update(scroll) {
    if (!this.offset) return;
    const {
      innerHeight
    } = window;
    const offsetBottom = scroll + innerHeight;
    if (offsetBottom >= this.offset.top) {
      this.parallax = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(-this.amount, this.amount, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll, -this.offset.height, innerHeight, this.amount, -this.amount));
      this.scale = (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.clamp)(1, 1.3, (0,_utils_math__WEBPACK_IMPORTED_MODULE_2__.map)(this.offset.top - scroll, -this.offset.height, innerHeight, 1, 1.3));
      this.media.style[this.transform] = `translate3d(0, ${this.parallax}px, 0) scale(${this.scale})`;
    } else {
      this.media.style[this.transform] = `translate3d(0, -${this.amount}px, 0) scale(1.15)`;
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b383a8953dcd823d3b21")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ODNmMjNiYmZkMDFiMWFlZmY3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUVkO0FBQ2U7QUFDRjtBQUV6QixNQUFNSyxRQUFRLFNBQVNMLHlEQUFTLENBQUM7RUFDOUNNLFdBQVdBLENBQUM7SUFBRUM7RUFBUSxDQUFDLEVBQUU7SUFDdkIsS0FBSyxDQUFDO01BQ0pBO0lBQ0YsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU87SUFFdEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdQLDZDQUFNLENBQUMsV0FBVyxDQUFDO0lBRXBDLElBQUksQ0FBQ1EsS0FBSyxHQUFHRixPQUFPLENBQUNHLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDekMsSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU0sR0FBR0MsQ0FBQyxJQUFJO01BQ3ZCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUksQ0FBQ0MsUUFBUSxHQUFHO01BQ2RDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQ0MsTUFBTTtNQUNyQkMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDRDtJQUNoQixDQUFDO0lBRUQsSUFBSSxDQUFDRSxLQUFLLEdBQUc7TUFDWEgsT0FBTyxFQUFFLElBQUk7TUFDYkUsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUVELElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUM7RUFDakI7RUFFQUEsUUFBUUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDRyxNQUFNLEdBQUcsR0FBRztJQUNqQixJQUFJLENBQUNHLE1BQU0sR0FBR2YscURBQVMsQ0FBQyxJQUFJLENBQUNHLE9BQU8sQ0FBQztFQUN2QztFQUVBYSxNQUFNQSxDQUFDQyxNQUFNLEVBQUU7SUFDYixJQUFJLENBQUMsSUFBSSxDQUFDRixNQUFNLEVBQUU7SUFDbEIsTUFBTTtNQUFFRztJQUFZLENBQUMsR0FBR0MsTUFBTTtJQUM5QixNQUFNQyxZQUFZLEdBQUdILE1BQU0sR0FBR0MsV0FBVztJQUV6QyxJQUFJRSxZQUFZLElBQUksSUFBSSxDQUFDTCxNQUFNLENBQUNNLEdBQUcsRUFBRTtNQUNuQyxJQUFJLENBQUNYLFFBQVEsR0FBR1osa0RBQUssQ0FDbkIsQ0FBQyxJQUFJLENBQUNjLE1BQU0sRUFDWixJQUFJLENBQUNBLE1BQU0sRUFDWGIsZ0RBQUcsQ0FBQyxJQUFJLENBQUNnQixNQUFNLENBQUNNLEdBQUcsR0FBR0osTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDRixNQUFNLENBQUNPLE1BQU0sRUFBRUosV0FBVyxFQUFFLElBQUksQ0FBQ04sTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDQSxNQUFNLENBQzNGLENBQUM7TUFDRCxJQUFJLENBQUNFLEtBQUssR0FBR2hCLGtEQUFLLENBQ2hCLENBQUMsRUFDRCxHQUFHLEVBQ0hDLGdEQUFHLENBQUMsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDTSxHQUFHLEdBQUdKLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQ0YsTUFBTSxDQUFDTyxNQUFNLEVBQUVKLFdBQVcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUN4RSxDQUFDO01BRUQsSUFBSSxDQUFDYixLQUFLLENBQUNrQixLQUFLLENBQ2QsSUFBSSxDQUFDbkIsU0FBUyxDQUNmLEdBQUksa0JBQWlCLElBQUksQ0FBQ00sUUFBUyxnQkFBZSxJQUFJLENBQUNJLEtBQU0sR0FBRTtJQUNsRSxDQUFDLE1BQU07TUFDTCxJQUFJLENBQUNULEtBQUssQ0FBQ2tCLEtBQUssQ0FBQyxJQUFJLENBQUNuQixTQUFTLENBQUMsR0FBSSxtQkFBa0IsSUFBSSxDQUFDUSxNQUFPLG9CQUFtQjtJQUN2RjtFQUNGO0FBQ0Y7Ozs7Ozs7O1VDOURBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9hbmltYXRpb25zL1BhcmFsbGF4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCJcblxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCJcbmltcG9ydCB7IGNsYW1wLCBtYXAgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aFwiXG5pbXBvcnQgeyBnZXRPZmZzZXQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWxsYXggZXh0ZW5kcyBBbmltYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnRcbiAgICB9KVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIHRoaXMudHJhbnNmb3JtID0gUHJlZml4KFwidHJhbnNmb3JtXCIpXG5cbiAgICB0aGlzLm1lZGlhID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpXG4gICAgdGhpcy5tZWRpYS5vbmxvYWQgPSBfID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKVxuICAgIH1cblxuICAgIHRoaXMucGFyYWxsYXggPSB7XG4gICAgICBjdXJyZW50OiAtdGhpcy5hbW91bnQsXG4gICAgICB0YXJnZXQ6IC10aGlzLmFtb3VudFxuICAgIH1cblxuICAgIHRoaXMuc2NhbGUgPSB7XG4gICAgICBjdXJyZW50OiAxLjE1LFxuICAgICAgdGFyZ2V0OiAxLjE1XG4gICAgfVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmFtb3VudCA9IDE1MFxuICAgIHRoaXMub2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZiAoIXRoaXMub2Zmc2V0KSByZXR1cm5cbiAgICBjb25zdCB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3dcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBzY3JvbGwgKyBpbm5lckhlaWdodFxuXG4gICAgaWYgKG9mZnNldEJvdHRvbSA+PSB0aGlzLm9mZnNldC50b3ApIHtcbiAgICAgIHRoaXMucGFyYWxsYXggPSBjbGFtcChcbiAgICAgICAgLXRoaXMuYW1vdW50LFxuICAgICAgICB0aGlzLmFtb3VudCxcbiAgICAgICAgbWFwKHRoaXMub2Zmc2V0LnRvcCAtIHNjcm9sbCwgLXRoaXMub2Zmc2V0LmhlaWdodCwgaW5uZXJIZWlnaHQsIHRoaXMuYW1vdW50LCAtdGhpcy5hbW91bnQpXG4gICAgICApXG4gICAgICB0aGlzLnNjYWxlID0gY2xhbXAoXG4gICAgICAgIDEsXG4gICAgICAgIDEuMyxcbiAgICAgICAgbWFwKHRoaXMub2Zmc2V0LnRvcCAtIHNjcm9sbCwgLXRoaXMub2Zmc2V0LmhlaWdodCwgaW5uZXJIZWlnaHQsIDEsIDEuMylcbiAgICAgIClcblxuICAgICAgdGhpcy5tZWRpYS5zdHlsZVtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1cbiAgICAgIF0gPSBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLnBhcmFsbGF4fXB4LCAwKSBzY2FsZSgke3RoaXMuc2NhbGV9KWBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZWRpYS5zdHlsZVt0aGlzLnRyYW5zZm9ybV0gPSBgdHJhbnNsYXRlM2QoMCwgLSR7dGhpcy5hbW91bnR9cHgsIDApIHNjYWxlKDEuMTUpYFxuICAgIH1cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjM4M2E4OTUzZGNkODIzZDNiMjFcIikiXSwibmFtZXMiOlsiQW5pbWF0aW9uIiwiUHJlZml4IiwiY2xhbXAiLCJtYXAiLCJnZXRPZmZzZXQiLCJQYXJhbGxheCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsInRyYW5zZm9ybSIsIm1lZGlhIiwicXVlcnlTZWxlY3RvciIsIm9ubG9hZCIsIl8iLCJvblJlc2l6ZSIsInBhcmFsbGF4IiwiY3VycmVudCIsImFtb3VudCIsInRhcmdldCIsInNjYWxlIiwib2Zmc2V0IiwidXBkYXRlIiwic2Nyb2xsIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3ciLCJvZmZzZXRCb3R0b20iLCJ0b3AiLCJoZWlnaHQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=