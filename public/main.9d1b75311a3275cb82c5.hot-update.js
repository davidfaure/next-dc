"use strict";
self["webpackHotUpdatenode_template"]("main",{

/***/ "./app/classes/Cursor.js":
/*!*******************************!*\
  !*** ./app/classes/Cursor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cursor)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_easings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/easings */ "./app/utils/easings.js");



class Cursor {
  constructor({
    cursor,
    template
  }) {
    this.cursor = cursor;
    this.template = template;
    this.initEvents();
  }
  initEvents() {
    if (this.template !== "home") return;
    const buttonItems = document.querySelectorAll('[data-animation="cursor"]');
    const galleryItems = document.querySelectorAll(".home__gallery");
    const linkItems = document.querySelectorAll(".navigation__expanded__wrapper__menu__li__wrapper");
    const hero = document.querySelector(".home__hero");
    console.log(buttonItems, "buttonItems");
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(galleryItems, gallery => {
      gallery.addEventListener("mouseover", () => this.onHover({
        type: "gallery",
        action: "enter"
      }));
      gallery.addEventListener("mouseleave", () => this.onHover({
        type: "gallery",
        action: "leave"
      }));
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(buttonItems, button => {
      button.addEventListener("mouseover", () => this.onHover({
        type: "button",
        action: "enter"
      }));
      button.addEventListener("mouseleave", () => this.onHover({
        type: "button",
        action: "leave"
      }));
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(linkItems, link => {
      link.addEventListener("mouseover", () => this.onHover({
        type: "link",
        action: "enter"
      }));
      link.addEventListener("mouseleave", () => this.onHover({
        type: "link",
        action: "leave"
      }));
    });
    hero.addEventListener("mouseover", () => this.onHover({
      type: "hero",
      action: "enter"
    }));
    hero.addEventListener("mouseleave", () => this.onHover({
      type: "hero",
      action: "leave"
    }));
  }
  handleCursorMove(event) {
    const {
      clientX: x,
      clientY: y
    } = event;
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      left: x,
      top: y,
      ease: "power2.out"
    });
  }
  onHover({
    type,
    action
  }) {
    const configs = {
      button: {
        enter: {
          styles: {
            width: "4rem",
            height: "4rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        },
        leave: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        }
      },
      gallery: {
        enter: {
          styles: {
            width: "12rem",
            height: "12rem",
            backgroundColor: "#2baf50",
            color: "#fff",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "500",
            lineHeight: "12rem"
          },
          text: "Drag"
        },
        leave: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        }
      },
      link: {
        enter: {
          styles: {
            width: "12rem",
            height: "12rem",
            backgroundColor: "#2baf50",
            color: "#fff",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "500",
            lineHeight: "12rem"
          },
          text: "Go"
        },
        leave: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        }
      },
      hero: {
        enter: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#FFF",
            border: "none"
          },
          text: ""
        },
        leave: {
          styles: {
            width: "1rem",
            height: "1rem",
            backgroundColor: "#2baf50",
            border: "none"
          },
          text: ""
        }
      }
    };
    const config = configs[type][action];
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.cursor, {
      duration: 0.3,
      ...config.styles,
      ease: _utils_easings__WEBPACK_IMPORTED_MODULE_1__.SMOOTH
    });
    this.cursor.innerHTML = config.text;
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("81324b799c82a9cd0403")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDQyxNQUFNLENBQUM7SUFFcENyQiw0Q0FBSSxDQUFDOEIsRUFBRSxDQUFDLElBQUksQ0FBQ3pCLE1BQU0sRUFBRTtNQUNuQjBCLFFBQVEsRUFBRSxHQUFHO01BQ2IsR0FBR2tCLE1BQU0sQ0FBQ1osTUFBTTtNQUNoQkgsSUFBSSxFQUFFaEMsa0RBQU1BO0lBQ2QsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDRyxNQUFNLENBQUM2QyxTQUFTLEdBQUdELE1BQU0sQ0FBQ1AsSUFBSTtFQUNyQztBQUNGOzs7Ozs7OztVQzlKQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3Rvcih7IGN1cnNvciwgdGVtcGxhdGUgfSkge1xuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cbiAgICB0aGlzLmluaXRFdmVudHMoKVxuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy50ZW1wbGF0ZSAhPT0gXCJob21lXCIpIHJldHVyblxuXG4gICAgY29uc3QgYnV0dG9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hbmltYXRpb249XCJjdXJzb3JcIl0nKVxuICAgIGNvbnN0IGdhbGxlcnlJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9fZ2FsbGVyeVwiKVxuICAgIGNvbnN0IGxpbmtJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fZXhwYW5kZWRfX3dyYXBwZXJfX21lbnVfX2xpX193cmFwcGVyXCIpXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9faGVyb1wiKVxuXG4gICAgY29uc29sZS5sb2coYnV0dG9uSXRlbXMsIFwiYnV0dG9uSXRlbXNcIilcblxuICAgIGVhY2goZ2FsbGVyeUl0ZW1zLCBnYWxsZXJ5ID0+IHtcbiAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PlxuICAgICAgICB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImdhbGxlcnlcIiwgYWN0aW9uOiBcImVudGVyXCIgfSlcbiAgICAgIClcbiAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT5cbiAgICAgICAgdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJnYWxsZXJ5XCIsIGFjdGlvbjogXCJsZWF2ZVwiIH0pXG4gICAgICApXG4gICAgfSlcblxuICAgIGVhY2goYnV0dG9uSXRlbXMsIGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImJ1dHRvblwiLCBhY3Rpb246IFwiZW50ZXJcIiB9KSlcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImJ1dHRvblwiLCBhY3Rpb246IFwibGVhdmVcIiB9KSlcbiAgICB9KVxuXG4gICAgZWFjaChsaW5rSXRlbXMsIGxpbmsgPT4ge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHRoaXMub25Ib3Zlcih7IHR5cGU6IFwibGlua1wiLCBhY3Rpb246IFwiZW50ZXJcIiB9KSlcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJsaW5rXCIsIGFjdGlvbjogXCJsZWF2ZVwiIH0pKVxuICAgIH0pXG5cbiAgICBoZXJvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJoZXJvXCIsIGFjdGlvbjogXCJlbnRlclwiIH0pKVxuICAgIGhlcm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJoZXJvXCIsIGFjdGlvbjogXCJsZWF2ZVwiIH0pKVxuICB9XG5cbiAgaGFuZGxlQ3Vyc29yTW92ZShldmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnRcblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICB9XG5cbiAgb25Ib3Zlcih7IHR5cGUsIGFjdGlvbiB9KSB7XG4gICAgY29uc3QgY29uZmlncyA9IHtcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBlbnRlcjoge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiNHJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjRyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGxlYXZlOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgZW50ZXI6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjEycmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTJyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxMnJlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIkRyYWdcIlxuICAgICAgICB9LFxuICAgICAgICBsZWF2ZToge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5rOiB7XG4gICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMnJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEycmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTJyZW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJHb1wiXG4gICAgICAgIH0sXG4gICAgICAgIGxlYXZlOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhlcm86IHtcbiAgICAgICAgZW50ZXI6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRlwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBsZWF2ZToge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSBjb25maWdzW3R5cGVdW2FjdGlvbl1cblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAuLi5jb25maWcuc3R5bGVzLFxuICAgICAgZWFzZTogU01PT1RIXG4gICAgfSlcblxuICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IGNvbmZpZy50ZXh0XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgxMzI0Yjc5OWM4MmE5Y2QwNDAzXCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiU01PT1RIIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJjdXJzb3IiLCJ0ZW1wbGF0ZSIsImluaXRFdmVudHMiLCJidXR0b25JdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcnlJdGVtcyIsImxpbmtJdGVtcyIsImhlcm8iLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJhZGRFdmVudExpc3RlbmVyIiwib25Ib3ZlciIsInR5cGUiLCJhY3Rpb24iLCJidXR0b24iLCJsaW5rIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsImNvbmZpZ3MiLCJlbnRlciIsInN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwidGV4dCIsImxlYXZlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiY29uZmlnIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==