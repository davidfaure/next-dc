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
    this.createPreloader();
    this.createCanvas();
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
    this.preloader.destroy();
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
const fontNeueMontreal = new (fontfaceobserver_fontfaceobserver_standalone__WEBPACK_IMPORTED_MODULE_4___default())("PP Neue Montreal");
Promise.all([fontNeueMontreal.load()]).then(_ => {
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
/******/ 	__webpack_require__.h = () => ("0219bf4c9879ee718f56")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lYmFkMDUzNDE5N2U4ODJjNTAyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDRjtBQUNKO0FBRWU7QUFDMkM7QUFFN0M7QUFFVztBQUVWO0FBQ0Y7QUFFUztBQUNNO0FBRTVDLE1BQU1RLEdBQUcsQ0FBQztFQUNSQyxXQUFXQSxDQUFBLEVBQUc7SUFDWlQscURBQVEsQ0FBQyxJQUFJLENBQUM7SUFFZCxJQUFJLENBQUNVLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2pELElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxPQUFPLENBQUNELFFBQVE7SUFFN0MsSUFBSSxDQUFDRSxlQUFlLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO0lBRW5CLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ0QsS0FBSyxDQUFDRSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUlmLG1EQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQ2EsS0FBSyxDQUFDRSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUlkLGtEQUFJLENBQUMsQ0FBQyxDQUFDO0lBRWxDLElBQUksQ0FBQ2UsSUFBSSxHQUFHLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxHQUFHLENBQUMsSUFBSSxDQUFDUixRQUFRLENBQUM7SUFDekMsSUFBSSxDQUFDTyxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQztJQUVoQixJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxDQUFDO0VBQ2hDO0VBRUFWLGVBQWVBLENBQUEsRUFBRztJQUNoQixJQUFJLENBQUNXLFNBQVMsR0FB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SUFBSSxDQUFDQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDaEZILElBQUksQ0FBQ08sR0FBRyxHQUFHLFVBQVU7UUFDckJQLElBQUksQ0FBQ2IsTUFBTSxHQUFHLFFBQVE7TUFDeEI7SUFDRixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRUEsTUFBTXFCLGdCQUFnQixHQUFHLElBQUk1RixxRkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUVqRWlELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMwQyxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ25DQyxJQUFJLENBQUMzQixDQUFDLElBQUk7RUFDVDNCLE1BQU0sQ0FBQ3VELEdBQUcsR0FBRyxJQUFJeEYsR0FBRyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQ0R5RixLQUFLLENBQUM3QixDQUFDLElBQUk7RUFDVjNCLE1BQU0sQ0FBQ3VELEdBQUcsR0FBRyxJQUFJeEYsR0FBRyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUowRixPQUFPLENBQUNDLEdBQUcsQ0FDVCxxREFBcUQsRUFDckQsc0NBQ0YsQ0FBQzs7Ozs7Ozs7VUN6U0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInV0aWxzL3BvbHlmaWxsXCJcbmltcG9ydCBcInV0aWxzL3Njcm9sbFwiXG5pbXBvcnQgXCJ1dGlscy9zd1wiXG5cbmltcG9ydCBBdXRvQmluZCBmcm9tIFwiYXV0by1iaW5kXCJcbmltcG9ydCBGb250RmFjZU9ic2VydmVyIGZyb20gXCJmb250ZmFjZW9ic2VydmVyL2ZvbnRmYWNlb2JzZXJ2ZXIuc3RhbmRhbG9uZVwiXG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSBcImNsYXNzZXMvRGV0ZWN0aW9uXCJcblxuaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dFwiXG5pbXBvcnQgSG9tZSBmcm9tIFwicGFnZXMvSG9tZVwiXG5cbmltcG9ydCBDYW52YXMgZnJvbSBcImNvbXBvbmVudHMvQ2FudmFzXCJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcImNvbXBvbmVudHMvUHJlbG9hZGVyXCJcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZVxuXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcblxuICAgIHRoaXMucGFnZXMgPSBuZXcgTWFwKClcbiAgICB0aGlzLnBhZ2VzLnNldChcImFib3V0XCIsIG5ldyBBYm91dCgpKVxuICAgIHRoaXMucGFnZXMuc2V0KFwiaG9tZVwiLCBuZXcgSG9tZSgpKVxuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlcy5nZXQodGhpcy50ZW1wbGF0ZSlcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLmFkZExpbmtzRXZlbnRzTGlzdGVuZXJzKClcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcbiAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoeyBjYW52YXM6IHRoaXMuY2FudmFzIH0pXG4gICAgdGhpcy5wcmVsb2FkZXIub24oXCJjb21wbGV0ZVwiLCB0aGlzLm9uUHJlbG9hZGVkKVxuICB9XG5cbiAgb25QcmVsb2FkZWQoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kcy5cbiAgICovXG4gIGFzeW5jIG9uQ2hhbmdlKHsgcHVzaCA9IHRydWUsIHVybCA9IG51bGwgfSkge1xuICAgIGlmICh0aGlzLmlzTG9hZGluZyB8fCB0aGlzLnVybCA9PT0gdXJsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIlxuXG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIlxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cbiAgICB0aGlzLm9uUmVxdWVzdCh7XG4gICAgICBwdXNoLFxuICAgICAgcmVzcG9uc2UsXG4gICAgICB1cmxcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25SZXF1ZXN0KHsgcHVzaCwgcmVzcG9uc2UsIHVybCB9KSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGh0bWwuaW5uZXJIVE1MID0gcmVzcG9uc2VcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuXG4gICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZS5oaWRlKGNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZSldKVxuICAgIH1cblxuICAgIGRvY3VtZW50LnRpdGxlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIikudGV4dENvbnRlbnRcblxuICAgIGlmIChwdXNoKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpXG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQuaW5uZXJIVE1MXG4gICAgdGhpcy5jb250ZW50LmRhdGFzZXQudGVtcGxhdGUgPSBjb250ZW50LmRhdGFzZXQudGVtcGxhdGVcblxuICAgIHRoaXMudGVtcGxhdGUgPSBjb250ZW50LmRhdGFzZXQudGVtcGxhdGVcblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXMuZ2V0KHRoaXMudGVtcGxhdGUpXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG5cbiAgICB0aGlzLmFkZExpbmtzRXZlbnRzTGlzdGVuZXJzKClcblxuICAgIGF3YWl0IHRoaXMucGFnZS5zaG93KClcblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCJcblxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRzKSB7XG4gICAgICB0aGlzLnN0YXRzLmJlZ2luKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZSh0aGlzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRzKSB7XG4gICAgICB0aGlzLnN0YXRzLmVuZCgpXG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG9uUG9wU3RhdGUoKSB7XG4gICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHB1c2g6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG4gICAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICB0aGlzLnBhZ2Uuc2Nyb2xsLnRhcmdldCArPSAxMDBcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHRoaXMucGFnZS5zY3JvbGwudGFyZ2V0IC09IDEwMFxuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNJbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiQVwiKSByZXR1cm5cblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaERvd24oZXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25Ub3VjaERvd24pIHtcbiAgICAgIHRoaXMucGFnZS5vblRvdWNoRG93bihldmVudClcbiAgICB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKGV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uVG91Y2hEb3duKSB7XG4gICAgICB0aGlzLnBhZ2Uub25Ub3VjaE1vdmUoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5wYWdlLm9uVG91Y2hVcChldmVudClcbiAgICB9XG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbCkge1xuICAgICAgdGhpcy5wYWdlLm9uV2hlZWwoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVycy5cbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgdGhpcy5vblBvcFN0YXRlLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMub25Ub3VjaERvd24sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Ub3VjaE1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uVG91Y2hVcCwgeyBwYXNzaXZlOiB0cnVlIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoRG93biwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVG91Y2hVcCwgeyBwYXNzaXZlOiB0cnVlIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbldoZWVsLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMub25XaGVlbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMub25Gb2N1c0luKVxuXG4gICAgaWYgKERldGVjdGlvbi5pc01vYmlsZSgpKSB7XG4gICAgICB3aW5kb3cub25jb250ZXh0bWVudSA9IHRoaXMub25Db250ZXh0TWVudVxuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtzRXZlbnRzTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgY29uc3QgaXNMb2NhbCA9IGxpbmsuaHJlZi5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pID4gLTFcbiAgICAgIGNvbnN0IGlzQW5jaG9yID0gbGluay5ocmVmLmluZGV4T2YoXCIjXCIpID4gLTFcblxuICAgICAgaWYgKGlzTG9jYWwpIHtcbiAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgIGlmICghaXNBbmNob3IpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICB1cmw6IGxpbmsuaHJlZlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluay5ocmVmLmluZGV4T2YoXCJtYWlsdG9cIikgPT09IC0xICYmIGxpbmsuaHJlZi5pbmRleE9mKFwidGVsXCIpID09PSAtMSkge1xuICAgICAgICBsaW5rLnJlbCA9IFwibm9vcGVuZXJcIlxuICAgICAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGZvbnROZXVlTW9udHJlYWwgPSBuZXcgRm9udEZhY2VPYnNlcnZlcihcIlBQIE5ldWUgTW9udHJlYWxcIilcblxuUHJvbWlzZS5hbGwoW2ZvbnROZXVlTW9udHJlYWwubG9hZCgpXSlcbiAgLnRoZW4oXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuICAuY2F0Y2goXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuXG5jb25zb2xlLmxvZyhcbiAgXCIlYyBEZXZlbG9wZWQgYnkgRGF2aWQgRmF1cmUgLSBodHRwOi8vZGF2aWRmYXVyZS5ldS9cIixcbiAgXCJiYWNrZ3JvdW5kOiAjNDEzQTJBOyBjb2xvcjogI0YyQUIyNjtcIlxuKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDIxOWJmNGM5ODc5ZWU3MThmNTZcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJGb250RmFjZU9ic2VydmVyIiwiZWFjaCIsIkRldGVjdGlvbiIsIkFib3V0IiwiSG9tZSIsIkNhbnZhcyIsIlByZWxvYWRlciIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZGF0YXNldCIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNhbnZhcyIsInBhZ2VzIiwiTWFwIiwic2V0IiwicGFnZSIsImdldCIsImNyZWF0ZSIsInNob3ciLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtzRXZlbnRzTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwiY2FudmFzIiwib24iLCJvblByZWxvYWRlZCIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInVwZGF0ZSIsInVybCIsIm9uQ2hhbmdlIiwicHVzaCIsImlzTG9hZGluZyIsImJvZHkiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJ0ZXh0Iiwib25SZXF1ZXN0IiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJQcm9taXNlIiwiYWxsIiwiaGlkZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic3RhdHMiLCJiZWdpbiIsImVuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uQ29udGV4dE1lbnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25Qb3BTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJfIiwib25LZXlEb3duIiwia2V5Iiwic2Nyb2xsIiwidGFyZ2V0Iiwib25Gb2N1c0luIiwib25Ub3VjaERvd24iLCJpc01vYmlsZSIsInRhZ05hbWUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uY29udGV4dG1lbnUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwiaXNMb2NhbCIsImhyZWYiLCJpbmRleE9mIiwib3JpZ2luIiwiaXNBbmNob3IiLCJvbmNsaWNrIiwicmVsIiwiZm9udE5ldWVNb250cmVhbCIsImxvYWQiLCJ0aGVuIiwiQVBQIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==