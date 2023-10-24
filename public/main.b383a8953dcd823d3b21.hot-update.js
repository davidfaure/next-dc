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
/******/ 	__webpack_require__.h = () => ("8535473c8f951c3de1b8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsTUFBTTtZQUNkQyxlQUFlLEVBQUUsTUFBTTtZQUN2QlEsTUFBTSxFQUFFO1VBQ1YsQ0FBQztVQUNERixJQUFJLEVBQUU7UUFDUixDQUFDO1FBQ0RDLEtBQUssRUFBRTtVQUNMVixNQUFNLEVBQUU7WUFDTkMsS0FBSyxFQUFFLE1BQU07WUFDYkMsTUFBTSxFQUFFLE1BQU07WUFDZEMsZUFBZSxFQUFFLFNBQVM7WUFDMUJRLE1BQU0sRUFBRTtVQUNWLENBQUM7VUFDREYsSUFBSSxFQUFFO1FBQ1I7TUFDRjtJQUNGLENBQUM7SUFFRCxNQUFNRyxNQUFNLEdBQUdkLE9BQU8sQ0FBQ2QsSUFBSSxDQUFDLENBQUNDLE1BQU0sQ0FBQztJQUVwQ3JCLDRDQUFJLENBQUM2QixFQUFFLENBQUMsSUFBSSxDQUFDeEIsTUFBTSxFQUFFO01BQ25CeUIsUUFBUSxFQUFFLEdBQUc7TUFDYixHQUFHa0IsTUFBTSxDQUFDWixNQUFNO01BQ2hCSCxJQUFJLEVBQUUvQixrREFBTUE7SUFDZCxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNHLE1BQU0sQ0FBQzRDLFNBQVMsR0FBR0QsTUFBTSxDQUFDSCxJQUFJO0VBQ3JDO0FBQ0Y7Ozs7Ozs7O1VDcklBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgY3Vyc29yLCB0ZW1wbGF0ZSB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3JcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuICAgIHRoaXMuaW5pdEV2ZW50cygpXG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnRlbXBsYXRlICE9PSBcImhvbWVcIikgcmV0dXJuXG5cbiAgICBjb25zdCBidXR0b25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFuaW1hdGlvbj1cImN1cnNvclwiXScpXG4gICAgY29uc3QgZ2FsbGVyeUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgY29uc3QgbGlua0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX3dyYXBwZXJcIilcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19oZXJvXCIpXG5cbiAgICBjb25zb2xlLmxvZyhidXR0b25JdGVtcywgXCJidXR0b25JdGVtc1wiKVxuXG4gICAgZWFjaChnYWxsZXJ5SXRlbXMsIGdhbGxlcnkgPT4ge1xuICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+XG4gICAgICAgIHRoaXMub25Ib3Zlcih7IHR5cGU6IFwiZ2FsbGVyeVwiLCBhY3Rpb246IFwiZW50ZXJcIiB9KVxuICAgICAgKVxuICAgICAgZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PlxuICAgICAgICB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImdhbGxlcnlcIiwgYWN0aW9uOiBcImxlYXZlXCIgfSlcbiAgICAgIClcbiAgICB9KVxuXG4gICAgZWFjaChsaW5rSXRlbXMsIGxpbmsgPT4ge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHRoaXMub25Ib3Zlcih7IHR5cGU6IFwibGlua1wiLCBhY3Rpb246IFwiZW50ZXJcIiB9KSlcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJsaW5rXCIsIGFjdGlvbjogXCJsZWF2ZVwiIH0pKVxuICAgIH0pXG5cbiAgICBoZXJvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJoZXJvXCIsIGFjdGlvbjogXCJlbnRlclwiIH0pKVxuICAgIGhlcm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJoZXJvXCIsIGFjdGlvbjogXCJsZWF2ZVwiIH0pKVxuICB9XG5cbiAgaGFuZGxlQ3Vyc29yTW92ZShldmVudCkge1xuICAgIGNvbnN0IHsgY2xpZW50WDogeCwgY2xpZW50WTogeSB9ID0gZXZlbnRcblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5LFxuICAgICAgZWFzZTogXCJwb3dlcjIub3V0XCJcbiAgICB9KVxuICB9XG5cbiAgb25Ib3Zlcih7IHR5cGUsIGFjdGlvbiB9KSB7XG4gICAgY29uc3QgY29uZmlncyA9IHtcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgZW50ZXI6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjEycmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTJyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxMnJlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIkRyYWdcIlxuICAgICAgICB9LFxuICAgICAgICBsZWF2ZToge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5rOiB7XG4gICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMnJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEycmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTJyZW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJHb1wiXG4gICAgICAgIH0sXG4gICAgICAgIGxlYXZlOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhlcm86IHtcbiAgICAgICAgZW50ZXI6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRlwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBsZWF2ZToge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSBjb25maWdzW3R5cGVdW2FjdGlvbl1cblxuICAgIGdzYXAudG8odGhpcy5jdXJzb3IsIHtcbiAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAuLi5jb25maWcuc3R5bGVzLFxuICAgICAgZWFzZTogU01PT1RIXG4gICAgfSlcblxuICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IGNvbmZpZy50ZXh0XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg1MzU0NzNjOGY5NTFjM2RlMWI4XCIpIl0sIm5hbWVzIjpbImdzYXAiLCJlYWNoIiwiU01PT1RIIiwiQ3Vyc29yIiwiY29uc3RydWN0b3IiLCJjdXJzb3IiLCJ0ZW1wbGF0ZSIsImluaXRFdmVudHMiLCJidXR0b25JdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcnlJdGVtcyIsImxpbmtJdGVtcyIsImhlcm8iLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJhZGRFdmVudExpc3RlbmVyIiwib25Ib3ZlciIsInR5cGUiLCJhY3Rpb24iLCJsaW5rIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsImNvbmZpZ3MiLCJlbnRlciIsInN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwidGV4dCIsImxlYXZlIiwiYm9yZGVyIiwiY29uZmlnIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==