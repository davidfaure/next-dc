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
    this.createCanvas();
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
  onMouseMove(event) {
    if (this.cursor && this.cursor.handleCursorMove) {
      this.cursor.handleCursorMove(event);
    }
  }

  /**
   * Listeners.
   */
  addEventListeners() {
    document.addEventListener("mouseover", function (event) {
      console.log("mouseover", event.target);
    });
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
/******/ 	__webpack_require__.h = () => ("33b82b2cb9d02f55e06f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYzlmNTcwNGNlOTAxZDExZjU1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0Y7QUFDSjtBQUVlO0FBQzJDO0FBRTdDO0FBRVc7QUFFVjtBQUNGO0FBRVM7QUFDTTtBQUNQO0FBRXJDLE1BQU1TLEdBQUcsQ0FBQztFQUNSQyxXQUFXQSxDQUFBLEVBQUc7SUFDWlYscURBQVEsQ0FBQyxJQUFJLENBQUM7SUFFZCxJQUFJLENBQUNXLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2pELElBQUksQ0FBQ0MsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxRQUFRLENBQUM7SUFDL0MsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDTCxPQUFPLENBQUNNLE9BQU8sQ0FBQ0QsUUFBUTtJQUU3QyxJQUFJLENBQUNFLFlBQVksQ0FBQyxDQUFDO0lBQ25CLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUV0QixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNELEtBQUssQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJbkIsbURBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDaUIsS0FBSyxDQUFDRSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUlsQixrREFBSSxDQUFDLENBQUMsQ0FBQztJQUVsQyxJQUFJLENBQUNtQixJQUFJLEdBQUcsSUFBSSxDQUFDSCxLQUFLLENBQUNJLEdBQUcsQ0FBQyxJQUFJLENBQUNULFFBQVEsQ0FBQztJQUN6QyxJQUFJLENBQUNRLElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDRixJQUFJLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBRWhCLElBQUksQ0FBQ0MsaUJB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QUFDL0IsQ0FBQyxJQUFJO0VBQ1QzQixNQUFNLENBQUMyRCxHQUFHLEdBQUcsSUFBSS9GLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUNEZ0csS0FBSyxDQUFDakMsQ0FBQyxJQUFJO0VBQ1YzQixNQUFNLENBQUMyRCxHQUFHLEdBQUcsSUFBSS9GLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVKOEUsT0FBTyxDQUFDQyxHQUFHLENBQ1QscURBQXFELEVBQ3JELHNDQUNGLENBQUM7Ozs7Ozs7O1VDNVREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ1dGlscy9wb2x5ZmlsbFwiXG5pbXBvcnQgXCJ1dGlscy9zY3JvbGxcIlxuaW1wb3J0IFwidXRpbHMvc3dcIlxuXG5pbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5pbXBvcnQgRm9udEZhY2VPYnNlcnZlciBmcm9tIFwiZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLnN0YW5kYWxvbmVcIlxuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCJjbGFzc2VzL0RldGVjdGlvblwiXG5cbmltcG9ydCBBYm91dCBmcm9tIFwicGFnZXMvQWJvdXRcIlxuaW1wb3J0IEhvbWUgZnJvbSBcInBhZ2VzL0hvbWVcIlxuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCJjb21wb25lbnRzL0NhbnZhc1wiXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJjb21wb25lbnRzL1ByZWxvYWRlclwiXG5pbXBvcnQgQ3Vyc29yIGZyb20gXCIuL2NsYXNzZXMvQ3Vyc29yXCJcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQXV0b0JpbmQodGhpcylcblxuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJzb3JcIilcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmRhdGFzZXQudGVtcGxhdGVcblxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcbiAgICB0aGlzLmNyZWF0ZUN1cnNvcigpXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXG4gICAgdGhpcy5wYWdlcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMucGFnZXMuc2V0KFwiYWJvdXRcIiwgbmV3IEFib3V0KCkpXG4gICAgdGhpcy5wYWdlcy5zZXQoXCJob21lXCIsIG5ldyBIb21lKCkpXG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzLmdldCh0aGlzLnRlbXBsYXRlKVxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMuYWRkTGlua3NFdmVudHNMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY3JlYXRlQ3Vyc29yKCkge1xuICAgIHRoaXMuY3Vyc29yID0gbmV3IEN1cnNvcih7IGN1cnNvcjogdGhpcy5jdXJzb3IsIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlIH0pXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKHsgY2FudmFzOiB0aGlzLmNhbnZhcyB9KVxuICAgIHRoaXMucHJlbG9hZGVyLm9uKFwiY29tcGxldGVcIiwgdGhpcy5vblByZWxvYWRlZClcbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjcmVhdGVDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHtcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZHMuXG4gICAqL1xuICBhc3luYyBvbkNoYW5nZSh7IHB1c2ggPSB0cnVlLCB1cmwgPSBudWxsIH0pIHtcbiAgICBpZiAodGhpcy5pc0xvYWRpbmcgfHwgdGhpcy51cmwgPT09IHVybCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCJcblxuICAgIHRoaXMudXJsID0gdXJsXG5cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG4gICAgdGhpcy5vblJlcXVlc3Qoe1xuICAgICAgcHVzaCxcbiAgICAgIHJlc3BvbnNlLFxuICAgICAgdXJsXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9uUmVxdWVzdCh7IHB1c2gsIHJlc3BvbnNlLCB1cmwgfSkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBodG1sLmlubmVySFRNTCA9IHJlc3BvbnNlXG5cbiAgICBjb25zdCBjb250ZW50ID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcblxuICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2UuaGlkZShjb250ZW50LmRhdGFzZXQudGVtcGxhdGUpXSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC50aXRsZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpLnRleHRDb250ZW50XG5cbiAgICBpZiAocHVzaCkge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKVxuICAgIH1cblxuICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50LmlubmVySFRNTFxuICAgIHRoaXMuY29udGVudC5kYXRhc2V0LnRlbXBsYXRlID0gY29udGVudC5kYXRhc2V0LnRlbXBsYXRlXG5cbiAgICB0aGlzLnRlbXBsYXRlID0gY29udGVudC5kYXRhc2V0LnRlbXBsYXRlXG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzLmdldCh0aGlzLnRlbXBsYXRlKVxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuXG4gICAgdGhpcy5hZGRMaW5rc0V2ZW50c0xpc3RlbmVycygpXG5cbiAgICBhd2FpdCB0aGlzLnBhZ2Uuc2hvdygpXG5cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiXG5cbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogTG9vcC5cbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0cykge1xuICAgICAgdGhpcy5zdGF0cy5iZWdpbigpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICB0aGlzLmNhbnZhcy51cGRhdGUodGhpcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0cykge1xuICAgICAgdGhpcy5zdGF0cy5lbmQoKVxuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpXG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBvblBvcFN0YXRlKCkge1xuICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBwdXNoOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuICAgICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMub25SZXNpemUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgdGhpcy5wYWdlLnNjcm9sbC50YXJnZXQgKz0gMTAwXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICB0aGlzLnBhZ2Uuc2Nyb2xsLnRhcmdldCAtPSAxMDBcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzSW4oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBvblRvdWNoRG93bihldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoIURldGVjdGlvbi5pc01vYmlsZSgpICYmIGV2ZW50LnRhcmdldC50YWdOYW1lID09PSBcIkFcIikgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaERvd24pIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKGV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uVG91Y2hEb3duKSB7XG4gICAgICB0aGlzLnBhZ2Uub25Ub3VjaERvd24oZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZShldmVudClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5wYWdlLm9uVG91Y2hNb3ZlKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaFVwKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vblRvdWNoVXAoZXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25Ub3VjaERvd24pIHtcbiAgICAgIHRoaXMucGFnZS5vblRvdWNoVXAoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgb25XaGVlbChldmVudCkge1xuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uV2hlZWwpIHtcbiAgICAgIHRoaXMucGFnZS5vbldoZWVsKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY3Vyc29yICYmIHRoaXMuY3Vyc29yLmhhbmRsZUN1cnNvck1vdmUpIHtcbiAgICAgIHRoaXMuY3Vyc29yLmhhbmRsZUN1cnNvck1vdmUoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVycy5cbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vdXNlb3ZlclwiLCBldmVudC50YXJnZXQpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgdGhpcy5vblBvcFN0YXRlLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMub25Ub3VjaERvd24sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Ub3VjaE1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uVG91Y2hVcCwgeyBwYXNzaXZlOiB0cnVlIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5vblRvdWNoRG93biwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVG91Y2hVcCwgeyBwYXNzaXZlOiB0cnVlIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbldoZWVsLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMub25XaGVlbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbktleURvd24pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMub25Gb2N1c0luKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZSlcblxuICAgIGlmIChEZXRlY3Rpb24uaXNNb2JpbGUoKSkge1xuICAgICAgd2luZG93Lm9uY29udGV4dG1lbnUgPSB0aGlzLm9uQ29udGV4dE1lbnVcbiAgICB9XG4gIH1cblxuICBhZGRMaW5rc0V2ZW50c0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpXG5cbiAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcbiAgICAgIGNvbnN0IGlzTG9jYWwgPSBsaW5rLmhyZWYuaW5kZXhPZih3aW5kb3cubG9jYXRpb24ub3JpZ2luKSA+IC0xXG4gICAgICBjb25zdCBpc0FuY2hvciA9IGxpbmsuaHJlZi5pbmRleE9mKFwiI1wiKSA+IC0xXG5cbiAgICAgIGlmIChpc0xvY2FsKSB7XG4gICAgICAgIGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICBpZiAoIWlzQW5jaG9yKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgdXJsOiBsaW5rLmhyZWZcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxpbmsuaHJlZi5pbmRleE9mKFwibWFpbHRvXCIpID09PSAtMSAmJiBsaW5rLmhyZWYuaW5kZXhPZihcInRlbFwiKSA9PT0gLTEpIHtcbiAgICAgICAgbGluay5yZWwgPSBcIm5vb3BlbmVyXCJcbiAgICAgICAgbGluay50YXJnZXQgPSBcIl9ibGFua1wiXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBmb250TmV1ZU1vbnRyZWFsID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoXCJQUCBOZXVlIE1vbnRyZWFsXCIpXG5cblByb21pc2UuYWxsKFtmb250TmV1ZU1vbnRyZWFsLmxvYWQoKV0pXG4gIC50aGVuKF8gPT4ge1xuICAgIHdpbmRvdy5BUFAgPSBuZXcgQXBwKClcbiAgfSlcbiAgLmNhdGNoKF8gPT4ge1xuICAgIHdpbmRvdy5BUFAgPSBuZXcgQXBwKClcbiAgfSlcblxuY29uc29sZS5sb2coXG4gIFwiJWMgRGV2ZWxvcGVkIGJ5IERhdmlkIEZhdXJlIC0gaHR0cDovL2RhdmlkZmF1cmUuZXUvXCIsXG4gIFwiYmFja2dyb3VuZDogIzQxM0EyQTsgY29sb3I6ICNGMkFCMjY7XCJcbilcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMzYjgyYjJjYjlkMDJmNTVlMDZmXCIpIl0sIm5hbWVzIjpbIkF1dG9CaW5kIiwiRm9udEZhY2VPYnNlcnZlciIsImVhY2giLCJEZXRlY3Rpb24iLCJBYm91dCIsIkhvbWUiLCJDYW52YXMiLCJQcmVsb2FkZXIiLCJDdXJzb3IiLCJBcHAiLCJjb25zdHJ1Y3RvciIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJzb3IiLCJnZXRFbGVtZW50QnlJZCIsInRlbXBsYXRlIiwiZGF0YXNldCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZUN1cnNvciIsImNyZWF0ZVByZWxvYWRlciIsInBhZ2VzIiwiTWFwIiwic2V0IiwicGFnZSIsImdldCIsImNyZWF0ZSIsInNob3ciLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtzRXZlbnRzTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwiY2FudmFzIiwib24iLCJvblByZWxvYWRlZCIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInVwZGF0ZSIsInVybCIsIm9uQ2hhbmdlIiwicHVzaCIsImlzTG9hZGluZyIsImJvZHkiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJ0ZXh0Iiwib25SZXF1ZXN0IiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJQcm9taXNlIiwiYWxsIiwiaGlkZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic3RhdHMiLCJiZWdpbiIsImVuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uQ29udGV4dE1lbnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25Qb3BTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJfIiwib25LZXlEb3duIiwia2V5Iiwic2Nyb2xsIiwidGFyZ2V0Iiwib25Gb2N1c0luIiwib25Ub3VjaERvd24iLCJpc01vYmlsZSIsInRhZ05hbWUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJvbk1vdXNlTW92ZSIsImhhbmRsZUN1cnNvck1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInBhc3NpdmUiLCJvbmNvbnRleHRtZW51IiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsImlzTG9jYWwiLCJocmVmIiwiaW5kZXhPZiIsIm9yaWdpbiIsImlzQW5jaG9yIiwib25jbGljayIsInJlbCIsImZvbnROZXVlTW9udHJlYWwiLCJsb2FkIiwidGhlbiIsIkFQUCIsImNhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==