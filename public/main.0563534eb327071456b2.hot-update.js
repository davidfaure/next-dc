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
/* harmony import */ var _classes_Cursor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes/Cursor */ "./app/classes/Cursor.js");












class App {
  constructor() {
    (0,auto_bind__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
    this.content = document.querySelector(".content");
    this.cursor = document.getElementById("cursor");
    this.template = this.content.dataset.template;

    // this.createCanvas()
    this.createCursor();
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
  createCursor() {
    this.cursor = new _classes_Cursor__WEBPACK_IMPORTED_MODULE_11__["default"]({
      cursor: this.cursor,
      template: this.template
    });
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_10__["default"]({
      canvas: this.canvas
    });
    this.preloader.on("complete", this.onPreloaded);
  }
  onPreloaded() {
    // this.canvas.onPreloaded()

    this.preloader.destroy();
    this.onResize();
    this.update();
  }

  // createCanvas() {
  //   this.canvas = new Canvas({
  //     url: this.template
  //   })
  // }

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
  onMouseMove(event) {
    if (this.cursor && this.cursor.handleCursorMove) {
      this.cursor.handleCursorMove(event);
    }
  }

  /**
   * Listeners.
   */
  addEventListeners() {
    // document.addEventListener("mouseover", function (event) {
    //   console.log("mouseover", event.target)
    // })

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
    window.addEventListener("mousemove", this.onMouseMove);
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
/******/ 	__webpack_require__.h = () => ("b20453e5df4841aac10d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O1VDOVREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ1dGlscy9wb2x5ZmlsbFwiXG5pbXBvcnQgXCJ1dGlscy9zY3JvbGxcIlxuaW1wb3J0IFwidXRpbHMvc3dcIlxuXG5pbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5pbXBvcnQgRm9udEZhY2VPYnNlcnZlciBmcm9tIFwiZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLnN0YW5kYWxvbmVcIlxuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCJjbGFzc2VzL0RldGVjdGlvblwiXG5cbmltcG9ydCBBYm91dCBmcm9tIFwicGFnZXMvQWJvdXRcIlxuaW1wb3J0IEhvbWUgZnJvbSBcInBhZ2VzL0hvbWVcIlxuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCJjb21wb25lbnRzL0NhbnZhc1wiXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJjb21wb25lbnRzL1ByZWxvYWRlclwiXG5pbXBvcnQgQ3Vyc29yIGZyb20gXCIuL2NsYXNzZXMvQ3Vyc29yXCJcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJzb3JcIilcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmRhdGFzZXQudGVtcGxhdGVcblxuICAgIC8vIHRoaXMuY3JlYXRlQ2FudmFzKClcbiAgICB0aGlzLmNyZWF0ZUN1cnNvcigpXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXG4gICAgdGhpcy5wYWdlcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMucGFnZXMuc2V0KFwiYWJvdXRcIiwgbmV3IEFib3V0KCkpXG4gICAgdGhpcy5wYWdlcy5zZXQoXCJob21lXCIsIG5ldyBIb21lKCkpXG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzLmdldCh0aGlzLnRlbXBsYXRlKVxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMuYWRkTGlua3NFdmVudHNMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY3JlYXRlQ3Vyc29yKCkge1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcih7IGN1cnNvcjogdGhpcy5jdXJzb3IsIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlIH0pXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKHsgY2FudmFzOiB0aGlzLmNhbnZhcyB9KVxuICAgIHRoaXMucHJlbG9hZGVyLm9uKFwiY29tcGxldGVcIiwgdGhpcy5vblByZWxvYWRlZClcbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIC8vIHRoaXMuY2FudmFzLm9uUHJlbG9hZGVkKClcblxuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICAvLyBjcmVhdGVDYW52YXMoKSB7XG4gIC8vICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHtcbiAgLy8gICAgIHVybDogdGhpcy50ZW1wbGF0ZVxuICAvLyAgIH0pXG4gIC8vIH1cblxuICAvKipcbiAgICogTWV0aG9kcy5cbiAgICovXG4gIGFzeW5jIG9uQ2hhbmdlKHsgcHVzaCA9IHRydWUsIHVybCA9IG51bGwgfSkge1xuICAgIGlmICh0aGlzLmlzTG9hZGluZyB8fCB0aGlzLnVybCA9PT0gdXJsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIlxuXG4gICAgdGhpcy51cmwgPSB1cmxcblxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIlxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cbiAgICB0aGlzLm9uUmVxdWVzdCh7XG4gICAgICBwdXNoLFxuICAgICAgcmVzcG9uc2UsXG4gICAgICB1cmxcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25SZXF1ZXN0KHsgcHVzaCwgcmVzcG9uc2UsIHVybCB9KSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGh0bWwuaW5uZXJIVE1MID0gcmVzcG9uc2VcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuXG4gICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZS5oaWRlKGNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZSldKVxuICAgIH1cblxuICAgIGRvY3VtZW50LnRpdGxlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIikudGV4dENvbnRlbnRcblxuICAgIGlmIChwdXNoKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpXG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQuaW5uZXJIVE1MXG4gICAgdGhpcy5jb250ZW50LmRhdGFzZXQudGVtcGxhdGUgPSBjb250ZW50LmRhdGFzZXQudGVtcGxhdGVcblxuICAgIHRoaXMudGVtcGxhdGUgPSBjb250ZW50LmRhdGFzZXQudGVtcGxhdGVcblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXMuZ2V0KHRoaXMudGVtcGxhdGUpXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG5cbiAgICB0aGlzLmFkZExpbmtzRXZlbnRzTGlzdGVuZXJzKClcblxuICAgIGF3YWl0IHRoaXMucGFnZS5zaG93KClcblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCJcblxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRzKSB7XG4gICAgICB0aGlzLnN0YXRzLmJlZ2luKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZSh0aGlzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRzKSB7XG4gICAgICB0aGlzLnN0YXRzLmVuZCgpXG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG9uUG9wU3RhdGUoKSB7XG4gICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHB1c2g6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG4gICAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICB0aGlzLnBhZ2Uuc2Nyb2xsLnRhcmdldCArPSAxMDBcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHRoaXMucGFnZS5zY3JvbGwudGFyZ2V0IC09IDEwMFxuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNJbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiQVwiKSByZXR1cm5cblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaERvd24oZXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25Ub3VjaERvd24pIHtcbiAgICAgIHRoaXMucGFnZS5vblRvdWNoRG93bihldmVudClcbiAgICB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKGV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uVG91Y2hEb3duKSB7XG4gICAgICB0aGlzLnBhZ2Uub25Ub3VjaE1vdmUoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5wYWdlLm9uVG91Y2hVcChldmVudClcbiAgICB9XG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbCkge1xuICAgICAgdGhpcy5wYWdlLm9uV2hlZWwoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jdXJzb3IgJiYgdGhpcy5jdXJzb3IuaGFuZGxlQ3Vyc29yTW92ZSkge1xuICAgICAgdGhpcy5jdXJzb3IuaGFuZGxlQ3Vyc29yTW92ZShldmVudClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzLlxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwibW91c2VvdmVyXCIsIGV2ZW50LnRhcmdldClcbiAgICAvLyB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wU3RhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vblRvdWNoRG93biwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Ub3VjaFVwLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hEb3duLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25Ub3VjaFVwLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uV2hlZWwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5vbldoZWVsLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5vbkZvY3VzSW4pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuXG4gICAgaWYgKERldGVjdGlvbi5pc01vYmlsZSgpKSB7XG4gICAgICB3aW5kb3cub25jb250ZXh0bWVudSA9IHRoaXMub25Db250ZXh0TWVudVxuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtzRXZlbnRzTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgY29uc3QgaXNMb2NhbCA9IGxpbmsuaHJlZi5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pID4gLTFcbiAgICAgIGNvbnN0IGlzQW5jaG9yID0gbGluay5ocmVmLmluZGV4T2YoXCIjXCIpID4gLTFcblxuICAgICAgaWYgKGlzTG9jYWwpIHtcbiAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgIGlmICghaXNBbmNob3IpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICB1cmw6IGxpbmsuaHJlZlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluay5ocmVmLmluZGV4T2YoXCJtYWlsdG9cIikgPT09IC0xICYmIGxpbmsuaHJlZi5pbmRleE9mKFwidGVsXCIpID09PSAtMSkge1xuICAgICAgICBsaW5rLnJlbCA9IFwibm9vcGVuZXJcIlxuICAgICAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGZvbnROZXVlTW9udHJlYWwgPSBuZXcgRm9udEZhY2VPYnNlcnZlcihcIlBQIE5ldWUgTW9udHJlYWxcIilcblxuUHJvbWlzZS5hbGwoW2ZvbnROZXVlTW9udHJlYWwubG9hZCgpXSlcbiAgLnRoZW4oXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuICAuY2F0Y2goXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuXG5jb25zb2xlLmxvZyhcbiAgXCIlYyBEZXZlbG9wZWQgYnkgRGF2aWQgRmF1cmUgLSBodHRwOi8vZGF2aWRmYXVyZS5ldS9cIixcbiAgXCJiYWNrZ3JvdW5kOiAjNDEzQTJBOyBjb2xvcjogI0YyQUIyNjtcIlxuKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjIwNDUzZTVkZjQ4NDFhYWMxMGRcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJGb250RmFjZU9ic2VydmVyIiwiZWFjaCIsIkRldGVjdGlvbiIsIkFib3V0IiwiSG9tZSIsIkNhbnZhcyIsIlByZWxvYWRlciIsIkN1cnNvciIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnNvciIsImdldEVsZW1lbnRCeUlkIiwidGVtcGxhdGUiLCJkYXRhc2V0IiwiY3JlYXRlQ3Vyc29yIiwiY3JlYXRlUHJlbG9hZGVyIiwicGFnZXMiLCJNYXAiLCJzZXQiLCJwYWdlIiwiZ2V0IiwiY3JlYXRlIiwic2hvdyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua3NFdmVudHNMaXN0ZW5lcnMiLCJwcmVsb2FkZXIiLCJjYW52YXMiLCJvbiIsIm9uUHJlbG9hZGVkIiwiZGVzdHJveSIsIm9uUmVzaXplIiwidXBkYXRlIiwib25DaGFuZ2UiLCJwdXNoIiwidXJsIiwiaXNMb2FkaW5nIiwiYm9keSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsImhlYWRlcnMiLCJyZXNwb25zZSIsInRleHQiLCJvblJlcXVlc3QiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIlByb21pc2UiLCJhbGwiLCJoaWRlIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJzdGF0cyIsImJlZ2luIiwiZW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25Db250ZXh0TWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvblBvcFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl8iLCJvbktleURvd24iLCJrZXkiLCJzY3JvbGwiLCJ0YXJnZXQiLCJvbkZvY3VzSW4iLCJvblRvdWNoRG93biIsImlzTW9iaWxlIiwidGFnTmFtZSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm9uTW91c2VNb3ZlIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwib25jb250ZXh0bWVudSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJpc0xvY2FsIiwiaHJlZiIsImluZGV4T2YiLCJvcmlnaW4iLCJpc0FuY2hvciIsIm9uY2xpY2siLCJyZWwiLCJmb250TmV1ZU1vbnRyZWFsIiwibG9hZCIsInRoZW4iLCJBUFAiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9