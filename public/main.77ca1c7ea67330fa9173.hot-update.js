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
/******/ 	__webpack_require__.h = () => ("883f23bbfd01b1aeff7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43N2NhMWM3ZWE2NzMzMGZhOTE3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ007QUFDWTtBQUUxQixNQUFNRyxNQUFNLENBQUM7RUFDMUJDLFdBQVdBLENBQUM7SUFBRUMsTUFBTTtJQUFFQztFQUFTLENBQUMsRUFBRTtJQUNoQyxJQUFJLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtJQUV4QixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0VBQ25CO0VBRUFBLFVBQVVBLENBQUEsRUFBRztJQUNYLElBQUksSUFBSSxDQUFDRCxRQUFRLEtBQUssTUFBTSxFQUFFO0lBRTlCLE1BQU1FLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQztJQUMxRSxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7SUFDaEUsTUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1EQUFtRCxDQUFDO0lBQ2hHLE1BQU1HLElBQUksR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBRWxEYiw0Q0FBSSxDQUFDVSxZQUFZLEVBQUVJLE9BQU8sSUFBSTtNQUM1QkEsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFDcEMsSUFBSSxDQUFDQyxPQUFPLENBQUM7UUFBRUMsSUFBSSxFQUFFLFNBQVM7UUFBRUMsTUFBTSxFQUFFO01BQVEsQ0FBQyxDQUNuRCxDQUFDO01BQ0RKLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQ3JDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1FBQUVDLElBQUksRUFBRSxTQUFTO1FBQUVDLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FDbkQsQ0FBQztJQUNILENBQUMsQ0FBQztJQUVGbEIsNENBQUksQ0FBQ1csU0FB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VUFDVixDQUFDO1VBQ0RGLElBQUksRUFBRTtRQUNSLENBQUM7UUFDREMsS0FBSyxFQUFFO1VBQ0xWLE1BQU0sRUFBRTtZQUNOQyxLQUFLLEVBQUUsTUFBTTtZQUNiQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxlQUFlLEVBQUUsU0FBUztZQUMxQlEsTUFBTSxFQUFFO1VBQ1YsQ0FBQztVQUNERixJQUFJLEVBQUU7UUFDUjtNQUNGO0lBQ0YsQ0FBQztJQUVELE1BQU1HLE1BQU0sR0FBR2QsT0FBTyxDQUFDZCxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO0lBRXBDbkIsNENBQUksQ0FBQzJCLEVBQUUsQ0FBQyxJQUFJLENBQUN0QixNQUFNLEVBQUU7TUFDbkJ1QixRQUFRLEVBQUUsR0FBRztNQUNiLEdBQUdrQixNQUFNLENBQUNaLE1BQU07TUFDaEJILElBQUksRUFBRTdCLGtEQUFNQTtJQUNkLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0csTUFBTSxDQUFDMEMsU0FBUyxHQUFHRCxNQUFNLENBQUNILElBQUk7RUFDckM7QUFDRjs7Ozs7Ozs7VUNuSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLXRlbXBsYXRlLy4vYXBwL2NsYXNzZXMvQ3Vyc29yLmpzIiwid2VicGFjazovL25vZGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IGVhY2ggfSBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7IFNNT09USCB9IGZyb20gXCIuLi91dGlscy9lYXNpbmdzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcbiAgY29uc3RydWN0b3IoeyBjdXJzb3IsIHRlbXBsYXRlIH0pIHtcbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXG4gICAgdGhpcy5pbml0RXZlbnRzKClcbiAgfVxuXG4gIGluaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMudGVtcGxhdGUgIT09IFwiaG9tZVwiKSByZXR1cm5cblxuICAgIGNvbnN0IGJ1dHRvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYW5pbWF0aW9uPVwiY3Vyc29yXCJdJylcbiAgICBjb25zdCBnYWxsZXJ5SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWVfX2dhbGxlcnlcIilcbiAgICBjb25zdCBsaW5rSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb25fX2V4cGFuZGVkX193cmFwcGVyX19tZW51X19saV9fd3JhcHBlclwiKVxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfX2hlcm9cIilcblxuICAgIGVhY2goZ2FsbGVyeUl0ZW1zLCBnYWxsZXJ5ID0+IHtcbiAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PlxuICAgICAgICB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImdhbGxlcnlcIiwgYWN0aW9uOiBcImVudGVyXCIgfSlcbiAgICAgIClcbiAgICAgIGdhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT5cbiAgICAgICAgdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJnYWxsZXJ5XCIsIGFjdGlvbjogXCJsZWF2ZVwiIH0pXG4gICAgICApXG4gICAgfSlcblxuICAgIGVhY2gobGlua0l0ZW1zLCBsaW5rID0+IHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImxpbmtcIiwgYWN0aW9uOiBcImVudGVyXCIgfSkpXG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHRoaXMub25Ib3Zlcih7IHR5cGU6IFwibGlua1wiLCBhY3Rpb246IFwibGVhdmVcIiB9KSlcbiAgICB9KVxuXG4gICAgaGVyby5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHRoaXMub25Ib3Zlcih7IHR5cGU6IFwiaGVyb1wiLCBhY3Rpb246IFwiZW50ZXJcIiB9KSlcbiAgICBoZXJvLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHRoaXMub25Ib3Zlcih7IHR5cGU6IFwiaGVyb1wiLCBhY3Rpb246IFwibGVhdmVcIiB9KSlcbiAgfVxuXG4gIGhhbmRsZUN1cnNvck1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB7IGNsaWVudFg6IHgsIGNsaWVudFk6IHkgfSA9IGV2ZW50XG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXG4gICAgfSlcbiAgfVxuXG4gIG9uSG92ZXIoeyB0eXBlLCBhY3Rpb24gfSkge1xuICAgIGNvbnN0IGNvbmZpZ3MgPSB7XG4gICAgICBnYWxsZXJ5OiB7XG4gICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMnJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEycmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTJyZW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJEcmFnXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGVhdmU6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluazoge1xuICAgICAgICBlbnRlcjoge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMTJyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMnJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEycmVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiR29cIlxuICAgICAgICB9LFxuICAgICAgICBsZWF2ZToge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoZXJvOiB7XG4gICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGVhdmU6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gY29uZmlnc1t0eXBlXVthY3Rpb25dXG5cbiAgICBnc2FwLnRvKHRoaXMuY3Vyc29yLCB7XG4gICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgLi4uY29uZmlnLnN0eWxlcyxcbiAgICAgIGVhc2U6IFNNT09USFxuICAgIH0pXG5cbiAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSBjb25maWcudGV4dFxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ODNmMjNiYmZkMDFiMWFlZmY3YlwiKSJdLCJuYW1lcyI6WyJnc2FwIiwiZWFjaCIsIlNNT09USCIsIkN1cnNvciIsImNvbnN0cnVjdG9yIiwiY3Vyc29yIiwidGVtcGxhdGUiLCJpbml0RXZlbnRzIiwiYnV0dG9uSXRlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYWxsZXJ5SXRlbXMiLCJsaW5rSXRlbXMiLCJoZXJvIiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnkiLCJhZGRFdmVudExpc3RlbmVyIiwib25Ib3ZlciIsInR5cGUiLCJhY3Rpb24iLCJsaW5rIiwiaGFuZGxlQ3Vyc29yTW92ZSIsImV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsInRvIiwiZHVyYXRpb24iLCJsZWZ0IiwidG9wIiwiZWFzZSIsImNvbmZpZ3MiLCJlbnRlciIsInN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwidGV4dCIsImxlYXZlIiwiYm9yZGVyIiwiY29uZmlnIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==