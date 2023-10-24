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
/******/ 	__webpack_require__.h = () => ("c2d965369a063f7bb46b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLEVBQUUsU0FBUztZQUMxQkMsS0FBSyxFQUFFLE1BQU07WUFDYkMsU0FBUyxFQUFFLFFBQVE7WUFDbkJDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCQyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsVUFBVSxFQUFFO1VBQ2QsQ0FBQztVQUNEQyxJQUFJLEVBQUU7UUFDUixDQUFDO1FBQ0RDLEtBQUssRUFBRTtVQUNMVixNQUFNLEVBQUU7WUFDTkMsS0FBSyxFQUFFLE1BQU07WUFDYkMsTUFBTSxFQUFFLE1BQU07WUFDZEMsZUFBZSxFQUFFLFNBQVM7WUFDMUJRLE1BQU0sRUFBRTtVQUNWLENBQUM7VUFDREYsSUFBSSxFQUFFO1FBQ1I7TUFDRixDQUFDO01BQ0R2QixJQUFJLEVBQUU7UUFDSmEsS0FBSyxFQUFFO1VBQ0xDLE1BQU0sRUFBRTtZQUNOQyxLQUFLLEVBQUUsT0FBTztZQUNkQyxNQUFNLEVBQUUsT0FBTztZQUNmQyxlQUFlLEVBQUUsU0FBUztZQUMxQkMsS0FBSyxFQUFFLE1BQU07WUFDYkMsU0FBUyxFQUFFLFFBQVE7WUFDbkJDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCQyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsVUFBVSxFQUFFO1VBQ2QsQ0FBQztVQUNEQyxJQUFJLEVBQUU7UUFDUixDQUFDO1FBQ0RDLEtBQUssRUFBRTtVQUNMVixNQUFNLEVBQUU7WUFDTkMsS0FBSyxFQUFFLE1BQU07WUFDYkMsTUFBTSxFQUFFLE1BQU07WUFDZEMsZUFBZSxFQUFFLFNBQVM7WUFDMUJRLE1BQU0sRUFBRTtVQUNWLENBQUM7VUFDREYsSUFBSSxFQUFFO1FBQ1I7TUFDRixDQUFDO01BQ0Q5QixJQUFJLEVBQUU7UUFDSm9CLEtBQUssRUFBRTtVQUNMQyxNQUFNLEVBQUU7WUFDTkMsS0FBSyxFQUFFLE1BQU07WUFDYkMsTUFBTSxFQUFFLE1BQU07WUFDZEMsZUFBZSxFQUFFLE1BQU07WUFDdkJRLE1BQU0sRUFBRTtVQUNWLENBQUM7VUFDREYsSUFBSSxFQUFFO1FBQ1IsQ0FBQztRQUNEQyxLQUFLLEVBQUU7VUFDTFYsTUFBTSxFQUFFO1lBQ05DLEtBQUssRUFBRSxNQUFNO1lBQ2JDLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLGVBQWUsRUFBRSxTQUFTO1lBQzFCUSxNQUFNLEVBQUU7VUFDVixDQUFDO1VBQ0RGLElBQUksRUFBRTtRQUNSO01BQ0Y7SUFDRixDQUFDO0lBRUQsTUFBTUcsTUFBTSxHQUFHZCxPQUFPLENBQUNkLElBQUksQ0FBQyxDQUFDQyxNQUFNLENBQUM7SUFFcENsQiw0Q0FBSSxDQUFDMEIsRUFBRSxDQUFDLElBQUksQ0FBQ3JCLE1BQU0sRUFBRTtNQUNuQnNCLFFBQVEsRUFBRSxHQUFHO01BQ2IsR0FBR2tCLE1BQU0sQ0FBQ1osTUFBTTtNQUNoQkgsSUFBSSxFQUFFNUIsa0RBQU1BO0lBQ2QsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDRyxNQUFNLENBQUN5QyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0gsSUFBSTtFQUNyQztBQUNGOzs7Ozs7OztVQ2xJQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9DdXJzb3IuanMiLCJ3ZWJwYWNrOi8vbm9kZS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgU01PT1RIIH0gZnJvbSBcIi4uL3V0aWxzL2Vhc2luZ3NcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzb3Ige1xuICBjb25zdHJ1Y3Rvcih7IGN1cnNvciwgdGVtcGxhdGUgfSkge1xuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cbiAgICB0aGlzLmluaXRFdmVudHMoKVxuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy50ZW1wbGF0ZSAhPT0gXCJob21lXCIpIHJldHVyblxuXG4gICAgY29uc3QgZ2FsbGVyeUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lX19nYWxsZXJ5XCIpXG4gICAgY29uc3QgbGlua0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19leHBhbmRlZF9fd3JhcHBlcl9fbWVudV9fbGlfX3dyYXBwZXJcIilcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX19oZXJvXCIpXG5cbiAgICBlYWNoKGdhbGxlcnlJdGVtcywgZ2FsbGVyeSA9PiB7XG4gICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT5cbiAgICAgICAgdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJnYWxsZXJ5XCIsIGFjdGlvbjogXCJlbnRlclwiIH0pXG4gICAgICApXG4gICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+XG4gICAgICAgIHRoaXMub25Ib3Zlcih7IHR5cGU6IFwiZ2FsbGVyeVwiLCBhY3Rpb246IFwibGVhdmVcIiB9KVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBlYWNoKGxpbmtJdGVtcywgbGluayA9PiB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4gdGhpcy5vbkhvdmVyKHsgdHlwZTogXCJsaW5rXCIsIGFjdGlvbjogXCJlbnRlclwiIH0pKVxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImxpbmtcIiwgYWN0aW9uOiBcImxlYXZlXCIgfSkpXG4gICAgfSlcblxuICAgIGhlcm8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImhlcm9cIiwgYWN0aW9uOiBcImVudGVyXCIgfSkpXG4gICAgaGVyby5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB0aGlzLm9uSG92ZXIoeyB0eXBlOiBcImhlcm9cIiwgYWN0aW9uOiBcImxlYXZlXCIgfSkpXG4gIH1cblxuICBoYW5kbGVDdXJzb3JNb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0gPSBldmVudFxuXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIGxlZnQ6IHgsXG4gICAgICB0b3A6IHksXG4gICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxuICAgIH0pXG4gIH1cblxuICBvbkhvdmVyKHsgdHlwZSwgYWN0aW9uIH0pIHtcbiAgICBjb25zdCBjb25maWdzID0ge1xuICAgICAgZ2FsbGVyeToge1xuICAgICAgICBlbnRlcjoge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMTJyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMnJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjJyZW1cIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEycmVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiRHJhZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIGxlYXZlOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbms6IHtcbiAgICAgICAgZW50ZXI6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjEycmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTJyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmJhZjUwXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxMnJlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIkdvXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGVhdmU6IHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjFyZW1cIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxcmVtXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJiYWY1MFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGV4dDogXCJcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGVybzoge1xuICAgICAgICBlbnRlcjoge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMXJlbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjFyZW1cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGxlYXZlOiB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxcmVtXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMXJlbVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyYmFmNTBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IFwiXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3NbdHlwZV1bYWN0aW9uXVxuXG4gICAgZ3NhcC50byh0aGlzLmN1cnNvciwge1xuICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgIC4uLmNvbmZpZy5zdHlsZXMsXG4gICAgICBlYXNlOiBTTU9PVEhcbiAgICB9KVxuXG4gICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gY29uZmlnLnRleHRcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzJkOTY1MzY5YTA2M2Y3YmI0NmJcIikiXSwibmFtZXMiOlsiZ3NhcCIsImVhY2giLCJTTU9PVEgiLCJDdXJzb3IiLCJjb25zdHJ1Y3RvciIsImN1cnNvciIsInRlbXBsYXRlIiwiaW5pdEV2ZW50cyIsImdhbGxlcnlJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmtJdGVtcyIsImhlcm8iLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkhvdmVyIiwidHlwZSIsImFjdGlvbiIsImxpbmsiLCJoYW5kbGVDdXJzb3JNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwieCIsImNsaWVudFkiLCJ5IiwidG8iLCJkdXJhdGlvbiIsImxlZnQiLCJ0b3AiLCJlYXNlIiwiY29uZmlncyIsImVudGVyIiwic3R5bGVzIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ0ZXh0IiwibGVhdmUiLCJib3JkZXIiLCJjb25maWciLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9