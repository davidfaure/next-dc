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
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Navigation */ "./app/components/Navigation.js");













class App {
  constructor() {
    (0,auto_bind__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
    this.cursor = document.getElementById("cursor");
    this.content = document.querySelector(".content");
    this.template = this.content.dataset.template;
    this.createCanvas();
    this.createCursor();
    this.createPreloader();
    this.createNavigation();
    this.pages = new Map();
    this.pages.set("about", new pages_About__WEBPACK_IMPORTED_MODULE_7__["default"]());
    this.pages.set("home", new pages_Home__WEBPACK_IMPORTED_MODULE_8__["default"]());
    this.page = this.pages.get(this.template);
    this.page.create();
    this.addEventListeners();
    this.addLinksEventsListeners();
  }
  createCursor() {
    this.cursor = new _classes_Cursor__WEBPACK_IMPORTED_MODULE_11__["default"]({
      cursor: this.cursor,
      template: this.template
    });
  }
  createNavigation() {
    this.navigation = new _components_Navigation__WEBPACK_IMPORTED_MODULE_12__["default"]();
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_10__["default"]({
      canvas: this.canvas
    });
    this.preloader.on("complete", this.onPreloaded);
  }
  onPreloaded() {
    this.page.show();
    this.canvas.onPreloaded();
    this.preloader.destroy();
    this.onResize();
    this.update();
  }
  createCanvas() {
    this.canvas = new components_Canvas__WEBPACK_IMPORTED_MODULE_9__["default"]({
      url: this.template
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
      this.page.update(this.page.scroll);
    }
    if (this.canvas) {
      this.canvas.update(this, this.page.scroll);
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
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onMouseMove(event);
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
/******/ 	__webpack_require__.h = () => ("74d2456495f1717608f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNPLEdBQUcsR0FBRyxVQUFVO1FBQ3JCUCxJQUFJLENBQUNmLE1BQU0sR0FBRyxRQUFRO01BQ3hCO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUVBLE1BQU11QixnQkFBZ0IsR0FBRyxJQUFJckcscUZBQWdCLENBQUMsa0JBQWtCLENBQUM7QUFFakV3RCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDNEMsZ0JBQWdCLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNuQ0MsSUFBSSxDQUFDNUIsQ0FBQyxJQUFJO0VBQ1Q1QixNQUFNLENBQUN5RCxHQUFHLEdBQUcsSUFBSS9GLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyxDQUNEZ0csS0FBSyxDQUFDOUIsQ0FBQyxJQUFJO0VBQ1Y1QixNQUFNLENBQUN5RCxHQUFHLEdBQUcsSUFBSS9GLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVKaUcsT0FBTyxDQUFDQyxHQUFHLENBQ1QscURBQXFELEVBQ3JELHNDQUNGLENBQUM7Ozs7Ozs7O1VDeFVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ1dGlscy9wb2x5ZmlsbFwiXG5pbXBvcnQgXCJ1dGlscy9zY3JvbGxcIlxuaW1wb3J0IFwidXRpbHMvc3dcIlxuXG5pbXBvcnQgQXV0b0JpbmQgZnJvbSBcImF1dG8tYmluZFwiXG5pbXBvcnQgRm9udEZhY2VPYnNlcnZlciBmcm9tIFwiZm9udGZhY2VvYnNlcnZlci9mb250ZmFjZW9ic2VydmVyLnN0YW5kYWxvbmVcIlxuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIlxuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCJjbGFzc2VzL0RldGVjdGlvblwiXG5cbmltcG9ydCBBYm91dCBmcm9tIFwicGFnZXMvQWJvdXRcIlxuaW1wb3J0IEhvbWUgZnJvbSBcInBhZ2VzL0hvbWVcIlxuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCJjb21wb25lbnRzL0NhbnZhc1wiXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJjb21wb25lbnRzL1ByZWxvYWRlclwiXG5pbXBvcnQgQ3Vyc29yIGZyb20gXCIuL2NsYXNzZXMvQ3Vyc29yXCJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIEF1dG9CaW5kKHRoaXMpXG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Vyc29yXCIpXG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5kYXRhc2V0LnRlbXBsYXRlXG5cbiAgICB0aGlzLmNyZWF0ZUNhbnZhcygpXG4gICAgdGhpcy5jcmVhdGVDdXJzb3IoKVxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcbiAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuXG4gICAgdGhpcy5wYWdlcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMucGFnZXMuc2V0KFwiYWJvdXRcIiwgbmV3IEFib3V0KCkpXG4gICAgdGhpcy5wYWdlcy5zZXQoXCJob21lXCIsIG5ldyBIb21lKCkpXG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzLmdldCh0aGlzLnRlbXBsYXRlKVxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5hZGRMaW5rc0V2ZW50c0xpc3RlbmVycygpXG4gIH1cblxuICBjcmVhdGVDdXJzb3IoKSB7XG4gICAgdGhpcy5jdXJzb3IgPSBuZXcgQ3Vyc29yKHsgY3Vyc29yOiB0aGlzLmN1cnNvciwgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUgfSlcbiAgfVxuXG4gIGNyZWF0ZU5hdmlnYXRpb24oKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oKVxuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCkge1xuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcih7IGNhbnZhczogdGhpcy5jYW52YXMgfSlcbiAgICB0aGlzLnByZWxvYWRlci5vbihcImNvbXBsZXRlXCIsIHRoaXMub25QcmVsb2FkZWQpXG4gIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgdGhpcy5jYW52YXMub25QcmVsb2FkZWQoKVxuXG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcblxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuICAgICAgdXJsOiB0aGlzLnRlbXBsYXRlXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzLlxuICAgKi9cbiAgYXN5bmMgb25DaGFuZ2UoeyBwdXNoID0gdHJ1ZSwgdXJsID0gbnVsbCB9KSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkaW5nIHx8IHRoaXMudXJsID09PSB1cmwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiXG5cbiAgICB0aGlzLnVybCA9IHVybFxuXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuICAgIHRoaXMub25SZXF1ZXN0KHtcbiAgICAgIHB1c2gsXG4gICAgICByZXNwb25zZSxcbiAgICAgIHVybFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBvblJlcXVlc3QoeyBwdXNoLCByZXNwb25zZSwgdXJsIH0pIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgaHRtbC5pbm5lckhUTUwgPSByZXNwb25zZVxuXG4gICAgY29uc3QgY29udGVudCA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG5cbiAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlLmhpZGUoY29udGVudC5kYXRhc2V0LnRlbXBsYXRlKV0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQudGl0bGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS50ZXh0Q29udGVudFxuXG4gICAgaWYgKHB1c2gpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybClcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudC5pbm5lckhUTUxcbiAgICB0aGlzLmNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZSA9IGNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZVxuXG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZVxuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlcy5nZXQodGhpcy50ZW1wbGF0ZSlcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcblxuICAgIHRoaXMuYWRkTGlua3NFdmVudHNMaXN0ZW5lcnMoKVxuXG4gICAgYXdhaXQgdGhpcy5wYWdlLnNob3coKVxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIlxuXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIExvb3AuXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdHMpIHtcbiAgICAgIHRoaXMuc3RhdHMuYmVnaW4oKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUodGhpcy5wYWdlLnNjcm9sbClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZSh0aGlzLCB0aGlzLnBhZ2Uuc2Nyb2xsKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRzKSB7XG4gICAgICB0aGlzLnN0YXRzLmVuZCgpXG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG9uUG9wU3RhdGUoKSB7XG4gICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHB1c2g6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG4gICAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICB0aGlzLnBhZ2Uuc2Nyb2xsLnRhcmdldCArPSAxMDBcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHRoaXMucGFnZS5zY3JvbGwudGFyZ2V0IC09IDEwMFxuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNJbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICghRGV0ZWN0aW9uLmlzTW9iaWxlKCkgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09IFwiQVwiKSByZXR1cm5cblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5jYW52YXMub25Ub3VjaERvd24oZXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25Ub3VjaERvd24pIHtcbiAgICAgIHRoaXMucGFnZS5vblRvdWNoRG93bihldmVudClcbiAgICB9XG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKGV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uVG91Y2hEb3duKSB7XG4gICAgICB0aGlzLnBhZ2Uub25Ub3VjaE1vdmUoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaFVwKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHtcbiAgICAgIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblRvdWNoRG93bikge1xuICAgICAgdGhpcy5wYWdlLm9uVG91Y2hVcChldmVudClcbiAgICB9XG4gIH1cblxuICBvbldoZWVsKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbCkge1xuICAgICAgdGhpcy5wYWdlLm9uV2hlZWwoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jdXJzb3IgJiYgdGhpcy5jdXJzb3IuaGFuZGxlQ3Vyc29yTW92ZSkge1xuICAgICAgdGhpcy5jdXJzb3IuaGFuZGxlQ3Vyc29yTW92ZShldmVudClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaFVwKSB7XG4gICAgICB0aGlzLmNhbnZhcy5vbk1vdXNlTW92ZShldmVudClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXJzLlxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwibW91c2VvdmVyXCIsIGV2ZW50LnRhcmdldClcbiAgICAvLyB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCB0aGlzLm9uUG9wU3RhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vblRvdWNoRG93biwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Ub3VjaFVwLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hEb3duLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25Ub3VjaFVwLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uV2hlZWwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5vbldoZWVsLCB7IHBhc3NpdmU6IHRydWUgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93bilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5vbkZvY3VzSW4pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlKVxuXG4gICAgaWYgKERldGVjdGlvbi5pc01vYmlsZSgpKSB7XG4gICAgICB3aW5kb3cub25jb250ZXh0bWVudSA9IHRoaXMub25Db250ZXh0TWVudVxuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtzRXZlbnRzTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgY29uc3QgaXNMb2NhbCA9IGxpbmsuaHJlZi5pbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pID4gLTFcbiAgICAgIGNvbnN0IGlzQW5jaG9yID0gbGluay5ocmVmLmluZGV4T2YoXCIjXCIpID4gLTFcblxuICAgICAgaWYgKGlzTG9jYWwpIHtcbiAgICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgIGlmICghaXNBbmNob3IpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICB1cmw6IGxpbmsuaHJlZlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGluay5ocmVmLmluZGV4T2YoXCJtYWlsdG9cIikgPT09IC0xICYmIGxpbmsuaHJlZi5pbmRleE9mKFwidGVsXCIpID09PSAtMSkge1xuICAgICAgICBsaW5rLnJlbCA9IFwibm9vcGVuZXJcIlxuICAgICAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCJcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGZvbnROZXVlTW9udHJlYWwgPSBuZXcgRm9udEZhY2VPYnNlcnZlcihcIlBQIE5ldWUgTW9udHJlYWxcIilcblxuUHJvbWlzZS5hbGwoW2ZvbnROZXVlTW9udHJlYWwubG9hZCgpXSlcbiAgLnRoZW4oXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuICAuY2F0Y2goXyA9PiB7XG4gICAgd2luZG93LkFQUCA9IG5ldyBBcHAoKVxuICB9KVxuXG5jb25zb2xlLmxvZyhcbiAgXCIlYyBEZXZlbG9wZWQgYnkgRGF2aWQgRmF1cmUgLSBodHRwOi8vZGF2aWRmYXVyZS5ldS9cIixcbiAgXCJiYWNrZ3JvdW5kOiAjNDEzQTJBOyBjb2xvcjogI0YyQUIyNjtcIlxuKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzRkMjQ1NjQ5NWYxNzE3NjA4ZjRcIikiXSwibmFtZXMiOlsiQXV0b0JpbmQiLCJGb250RmFjZU9ic2VydmVyIiwiZWFjaCIsIkRldGVjdGlvbiIsIkFib3V0IiwiSG9tZSIsIkNhbnZhcyIsIlByZWxvYWRlciIsIkN1cnNvciIsIk5hdmlnYXRpb24iLCJBcHAiLCJjb25zdHJ1Y3RvciIsImN1cnNvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZGF0YXNldCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZUN1cnNvciIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJwYWdlcyIsIk1hcCIsInNldCIsInBhZ2UiLCJnZXQiLCJjcmVhdGUiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtzRXZlbnRzTGlzdGVuZXJzIiwibmF2aWdhdGlvbiIsInByZWxvYWRlciIsImNhbnZhcyIsIm9uIiwib25QcmVsb2FkZWQiLCJzaG93IiwiZGVzdHJveSIsIm9uUmVzaXplIiwidXBkYXRlIiwidXJsIiwib25DaGFuZ2UiLCJwdXNoIiwiaXNMb2FkaW5nIiwiYm9keSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsImhlYWRlcnMiLCJyZXNwb25zZSIsInRleHQiLCJvblJlcXVlc3QiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIlByb21pc2UiLCJhbGwiLCJoaWRlIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJzdGF0cyIsImJlZ2luIiwic2Nyb2xsIiwiZW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25Db250ZXh0TWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvblBvcFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIl8iLCJvbktleURvd24iLCJrZXkiLCJ0YXJnZXQiLCJvbkZvY3VzSW4iLCJvblRvdWNoRG93biIsImlzTW9iaWxlIiwidGFnTmFtZSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm9uTW91c2VNb3ZlIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwib25jb250ZXh0bWVudSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJpc0xvY2FsIiwiaHJlZiIsImluZGV4T2YiLCJvcmlnaW4iLCJpc0FuY2hvciIsIm9uY2xpY2siLCJyZWwiLCJmb250TmV1ZU1vbnRyZWFsIiwibG9hZCIsInRoZW4iLCJBUFAiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9