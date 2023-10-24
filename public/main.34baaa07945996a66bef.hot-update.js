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
/******/ 	__webpack_require__.h = () => ("09711f503b311d205f99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNGJhYWEwNzk0NTk5NmE2NmJlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ007QUFDWTtBQUUxQixNQUFNRyxNQUFNLENBQUM7RUFDMUJDLFdBQVdBLENBQUM7SUFBRUMsTUFBTTtJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNoQyxJQUFJLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUV4QixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ25CO0VBRUFBLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksSUFBSSxDQUFDRCxRQUFRLEtBQUssTUFBTSxFQUFFO0lBRTlCLE1BQU1FLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQztJQUMxRSxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7SUFDaEUsTUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1EQUFtRCxDQUFDO0lBQ2hHLE1BQU1HLElBQUksR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBRWxEYiw0Q0FBSSxDQUFDVSxZQUFZLEVBQUVJLE9BQU8sSUFBSTtNQUM1QkEsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFDcEMsSUFBSSxDQUFDQyxPQUFPLENBQUM7UUFBRUMsSUFBSSxFQUFFLFNBQVM7UUFBRUMsTUFBTSxFQUFFO01BQVEsQ0FBQyxDQUNuRCxDQUFDO01BQ0RKLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQ3JDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1FBQUVDLElBQUksRUFBRSxTQUFTO1FBQUVDLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FDbkQsQ0FBQztJQUNILENBQUMsQ0FBQztJQUVGbEIsNENBQUksQ0FBQ08sV0FB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QUMsSUFBSSxDQUFDdkIsTUFBTSxFQUFFO01BQ25Cd0IsUUFBUSxFQUFFLEdBQUc7TUFDYixHQUFHa0IsTUFBTSxDQUFDWixNQUFNO01BQ2hCSCxJQUFJLEVBQUU5QixrREFBTUE7SUFDZCxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNHLE1BQU0sQ0FBQzJDLFNBQVMsR0FBR0QsTUFBTSxDQUFDUCxJQUFJO0VBQ3JDO0FBQ0Y7Ozs7Ozs7O1VDNUpBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS8uL2FwcC9jbGFzc2VzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBTTU9PVEggfSBmcm9tIFwiLi4vdXRpbHMvZWFzaW5nc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XG4gIGNvbnN0cnVjdG9yKHsgY3Vyc29yLCB0ZW1wbGF0ZSB9KSB7XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3JcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuICAgIHRoaXMuaW5pdEV2ZW50cygpXG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnRlbXBsYXRlICE9PSBcImhvbWVcIikgcmV0dXJuXG5cbiAgICBjb25zdCBidXR0b25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFuaW1hdGlvbj1cImN1cnNvclwiXScpXG4gICAgY29uc3QgZ2FsbGVyeUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgY29uc3QgbGlua0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX3dyYXBwZXJcIilcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19oZXJvXCIpXG5cbiAgICBlYWNoKGdhbGxlcnlJdGVtcywgZ2FsbGVyeSA9PiB7XG4gICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT5cbiAgICAgICAgdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJnYWxsZXJ5XCIsIGFjdGlvbjogXCJlbnRlclwiIH0pXG4gICAgICApXG4gICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+XG4gICAgICAgIHRoaXMub25Ib3Zlcih7IHR5cGU6IFwiZ2FsbGVyeVwiLCBhY3Rpb246IFwibGVhdmVcIiB9KVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBlYWNoKGJ1dHRvbkl0ZW1zLCBidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJidXR0b25cIiwgYWN0aW9uOiBcImVudGVyXCIgfSkpXG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJidXR0b25cIiwgYWN0aW9uOiBcImxlYXZlXCIgfSkpXG4gICAgfSlcblxuICAgIGVhY2gobGlua0l0ZW1zLCBsaW5rID0+IHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImxpbmtcIiwgYWN0aW9uOiBcImVudGVyXCIgfSkpXG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHRoaXMub25Ib3Zlcih7IHR5cGU6IFwibGlua1wiLCBhY3Rpb246IFwibGVhdmVcIiB9KSlcbiAgICB9KVxuXG4gICAgaGVyby5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHRoaXMub25Ib3Zlcih7IHR5cGU6IFwiaGVyb1wiLCBhY3Rpb246IFwiZW50ZXJcIiB9KSlcbiAgICBoZXJvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHRoaXMub25Ib3Zlcih7IHR5cGU6IFwiaGVyb1wiLCBhY3Rpb246IFwibGVhdmVcIiB9KSlcbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgfVxuXG4gIG9uSG92ZXIoeyB0eXBlLCBhY3Rpb24gfSkge1xuICAgIGNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgICBidXR0b246IHtcbiAgICAgICAgZW50ZXI6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjRyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCI0cmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBsZWF2ZToge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBnYWxsZXJ5OiB7XG4gICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMnJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEycmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTJyZW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJEcmFnXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGVhdmU6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluazoge1xuICAgICAgICBlbnRlcjoge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMTJyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMnJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEycmVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiR29cIlxuICAgICAgICB9LFxuICAgICAgICBsZWF2ZToge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoZXJvOiB7XG4gICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGVhdmU6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gY29uZmlnc1t0eXBlXVthY3Rpb25dXG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgLi4uY29uZmlnLnN0eWxlcyxcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG5cbiAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBjb25maWcudGV4dFxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwOTcxMWY1MDNiMzExZDIwNWY5OVwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiZWFjaCIsIlNNT09USCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiY3Vyc29yIiwidGVtcGxhdGUiLCJpbml0RXZlbnRzIiwiYnV0dG9uSXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYWxsZXJ5SXRlbXMiLCJsaW5rSXRlbXMiLCJoZXJvIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJhZGRFdmVudExpc3RlbmVyIiwib25Ib3ZlciIsInR5cGUiLCJhY3Rpb24iLCJidXR0b24iLCJsaW5rIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsImNvbmZpZ3MiLCJlbnRlciIsInN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwidGV4dCIsImxlYXZlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiY29uZmlnIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==