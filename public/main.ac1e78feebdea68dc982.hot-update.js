"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/polyfill */ "./app/utils/polyfill.js");
/* harmony import */ var utils_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/scroll */ "./app/utils/scroll.js");
/* harmony import */ var utils_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(utils_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_sw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/sw */ "./app/utils/sw.js");
/* harmony import */ var utils_sw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(utils_sw__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var fontfaceobserver_fontfaceobserver_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fontfaceobserver/fontfaceobserver.standalone */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");
/* harmony import */ var fontfaceobserver_fontfaceobserver_standalone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver_fontfaceobserver_standalone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classes_Detection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classes/Detection */ "./app/classes/Detection.js");
/* harmony import */ var pages_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/About */ "./app/pages/About/index.js");
/* harmony import */ var pages_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pages/Home */ "./app/pages/Home/index.js");
/* harmony import */ var components_Canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Canvas */ "./app/components/Canvas/index.js");
/* harmony import */ var components_Preloader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Preloader */ "./app/components/Preloader.js");











class App {
  constructor() {
    (0,auto_bind__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
    this.content = document.querySelector(".content");
    this.template = this.content.dataset.template;
    this.createCanvas();
    this.createPreloader();
    this.pages = new Map();
    this.pages.set("about", new pages_About__WEBPACK_IMPORTED_MODULE_7__["default"]());
    this.pages.set("home", new pages_Home__WEBPACK_IMPORTED_MODULE_8__["default"]());
    this.page = this.pages.get(this.template);
    this.page.create();
    this.page.show();
    this.addEventListeners();
    this.addLinksEventsListeners();
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_10__["default"]({
      canvas: this.canvas
    });
    this.preloader.on("complete", this.onPreloaded);
  }
  onPreloaded() {
    this.onResize();
    this.update();
  }
  createCanvas() {
    this.canvas = new components_Canvas__WEBPACK_IMPORTED_MODULE_9__["default"]({
      url: this.url
    });
  }

  /**
   * Methods.
   */
  async onChange({
    push = true,
    url = null
  }) {
    if (this.isLoading || this.url === url) {
      return;
    }
    document.body.style.pointerEvents = "none";
    this.url = url;
    this.isLoading = true;
    const request = await window.fetch(url, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    const response = await request.text();
    this.onRequest({
      push,
      response,
      url
    });
  }
  async onRequest({
    push,
    response,
    url
  }) {
    const html = document.createElement("div");
    html.innerHTML = response;
    const content = html.querySelector(".content");
    if (this.page) {
      await Promise.all([this.page.hide(content.dataset.template)]);
    }
    document.title = html.querySelector("title").textContent;
    if (push) {
      window.history.pushState({}, document.title, url);
    }
    this.content.innerHTML = content.innerHTML;
    this.content.dataset.template = content.dataset.template;
    this.template = content.dataset.template;
    this.page = this.pages.get(this.template);
    this.page.create();
    this.addLinksEventsListeners();
    await this.page.show();
    document.body.style.pointerEvents = "";
    this.isLoading = false;
  }

  /**
   * Loop.
   */
  update() {
    if (this.stats) {
      this.stats.begin();
    }
    if (this.page) {
      this.page.update();
    }
    if (this.canvas) {
      this.canvas.update(this);
    }
    if (this.stats) {
      this.stats.end();
    }
    window.requestAnimationFrame(this.update);
  }

  /**
   * Events.
   */
  onContextMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false
    });
  }
  onResize() {
    window.requestAnimationFrame(_ => {
      if (this.page) {
        this.page.onResize();
      }
      if (this.canvas) {
        this.canvas.onResize();
      }
    });
  }
  onKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
    }
    if (event.key === "ArrowDown") {
      this.page.scroll.target += 100;
    } else if (event.key === "ArrowUp") {
      this.page.scroll.target -= 100;
    }
  }
  onFocusIn(event) {
    event.preventDefault();
  }
  onTouchDown(event) {
    event.stopPropagation();
    if (!classes_Detection__WEBPACK_IMPORTED_MODULE_6__["default"].isMobile() && event.target.tagName === "A") return;
    if (this.canvas && this.canvas.onTouchDown) {
      this.canvas.onTouchDown(event);
    }
    if (this.page && this.page.onTouchDown) {
      this.page.onTouchDown(event);
    }
  }
  onTouchMove(event) {
    event.stopPropagation();
    if (this.canvas && this.canvas.onTouchMove) {
      this.canvas.onTouchMove(event);
    }
    if (this.page && this.page.onTouchDown) {
      this.page.onTouchMove(event);
    }
  }
  onTouchUp(event) {
    event.stopPropagation();
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onTouchUp(event);
    }
    if (this.page && this.page.onTouchDown) {
      this.page.onTouchUp(event);
    }
  }
  onWheel(event) {
    if (this.page && this.page.onWheel) {
      this.page.onWheel(event);
    }
  }

  /**
   * Listeners.
   */
  addEventListeners() {
    window.addEventListener("popstate", this.onPopState, {
      passive: true
    });
    window.addEventListener("resize", this.onResize, {
      passive: true
    });
    window.addEventListener("mousedown", this.onTouchDown, {
      passive: true
    });
    window.addEventListener("mousemove", this.onTouchMove, {
      passive: true
    });
    window.addEventListener("mouseup", this.onTouchUp, {
      passive: true
    });
    window.addEventListener("touchstart", this.onTouchDown, {
      passive: true
    });
    window.addEventListener("touchmove", this.onTouchMove, {
      passive: true
    });
    window.addEventListener("touchend", this.onTouchUp, {
      passive: true
    });
    window.addEventListener("mousewheel", this.onWheel, {
      passive: true
    });
    window.addEventListener("wheel", this.onWheel, {
      passive: true
    });
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("focusin", this.onFocusIn);
    if (classes_Detection__WEBPACK_IMPORTED_MODULE_6__["default"].isMobile()) {
      window.oncontextmenu = this.onContextMenu;
    }
  }
  addLinksEventsListeners() {
    const links = document.querySelectorAll("a");
    lodash_each__WEBPACK_IMPORTED_MODULE_5___default()(links, link => {
      const isLocal = link.href.indexOf(window.location.origin) > -1;
      const isAnchor = link.href.indexOf("#") > -1;
      if (isLocal) {
        link.onclick = event => {
          event.preventDefault();
          if (!isAnchor) {
            this.onChange({
              url: link.href
            });
          }
        };
      } else if (link.href.indexOf("mailto") === -1 && link.href.indexOf("tel") === -1) {
        link.rel = "noopener";
        link.target = "_blank";
      }
    });
  }
}
const fontNeueHaas = new (fontfaceobserver_fontfaceobserver_standalone__WEBPACK_IMPORTED_MODULE_4___default())("Neue Haas Grotesk Regular");
Promise.all([fontNeueHaas.load()]).then(_ => {
  window.APP = new App();
}).catch(_ => {
  window.APP = new App();
});
console.log("%c Developed by David Faure - http://davidfaure.eu/", "background: #413A2A; color: #F2AB26;");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("590811b5363c7647b8e6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzFlNzhmZWViZGVhNjhkYzk4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDRjtBQUNKO0FBRWU7QUFDMkM7QUFFN0M7QUFFVztBQUVWO0FBQ0Y7QUFFUztBQUNNO0FBRTVDLE1BQU1RLEdBQUcsQ0FBQztFQUNSQyxXQUFXQSxDQUFBLEVBQUc7SUFDWlQscURBQVEsQ0FBQyxJQUFJLENBQUM7SUFFZCxJQUFJLENBQUNVLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2pELElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxPQUFPLENBQUNELFFBQVE7SUFFN0MsSUFBSSxDQUFDRSxZQUFZLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0lBRXRCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUlmLG1EQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQ2EsS0FBSyxDQUFDRSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUlkLGtEQUFJLENBQUMsQ0FBQyxDQUFDO0lBRWxDLElBQUksQ0FBQ2UsSUFBSSxHQUFHLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxHQUFHLENBQUMsSUFBSSxDQUFDUixRQUFRLENBQUM7SUFDekMsSUFBSSxDQUFDTyxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQztJQUVoQixJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxDQUFDO0VBQ2hDO0VBRUFULGVBQWVBLENBQUEsRUFBRztJQUNoQixJQUFJLENBQUNVLFNBQVMsR0FB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QUMsRUFBRTtRQUNoRkgsSUFBSSxDQUFDTyxHQUFHLEdBQUcsVUFBVTtRQUNyQlAsSUFBSSxDQUFDYixNQUFNLEdBQUcsUUFBUTtNQUN4QjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxNQUFNcUIsWUFBWSxHQUFHLElBQUkzRixxRkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQztBQUV0RWdELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMwQyxZQUFZLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMvQkMsSUFBSSxDQUFDM0IsQ0FBQyxJQUFJO0VBQ1QzQixNQUFNLENBQUN1RCxHQUFHLEdBQUcsSUFBSXZGLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUNEd0YsS0FBSyxDQUFDN0IsQ0FBQyxJQUFJO0VBQ1YzQixNQUFNLENBQUN1RCxHQUFHLEdBQUcsSUFBSXZGLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVKeUYsT0FBTyxDQUFDQyxHQUFHLENBQ1QscURBQXFELEVBQ3JELHNDQUNGLENBQUM7Ozs7Ozs7O1VDdlNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ1dGlscy9wb2x5ZmlsbFwiXG5pbXBvcnQgXCJ1dGlscy9zY3JvbGxcIlxuaW1wb3J0IFwidXRpbHMvc3dcIlxuXG5pbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5pbXBvcnQgRm9udEZhY2VPYnNlcnZlciBmcm9tIFwiZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLnN0YW5kYWxvbmVcIlxuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCJjbGFzc2VzL0RldGVjdGlvblwiXG5cbmltcG9ydCBBYm91dCBmcm9tIFwicGFnZXMvQWJvdXRcIlxuaW1wb3J0IEhvbWUgZnJvbSBcInBhZ2VzL0hvbWVcIlxuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCJjb21wb25lbnRzL0NhbnZhc1wiXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJjb21wb25lbnRzL1ByZWxvYWRlclwiXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmRhdGFzZXQudGVtcGxhdGVcblxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cbiAgICB0aGlzLnBhZ2VzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5wYWdlcy5zZXQoXCJhYm91dFwiLCBuZXcgQWJvdXQoKSlcbiAgICB0aGlzLnBhZ2VzLnNldChcImhvbWVcIiwgbmV3IEhvbWUoKSlcblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXMuZ2V0KHRoaXMudGVtcGxhdGUpXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5hZGRMaW5rc0V2ZW50c0xpc3RlbmVycygpXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKHsgY2FudmFzOiB0aGlzLmNhbnZhcyB9KVxuICAgIHRoaXMucHJlbG9hZGVyLm9uKFwiY29tcGxldGVcIiwgdGhpcy5vblByZWxvYWRlZClcbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh7XG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzLlxuICAgKi9cbiAgYXN5bmMgb25DaGFuZ2UoeyBwdXNoID0gdHJ1ZSwgdXJsID0gbnVsbCB9KSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nIHx8IHRoaXMudXJsID09PSB1cmwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiXG5cbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuICAgIHRoaXMub25SZXF1ZXN0KHtcbiAgICAgIHB1c2gsXG4gICAgICByZXNwb25zZSxcbiAgICAgIHVybFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvblJlcXVlc3QoeyBwdXNoLCByZXNwb25zZSwgdXJsIH0pIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgaHRtbC5pbm5lckhUTUwgPSByZXNwb25zZVxuXG4gICAgY29uc3QgY29udGVudCA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG5cbiAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlLmhpZGUoY29udGVudC5kYXRhc2V0LnRlbXBsYXRlKV0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQudGl0bGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS50ZXh0Q29udGVudFxuXG4gICAgaWYgKHB1c2gpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudC5pbm5lckhUTUxcbiAgICB0aGlzLmNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZSA9IGNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZVxuXG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZVxuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlcy5nZXQodGhpcy50ZW1wbGF0ZSlcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcblxuICAgIHRoaXMuYWRkTGlua3NFdmVudHNMaXN0ZW5lcnMoKVxuXG4gICAgYXdhaXQgdGhpcy5wYWdlLnNob3coKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIlxuXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIExvb3AuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdHMpIHtcbiAgICAgIHRoaXMuc3RhdHMuYmVnaW4oKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgdGhpcy5jYW52YXMudXBkYXRlKHRoaXMpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdHMpIHtcbiAgICAgIHRoaXMuc3RhdHMuZW5kKClcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKVxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50cy5cbiAgICovXG4gIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgb25Qb3BTdGF0ZSgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcHVzaDogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKClcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLm9uUmVzaXplKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIHRoaXMucGFnZS5zY3JvbGwudGFyZ2V0ICs9IDEwMFxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgdGhpcy5wYWdlLnNjcm9sbC50YXJnZXQgLT0gMTAwXG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0luKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSAmJiBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJBXCIpIHJldHVyblxuXG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vblRvdWNoRG93bihldmVudClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5wYWdlLm9uVG91Y2hEb3duKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZSkge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUoZXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25Ub3VjaERvd24pIHtcbiAgICAgIHRoaXMucGFnZS5vblRvdWNoTW92ZShldmVudClcbiAgICB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hVcCkge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaFVwKGV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uVG91Y2hEb3duKSB7XG4gICAgICB0aGlzLnBhZ2Uub25Ub3VjaFVwKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vbldoZWVsKSB7XG4gICAgICB0aGlzLnBhZ2Uub25XaGVlbChldmVudClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzLlxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wU3RhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vblRvdWNoRG93biwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Ub3VjaFVwLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hEb3duLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25Ub3VjaFVwLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uV2hlZWwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5vbldoZWVsLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5vbkZvY3VzSW4pXG5cbiAgICBpZiAoRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHtcbiAgICAgIHdpbmRvdy5vbmNvbnRleHRtZW51ID0gdGhpcy5vbkNvbnRleHRNZW51XG4gICAgfVxuICB9XG5cbiAgYWRkTGlua3NFdmVudHNMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgZWFjaChsaW5rcywgbGluayA9PiB7XG4gICAgICBjb25zdCBpc0xvY2FsID0gbGluay5ocmVmLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLm9yaWdpbikgPiAtMVxuICAgICAgY29uc3QgaXNBbmNob3IgPSBsaW5rLmhyZWYuaW5kZXhPZihcIiNcIikgPiAtMVxuXG4gICAgICBpZiAoaXNMb2NhbCkge1xuICAgICAgICBsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgaWYgKCFpc0FuY2hvcikge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgIHVybDogbGluay5ocmVmXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsaW5rLmhyZWYuaW5kZXhPZihcIm1haWx0b1wiKSA9PT0gLTEgJiYgbGluay5ocmVmLmluZGV4T2YoXCJ0ZWxcIikgPT09IC0xKSB7XG4gICAgICAgIGxpbmsucmVsID0gXCJub29wZW5lclwiXG4gICAgICAgIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgZm9udE5ldWVIYWFzID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoXCJOZXVlIEhhYXMgR3JvdGVzayBSZWd1bGFyXCIpXG5cblByb21pc2UuYWxsKFtmb250TmV1ZUhhYXMubG9hZCgpXSlcbiAgLnRoZW4oXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuICAuY2F0Y2goXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuXG5jb25zb2xlLmxvZyhcbiAgXCIlYyBEZXZlbG9wZWQgYnkgRGF2aWQgRmF1cmUgLSBodHRwOi8vZGF2aWRmYXVyZS5ldS9cIixcbiAgXCJiYWNrZ3JvdW5kOiAjNDEzQTJBOyBjb2xvcjogI0YyQUIyNjtcIlxuKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTkwODExYjUzNjNjNzY0N2I4ZTZcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJGb250RmFjZU9ic2VydmVyIiwiZWFjaCIsIkRldGVjdGlvbiIsIkFib3V0IiwiSG9tZSIsIkNhbnZhcyIsIlByZWxvYWRlciIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZGF0YXNldCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVByZWxvYWRlciIsInBhZ2VzIiwiTWFwIiwic2V0IiwicGFnZSIsImdldCIsImNyZWF0ZSIsInNob3ciLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtzRXZlbnRzTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwiY2FudmFzIiwib24iLCJvblByZWxvYWRlZCIsIm9uUmVzaXplIiwidXBkYXRlIiwidXJsIiwib25DaGFuZ2UiLCJwdXNoIiwiaXNMb2FkaW5nIiwiYm9keSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsImhlYWRlcnMiLCJyZXNwb25zZSIsInRleHQiLCJvblJlcXVlc3QiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIlByb21pc2UiLCJhbGwiLCJoaWRlIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJzdGF0cyIsImJlZ2luIiwiZW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25Db250ZXh0TWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvblBvcFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl8iLCJvbktleURvd24iLCJrZXkiLCJzY3JvbGwiLCJ0YXJnZXQiLCJvbkZvY3VzSW4iLCJvblRvdWNoRG93biIsImlzTW9iaWxlIiwidGFnTmFtZSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwib25jb250ZXh0bWVudSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJpc0xvY2FsIiwiaHJlZiIsImluZGV4T2YiLCJvcmlnaW4iLCJpc0FuY2hvciIsIm9uY2xpY2siLCJyZWwiLCJmb250TmV1ZUhhYXMiLCJsb2FkIiwidGhlbiIsIkFQUCIsImNhdGNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=