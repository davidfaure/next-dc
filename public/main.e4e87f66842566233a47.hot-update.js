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
    // this.cursor = document.getElementById("cursor")
    this.template = this.content.dataset.template;
    this.createCanvas();
    // this.createCursor()
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

  // createCursor() {
  //   this.cursor = new Cursor({ cursor: this.cursor, template: this.template })
  // }

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
    event.stopPropagation();
    if (this.cursor && this.cursor.handleCursorMove) {
      this.cursor.handleCursorMove(event);
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
/******/ 	__webpack_require__.h = () => ("4af3fdd8ad8244473a76")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRTtRQUNYRCxJQUFJLENBQUNNLE9BQU8sR0FBR2hDLEtBQUssSUFBSTtVQUN0QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztVQUV0QixJQUFJLENBQUM4QixRQUFRLEVBQUU7WUFDYixJQUFJLENBQUMzRCxRQUFRLENBQUM7Y0FDWkQsR0FBRyxFQUFFdUQsSUFBSSxDQUFDRTtZQUNaLENBQUMsQ0FBQztVQUNKO1FBQ0YsQ0FBQztNQUNILENBQUMsTUFBTSxJQUFJRixJQUFJLENBQUNFLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJSCxJQUFJLENBQUNFLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2hGSCxJQUFJLENBQUNPLEdBQUcsR0FBRyxVQUFVO1FBQ3JCUCxJQUFJLENBQUNoQixNQUFNLEdBQUcsUUFBUTtNQUN4QjtJQUNGLENBQUMsQ0FBQztFQUNKO0FBQ0Y7QUFFQSxNQUFNd0IsZ0JBQWdCLEdBQUcsSUFBSWhHLHFGQUFnQixDQUFDLGtCQUFrQixDQUFDO0FBRWpFa0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQzZDLGdCQUFnQixDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkNDLElBQUksQ0FBQzlCLENBQUMsSUFBSTtFQUNUM0IsTUFBTSxDQUFDMEQsR0FBRyxHQUFHLElBQUkzRixHQUFHLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FDRDRGLEtBQUssQ0FBQ2hDLENBQUMsSUFBSTtFQUNWM0IsTUFBTSxDQUFDMEQsR0FBRyxHQUFHLElBQUkzRixHQUFHLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFSjZGLE9BQU8sQ0FBQ0MsR0FBRyxDQUNULHFEQUFxRCxFQUNyRCxzQ0FDRixDQUFDOzs7Ozs7OztVQzFURCIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidXRpbHMvcG9seWZpbGxcIlxuaW1wb3J0IFwidXRpbHMvc2Nyb2xsXCJcbmltcG9ydCBcInV0aWxzL3N3XCJcblxuaW1wb3J0IEF1dG9CaW5kIGZyb20gXCJhdXRvLWJpbmRcIlxuaW1wb3J0IEZvbnRGYWNlT2JzZXJ2ZXIgZnJvbSBcImZvbnRmYWNlb2JzZXJ2ZXIvZm9udGZhY2VvYnNlcnZlci5zdGFuZGFsb25lXCJcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCJcblxuaW1wb3J0IERldGVjdGlvbiBmcm9tIFwiY2xhc3Nlcy9EZXRlY3Rpb25cIlxuXG5pbXBvcnQgQWJvdXQgZnJvbSBcInBhZ2VzL0Fib3V0XCJcbmltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lXCJcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiY29tcG9uZW50cy9DYW52YXNcIlxuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiY29tcG9uZW50cy9QcmVsb2FkZXJcIlxuaW1wb3J0IEN1cnNvciBmcm9tIFwiLi9jbGFzc2VzL0N1cnNvclwiXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbiAgICAvLyB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Vyc29yXCIpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5kYXRhc2V0LnRlbXBsYXRlXG5cbiAgICB0aGlzLmNyZWF0ZUNhbnZhcygpXG4gICAgLy8gdGhpcy5jcmVhdGVDdXJzb3IoKVxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcblxuICAgIHRoaXMucGFnZXMgPSBuZXcgTWFwKClcbiAgICB0aGlzLnBhZ2VzLnNldChcImFib3V0XCIsIG5ldyBBYm91dCgpKVxuICAgIHRoaXMucGFnZXMuc2V0KFwiaG9tZVwiLCBuZXcgSG9tZSgpKVxuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlcy5nZXQodGhpcy50ZW1wbGF0ZSlcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLmFkZExpbmtzRXZlbnRzTGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIGNyZWF0ZUN1cnNvcigpIHtcbiAgLy8gICB0aGlzLmN1cnNvciA9IG5ldyBDdXJzb3IoeyBjdXJzb3I6IHRoaXMuY3Vyc29yLCB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSB9KVxuICAvLyB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCkge1xuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcih7IGNhbnZhczogdGhpcy5jYW52YXMgfSlcbiAgICB0aGlzLnByZWxvYWRlci5vbihcImNvbXBsZXRlXCIsIHRoaXMub25QcmVsb2FkZWQpXG4gIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh7XG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzLlxuICAgKi9cbiAgYXN5bmMgb25DaGFuZ2UoeyBwdXNoID0gdHJ1ZSwgdXJsID0gbnVsbCB9KSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nIHx8IHRoaXMudXJsID09PSB1cmwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiXG5cbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuICAgIHRoaXMub25SZXF1ZXN0KHtcbiAgICAgIHB1c2gsXG4gICAgICByZXNwb25zZSxcbiAgICAgIHVybFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvblJlcXVlc3QoeyBwdXNoLCByZXNwb25zZSwgdXJsIH0pIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgaHRtbC5pbm5lckhUTUwgPSByZXNwb25zZVxuXG4gICAgY29uc3QgY29udGVudCA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG5cbiAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlLmhpZGUoY29udGVudC5kYXRhc2V0LnRlbXBsYXRlKV0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQudGl0bGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS50ZXh0Q29udGVudFxuXG4gICAgaWYgKHB1c2gpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudC5pbm5lckhUTUxcbiAgICB0aGlzLmNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZSA9IGNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZVxuXG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZVxuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlcy5nZXQodGhpcy50ZW1wbGF0ZSlcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcblxuICAgIHRoaXMuYWRkTGlua3NFdmVudHNMaXN0ZW5lcnMoKVxuXG4gICAgYXdhaXQgdGhpcy5wYWdlLnNob3coKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIlxuXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIExvb3AuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdHMpIHtcbiAgICAgIHRoaXMuc3RhdHMuYmVnaW4oKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgdGhpcy5jYW52YXMudXBkYXRlKHRoaXMpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdHMpIHtcbiAgICAgIHRoaXMuc3RhdHMuZW5kKClcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKVxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50cy5cbiAgICovXG4gIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgb25Qb3BTdGF0ZSgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcHVzaDogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKClcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLm9uUmVzaXplKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIHRoaXMucGFnZS5zY3JvbGwudGFyZ2V0ICs9IDEwMFxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgdGhpcy5wYWdlLnNjcm9sbC50YXJnZXQgLT0gMTAwXG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0luKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKCFEZXRlY3Rpb24uaXNNb2JpbGUoKSAmJiBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gXCJBXCIpIHJldHVyblxuXG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vblRvdWNoRG93bihldmVudClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5wYWdlLm9uVG91Y2hEb3duKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZSkge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUoZXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25Ub3VjaERvd24pIHtcbiAgICAgIHRoaXMucGFnZS5vblRvdWNoTW92ZShldmVudClcbiAgICB9XG4gIH1cblxuICBvblRvdWNoVXAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hVcCkge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaFVwKGV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uVG91Y2hEb3duKSB7XG4gICAgICB0aGlzLnBhZ2Uub25Ub3VjaFVwKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vbldoZWVsKSB7XG4gICAgICB0aGlzLnBhZ2Uub25XaGVlbChldmVudClcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAodGhpcy5jdXJzb3IgJiYgdGhpcy5jdXJzb3IuaGFuZGxlQ3Vyc29yTW92ZSkge1xuICAgICAgdGhpcy5jdXJzb3IuaGFuZGxlQ3Vyc29yTW92ZShldmVudClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzLlxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wU3RhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vblRvdWNoRG93biwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Ub3VjaFVwLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hEb3duLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25Ub3VjaFVwLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uV2hlZWwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5vbldoZWVsLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5vbkZvY3VzSW4pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuXG4gICAgaWYgKERldGVjdGlvbi5pc01vYmlsZSgpKSB7XG4gICAgICB3aW5kb3cub25jb250ZXh0bWVudSA9IHRoaXMub25Db250ZXh0TWVudVxuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtzRXZlbnRzTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgY29uc3QgaXNMb2NhbCA9IGxpbmsuaHJlZi5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pID4gLTFcbiAgICAgIGNvbnN0IGlzQW5jaG9yID0gbGluay5ocmVmLmluZGV4T2YoXCIjXCIpID4gLTFcblxuICAgICAgaWYgKGlzTG9jYWwpIHtcbiAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgIGlmICghaXNBbmNob3IpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICB1cmw6IGxpbmsuaHJlZlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluay5ocmVmLmluZGV4T2YoXCJtYWlsdG9cIikgPT09IC0xICYmIGxpbmsuaHJlZi5pbmRleE9mKFwidGVsXCIpID09PSAtMSkge1xuICAgICAgICBsaW5rLnJlbCA9IFwibm9vcGVuZXJcIlxuICAgICAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGZvbnROZXVlTW9udHJlYWwgPSBuZXcgRm9udEZhY2VPYnNlcnZlcihcIlBQIE5ldWUgTW9udHJlYWxcIilcblxuUHJvbWlzZS5hbGwoW2ZvbnROZXVlTW9udHJlYWwubG9hZCgpXSlcbiAgLnRoZW4oXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuICAuY2F0Y2goXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuXG5jb25zb2xlLmxvZyhcbiAgXCIlYyBEZXZlbG9wZWQgYnkgRGF2aWQgRmF1cmUgLSBodHRwOi8vZGF2aWRmYXVyZS5ldS9cIixcbiAgXCJiYWNrZ3JvdW5kOiAjNDEzQTJBOyBjb2xvcjogI0YyQUIyNjtcIlxuKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGFmM2ZkZDhhZDgyNDQ0NzNhNzZcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJGb250RmFjZU9ic2VydmVyIiwiZWFjaCIsIkRldGVjdGlvbiIsIkFib3V0IiwiSG9tZSIsIkNhbnZhcyIsIlByZWxvYWRlciIsIkN1cnNvciIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZGF0YXNldCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVByZWxvYWRlciIsInBhZ2VzIiwiTWFwIiwic2V0IiwicGFnZSIsImdldCIsImNyZWF0ZSIsInNob3ciLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtzRXZlbnRzTGlzdGVuZXJzIiwicHJlbG9hZGVyIiwiY2FudmFzIiwib24iLCJvblByZWxvYWRlZCIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInVwZGF0ZSIsInVybCIsIm9uQ2hhbmdlIiwicHVzaCIsImlzTG9hZGluZyIsImJvZHkiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJ0ZXh0Iiwib25SZXF1ZXN0IiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJQcm9taXNlIiwiYWxsIiwiaGlkZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic3RhdHMiLCJiZWdpbiIsImVuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uQ29udGV4dE1lbnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25Qb3BTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJfIiwib25LZXlEb3duIiwia2V5Iiwic2Nyb2xsIiwidGFyZ2V0Iiwib25Gb2N1c0luIiwib25Ub3VjaERvd24iLCJpc01vYmlsZSIsInRhZ05hbWUiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJvbk1vdXNlTW92ZSIsImN1cnNvciIsImhhbmRsZUN1cnNvck1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsIm9uY29udGV4dG1lbnUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwiaXNMb2NhbCIsImhyZWYiLCJpbmRleE9mIiwib3JpZ2luIiwiaXNBbmNob3IiLCJvbmNsaWNrIiwicmVsIiwiZm9udE5ldWVNb250cmVhbCIsImxvYWQiLCJ0aGVuIiwiQVBQIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==